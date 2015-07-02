(ns ^:figwheel-always client.core
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [ajax.core :refer [GET POST]]))

(enable-console-print!)

(def app-state (.log js/console (type (GET "https://osf-api.herokuapp.com/"))))

; (atom
;   {:projects
;    [{:name "Test Project" :github-url "https://github.com/someUser/someRepo.git"}
;     {:name "Sample" :github-url "https://github.com/someUser/someOtherRepo.git"}]})

(defn project-view [project owner]
  (reify
    om/IRender
    (render [this]
      (dom/li nil (str (:name project) ", ")
        (dom/a #js {:href (:github-url project)} (:github-url project))))))

(defn projects-view [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (dom/h2 nil "Project list")
        (apply dom/ul nil
          (om/build-all project-view (seq data)))))))

(om/root projects-view app-state {:target (. js/document (getElementById "app"))})

(defn on-js-reload [])


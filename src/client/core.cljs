(ns ^:figwheel-always client.core
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [ajax.core :refer [GET POST]]))

(enable-console-print!)

(defn init-app [response]

    (defonce app-state response)

    (.log js/console (pr-str response))

    (defn project-view [project owner]
      (reify
        om/IRender
        (render [this]
          (dom/li nil (str (:name project) ", ")
            (dom/a #js {:href (:github-repo project)} (:githubRepo project))))))

    (defn projects-view [data owner]
      (reify
        om/IRender
        (render [this]
          (dom/div nil
            (dom/h2 nil "Project list")
            (apply dom/ul nil
              (om/build-all project-view data))))))

    (om/root projects-view app-state {:target (. js/document (getElementById "app"))}))

(GET "https://osf-api.herokuapp.com/project"
  {:handler init-app
   :response-format :json
   :keywords? true})

(defn on-js-reload [])


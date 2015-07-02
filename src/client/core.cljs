(ns ^:figwheel-always client.core
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [cljs-ajax :as http]))

(enable-console-print!)

(om/root
  (fn [data owner]
    (reify

      ;; Get initial state
      om/IInitState
      (init-state [_]
        {:text "Hello Bob!"})

      ;; Render
      om/IRenderState
      (render-state [_ state]
        (dom/h1 nil (:text state)))))

  state

  {:target (. js/document (getElementById "app"))})


(defn on-js-reload []
  ;; optionally touch your state to force rerendering depending on
  ;; your application
  ;; (swap! state update-in [:__figwheel_counter] inc)
)


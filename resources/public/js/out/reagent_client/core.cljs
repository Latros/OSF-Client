(ns reagent-client.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as sec :include-macros true]
              [goog.events :as events]
              [goog.history.EventType :as EventType])
    (:import goog.History))

;; -------------------------
;; API Fns

(defn submit-project [])

(defn retrieve-projects [])

;; -------------------------
;; Components

(defn navigation-component []
  [:div [:h1.page-title "OpenSourceFinder"]
   [:div.nav-wrapper
    [:a {:href "#/"} "Home"]
    [:a {:href "#/projects"} "Projects"]
    [:a {:href "#/submit"} "Submit"]]])

(defn submission-form-component []
  (let [form-data (atom {:project-name "Test" :github-repo-url "Test" :looking-for "Developers"})]
    [:div.new-project-form
     [:form
      [:div.form-group
       [:label "Project Name"]
       [:input {:type "text" :value (:project-name form-data)}]]
      [:div.form-group
       [:label "Github Repo URL"]
       [:input {:type "text" :value (:github-repo-url form-data)}]]
      [:div.form-group
       [:label "Our project is looking for..."]
       [:select {:value (:looking-for form-data)}
        [:option {:value "Developers"} "Developers"]
        [:option {:value "Documentors"} "Documentors"]
        [:option {:value "Testers"} "Testers"]
        [:option {:value "Any help we can get"} "Any help we can get"]]]
      [:button {:type "submit" :on-click submit-project} "Submit for approval"]]]))

(defn return-to-home-component []
  [:div.return-to-home
   [:a {:href "#/"} "Return to home"]])

;; -------------------------
;; Page Components

(defn home-page-component []
  [:div
   [:div]])

(defn projects-page-component []
  [:div [:h2 "Projects page"]
   [:div [:a {:href "#/"} "Return to home"]]])

(defn project-page-component []
  [:div
   (return-to-home-component)])

(defn submission-page-component []
  [:div
   (submission-form-component)
   (return-to-home-component)])

;; -------------------------
;; Page Wrapper Util Components

(defn current-page []
  [:div
   [(session/get :current-page)]])

(defn layout-component []
  [:div
   [:div (navigation-component)]
   [:div (current-page)]])

;; -------------------------
;; Routes

(sec/set-config! :prefix "#")

(sec/defroute "/" []
  (session/put! :current-page #'home-page-component))

(sec/defroute "/projects" []
  (session/put! :current-page #'project-page-component))

(sec/defroute "/submit" []
  (session/put! :current-page #'submission-page-component))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (sec/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn mount-root []
  (reagent/render
    [layout-component]
    (.getElementById js/document "app")))

(defn init! []
  (hook-browser-navigation!)
  (mount-root))
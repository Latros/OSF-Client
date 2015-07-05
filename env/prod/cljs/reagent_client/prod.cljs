(ns reagent-client.prod
  (:require [reagent-client.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)

(ns app.views
  (:require
    [app.state :refer [app-state]]
    [app.events :refer [increment decrement]]
    ["/material-dashboard-react/components/Card/Card" :default mui-card]
    ["/material-dashboard-react/components/CustomButtons/Button" :default mui-button]))

(defn header
  []
  [:div
   [:h1 "A template for reagent apps"]
   [:> mui-card
    [:> mui-button {:color "success"} "hello world"]]])

(defn counter
  []
  [:div
   [:button.btn {:on-click #(decrement %)} "-"]
   [:button {:disabled true} (get @app-state :count)]
   [:button.btn {:on-click #(increment %)} "+"]])

(defn app []
  [:div
   [header]
   [counter]])

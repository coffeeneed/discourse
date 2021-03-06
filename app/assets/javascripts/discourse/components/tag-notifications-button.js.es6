import NotificationOptionsComponent from "discourse/components/notifications-button";
import { observes } from "ember-addons/ember-computed-decorators";
import computed from "ember-addons/ember-computed-decorators";
import { iconHTML } from "discourse-common/lib/icon-library";

export default NotificationOptionsComponent.extend({
  classNames: ["tag-notifications-button"],

  i18nPrefix: "tagging.notifications",

  @observes("value")
  _notificationLevelChanged() {
    this.sendAction("action", this.get("value"));
  },

  @computed("value")
  icon() {
    return `${this._super()}${iconHTML("caret-down")}`.htmlSafe();
  },

  generatedHeadertext: null
});

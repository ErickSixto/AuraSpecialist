({
  doInit: function (component) {
    var action = component.get("c.getBoatTypes");

    var createRecordEvent = $A.get("e.force:createRecord");

    if (createRecordEvent) {
      component.set("v.isCreateRecordSupported", true);
    } else {
      component.set("v.isCreateRecordSupported", false);
    }

    action.setCallback(this, function (response) {
      var state = response.getState();

      if (state === "SUCCESS") {
        var result = response.getReturnValue();

        component.set("v.boatTypes", result);
      }
    });
    $A.enqueueAction(action);
  }
});

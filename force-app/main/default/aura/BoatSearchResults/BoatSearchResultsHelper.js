({
  onSearch: function (component) {
    var boatTypeId = component.get("v.boatTypeId");

    var action = component.get("c.getBoats");

    action.setParams({ boatTypeId: boatTypeId });

    action.setCallback(this, function (response) {
      var state = response.getState();

      if (state === "SUCCESS") {
        var boats = response.getReturnValue();

        component.set("v.boats", boats);
      }
    });
    $A.enqueueAction(action);
  }
});
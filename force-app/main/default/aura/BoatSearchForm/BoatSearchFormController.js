({
  doInit: function (component) {
    var action = component.get("c.getBoatTypes");

    var createRecordEvent = $A.get("event.force:createRecord");

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
  },

  boatTypeChange: function (component, event) {
    var boatType = event.getSource().get("v.value");

    component.set("v.boatType", boatType);
  },

  onFormSubmit: function (component) {
    var boatTypeId = component.get("v.boatType");
    var params = { formData: { boatTypeId: boatTypeId } };

    var formSubmit = component.getEvent("formsubmit");

    formSubmit.setParams(params);
    formSubmit.fire();
  },

  newBtnClick: function (component) {
    var createRecordEvent = $A.get("event.force.createRecord");

    if (createRecordEvent) {
      var params = { entityApiName: "Boat__c" };

      var boatType = component.get("v.boatType");

      if (boatType) {
        params.defaultFieldValues = { BoatType__c: boatType };
        createRecordEvent.fire();
      }
    }
  }
});

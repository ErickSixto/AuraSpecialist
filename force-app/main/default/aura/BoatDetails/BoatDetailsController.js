({
  onBoatSelected: function (component, event) {
    var boat = event.getParam("boat");

    component.set("v.id", boat.Id);

    component.find("service").reloadRecord();
  },
  onRecordUpdated: function (component, event) {}
});

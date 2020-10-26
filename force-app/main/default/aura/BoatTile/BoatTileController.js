({
  onBoatClick: function (component) {
    var boat = component.get("v.boat");

    if (boat && boat.Id) {
      var boatselect = component.getEvent("boatselect");

      boatselect.setParams({ boatId: boat.Id });

      boatselect.fire();
    }
  }
});

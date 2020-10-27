({
  onBoatClick: function (component) {
    var boat = component.get("v.boat");

    if (boat && boat.Id) {
      var boatSelect = component.getEvent("boatselect");

      boatSelect.setParams({ boatId: boat.Id });
      boatSelect.fire();

      var boatSelected = $A.get("e.c:boatselected");

      boatSelected.setParams({ boat: boat });
      boatSelected.fire();
    }
  }
});

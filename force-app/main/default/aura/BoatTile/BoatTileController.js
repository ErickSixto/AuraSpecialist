({
  onBoatClick: function (component) {
    var boat = component.get("v.boat");

    if (boat && boat.Id) {
      var boatSelect = component.getEvent("boatselect");

      boatSelect.setParams({ boatId: boat.Id });
      boatSelect.fire();

      var boatSelected = $A.get("e.c:BoatSelected");

      boatSelected.setParams({ boat: boat });
      boatSelected.fire();

      var plotMapMarkerEvent = $A.get("e.c:plotMapMarker");

      plotMapMarkerEvent.setParams({
        sObjectId: boat.Id,

        lat: boat.Geolocation__Latitude__s,

        long: boat.Geolocation__Longitude__s,

        label: boat.Name
      });

      plotMapMarkerEvent.fire();
    }
  }
});

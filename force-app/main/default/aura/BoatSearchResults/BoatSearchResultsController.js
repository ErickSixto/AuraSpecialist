({
  doInit: function (component, event, helper) {
    helper.onSearch(component);
  },

  doSearch: function (component, event, helper) {
    var params = event.getParam("arguments");

    if (params) {
      component.set("v.boatTypeId", params.boatTypeId);
      helper.onSearch(component, event, helper);
    }
  },
  onBoatSelect: function (component, event) {
    var boatId = event.getParam("boatId");

    component.set("v.selectedBoatId", boatId);
  }
});

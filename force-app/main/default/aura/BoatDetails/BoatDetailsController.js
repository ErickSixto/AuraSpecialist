({
  onBoatSelected: function (component, event) {
    var boat = event.getParam("boat");

    component.set("v.id", boat.Id);

    component.find("service").reloadRecord();
  },
  onRecordUpdated: function (component, event) {},

  onBoatReviewAdded: function (component, event, helper) {
    var reviews = component.find("reviews");

    if (reviews) {
      reviews.refresh();
    }

    component.find("tabs").set("v.selectedTabId", "boatreviewtab");
  }
});
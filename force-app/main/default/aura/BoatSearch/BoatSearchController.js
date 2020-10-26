({
  onFormSubmit: function (component, event) {
    var params = event.getParam("formData");

    var searchResults = component.find("searchResults");

    if (searchResults) {
      searchResults.search(params.boatTypeId);
    }
  }
});

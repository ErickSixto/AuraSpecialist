public with sharing class BoatReviews {
  @AuraEnabled
  public static List<BoatReview__c> getAll(Id boatId) {
    List<BoatReview__c> boatReviews = new List<BoatReview__c>();
    try {
      boatReviews = [
        SELECT
          Boat__c,
          Comment__c,
          CreatedBy.Name,
          CreatedBy.SmallPhotoUrl,
          CreatedBy.CompanyName,
          Id,
          LastModifiedDate,
          Name,
          Rating__c
        FROM BoatReview__c
        WHERE Boat__c = :boatId
        ORDER BY CreatedDate DESC
      ];
      return boatReviews;
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}

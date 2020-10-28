public with sharing class BoatSearchResults {
  @AuraEnabled
  public static List<Boat__c> getBoats(String boatTypeId) {
    Boat__c[] boats = new List<Boat__c>();
    try {
      if (boatTypeId != null && boatTypeId.length() > 0) {
        boats = [
          SELECT Id, Name, Picture__c, Geolocation__latitude__s, Geolocation__longitude__s
          FROM Boat__c
          WHERE BoatType__c = :boatTypeId
          WITH SECURITY_ENFORCED
          ORDER BY Name ASC
        ];
      } else {
        boats = [
          SELECT Id, Name, Picture__c, Geolocation__latitude__s, Geolocation__longitude__s
          FROM Boat__c
          WITH SECURITY_ENFORCED
          ORDER BY Name ASC
        ];
      }
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }

    return boats;
  }
}

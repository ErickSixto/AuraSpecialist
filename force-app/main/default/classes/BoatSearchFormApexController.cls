public with sharing class BoatSearchFormApexController {
  @AuraEnabled
  public static BoatType__c[] getBoatTypes() {
    BoatType__c[] boatTypes = new List<BoatType__c>();

    boatTypes = [SELECT Id, Name FROM BoatType__c];

    return boatTypes;
  }
}

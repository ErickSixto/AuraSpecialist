public with sharing class BoatSearchFormApexController {
  
    @AuraEnabled
    public static String[] getBoatTypes(){
        String[] boatTypeNames = new List<String>();
   
        BoatType__c[] boatTypes = [SELECT Name FROM BoatType__c];
        for(BoatType__c boatType: boatTypes){
            boatTypeNames.add(boatType.Name);
        }
        return boatTypeNames;
    }
}

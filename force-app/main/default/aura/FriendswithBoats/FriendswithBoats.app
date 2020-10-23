<aura:application>
  <lightning:layout>
    <lightning:layoutItem size="8">
      <lightning:card title="Find a Boat" iconName="standard:search">
        <c:BoatSearchForm />
      </lightning:card>
      <lightning:card title="Matching Boats">
        <c:BoatSearchResults />
      </lightning:card>
    </lightning:layoutItem>
    <lightning:layoutItem size="4"> </lightning:layoutItem>
  </lightning:layout>
</aura:application>

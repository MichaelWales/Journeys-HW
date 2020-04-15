const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeyStartLocations = this.journeys.map((journey) => {
    return journey.startLocation;
  })
  return journeyStartLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const journeyEndLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  })
  return journeyEndLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const foundJourneys = this.journeys.filter(journey => journey.transport === transport);
  return foundJourneys;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const minDistJourneys = this.journeys.filter(journey => journey.distance >= 1000);
  return minDistJourneys;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;

//
// livinglots.boundaries.js
//
// Add boundary-handling to a Leaflet map
//

L.Map.include({
    boundariesLayer: null,

    _initBoundaries: function () {
        this.boundariesLayer = L.geoJson(null, {
            color: '#FFA813',
            fill: false,
            opacity: 1
        }).addTo(this);
    },

    removeBoundaries: function (data, options) {
        this.boundariesLayer.clearLayers();
        this.fire('boundarieschange');
    },

    updateBoundaries: function (data, options) {
        this.boundariesLayer.clearLayers();
        this.boundariesLayer.addData(data);
        this.fire('boundarieschange');
        if (options.zoomToBounds) {
            this.fitBounds(this.boundariesLayer.getBounds());
        }
    }

});

L.Map.addInitHook('_initBoundaries');

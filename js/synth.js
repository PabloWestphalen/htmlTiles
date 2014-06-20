/**
 * Created by Pablo on 20/06/2014.
 */
/*
http://flippinawesome.org/2013/10/28/audio-synthesis-in-javascript/
 */

var Synth = function() {
    this.context = new window.webkitAudioContext();
};

Synth.prototype.notes = [65, 69, 73, 77, 82, 87, 92, 97, 103, 110, 116, 123];

Synth.prototype.playSound = function(freq, duration, ctx, osc) {
    var context = ctx ? ctx : this.context;
    var oscilator = osc ? osc : this.context.createOscillator();
    oscilator.frequency.value = freq;
    oscilator.connect(this.context.destination);
    oscilator.start(0);
    setTimeout(function() {
        oscilator.stop(0);
    }, duration);
}

Synth.prototype.randomNote = function(octave) {
    var multiplier = octave ? octave : 1;
    return this.notes[Math.round(Math.random() * (synth.notes.length -1))] * multiplier;
}

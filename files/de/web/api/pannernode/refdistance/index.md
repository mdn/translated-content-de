---
title: "PannerNode: refDistance-Eigenschaft"
short-title: refDistance
slug: Web/API/PannerNode/refDistance
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ APIRef("Web Audio API") }}

Die `refDistance`-Eigenschaft des [`PannerNode`](/de/docs/Web/API/PannerNode)-Interfaces ist ein Doppelwert, der die Referenzdistanz zur Reduzierung der Lautstärke angibt, wenn sich die Audioquelle weiter vom Zuhörer entfernt – also die Distanz, bei der die Lautstärkereduzierung wirksam wird. Dieser Wert wird von allen Distanzmodellen verwendet.

Der Standardwert der `refDistance`-Eigenschaft ist `1`.

## Wert

Eine nicht-negative Zahl. Wenn der Wert auf weniger als 0 gesetzt wird, wird ein {{jsxref("RangeError")}} ausgelöst.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Eigenschaft ein Wert zugewiesen wurde, der außerhalb des akzeptierten Bereichs liegt.

## Beispiele

Dieses Beispiel demonstriert, wie sich unterschiedliche Werte von `refDistance` darauf auswirken, wie die Lautstärke eines Tons abnimmt, wenn er sich vom Zuhörer entfernt. Im Gegensatz zu [`rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor) verzögert sich bei Änderung dieses Wertes auch die Lautstärkeabnahme, bis sich der Ton über den Referenzpunkt hinaus bewegt.

```js
const context = new AudioContext();
// all our test tones will last this many seconds
const NOTE_LENGTH = 6;
// this is how far we'll move the sound
const Z_DISTANCE = 20;

// this function creates a graph for the test tone with a given refDistance
// and schedules it to move away from the listener along the Z (depth-wise) axis
// at the given start time, resulting in a decrease in volume (decay)
const scheduleTestTone = (refDistance, startTime) => {
  const osc = new OscillatorNode(context);

  const panner = new PannerNode(context);
  panner.refDistance = refDistance;

  // set the initial Z position, then schedule the ramp
  panner.positionZ.setValueAtTime(0, startTime);
  panner.positionZ.linearRampToValueAtTime(Z_DISTANCE, startTime + NOTE_LENGTH);

  osc.connect(panner).connect(context.destination);

  osc.start(startTime);
  osc.stop(startTime + NOTE_LENGTH);
};

// this tone should decay immediately and fairly quickly
scheduleTestTone(1, context.currentTime);
// this tone should decay slower and later than the previous one
scheduleTestTone(4, context.currentTime + NOTE_LENGTH);
// this tone should decay only slightly, and only start decaying fairly late
scheduleTestTone(7, context.currentTime + NOTE_LENGTH * 2);
```

Nach der Ausführung dieses Codes sollten die resultierenden Wellenformen in etwa so aussehen:

![Eine Wellenformvisualisierung von drei Oszillatortönen, die in Web Audio erzeugt werden. Jeder Oszillator bewegt sich mit derselben Geschwindigkeit vom Zuhörer weg, jedoch mit unterschiedlichen refDistances, die die resultierende Lautstärkeabnahme beeinflussen.](screen_shot_2018-10-11_at_23.14.32.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Raumklanggestaltung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)

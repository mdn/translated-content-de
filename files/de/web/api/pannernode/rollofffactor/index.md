---
title: "PannerNode: rolloffFactor-Eigenschaft"
short-title: rolloffFactor
slug: Web/API/PannerNode/rolloffFactor
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{ APIRef("Web Audio API") }}

Die `rolloffFactor`-Eigenschaft der [`PannerNode`](/de/docs/Web/API/PannerNode)-Schnittstelle ist ein Doppelwert, der beschreibt, wie schnell die Lautstärke verringert wird, wenn sich die Quelle vom Zuhörer entfernt. Dieser Wert wird von allen Distanzmodellen verwendet. Der Standardwert der `rolloffFactor`-Eigenschaft ist `1`.

## Wert

Eine Zahl, deren Bereich je nach [`distanceModel`](/de/docs/Web/API/PannerNode/distanceModel) des Panners wie folgt variiert (negative Werte sind nicht erlaubt):

- `"linear"`
  - : Der Bereich liegt zwischen 0 und 1.
- `"inverse"`
  - : Der Bereich liegt zwischen 0 und `Infinity`.
- `"exponential"`
  - : Der Bereich liegt zwischen 0 und `Infinity`.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Eigenschaft ein Wert zugewiesen wurde, der außerhalb des akzeptierten Bereichs liegt.

## Beispiele

Dieses Beispiel zeigt, wie verschiedene `rolloffFactor`-Werte beeinflussen, wie die Lautstärke des Testtons mit zunehmendem Abstand zum Zuhörer abnimmt:

```js
const context = new AudioContext();
// all our test tones will last this many seconds
const NOTE_LENGTH = 4;
// this is how far we'll move the sound
const Z_DISTANCE = 20;

// this function creates a graph for the test tone with a given rolloffFactor
// and schedules it to move away from the listener along the Z (depth-wise) axis
// at the given start time, resulting in a decrease in volume (decay)
const scheduleTestTone = (rolloffFactor, startTime) => {
  const osc = new OscillatorNode(context);

  const panner = new PannerNode(context);
  panner.rolloffFactor = rolloffFactor;

  // set the initial Z position, then schedule the ramp
  panner.positionZ.setValueAtTime(0, startTime);
  panner.positionZ.linearRampToValueAtTime(Z_DISTANCE, startTime + NOTE_LENGTH);

  osc.connect(panner).connect(context.destination);

  osc.start(startTime);
  osc.stop(startTime + NOTE_LENGTH);
};

// this tone should decay fairly quickly
scheduleTestTone(1, context.currentTime);
// this tone should decay slower than the previous one
scheduleTestTone(0.5, context.currentTime + NOTE_LENGTH);
// this tone should decay only slightly
scheduleTestTone(0.1, context.currentTime + NOTE_LENGTH * 2);
```

Nach dem Ausführen dieses Codes sollten die resultierenden Wellenformen in etwa so aussehen:

![Eine Wellenformvisualisierung von drei Oszillatortönen, die in Web Audio erzeugt werden. Jeder Oszillator bewegt sich mit der gleichen Geschwindigkeit vom Zuhörer weg, aber mit unterschiedlichen rolloffFactors, die den resultierenden Lautstärkeabfall beeinflussen.](screen_shot_2018-10-11_at_23.22.37.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)

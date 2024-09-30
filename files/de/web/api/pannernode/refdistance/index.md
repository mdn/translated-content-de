---
title: "PannerNode: refDistance-Eigenschaft"
short-title: refDistance
slug: Web/API/PannerNode/refDistance
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die `refDistance`-Eigenschaft des [`PannerNode`](/de/docs/Web/API/PannerNode)-Interfaces ist ein Gleitkommawert, der die Referenzdistanz zur Reduzierung der Lautstärke darstellt, wenn sich die Audioquelle weiter vom Zuhörer entfernt – d.h. die Entfernung, bei der die Reduzierung der Lautstärke beginnt. Dieser Wert wird von allen Distanzmodellen verwendet.

Der Standardwert der `refDistance`-Eigenschaft ist `1`.

## Wert

Eine nicht-negative Zahl. Wenn der Wert auf weniger als 0 gesetzt wird, wird ein {{jsxref("RangeError")}} ausgelöst.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Eigenschaft ein Wert zugewiesen wurde, der außerhalb des akzeptierten Bereichs liegt.

## Beispiele

Dieses Beispiel zeigt, wie unterschiedliche Werte von `refDistance` beeinflussen, wie die Lautstärke eines Tons abnimmt, wenn er sich vom Zuhörer entfernt. Im Gegensatz zum [`rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor) verzögert das Ändern dieses Wertes auch das Abklingen der Lautstärke, bis der Ton den Referenzpunkt überschreitet.

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

Nach Ausführung dieses Codes sollten die resultierenden Wellenformen etwa so aussehen:

![Eine Wellenform-Visualisierung von drei Oszillatortönen, die in Web Audio erzeugt wurden. Jeder Oszillator entfernt sich mit der gleichen Geschwindigkeit vom Zuhörer, aber mit unterschiedlichen refDistances, die den resultierenden Lautstärkeabfall beeinflussen.](screen_shot_2018-10-11_at_23.14.32.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)

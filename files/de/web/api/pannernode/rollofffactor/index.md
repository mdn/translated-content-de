---
title: "PannerNode: rolloffFactor-Eigenschaft"
short-title: rolloffFactor
slug: Web/API/PannerNode/rolloffFactor
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die `rolloffFactor`-Eigenschaft der {{ domxref("PannerNode") }}-Schnittstelle ist ein Double-Wert, der beschreibt, wie schnell die Lautstärke reduziert wird, wenn sich die Quelle vom Zuhörer entfernt. Dieser Wert wird von allen Distanzmodellen verwendet. Der Standardwert der `rolloffFactor`-Eigenschaft ist `1`.

## Wert

Eine Zahl, deren Bereich vom {{ domxref("PannerNode.distanceModel", "distanceModel") }} des Panners wie folgt abhängt (negative Werte sind nicht erlaubt):

- "`linear`"
  - : Der Bereich ist 0 bis 1.
- "`inverse`"
  - : Der Bereich ist 0 bis `Infinity`.
- "`exponential`"
  - : Der Bereich ist 0 bis `Infinity`.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Eigenschaft ein Wert zugewiesen wurde, der außerhalb des akzeptierten Bereichs liegt.

## Beispiele

Dieses Beispiel zeigt, wie unterschiedliche `rolloffFactor`-Werte beeinflussen, wie sich die Lautstärke des Testtons mit zunehmender Entfernung vom Zuhörer verringert:

```js
const context = new AudioContext();
// all unsere Testtöne werden so viele Sekunden dauern
const NOTE_LENGTH = 4;
// so weit werden wir den Klang bewegen
const Z_DISTANCE = 20;

// diese Funktion erstellt ein Diagramm für den Testton mit einem gegebenen rolloffFactor
// und plant, es entlang der Z-Achse (tiefenweise) vom Zuhörer weg zu bewegen
// zum gegebenen Startzeitpunkt, was zu einer Lautstärkenabnahme (Abklingen) führt
const scheduleTestTone = (rolloffFactor, startTime) => {
  const osc = new OscillatorNode(context);

  const panner = new PannerNode(context);
  panner.rolloffFactor = rolloffFactor;

  // setze die initiale Z-Position und plane dann die Ramp
  panner.positionZ.setValueAtTime(0, startTime);
  panner.positionZ.linearRampToValueAtTime(Z_DISTANCE, startTime + NOTE_LENGTH);

  osc.connect(panner).connect(context.destination);

  osc.start(startTime);
  osc.stop(startTime + NOTE_LENGTH);
};

// dieser Ton sollte ziemlich schnell abklingen
scheduleTestTone(1, context.currentTime);
// dieser Ton sollte langsamer abklingen als der vorherige
scheduleTestTone(0.5, context.currentTime + NOTE_LENGTH);
// dieser Ton sollte nur leicht abklingen
scheduleTestTone(0.1, context.currentTime + NOTE_LENGTH * 2);
```

Nach der Ausführung dieses Codes sollten die resultierenden Wellenformen etwa so aussehen:

![Eine Wellenformdarstellung von drei Oszillatortönen, die im Web Audio erzeugt wurden. Jeder Oszillator bewegt sich mit der gleichen Geschwindigkeit vom Zuhörer weg, aber mit unterschiedlichen rolloffFactors, die das resultierende Lautstärkeabklingen beeinflussen.](screen_shot_2018-10-11_at_23.22.37.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Raumklangverarbeitung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)

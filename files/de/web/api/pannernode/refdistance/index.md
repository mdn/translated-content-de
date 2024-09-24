---
title: "PannerNode: refDistance-Eigenschaft"
short-title: refDistance
slug: Web/API/PannerNode/refDistance
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die `refDistance`-Eigenschaft des {{ domxref("PannerNode") }} Interface ist ein Fließkommawert, der die Referenzentfernung für die Reduzierung der Lautstärke darstellt, wenn sich die Audioquelle vom Hörer entfernt – also die Entfernung, bei der die Lautstärkereduzierung wirksam wird. Dieser Wert wird von allen Distanzmodellen verwendet.

Der Standardwert der `refDistance`-Eigenschaft ist `1`.

## Wert

Eine nicht-negative Zahl. Wenn der Wert auf weniger als 0 gesetzt wird, wird ein {{jsxref("RangeError")}} ausgelöst.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Eigenschaft ein Wert zugewiesen wurde, der außerhalb des akzeptierten Bereichs liegt.

## Beispiele

Dieses Beispiel demonstriert, wie unterschiedliche Werte von `refDistance` beeinflussen, wie die Lautstärke eines Tons abnimmt, während er sich vom Hörer entfernt. Im Gegensatz zu {{ domxref("PannerNode.rolloffFactor", "rolloffFactor") }} verzögert die Änderung dieses Wertes auch das Abklingen der Lautstärke, bis der Ton den Referenzpunkt überschreitet.

```js
const context = new AudioContext();
// alle unsere Testtöne dauern so viele Sekunden
const NOTE_LENGTH = 6;
// so weit werden wir den Ton bewegen
const Z_DISTANCE = 20;

// diese Funktion erstellt ein Graph für den Testton mit einem gegebenen refDistance
// und plant, ihn entlang der Z-Achse (in die Tiefe) vom Hörer weg zu bewegen
// zum angegebenen Startzeitpunkt, was zu einer Abnahme der Lautstärke (Decay) führt
const scheduleTestTone = (refDistance, startTime) => {
  const osc = new OscillatorNode(context);

  const panner = new PannerNode(context);
  panner.refDistance = refDistance;

  // setze die anfängliche Z-Position und plane dann die Rampe
  panner.positionZ.setValueAtTime(0, startTime);
  panner.positionZ.linearRampToValueAtTime(Z_DISTANCE, startTime + NOTE_LENGTH);

  osc.connect(panner).connect(context.destination);

  osc.start(startTime);
  osc.stop(startTime + NOTE_LENGTH);
};

// dieser Ton sollte sofort und ziemlich schnell abklingen
scheduleTestTone(1, context.currentTime);
// dieser Ton sollte langsamer und später als der vorherige abklingen
scheduleTestTone(4, context.currentTime + NOTE_LENGTH);
// dieser Ton sollte nur leicht abklingen und erst ziemlich spät damit beginnen
scheduleTestTone(7, context.currentTime + NOTE_LENGTH * 2);
```

Nach dem Ausführen dieses Codes sollten die resultierenden Wellenformen folgendermaßen aussehen:

![Eine Wellenformvisualisierung von drei Oszillatortönen, die mit Web Audio erzeugt wurden. Jeder Oszillator entfernt sich mit derselben Geschwindigkeit vom Hörer, aber mit unterschiedlichen refDistances, die den resultierenden Lautstärkeabfall beeinflussen.](screen_shot_2018-10-11_at_23.14.32.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Raumklangverarbeitung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)

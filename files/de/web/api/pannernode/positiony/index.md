---
title: "PannerNode: positionY-Eigenschaft"
short-title: positionY
slug: Web/API/PannerNode/positionY
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die **`positionY`**-Eigenschaft der [`PannerNode`](/de/docs/Web/API/PannerNode)-Schnittstelle spezifiziert die Y-Koordinate der Position der Audioquelle in 3D-Kartesischen Koordinaten, entsprechend der _vertikalen_ Achse (oben-unten). Der vollständige Vektor wird durch die Position der Audioquelle definiert, angegeben als ([`positionX`](/de/docs/Web/API/PannerNode/positionX), `positionY`, [`positionZ`](/de/docs/Web/API/PannerNode/positionZ)), und die Orientierung der Audioquelle (das heißt, die Richtung, in die sie zeigt), angegeben als ([`orientationX`](/de/docs/Web/API/PannerNode/orientationX), [`orientationY`](/de/docs/Web/API/PannerNode/orientationY), [`orientationZ`](/de/docs/Web/API/PannerNode/orientationZ)).

Abhängig von der Direktionalität des Klangs (wie durch die Attribute [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle), [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) und [`codeOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) spezifiziert), kann die Orientierung des Klangs das wahrgenommene Volumen des Klangs beim Abspielen verändern. Wenn der Klang auf den Hörer zeigt, ist er lauter, als wenn er vom Hörer wegzeigt.

Das in dieser Eigenschaft enthaltene [`AudioParam`](/de/docs/Web/API/AudioParam) ist schreibgeschützt; dennoch können Sie den Parameterwert ändern, indem Sie der [`AudioParam.value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft einen neuen Wert zuweisen.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam), dessen `value` die Y-Koordinate der Position der Audioquelle in 3D-Kartesischen Koordinaten ist.

## Beispiele

Im folgenden Beispiel startet ein Oszillator, der nach einer Sekunde über den Hörer schwenkt, nach zwei Sekunden unter den Hörer und nach drei Sekunden wieder zur Mitte zurückkehrt. Beachten Sie, dass in diesem Fall die Änderung hauptsächlich das Timbre des Oszillators betrifft, da es sich um eine einfache Mono-Welle handelt.

```js
const context = new AudioContext();

const osc = new OscillatorNode(context);
const panner = new PannerNode(context);
panner.panningModel = "HRTF";

panner.positionY.setValueAtTime(1, context.currentTime + 1);
panner.positionY.setValueAtTime(-1, context.currentTime + 2);
panner.positionY.setValueAtTime(0, context.currentTime + 3);

osc.connect(panner).connect(context.destination);

osc.start(0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Spatialisation](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [`PannerNode`](/de/docs/Web/API/PannerNode)

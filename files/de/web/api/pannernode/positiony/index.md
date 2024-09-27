---
title: "PannerNode: positionY-Eigenschaft"
short-title: positionY
slug: Web/API/PannerNode/positionY
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die **`positionY`**-Eigenschaft des [`PannerNode`](/de/docs/Web/API/PannerNode)-Interfaces legt die Y-Koordinate der Position der Audioquelle in 3D-Kartesischen Koordinaten fest, entsprechend der _vertikalen_ Achse (oben-unten). Der vollständige Vektor wird durch die Position der Audioquelle definiert, angegeben als ([`positionX`](/de/docs/Web/API/PannerNode/positionX), `positionY`, [`positionZ`](/de/docs/Web/API/PannerNode/positionZ)), und die Ausrichtung der Audioquelle (d.h. die Richtung, in die sie zeigt), angegeben als ([`orientationX`](/de/docs/Web/API/PannerNode/orientationX), [`orientationY`](/de/docs/Web/API/PannerNode/orientationY), [`orientationZ`](/de/docs/Web/API/PannerNode/orientationZ)).

Je nach der Direktionalität des Sounds (wie mit den Attributen [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle), [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) und [`codeOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) angegeben), kann die Ausrichtung des Klangs das wahrgenommene Volumen des Sounds beeinflussen, während er abgespielt wird. Wenn der Klang auf den Hörer gerichtet ist, wird er lauter sein als wenn der Klang vom Hörer wegzeigt.

Das in dieser Eigenschaft enthaltene [`AudioParam`](/de/docs/Web/API/AudioParam) ist schreibgeschützt; Sie können jedoch den Wert des Parameters ändern, indem Sie einen neuen Wert seinem [`AudioParam.value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft zuweisen.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam), dessen `value` die Y-Koordinate der Position der Audioquelle in 3D-Kartesischen Koordinaten ist.

## Beispiele

Das folgende Beispiel startet einen Oszillator und verschiebt ihn nach 1 Sekunde über den Hörer, nach 2 Sekunden unter den Hörer und nach 3 Sekunden zurück in die Mitte. Beachten Sie, dass in diesem Fall die Änderung hauptsächlich den Klangcharakter des Oszillators beeinflusst, da es sich um eine einfache Mono-Welle handelt.

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
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [`PannerNode`](/de/docs/Web/API/PannerNode)

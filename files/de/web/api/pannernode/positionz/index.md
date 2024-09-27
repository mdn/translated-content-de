---
title: "PannerNode: positionZ-Eigenschaft"
short-title: positionZ
slug: Web/API/PannerNode/positionZ
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die **`positionZ`**-Eigenschaft der [`PannerNode`](/de/docs/Web/API/PannerNode)-Schnittstelle gibt die Z-Koordinate der Position der Audioquelle in 3D-Kartesischen Koordinaten an, die der _Tiefenachse_ entspricht (hinter-vor dem Zuhörer). Der vollständige Vektor wird durch die Position der Audioquelle definiert, angegeben als ([`positionX`](/de/docs/Web/API/PannerNode/positionX), [`positionY`](/de/docs/Web/API/PannerNode/positionY), `positionZ`), und die Orientierung der Audioquelle (d. h. die Richtung, in die sie schaut), angegeben als ([`orientationX`](/de/docs/Web/API/PannerNode/orientationX), [`orientationY`](/de/docs/Web/API/PannerNode/orientationY), [`orientationZ`](/de/docs/Web/API/PannerNode/orientationZ)).

Abhängig von der Direktionalität des Klangs (wie mit den Attributen [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle), [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle), und [`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) angegeben), kann die Orientierung des Klangs das wahrgenommene Volumen des Klangs während der Wiedergabe verändern. Wenn der Klang auf den Zuhörer gerichtet ist, wird er lauter sein als wenn der Klang vom Zuhörer weg gerichtet ist.

Das von dieser Eigenschaft enthaltene [`AudioParam`](/de/docs/Web/API/AudioParam) ist schreibgeschützt; Sie können den Wert des Parameters jedoch trotzdem ändern, indem Sie der [`AudioParam.value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft einen neuen Wert zuweisen.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam), dessen `value` die Z-Koordinate der Position der Audioquelle in 3D-Kartesischen Koordinaten ist.

## Beispiele

Das folgende Beispiel startet einen Oszillator und bewegt ihn nach 1 Sekunde vor den Zuhörer, nach 2 Sekunden hinter den Zuhörer und nach 3 Sekunden zurück zur Position des Zuhörers. Beachten Sie, dass in diesem Fall die Änderung hauptsächlich das Timbre und die wahrgenommene Lautstärke des Klangs beeinflussen wird.

```js
const context = new AudioContext();

const osc = new OscillatorNode(context);
const panner = new PannerNode(context);
panner.panningModel = "HRTF";

panner.positionZ.setValueAtTime(1, context.currentTime + 1);
panner.positionZ.setValueAtTime(-1, context.currentTime + 2);
panner.positionZ.setValueAtTime(0, context.currentTime + 3);

osc.connect(panner).connect(context.destination);

osc.start(0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Raumklangverarbeitung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [`PannerNode`](/de/docs/Web/API/PannerNode)

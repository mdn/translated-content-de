---
title: "PannerNode: Eigenschaft positionZ"
short-title: positionZ
slug: Web/API/PannerNode/positionZ
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die **`positionZ`**-Eigenschaft der [`PannerNode`](/de/docs/Web/API/PannerNode)-Schnittstelle gibt die Z-Koordinate der Position der Audioquelle in 3D-Kartesischen Koordinaten an, was der _Tiefenachse_ (hinter- vor dem Zuhörer) entspricht. Der gesamte Vektor wird durch die Position der Audioquelle definiert, angegeben als ([`positionX`](/de/docs/Web/API/PannerNode/positionX), [`positionY`](/de/docs/Web/API/PannerNode/positionY), `positionZ`) und die Orientierung der Audioquelle (d.h. die Richtung, in die sie zeigt), angegeben als ([`orientationX`](/de/docs/Web/API/PannerNode/orientationX), [`orientationY`](/de/docs/Web/API/PannerNode/orientationY), [`orientationZ`](/de/docs/Web/API/PannerNode/orientationZ)).

Abhängig von der Richtwirkung des Sounds (wie durch die Attribute [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle), [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) und [`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) angegeben), kann die Ausrichtung des Sounds die wahrgenommene Lautstärke beeinflussen, während er abgespielt wird. Wenn der Sound auf den Zuhörer gerichtet ist, wird er lauter sein, als wenn der Sound vom Zuhörer weg zeigt.

Das [`AudioParam`](/de/docs/Web/API/AudioParam), das durch diese Eigenschaft enthalten ist, ist schreibgeschützt; Sie können jedoch den Wert des Parameters ändern, indem Sie der [`AudioParam.value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft einen neuen Wert zuweisen.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam), dessen `value` die Z-Koordinate der Position der Audioquelle in 3D-Kartesischen Koordinaten ist.

## Beispiele

Das folgende Beispiel startet einen Oszillator und bewegt ihn nach 1 Sekunde vor den Zuhörer, nach 2 Sekunden hinter den Zuhörer und nach 3 Sekunden wieder an die Position des Zuhörers. Beachten Sie, dass in diesem Fall die Veränderung hauptsächlich den Klangcharakter und die wahrgenommene Lautstärke des Sounds beeinflussen wird.

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
- [Grundlagen der Web Audio-Raumklanggestaltung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [`PannerNode`](/de/docs/Web/API/PannerNode)

---
title: "PannerNode: positionZ-Eigenschaft"
short-title: positionZ
slug: Web/API/PannerNode/positionZ
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die **`positionZ`**-Eigenschaft der {{ domxref("PannerNode") }}-Schnittstelle gibt die Z-Koordinate der Position der Audioquelle in 3D-Kartesischen Koordinaten an, entsprechend der _Tiefen_-Achse (hinter-vor dem Hörer). Der vollständige Vektor wird durch die Position der Audioquelle definiert, angegeben als ({{domxref("PannerNode.positionX", "positionX")}},
{{domxref("PannerNode.positionY", "positionY")}},
`positionZ`),
und die Ausrichtung der Audioquelle (d. h. die Richtung, in die sie zeigt), angegeben als ({{domxref("PannerNode.orientationX", "orientationX")}},
{{domxref("PannerNode.orientationY", "orientationY")}},
{{domxref("PannerNode.orientationZ", "orientationZ")}}).

Abhängig von der Richtung der Klangquelle (wie durch die Attribute {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}},
{{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}} und
{{domxref("PannerNode.coneOuterGain", "codeOuterGain")}} angegeben), kann die Ausrichtung des Klangs das wahrgenommene Volumen des Klangs beeinflussen, während es abgespielt wird. Wenn der Klang auf den Hörer zeigt, wird er lauter sein als wenn der Klang vom Hörer wegzeigt.

Das {{domxref("AudioParam")}}, das durch diese Eigenschaft enthalten ist, ist schreibgeschützt; jedoch können Sie den Parameterwert ändern, indem Sie einen neuen Wert seiner {{domxref("AudioParam.value")}}-Eigenschaft zuweisen.

## Wert

Ein {{domxref("AudioParam")}}, dessen `value` die Z-Koordinate der Position der Audioquelle in 3D-Kartesischen Koordinaten ist.

## Beispiele

Das folgende Beispiel startet einen Oszillator und bewegt ihn eine Sekunde lang vor den Hörer, zwei Sekunden lang hinter den Hörer und nach drei Sekunden zurück zur Position des Hörers. Beachten Sie, dass in diesem Fall die Änderung hauptsächlich den Klangcharakter und die wahrgenommene Lautstärke des Klangs beeinflusst.

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

- [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio spatialization basics](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- {{domxref("PannerNode")}}

---
title: "PannerNode: positionY-Eigenschaft"
short-title: positionY
slug: Web/API/PannerNode/positionY
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die **`positionY`**-Eigenschaft der {{ domxref("PannerNode") }}-Schnittstelle gibt die Y-Koordinate der Position der Audioquelle in 3D-Kartesischen Koordinaten an, die der _vertikalen_ Achse (oben-unten) entspricht. Der vollständige Vektor wird durch die Position der Audioquelle definiert, angegeben als ({{domxref("PannerNode.positionX", "positionX")}}, `positionY`, {{domxref("PannerNode.positionZ", "positionZ")}}), und die Orientierung der Audioquelle (das heißt, die Richtung, in die sie zeigt), angegeben als ({{domxref("PannerNode.orientationX", "orientationX")}}, {{domxref("PannerNode.orientationY", "orientationY")}}, {{domxref("PannerNode.orientationZ", "orientationZ")}}).

Je nach Richtwirkung des Tons (wie durch die Attribute {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}}, {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}} und {{domxref("PannerNode.coneOuterGain", "codeOuterGain")}} angegeben), kann die Orientierung des Tons das wahrgenommene Volumen des Tons beim Abspielen verändern. Wenn der Ton auf den Zuhörer gerichtet ist, wird er lauter sein, als wenn er vom Zuhörer weg zeigt.

Das {{domxref("AudioParam")}}, das von dieser Eigenschaft enthalten ist, ist schreibgeschützt; Sie können jedoch den Wert des Parameters ändern, indem Sie der Eigenschaft {{domxref("AudioParam.value")}} einen neuen Wert zuweisen.

## Wert

Ein {{domxref("AudioParam")}}, dessen `value` die Y-Koordinate der Position der Audioquelle in 3D-Kartesischen Koordinaten ist.

## Beispiele

Das folgende Beispiel startet einen Oszillator und verschiebt ihn nach 1 Sekunde über den Zuhörer, nach 2 Sekunden unter den Zuhörer und nach 3 Sekunden zurück in die Mitte. Beachten Sie, dass in diesem Fall die Änderung hauptsächlich den Klang des Oszillators beeinflusst, da es sich um eine einfache Mono-Welle handelt.

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
- [Grundlagen der Web Audio-Raumklang](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- {{domxref("PannerNode")}}

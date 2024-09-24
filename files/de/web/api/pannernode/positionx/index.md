---
title: "PannerNode: positionX-Eigenschaft"
short-title: positionX
slug: Web/API/PannerNode/positionX
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die **`positionX`**-Eigenschaft der {{ domxref("PannerNode")}}-Schnittstelle spezifiziert die X-Koordinate der Position der Audioquelle in 3D-Kartesischen Koordinaten, entsprechend der _horizontalen_ Achse (links-rechts).

Der vollständige Vektor wird durch die Position der Audioquelle definiert, angegeben als (`positionX`, {{domxref("PannerNode.positionY", "positionY")}}, {{domxref("PannerNode.positionZ", "positionZ")}}), und der Orientierung der Audioquelle (d.h. die Richtung, in die sie zeigt), angegeben als ({{domxref("PannerNode.orientationX", "orientationX")}}, {{domxref("PannerNode.orientationY", "orientationY")}}, {{domxref("PannerNode.orientationZ", "orientationZ")}}).

Abhängig von der Richtwirkung des Klangs (wie mit den Attributen {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}}, {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}} und {{domxref("PannerNode.coneOuterGain", "codeOuterGain")}} spezifiziert), kann die Orientierung des Klangs das wahrgenommene Volumen des Klangs beim Abspielen verändern. Wenn der Klang auf den Zuhörer gerichtet ist, wird er lauter sein, als wenn der Klang vom Zuhörer weg zeigt.

Der in dieser Eigenschaft enthaltene {{domxref("AudioParam")}} ist schreibgeschützt; Sie können jedoch den Wert des Parameters ändern, indem Sie seiner {{domxref("AudioParam.value")}}-Eigenschaft einen neuen Wert zuweisen.

## Wert

Ein {{domxref("AudioParam")}}, dessen `value` die X-Koordinate der Position der Audioquelle in 3D-Kartesischen Koordinaten ist. Der Standardwert ist 0.

## Beispiele

Das folgende Beispiel startet einen Oszillator und bewegt ihn nach 1 Sekunde nach links, nach 2 Sekunden nach rechts und nach 3 Sekunden zurück in die Mitte.

```js
const context = new AudioContext();

const osc = new OscillatorNode(context);
const panner = new PannerNode(context);

panner.positionX.setValueAtTime(-1, context.currentTime + 1);
panner.positionX.setValueAtTime(1, context.currentTime + 2);
panner.positionX.setValueAtTime(0, context.currentTime + 3);

osc.connect(panner).connect(context.destination);

osc.start(0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Spatialisierung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- {{domxref("PannerNode")}}

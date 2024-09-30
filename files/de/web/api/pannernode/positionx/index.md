---
title: "PannerNode: positionX Eigenschaft"
short-title: positionX
slug: Web/API/PannerNode/positionX
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die **`positionX`** Eigenschaft der [`PannerNode`](/de/docs/Web/API/PannerNode) Schnittstelle gibt die X-Koordinate der Position der Audioquelle in 3D-Kartesischen
Koordinaten an, entsprechend der _horizontalen_ Achse (links-rechts).

Der vollständige Vektor wird durch die Position der Audioquelle definiert, angegeben als
(`positionX`, [`positionY`](/de/docs/Web/API/PannerNode/positionY),
[`positionZ`](/de/docs/Web/API/PannerNode/positionZ)), und die Orientierung
der Audioquelle (d.h. die Richtung, in die sie zeigt), angegeben als
([`orientationX`](/de/docs/Web/API/PannerNode/orientationX),
[`orientationY`](/de/docs/Web/API/PannerNode/orientationY),
[`orientationZ`](/de/docs/Web/API/PannerNode/orientationZ)).

Abhängig von der Richtwirkung des Tons (wie durch die Attribute
[`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle),
[`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) und
[`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) angegeben), kann die Orientierung des
Tons die wahrgenommene Lautstärke des Tons während der Wiedergabe verändern. Wenn der Ton
in Richtung des Hörers zeigt, wird er lauter sein, als wenn er vom Hörer weg zeigt.

Das in dieser Eigenschaft enthaltene [`AudioParam`](/de/docs/Web/API/AudioParam) ist schreibgeschützt; Sie
können jedoch den Wert des Parameters ändern, indem Sie ihm einen neuen Wert in der
[`AudioParam.value`](/de/docs/Web/API/AudioParam/value) Eigenschaft zuweisen.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam), dessen `value` die X-Koordinate der Position der Audioquelle ist, in 3D-Kartesischen Koordinaten. Der Standardwert ist 0.

## Beispiele

Das folgende Beispiel startet einen Oszillator und schwenkt ihn nach 1 Sekunde nach links, nach 2 Sekunden nach rechts und nach 3 Sekunden zurück in die Mitte.

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
- [Grundlagen der Web Audio-Raumklangverarbeitung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [`PannerNode`](/de/docs/Web/API/PannerNode)

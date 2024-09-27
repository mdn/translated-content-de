---
title: "PannerNode: orientationY-Eigenschaft"
short-title: orientationY
slug: Web/API/PannerNode/orientationY
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die **`orientationY`**-Eigenschaft des [`PannerNode`](/de/docs/Web/API/PannerNode)-Interfaces gibt die Y-Komponente (vertikal) der Richtung an, in die die Audioquelle zeigt, im 3D-kartesischen Koordinatensystem.

Der vollständige Vektor wird durch die Position der Audioquelle definiert, angegeben als
([`positionX`](/de/docs/Web/API/PannerNode/positionX), [`positionY`](/de/docs/Web/API/PannerNode/positionY),
[`positionZ`](/de/docs/Web/API/PannerNode/positionZ)), und die Ausrichtung
der Audioquelle (d.h. die Richtung, in die sie zeigt), angegeben als
([`orientationX`](/de/docs/Web/API/PannerNode/orientationX),
`orientationY`,
[`orientationZ`](/de/docs/Web/API/PannerNode/orientationZ)).

Je nach Richtwirkung des Klangs (wie durch die Attribute
[`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle),
[`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) und
[`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) angegeben), kann die Ausrichtung des
Klangs die wahrgenommene Lautstärke des Klangs verändern, während er abgespielt wird. Wenn der Klang
auf den Zuhörer gerichtet ist, wird er lauter sein, als wenn der Klang vom Zuhörer weg zeigt.

Das von dieser Eigenschaft enthaltene [`AudioParam`](/de/docs/Web/API/AudioParam) ist schreibgeschützt; dennoch
können Sie den Wert des Parameters ändern, indem Sie einen neuen Wert seiner
[`AudioParam.value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft zuweisen.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam), dessen `value` die Y-Komponente der
Richtung ist, in die die Audioquelle innerhalb des 3D-kartesischen Koordinatensystems zeigt.

## Beispiele

Siehe [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX#example) für Beispielcode, der die Auswirkung auf die Lautstärke beim Ändern der [`PannerNode`](/de/docs/Web/API/PannerNode)-Orientierungsparameter in Kombination mit [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) demonstriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web-Audio-Raumklang](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [`PannerNode`](/de/docs/Web/API/PannerNode)

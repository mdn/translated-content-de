---
title: "PannerNode: orientationZ-Eigenschaft"
short-title: orientationZ
slug: Web/API/PannerNode/orientationZ
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die **`orientationZ`**-Eigenschaft der [`PannerNode`](/de/docs/Web/API/PannerNode)-Schnittstelle
gibt die Z-Komponente (Tiefe) der Richtung an, in die die Audioquelle zeigt, im dreidimensionalen kartesischen Koordinatensystem.

Der vollständige Vektor wird durch die Position der Audioquelle definiert, angegeben als
([`positionX`](/de/docs/Web/API/PannerNode/positionX), [`positionY`](/de/docs/Web/API/PannerNode/positionY),
[`positionZ`](/de/docs/Web/API/PannerNode/positionZ)), und die Orientierung der Audioquelle (d. h. die Richtung, in die sie zeigt), angegeben als
([`orientationX`](/de/docs/Web/API/PannerNode/orientationX),
[`orientationY`](/de/docs/Web/API/PannerNode/orientationY),
`orientationZ`).

Abhängig von der Richtwirkung des Tons (wie mit den Attributen
[`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle),
[`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) und
[`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) festgelegt), kann die Orientierung des
Tons die wahrgenommene Lautstärke des Tons verändern, während er abgespielt wird. Wenn der Ton auf den Zuhörer gerichtet ist, wird er lauter sein, als wenn der Ton vom Zuhörer weg zeigt.

Der in dieser Eigenschaft enthaltene [`AudioParam`](/de/docs/Web/API/AudioParam) ist schreibgeschützt; dennoch
können Sie den Wert des Parameters ändern, indem Sie der [`AudioParam.value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft einen neuen Wert zuweisen.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam), dessen `value` die Z-Komponente der
Richtung ist, in die die Audioquelle zeigt, im dreidimensionalen kartesischen Koordinatensystem.

## Beispiel

Siehe [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX#example) für Beispielcode, der die Auswirkung auf die Lautstärke beim Ändern der Orientierungsparameter von [`PannerNode`](/de/docs/Web/API/PannerNode) in Kombination mit [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) demonstriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Raumanpassung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [`PannerNode`](/de/docs/Web/API/PannerNode)

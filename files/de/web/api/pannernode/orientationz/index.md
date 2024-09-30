---
title: "PannerNode: orientationZ-Eigenschaft"
short-title: orientationZ
slug: Web/API/PannerNode/orientationZ
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die **`orientationZ`**-Eigenschaft der [`PannerNode`](/de/docs/Web/API/PannerNode)-Schnittstelle zeigt die Z- (Tiefen-) Komponente der Richtung an, in die die Audioquelle in einem 3D-Kartesischen Koordinatenraum zeigt.

Der vollständige Vektor wird durch die Position der Audioquelle definiert, angegeben als ([`positionX`](/de/docs/Web/API/PannerNode/positionX), [`positionY`](/de/docs/Web/API/PannerNode/positionY), [`positionZ`](/de/docs/Web/API/PannerNode/positionZ)), und die Orientierung der Audioquelle (das heißt, die Richtung, in die sie zeigt), angegeben als ([`orientationX`](/de/docs/Web/API/PannerNode/orientationX), [`orientationY`](/de/docs/Web/API/PannerNode/orientationY), `orientationZ`).

Abhängig von der Direktionalität des Sounds (wie mit den Attributen [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle), [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) und [`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) spezifiziert), kann die Orientierung des Sounds die wahrgenommene Lautstärke beim Abspielen beeinflussen. Wenn der Sound in Richtung des Zuhörers zeigt, wird er lauter sein als wenn der Sound vom Zuhörer weg zeigt.

Der in dieser Eigenschaft enthaltene [`AudioParam`](/de/docs/Web/API/AudioParam) ist schreibgeschützt; Sie können jedoch den Wert des Parameters ändern, indem Sie der [`AudioParam.value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft einen neuen Wert zuweisen.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam), dessen `value` die Z-Komponente der Richtung ist, in die die Audioquelle in einem 3D-Kartesischen Koordinatenraum zeigt.

## Beispiel

Siehe [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX#example) für Beispielcode, der zeigt, wie das Ändern der Orientierungseigenschaften des [`PannerNode`](/de/docs/Web/API/PannerNode) in Kombination mit [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) die Lautstärke beeinflusst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [`PannerNode`](/de/docs/Web/API/PannerNode)

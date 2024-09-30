---
title: "PannerNode: orientationY-Eigenschaft"
short-title: orientationY
slug: Web/API/PannerNode/orientationY
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die **`orientationY`**-Eigenschaft der [`PannerNode`](/de/docs/Web/API/PannerNode)-Schnittstelle
gibt die Y-Komponente (vertikal) der Richtung an, in die die Audioquelle zeigt, im 3D-kartesischen Koordinatenraum.

Der vollständige Vektor wird durch die Position der Audioquelle definiert, angegeben als
([`positionX`](/de/docs/Web/API/PannerNode/positionX), [`positionY`](/de/docs/Web/API/PannerNode/positionY),
[`positionZ`](/de/docs/Web/API/PannerNode/positionZ)), und die Orientierung
der Audioquelle (das heißt, die Richtung, in die sie zeigt), angegeben als
([`orientationX`](/de/docs/Web/API/PannerNode/orientationX),
`orientationY`,
[`orientationZ`](/de/docs/Web/API/PannerNode/orientationZ)).

Abhängig von der Richtwirkung des Klangs (wie angegeben durch die Attribute
[`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle),
[`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle), und
[`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain)), kann die Orientierung des
Klangs das empfundene Volumen des Klangs verändern, während es abgespielt wird. Wenn der Klang
zum Hörer zeigt, wird er lauter sein als wenn der Klang vom Hörer weg zeigt.

Das in dieser Eigenschaft enthaltene [`AudioParam`](/de/docs/Web/API/AudioParam) ist schreibgeschützt; Sie können jedoch den Wert des Parameters immer noch ändern, indem Sie ihm einen neuen Wert zuweisen
[`AudioParam.value`](/de/docs/Web/API/AudioParam/value).

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam), dessen `value` die Y-Komponente der
Richtung ist, in die die Audioquelle zeigt, im 3D-kartesischen Koordinatenraum.

## Beispiele

Siehe [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX#example) für Beispielcode, der den Effekt auf die Lautstärke beim Ändern der [`PannerNode`](/de/docs/Web/API/PannerNode)-Orientierungsparameter in Kombination mit [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) zeigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [`PannerNode`](/de/docs/Web/API/PannerNode)

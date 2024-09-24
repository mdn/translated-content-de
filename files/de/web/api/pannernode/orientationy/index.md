---
title: "PannerNode: orientationY-Eigenschaft"
short-title: orientationY
slug: Web/API/PannerNode/orientationY
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die **`orientationY`**-Eigenschaft der {{ domxref("PannerNode") }}-Schnittstelle gibt die Y-Komponente (vertikal) der Richtung an, in die die Audioquelle blickt, in einem 3D-Kartesischen Koordinatensystem.

Der vollständige Vektor wird durch die Position der Audioquelle definiert, angegeben als ({{domxref("PannerNode.positionX", "positionX")}}, {{domxref("PannerNode.positionY", "positionY")}}, {{domxref("PannerNode.positionZ", "positionZ")}}), und die Orientierung der Audioquelle (also die Richtung, in die sie blickt), angegeben als ({{domxref("PannerNode.orientationX", "orientationX")}}, `orientationY`, {{domxref("PannerNode.orientationZ", "orientationZ")}}).

Abhängig von der Direktionalität des Klangs (wie mit den Attributen {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}}, {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}} und {{domxref("PannerNode.coneOuterGain", "coneOuterGain")}} angegeben), kann die Orientierung des Klangs das wahrgenommene Volumen des Klangs beim Abspielen verändern. Wenn der Klang auf den Zuhörer zeigt, wird er lauter sein, als wenn der Klang vom Zuhörer weg zeigt.

Der in dieser Eigenschaft enthaltene {{domxref("AudioParam")}} ist schreibgeschützt; Sie können jedoch den Wert des Parameters ändern, indem Sie einen neuen Wert seiner {{domxref("AudioParam.value")}}-Eigenschaft zuweisen.

## Wert

Ein {{domxref("AudioParam")}}, dessen `value` die Y-Komponente der Richtung ist, in die die Audioquelle blickt, in einem 3D-Kartesischen Koordinatensystem.

## Beispiele

Siehe [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX#example) für Beispielcode, der den Effekt auf das Volumen beim Ändern der {{domxref("PannerNode")}}-Orientierungsparameter in Kombination mit {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}} und {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}} demonstriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- {{domxref("PannerNode")}}

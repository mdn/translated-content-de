---
title: "PannerNode: orientationZ-Eigenschaft"
short-title: orientationZ
slug: Web/API/PannerNode/orientationZ
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die **`orientationZ`**-Eigenschaft der {{ domxref("PannerNode") }}-Schnittstelle gibt die Z-Komponente (Tiefe) der Richtung an, in die die Audioquelle zeigt, im kartesischen 3D-Koordinatenraum.

Der vollständige Vektor wird durch die Position der Audioquelle definiert, angegeben als ({{domxref("PannerNode.positionX", "positionX")}}, {{domxref("PannerNode.positionY", "positionY")}}, {{domxref("PannerNode.positionZ", "positionZ")}}), und die Ausrichtung der Audioquelle (das heißt, die Richtung, in der sie zeigt), angegeben als ({{domxref("PannerNode.orientationX", "orientationX")}}, {{domxref("PannerNode.orientationY", "orientationY")}}, `orientationZ`).

Abhängig von der Richtwirkung des Klangs (wie durch die Attribute {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}}, {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}} und {{domxref("PannerNode.coneOuterGain", "coneOuterGain")}} angegeben), kann die Ausrichtung des Klangs die wahrgenommene Lautstärke des Klangs beim Abspielen verändern. Wenn der Klang auf den Zuhörer zeigt, ist er lauter, als wenn der Klang vom Zuhörer weg zeigt.

Der in dieser Eigenschaft enthaltene {{domxref("AudioParam")}} ist schreibgeschützt; Sie können jedoch den Wert des Parameters ändern, indem Sie seiner {{domxref("AudioParam.value")}}-Eigenschaft einen neuen Wert zuweisen.

## Wert

Ein {{domxref("AudioParam")}}, dessen `value` die Z-Komponente der Richtung ist, in die die Audioquelle zeigt, im kartesischen 3D-Koordinatenraum.

## Beispiel

Siehe [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX#example) für Beispielcode, der die Auswirkung auf die Lautstärke beim Ändern der {{domxref("PannerNode")}}-Ausrichtungsparameter in Kombination mit {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}} und {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}} demonstriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- {{domxref("PannerNode")}}

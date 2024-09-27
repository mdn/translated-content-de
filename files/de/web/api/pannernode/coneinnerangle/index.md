---
title: "PannerNode: coneInnerAngle-Eigenschaft"
short-title: coneInnerAngle
slug: Web/API/PannerNode/coneInnerAngle
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die `coneInnerAngle`-Eigenschaft des [`PannerNode`](/de/docs/Web/API/PannerNode)-Interfaces ist ein Doppelwert, der den Winkel, in Grad, eines Kegels beschreibt, innerhalb dessen keine Lautstärkereduzierung erfolgt.

Der Standardwert der `coneInnerAngle`-Eigenschaft ist `360`, geeignet für eine nicht-direktionale Quelle.

## Wert

Ein Doppelwert.

## Beispiele

Sehen Sie [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX#example) für ein Beispielcode, das den Effekt auf die Lautstärke zeigt, wenn die [`PannerNode`](/de/docs/Web/API/PannerNode)-Orientierungsparameter in Kombination mit `coneInnerAngle` und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Raumklanggestaltung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)

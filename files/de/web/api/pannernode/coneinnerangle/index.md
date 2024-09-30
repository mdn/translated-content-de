---
title: "PannerNode: coneInnerAngle-Eigenschaft"
short-title: coneInnerAngle
slug: Web/API/PannerNode/coneInnerAngle
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die `coneInnerAngle`-Eigenschaft des [`PannerNode`](/de/docs/Web/API/PannerNode)-Interfaces ist ein double-Wert, der den Winkel in Grad beschreibt, innerhalb dessen es keine Lautstärkereduzierung gibt.

Der Standardwert der `coneInnerAngle`-Eigenschaft ist `360`, was für eine nicht-direktionale Quelle geeignet ist.

## Wert

Ein double.

## Beispiele

Siehe [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX#example) für einen Beispielcode, der die Wirkung auf die Lautstärke beim Ändern der [`PannerNode`](/de/docs/Web/API/PannerNode)-Orientierungsparameter in Kombination mit `coneInnerAngle` und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) demonstriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)

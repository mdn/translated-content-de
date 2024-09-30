---
title: "PannerNode: coneOuterAngle-Eigenschaft"
short-title: coneOuterAngle
slug: Web/API/PannerNode/coneOuterAngle
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die `coneOuterAngle`-Eigenschaft der [`PannerNode`](/de/docs/Web/API/PannerNode)-Schnittstelle ist ein Doppelwert, der den Winkel in Grad einer Kegel beschreibt, außerhalb dessen die Lautstärke um einen konstanten Wert reduziert wird, der durch die [`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain)-Eigenschaft definiert ist.

Der Standardwert der `coneOuterAngle`-Eigenschaft ist `0`.

## Wert

Ein Doppelwert.

## Beispiele

Siehe [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX#example) für Beispielcode, der die Auswirkung auf die Lautstärke beim Ändern der [`PannerNode`](/de/docs/Web/API/PannerNode)-Orientierungsparameter in Kombination mit [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und `coneOuterAngle` demonstriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)

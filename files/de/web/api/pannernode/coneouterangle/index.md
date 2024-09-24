---
title: "PannerNode: coneOuterAngle-Eigenschaft"
short-title: coneOuterAngle
slug: Web/API/PannerNode/coneOuterAngle
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die Eigenschaft `coneOuterAngle` der {{ domxref("PannerNode") }}-Schnittstelle ist ein Doppelwert, der den Winkel in Grad eines Kegels beschreibt, außerhalb dessen die Lautstärke um einen konstanten Wert reduziert wird, der durch die Eigenschaft {{domxref("PannerNode.coneOuterGain","coneOuterGain")}} definiert ist.

Der Standardwert der Eigenschaft `coneOuterAngle` ist `0`.

## Wert

Ein Doppelwert.

## Beispiele

Siehe [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX#example) für Beispielcode, der den Effekt auf die Lautstärke zeigt, wenn die Orientierungsparameter des {{domxref("PannerNode")}} in Kombination mit {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}} und `coneOuterAngle` geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Raumklang](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)

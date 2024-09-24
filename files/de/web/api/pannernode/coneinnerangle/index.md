---
title: "PannerNode: coneInnerAngle-Eigenschaft"
short-title: coneInnerAngle
slug: Web/API/PannerNode/coneInnerAngle
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die `coneInnerAngle`-Eigenschaft der {{ domxref("PannerNode") }}-Schnittstelle ist ein Double-Wert, der den Winkel eines Kegels in Grad beschreibt, innerhalb dessen keine Lautstärkereduzierung stattfindet.

Der Standardwert der `coneInnerAngle`-Eigenschaft ist `360`, geeignet für eine undirektionale Quelle.

## Wert

Ein Double.

## Beispiele

Siehe [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX#example) für Beispielcode, der den Effekt auf die Lautstärke zeigt, wenn die Orientierungsparameter des {{domxref("PannerNode")}} in Kombination mit `coneInnerAngle` und {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}} geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)

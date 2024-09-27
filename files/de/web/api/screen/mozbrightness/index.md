---
title: "Screen: mozBrightness-Eigenschaft"
short-title: mozBrightness
slug: Web/API/Screen/mozBrightness
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("CSSOM")}}{{Deprecated_Header}}{{Non-standard_Header}}

Zeigt an, wie hell die Hintergrundbeleuchtung des Bildschirms ist, auf einer Skala von 0 (sehr dunkel) bis 1 (volle Helligkeit); dieser Wert ist ein Gleitkommawert mit doppelter Genauigkeit.

Sie können dieses Attribut lesen und schreiben, auch wenn der Bildschirm deaktiviert ist, aber die Hintergrundbeleuchtung ist ausgeschaltet, während der Bildschirm deaktiviert ist. Wenn Sie einen Wert X in dieses Attribut schreiben, hat das Attribut möglicherweise nicht denselben Wert X, wenn Sie es später lesen. Die meisten Bildschirme unterstützen nicht so viele verschiedene Helligkeitsstufen, wie es Gleitkommazahlen zwischen 0 und 1 gibt. Die Genauigkeit des Wertes könnte reduziert werden, bevor er gespeichert wird.

## Wert

Eine Zahl.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

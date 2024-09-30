---
title: "Screen: mozBrightness-Eigenschaft"
short-title: mozBrightness
slug: Web/API/Screen/mozBrightness
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("CSSOM")}}{{Deprecated_Header}}{{Non-standard_Header}}

Gibt an, wie hell die Hintergrundbeleuchtung des Bildschirms ist, auf einer Skala von 0 (sehr dunkel) bis 1 (voll
hell); dieser Wert ist ein Gleitkommawert mit doppelter Genauigkeit.

Sie können dieses Attribut lesen und schreiben, auch wenn der Bildschirm deaktiviert ist, allerdings ist die
Hintergrundbeleuchtung ausgeschaltet, während der Bildschirm deaktiviert ist. Wenn Sie einen Wert X in dieses
Attribut schreiben, kann es sein, dass das Attribut nicht denselben Wert X hat, wenn Sie es später lesen. Die meisten
Bildschirme unterstützen nicht so viele verschiedene Helligkeitsstufen, wie es Gleitkommazahlen zwischen 0
und 1 gibt. Die Genauigkeit des Wertes kann vor dem Speichern reduziert werden.

## Wert

Eine Zahl.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

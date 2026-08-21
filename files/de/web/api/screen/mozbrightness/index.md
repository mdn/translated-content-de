---
title: "Screen: mozBrightness-Eigenschaft"
short-title: mozBrightness
slug: Web/API/Screen/mozBrightness
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM view API")}}{{Non-standard_Header}}

Gibt an, wie hell die Hintergrundbeleuchtung des Bildschirms ist, auf einer Skala von 0 (sehr dunkel) bis 1 (volle Helligkeit); dieser Wert ist ein doppeltgenauer Float.

Sie können dieses Attribut lesen und schreiben, selbst wenn der Bildschirm deaktiviert ist, aber die Hintergrundbeleuchtung ist aus, während der Bildschirm deaktiviert ist. Wenn Sie einen Wert von X in dieses Attribut schreiben, kann es sein, dass das Attribut nicht denselben Wert X hat, wenn Sie es später lesen. Die meisten Bildschirme unterstützen nicht so viele verschiedene Helligkeitsstufen, wie es Gleitkommazahlen zwischen 0 und 1 gibt. Die Genauigkeit des Wertes könnte vor dem Speichern reduziert werden.

## Wert

Eine Zahl.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

---
title: "Bildschirm: mozBrightness-Eigenschaft"
short-title: mozBrightness
slug: Web/API/Screen/mozBrightness
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Gibt an, wie hell die Hintergrundbeleuchtung des Bildschirms ist, auf einer Skala von 0 (sehr dunkel) bis 1 (volle Helligkeit); dieser Wert ist ein Gleitkommawert mit doppelter Genauigkeit.

Sie können dieses Attribut lesen und schreiben, auch wenn der Bildschirm deaktiviert ist, aber die Hintergrundbeleuchtung ist ausgeschaltet, während der Bildschirm deaktiviert ist. Wenn Sie einen Wert X in dieses Attribut schreiben, hat das Attribut möglicherweise nicht denselben Wert X, wenn Sie es später lesen. Die meisten Bildschirme unterstützen nicht so viele verschiedene Helligkeitsstufen, wie es Gleitkommawerte zwischen 0 und 1 gibt. Die Präzision des Wertes könnte vor der Speicherung reduziert werden.

## Wert

Eine Zahl.

## Spezifikationen

Kein Teil der Spezifikation.

## Browser-Kompatibilität

{{Compat}}

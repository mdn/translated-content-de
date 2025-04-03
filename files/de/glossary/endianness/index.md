---
title: Endianness
slug: Glossary/Endianness
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{GlossarySidebar}}

**Endian** und **Endianness** (oder "Byte-Reihenfolge") beschreiben, wie Computer die Bytes organisieren, aus denen Zahlen bestehen.

Jeder Speicherort hat einen Index oder eine Adresse. Jedes Byte kann eine 8-Bit-Zahl speichern (d.h. zwischen `0x00` und `0xff`), daher müssen Sie mehr als ein Byte reservieren, um eine größere Zahl zu speichern. Die bei weitem gebräuchlichste _Reihenfolge_ von mehreren Bytes in einer Zahl ist die **Little-Endian**, die auf allen Intel-Prozessoren verwendet wird. Little-Endian bedeutet, Bytes in der Reihenfolge vom wenigsten zum bedeutendsten zu speichern (wobei das am wenigsten signifikante Byte die erste oder niedrigste Adresse einnimmt), vergleichbar mit einer üblichen europäischen Art, Daten zu schreiben (z. B. 31. Dezember 2050).

Naturgemäß ist **Big-Endian** die entgegengesetzte Reihenfolge, vergleichbar mit einem ISO-Datum (2050-12-31). Big-Endian wird auch oft als "Netzwerk-Byte-Reihenfolge" bezeichnet, da Internetstandards normalerweise verlangen, dass Daten im Big-Endian-Format gespeichert werden, beginnend auf der standardisierten UNIX-Socket-Ebene und bis hin zu standardisierten Web-Binärdatenstrukturen. Auch ältere Mac-Computer mit 68000er-Serie und PowerPC-Mikroprozessoren verwendeten früher Big-Endian.

Beispiele mit der Zahl `0x12345678` (d.h. 305 419 896 in Dezimal):

- _Little-Endian_: `0x78 0x56 0x34 0x12`
- _Big-Endian_: `0x12 0x34 0x56 0x78`
- _Mixed-Endian_ (historisch und sehr selten): `0x34 0x12 0x78 0x56`

Der Leitfaden zu typisierten Arrays bietet ein Beispiel, das zeigt, [wie jede Zahl in ihre binäre Darstellung unter der gegebenen Endianness umgewandelt werden kann](/de/docs/Web/JavaScript/Guide/Typed_arrays#dataview).

## Siehe auch

- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- [Endianness](https://en.wikipedia.org/wiki/Endianness) (Wikipedia)
- Verwandte Glossarbegriffe:
  - {{Glossary("Data_structure", "Datenstruktur")}}

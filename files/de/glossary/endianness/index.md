---
title: Endianness
slug: Glossary/Endianness
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Endian** und **Endianness** (oder "Byte-Reihenfolge") beschreiben, wie Computer die Bytes organisieren, aus denen Zahlen bestehen.

Jeder Speicherort hat einen Index oder eine Adresse. Jedes Byte kann eine 8-Bit-Zahl speichern (d.h. zwischen `0x00` und `0xff`), sodass Sie mehr als ein Byte reservieren müssen, um eine größere Zahl zu speichern. Bei weitem die häufigste _Anordnung_ von mehreren Bytes in einer Zahl ist die **Little-Endian**, die auf allen Intel-Prozessoren verwendet wird. Little-Endian bedeutet, Bytes in der Reihenfolge von am wenigsten zu am meisten signifikant zu speichern (wobei das am wenigsten signifikante Byte die erste oder niedrigste Adresse einnimmt), vergleichbar mit einer gängigen europäischen Art, Daten zu schreiben (z.B. 31. Dezember 2050).

Natürlich ist **Big-Endian** die entgegengesetzte Reihenfolge, vergleichbar mit einem ISO-Datum (2050-12-31). Big-Endian wird auch oft als "Netzwerk-Byte-Reihenfolge" bezeichnet, weil Internetstandards normalerweise erfordern, dass Daten Big-Endian gespeichert werden, beginnend auf der Ebene der standardisierten UNIX-Sockets bis zu den standardisierten binären Webdatenstrukturen. Außerdem nutzten ältere Mac-Computer, die 68000er-Serie und PowerPC-Mikroprozessoren, früher Big-Endian.

Beispiele mit der Zahl `0x12345678` (d.h. 305.419.896 dezimal):

- _Little-Endian_: `0x78 0x56 0x34 0x12`
- _Big-Endian_: `0x12 0x34 0x56 0x78`
- _Mixed-Endian_ (historisch und sehr selten): `0x34 0x12 0x78 0x56`

Der Leitfaden zu typisierten Arrays bietet ein Beispiel, das [jede Zahl in ihre binäre Darstellung unter der gegebenen Endianness umwandelt](/de/docs/Web/JavaScript/Guide/Typed_arrays#dataview).

## Siehe auch

- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- [Endianness](https://en.wikipedia.org/wiki/Endianness) (Wikipedia)
- Verwandte Glossarbegriffe:
  - [Datenstruktur](/de/docs/Glossary/Data_structure)

---
title: Endianness
slug: Glossary/Endianness
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Endian** und **Endianness** (oder "Byte-Reihenfolge") beschreiben, wie Computer die Bytes organisieren, die Zahlen bilden.

Jeder Speicherort hat einen Index oder eine Adresse. Jedes Byte kann eine 8-Bit-Zahl speichern (d.h. zwischen `0x00` und `0xff`), sodass Sie mehr als ein Byte reservieren müssen, um eine größere Zahl zu speichern. Die mit Abstand häufigste _Anordnung_ von mehreren Bytes in einer Zahl ist das **Little-Endian**, das auf allen Intel-Prozessoren verwendet wird. Little-Endian bedeutet, dass die Bytes in der Reihenfolge vom wenigstbedeutenden zum höchstbedeutenden gespeichert werden (wobei das wenigstbedeutende Byte die erste oder niedrigste Adresse einnimmt), vergleichbar mit der in Europa üblichen Schreibweise von Daten (z.B. 31. Dezember 2050).

Natürlich ist **Big-Endian** die entgegengesetzte Reihenfolge, vergleichbar mit einem ISO-Datum (2050-12-31). Big-Endian wird auch oft als "Network Byte Order" bezeichnet, da Internetstandards in der Regel erfordern, dass Daten Big-Endian gespeichert werden, beginnend auf der Standard-UNIX-Socket-Ebene bis hin zu standardisierten webbasierten Binärdatenstrukturen. Auch ältere Mac-Computer, die 68000er-Serie und PowerPC-Mikroprozessoren verwenden, nutzten früher Big-Endian.

Beispiele mit der Zahl `0x12345678` (d.h. 305 419 896 in Dezimal):

- _Little-Endian_: `0x78 0x56 0x34 0x12`
- _Big-Endian_: `0x12 0x34 0x56 0x78`
- _Mixed-Endian_ (historisch und sehr selten): `0x34 0x12 0x78 0x56`

Der Leitfaden zu typisierten Arrays liefert ein Beispiel, das [jede Zahl in ihre binäre Darstellung unter der gegebenen Endianness konvertiert](/de/docs/Web/JavaScript/Guide/Typed_arrays#dataview).

## Siehe auch

- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- [Endianness](https://en.wikipedia.org/wiki/Endianness) (Wikipedia)
- Verwandte Glossarbegriffe:
  - {{Glossary("Data_structure", "Datenstruktur")}}

---
title: Endianheit
slug: Glossary/Endianness
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Endian** und **Endianheit** (oder "Byte-Reihenfolge") beschreiben, wie Computer die Bytes organisieren, aus denen Zahlen bestehen.

Jeder Speicherort hat einen Index oder eine Adresse. Jedes Byte kann eine 8-Bit-Zahl speichern (d.h. zwischen `0x00` und `0xff`), daher müssen Sie mehr als ein Byte reservieren, um eine größere Zahl zu speichern. Die mit Abstand häufigste _Anordnung_ von mehreren Bytes in einer Zahl ist die **Little-Endian**, die auf allen Intel-Prozessoren verwendet wird. Little-Endian bedeutet, Bytes in der Reihenfolge von wenig signifikant zu höchst signifikant zu speichern (wobei das wenig signifikante Byte die erste oder niedrigste Adresse erhält), vergleichbar mit der in Europa üblichen Schreibweise von Daten (z.B. 31. Dezember 2050).

Natürlich ist **Big-Endian** die entgegengesetzte Ordnung, vergleichbar mit einem ISO-Datum (2050-12-31). Big-Endian wird auch oft als „Network Byte Order“ bezeichnet, da Internetstandards normalerweise verlangen, dass Daten im Big-Endian-Format gespeichert werden, beginnend auf der standardmäßigen UNIX-Socket-Ebene und bis hin zu standardisierten Web-Binärdatenstrukturen. Auch ältere Mac-Computer mit 68000er-Serien und PowerPC-Mikroprozessoren verwendeten früher Big-Endian.

Beispiele mit der Zahl `0x12345678` (d.h. 305 419 896 im Dezimalsystem):

- _Little-Endian_: `0x78 0x56 0x34 0x12`
- _Big-Endian_: `0x12 0x34 0x56 0x78`
- _Misch-Endian_ (historisch und sehr selten): `0x34 0x12 0x78 0x56`

Der Leitfaden zu typisierten Arrays bietet ein Beispiel, das [jede Zahl in ihre binäre Darstellung unter der gegebenen Endianheit umwandelt](/de/docs/Web/JavaScript/Guide/Typed_arrays#dataview).

## Siehe auch

- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- [Endianheit](https://en.wikipedia.org/wiki/Endianness) (Wikipedia)
- Verwandte Glossarbegriffe:
  - {{Glossary("Data structure")}}

---
title: Endianness
slug: Glossary/Endianness
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Endian** und **Endianness** (oder "Byte-Reihenfolge") beschreiben, wie Computer die Bytes organisieren, die Zahlen bilden.

Jeder Speicherort hat einen Index oder eine Adresse. Jedes Byte kann eine 8-Bit-Zahl speichern (d.h. zwischen `0x00` und `0xff`), daher müssen Sie mehr als ein Byte reservieren, um eine größere Zahl zu speichern. Die mit Abstand häufigste _Reihenfolge_ von mehreren Bytes in einer Zahl ist die **Little-Endian**-Reihenfolge, die auf allen Intel-Prozessoren verwendet wird. Little-Endian bedeutet, die Bytes in der Reihenfolge vom wenigsten zum bedeutendsten (wobei das am wenigsten bedeutende Byte die erste oder niedrigste Adresse einnimmt) zu speichern, vergleichbar mit der in Europa häufigen Weise, Daten zu schreiben (z.B. 31. Dezember 2050).

Natürlich ist **Big-Endian** die umgekehrte Reihenfolge, vergleichbar mit einem ISO-Datum (2050-12-31). Big-Endian wird auch oft als "Netzwerk-Byte-Reihenfolge" bezeichnet, weil Internet-Standards üblicherweise verlangen, dass Daten in Big-Endian gespeichert werden, beginnend auf der standard UNIX-Socket-Ebene und weitergehend bis zu standardisierten Web-binären Datenstrukturen. Auch ältere Mac-Computer, die 68000er-Serien- und PowerPC-Mikroprozessoren verwendeten, nutzten früher Big-Endian.

Beispiele mit der Zahl `0x12345678` (d.h. 305 419 896 im Dezimalsystem):

- _Little-Endian_: `0x78 0x56 0x34 0x12`
- _Big-Endian_: `0x12 0x34 0x56 0x78`
- _Mixed-Endian_ (historisch und sehr selten): `0x34 0x12 0x78 0x56`

Der Leitfaden für typisierte Arrays bietet ein Beispiel, das [beliebige Zahlen in ihre binäre Darstellung unter der gegebenen Endianness umwandelt](/de/docs/Web/JavaScript/Guide/Typed_arrays#dataview).

## Siehe auch

- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- [Endianness](https://en.wikipedia.org/wiki/Endianness) (Wikipedia)
- Verwandte Glossarbegriffe:
  - [Datenstruktur](/de/docs/Glossary/Data_structure)

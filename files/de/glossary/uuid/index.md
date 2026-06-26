---
title: UUID
slug: Glossary/UUID
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Ein **Universally Unique Identifier** (**UUID**) ist ein Bezeichner, der verwendet wird, um eine Ressource eindeutig unter allen anderen Ressourcen dieses Typs zu identifizieren.

Computersysteme generieren UUIDs lokal unter Verwendung sehr großer Zufallszahlen. Theoretisch sind die IDs möglicherweise nicht global eindeutig, aber die Wahrscheinlichkeit von Duplikaten ist verschwindend gering. Wenn Systeme wirklich absolut eindeutige IDs benötigen, könnten diese von einer zentralen Behörde zugewiesen werden.

UUIDs sind 128-Bit-Werte, die kanonisch als 36 Zeichen lange Zeichenfolge im Format `123e4567-e89b-12d3-a456-426614174000` (5 Hexadezimal-Zeichenfolgen, getrennt durch Bindestriche) dargestellt werden. Es gibt eine Reihe von Versionen, die sich leicht in der Art und Weise unterscheiden, wie sie berechnet werden; zum Beispiel die Einbeziehung von temporären Informationen.

Die formale Definition finden Sie in: [RFC4122: A Universally Unique IDentifier (UUID) URN Namespace](https://www.rfc-editor.org/info/rfc4122/).

## Siehe auch

- [UUID](https://en.wikipedia.org/wiki/UUID) auf Wikipedia
- [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID)

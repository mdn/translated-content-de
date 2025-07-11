---
title: UUID
slug: Glossary/UUID
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Universally Unique Identifier** (**UUID**) ist ein Bezeichner, der verwendet wird, um eine Ressource eindeutig unter allen anderen Ressourcen dieses Typs zu identifizieren.

Computersysteme erzeugen UUIDs lokal mithilfe sehr großer Zufallszahlen.
Theoretisch könnten die IDs nicht global eindeutig sein, aber die Wahrscheinlichkeit für Duplikate ist verschwindend gering.
Wenn Systeme wirklich absolut eindeutige IDs benötigen, könnten diese von einer zentralen Behörde zugewiesen werden.

UUIDs sind 128-Bit-Werte, die kanonisch als 36-stelliger String im Format `123e4567-e89b-12d3-a456-426614174000` dargestellt werden (5 Hex-Strings, die durch Bindestriche getrennt sind).
Es gibt mehrere Versionen, die sich geringfügig in der Art und Weise unterscheiden, wie sie berechnet werden; beispielsweise durch die Einbeziehung von zeitlichen Informationen.

Die formale Definition finden Sie in: [RFC4122: A Universally Unique IDentifier (UUID) URN Namespace](https://www.rfc-editor.org/rfc/rfc4122).

## Siehe auch

- [UUID](https://en.wikipedia.org/wiki/UUID) auf Wikipedia
- [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID)

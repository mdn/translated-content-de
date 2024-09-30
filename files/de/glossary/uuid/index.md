---
title: UUID
slug: Glossary/UUID
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein **Universally Unique Identifier** (**UUID**) ist ein Label, das verwendet wird, um eine Ressource eindeutig unter allen anderen Ressourcen dieses Typs zu identifizieren.

Computersysteme erzeugen UUIDs lokal unter Verwendung sehr großer Zufallszahlen. Theoretisch sind die IDs möglicherweise nicht weltweit einzigartig, aber die Wahrscheinlichkeit von Duplikaten ist verschwindend gering. Wenn Systeme wirklich absolut einzigartige IDs benötigen, könnten diese von einer zentralen Stelle vergeben werden.

UUIDs sind 128-Bit-Werte, die kanonisch als 36-stelliger String im Format `123e4567-e89b-12d3-a456-426614174000` dargestellt werden (5 Hex-Strings, getrennt durch Bindestriche). Es gibt eine Anzahl von Versionen, die sich geringfügig in ihrer Berechnung unterscheiden, wie zum Beispiel die Einbeziehung von zeitlichen Informationen.

Die formale Definition findet sich in: [RFC4122: A Universally Unique IDentifier (UUID) URN Namespace](https://www.rfc-editor.org/rfc/rfc4122).

## Siehe auch

- [UUID](https://en.wikipedia.org/wiki/UUID) auf Wikipedia
- [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID)

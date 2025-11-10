---
title: Hashfunktion
slug: Glossary/Hash_function
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine **Hashfunktion** ist eine Funktion, die eine Eingabe variabler Länge entgegennimmt und eine Ausgabe fester Länge erzeugt, die auch als _Digest_ (oder einfach "Hash") bezeichnet wird. Hashfunktionen sollten schnell zu berechnen sein, und unterschiedliche Eingaben sollten möglichst unterschiedliche Ausgaben erzeugen (dies wird als _Kollisionsresistenz_ bezeichnet).

Hashfunktionen haben sowohl {{Glossary("cryptography", "kryptografische")}} als auch nicht-kryptografische Anwendungsbereiche. Außerhalb der Kryptografie können Hashfunktionen beispielsweise verwendet werden, um die Schlüssel für ein assoziatives Array wie eine Map oder ein Wörterbuch zu generieren.

Die [`digest()`](/de/docs/Web/API/SubtleCrypto/digest)-Funktion der [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Schnittstelle macht verschiedene Hashfunktionen für Webanwendungen verfügbar.

## Kryptografische Hashfunktionen

In der Kryptografie haben Hashfunktionen viele Anwendungen, einschließlich {{Glossary("digital_signature", "digitaler Signaturen")}} und {{Glossary("HMAC", "Message Authentication Codes")}}.

Nicht alle Hashfunktionen sind für die Kryptografie geeignet. Um in der Kryptografie verwendet zu werden, muss eine Hashfunktion:

- schnell zu berechnen sein
- einseitig sein: Es sollte unpraktisch oder unmöglich sein, aus der Ausgabe die ursprüngliche Eingabe zu rekonstruieren.
- manipulationssicher sein: Jede Änderung der Eingabe führt zu einer anderen Ausgabe.
- kollisionsresistent sein: Es sollte unpraktisch sein, zwei verschiedene Eingaben zu finden, die die gleiche Ausgabe erzeugen.

Die in der Kryptografie am häufigsten verwendeten Hashfunktionen stammen aus der _SHA-2_ (Secure Hash Algorithm 2)-Familie, deren Namen mit `"SHA-"` gefolgt von der Länge des Ausgabedigests in Bits versehen sind: zum Beispiel `"SHA-256"` und `"SHA-512"`.

SHA-2 ist der Nachfolger des SHA-1-Algorithmus, der nicht mehr als sicher gilt und in der Kryptografie nicht verwendet werden sollte. Beachten Sie, dass auch der MD5-Algorithmus als unsicher betrachtet wird.

## Siehe auch

- [`SubtleCrypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest)
- [Hashfunktion](https://en.wikipedia.org/wiki/Hash_function) auf Wikipedia
- [Kryptografische Hashfunktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("Symmetric-key_cryptography", "Symmetrische Kryptografie")}}

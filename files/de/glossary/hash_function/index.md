---
title: Hash-Funktion
slug: Glossary/Hash_function
l10n:
  sourceCommit: 183135f4f07714f07965e32e90532d7888a13848
---

{{GlossarySidebar}}

Eine **Hash-Funktion** ist eine Funktion, die eine Eingabe variabler Länge entgegennimmt und eine fixierte Länge als Ausgabe erzeugt, die auch als _Digest_ (oder einfach "Hash") bezeichnet wird. Hash-Funktionen sollten schnell zu berechnen sein, und verschiedene Eingaben sollten möglichst unterschiedliche Ausgaben produzieren (dies wird als _Kollisionsresistenz_ bezeichnet).

Hash-Funktionen haben sowohl {{Glossary("cryptography", "kryptografische")}} als auch nicht-kryptografische Anwendungen. Außerhalb der Kryptografie können Hash-Funktionen beispielsweise verwendet werden, um die Schlüssel für ein assoziatives Array wie eine Map oder ein Wörterbuch zu generieren.

Die Funktion [`digest()`](/de/docs/Web/API/SubtleCrypto/digest) der [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) Schnittstelle stellt Webanwendungen verschiedene Hash-Funktionen zur Verfügung.

## Kryptografische Hash-Funktionen

In der Kryptografie haben Hash-Funktionen viele Anwendungen, einschließlich {{Glossary("digital_signature", "digitaler Signaturen")}} und {{Glossary("HMAC", "Nachrichtenautentifizierungscodes")}}.

Nicht alle Hash-Funktionen sind für die Kryptografie geeignet. Um für die Kryptografie verwendet zu werden, muss eine Hash-Funktion:

- schnell zu berechnen sein
- einweg sein: Angesichts der Ausgabe sollte es unpraktisch oder unmöglich sein, die ursprüngliche Eingabe zu regenerieren
- manipulationssicher sein: Jede Änderung der Eingabe führt zu einer anderen Ausgabe
- kollisionsresistent sein: Es sollte unpraktisch sein, zwei verschiedene Eingaben zu finden, die dieselbe Ausgabe erzeugen

Die am häufigsten in der Kryptografie verwendeten Hash-Funktionen stammen aus der _SHA-2_ (Secure Hash Algorithm 2) Familie, deren Namen mit `"SHA-"` beginnen, gefolgt von der Länge des Ausgabedigest in Bits: zum Beispiel `"SHA-256"` und `"SHA-512"`.

SHA-2 ist der Nachfolger des SHA-1-Algorithmus, der nicht mehr als sicher gilt und in der Kryptografie nicht mehr verwendet werden sollte. Beachten Sie, dass auch der MD5-Algorithmus als unsicher gilt.

## Siehe auch

- [`SubtleCrypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest)
- [Hash-Funktion](https://en.wikipedia.org/wiki/Hash_function) auf Wikipedia
- [Kryptografische Hash-Funktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("Symmetric-key_cryptography", "Symmetrische Schlüssel-Kryptografie")}}

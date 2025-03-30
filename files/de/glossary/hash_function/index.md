---
title: Hashfunktion
slug: Glossary/Hash_function
l10n:
  sourceCommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{GlossarySidebar}}

Eine Hashfunktion ist eine Funktion, die eine Eingabe variabler Länge nimmt und eine Ausgabe mit fester Länge erzeugt, auch _Digest_ (oder einfach "Hash") genannt. Hashfunktionen sollten schnell zu berechnen sein, und unterschiedliche Eingaben sollten nach Möglichkeit unterschiedliche Ausgaben erzeugen (dies wird _Kollisionsresistenz_ genannt).

Hashfunktionen haben sowohl {{Glossary("cryptography", "kryptografische")}} als auch nicht-kryptografische Verwendungen. Außerhalb der Kryptografie können Hashfunktionen zum Beispiel benutzt werden, um Schlüssel für ein assoziatives Array wie eine Map oder ein Wörterbuch zu generieren.

Die Funktion [`digest()`](/de/docs/Web/API/SubtleCrypto/digest) des [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Interfaces stellt Webanwendungen verschiedene Hashfunktionen zur Verfügung.

## Kryptografische Hashfunktionen

In der Kryptografie haben Hashfunktionen viele Anwendungen, einschließlich {{Glossary("digital_signature", "digitaler Signaturen")}} und {{Glossary("HMAC", "Message Authentication Codes")}}.

Nicht alle Hashfunktionen sind für die Kryptografie geeignet. Um für die Kryptografie verwendet werden zu können, muss eine Hashfunktion folgende Eigenschaften haben:

- schnell zu berechnen
- einseitig: Angesichts der Ausgabe sollte es unpraktisch oder unmöglich sein, die ursprüngliche Eingabe zu rekonstruieren
- manipulationsresistent: Jede Änderung an der Eingabe führt zu einer anderen Ausgabe
- kollisionsresistent: Es sollte unpraktisch sein, zwei verschiedene Eingaben zu finden, die die gleiche Ausgabe erzeugen

Die in der Kryptografie am häufigsten verwendeten Hashfunktionen stammen aus der _SHA-2_ (Secure Hash Algorithm 2) Familie, deren Namen mit `"SHA-"` beginnen, gefolgt von der Länge des Ausgabe-Digests in Bits: zum Beispiel `"SHA-256"` und `"SHA-512"`.

SHA-2 ist der Nachfolger des SHA-1-Algorithmus, der nicht mehr als sicher angesehen wird und in der Kryptografie nicht mehr verwendet werden sollte. Beachten Sie, dass auch der MD5-Algorithmus als unsicher gilt.

## Siehe auch

- [`SubtleCrypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest)
- [Hashfunktion](https://en.wikipedia.org/wiki/Hash_function) auf Wikipedia
- [Kryptografische Hashfunktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("Symmetric-key_cryptography", "Symmetrische Kryptografie")}}

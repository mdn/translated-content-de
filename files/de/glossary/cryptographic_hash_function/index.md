---
title: Kryptografische Hashfunktion
slug: Glossary/Cryptographic_hash_function
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Eine **kryptografische Hashfunktion**, auch manchmal _Digest-Funktion_ genannt, ist eine {{glossary("cryptography", "kryptografische")}} Primitive, die eine Nachricht beliebiger Größe in eine Nachricht fester Größe transformiert, die als {{glossary("digest", "Digest")}} bezeichnet wird. Kryptografische Hashfunktionen werden zur Authentifizierung, für {{Glossary("digital signature", "digitale Signaturen")}} und {{Glossary("HMAC", "Nachrichtenauthentifizierungscodes")}} verwendet.

Um für die Kryptografie verwendet werden zu können, muss eine Hashfunktion diese Eigenschaften aufweisen:

- schnell berechenbar (da sie häufig generiert werden)
- nicht umkehrbar (jeder Digest könnte von einer sehr großen Anzahl von Nachrichten stammen, und nur durch Brute-Force kann eine Nachricht generiert werden, die zu einem bestimmten Digest führt)
- manipulationssicher (jede Änderung an einer Nachricht führt zu einem anderen Digest)
- kollisionsresistent (es sollte unmöglich sein, zwei verschiedene Nachrichten zu finden, die den gleichen Digest erzeugen)

Kryptografische Hashfunktionen wie MD5 und SHA-1 gelten als gebrochen, da Angriffe gefunden wurden, die ihre Kollisionsresistenz erheblich verringern.

## Siehe auch

- [Kryptografische Hashfunktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("Symmetric-key cryptography")}}

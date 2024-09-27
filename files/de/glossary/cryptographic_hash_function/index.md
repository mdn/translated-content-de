---
title: Kryptografische Hash-Funktion
slug: Glossary/Cryptographic_hash_function
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Eine **kryptografische Hash-Funktion**, manchmal auch _Digest-Funktion_ genannt, ist eine [kryptografische](/de/docs/Glossary/cryptography) Primitive, die eine Nachricht beliebiger Größe in eine Nachricht fester Größe umwandelt, genannt [Digest](/de/docs/Glossary/digest). Kryptografische Hash-Funktionen werden für Authentifizierung, [digitale Signaturen](/de/docs/Glossary/digital_signature) und [Message Authentication Codes](/de/docs/Glossary/HMAC) verwendet.

Um kryptografisch verwendet werden zu können, muss eine Hash-Funktion folgende Eigenschaften haben:

- schnelle Berechnung (da sie häufig generiert werden)
- nicht umkehrbar (jedes Digest könnte von einer sehr großen Anzahl von Nachrichten stammen, und nur durch Bruteforce kann eine Nachricht erzeugt werden, die zu einem gegebenen Digest führt)
- manipulationssicher (jede Änderung an einer Nachricht führt zu einem anderen Digest)
- kollisionsresistent (es sollte unmöglich sein, zwei verschiedene Nachrichten zu finden, die denselben Digest erzeugen)

Kryptografische Hash-Funktionen wie MD5 und SHA-1 gelten als unsicher, da Angriffe gefunden wurden, die ihre Kollisionsresistenz erheblich verringern.

## Siehe auch

- [Kryptografische Hash-Funktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) auf Wikipedia
- Verwandte Glossarbegriffe:
  - [Symmetrische Kryptographie](/de/docs/Glossary/Symmetric-key_cryptography)

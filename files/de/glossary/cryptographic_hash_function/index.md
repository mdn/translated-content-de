---
title: Cryptographic hash function
slug: Glossary/Cryptographic_hash_function
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Eine **kryptographische Hash-Funktion**, auch manchmal _Digest-Funktion_ genannt, ist eine {{Glossary("cryptography", "kryptographische")}} Primitive, die eine Nachricht beliebiger Größe in eine Nachricht fester Größe transformiert, die als {{Glossary("digest", "Digest")}} bezeichnet wird. Kryptographische Hash-Funktionen werden für Authentifizierung, {{Glossary("digital_signature", "digitale Signaturen")}} und {{Glossary("HMAC", "Message Authentication Codes")}} verwendet.

Um für kryptographische Zwecke genutzt zu werden, muss eine Hash-Funktion folgende Eigenschaften besitzen:

- schnell zu berechnen (weil sie häufig generiert werden)
- nicht umkehrbar (jeder Digest kann von einer sehr großen Anzahl von Nachrichten stammen, und nur durch Brute-Force kann eine Nachricht generiert werden, die zu einem gegebenen Digest führt)
- manipulationssicher (jede Änderung an einer Nachricht führt zu einem anderen Digest)
- kollisionssicher (es sollte unmöglich sein, zwei unterschiedliche Nachrichten zu finden, die den gleichen Digest erzeugen)

Kryptographische Hash-Funktionen wie MD5 und SHA-1 gelten als unsicher, da Angriffe gefunden wurden, die ihre Kollisionsresistenz erheblich reduzieren.

## Siehe auch

- [Cryptographic hash function](https://en.wikipedia.org/wiki/Cryptographic_hash_function) auf Wikipedia
- Verwandte Glossareinträge:
  - {{Glossary("Symmetric-key_cryptography", "Symmetrische Kryptographie")}}

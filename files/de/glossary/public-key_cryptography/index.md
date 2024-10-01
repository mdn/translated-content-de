---
title: Public-key cryptography
slug: Glossary/Public-key_cryptography
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Public-Key-Kryptographie — oder _asymmetrische Kryptographie_ — ist ein kryptographisches System, bei dem Schlüssel in Paaren auftreten. Die durch einen der Schlüssel durchgeführte Transformation kann nur mit dem anderen Schlüssel rückgängig gemacht werden. Ein Schlüssel (der _private Schlüssel_) wird geheim gehalten, während der andere öffentlich gemacht wird.

Bei der Verwendung für digitale Signaturen wird der private Schlüssel zum Signieren und der öffentliche Schlüssel zur Verifizierung verwendet. Das bedeutet, dass jeder die Signatur verifizieren kann, aber nur der Besitzer des entsprechenden privaten Schlüssels sie erzeugt haben konnte.

Bei der Verwendung für Verschlüsselungen wird der öffentliche Schlüssel zur Verschlüsselung und der private Schlüssel zur Entschlüsselung verwendet. Dies gibt Public-Key-Verschlüsselungssystemen einen Vorteil gegenüber symmetrischen Verschlüsselungssystemen, da der Verschlüsselungsschlüssel öffentlich gemacht werden kann. Jeder könnte eine Nachricht an den Besitzer des privaten Schlüssels verschlüsseln, aber nur der Besitzer des privaten Schlüssels könnte sie entschlüsseln. Sie sind jedoch typischerweise viel langsamer als symmetrische Algorithmen, und die Größe der Nachricht, die sie verschlüsseln können, ist proportional zur Größe des Schlüssels, sodass sie sich nicht gut für lange Nachrichten skalieren lassen.

Daher ist es üblich, dass ein Verschlüsselungssystem einen symmetrischen Algorithmus zur Verschlüsselung der Nachricht verwendet und dann ein Public-Key-System zum Verschlüsseln des symmetrischen Schlüssels verwendet. Diese Anordnung kann die Vorteile beider Systeme vereinen.

Häufig verwendete Public-Key-Kryptosysteme sind RSA (sowohl für Signaturen als auch für Verschlüsselungen), DSA (für Signaturen) und Diffie-Hellman (für den Schlüsselaustausch).
Elliptische-Kurven-Kryptographie bietet einen alternativen Ansatz zu diesen kryptographischen Systemen mit dem Vorteil, dass sie vergleichsweise kleinere Schlüssellängen, schnellere Operationen und geringeren Speicher- und Übertragungsbedarf verwendet.
Beliebte elliptische-Kurven-Algorithmen sind [Elliptic-curve Diffie–Hellman](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie–Hellman) und [Elliptic Curve Digital Signature Algorithm](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm), die Entwickler häufig abgekürzt als **ECDH** und **ECDSA** antreffen werden.

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [SubtleCrypto unterstützte Algorithmen](/de/docs/Web/API/SubtleCrypto#supported_algorithms)
- Verwandte Glossarbegriffe:
  - {{Glossary("Symmetric-key_cryptography", "Symmetric-key cryptography")}}
- [Public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) auf Wikipedia

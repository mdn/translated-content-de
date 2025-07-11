---
title: Public-Key-Kryptographie
slug: Glossary/Public-key_cryptography
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Public-Key-Kryptographie — oder _asymmetrische Kryptographie_ — ist ein kryptografisches System, in dem Schlüssel paarweise vorkommen. Die Transformation, die mit einem der Schlüssel durchgeführt wird, kann nur mit dem anderen Schlüssel rückgängig gemacht werden. Ein Schlüssel (der _private Schlüssel_) wird geheim gehalten, während der andere öffentlich gemacht wird.

Bei der Verwendung für digitale Signaturen wird der private Schlüssel zum Signieren und der öffentliche Schlüssel zur Verifizierung verwendet. Das bedeutet, dass jeder eine Signatur verifizieren kann, aber nur der Besitzer des entsprechenden privaten Schlüssels sie generiert haben könnte.

Bei der Verwendung für Verschlüsselung wird der öffentliche Schlüssel zur Verschlüsselung und der private Schlüssel zur Entschlüsselung verwendet. Dies gibt Public-Key-Verschlüsselungssystemen einen Vorteil gegenüber symmetrischen Verschlüsselungssystemen, da der Verschlüsselungsschlüssel öffentlich gemacht werden kann. Jeder könnte eine Nachricht an den Besitzer des privaten Schlüssels verschlüsseln, aber nur der Besitzer des privaten Schlüssels könnte sie entschlüsseln. Sie sind jedoch in der Regel viel langsamer als symmetrische Algorithmen, und die Größe der Nachricht, die sie verschlüsseln können, steht in Proportion zur Größe des Schlüssels, sodass sie für lange Nachrichten nicht gut skalieren.

Deshalb ist es üblich, dass ein Verschlüsselungssystem einen symmetrischen Algorithmus verwendet, um die Nachricht zu verschlüsseln, und dann ein Public-Key-System, um den symmetrischen Schlüssel zu verschlüsseln. Diese Anordnung kann die Vorteile beider Systeme bieten.

Häufig verwendete Public-Key-Kryptosysteme sind RSA (für sowohl Signierung als auch Verschlüsselung), DSA (für Signierung) und Diffie–Hellman (für Schlüsselaustausch).
Elliptische-Kurven-Kryptographie bietet einen alternativen Ansatz zu diesen kryptografischen Systemen mit dem Vorteil, vergleichsweise kleinere Schlüssellängen, schnellere Operationen und geringeren Speicher- und Übertragungsbedarf zu nutzen.
Beliebte elliptische Kurven-Algorithmen sind [Elliptic-curve Diffie–Hellman](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie–Hellman) und [Elliptic Curve Digital Signature Algorithm](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm), die Entwickler häufig als **ECDH** und **ECDSA** abgekürzt sehen werden.

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [Unterstützte Algorithmen von SubtleCrypto](/de/docs/Web/API/SubtleCrypto#supported_algorithms)
- Verwandte Glossarbegriffe:
  - {{Glossary("Symmetric-key_cryptography", "Symmetrische Kryptographie")}}
- [Public-Key-Kryptographie](https://en.wikipedia.org/wiki/Public-key_cryptography) auf Wikipedia

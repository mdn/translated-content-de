---
title: Public-Key-Kryptographie
slug: Glossary/Public-key_cryptography
l10n:
  sourceCommit: 0785c8882d49e091d1d122ce8b114c64047e0930
---

Public-Key-Kryptographie — oder _asymmetrische Kryptographie_ — ist ein kryptographisches System, bei dem Schlüssel paarweise verwendet werden. Die durch einen der Schlüssel durchgeführte Transformation kann nur mit dem anderen Schlüssel rückgängig gemacht werden. Ein Schlüssel (der _private Schlüssel_) wird geheim gehalten, während der andere öffentlich gemacht wird.

## Digitale Signaturen

Bei der Verwendung für {{Glossary("digital_signature", "digitale Signaturen")}} wird der private Schlüssel zum Signieren und der öffentliche Schlüssel zur Verifizierung verwendet. Das bedeutet, dass jeder eine Signatur verifizieren kann, aber nur der Besitzer des entsprechenden privaten Schlüssels sie generieren konnte.

## Verschlüsselung

Bei der Verwendung für {{Glossary("encryption", "Verschlüsselung")}} wird der öffentliche Schlüssel zur Verschlüsselung und der private Schlüssel zur Entschlüsselung verwendet. Dies gibt Public-Key-Verschlüsselungssystemen einen Vorteil gegenüber symmetrischen Verschlüsselungssystemen: Der Verschlüsselungsschlüssel kann öffentlich gemacht werden. Jeder kann eine Nachricht an den Besitzer des privaten Schlüssels verschlüsseln, aber nur der Besitzer des privaten Schlüssels kann sie entschlüsseln.

Allerdings sind Public-Key-Verschlüsselungssysteme typischerweise viel langsamer als symmetrische Algorithmen, und die Größe der Nachrichten, die sie verschlüsseln können, ist proportional zur Größe des Schlüssels. Daher skalieren sie nicht gut für lange Nachrichten.

Daher ist es üblich, ein Verschlüsselungssystem zu verwenden, das einen symmetrischen Algorithmus zur Verschlüsselung der Nachrichten verwendet und dann ein Public-Key-System zum Verschlüsseln des symmetrischen Schlüssels. Diese Anordnung kann die Vorteile beider Systeme bieten.

## Häufig verwendete Public-Key-Kryptosysteme

Häufig verwendete Public-Key-Kryptosysteme sind [RSA](https://en.wikipedia.org/wiki/RSA_cryptosystem) (sowohl für Signieren als auch für Verschlüsseln), [DSA](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm) (zum Signieren) und [Diffie–Hellman](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) (für den Schlüsselaustausch).

Elliptische-Kurven-Kryptographie bietet einen alternativen Ansatz zu diesen kryptographischen Systemen mit dem Vorteil, vergleichsweise kleinere Schlüsselgrößen, schnellere Operationen und geringeren Speicher- und Übertragungsbedarf zu nutzen. Beliebte elliptische-Kurven-Algorithmen umfassen [Elliptic-curve Diffie–Hellman](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie–Hellman) und [Elliptic Curve Digital Signature Algorithm](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm), die Entwickler oft als **ECDH** und **ECDSA** abgekürzt vorfinden.

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [Unterstützte Algorithmen von SubtleCrypto](/de/docs/Web/API/SubtleCrypto#supported_algorithms)
- Verwandte Glossarthemen:
  - {{Glossary("Symmetric-key_cryptography", "Symmetrische Kryptographie")}}
- [Public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) auf Wikipedia

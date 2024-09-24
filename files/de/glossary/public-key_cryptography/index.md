---
title: Public-Key-Kryptographie
slug: Glossary/Public-key_cryptography
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Die Public-Key-Kryptographie — oder _asymmetrische Kryptographie_ — ist ein kryptographisches System, bei dem Schlüssel paarweise auftreten. Die Transformation, die mit einem der Schlüssel durchgeführt wird, kann nur mit dem anderen Schlüssel rückgängig gemacht werden. Ein Schlüssel (der _private Schlüssel_) wird geheim gehalten, während der andere öffentlich gemacht wird.

Wenn sie für digitale Signaturen verwendet wird, wird der private Schlüssel zum Signieren und der öffentliche Schlüssel zum Überprüfen verwendet. Das bedeutet, dass jeder eine Signatur überprüfen kann, aber nur der Besitzer des entsprechenden privaten Schlüssels sie erzeugt haben könnte.

Bei der Verschlüsselung wird der öffentliche Schlüssel zum Verschlüsseln und der private Schlüssel zum Entschlüsseln verwendet. Dies gibt Public-Key-Verschlüsselungssystemen einen Vorteil gegenüber symmetrischen Verschlüsselungssystemen, da der Verschlüsselungsschlüssel öffentlich gemacht werden kann. Jeder könnte eine Nachricht an den Besitzer des privaten Schlüssels verschlüsseln, aber nur der Besitzer des privaten Schlüssels könnte sie entschlüsseln. Sie sind jedoch typischerweise viel langsamer als symmetrische Algorithmen, und die Größe der Nachricht, die sie verschlüsseln können, ist proportional zur Größe des Schlüssels, sodass sie sich für lange Nachrichten nicht gut skalieren lassen.

Daher ist es üblich, dass ein Verschlüsselungssystem einen symmetrischen Algorithmus verwendet, um die Nachricht zu verschlüsseln, und dann ein Public-Key-System, um den symmetrischen Schlüssel zu verschlüsseln. Diese Anordnung kann die Vorteile beider Systeme bieten.

Häufig verwendete Public-Key-Kryptosysteme sind RSA (für sowohl Signierungen als auch Verschlüsselung), DSA (für Signierungen) und Diffie-Hellman (für die Schlüsselvereinbarung).
Elliptische-Kurven-Kryptographie bietet einen alternativen Ansatz zu diesen kryptographischen Systemen mit dem Vorteil, dass vergleichsweise kleinere Schlüssellängen, schnellere Operationen und kleinere Speicher- und Übertragungsanforderungen genutzt werden können.
Beliebte elliptische-Kurven-Algorithmen sind [Elliptic-curve Diffie–Hellman](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie–Hellman) und [Elliptic Curve Digital Signature Algorithm](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm), die Entwickler oft als **ECDH** und **ECDSA** abgekürzt begegnen.

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [Von SubtleCrypto unterstützte Algorithmen](/de/docs/Web/API/SubtleCrypto#supported_algorithms)
- Verwandte Glossare:
  - {{Glossary("Symmetric-key cryptography")}}
- [Public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) auf Wikipedia

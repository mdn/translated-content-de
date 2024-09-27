---
title: Public-Key-Kryptographie
slug: Glossary/Public-key_cryptography
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Die Public-Key-Kryptographie — oder _asymmetrische Kryptographie_ — ist ein kryptographisches System, bei dem Schlüssel paarweise auftreten. Die Umwandlung, die mit einem der Schlüssel durchgeführt wird, kann nur mit dem anderen Schlüssel rückgängig gemacht werden. Ein Schlüssel (der _private Schlüssel_) bleibt geheim, während der andere öffentlich gemacht wird.

Bei der Verwendung für digitale Signaturen wird der private Schlüssel zum Signieren und der öffentliche Schlüssel zum Überprüfen verwendet. Das bedeutet, dass jeder eine Signatur verifizieren kann, aber nur der Besitzer des entsprechenden privaten Schlüssels sie erzeugt haben könnte.

Bei der Verwendung für Verschlüsselung wird der öffentliche Schlüssel zum Verschlüsseln und der private Schlüssel zum Entschlüsseln verwendet. Dies gibt Public-Key-Verschlüsselungssystemen einen Vorteil gegenüber symmetrischen Verschlüsselungssystemen, da der Verschlüsselungsschlüssel öffentlich gemacht werden kann. Jeder könnte eine Nachricht an den Besitzer des privaten Schlüssels verschlüsseln, aber nur der Besitzer des privaten Schlüssels könnte sie entschlüsseln. Allerdings sind sie typischerweise viel langsamer als symmetrische Algorithmen und die Größe der Nachricht, die sie verschlüsseln können, ist proportional zur Schlüsselgröße, sodass sie sich nicht gut für lange Nachrichten skalieren lassen.

Daher ist es üblich, dass ein Verschlüsselungssystem einen symmetrischen Algorithmus zur Verschlüsselung der Nachricht verwendet und dann ein Public-Key-System, um den symmetrischen Schlüssel zu verschlüsseln. Diese Anordnung kann die Vorteile beider Systeme bieten.

Häufig verwendete Public-Key-Kryptosysteme sind RSA (für Signierung und Verschlüsselung), DSA (zur Signierung) und Diffie-Hellman (für die Schlüsselvereinbarung). Die Elliptische-Kurven-Kryptographie bietet einen alternativen Ansatz zu diesen kryptographischen Systemen mit dem Vorteil, dass vergleichsweise kleinere Schlüsselgrößen, schnellere Operationen und geringerer Speicher- und Übertragungsaufwand verwendet werden. Beliebte elliptische-Kurven-Algorithmen sind [Elliptic-curve Diffie–Hellman](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie–Hellman) und [Elliptic Curve Digital Signature Algorithm](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm), die Entwickler oft mit **ECDH** und **ECDSA** abgekürzt sehen.

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [Unterstützte Algorithmen von SubtleCrypto](/de/docs/Web/API/SubtleCrypto#supported_algorithms)
- Verwandte Glossarbegriffe:
  - [Symmetrische Kryptographie](/de/docs/Glossary/Symmetric-key_cryptography)
- [Public-Key-Kryptographie](https://de.wikipedia.org/wiki/Public-Key-Kryptographie) auf Wikipedia

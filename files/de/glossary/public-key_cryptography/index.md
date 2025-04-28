---
title: Öffentliche-Schlüssel-Kryptografie
slug: Glossary/Public-key_cryptography
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{GlossarySidebar}}

Die öffentliche-Schlüssel-Kryptografie — oder _asymmetrische Kryptografie_ — ist ein kryptografisches System, bei dem Schlüssel paarweise vorkommen. Die durch einen der Schlüssel durchgeführte Transformation kann nur mit dem anderen Schlüssel rückgängig gemacht werden. Ein Schlüssel (der _private Schlüssel_) wird geheim gehalten, während der andere öffentlich gemacht wird.

Bei der Verwendung für digitale Signaturen wird der private Schlüssel zum Signieren und der öffentliche Schlüssel zur Verifizierung verwendet. Das bedeutet, dass jeder eine Signatur verifizieren kann, aber nur der Besitzer des entsprechenden privaten Schlüssels sie erstellt haben könnte.

Bei der Verwendung zur Verschlüsselung wird der öffentliche Schlüssel zum Verschlüsseln und der private Schlüssel zum Entschlüsseln verwendet. Dies gibt Verschlüsselungssystemen mit öffentlichen Schlüsseln einen Vorteil gegenüber symmetrischen Verschlüsselungssystemen, da der Verschlüsselungsschlüssel öffentlich gemacht werden kann. Jeder könnte eine Nachricht an den Besitzer des privaten Schlüssels verschlüsseln, aber nur der Besitzer des privaten Schlüssels könnte sie entschlüsseln. Sie sind jedoch in der Regel viel langsamer als symmetrische Algorithmen und die Größe der Nachrichten, die sie verschlüsseln können, ist proportional zur Größe des Schlüssels, sodass sie sich nicht gut für lange Nachrichten skalieren lassen.

Daher ist es üblich, dass ein Verschlüsselungssystem einen symmetrischen Algorithmus verwendet, um die Nachricht zu verschlüsseln, und dann ein System mit einem öffentlichen Schlüssel, um den symmetrischen Schlüssel zu verschlüsseln. Diese Anordnung kann die Vorteile beider Systeme vereinen.

Häufig verwendete öffentliche-Schlüssel-Kryptosysteme sind RSA (sowohl für die Signierung als auch die Verschlüsselung), DSA (zum Signieren) und Diffie–Hellman (zur Schlüsselaustauschvereinbarung). Die Elliptische-Kurven-Kryptografie bietet eine alternative Herangehensweise an diese kryptografischen Systeme mit dem Vorteil, vergleichsweise kleinere Schlüssellängen, schnellere Operationen und einen geringeren Speicher- und Übertragungsbedarf zu nutzen. Beliebte Algorithmen für elliptische Kurven sind das [Elliptische-Kurven-Diffie–Hellman](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie–Hellman) und der [Elliptische-Kurven-Digitale-Signatur-Algorithmus](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm), die Entwickler oft als **ECDH** und **ECDSA** abgekürzt sehen.

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [Unterstützte Algorithmen von SubtleCrypto](/de/docs/Web/API/SubtleCrypto#supported_algorithms)
- Verwandte Glossarbegriffe:
  - {{Glossary("Symmetric-key_cryptography", "Symmetrische Schlüssel-Kryptografie")}}
- [Öffentliche-Schlüssel-Kryptografie](https://en.wikipedia.org/wiki/Public-key_cryptography) auf Wikipedia

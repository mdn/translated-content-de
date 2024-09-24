---
title: Chiffrierverfahren
slug: Glossary/Cipher_suite
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

Ein **Chiffrierverfahren** ist eine Kombination aus einem Schlüsselaustausch-Algorithmus, einer Authentifizierungsmethode, einer Massenverschlüsselung {{Glossary("cipher")}} und einem Nachrichten-Authentifizierungscode.

In einem Kryptosystem wie {{Glossary("TLS")}} müssen sich der Client und der Server auf ein Chiffrierverfahren einigen, bevor sie sicher kommunizieren können. Ein typisches Chiffrierverfahren sieht aus wie ECDHE_RSA_WITH_AES_128_GCM_SHA256 oder ECDHE-RSA-AES128-GCM-SHA256, was folgendes bedeutet:

- ECDHE (elliptic curve Diffie-Hellman ephemeral) für den Schlüsselaustausch
- RSA für die Authentifizierung
- AES-128 als Verschlüsselung, mit Galois/Counter Mode (GCM) als Betriebsmodus des Blockchiffres
- SHA-256 als hash-basierter Nachrichten-Authentifizierungscode (HMAC)

## Siehe auch

- [Empfohlene Chiffriersatz-Auswahl für TLS von Mozilla](https://wiki.mozilla.org/Security/Server_Side_TLS)

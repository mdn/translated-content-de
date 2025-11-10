---
title: Cipher Suite
slug: Glossary/Cipher_suite
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Cipher Suite** ist eine Kombination aus einem Schlüsselaustausch-Algorithmus, einer Authentifizierungsmethode, einem Verschlüsselungs-{{Glossary("cipher", "Cipher")}} und einem Nachrichtenauthentifizierungscode.

In einem Kryptosystem wie {{Glossary("TLS", "TLS")}} müssen sich der Client und der Server auf eine Cipher Suite einigen, bevor sie sicher kommunizieren können. Eine typische Cipher Suite sieht aus wie ECDHE_RSA_WITH_AES_128_GCM_SHA256 oder ECDHE-RSA-AES128-GCM-SHA256 und bedeutet:

- ECDHE (elliptische Kurve Diffie-Hellman ephemeral) für den Schlüsselaustausch
- RSA für die Authentifizierung
- AES-128 als Cipher, mit Galois/Counter Mode (GCM) als Blockchiffriermodus der Operation
- SHA-256 als hash-basierter Nachrichtenauthentifizierungscode (HMAC)

## Siehe auch

- [Von Mozilla empfohlene Cipher Suite-Auswahl für TLS](https://wiki.mozilla.org/Security/Server_Side_TLS)

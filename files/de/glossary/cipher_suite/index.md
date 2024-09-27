---
title: Cipher suite
slug: Glossary/Cipher_suite
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

Ein **Cipher suite** ist eine Kombination aus einem Schlüsselaustauschalgorithmus, einer Authentifizierungsmethode, einem Bulk-Verschlüsselungs-[cipher](/de/docs/Glossary/cipher) und einem Message Authentication Code.

In einem Kryptosystem wie [TLS](/de/docs/Glossary/TLS) müssen sich der Client und der Server auf eine Cipher Suite einigen, bevor sie sicher kommunizieren können. Eine typische Cipher Suite sieht aus wie ECDHE_RSA_WITH_AES_128_GCM_SHA256 oder ECDHE-RSA-AES128-GCM-SHA256, was bedeutet:

- ECDHE (elliptic curve Diffie-Hellman ephemeral) für den Schlüsselaustausch
- RSA für die Authentifizierung
- AES-128 als Cipher, mit Galois/Counter Mode (GCM) als Blockverschlüsselungsmodus
- SHA-256 als hash-basierter Message Authentication Code (HMAC)

## Siehe auch

- [Mozilla empfohlene Cipher Suite Auswahl für TLS](https://wiki.mozilla.org/Security/Server_Side_TLS)

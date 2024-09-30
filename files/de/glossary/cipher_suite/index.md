---
title: Cipher suite
slug: Glossary/Cipher_suite
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

Ein **Cipher suite** ist eine Kombination aus einem Schlüssel­austausch­algorithmus, einem Authentifizierungs­verfahren, einer Massen­verschlüsselungs­-`cipher` und einem Nachrichten­authentifizierungs­code.

In einem Kryptosystem wie `TLS` müssen sich der Client und der Server auf eine Cipher suite einigen, bevor sie sicher kommunizieren können. Eine typische Cipher suite sieht aus wie ECDHE_RSA_WITH_AES_128_GCM_SHA256 oder ECDHE-RSA-AES128-GCM-SHA256 und bedeutet:

- ECDHE (elliptic curve Diffie-Hellman ephemeral) für den Schlüsselaustausch
- RSA für die Authentifizierung
- AES-128 als `cipher`, mit Galois/Counter Mode (GCM) als Blockcipher-Modus
- SHA-256 als Hash-basierter Nachrichten­authentifizierungs­code (HMAC)

## Siehe auch

- [Mozilla empfohlene Cipher-Suiten für TLS](https://wiki.mozilla.org/Security/Server_Side_TLS)

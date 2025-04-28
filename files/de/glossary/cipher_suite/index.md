---
title: Cipher Suite
slug: Glossary/Cipher_suite
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{GlossarySidebar}}

Ein **Cipher Suite** ist eine Kombination aus einem Schlüsselaustausch-Algorithmus, einer Authentifizierungsmethode, einem {{Glossary("cipher", "Cipher")}} für Massenverschlüsselung und einem Nachrichten-Authentifizierungscode.

In einem Kryptosystem wie {{Glossary("TLS", "TLS")}} müssen sich der Client und der Server auf eine Cipher Suite einigen, bevor sie sicher kommunizieren können. Eine typische Cipher Suite sieht aus wie ECDHE_RSA_WITH_AES_128_GCM_SHA256 oder ECDHE-RSA-AES128-GCM-SHA256 und zeigt:

- ECDHE (Elliptic Curve Diffie–Hellman Ephemeral) für den Schlüsselaustausch
- RSA für die Authentifizierung
- AES-128 als Cipher, mit Galois/Counter Mode (GCM) als Betriebsmodus des Block Cipher
- SHA-256 als Hash-basierten Nachrichten-Authentifizierungscode (HMAC)

## Siehe auch

- [Von Mozilla empfohlene Cipher Suite-Auswahl für TLS](https://wiki.mozilla.org/Security/Server_Side_TLS)

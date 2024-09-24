---
title: HMAC
slug: Glossary/HMAC
l10n:
  sourceCommit: fbc9980c0718c3ead40863b20a74fc8535ebcc85
---

{{GlossarySidebar}}

**Hash-based message authentication code**(_HMAC_) ist ein Protokoll, das für die {{Glossary("cryptography", "kryptografische")}} Authentifizierung von Nachrichten verwendet wird.

Es kann jede Art von {{Glossary("Cryptographic hash function", "kryptografischen Funktionen")}} verwenden, und seine Stärke hängt von der zugrunde liegenden Funktion (zum Beispiel SHA1 oder MD5) und dem gewählten geheimen Schlüssel ab. Mit einer solchen Kombination ist der HMAC-Verifizierungs-{{Glossary("Algorithm", "Algorithmus")}} dann unter einem zusammengesetzten Namen wie HMAC-SHA1 bekannt.

HMAC wird verwendet, um sowohl Integrität als auch Authentifizierung zu gewährleisten.

## Siehe auch

- [HMAC](https://en.wikipedia.org/wiki/Hash-based_message_authentication_code) auf Wikipedia
- [RFC 2104](https://datatracker.ietf.org/doc/html/rfc2104) bei IETF

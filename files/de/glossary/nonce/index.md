---
title: Nonce
slug: Glossary/Nonce
l10n:
  sourceCommit: aefcc1599f9a67bfb4e0e5f48b2175eac61739fe
---

In der Kryptographie und Computersicherheit ist ein **`nonce`** eine willkürliche Zahl, die in einer kryptografischen Kommunikation **nur einmal** verwendet wird. Der Begriff leitet sich von "number used once" ab und wird häufig eingesetzt, um Replay-Angriffe zu verhindern, die Frische von Nachrichten sicherzustellen und Zufälligkeit zu kryptografischen Protokollen hinzuzufügen.

Nonces werden häufig in Authentifizierungsprotokollen, Verschlüsselungsschemata, Hashing und digitalen Signaturen verwendet. Sie können zufällig oder pseudozufällig generiert oder deterministisch abgeleitet werden, je nach Anwendung und Sicherheitsanforderungen.

In der Web-Sicherheit werden Nonces häufig in Mechanismen wie der **Content Security Policy (CSP)** verwendet, um bestimmten Skripten die Ausführung zu erlauben und Cross-Site Scripting (XSS)-Angriffe zu verhindern. In kryptografischen Protokollen wie {{Glossary("TLS", "TLS")}} helfen Nonces sicherzustellen, dass jede Sitzung einzigartig ist.

## Siehe auch

- [Kryptografischer Nonce](https://en.wikipedia.org/wiki/Cryptographic_nonce) auf Wikipedia
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [Replay-Angriff](https://en.wikipedia.org/wiki/Replay_attack) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("cryptography", "Kryptographie")}}
  - {{Glossary("encryption", "Verschlüsselung")}}
  - {{Glossary("hash", "Hash")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("authentication", "Authentifizierung")}}

---
title: Nonce
slug: Glossary/Nonce
l10n:
  sourceCommit: 8fa28413710c2b4a5b6e98b615c84d5fc6c038c4
---

In der Kryptographie und Computersicherheit ist ein **`nonce`** eine willkürliche Zahl, die in einer kryptographischen Kommunikation **nur einmal** verwendet wird. Der Begriff leitet sich von "number used once" ab und wird häufig verwendet, um Replay-Angriffe zu verhindern, Nachrichtenaktualität sicherzustellen und Zufälligkeit in kryptographische Protokolle einzubringen.

Nonces werden häufig in Authentifizierungsprotokollen, Verschlüsselungsschemata, Hashing und digitalen Signaturen verwendet. Sie können je nach Anwendung und Sicherheitsanforderungen zufällig oder pseudozufällig generiert werden oder deterministisch abgeleitet werden.

In der Web-Sicherheit werden Nonces häufig in Mechanismen wie der **Content Security Policy (CSP)** eingesetzt, um bestimmte Skripte auszuführen und Cross-Site-Scripting (XSS)-Angriffe zu verhindern. In kryptographischen Protokollen wie {{Glossary("TLS", "TLS")}} helfen Nonces sicherzustellen, dass jede Sitzung einzigartig ist.

## Siehe auch

- [Kryptographischer Nonce](https://en.wikipedia.org/wiki/Cryptographic_nonce) auf Wikipedia
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [Replay-Angriff](https://en.wikipedia.org/wiki/Replay_attack) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("cryptography", "Kryptographie")}}
  - {{Glossary("encryption", "Verschlüsselung")}}
  - {{Glossary("Hash_function", "Hash")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("authentication", "Authentifizierung")}}

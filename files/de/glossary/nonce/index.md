---
title: Nonce
slug: Glossary/Nonce
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

In der Kryptographie und Computersicherheit ist ein **`nonce`** eine beliebige Zahl, die in einer kryptografischen Kommunikation **nur einmal** verwendet wird. Der Begriff leitet sich von „number used once“ ab und wird häufig eingesetzt, um Replay-Angriffe zu verhindern, die Aktualität von Nachrichten sicherzustellen und Zufälligkeit zu kryptografischen Protokollen hinzuzufügen.

Nonces werden häufig in Authentifizierungsprotokollen, Verschlüsselungsschemata, Hashing und digitalen Signaturen verwendet. Sie können zufällig oder pseudozufällig generiert oder deterministisch abgeleitet werden, abhängig von der Anwendung und den Sicherheitsanforderungen.

Im Bereich der Web-Sicherheit werden Nonces häufig in Mechanismen wie der **Content Security Policy (CSP)** verwendet, um bestimmten Skripten die Ausführung zu erlauben, während Cross-Site-Scripting (XSS)-Angriffe verhindert werden. In kryptografischen Protokollen wie {{Glossary("TLS", "TLS")}} helfen Nonces, sicherzustellen, dass jede Sitzung einzigartig ist.

## Siehe auch

- [Kryptographisches Nonce](https://de.wikipedia.org/wiki/Kryptographisches_Nonce) auf Wikipedia
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [Replay-Angriff](https://de.wikipedia.org/wiki/Replay-Angriff) auf Wikipedia
- Verwandte Glossareinträge:
  - {{Glossary("cryptography", "Kryptographie")}}
  - {{Glossary("encryption", "Verschlüsselung")}}
  - {{Glossary("hash", "Hash")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("authentication", "Authentifizierung")}}

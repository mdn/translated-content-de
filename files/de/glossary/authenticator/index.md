---
title: Authenticator
slug: Glossary/Authenticator
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Authenticator** ist eine Entität, die die kryptografischen Operationen zur Registrierung und Authentifizierung von Nutzern ausführen und die dabei verwendeten kryptografischen Schlüssel sicher speichern kann.

Ein Authenticator kann in Hardware oder Software implementiert werden. Er kann in das Gerät integriert sein, wie das [Touch ID](https://en.wikipedia.org/wiki/Touch_ID)-System in Apple-Geräten oder das [Windows Hello](https://en.wikipedia.org/wiki/Windows_10#System_security)-System, oder es kann sich um ein entfernbares Modul wie einen [YubiKey](https://en.wikipedia.org/wiki/YubiKey) handeln.

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) macht Authenticatoren als Teil der [Credential Management API](/de/docs/Web/API/Credential_Management_API) für Websites verfügbar. Dies ermöglicht es Websites, Authenticatoren zu nutzen, um {{Glossary("credential", "Credentials")}} basierend auf der {{Glossary("public-key_cryptography", "Public-Key-Kryptografie")}} zu erzeugen, die dann verwendet werden können, um Nutzer auf Websites anzumelden.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Authentication", "Authentifizierung")}}
  - {{Glossary("Credential", "Credential")}}

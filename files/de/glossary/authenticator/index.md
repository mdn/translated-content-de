---
title: Authenticator
slug: Glossary/Authenticator
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{GlossarySidebar}}

Ein **Authenticator** ist eine Entität, die die kryptografischen Operationen durchführen kann, die erforderlich sind, um Benutzer zu registrieren und zu authentifizieren, und die kryptografischen Schlüssel sicher speichern kann, die in diesen Operationen verwendet werden.

Ein Authenticator kann in Hardware oder Software implementiert werden. Er kann in das Gerät integriert sein, wie das [Touch ID](https://en.wikipedia.org/wiki/Touch_ID)-System in Apple-Geräten oder das [Windows Hello](https://en.wikipedia.org/wiki/Windows_10#System_security)-System, oder er kann ein herausnehmbares Modul sein, wie ein [YubiKey](https://en.wikipedia.org/wiki/YubiKey).

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) macht Authenticatoren als Teil der [Credential Management API](/de/docs/Web/API/Credential_Management_API) für Websites verfügbar. Dadurch können Websites Authenticatoren verwenden, um {{Glossary("credential", "Credentials")}} basierend auf {{Glossary("public-key_cryptography", "Public-Key-Kryptographie")}} zu generieren, die dann verwendet werden können, um Benutzer bei Websites anzumelden.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Authentication", "Authentication")}}
  - {{Glossary("Credential", "Credential")}}

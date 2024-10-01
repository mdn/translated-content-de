---
title: Authenticator
slug: Glossary/Authenticator
l10n:
  sourceCommit: a8ff915bf53e883e9db24056784951d9ab1ae013
---

{{GlossarySidebar}}

Ein **Authenticator** ist eine Instanz, die die kryptografischen Operationen ausführen kann, die erforderlich sind, um Benutzer zu registrieren und zu authentifizieren, und die kryptografischen Schlüssel, die in diesen Operationen verwendet werden, sicher speichern kann.

Ein Authenticator kann in Hardware oder Software implementiert sein. Er kann in das Gerät integriert sein, wie das [Touch ID](https://en.wikipedia.org/wiki/Touch_ID)-System in Apple-Geräten oder das [Windows Hello](https://en.wikipedia.org/wiki/Windows_10#System_security)-System, oder er kann ein abnehmbares Modul wie ein [Yubikey](https://en.wikipedia.org/wiki/YubiKey) sein.

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) stellt Authenticatoren Websites als Teil der [Credential Management API](/de/docs/Web/API/Credential_Management_API) zur Verfügung. Dies ermöglicht es Websites, Authenticatoren zu verwenden, um {{Glossary("credential", "credentials")}} basierend auf {{Glossary("public-key_cryptography", "public-key cryptography")}} zu generieren, die dann zum Anmelden von Benutzern auf Websites verwendet werden können.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Authentication", "Authentication")}}
  - {{Glossary("Credential", "Credential")}}

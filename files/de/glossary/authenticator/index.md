---
title: Authenticator
slug: Glossary/Authenticator
l10n:
  sourceCommit: a8ff915bf53e883e9db24056784951d9ab1ae013
---

{{GlossarySidebar}}

Ein **Authenticator** ist eine Entität, die die kryptografischen Operationen ausführen kann, die erforderlich sind, um Benutzer zu registrieren und zu authentifizieren, und die kryptografischen Schlüssel, die in diesen Operationen verwendet werden, sicher speichern kann.

Ein Authenticator kann in Hardware oder Software implementiert sein. Er kann in das Gerät integriert sein, wie das [Touch ID](https://en.wikipedia.org/wiki/Touch_ID)-System in Apple-Geräten oder das [Windows Hello](https://en.wikipedia.org/wiki/Windows_10#System_security)-System, oder es kann sich um ein entfernbares Modul wie einen [Yubikey](https://en.wikipedia.org/wiki/YubiKey) handeln.

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) stellt Authenticatoren Webseiten als Teil der [Credential Management API](/de/docs/Web/API/Credential_Management_API) zur Verfügung. Dadurch können Websites Authenticatoren nutzen, um [credentials](/de/docs/Glossary/credential) basierend auf der [public-key cryptography](/de/docs/Glossary/public-key_cryptography) zu generieren, die dann verwendet werden können, um Benutzer auf Websites anzumelden.

## Siehe auch

- Verwandte Glossarbegriffe:
  - [Authentication](/de/docs/Glossary/Authentication)
  - [Credential](/de/docs/Glossary/Credential)

---
title: Authentifikator
slug: Glossary/Authenticator
l10n:
  sourceCommit: a8ff915bf53e883e9db24056784951d9ab1ae013
---

{{GlossarySidebar}}

Ein **Authentifikator** ist eine Einheit, die die kryptografischen Operationen durchführen kann, die zur Registrierung und Authentifizierung von Benutzern erforderlich sind, und die kryptografischen Schlüssel, die in diesen Operationen verwendet werden, sicher speichern kann.

Ein Authentifikator kann in Hardware oder Software implementiert sein. Er kann in das Gerät integriert sein, wie das [Touch ID](https://en.wikipedia.org/wiki/Touch_ID)-System in Apple-Geräten oder das [Windows Hello](https://en.wikipedia.org/wiki/Windows_10#System_security)-System, oder ein herausnehmbares Modul wie ein [Yubikey](https://en.wikipedia.org/wiki/YubiKey) sein.

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) stellt Authentifikatoren als Teil der [Credential Management API](/de/docs/Web/API/Credential_Management_API) Websites zur Verfügung. Dies ermöglicht es Websites, Authentifikatoren zu verwenden, um {{glossary("credential", "Anmeldedaten")}} basierend auf {{glossary("public-key cryptography", "Public-Key-Kryptografie")}} zu generieren, die dann genutzt werden können, um Benutzer auf Websites anzumelden.

## Siehe auch

- Verwandte Glossareinträge:
  - {{glossary("Authentication", "Authentifizierung")}}
  - {{glossary("Credential", "Anmeldedaten")}}

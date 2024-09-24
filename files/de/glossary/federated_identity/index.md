---
title: Föderierte Identität
slug: Glossary/Federated_identity
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Ein System der **föderierten Identität** ist eines, in dem ein {{glossary("identity provider", "Identity Provider (IdP)")}} als Vermittler zwischen Benutzern und {{glossary("relying party", "vertrauenden Parteien")}} agiert, sodass ein Benutzer ein einziges Set von {{glossary("credential", "Anmeldeinformationen")}} verwenden kann, um sich bei einer Reihe verschiedener vertrauender Parteien zu authentifizieren.

Traditionell meldet sich ein Benutzer im Web bei einer Website mit einem Benutzernamen und einem Passwort an, und das Passwort wird von der Website mit einer (ordnungsgemäß {{glossary("hash", "gehashten")}} und {{glossary("salt", "gesalzenen")}}) Kopie verglichen, die im Backend der Website gespeichert ist.

In diesem Modell müssen sich Benutzer, die mehrere Konten bei verschiedenen Websites haben, viele Passwörter merken, was schlechte Passwortpraktiken wie die Verwendung desselben Passworts für mehrere Konten begünstigt.

In einem System der föderierten Identität:

- verwaltet ein Identity Provider die Anmeldeinformationen eines Benutzers und kann Benutzer authentifizieren.
- ist der Identity Provider von mehreren Websites autorisiert, Aussagen über die Identität eines Benutzers zu treffen.

Ein Benutzer kann sich dann beim Identity Provider authentifizieren, der einen Token an den Browser des Benutzers zurückgibt, wenn die Authentifizierung erfolgreich ist. Der Browser des Benutzers sendet den Token an die Website, die überprüfen kann, ob er vom IdP ausgegeben wurde. Wenn die Überprüfung erfolgreich ist, kann die Website den Benutzer anmelden.

Föderierte Identität wird häufig als Dienst von Unternehmen bereitgestellt: Zum Beispiel können Benutzer, die über Google-, Microsoft- oder Facebook-Konten verfügen, diese verwenden, um sich bei vielen Websites anzumelden. Websites müssen typischerweise einen Prozess implementieren, um Tokens zu überprüfen, der spezifisch für einen Identity Provider ist. Allerdings werden offene Standards wie [OpenID](https://en.wikipedia.org/wiki/OpenID), [OAuth](https://en.wikipedia.org/wiki/OAuth) und [SAML](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) häufig bei der Implementierung von föderierten Identitätssystemen verwendet.

Obwohl föderierte Identität das Einloggen in verschiedene Konten für Benutzer erheblich erleichtert und die Sicherheit verbessern kann, kann sie ernsthafte Auswirkungen auf die Privatsphäre eines Benutzers haben. Wenn sie nicht sorgfältig gestaltet sind, können föderierte Identitätssysteme Identity Providern ermöglichen, Benutzer im Web zu verfolgen, während sie sich bei verschiedenen Sites anmelden. Frühe föderierte Identitätssysteme im Web basierten auf Technologien wie Drittanbieter-Cookies, die von Natur aus die Privatsphäre gefährden. Da diese Technologien von Browsern abgelehnt werden, sind neue Ansätze erforderlich. Die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) bietet einen standardisierten, datenschutzfreundlichen Mechanismus für föderierte Identität im Web.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{glossary("Relying party")}}
  - {{glossary("Identity provider")}}
- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)

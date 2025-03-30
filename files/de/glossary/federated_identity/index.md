---
title: Föderierte Identität
slug: Glossary/Federated_identity
l10n:
  sourceCommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{GlossarySidebar}}

Ein **föderiertes Identitätssystem** ist eines, in dem ein {{Glossary("identity_provider", "Identity Provider (IdP)")}} als Vermittler zwischen Nutzern und {{Glossary("relying_party", "Reliant Parties")}} agiert und es einem Nutzer ermöglicht, ein einziges Set von {{Glossary("credential", "Zugangsdaten")}} zu verwenden, um sich bei einer Anzahl verschiedener Reliant Parties zu authentifizieren.

Traditionell meldet sich ein Nutzer im Web mit einem Benutzernamen und einem Passwort auf einer Website an, und das Passwort wird von der Website anhand einer (korrekt {{Glossary("hash_function", "gehashten")}} und {{Glossary("salt", "gesalzenen")}}) Kopie verifiziert, die im Backend der Website gespeichert ist.

In diesem Modell müssen sich Nutzer, die mehrere Konten bei verschiedenen Websites haben, viele Passwörter merken, was schlechte Passwortpraktiken wie die Verwendung desselben Passworts für mehrere Konten fördert.

In einem föderierten Identitätssystem übernimmt ein Identity Provider:

- die Verwaltung der Zugangsdaten eines Nutzers und kann Nutzer authentifizieren,
- das Vertrauen von mehreren Websites, um Aussagen über die Identität eines Nutzers zu machen.

Ein Nutzer kann sich dann beim Identity Provider authentifizieren, der bei erfolgreicher Authentifizierung ein Token an den Browser des Nutzers zurückgibt. Der Browser des Nutzers sendet das Token an die Website, die überprüfen kann, ob es vom IdP ausgestellt wurde. Wenn die Überprüfung erfolgreich ist, kann die Website den Nutzer anmelden.

Föderierte Identität wird oft als Dienst von Unternehmen bereitgestellt: Zum Beispiel können Nutzer, die über Google-, Microsoft- oder Facebook-Konten verfügen, diese nutzen, um sich bei vielen Websites anzumelden. Websites müssen typischerweise einen Prozess implementieren, um Token zu verifizieren, der spezifisch für einen Identity Provider ist. Dennoch werden offene Standards wie [OpenID](https://en.wikipedia.org/wiki/OpenID), [OAuth](https://en.wikipedia.org/wiki/OAuth) und [SAML](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) häufig in der Implementierung von föderierten Identitätssystemen verwendet.

Obwohl föderierte Identität das Einloggen in mehrere verschiedene Konten für Nutzer erheblich erleichtert und die Sicherheit stark verbessern kann, kann sie ernsthafte Auswirkungen auf die Privatsphäre eines Nutzers haben. Wenn sie nicht sorgfältig gestaltet ist, kann ein föderiertes Identitätssystem Identity Providern ermöglichen, Nutzer über das Web zu verfolgen, wenn sie sich in mehrere verschiedene Sites einloggen. Frühere föderierte Identitätssysteme im Web basierten auf Technologien wie Drittanbieter-Cookies, die von Natur aus privatsphärenverletzend sind. Da diese Technologien von Browsern abgeschafft werden, sind neue Ansätze erforderlich. Die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) bietet einen standardisierten, privatsphärenschonenden Mechanismus für föderierte Identität im Web.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Relying_party", "Reliant Party")}}
  - {{Glossary("Identity_provider", "Identity Provider")}}
- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)

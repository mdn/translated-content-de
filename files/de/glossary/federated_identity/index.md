---
title: Föderierte Identität
slug: Glossary/Federated_identity
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **föderiertes Identitätssystem** ist eines, bei dem ein {{Glossary("identity_provider", "Identity Provider (IdP)")}} als Vermittler zwischen Benutzern und {{Glossary("relying_party", "Vertrauensstellen")}} agiert, sodass ein Benutzer ein einziges Set von {{Glossary("credential", "Anmeldedaten")}} verwenden kann, um sich bei verschiedenen Vertrauensstellen zu authentifizieren.

Traditionell meldet sich ein Benutzer im Web mit einem Benutzernamen und einem Passwort bei einer Website an, und das Passwort wird von der Website mit einer (ordnungsgemäß {{Glossary("hash_function", "gehashten")}} und {{Glossary("salt", "gesalzenen")}}) Kopie im Backend der Website überprüft.

In diesem Modell müssen sich Benutzer, die mehrere Konten bei verschiedenen Websites haben, viele Passwörter merken, was schlechte Passwortpraktiken wie die Verwendung desselben Passworts für mehrere Konten fördert.

In einem föderierten Identitätssystem:

- verwaltet ein Identity Provider die Anmeldedaten eines Benutzers und kann Benutzer authentifizieren
- wird von mehreren Websites vertraut, Aussagen über die Identität eines Benutzers zu machen.

Ein Benutzer kann sich dann beim Identity Provider authentifizieren, der, falls die Authentifizierung erfolgreich ist, ein Token an den Browser des Benutzers zurückgibt. Der Browser des Benutzers sendet das Token an die Website, die überprüfen kann, ob es vom IdP ausgestellt wurde. Wenn die Überprüfung erfolgreich ist, kann die Website den Benutzer anmelden.

Föderierte Identität wird häufig von Unternehmen als Dienst angeboten: Benutzer mit einem Google-, Microsoft- oder Facebook-Konto können diese beispielsweise verwenden, um sich bei vielen Websites anzumelden. Websites müssen in der Regel einen Prozess zur Überprüfung von Token implementieren, der spezifisch für einen Identity Provider ist. Offene Standards wie [OpenID](https://en.wikipedia.org/wiki/OpenID), [OAuth](https://en.wikipedia.org/wiki/OAuth) und [SAML](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) werden jedoch häufig bei der Implementierung von föderierten Identitätssystemen verwendet.

Obwohl föderierte Identität das Einloggen in mehrere unterschiedliche Konten für Benutzer erheblich erleichtert und die Sicherheit erheblich verbessern kann, kann sie ernsthafte Auswirkungen auf die Privatsphäre eines Benutzers haben. Wenn ein föderiertes Identitätssystem nicht sorgfältig gestaltet ist, kann es den Identity Providern ermöglichen, Benutzer im Web zu verfolgen, während sie sich bei mehreren verschiedenen Websites anmelden. Frühe föderierte Identitätssysteme im Web basierten auf Technologien wie Drittanbieter-Cookies, die von Natur aus datenschutzinvasiv sind. Da diese Technologien von Browsern abgelehnt werden, sind neue Ansätze erforderlich. Die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) bietet einen standardisierten, datenschutzfreundlichen Mechanismus für föderierte Identität im Web.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Relying_party", "Vertrauensstelle")}}
  - {{Glossary("Identity_provider", "Identity Provider")}}
- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)

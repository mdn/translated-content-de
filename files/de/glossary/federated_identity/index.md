---
title: Federated identity
slug: Glossary/Federated_identity
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Ein **federated identity**-System ist eines, bei dem ein [Identity Provider (IdP)](/de/docs/Glossary/identity_provider) als Vermittler zwischen Benutzern und [Relying Parties](/de/docs/Glossary/relying_party) fungiert und es einem Benutzer ermöglicht, ein einziges Set von [Anmeldedaten](/de/docs/Glossary/credential) zu verwenden, um sich bei verschiedenen Relying Parties zu authentifizieren.

Traditionell meldet sich ein Benutzer im Web auf einer Website mit einem Benutzernamen und einem Passwort an, und das Passwort wird von der Website gegen eine (ordnungsgemäß [gehashte](/de/docs/Glossary/hash) und [gesalzene](/de/docs/Glossary/salt)) Kopie überprüft, die im Backend der Website gespeichert ist.

In diesem Modell müssen sich Benutzer, die mehrere Konten bei verschiedenen Websites haben, viele Passwörter merken. Dies fördert schlechte Passwortpraktiken wie die Verwendung desselben Passworts für mehrere Konten.

In einem federated identity-System verwaltet ein Identity Provider:

- die Anmeldedaten eines Benutzers und kann Benutzer authentifizieren
- wird von mehreren Websites vertraut, um Aussagen über die Identität eines Benutzers zu machen.

Ein Benutzer kann sich dann beim Identity Provider authentifizieren, der bei erfolgreicher Authentifizierung ein Token an den Browser des Benutzers zurückgibt. Der Browser des Benutzers sendet das Token an die Website, die überprüfen kann, ob es vom IdP ausgestellt wurde. Wenn die Überprüfung erfolgreich ist, kann die Website den Benutzer anmelden.

Federated identity wird häufig als Dienstleistung von Unternehmen angeboten: Zum Beispiel können Benutzer, die über Google-, Microsoft- oder Facebook-Konten verfügen, sich damit auf vielen Websites anmelden. Websites müssen in der Regel einen Prozess implementieren, um Token zu überprüfen, der spezifisch für einen Identity Provider ist. Offene Standards wie [OpenID](https://en.wikipedia.org/wiki/OpenID), [OAuth](https://en.wikipedia.org/wiki/OAuth) und [SAML](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) werden jedoch häufig bei der Implementierung von federated identity-Systemen verwendet.

Obwohl federated identity das Anmelden bei mehreren verschiedenen Konten für Benutzer erheblich erleichtert und die Sicherheit erheblich verbessern kann, kann es ernsthafte Auswirkungen auf die Privatsphäre eines Benutzers haben. Wenn nicht sorgfältig gestaltet, kann ein federated identity-System es Identity Providern ermöglichen, Benutzer im Web zu verfolgen, während sie sich bei mehreren verschiedenen Websites anmelden. Frühe federated identity-Systeme im Web basierten auf Technologien wie Drittanbieter-Cookies, die in ihrer Natur datenschutzinvasiv sind. Da diese Technologien von Browsern abgeschafft werden, sind neue Ansätze erforderlich. Die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) bietet einen standardisierten, datenschutzfreundlichen Mechanismus für federated identity im Web.

## Siehe auch

- Verwandte Glossareinträge:
  - [Relying Party](/de/docs/Glossary/Relying_party)
  - [Identity Provider](/de/docs/Glossary/Identity_provider)
- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)

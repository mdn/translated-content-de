---
title: Föderierte Identität
slug: Glossary/Federated_identity
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Ein **föderiertes Identitätssystem** ist ein System, in dem ein [Identity Provider (IdP)](/de/docs/Glossary/identity_provider) als Vermittler zwischen Nutzern und [Relying Parties](/de/docs/Glossary/relying_party) fungiert und es einem Nutzer ermöglicht, ein einziges Satz von [Anmeldedaten](/de/docs/Glossary/credential) zu verwenden, um sich bei einer Vielzahl verschiedener Relying Parties zu authentifizieren.

Traditionell meldet sich ein Nutzer im Web mit einem Benutzernamen und einem Passwort auf einer Website an, und das Passwort wird von der Website mit einer (korrekt [gehashen](/de/docs/Glossary/hash) und [gesalzenen](/de/docs/Glossary/salt)) Kopie, die im Backend der Website gespeichert ist, verifiziert.

In diesem Modell müssen sich Nutzer, die mehrere Konten bei verschiedenen Websites haben, viele Passwörter merken, was schlechte Passwortpraktiken begünstigt, wie z.B. die Verwendung desselben Passworts für mehrere Konten.

In einem föderierten Identitätssystem verwaltet ein Identity Provider:

- die Anmeldedaten eines Nutzers und kann Nutzer authentifizieren
- wird von mehreren Websites vertraut, Aussagen über die Identität eines Nutzers zu treffen.

Ein Nutzer kann sich dann beim Identity Provider authentifizieren, der bei erfolgreicher Authentifizierung ein Token an den Browser des Nutzers zurückgibt. Der Browser des Nutzers sendet das Token an die Website, die überprüfen kann, dass es vom IdP ausgestellt wurde. Wenn die Überprüfung erfolgreich ist, kann die Website den Nutzer anmelden.

Föderierte Identität wird oft als Dienst von Unternehmen angeboten: Zum Beispiel können Nutzer, die ein Google-, Microsoft- oder Facebook-Konto haben, diese verwenden, um sich bei vielen Websites anzumelden. Websites müssen typischerweise einen Prozess zur Überprüfung von Tokens implementieren, der spezifisch für einen Identity Provider ist. Jedoch sind offene Standards wie [OpenID](https://en.wikipedia.org/wiki/OpenID), [OAuth](https://en.wikipedia.org/wiki/OAuth) und [SAML](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) weit verbreitet in der Implementierung von föderierten Identitätssystemen.

Obwohl föderierte Identität das Anmelden bei mehreren verschiedenen Konten für Nutzer erheblich erleichtert und die Sicherheit deutlich verbessern kann, kann sie ernsthafte Auswirkungen auf die Privatsphäre eines Nutzers haben. Wenn ein federiertes Identitätssystem nicht sorgfältig gestaltet ist, kann es den Identity Providern ermöglichen, Nutzer im Web zu verfolgen, wenn sie sich bei mehreren verschiedenen Websites anmelden. Frühe federierte Identitätssysteme im Web bauten auf Technologien wie Drittanbieter-Cookies auf, die von Natur aus die Privatsphäre verletzen. Da diese Technologien von Browsern abgeschafft werden, sind neue Ansätze erforderlich. Die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) bietet einen standardisierten, datenschutzfreundlichen Mechanismus für föderierte Identitäten im Web.

## Siehe auch

- Verwandte Glossarbegriffe:
  - [Relying Party](/de/docs/Glossary/Relying_party)
  - [Identity Provider](/de/docs/Glossary/Identity_provider)
- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)

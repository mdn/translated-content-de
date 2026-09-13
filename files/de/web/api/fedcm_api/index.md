---
title: Federated Credential Management (FedCM) API
slug: Web/API/FedCM_API
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{SeeCompatTable}}{{DefaultAPISidebar("FedCM API")}}

Die **Federated Credential Management API** (oder _FedCM API_) bietet einen standardisierten Mechanismus, mit dem {{Glossary("Identity_provider", "Identitätsanbieter (IdPs)")}} Identitätsfederationsdienste auf der Webplattform datenschutzfreundlich bereitstellen können, ohne dass [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und Weiterleitungen erforderlich sind. Dies beinhaltet eine JavaScript-API, die die Verwendung von föderierter Authentifizierung für Aktivitäten wie das Ein- oder Anmelden auf einer Website ermöglicht.

## FedCM-Konzepte

Identitätsfederation ist die Delegation der Benutzerauthentifizierung von einer Website, die eine Benutzeranmeldung oder -registrierung erfordert, wie beispielsweise eine E-Commerce- oder Social-Networking-Site (auch bekannt als {{Glossary("Relying_party", "Reliant Party")}} oder RP), an einen vertrauenswürdigen Identitätsanbieter (IdP) wie Google, Facebook/Meta, GitHub usw.

RPs können sich mit IdPs integrieren, sodass Benutzer sich mit den Konten anmelden können, die sie beim IdP registriert haben. Die Identitätsfederation über eine kleine Anzahl dedizierter IdPs hat die Web-Authentifizierung in Bezug auf Sicherheit, Verbrauchervertrauen und Benutzererfahrung verbessert, verglichen mit der Verwaltung von Anmeldeanforderungen durch jede Website mit separaten Benutzernamen und Passwörtern.

Das Problem ist, dass die traditionelle Identitätsfederation auf {{htmlelement("iframe")}}s, Weiterleitungen und Drittanbieter-Cookies beruht, die auch für Drittverfolgung verwendet werden. Browser schränken die Nutzung dieser Funktionen ein, um die Privatsphäre der Benutzer zu schützen, aber ein Nebeneffekt ist, dass dies die Implementierung von gültigen, nicht-verfolgenden Verwendungen erschwert, zu denen auch die Identitätsfederation gehört.

Dies betrifft die föderierte Anmeldung im Allgemeinen sowie spezifischere Anwendungsfälle der Identitätsfederation:

- [OIDC-Front-Channel-Logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html): Dieser Ablauf erfordert, dass der IDP mehrere RP `<iframe>`s einbettet, die auf RP-Cookies angewiesen sind.
- Soziale Widgets: Um soziale Widgets bereitzustellen, muss das IdP-Drittanbieter-Cookie von der RP-Top-Level-Herkunft bereitgestellt werden.
- Personalisierte Buttons: Die Anzeige personalisierter Anmeldeinformationen auf einem {{htmlelement("button")}} in der RP-Herkunft wird als ein IdP-`<iframe>` implementiert, das Drittanbieter-Cookies erfordert.
- Sitzungsaktualisierung ohne Top-Level-Navigation oder Popups.

FedCM zielt darauf ab, dieses Problem zu umgehen, indem ein dedizierter Mechanismus für föderierte Identitätsflüsse im Web bereitgestellt wird und unterstützende Browser spezielle UI-Elemente auf RPs bereitstellen, die es Benutzern ermöglichen, ein IdP-Konto zur Anmeldung auszuwählen.

Es gibt zwei Teile bei der Verwendung der FedCM-API, die in den unten verlinkten Leitfäden abgedeckt sind:

1. [IdP-Integration mit FedCM](/de/docs/Web/API/FedCM_API/IDP_integration) — was ein Identitätsanbieter bereitstellen muss, damit sich eine RP mit ihm integrieren kann.
2. [RP-föderierte Anmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in) — die FedCM-Funktionalität, die eine RP benötigt, um einen Benutzer mit seinem IdP-Konto anzumelden. Eine FedCM-Anmeldeanforderung wird mit der Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) initiiert.

> [!NOTE]
> [Google Sign In](https://developers.google.com/identity/gsi/web/guides/overview) ist ein Beispiel für einen IdP, der FedCM bereits unterstützt. [Auf FedCM migrieren](https://developers.google.com/identity/gsi/web/guides/fedcm-migration) bietet Anweisungen für RPs, die bestehende Apps unter Verwendung von Google Sign In zu federierten Anmeldungen migrieren möchten.

## Integration der Permissions-Policy und `<iframe>`-Unterstützung

Die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) kann verwendet werden, um die Berechtigung zur Verwendung von FedCM zu steuern.
Genauer gesagt, erlaubt sie die Nutzung der folgenden Methoden:

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get)
- [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static)
- [`IdentityProvider.getUserInfo()`](/de/docs/Web/API/IdentityProvider/getUserInfo_static)

Entwickler können einem {{htmlelement("iframe")}} explizit die Erlaubnis erteilen, FedCM über das `allow`-Attribut zu verwenden:

```html
<iframe src="3rd-party.example" allow="identity-credentials-get"></iframe>
```

Die Verfügbarkeit von FedCM innerhalb von `<iframe>`s ermöglicht eine Reihe von Anwendungsfällen:

- Größere Websites möchten nicht, dass ein Drittanbieter-Anmeldeskript die Kontrolle über den Top-Level-Frame übernimmt; stattdessen wollen sie dieses Skript hinzufügen und FedCM aus einem {{htmlelement("iframe")}} heraus aufrufen.
- Einige `<iframes>` können selbst eine föderierte Authentifizierung erfordern.

## Schnittstellen

- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
  - : Repräsentiert eine Benutzeridentitätsberechtigung, die aus einer erfolgreichen föderierten Authentifizierung resultiert. Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option beinhaltet, führt zu einer Erfüllung mit einer Instanz von [`IdentityCredential`](/de/docs/Web/API/IdentityCredential).
- [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError)
  - : Repräsentiert einen Authentifizierungsfehler, der darauf hinweist, dass der User-Agent keine Identitätsbehauptung erhalten hat, nachdem der Benutzer die Authentifizierung mit einer föderierten Berechtigung angefordert hat.
- [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)
  - : Repräsentiert einen IdP und bietet Zugang zu verwandten Informationen und Funktionalitäten.
- [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)
  - : Definiert Anmeldefunktionalität für IdPs, einschließlich der Methode [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus) zur [Aktualisierung des IdP-Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `identity`-Option.
  - : `identity` ist ein Objekt, das Details von föderierten IdPs enthält, die eine Reliant Party (RP)-Website verwenden kann, um Benutzer anzumelden. Es führt dazu, dass ein `get()`-Aufruf eine Anfrage initiiert, damit sich ein Benutzer mit einem IdP bei einer RP anmeldet.
- [`Navigator.login`](/de/docs/Web/API/Navigator/login)
  - : Bietet Zugang zum [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Objekt des Browsers.

## HTTP-Header

- {{httpheader("Set-Login")}}
  - : Bietet einen HTTP-Mechanismus zur [Aktualisierung des Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) über HTTP.

## Beispiele

Für Beispielcode, siehe:

- [Implementieren einer Identitätslösung mit FedCM auf der Identitätsanbieter-Seite](https://developer.chrome.com/docs/identity/fedcm/implement/identity-provider) auf developer.chrome.com (2025)
- [Implementieren einer Identitätslösung mit FedCM auf der Reliant Party-Seite](https://developer.chrome.com/docs/identity/fedcm/implement/relying-party) auf developer.chrome.com (2025)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview)

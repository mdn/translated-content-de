---
title: Federated Credential Management (FedCM) API
slug: Web/API/FedCM_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}{{DefaultAPISidebar("FedCM API")}}

Die **Föderierte Berechtigungsmanagement-API** (oder _FedCM API_) bietet einen standardisierten Mechanismus für Identitätsanbieter (IdPs), um Identitätsföderierungsdienste auf datenschutzfreundliche Weise im Web verfügbar zu machen, ohne dass [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und Weiterleitungen notwendig sind. Dazu gehört eine JavaScript-API, die die Nutzung föderierter Authentifizierung für Aktivitäten wie das Anmelden oder Registrieren auf einer Website ermöglicht.

## FedCM-Konzepte

Identitätsföderation ist die Delegation der Benutzer-Authentifizierung von einer Website, die eine Benutzeranmeldung oder -registrierung erfordert, wie z.B. eine E-Commerce- oder Social-Networking-Site (auch als relying party oder RP bekannt), an einen vertrauenswürdigen Drittanbieter-Identitätsanbieter (IdP) wie Google, Facebook/Meta, GitHub usw.

Relying Parties (RPs) können sich mit IdPs integrieren, sodass Benutzer sich mit den Konten anmelden können, die sie beim IdP registriert haben. Die Identitätsföderation über eine kleine Gruppe spezialisierter IdPs hat die Web-Authentifizierung in Bezug auf Sicherheit, Verbrauchervertrauen und Benutzererfahrung verbessert, verglichen mit der Verwaltung der eigenen Anmeldedaten auf jeder Website mit separaten Benutzernamen und Passwörtern.

Das Problem ist, dass traditionelle Identitätsföderation auf {{htmlelement("iframe")}}s, Weiterleitungen und Third-Party-Cookies basiert, die auch für Tracking durch Dritte verwendet werden. Browser schränken die Nutzung dieser Funktionen ein, um die Privatsphäre der Nutzer zu schützen, aber ein Nebeneffekt ist, dass dies die Implementierung gültiger, nicht verfolgungsbezogener Zwecke erschwert, wozu auch die Identitätsföderation gehört.

Dies betrifft die föderierte Anmeldung im Allgemeinen sowie spezifischere Anwendungsfälle der Identitätsföderation:

- [OIDC Front-Channel-Logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html): Dieser Ablauf erfordert, dass der IDP mehrere RP `<iframe>`s einbettet, die auf RP-Cookies angewiesen sind.
- Soziale Widgets: Um soziale Widgets bereitzustellen, muss das IdP-Third-Party-Cookie von der RP-Top-Level-Quelle zur Verfügung gestellt werden.
- Personalisierte Buttons: Die Anzeige personalisierter Anmeldeinformationen auf einem {{htmlelement("button")}} in der RP-Herkunft wird als IdP-`<iframe>` implementiert, das Third-Party-Cookies benötigt.
- Sitzungsaktualisierung ohne Top-Level-Navigation oder Popups.

FedCM zielt darauf ab, dieses Problem zu umgehen, indem es einen speziellen Mechanismus für föderierte Identitätsabläufe im Web bereitstellt und unterstützenden Browsern ermöglicht, spezielle UI-Elemente auf RPs bereitzustellen, die es Benutzern erlauben, ein IdP-Konto zur Anmeldung auszuwählen.

Es gibt zwei Teile zur Nutzung der FedCM API, die in den unten verlinkten Leitfäden behandelt werden:

1. [IdP-Integration mit FedCM](/de/docs/Web/API/FedCM_API/IDP_integration) — was ein Identitätsanbieter bereitstellen muss, damit ein RP sich mit ihm integrieren kann.
2. [RP-Föderierte Anmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in) — die FedCM-Funktionalität, die ein RP nutzen muss, um einen Benutzer mit seinem IdP-Konto anzumelden. Eine FedCM-Anmeldeanforderung wird mit der Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) initiiert.

> **Hinweis:** [Google Sign In](https://developers.google.com/identity/gsi/web/guides/overview) ist ein Beispiel für einen IdP, der FedCM bereits unterstützt. [Migration zu FedCM](https://developers.google.com/identity/gsi/web/guides/fedcm-migration) bietet Anleitungen für RPs, die bestehende Apps, die Google Sign In verwenden, auf föderierte Anmeldung umstellen möchten.

## Integration der Berechtigungspolitik und `<iframe>`-Unterstützung

Die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) kann verwendet werden, um die Berechtigung zur Nutzung von FedCM zu steuern, insbesondere die Nutzung der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Methode.

Entwickler können einem {{htmlelement("iframe")}} ausdrücklich die Berechtigung zur Nutzung von FedCM über das `allow`-Attribut erteilen:

```html
<iframe src="3rd-party.example" allow="identity-credentials-get"></iframe>
```

Die Verfügbarkeit von FedCM innerhalb von `<iframe>`s ermöglicht einige Anwendungsfälle:

- Größere Websites möchten nicht, dass ein Drittanbieter-Anmeldeskript die Kontrolle über den obersten Rahmen übernimmt; stattdessen möchten sie dieses Skript hinzufügen und FedCM aus einem {{htmlelement("iframe")}} heraus aufrufen.
- Einige `<iframes>` könnten selbst eine föderierte Authentifizierung erfordern.

## Schnittstellen

- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
  - : Stellt ein Benutzeridentitätsnachweis dar, der aus einer erfolgreichen föderierten Authentifizierung hervorgeht. Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option enthält, wird mit einer [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Instanz erfüllt.
- [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)
  - : Stellt einen IdP dar und bietet Zugriff auf verwandte Informationen und Funktionen.
- [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)
  - : Definiert Anmeldefunktionen für IdPs, einschließlich der Methode [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus) zur [Aktualisierung des IdP-Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `identity`-Option.
  - : `identity` ist ein Objekt, das Details zu föderierten IdPs enthält, die eine Relying Party (RP) Website zur Anmeldung von Nutzern verwenden kann. Es verursacht, dass ein `get()`-Aufruf eine Anfrage zur Anmeldung eines Nutzers bei einem RP mit einem IdP initiiert.
- [`Navigator.login`](/de/docs/Web/API/Navigator/login)
  - : Bietet Zugang zum [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Objekt des Browsers.

## HTTP-Header

- {{httpheader("Set-Login")}}
  - : Bietet einen HTTP-Mechanismus zur [Aktualisierung des Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) über HTTP.

## Beispiele

- [FedCM-Anmeldebeispiel](https://fedcm-rp-demo.glitch.me/)
  - [RP-Quellcode](https://glitch.com/edit/#!/fedcm-rp-demo?path=server.js%3A1%3A0)
  - [IdP-Quellcode](https://glitch.com/edit/#!/fedcm-idp-demo?path=server.js%3A1%3A0)
- [FedCM `<iframe>`-Anmeldung](https://fedcm-main-frame.glitch.me/)
  - [RP `<iframe>`-Seitenquellcode](https://glitch.com/edit/#!/fedcm-main-frame?path=index.html%3A1%3A0)
  - [IdP-Quellcode](https://glitch.com/edit/#!/webid-fcm-idp-single?path=server.js%3A1%3A0)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm)

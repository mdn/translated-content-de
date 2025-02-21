---
title: Federated Credential Management (FedCM) API
slug: Web/API/FedCM_API
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{SeeCompatTable}}{{DefaultAPISidebar("FedCM API")}}

Die **Federated Credential Management API** (oder _FedCM API_) bietet einen Standardmechanismus für Identitätsanbieter (IdPs), um Identitätsföderationsdienste auf datenschutzfreundliche Weise im Web bereitzustellen, ohne auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und Umleitungen angewiesen zu sein. Dies umfasst eine JavaScript-API, die die Nutzung von föderierter Authentifizierung für Aktivitäten wie das Einloggen oder Registrieren auf einer Website ermöglicht.

## FedCM-Konzepte

Identitätsföderation ist die Delegierung der Benutzeranmeldung von einer Website, die eine Benutzeranmeldung benötigt, wie z.B. eine E-Commerce- oder soziale Netzwerkseite (auch bekannt als Relying Party oder RP), an einen vertrauenswürdigen Drittanbieter für Identitäten (IdP) wie Google, Facebook/Meta, GitHub usw.

Relying Parties (RPs) können sich mit IdPs integrieren, sodass Benutzer sich mit den Konten anmelden können, die sie beim IdP registriert haben. Die Identitätsföderation über eine kleine Anzahl von dedizierten IdPs hat die Web-Authentifizierung in Bezug auf Sicherheit, Verbrauchervertrauen und Benutzererfahrung verbessert, im Vergleich dazu, dass jede Seite ihre eigenen Anmeldeanforderungen mit separaten Benutzernamen und Passwörtern verwaltet.

Das Problem ist, dass die traditionelle Identitätsföderation auf {{htmlelement("iframe")}}s, Umleitungen und Drittanbieter-Cookies angewiesen ist, die auch für Drittanbieter-Tracking verwendet werden. Browser schränken die Verwendung dieser Funktionen ein, um die Privatsphäre der Benutzer zu wahren, und ein Nebeneffekt ist, dass dies die Umsetzung legitimer, nicht-trackingbezogener Anwendungen erschwert, was die Identitätsföderation einschließt.

Dies betrifft die föderierte Anmeldung im Allgemeinen sowie spezifischere Anwendungsfälle der Identitätsföderation:

- [OIDC Front-Channel-Abmeldung](https://openid.net/specs/openid-connect-frontchannel-1_0.html): Dieser Ablauf erfordert, dass der IDP mehrere RP `<iframe>`s einbettet, die sich auf RP-Cookies verlassen.
- Soziale Widgets: Um soziale Widgets bereitzustellen, muss das IdP-Drittanbieter-Cookie aus dem RP-Top-Level-Ursprung bereitgestellt werden.
- Personalisierte Schaltflächen: Die Anzeige personalisierter Anmeldeinformationen auf einem {{htmlelement("button")}} im RP-Ursprung wird als IdP-`<iframe>` implementiert, das Drittanbieter-Cookies benötigt.
- Session-Aktualisierung ohne Top-Level-Navigation oder Popups.

FedCM zielt darauf ab, dieses Problem zu umgehen, indem ein dedizierter Mechanismus für föderierte Identitätsflüsse im Web bereitgestellt wird, und ermöglicht es unterstützenden Browsern, spezielle UI-Elemente auf RPs bereitzustellen, die es Benutzern ermöglichen, ein IdP-Konto zur Anmeldung auszuwählen.

Es gibt zwei Teile bei der Nutzung der FedCM API, die in den unten verlinkten Leitfäden behandelt werden:

1. [IdP-Integration mit FedCM](/de/docs/Web/API/FedCM_API/IDP_integration) — was ein Identitätsanbieter bereitstellen muss, damit ein RP sich integrieren kann.
2. [RP föderierte Anmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in) — die FedCM-Funktionalität, die ein RP nutzen muss, um einen Benutzer mit seinem IdP-Konto anzumelden. Eine FedCM-Anmeldeanforderung wird mit der Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) initiiert.

> **Note:** [Google Sign In](https://developers.google.com/identity/gsi/web/guides/overview) ist ein Beispiel für einen IdP, der FedCM bereits unterstützt. [Auf FedCM migrieren](https://developers.google.com/identity/gsi/web/guides/fedcm-migration) bietet Anweisungen für RPs, die bestehende Apps, die Google Sign In verwenden, auf föderierte Anmeldung migrieren möchten.

## Integration der Berechtigungsrichtlinie und `<iframe>`-Unterstützung

Die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) kann verwendet werden, um die Berechtigung zur Nutzung von FedCM zu steuern, insbesondere die Nutzung der Methode [`get()`](/de/docs/Web/API/CredentialsContainer/get).

Entwickler können explizit die Berechtigung erteilen, dass ein {{htmlelement("iframe")}} FedCM über das `allow`-Attribut nutzen darf:

```html
<iframe src="3rd-party.example" allow="identity-credentials-get"></iframe>
```

Die Verfügbarkeit von FedCM innerhalb von `<iframe>`s ermöglicht einige Anwendungsfälle:

- Größere Sites möchten nicht, dass ein Drittanbieter-Skript die Kontrolle über den Top-Level-Frame erhält; stattdessen möchten sie dieses Skript hinzufügen und FedCM aus einem {{htmlelement("iframe")}} heraus aufrufen.
- Einige `<iframes>` könnten selbst eine föderierte Authentifizierung erfordern.

## Schnittstellen

- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
  - : Repräsentiert ein Benutzeridentitätsnachweis, das aus einer erfolgreichen föderierten Authentifizierung resultiert. Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option erfüllt sich mit einer Instanz von [`IdentityCredential`](/de/docs/Web/API/IdentityCredential).
- [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)
  - : Repräsentiert einen IdP und bietet Zugang zu verwandten Informationen und Funktionen.
- [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)
  - : Definiert Anmeldefunktionalität für IdPs, einschließlich der Methode [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus) für [Aktualisierung des IdP-Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `identity`-Option.
  - : `identity` ist ein Objekt, das Details zu föderierten IdPs enthält, die eine Relying Party (RP) Website zur Anmeldung von Benutzern verwenden kann. Es verursacht, dass ein `get()`-Aufruf eine Anfrage initiiert, damit sich ein Benutzer mit einem IdP bei einer RP anmeldet.
- [`Navigator.login`](/de/docs/Web/API/Navigator/login)
  - : Bietet Zugang zum [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Objekt des Browsers.

## HTTP-Header

- {{httpheader("Set-Login")}}
  - : Bietet einen HTTP-Mechanismus zum [Aktualisieren des Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) über HTTP.

## Beispiele

- [FedCM-Anmeldebeispiel](https://fedcm-rp-demo.glitch.me/)
  - [RP-Quellcode](https://glitch.com/edit/#!/fedcm-rp-demo?path=server.js%3A1%3A0)
  - [IdP-Quellcode](https://glitch.com/edit/#!/fedcm-idp-demo?path=server.js%3A1%3A0)
- [FedCM `<iframe>`-Anmeldung](https://fedcm-main-frame.glitch.me/)
  - [RP `<iframe>`-Seitencode](https://glitch.com/edit/#!/fedcm-main-frame?path=index.html%3A1%3A0)
  - [IdP-Quellcode](https://glitch.com/edit/#!/webid-fcm-idp-single?path=server.js%3A1%3A0)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm)

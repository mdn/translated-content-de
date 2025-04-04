---
title: Federated Credential Management (FedCM) API
slug: Web/API/FedCM_API
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{DefaultAPISidebar("FedCM API")}}

Die **Federated Credential Management API** (oder _FedCM API_) bietet einen standardisierten Mechanismus für Identitätsanbieter (IdPs), um Identitätsföderationsdienste im Web auf datenschutzfreundliche Weise verfügbar zu machen, ohne dass [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und Umleitungen erforderlich sind. Dazu gehört eine JavaScript-API, die es ermöglicht, föderierte Authentifizierung für Aktivitäten wie das Anmelden oder Registrieren auf einer Website zu nutzen.

## FedCM-Konzepte

Identitätsföderation ist die Delegierung der Benutzer-Authentifizierung von einer Website, die eine Benutzeranmeldung oder -registrierung erfordert, wie zum Beispiel einer E-Commerce- oder sozialen Netzwerkseite (auch bekannt als reliant party oder RP), an einen vertrauenswürdigen Drittanbieter-Identitätsanbieter (IdP) wie Google, Facebook/Meta, GitHub usw.

Reliant Parties (RPs) können sich mit IdPs integrieren, sodass Benutzer sich mit den Konten anmelden können, die sie beim IdP registriert haben. Die Identitätsföderation über eine kleine Anzahl dedizierter IdPs hat die Web-Authentifizierung in Bezug auf Sicherheit, Verbrauchervertrauen und Benutzererfahrung verbessert, verglichen mit dem Fall, dass jede Website ihre eigenen Anmeldebedürfnisse mit separaten Benutzernamen und Passwörtern verwaltet.

Das Problem besteht darin, dass die traditionelle Identitätsföderation auf {{htmlelement("iframe")}}s, Umleitungen und Drittanbieter-Cookies setzt, die auch für Drittanbieter-Tracking verwendet werden. Browser schränken die Nutzung dieser Funktionen ein, um die Privatsphäre der Benutzer zu wahren, was als Nebeneffekt die Umsetzung anderer, nicht-tracking-relevanter Nutzungen erschwert, wozu auch die Identitätsföderation gehört.

Dies betrifft allgemein das föderierte Anmelden sowie spezifischere Anwendungsfälle der Identitätsföderation:

- [OIDC Front-Channel Logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html): Dieser Ablauf erfordert, dass der IdP mehrere RP-`<iframe>`s einbettet, die auf RP-Cookies angewiesen sind.
- Soziale Widgets: Um soziale Widgets bereitzustellen, muss das Drittanbieter-Cookie des IdP vom RP-Top-Level-Ursprung bereitgestellt werden.
- Personalisierte Schaltflächen: Die Anzeige von personalisierten Anmeldeinformationen auf einer {{htmlelement("button")}} im RP-Ursprung wird als IdP-`<iframe>` implementiert, das Drittanbieter-Cookies benötigt.
- Sitzungsaktualisierung ohne Top-Level-Navigation oder Pop-ups.

FedCM zielt darauf ab, dieses Problem zu umgehen, indem es einen dedizierten Mechanismus für Föderationsabläufe auf dem Web zur Verfügung stellt und unterstützende Browser ermöglicht, spezielle UI-Elemente auf RPs bereitzustellen, die es Benutzern erlauben, ein IdP-Konto für die Anmeldung auszuwählen.

Es gibt zwei Teile zur Verwendung der FedCM API, die in den unten verlinkten Leitfäden behandelt werden:

1. [IdP-Integration mit FedCM](/de/docs/Web/API/FedCM_API/IDP_integration) — was ein Identitätsanbieter bereitstellen muss, damit ein RP sich mit ihm integrieren kann.
2. [RP-Föderierte Anmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in) — die FedCM-Funktionalität, die ein RP nutzen muss, um einen Benutzer mit seinem IdP-Konto anzumelden. Eine FedCM-Anmeldeanforderung wird mit der Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) initiiert.

> **Hinweis:** [Google Sign In](https://developers.google.com/identity/gsi/web/guides/overview) ist ein Beispiel für einen IdP, der bereits FedCM unterstützt. [Zu FedCM migrieren](https://developers.google.com/identity/gsi/web/guides/fedcm-migration) bietet Anleitungen für RPs, die bestehende Apps, die Google Sign In verwenden, auf föderierte Anmeldung umstellen möchten.

## Integration der Berechtigungsrichtlinie und `<iframe>`-Unterstützung

Die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) kann verwendet werden, um die Erlaubnis für die Nutzung von FedCM zu steuern, insbesondere die Nutzung der Methode [`get()`](/de/docs/Web/API/CredentialsContainer/get).

Entwickler können explizit die Erlaubnis für ein {{htmlelement("iframe")}} erteilen, FedCM über das `allow`-Attribut zu verwenden:

```html
<iframe src="3rd-party.example" allow="identity-credentials-get"></iframe>
```

Die Verfügbarkeit von FedCM innerhalb von `<iframe>`s ermöglicht einige Anwendungsfälle:

- Größere Websites möchten vielleicht nicht, dass ein Drittanbieter-Anmeldeskript die Kontrolle über den Top-Level-Frame übernimmt; stattdessen möchten sie dieses Skript hinzufügen und FedCM aus einem {{htmlelement("iframe")}} aufrufen.
- Einige `<iframes>` können selbst eine föderierte Authentifizierung benötigen.

## Schnittstellen

- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
  - : Repräsentiert ein Benutzeridentitätszeugnis, das aus einer erfolgreichen föderierten Authentifizierung resultiert. Ein erfolgreicher [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf, der eine `identity`-Option enthält, wird mit einer [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Instanz erfüllt.
- [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)
  - : Repräsentiert einen IdP und bietet Zugriff auf verwandte Informationen und Funktionalitäten.
- [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)
  - : Definiert die Anmeldefunktionalität für IdPs, einschließlich der Methode [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus) zum [Aktualisieren des IdP-Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `identity`-Option.
  - : `identity` ist ein Objekt mit Details über föderierte IdPs, die eine reliant party (RP)-Website verwenden kann, um Benutzer anzumelden. Es veranlasst einen `get()`-Aufruf, eine Anfrage zu initiieren, damit sich ein Benutzer bei einem RP mit einem IdP anmeldet.
- [`Navigator.login`](/de/docs/Web/API/Navigator/login)
  - : Bietet Zugriff auf das `NavigatorLogin`-Objekt des Browsers.

## HTTP-Header

- {{httpheader("Set-Login")}}
  - : Bietet einen HTTP-Mechanismus, um den [Anmeldestatus zu aktualisieren](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) über HTTP.

## Beispiele

- [FedCM-Anmeldebeispiel](https://fedcm-rp-demo.glitch.me/)
  - [RP-Quellcode](https://glitch.com/edit/#!/fedcm-rp-demo?path=server.js%3A1%3A0)
  - [IdP-Quellcode](https://glitch.com/edit/#!/fedcm-idp-demo?path=server.js%3A1%3A0)
- [FedCM `<iframe>`-Anmeldung](https://fedcm-main-frame.glitch.me/)
  - [RP-`<iframe>`-Seitenquellcode](https://glitch.com/edit/#!/fedcm-main-frame?path=index.html%3A1%3A0)
  - [IdP-Quellcode](https://glitch.com/edit/#!/webid-fcm-idp-single?path=server.js%3A1%3A0)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm)

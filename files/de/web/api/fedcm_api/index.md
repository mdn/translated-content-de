---
title: Federated Credential Management (FedCM) API
slug: Web/API/FedCM_API
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{SeeCompatTable}}{{DefaultAPISidebar("FedCM API")}}

Die **Federated Credential Management API** (oder _FedCM API_) bietet einen standardisierten Mechanismus, mit dem Identitätsanbieter (Identity Providers, IdPs) Identitätsföderierungsdienste im Web auf datenschutzfreundliche Weise verfügbar machen können, ohne dass [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und Weiterleitungen erforderlich sind. Dazu gehört eine JavaScript-API, die die Verwendung von föderierter Authentifizierung für Aktivitäten wie das Anmelden oder Registrieren auf einer Website ermöglicht.

## FedCM-Konzepte

Identitätsföderation ist die Übertragung der Benutzer-Authentifizierung von einer Website, die Benutzeranmeldung oder -registrierung erfordert, wie z.B. eine E-Commerce- oder Social-Networking-Site (auch bekannt als abhängige Partei oder RP), an einen vertrauenswürdigen dritten Identitätsanbieter (IdP) wie Google, Facebook/Meta, GitHub etc.

Abhängige Parteien (RPs) können sich mit IdPs integrieren, sodass Benutzer sich mit den Konten anmelden können, die sie beim IdP registriert haben. Die Identitätsföderation durch eine kleine Anzahl spezialisierter IdPs hat die Web-Authentifizierung in Bezug auf Sicherheit, Verbraucherzuversicht und Benutzererfahrung verbessert, verglichen mit der Verwaltung der eigenen Anmeldebedürfnisse jeder Seite mit separaten Benutzernamen und Passwörtern.

Das Problem besteht darin, dass die traditionelle Identitätsföderation auf {{htmlelement("iframe")}}s, Weiterleitungen und Drittanbieter-Cookies beruht, die auch für das Tracking von Drittanbietern verwendet werden. Browser schränken die Nutzung dieser Funktionen ein, um die Privatsphäre der Benutzer zu schützen, aber eine Nebenwirkung ist, dass dadurch legitime, nicht-trackingbezogene Anwendungen schwieriger zu implementieren sind, darunter auch die Identitätsföderation.

Dies betrifft die föderierte Anmeldung im Allgemeinen sowie spezifischere Anwendungsfälle der Identitätsföderation:

- [OIDC-Front-Channel-Abmeldung](https://openid.net/specs/openid-connect-frontchannel-1_0.html): Dieser Ablauf erfordert, dass der IdP mehrere RP-`<iframe>`s einbettet, die auf RP-Cookies angewiesen sind.
- Soziale Widgets: Um soziale Widgets bereitzustellen, muss das IdP-Drittanbieter-Cookie aus dem RP-Top-Level-Ursprung bereitgestellt werden.
- Personalisierte Schaltflächen: Die Anzeige personalisierter Anmeldeinformationen auf einem {{htmlelement("button")}} im RP-Ursprung wird als IdP-`<iframe>` implementiert, das Drittanbieter-Cookies erfordert.
- Sitzungsauffrischung ohne Top-Level-Navigation oder Popups.

FedCM zielt darauf ab, dieses Problem zu umgehen, indem ein spezieller Mechanismus für federierte Identitätsabläufe im Web bereitgestellt wird, der es unterstützenden Browsern ermöglicht, spezielle UI-Elemente auf RPs bereitzustellen, sodass Benutzer ein IdP-Konto zur Anmeldung auswählen können.

Es gibt zwei Teile bei der Verwendung der FedCM API, die in den unten verlinkten Leitfäden behandelt werden:

1. [IdP-Integration mit FedCM](/de/docs/Web/API/FedCM_API/IDP_integration) — was ein Identitätsanbieter bereitstellen muss, damit ein RP sich mit ihm integrieren kann.
2. [RP-föderierte Anmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in) — die FedCM-Funktionalität, die ein RP verwenden muss, um einen Benutzer mithilfe seines IdP-Kontos anzumelden. Eine FedCM-Anmeldeanforderung wird mit der Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) initiiert.

> [!NOTE] > [Google Sign In](https://developers.google.com/identity/gsi/web/guides/overview) ist ein Beispiel für einen IdP, der bereits FedCM unterstützt. [Umstellung auf FedCM](https://developers.google.com/identity/gsi/web/guides/fedcm-migration) bietet Anweisungen für RPs, die vorhandene Apps, die Google Sign In verwenden, auf föderierte Anmeldung umstellen möchten.

## Integration der Berechtigungsrichtlinie und `<iframe>`-Unterstützung

Die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) kann verwendet werden, um die Berechtigung zur Nutzung von FedCM zu steuern, insbesondere die Nutzung der Methode [`get()`](/de/docs/Web/API/CredentialsContainer/get).

Entwickler können explizit die Berechtigung für ein {{htmlelement("iframe")}} erteilen, FedCM über das `allow`-Attribut zu verwenden:

```html
<iframe src="3rd-party.example" allow="identity-credentials-get"></iframe>
```

Die Verfügbarkeit von FedCM innerhalb von `<iframe>`s ermöglicht einige Anwendungsfälle:

- Größere Websites möchten nicht, dass ein Drittanbieter-Anmeldeskript die Kontrolle über das Top-Level-Frame übernimmt; stattdessen möchten sie dieses Skript hinzufügen und FedCM aus einem {{htmlelement("iframe")}} aufrufen.
- Einige `<iframes>` können selbst föderierte Authentifizierung benötigen.

## Schnittstellen

- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
  - : Repräsentiert ein Benutzeridentitäts-Credential, das aus erfolgreicher föderierter Authentifizierung resultiert. Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option einschließt, wird durch eine Instanz von [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) erfüllt.
- [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)
  - : Repräsentiert einen IdP und bietet Zugang zu verwandten Informationen und Funktionen.
- [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)
  - : Definiert Anmeldefunktionen für IdPs, einschließlich der Methode [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus) zum [Aktualisieren des Anmeldestatus des IdP](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

## Erweiterungen von anderen Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `identity`-Option.
  - : `identity` ist ein Objekt mit Details zu föderierten IdPs, die eine abhängig Partei (RP)-Website verwenden kann, um Benutzer anzumelden. Es bewirkt, dass ein `get()`-Aufruf eine Anfrage zur Anmeldung eines Benutzers bei einem RP mit einem IdP auslöst.
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
  - [RP-`<iframe>`-Seitenquellcode](https://glitch.com/edit/#!/fedcm-main-frame?path=index.html%3A1%3A0)
  - [IdP-Quellcode](https://glitch.com/edit/#!/webid-fcm-idp-single?path=server.js%3A1%3A0)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm)

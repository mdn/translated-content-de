---
title: Federated Credential Management (FedCM) API
slug: Web/API/FedCM_API
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{SeeCompatTable}}{{DefaultAPISidebar("FedCM API")}}

Die **API für föderiertes Anmelde-Management** (oder _FedCM API_) bietet einen standardisierten Mechanismus für Identitätsanbieter (IdPs), um Identitätsföderationsdienste im Web auf eine datenschutzfreundliche Weise bereitzustellen, ohne dass [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und Redirects erforderlich sind. Dies umfasst eine JavaScript-API, die die Verwendung von föderierter Authentifizierung für Aktivitäten wie Anmelden oder Registrieren auf einer Website ermöglicht.

## FedCM-Konzepte

Identitätsföderation ist die Delegation der Benutzer-Authentifizierung von einer Website, die eine Benutzerregistrierung oder -anmeldung erfordert, wie etwa einer E-Commerce- oder sozialen Netzwerkseite (auch bekannt als relying party oder RP), an einen vertrauenswürdigen Drittanbieter-Identitätsanbieter (IdP) wie Google, Facebook/Meta, GitHub usw.

Vertrauensparteien (RPs) können sich in IdPs integrieren, sodass Benutzer sich mit Konten anmelden können, die sie beim IdP registriert haben. Identitätsföderation über eine kleine Anzahl dedizierter IdPs hat das Web-Authentifizierungsverfahren in Bezug auf Sicherheit, Verbrauchervertrauen und Benutzererfahrung verbessert, im Vergleich dazu, dass jede Seite ihre eigenen Anmeldeanforderungen mit separaten Benutzernamen und Passwörtern verwaltet.

Das Problem ist, dass die traditionelle Identitätsföderation auf {{htmlelement("iframe")}}s, Redirects und Drittanbieter-Cookies basiert, die auch für Drittanbieter-Tracking verwendet werden. Browser schränken die Nutzung dieser Funktionen ein, um die Privatsphäre der Benutzer zu schützen. Ein Nebeneffekt ist jedoch, dass dies die Implementierung gültiger, nicht tracking-orientierter Anwendungen erschwert, wie z.B. die Identitätsföderation.

Dies betrifft die föderierte Anmeldung im Allgemeinen sowie spezifischere Anwendungsfälle der Identitätsföderation:

- [OIDC Front-Channel Logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html): Dieser Ablauf erfordert, dass der IDP mehrere RP-`<iframe>`s einbettet, die auf RP-Cookies angewiesen sind.
- Soziale Widgets: Um soziale Widgets bereitzustellen, muss das IdP-Drittanbieter-Cookie von der RP-Top-Level-Quelle bereitgestellt werden.
- Personalisierte Buttons: Die Anzeige personalisierter Anmeldeinformationen auf einem {{htmlelement("button")}} in der RP-Quelle wird als IdP-`<iframe>` implementiert, das Drittanbieter-Cookies benötigt.
- Sitzungsaktualisierung ohne Top-Level-Navigation oder Pop-ups.

FedCM zielt darauf ab, dieses Problem zu umgehen, indem es einen dedizierten Mechanismus für föderierte Identitätsabläufe im Web bereitstellt und unterstützende Browser mit speziellen UI-Elementen auf RPs ausstattet, sodass Benutzer ein IdP-Konto für die Anmeldung auswählen können.

Es gibt zwei Teile zur Nutzung der FedCM API, die in den unten verlinkten Leitfäden behandelt werden:

1. [IdP-Integration mit FedCM](/de/docs/Web/API/FedCM_API/IDP_integration) — was ein Identitätsanbieter bereitstellen muss, damit ein RP sich mit ihm integrieren kann.
2. [RP föderierte Anmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in) — die FedCM-Funktionalität, die ein RP verwenden muss, um einen Benutzer mit seinem IdP-Konto anzumelden. Eine FedCM-Anmeldeanforderung wird mit der Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) initiiert.

> **Note:** [Google Sign In](https://developers.google.com/identity/gsi/web/guides/overview) ist ein Beispiel für ein IdP, das bereits FedCM unterstützt. [Migrate to FedCM](https://developers.google.com/identity/gsi/web/guides/fedcm-migration) bietet Anleitungen für RPs, die bestehende Apps, die Google Sign In verwenden, auf föderierte Anmeldung umstellen möchten.

## Permissions-Policy-Integration und `<iframe>`-Unterstützung

Die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Permissions_Policy) kann verwendet werden, um die Berechtigung zur Nutzung von FedCM zu steuern, insbesondere die Verwendung der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Methode.

Entwickler können einem {{htmlelement("iframe")}} explizit die Erlaubnis erteilen, FedCM über das Attribut `allow` zu verwenden:

```html
<iframe src="3rd-party.example" allow="identity-credentials-get"></iframe>
```

Die Verfügbarkeit von FedCM innerhalb von `<iframe>`s ermöglicht einige Anwendungsfälle:

- Größere Websites werden nicht möchten, dass ein Drittanbieter-Anmeldeskript die Kontrolle über den Top-Level-Frame erhält; stattdessen werden sie dieses Skript hinzufügen und FedCM aus einem {{htmlelement("iframe")}} heraus aufrufen wollen.
- Einige `<iframe>`s benötigen möglicherweise selbst föderierte Authentifizierung.

## Schnittstellen

- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
  - : Repräsentiert ein Benutzeridentitätsnachweis, das sich aus einer erfolgreichen föderierten Authentifizierung ergibt. Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option enthält, wird mit einer Instanz von [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) erfüllt.
- [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)
  - : Repräsentiert einen IdP und bietet Zugriff auf relevante Informationen und Funktionalitäten.
- [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)
  - : Definiert Anmeldefunktionalitäten für IdPs, einschließlich der Methode [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus) zur [Aktualisierung des IdP-Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `identity`-Option.
  - : `identity` ist ein Objekt, das Details von föderierten IdPs enthält, die eine relying party (RP) verwenden kann, um Benutzer anzumelden. Dadurch wird ein `get()`-Aufruf zur Anforderung initiiert, dass ein Benutzer sich mit einem IdP bei einer RP anmeldet.
- [`Navigator.login`](/de/docs/Web/API/Navigator/login)
  - : Bietet Zugriff auf das [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Objekt des Browsers.

## HTTP-Header

- {{httpheader("Set-Login")}}
  - : Bietet einen HTTP-Mechanismus zum [Aktualisieren des Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) über HTTP.

## Beispiele

- [FedCM Anmeldebeispiel](https://fedcm-rp-demo.glitch.me/)
  - [RP Quellcode](https://glitch.com/edit/#!/fedcm-rp-demo?path=server.js%3A1%3A0)
  - [IdP Quellcode](https://glitch.com/edit/#!/fedcm-idp-demo?path=server.js%3A1%3A0)
- [FedCM `<iframe>` Anmeldung](https://fedcm-main-frame.glitch.me/)
  - [RP `<iframe>` Seitencode](https://glitch.com/edit/#!/fedcm-main-frame?path=index.html%3A1%3A0)
  - [IdP Quellcode](https://glitch.com/edit/#!/webid-fcm-idp-single?path=server.js%3A1%3A0)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm)

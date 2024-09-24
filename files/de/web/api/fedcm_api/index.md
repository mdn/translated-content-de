---
title: API für föderiertes Anmeldeinformationsmanagement (FedCM)
slug: Web/API/FedCM_API
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{SeeCompatTable}}{{DefaultAPISidebar("FedCM API")}}

Die **API für föderiertes Anmeldeinformationsmanagement** (oder _FedCM API_) bietet einen standardisierten Mechanismus für Identitätsanbieter (IdPs), um Identitätsföderationsdienste im Web auf datenschutzfreundliche Weise bereitzustellen, ohne die Notwendigkeit von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und Weiterleitungen. Dies umfasst eine JavaScript-API, die die Nutzung föderierter Authentifizierung für Aktivitäten wie Anmelden oder Registrieren auf einer Website ermöglicht.

## FedCM Konzepte

Identitätsföderation ist die Delegation der Benutzerauthentifizierung von einer Website, die ein Benutzerkonto erfordert, wie eine E-Commerce- oder Social-Networking-Site (auch bekannt als vertrauende Partei oder RP), zu einem vertrauenswürdigen Drittanbieter-Identitätsanbieter (IdP) wie Google, Facebook/Meta, GitHub usw.

Vertrauende Parteien (RPs) können sich mit IdPs integrieren, sodass Benutzer sich mit den Konten anmelden können, die sie beim IdP registriert haben. Die Identitätsföderation über eine kleine Anzahl spezialisierter IdPs hat die Web-Authentifizierung hinsichtlich Sicherheit, Benutzervertrauen und Benutzererfahrung verbessert, im Vergleich dazu, dass jede Website ihre eigenen Anmeldeanforderungen mit separaten Benutzernamen und Passwörtern verwaltet.

Das Problem ist, dass die traditionelle Identitätsföderation auf {{htmlelement("iframe")}}s, Weiterleitungen und Drittanbieter-Cookies basiert, die auch für das Tracking durch Dritte verwendet werden. Browser beschränken die Nutzung dieser Funktionen, um die Privatsphäre der Benutzer zu schützen, aber ein Nebeneffekt ist, dass die Implementierung gültiger, nicht-tracking-basierter Nutzungen, einschließlich der Identitätsföderation, schwieriger wird.

Dies betrifft das föderierte Anmelden im Allgemeinen sowie spezifischere Anwendungsfälle der Identitätsföderation:

- [OIDC-Front-Channel-Abmeldung](https://openid.net/specs/openid-connect-frontchannel-1_0.html): Dieser Ablauf erfordert, dass der IdP mehrere RP-`<iframe>`s einbettet, die auf RP-Cookies angewiesen sind.
- Soziale Widgets: Um soziale Widgets bereitzustellen, muss das IdP-Drittanbieter-Cookie von der RP-Top-Level-Herkunft bereitgestellt werden.
- Personalisierte Schaltflächen: Die Anzeige personalisierter Anmeldeinformationen auf einem {{htmlelement("button")}} in der RP-Herkunft wird als IdP-`<iframe>` implementiert, das Drittanbieter-Cookies benötigt.
- Sitzungsaktualisierung ohne Top-Level-Navigation oder Popups.

FedCM zielt darauf ab, dieses Problem zu umgehen, indem ein spezieller Mechanismus für föderierte Identitätsabläufe im Web bereitgestellt wird. Unterstützende Browser können spezielle UI-Elemente auf RPs bereitstellen, wodurch Benutzer ein IdP-Konto auswählen können, das für die Anmeldung verwendet werden soll.

Es gibt zwei Teile bei der Nutzung der FedCM API, die in den verlinkten Anleitungen unten behandelt werden:

1. [IdP-Integration mit FedCM](/de/docs/Web/API/FedCM_API/IDP_integration) — was ein Identitätsanbieter bereitstellen muss, damit ein RP sich integrieren kann.
2. [RP föderierte Anmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in) — die FedCM-Funktionalität, die ein RP benötigt, um einen Benutzer mit seinem IdP-Konto anzumelden. Eine FedCM-Anmeldeanforderung wird mit der Methode {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} initiiert.

> **Note:** [Google Sign In](https://developers.google.com/identity/gsi/web/guides/overview) ist ein Beispiel für einen IdP, der FedCM bereits unterstützt. [Migrationsanleitung zu FedCM](https://developers.google.com/identity/gsi/web/guides/fedcm-migration) bietet Anweisungen für RPs, die bestehende Apps mit Google Sign In zu föderierten Anmeldungen migrieren möchten.

## Integration der Berechtigungspolitik und `<iframe>`-Unterstützung

Die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Berechtigungspolitik](/de/docs/Web/HTTP/Permissions_Policy) kann verwendet werden, um die Erlaubnis zur Nutzung von FedCM zu kontrollieren, genauer gesagt die Nutzung der {{domxref("CredentialsContainer.get", "get()")}}-Methode.

Entwickler können einem {{htmlelement("iframe")}} explizit die Erlaubnis zur Nutzung von FedCM über das `allow`-Attribut erteilen:

```html
<iframe src="3rd-party.example" allow="identity-credentials-get"></iframe>
```

Die Verfügbarkeit von FedCM innerhalb von `<iframe>`s ermöglicht ein paar Anwendungsfälle:

- Größere Websites möchten nicht, dass ein Drittanbieter-Anmeldeskript Kontrolle über den Top-Level-Frame erhält; stattdessen möchten sie dieses Skript hinzufügen und FedCM aus einem {{htmlelement("iframe")}} heraus aufrufen.
- Einige `<iframes>` können selbst eine föderierte Authentifizierung erfordern.

## Schnittstellen

- {{domxref("IdentityCredential")}}
  - : Repräsentiert eine Benutzeridentität-Anmeldeinformation, die sich aus einer erfolgreichen föderierten Authentifizierung ergibt. Ein erfolgreicher {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}}-Aufruf, der eine `identity`-Option enthält, wird mit einer {{domxref("IdentityCredential")}}-Instanz erfüllt.
- {{domxref("IdentityProvider")}}
  - : Repräsentiert einen IdP und bietet Zugriff auf verwandte Informationen und Funktionalitäten.
- {{domxref("NavigatorLogin")}}
  - : Definiert die Anmeldefunktionalität für IdPs, einschließlich der Methode {{domxref("NavigatorLogin.setStatus", "Navigator.login.setStatus()")}} für das [Aktualisieren des IdP-Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

## Erweiterungen auf andere Schnittstellen

- {{domxref("CredentialsContainer.get()")}}, die `identity`-Option.
  - : `identity` ist ein Objekt, das Details zu föderierten IdPs enthält, die eine vertraute Partei (RP) Website zur Anmeldung von Benutzern verwenden kann. Es veranlasst einen `get()`-Aufruf, eine Anfrage zu initiieren, damit sich ein Benutzer bei einem RP mit einem IdP anmeldet.
- {{domxref("Navigator.login")}}
  - : Bietet Zugriff auf das {{domxref("NavigatorLogin")}}-Objekt des Browsers.

## HTTP-Header

- {{httpheader("Set-Login")}}
  - : Bietet einen HTTP-Mechanismus für das [Aktualisieren des Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) über HTTP.

## Beispiele

- [FedCM Anmeldebeispiel](https://fedcm-rp-demo.glitch.me/)
  - [RP Quellcode](https://glitch.com/edit/#!/fedcm-rp-demo?path=server.js%3A1%3A0)
  - [IdP Quellcode](https://glitch.com/edit/#!/fedcm-idp-demo?path=server.js%3A1%3A0)
- [FedCM `<iframe>` Anmeldung](https://fedcm-main-frame.glitch.me/)
  - [RP `<iframe>` Seitenquellcode](https://glitch.com/edit/#!/fedcm-main-frame?path=index.html%3A1%3A0)
  - [IdP Quellcode](https://glitch.com/edit/#!/webid-fcm-idp-single?path=server.js%3A1%3A0)

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [API für föderiertes Anmeldeinformationsmanagement](https://developers.google.com/privacy-sandbox/cookies/fedcm)

---
title: Federated Credential Management (FedCM) API
slug: Web/API/FedCM_API
l10n:
  sourceCommit: 9b77c8c7faabe6fd9fd428e12270290e975b8c39
---

{{SeeCompatTable}}{{DefaultAPISidebar("FedCM API")}}

Die **Federated Credential Management API** (oder _FedCM API_) bietet einen Standardmechanismus für {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdPs), um Identitätsfederationsdienste auf datenschutzfreundliche Weise im Web bereitzustellen, ohne dass [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und Weiterleitungen erforderlich sind. Dazu gehört eine JavaScript-API, die die Verwendung von föderierter Authentifizierung für Aktivitäten wie Anmeldung oder Registrierung auf einer Website ermöglicht.

## FedCM-Konzepte

Identitätsfederation ist die Delegation der Benutzer-Authentifizierung von einer Website, die eine Benutzerregistrierung oder -anmeldung erfordert, wie z. B. eine E-Commerce- oder Social-Networking-Site (auch als {{Glossary("Relying_party", "verlassende Partei")}} oder RP bekannt), an einen vertrauenswürdigen Drittanbieter-Identitätsanbieter (IdP) wie Google, Facebook/Meta, GitHub usw.

RPs können sich mit IdPs integrieren, sodass Benutzer sich mit den Konten anmelden können, die sie beim IdP registriert haben. Die Identitätsfederation über eine kleine Anzahl dedizierter IdPs hat die Web-Authentifizierung in Bezug auf Sicherheit, Verbrauchervertrauen und Benutzererfahrung verbessert, verglichen mit dem Fall, dass jede Site ihre eigenen Anmeldeanforderungen mit separaten Benutzernamen und Passwörtern verwalten müsste.

Das Problem besteht darin, dass die traditionelle Identitätsfederation auf {{htmlelement("iframe")}}s, Weiterleitungen und Drittanbieter-Cookies beruht, die auch für die Nachverfolgung Dritter genutzt werden. Browser beschränken die Nutzung dieser Funktionen, um die Privatsphäre der Nutzer zu wahren, mit der Folge, dass dadurch die Implementierung legitimer, nicht auf Nachverfolgung basierender Anwendungen erschwert wird, einschließlich der Identitätsfederation.

Dies betrifft im Allgemeinen die föderierte Anmeldung sowie spezifischere Anwendungsfälle der Identitätsfederation:

- [OIDC-Front-Channel-Abmeldung](https://openid.net/specs/openid-connect-frontchannel-1_0.html): Dieser Ablauf erfordert, dass der IDP mehrere RP-`<iframe>`s einbettet, die auf RP-Cookies angewiesen sind.
- Soziale Widgets: Um soziale Widgets bereitzustellen, muss das Drittanbieter-Cookie des IdP aus dem RP-Oberflächenursprung bereitgestellt werden.
- Personalisierte Schaltflächen: Die Anzeige personalisierter Anmeldeinformationen auf einer {{htmlelement("button")}} im RP-Ursprung wird als IdP-`<iframe>` implementiert, das Drittanbieter-Cookies erfordert.
- Sitzungsaktualisierung ohne Navigieren auf oberster Ebene oder Pop-ups.

FedCM zielt darauf ab, dieses Problem zu umgehen und bietet einen speziellen Mechanismus für föderierte Identitätsabläufe im Web. Unterstützende Browser können spezielle UI-Elemente auf RPs bereitstellen, die Benutzern die Auswahl eines IdP-Kontos zur Anmeldung ermöglichen.

Es gibt zwei Teile zur Verwendung der FedCM API, die in den unten verlinkten Leitfäden behandelt werden:

1. [IdP-Integration mit FedCM](/de/docs/Web/API/FedCM_API/IDP_integration) — was ein Identitätsanbieter bereitstellen muss, damit ein RP sich mit ihm integrieren kann.
2. [RP-föderierte Anmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in) — die FedCM-Funktionalität, die ein RP benötigt, um einen Benutzer mit seinem IdP-Konto anzumelden. Eine FedCM-Anmeldeanforderung wird mit der [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Methode initiiert.

> [!NOTE]
> [Google Sign In](https://developers.google.com/identity/gsi/web/guides/overview) ist ein Beispiel für einen IdP, der bereits FedCM unterstützt. [Migration zu FedCM](https://developers.google.com/identity/gsi/web/guides/fedcm-migration) bietet Anweisungen für RPs, die bestehende Apps, die Google Sign In verwenden, auf föderierte Anmeldung umstellen möchten.

## Integration der Permissions Policy und `<iframe>`-Unterstützung

Die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) kann verwendet werden, um die Berechtigung zur Verwendung von FedCM zu steuern.
Insbesondere erlaubt sie die Nutzung der folgenden Methoden:

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get)
- [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static)
- [`IdentityProvider.getUserInfo()`](/de/docs/Web/API/IdentityProvider/getUserInfo_static)

Entwickler können einem {{htmlelement("iframe")}} explizit die Erlaubnis erteilen, FedCM über das `allow`-Attribut zu verwenden:

```html
<iframe src="3rd-party.example" allow="identity-credentials-get"></iframe>
```

Die Verfügbarkeit von FedCM innerhalb von `<iframe>`s ermöglicht einige Anwendungsfälle:

- Größere Seiten möchten nicht, dass ein Drittanbieter-Anmeldeskript die Kontrolle über den Hauptframe übernimmt; stattdessen möchten sie das Skript hinzufügen und FedCM innerhalb eines {{htmlelement("iframe")}} aufrufen.
- Einige `<iframes>` können selbst eine föderierte Authentifizierung erfordern.

## Schnittstellen

- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
  - : Repräsentiert ein Benutzeridentitäts-Credential, das aus einer erfolgreichen föderierten Authentifizierung resultiert. Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option enthält, erfüllt mit einer [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Instanz.
- [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError)
  - : Repräsentiert einen Authentifizierungsfehler, der darauf hinweist, dass der Benutzeragent nach der vom Benutzer angeforderten Authentifizierung mit einem föderierten Credential keine Identitätsbehauptung erhalten hat.
- [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)
  - : Repräsentiert einen IdP und bietet Zugriff auf verwandte Informationen und Funktionalitäten.
- [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)
  - : Definiert Login-Funktionalität für IdPs, einschließlich der Methode [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus) zum [Aktualisieren von IdP-Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `identity`-Option.
  - : `identity` ist ein Objekt, das Details von föderierten IdPs enthält, die eine relying party (RP)-Website verwenden kann, um Benutzer anzumelden. Es veranlasst einen `get()`-Aufruf, eine Anfrage zu initiieren, damit sich ein Benutzer bei einem RP mit einem IdP anmeldet.
- [`Navigator.login`](/de/docs/Web/API/Navigator/login)
  - : Bietet Zugriff auf das [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Objekt des Browsers.

## HTTP-Header

- {{httpheader("Set-Login")}}
  - : Bietet einen HTTP-Mechanismus zum [Aktualisieren des Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) via HTTP.

## Beispiele

Für Beispielcode siehe:

- [Implementieren einer Identitätslösung mit FedCM auf der Seite des Identitätsanbieters](https://privacysandbox.google.com/cookies/fedcm/implement/identity-provider) auf privacysandbox.google.com (2025).
- [Implementieren einer Identitätslösung mit FedCM auf der Seite der Verlassenden Partei](https://privacysandbox.google.com/cookies/fedcm/implement/relying-party) auf privacysandbox.google.com (2025).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm)

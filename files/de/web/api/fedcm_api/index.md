---
title: Federated Credential Management (FedCM) API
slug: Web/API/FedCM_API
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

{{SeeCompatTable}}{{DefaultAPISidebar("FedCM API")}}

Die **Federated Credential Management API** (oder _FedCM API_) bietet einen standardisierten Mechanismus für {{Glossary("Identity_provider", "Identity Provider")}} (IdPs), um Identitätsfederationsdienste auf dem Web in einer datenschutzfreundlichen Weise bereitzustellen, ohne die Notwendigkeit von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und Redirects. Dies umfasst eine JavaScript-API, die die Nutzung von föderierter Authentifizierung für Aktivitäten wie Anmelden oder Registrieren auf einer Website ermöglicht.

## FedCM-Konzepte

Identitätsfederation ist die Delegation der Benutzer-Authentifizierung von einer Website, die Benutzerregistrierung oder -anmeldung erfordert, wie z.B. eine E-Commerce- oder Social-Networking-Seite (auch bekannt als {{Glossary("Relying_party", "relying party")}} oder RP), an einen vertrauenswürdigen Drittanbieter-Identity-Provider (IdP) wie Google, Facebook/Meta, GitHub usw.

RPs können sich mit IdPs integrieren, was Benutzern ermöglicht, sich mit den Konten anzumelden, die sie beim IdP registriert haben. Die Identitätsfederation über eine kleine Anzahl spezieller IdPs hat die Web-Authentifizierung in Bezug auf Sicherheit, Vertrauen der Konsumenten und Benutzererfahrung verbessert, im Vergleich dazu, dass jede Website ihre eigenen Anmeldedaten mit separaten Benutzernamen und Passwörtern verwaltet.

Das Problem besteht jedoch darin, dass die traditionelle Identitätsfederation auf {{htmlelement("iframe")}}s, Redirects und Drittanbieter-Cookies basiert, die auch für das Drittanbieter-Tracking genutzt werden. Browser beschränken die Nutzung dieser Funktionen, um die Privatsphäre der Benutzer zu schützen, was jedoch als Nebeneffekt die Implementierung von legitimen, nicht-trackenden Anwendungen, einschließlich der Identitätsfederation, erschwert.

Dies betrifft die föderierte Anmeldung im Allgemeinen sowie spezifischere Anwendungsfälle der Identitätsfederation:

- [OIDC Front-Channel Logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html): Dieser Ablauf erfordert, dass der IDP mehrere RP-`<iframe>`s einbettet, die auf RP-Cookies angewiesen sind.
- Soziale Widgets: Um soziale Widgets bereitzustellen, muss das IdP-Drittanbieter-Cookie von der RP-Top-Level-Quelle bereitgestellt werden.
- Personalisierte Schaltflächen: Die Anzeige personalisierter Anmeldeinformationen auf einem {{htmlelement("button")}} in der RP-Quelle wird als IdP-`<iframe>` implementiert, das Drittanbieter-Cookies erfordert.
- Sitzungsaktualisierung ohne Top-Level-Navigation oder Pop-ups.

FedCM zielt darauf ab, dieses Problem zu umgehen und bietet einen speziellen Mechanismus für föderierte Identitätsabläufe im Web und ermöglicht es unterstützenden Browsern, spezielle UI-Elemente auf RPs bereitzustellen, die Benutzern die Wahl eines IdP-Kontos zur Anmeldung ermöglichen.

Es gibt zwei Teile zur Nutzung der FedCM API, die in den unten verlinkten Leitfäden behandelt werden:

1. [IdP-Integration mit FedCM](/de/docs/Web/API/FedCM_API/IDP_integration) — was ein Identity Provider bereitstellen muss, damit eine RP sich integrieren kann.
2. [RP föderierte Anmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in) — die FedCM-Funktionalität, die eine RP nutzen muss, um einen Benutzer mit seinem IdP-Konto anzumelden. Eine FedCM-Anmeldeanfrage wird mit der Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) gestartet.

> [!NOTE]
> [Google Anmelden](https://developers.google.com/identity/gsi/web/guides/overview) ist ein Beispiel für einen IdP, der FedCM bereits unterstützt. [Migration zu FedCM](https://developers.google.com/identity/gsi/web/guides/fedcm-migration) bietet Anweisungen für RPs, die bestehende Apps, die Google Anmelden verwenden, zu föderierter Anmeldung migrieren möchten.

## Integration der Permissions Policy und `<iframe>`-Unterstützung

Die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) kann verwendet werden, um die Berechtigung zur Nutzung von FedCM zu steuern.
Genauer gesagt erlaubt sie die Nutzung der folgenden Methoden:

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get)
- [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static)
- [`IdentityProvider.getUserInfo()`](/de/docs/Web/API/IdentityProvider/getUserInfo_static)

Entwickler können die Berechtigung für ein {{htmlelement("iframe")}} explizit über das `allow`-Attribut erteilen:

```html
<iframe src="3rd-party.example" allow="identity-credentials-get"></iframe>
```

Die Verfügbarkeit von FedCM innerhalb von `<iframe>`s ermöglicht einige Anwendungsfälle:

- Größere Seiten möchten nicht, dass ein Drittanbieter-Anmeldeskript die Kontrolle über den Top-Level-Frame erhält; stattdessen möchten sie dieses Skript hinzufügen und FedCM aus einem {{htmlelement("iframe")}} aufrufen.
- Einige `<iframes>` können selbst föderierte Authentifizierung erfordern.

## Schnittstellen

- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
  - : Repräsentiert ein Benutzeridentitätsnachweis, das aus einer erfolgreichen föderierten Authentifizierung entsteht. Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option enthält, erfüllt sich mit einer [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Instanz.
- [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError)
  - : Repräsentiert einen Authentifizierungsfehler, der darauf hinweist, dass die Benutzeragent nicht nach der Anforderung einer Authentizitätsbestätigung durch den Benutzer eine Identitätserklärung empfangen hat.
- [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)
  - : Repräsentiert einen IdP und bietet Zugriff auf zugehörige Informationen und Funktionalitäten.
- [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)
  - : Definiert Anmeldefunktionalität für IdPs, einschließlich der Methode [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus) zum [Aktualisieren des IdP-Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

## Erweiterungen für andere Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `identity`-Option.
  - : `identity` ist ein Objekt, das Details zu föderierten IdPs enthält, die eine relying party (RP) Website verwenden kann, um Benutzer anzumelden. Es bewirkt, dass ein `get()`-Aufruf eine Anfrage einleitet, damit ein Benutzer sich bei einer RP mit einem IdP anmeldet.
- [`Navigator.login`](/de/docs/Web/API/Navigator/login)
  - : Bietet Zugriff auf das Navigator-Login-Objekt des Browsers.

## HTTP-Header

- {{httpheader("Set-Login")}}
  - : Bietet einen HTTP-Mechanismus zum [Aktualisieren des Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) über HTTP.

## Beispiele

Für Beispielcode siehe:

- [Implementieren einer Identitätslösung mit FedCM auf der Seite des Identity Providers](https://developer.chrome.com/docs/identity/fedcm/implement/identity-provider) auf developer.chrome.com (2025)
- [Implementieren einer Identitätslösung mit FedCM auf der Seite der Relying Party](https://developer.chrome.com/docs/identity/fedcm/implement/relying-party) auf developer.chrome.com (2025)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview)

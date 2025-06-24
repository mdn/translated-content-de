---
title: Federated Credential Management (FedCM) API
slug: Web/API/FedCM_API
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{SeeCompatTable}}{{DefaultAPISidebar("FedCM API")}}

Die **Federated Credential Management API** (oder _FedCM API_) bietet einen standardisierten Mechanismus für Identitätsanbieter (IdP), um Identitätsföderierungsdienste im Web in einer datenschutzfreundlichen Weise verfügbar zu machen, ohne auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und Umleitungen angewiesen zu sein. Dazu gehört eine JavaScript-API, die die Nutzung föderierter Authentifizierung für Aktivitäten wie Anmelden oder Registrieren auf einer Website ermöglicht.

## FedCM-Konzepte

Identitätsföderation ist die Delegierung der Benutzer-Authentifizierung von einer Website, die eine Benutzeranmeldung oder -registrierung erfordert, wie z.B. eine E-Commerce- oder Social-Networking-Seite (auch bekannt als relying party oder RP), an einen vertrauenswürdigen Drittanbieter-Identitätsanbieter (IdP) wie Google, Facebook/Meta, GitHub, etc.

Relying Parties (RPs) können sich mit IdPs integrieren, was es Benutzern ermöglicht, sich mit den Konten anzumelden, die sie bei dem IdP registriert haben. Die Identitätsföderation über eine kleine Anzahl dedizierter IdPs hat die Web-Authentifizierung in Bezug auf Sicherheit, Verbrauchervertrauen und Benutzererfahrung verbessert, im Vergleich dazu, dass jede Seite ihre eigenen Anmeldeanforderungen mit separaten Benutzernamen und Passwörtern verwaltet.

Das Problem besteht darin, dass die traditionelle Identitätsföderation auf {{htmlelement("iframe")}}s, Umleitungen und Drittanbieter-Cookies beruht, die auch für Drittanbieter-Tracking genutzt werden. Browser schränken die Nutzung dieser Funktionen ein, um die Privatsphäre der Benutzer zu schützen, aber ein Nebeneffekt ist, dass dies die Implementierung gültiger, nicht-tracking-bezogener Anwendungen, einschließlich der Identitätsföderation, erschwert.

Dies betrifft das föderierte Anmelden im Allgemeinen sowie spezifischere Anwendungsfälle der Identitätsföderation:

- [OIDC Front-Channel Logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html): Dieser Ablauf erfordert, dass der IDP mehrere RP-`<iframe>`s einbettet, die auf RP-Cookies angewiesen sind.
- Soziale Widgets: Um soziale Widgets bereitzustellen, muss das IdP-Drittanbieter-Cookie aus der RP-Top-Level-Herkunft bereitgestellt werden.
- Personalisierte Schaltflächen: Die Anzeige personalisierter Anmeldeinformationen auf einem {{htmlelement("button")}} in der RP-Herkunft wird als IdP-`<iframe>` implementiert, das Drittanbieter-Cookies erfordert.
- Sitzungsaktualisierung ohne Top-Level-Navigation oder Pop-ups.

FedCM soll dieses Problem umgehen, indem es einen dedizierten Mechanismus für föderierte Identitätsabläufe im Web bereitstellt und unterstützende Browser spezielle UI-Elemente auf RPs bereitstellen, damit Benutzer ein IdP-Konto für die Anmeldung auswählen können.

Es gibt zwei Teile bei der Nutzung der FedCM API, die in den unten verlinkten Leitfäden behandelt werden:

1. [IdP-Integration mit FedCM](/de/docs/Web/API/FedCM_API/IDP_integration) — was ein Identitätsanbieter bereitstellen muss, damit ein RP sich mit ihm integrieren kann.
2. [RP föderierte Anmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in) — die FedCM-Funktionalität, die ein RP benötigt, um einen Benutzer mit ihrem IdP-Konto anzumelden. Eine FedCM-Anmeldeanfrage wird mit der Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) initiiert.

> [!NOTE] > [Google Sign In](https://developers.google.com/identity/gsi/web/guides/overview) ist ein Beispiel für einen IdP, der FedCM bereits unterstützt. [Migration zu FedCM](https://developers.google.com/identity/gsi/web/guides/fedcm-migration) bietet Anweisungen für RPs, die bestehende Apps, die Google Sign In verwenden, auf föderierte Anmeldung umstellen möchten.

## Integration der Berechtigungsrichtlinie und `<iframe>`-Unterstützung

Die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) kann verwendet werden, um die Berechtigung zur Nutzung von FedCM zu steuern, genauer gesagt die Nutzung der Methode [`get()`](/de/docs/Web/API/CredentialsContainer/get).

Entwickler können explizit die Berechtigung für ein {{htmlelement("iframe")}} erteilen, FedCM über das `allow`-Attribut zu verwenden:

```html
<iframe src="3rd-party.example" allow="identity-credentials-get"></iframe>
```

Die Verfügbarkeit von FedCM innerhalb von `<iframe>`s ermöglicht einige Anwendungsfälle:

- Größere Seiten möchten nicht, dass ein Drittanbieter-Anmeldeskript die Kontrolle über den Top-Level-Frame erhält; stattdessen möchten sie dieses Skript hinzufügen und FedCM von innerhalb eines {{htmlelement("iframe")}} aufrufen.
- Einige `<iframes>` können selbst föderierte Authentifizierung erfordern.

## Schnittstellen

- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
  - : Repräsentiert ein Benutzeridentitätsnachweis, das aus einer erfolgreichen föderierten Authentifizierung hervorgeht. Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option umfasst, erfüllt sich mit einer Instanz von [`IdentityCredential`](/de/docs/Web/API/IdentityCredential).
- [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)
  - : Repräsentiert einen IdP und bietet Zugriff auf damit verbundene Informationen und Funktionen.
- [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)
  - : Definiert die Anmeldefunktionalität für IdPs, einschließlich der Methode [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus) für [Aktualisierung des IdP-Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `identity`-Option.
  - : `identity` ist ein Objekt, das Details föderierter IdPs enthält, die eine relying party (RP) Website verwenden kann, um Benutzer anzumelden. Es bewirkt, dass ein `get()`-Aufruf eine Anfrage für einen Benutzerinitiiert, sich bei einem RP mit einem IdP anzumelden.
- [`Navigator.login`](/de/docs/Web/API/Navigator/login)
  - : Bietet Zugriff auf das Browserobjekt [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin).

## HTTP-Header

- {{httpheader("Set-Login")}}
  - : Bietet einen HTTP-Mechanismus zur [Aktualisierung des Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) über HTTP.

## Beispiele

- [FedCM Anmeldebeispiel](https://fedcm-rp-demo.glitch.me/)
  - [RP Quellcode](https://glitch.com/edit/#!/fedcm-rp-demo?path=server.js%3A1%3A0)
  - [IdP Quellcode](https://glitch.com/edit/#!/fedcm-idp-demo?path=server.js%3A1%3A0)
- [FedCM `<iframe>` Anmeldebeispiel](https://fedcm-main-frame.glitch.me/)
  - [RP `<iframe>` Seitenquellcode](https://glitch.com/edit/#!/fedcm-main-frame?path=index.html%3A1%3A0)
  - [IdP Quellcode](https://glitch.com/edit/#!/webid-fcm-idp-single?path=server.js%3A1%3A0)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm)

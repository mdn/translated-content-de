---
title: Federated Credential Management (FedCM) API
slug: Web/API/FedCM_API
l10n:
  sourceCommit: 8cd7f0fdcb2ea8d53ec7dae071eb2eb76bf5bfaf
---

{{SeeCompatTable}}{{DefaultAPISidebar("FedCM API")}}

Die **Federated Credential Management API** (oder _FedCM API_) bietet einen standardisierten Mechanismus für {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdPs), um Identitäts-Federationsdienste im Web auf eine datenschutzfreundliche Weise verfügbar zu machen, ohne die Notwendigkeit von [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und Umleitungen. Dies beinhaltet eine JavaScript-API, die die Verwendung von föderierter Authentifizierung für Aktivitäten wie das An- oder Abmelden auf einer Website ermöglicht.

## Konzepte von FedCM

Identitäts-Föderation ist die Delegation der Benutzer-Authentifizierung von einer Website, die eine Benutzerregistrierung oder -anmeldung erfordert, wie z. B. eine E-Commerce- oder Social-Networking-Site (auch als {{Glossary("Relying_party", "verarbeitende Partei")}} oder RP bekannt), an einen vertrauenswürdigen Drittanbieter-Identitätsanbieter (IdP) wie Google, Facebook/Meta, GitHub etc.

RPs können sich mit IdPs integrieren, sodass Benutzer sich mit den Konten anmelden können, die sie beim IdP registriert haben. Die Identitäts-Föderation über eine kleine Gruppe von dedizierten IdPs hat die Web-Authentifizierung in Bezug auf Sicherheit, Vertrauen der Verbraucher und Benutzererfahrung verbessert, verglichen mit Webseiten, die ihre eigenen Anmeldeanforderungen mit separaten Benutzernamen und Passwörtern verwalten.

Das Problem ist, dass die traditionelle Identitäts-Föderation auf {{htmlelement("iframe")}}s, Umleitungen und Drittanbieter-Cookies beruht, die auch für das Drittanbieter-Tracking verwendet werden. Browser schränken die Nutzung dieser Funktionen ein, um die Privatsphäre der Nutzer zu wahren. Ein Nebeneffekt dessen ist jedoch, dass dies die Implementierung legitimer, nicht trackerbezogener Nutzungen erschwert, einschließlich der Identitäts-Föderation.

Dies betrifft das föderierte Anmelden im Allgemeinen sowie spezifische Anwendungsfälle der Identitäts-Föderation:

- [OIDC Front-Channel-Logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html): Dieser Ablauf erfordert, dass der IDP mehrere RP-`<iframe>`s einbettet, die auf RP-Cookies angewiesen sind.
- Soziale Widgets: Um soziale Widgets bereitzustellen, muss der IdP-Drittanbieter-Cookie vom RP-Top-Level-Urspung bereitgestellt werden.
- Personalisierte Schaltflächen: Die Anzeige personalisierter Anmeldeinformationen auf einem {{htmlelement("button")}} im RP-Ursprung wird als IdP-`<iframe>` implementiert, das Drittanbieter-Cookies erfordert.
- Sitzungsaktualisierung ohne Top-Level-Navigation oder Pop-ups.

FedCM zielt darauf ab, dieses Problem zu umgehen, indem es einen dedizierten Mechanismus für föderierte Identitätsabläufe im Web bereitstellt und unterstützenden Browsern spezielle UI-Elemente auf RPs ermöglicht, wodurch Benutzer ein IdP-Konto auswählen können, das sie für die Anmeldung verwenden möchten.

Es gibt zwei Teile zur Verwendung der FedCM API, die in den unten verlinkten Leitfäden behandelt werden:

1. [IdP-Integration mit FedCM](/de/docs/Web/API/FedCM_API/IDP_integration) — was ein Identitätsanbieter bereitstellen muss, damit ein RP sich damit integrieren kann.
2. [RP-Föderierte Anmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in) — die FedCM-Funktionalität, die ein RP benötigt, um einen Benutzer mithilfe seines IdP-Kontos anzumelden. Eine FedCM-Anmeldeanforderung wird mit der Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) initiiert.

> [!NOTE]
> [Google Sign In](https://developers.google.com/identity/gsi/web/guides/overview) ist ein Beispiel für einen IdP, der FedCM bereits unterstützt. [Migration zu FedCM](https://developers.google.com/identity/gsi/web/guides/fedcm-migration) bietet Anweisungen für RPs, die bestehende Apps mit Google Sign In zu föderierter Anmeldung migrieren möchten.

## Integration der Berechtigungspolitik und `<iframe>`-Unterstützung

Die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) kann verwendet werden, um die Berechtigung zur Nutzung von FedCM zu steuern.
Genauer gesagt erlaubt sie die Nutzung der folgenden Methoden:

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get)
- [`IdentityCredential.disconnect()`](/de/docs/Web/API/IdentityCredential/disconnect_static)
- [`IdentityProvider.getUserInfo()`](/de/docs/Web/API/IdentityProvider/getUserInfo_static)

Entwickler können einem {{htmlelement("iframe")}} ausdrücklich die Berechtigung zur Nutzung von FedCM über das `allow`-Attribut erteilen:

```html
<iframe src="3rd-party.example" allow="identity-credentials-get"></iframe>
```

Die Verfügbarkeit von FedCM innerhalb von `<iframe>`s ermöglicht ein paar Anwendungsfälle:

- Größere Websites werden nicht wollen, dass ein Drittanbieter-Anmelde-Skript die Kontrolle über den Top-Level-Rahmen erlangt; stattdessen möchten sie dieses Skript hinzufügen und FedCM aus einem {{htmlelement("iframe")}} heraus aufrufen.
- Einige `<iframes>` erfordern möglicherweise selbst eine föderierte Authentifizierung.

## Schnittstellen

- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
  - : Repräsentiert ein Benutzer-Identitätsnachweis, das aus einer erfolgreichen föderierten Authentifizierung hervorgeht. Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option einschließt, wird mit einer Instanz von [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) erfüllt.
- [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)
  - : Repräsentiert einen IdP und bietet Zugang zu verwandten Informationen und Funktionen.
- [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)
  - : Definiert die Anmeldefunktionalität für IdPs, einschließlich der Methode [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus) zum [Aktualisieren des Anmeldestatus des IdP](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `identity`-Option.
  - : `identity` ist ein Objekt, das Details von föderierten IdPs enthält, die eine verarbeitende Partei (RP) Website verwenden kann, um Benutzer anzumelden. Dies verursacht, dass ein `get()`-Aufruf eine Anforderung initiiert, damit ein Benutzer sich bei einer RP mit einem IdP anmeldet.
- [`Navigator.login`](/de/docs/Web/API/Navigator/login)
  - : Bietet Zugriff auf das [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Objekt des Browsers.

## HTTP-Header

- {{httpheader("Set-Login")}}
  - : Bietet einen HTTP-Mechanismus zum [Aktualisieren des Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) via HTTP.

## Beispiele

Für Beispielcode siehe:

- [Implementieren einer Identitätslösung mit FedCM auf der Seite des Identitätsanbieters](https://privacysandbox.google.com/cookies/fedcm/implement/identity-provider) auf privacysandbox.google.com (2025).
- [Implementieren einer Identitätslösung mit FedCM auf der Seite der verarbeitenden Partei](https://privacysandbox.google.com/cookies/fedcm/implement/relying-party) auf privacysandbox.google.com (2025).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm)

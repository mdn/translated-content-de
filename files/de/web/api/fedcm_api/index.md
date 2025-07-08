---
title: Federated Credential Management (FedCM) API
slug: Web/API/FedCM_API
l10n:
  sourceCommit: a9022d6a71668aa945c6a0c1dbe0d531a98e0816
---

{{SeeCompatTable}}{{DefaultAPISidebar("FedCM API")}}

Die **Federated Credential Management API** (oder _FedCM API_) bietet einen standardisierten Mechanismus für Identitätsanbieter (IdPs), um Identitätsföderationsdienste auf eine datenschutzfreundliche Weise im Web bereitzustellen, ohne dass [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und Weiterleitungen erforderlich sind. Dazu gehört eine JavaScript-API, die die Nutzung föderierter Authentifizierung für Aktivitäten wie das Anmelden oder Registrieren auf einer Website ermöglicht.

## FedCM-Konzepte

Identitätsföderation ist die Delegation der Benutzerauthentifizierung von einer Website, die eine Benutzeranmeldung oder -registrierung erfordert, wie z. B. eine E-Commerce- oder Social-Networking-Site (auch bekannt als vertrauende Partei oder RP), an einen vertrauenswürdigen Drittanbieter-Identitätsanbieter (IdP) wie Google, Facebook/Meta, GitHub usw.

Vertrauensparteien (RPs) können sich mit IdPs integrieren, wodurch Benutzer sich mit den Konten, die sie beim IdP registriert haben, anmelden können. Identitätsföderation über eine kleine Anzahl dedizierter IdPs hat die Web-Authentifizierung in Bezug auf Sicherheit, Verbrauchervertrauen und Benutzererfahrung verbessert, im Vergleich dazu, dass jede Seite ihre eigenen Anmeldeanforderungen mit separaten Benutzernamen und Passwörtern verwaltet.

Das Problem ist, dass die traditionelle Identitätsföderation auf {{htmlelement("iframe")}}s, Weiterleitungen und Drittanbieter-Cookies angewiesen ist, die auch für die Verfolgung durch Dritte genutzt werden. Browser schränken die Nutzung dieser Funktionen ein, um die Privatsphäre der Benutzer zu schützen, aber ein Nebeneffekt ist, dass dies die Implementierung gültiger, nicht verfolgungsbezogener Anwendungen erschwert, einschließlich der Identitätsföderation.

Dies betrifft die föderierte Anmeldung im Allgemeinen sowie spezifischere Anwendungen der Identitätsföderation:

- [OIDC-Front-Channel-Abmeldung](https://openid.net/specs/openid-connect-frontchannel-1_0.html): Dieser Ablauf erfordert, dass der IDP mehrere RP-`<iframe>`s einbettet, die sich auf RP-Cookies stützen.
- Soziale Widgets: Um soziale Widgets bereitzustellen, muss das IdP-Drittanbieter-Cookie aus dem RP-Top-Level-Ursprung bereitgestellt werden.
- Personalisierte Buttons: Die Anzeige personalisierter Anmeldeinformationen auf einem {{htmlelement("button")}} im RP-Ursprung wird als IdP-`<iframe>` implementiert, das Drittanbieter-Cookies erfordert.
- Sitzungsaktualisierung ohne Top-Level-Navigation oder Popups.

FedCM zielt darauf ab, dieses Problem zu umgehen, indem ein dedizierter Mechanismus für föderierte Identitätsflüsse im Web bereitgestellt wird, und ermöglicht unterstützenden Browsern, spezielle UI-Elemente auf RPs bereitzustellen, die es Benutzern ermöglichen, ein IdP-Konto für die Anmeldung zu wählen.

Es gibt zwei Teile bei der Verwendung der FedCM-API, die in den unten verlinkten Leitfäden behandelt werden:

1. [IdP-Integration mit FedCM](/de/docs/Web/API/FedCM_API/IDP_integration) — was ein Identitätsanbieter bereitstellen muss, damit ein RP sich damit integrieren kann.
2. [RP-föderierte Anmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in) — die FedCM-Funktionalität, die ein RP benötigt, um einen Benutzer unter Verwendung seines IdP-Kontos anzumelden. Eine FedCM-Anfrage zur Anmeldung wird mit der Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) initiiert.

> [!NOTE]
> [Google Sign In](https://developers.google.com/identity/gsi/web/guides/overview) ist ein Beispiel für einen IdP, der bereits FedCM unterstützt. [Migrieren zu FedCM](https://developers.google.com/identity/gsi/web/guides/fedcm-migration) bietet Anweisungen für RPs, die bestehende Apps mit Google Sign In auf föderiertes Anmelden umstellen möchten.

## Integration der Berechtigungsrichtlinie und `<iframe>`-Unterstützung

Die {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) kann verwendet werden, um die Erlaubnis zur Nutzung von FedCM zu kontrollieren, insbesondere die Nutzung der [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Methode.

Entwickler können explizit die Erlaubnis für ein {{htmlelement("iframe")}} erteilen, FedCM über das `allow`-Attribut zu verwenden:

```html
<iframe src="3rd-party.example" allow="identity-credentials-get"></iframe>
```

Die Verfügbarkeit von FedCM innerhalb von `<iframe>`s ermöglicht einige Anwendungsfälle:

- Größere Sites werden nicht wollen, dass ein Drittanbieter-Anmeldeskript die Kontrolle über den Top-Level-Frame erlangt; stattdessen möchten sie dieses Skript hinzufügen und FedCM aus einem {{htmlelement("iframe")}} aufrufen.
- Einige `<iframes>` können selbst eine föderierte Authentifizierung erfordern.

## Schnittstellen

- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
  - : Stellt ein Benutzeridentitätszertifikat dar, das aus einer erfolgreichen föderierten Authentifizierung hervorgeht. Ein erfolgreicher Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get), der eine `identity`-Option einschließt, führt zu einer Erfüllung mit einer Instanz von [`IdentityCredential`](/de/docs/Web/API/IdentityCredential).
- [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)
  - : Stellt einen IdP dar und bietet Zugriff auf zugehörige Informationen und Funktionalitäten.
- [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)
  - : Definiert Anmeldefunktionalität für IdPs, einschließlich der Methode [`Navigator.login.setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus) zum [Aktualisieren des IdP-Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

## Erweiterungen zu anderen Schnittstellen

- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die `identity`-Option.
  - : `identity` ist ein Objekt, das Details zu föderierten IdPs enthält, die eine vertrauende Partei (RP) nutzen kann, um Benutzer anzumelden. Es veranlasst einen `get()`-Aufruf, eine Anfrage für einen Benutzer zu initiieren, sich bei einer RP mit einem IdP anzumelden.
- [`Navigator.login`](/de/docs/Web/API/Navigator/login)
  - : Bietet Zugang zum [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Objekt des Browsers.

## HTTP-Header

- {{httpheader("Set-Login")}}
  - : Bietet einen HTTP-Mechanismus zum [Aktualisieren des Anmeldestatus](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) über HTTP.

## Beispiele

Für Beispielcode siehe:

- [Implementierung einer Identitätslösung mit FedCM auf der Seite des Identitätsanbieters](https://privacysandbox.google.com/cookies/fedcm/implement/identity-provider) auf privacysandbox.google.com (2025).
- [Implementierung einer Identitätslösung mit FedCM auf der Seite der vertrauenden Partei](https://privacysandbox.google.com/cookies/fedcm/implement/relying-party) auf privacysandbox.google.com (2025).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm)

---
title: identity
slug: Mozilla/Add-ons/WebExtensions/API/identity
l10n:
  sourceCommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{AddonSidebar}}

Verwenden Sie die Identity-API, um einen [OAuth2](https://oauth.net/2/) Autorisierungscode oder Zugriffstoken zu erhalten, den eine Erweiterung dann verwenden kann, um auf Benutzerdaten von einem Dienst zuzugreifen, der OAuth2-Zugriff unterstützt (wie Google oder Facebook).

OAuth2-Flows variieren je nach Dienstanbieter, daher sollten Sie diese API mit einem bestimmten Dienstanbieter verwenden, indem Sie deren Dokumentation konsultieren. Zum Beispiel:

- [Google](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow)
- [GitHub](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)

Die Identity-API stellt die Funktion {{WebExtAPIRef("identity.launchWebAuthFlow()")}} bereit. Diese authentifiziert den Benutzer gegebenenfalls beim Dienst und fordert den Benutzer auf, der Erweiterung den Zugriff auf Daten zu gestatten, falls erforderlich. Die Funktion wird entweder mit einem Zugriffstoken oder einem Autorisierungscode abgeschlossen, abhängig vom Anbieter.

Die Erweiterung vervollständigt dann den OAuth2-Flow, um ein validiertes Zugriffstoken zu erhalten, und verwendet das Token in HTTPS-Anfragen, um auf die Benutzerdaten gemäß der erteilten Autorisierung zuzugreifen.

Um diese API zu verwenden, müssen Sie die "identity"-[API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) besitzen.

## Einrichtung

Es gibt einige Einrichtungsschritte, die Sie vor der Veröffentlichung Ihrer Erweiterung durchführen müssen.

### Abrufen der Redirect-URL

Die [Redirect-URL](https://www.oauth.com/oauth2-servers/redirect-uris/) stellt den Endpunkt von {{WebExtAPIRef("identity.launchWebAuthFlow()")}} dar, in dem das Zugriffstoken oder der Autorisierungscode an die Erweiterung übermittelt wird. Der Browser extrahiert das Ergebnis aus der Redirect-URL, ohne deren Antwort zu laden.

Sie erhalten die Redirect-URL, indem Sie {{WebExtAPIRef("identity.getRedirectURL()")}} aufrufen. Diese Funktion leitet eine Redirect-URL von der ID des Add-ons ab. Um das Testen zu vereinfachen, setzen Sie die ID Ihres Add-ons explizit mit dem [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)-Schlüssel (ansonsten erhalten Sie jedes Mal, wenn Sie das Add-on [vorübergehend installieren](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), eine andere Redirect-URL).

{{WebExtAPIRef("identity.getRedirectURL()")}} gibt eine URL mit einem festen Domainnamen und einer von der ID des Add-ons abgeleiteten Subdomain zurück. Einige OAuth-Server (wie Google) akzeptieren nur Domains, deren Besitz verifiziert ist, als Redirect-URL. Da die Dummy-Domain nicht von Erweiterungsentwicklern kontrolliert werden kann, kann die Standarddomäne nicht immer verwendet werden.

Jedoch sind Loopback-Adressen eine akzeptierte Alternative, die keine Domainvalidierung erfordern (basierend auf [RFC 8252, Abschnitt 7.3](https://datatracker.ietf.org/doc/html/rfc8252#section-7.3)). Ab Firefox 86 ist eine Loopback-Adresse im Format `http://127.0.0.1/mozoauth2/[subdomain of URL returned by identity.getRedirectURL()]` als Wert für die Redirect-URL zulässig.

> [!NOTE]
> Ab Firefox 75 müssen Sie die von {{WebExtAPIRef("identity.getRedirectURL()")}} zurückgegebene Redirect-URL verwenden. Frühere Versionen ermöglichten Ihnen die Angabe beliebiger Redirect-URLs.
>
> Ab Firefox 86 kann auch die oben beschriebene spezielle Loopback-Adresse verwendet werden.

Sie verwenden die Redirect-URL an zwei Stellen:

- Sie geben sie an, wenn Sie Ihre Erweiterung als OAuth2-Client registrieren.
- Sie fügen sie als URL-Parameter zu dem Argument `url` der Funktion `identity.launchWebAuthFlow()` hinzu.

### Registrierung Ihrer Erweiterung

Bevor Sie OAuth2 mit einem Dienstanbieter verwenden, müssen Sie die Erweiterung beim Anbieter als OAuth2-Client registrieren.

Dies wird in der Regel spezifisch für den Dienstanbieter sein, bedeutet aber im Allgemeinen, dass Sie einen Eintrag für Ihre Erweiterung auf der Website des Anbieters erstellen. In diesem Prozess geben Sie Ihre Redirect-URL an und erhalten eine Client-ID (und manchmal auch ein Geheimnis). Sie müssen beide in {{WebExtAPIRef("identity.launchWebAuthFlow()")}} übergeben.

## Funktionen

- {{WebExtAPIRef("identity.getRedirectURL()")}}
  - : Holt die Redirect-URL.
- {{WebExtAPIRef("identity.launchWebAuthFlow()")}}
  - : Startet WAF.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.identity`](https://developer.chrome.com/docs/extensions/reference/api/identity) API.

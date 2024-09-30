---
title: identity
slug: Mozilla/Add-ons/WebExtensions/API/identity
l10n:
  sourceCommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{AddonSidebar}}

Verwenden Sie die `identity` API, um einen [OAuth2](https://oauth.net/2/) Autorisierungscode oder Zugriffstoken zu erhalten, mit dem eine Erweiterung dann auf Benutzerdaten von einem Dienst zugreifen kann, der OAuth2-Zugriff unterstützt (wie Google oder Facebook).

Da OAuth2-Flows je nach Dienstanbieter variieren, sollten Sie die Dokumentation des jeweiligen Dienstanbieters konsultieren, um diese API zu nutzen. Zum Beispiel:

- [Google](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow)
- [GitHub](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)

Die `identity` API stellt die Funktion {{WebExtAPIRef("identity.launchWebAuthFlow()")}} bereit. Diese authentifiziert den Benutzer beim Dienst, falls erforderlich, und bittet den Benutzer, die Erweiterung zum Zugriff auf Daten zu autorisieren, falls erforderlich. Die Funktion wird entweder mit einem Zugriffstoken oder einem Autorisierungscode abgeschlossen, abhängig vom Anbieter.

Die Erweiterung schließt dann den OAuth2-Flow ab, um einen validierten Zugriffstoken zu erhalten und nutzt das Token in HTTPS-Anfragen, um auf die Benutzerdaten entsprechend der erteilten Autorisierung zuzugreifen.

Um diese API zu verwenden, müssen Sie die "identity" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) besitzen.

## Einrichtung

Es gibt einige Einrichtungsschritte, die Sie durchführen müssen, bevor Sie Ihre Erweiterung veröffentlichen.

### Abrufen der Redirect-URL

Die [Redirect-URL](https://www.oauth.com/oauth2-servers/redirect-uris/) repräsentiert den Endpunkt von {{WebExtAPIRef("identity.launchWebAuthFlow()")}}, bei dem das Zugriffstoken oder der Autorisierungscode an die Erweiterung übermittelt wird. Der Browser extrahiert das Ergebnis von der Redirect-URL, ohne deren Antwort zu laden.

Sie erhalten die Redirect-URL durch den Aufruf von {{WebExtAPIRef("identity.getRedirectURL()")}}. Diese Funktion leitet eine Redirect-URL von der ID des Add-ons ab. Um das Testen zu vereinfachen, setzen Sie die ID Ihres Add-ons explizit mit dem [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel (ansonsten erhalten Sie bei jedem [vorübergehenden Installieren des Add-ons](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) eine andere Redirect-URL).

{{WebExtAPIRef("identity.getRedirectURL()")}} gibt eine URL bei einem festen Domainnamen und einem von der Add-on-ID abgeleiteten Subdomain zurück. Einige OAuth-Server (wie Google) akzeptieren nur Domains mit einer verifizierten Inhaberschaft als Redirect-URL. Da die Dummy-Domain nicht von Erweiterungsentwicklern kontrolliert werden kann, kann die Standarddomain nicht immer verwendet werden.

Jedoch sind Loopback-Adressen eine akzeptierte Alternative, die keine Domänenvalidierung erfordern (basierend auf [RFC 8252, Abschnitt 7.3](https://datatracker.ietf.org/doc/html/rfc8252#section-7.3)). Ab Firefox 86 ist eine Loopback-Adresse mit dem Format `http://127.0.0.1/mozoauth2/[subdomain der von identity.getRedirectURL() zurückgegebenen URL]` als Wert für die Redirect-URL zulässig.

> [!NOTE]
> Ab Firefox 75 müssen Sie die von {{WebExtAPIRef("identity.getRedirectURL()")}} zurückgegebene Redirect-URL verwenden. Frühere Versionen erlaubten das Bereitstellen beliebiger Redirect-URLs.
>
> Ab Firefox 86 kann auch die oben beschriebene spezielle Loopback-Adresse verwendet werden.

Sie werden die Redirect-URL an zwei Stellen verwenden:

- Geben Sie sie an, wenn Sie Ihre Erweiterung als OAuth2-Client registrieren.
- Übergeben Sie sie als URL-Parameter an `identity.launchWebAuthFlow()`, der der `url`-Argument dieser Funktion hinzugefügt wird.

### Registrierung Ihrer Erweiterung

Bevor Sie OAuth2 mit einem Dienstanbieter verwenden, müssen Sie die Erweiterung beim Anbieter als OAuth2-Client registrieren.

Dies wird tendenziell spezifisch für den Dienstanbieter sein, bedeutet jedoch im Allgemeinen, dass Sie ein Konto für Ihre Erweiterung auf der Website des Anbieters erstellen. In diesem Prozess geben Sie Ihre Redirect-URL an und erhalten eine Client-ID (und manchmal auch ein Geheimnis). Diese müssen Sie an {{WebExtAPIRef("identity.launchWebAuthFlow()")}} übergeben.

## Funktionen

- {{WebExtAPIRef("identity.getRedirectURL()")}}
  - : Erhält die Redirect-URL.
- {{WebExtAPIRef("identity.launchWebAuthFlow()")}}
  - : Startet WAF.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.identity`](https://developer.chrome.com/docs/extensions/reference/api/identity)-API von Chromium.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->

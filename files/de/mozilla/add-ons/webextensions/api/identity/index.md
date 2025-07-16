---
title: identity
slug: Mozilla/Add-ons/WebExtensions/API/identity
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Verwenden Sie die Identity-API, um einen [OAuth2](https://oauth.net/2/) Autorisierungscode oder Zugriffstoken zu erhalten, den eine Erweiterung dann nutzen kann, um auf Benutzerdaten von einem Dienst zuzugreifen, der OAuth2-Zugriff unterstützt (wie Google oder Facebook).

OAuth2-Abläufe variieren je nach Dienstanbieter. Um diese API mit einem bestimmten Dienstanbieter zu verwenden, konsultieren Sie deren Dokumentation. Zum Beispiel:

- [Google](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow)
- [GitHub](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)

Die Identity-API stellt die Funktion {{WebExtAPIRef("identity.launchWebAuthFlow()")}} zur Verfügung. Diese authentifiziert den Benutzer mit dem Dienst, falls erforderlich, und bittet den Benutzer, der Erweiterung den Zugriff auf Daten zu erlauben, falls erforderlich. Die Funktion wird mit einem Zugriffstoken oder Autorisierungscode abgeschlossen, abhängig vom Anbieter.

Die Erweiterung vervollständigt dann den OAuth2-Ablauf, um ein validiertes Zugriffstoken zu erhalten, und verwendet das Token in HTTPS-Anfragen, um auf die Benutzerdaten zuzugreifen, gemäß der Erlaubnis, die der Benutzer gegeben hat.

Um diese API zu verwenden, müssen Sie die "identity" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) besitzen.

## Einrichtung

Es gibt einige Schritte, die Sie vor der Veröffentlichung Ihrer Erweiterung durchführen müssen.

### Abrufen der Redirect-URL

Die [Redirect-URL](https://www.oauth.com/oauth2-servers/redirect-uris/) repräsentiert den Endpunkt von {{WebExtAPIRef("identity.launchWebAuthFlow()")}}, in dem das Zugriffstoken oder der Autorisierungscode an die Erweiterung übermittelt wird. Der Browser extrahiert das Ergebnis aus der Redirect-URL, ohne deren Antwort zu laden.

Sie erhalten die Redirect-URL durch Aufruf von {{WebExtAPIRef("identity.getRedirectURL()")}}. Diese Funktion leitet eine Redirect-URL von der ID des Add-ons ab. Um das Testen zu vereinfachen, legen Sie die ID Ihres Add-ons explizit mit dem Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) fest (ansonsten erhalten Sie jedes Mal, wenn Sie das Add-on [vorübergehend installieren](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), eine andere Redirect-URL).

{{WebExtAPIRef("identity.getRedirectURL()")}} gibt eine URL mit einem festen Domainnamen und einem vom Add-on abgeleiteten Subdomainnamen zurück. Einige OAuth-Server (wie Google) akzeptieren nur Domains mit bestätigtem Besitz als Redirect-URL. Da die Dummy-Domain nicht von Erweiterungsentwicklern kontrolliert werden kann, kann die Standard-Domain nicht immer verwendet werden.

Allerdings sind Loopback-Adressen eine akzeptierte Alternative, die keine Domainvalidierung erfordern (basierend auf [RFC 8252, Abschnitt 7.3](https://datatracker.ietf.org/doc/html/rfc8252#section-7.3)). Ab Firefox 86 ist eine Loopback-Adresse im Format `http://127.0.0.1/mozoauth2/[Subdomain der von identity.getRedirectURL() zurückgegebenen URL]` als Wert für die Redirect-URL zulässig.

> [!NOTE]
> Ab Firefox 75 müssen Sie die von {{WebExtAPIRef("identity.getRedirectURL()")}} zurückgegebene Redirect-URL verwenden. Frühere Versionen erlaubten das Verwenden einer beliebigen Redirect-URL.
>
> Ab Firefox 86 kann die oben beschriebene spezielle Loopback-Adresse ebenfalls verwendet werden.

Sie verwenden die Redirect-URL an zwei Stellen:

- um sie bei der Registrierung Ihrer Erweiterung als OAuth2-Client anzugeben.
- um sie als URL-Parameter in `identity.launchWebAuthFlow()` einzufügen, der zu dem `url`-Argument dieser Funktion hinzugefügt wird.

### Registrierung Ihrer Erweiterung

Bevor Sie OAuth2 mit einem Dienstanbieter nutzen, müssen Sie die Erweiterung beim Anbieter als OAuth2-Client registrieren.

Dies wird in der Regel spezifisch für den Dienstanbieter sein, aber im Allgemeinen bedeutet es, einen Eintrag für Ihre Erweiterung auf der Website des Anbieters zu erstellen. In diesem Prozess geben Sie Ihre Redirect-URL an und erhalten eine Client-ID (und manchmal auch ein Geheimnis). Sie müssen beide in {{WebExtAPIRef("identity.launchWebAuthFlow()")}} übergeben.

## Funktionen

- {{WebExtAPIRef("identity.getRedirectURL()")}}
  - : Ruft die Redirect-URL ab.
- {{WebExtAPIRef("identity.launchWebAuthFlow()")}}
  - : Startet WAF.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.identity`](https://developer.chrome.com/docs/extensions/reference/api/identity) API von Chromium.

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

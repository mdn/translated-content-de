---
title: identity
slug: Mozilla/Add-ons/WebExtensions/API/identity
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Verwenden Sie die identity API, um einen [OAuth2](https://oauth.net/2/) Autorisierungscode oder Zugriffstoken zu erhalten, den eine Erweiterung dann nutzen kann, um auf Benutzerdaten von einem Dienst zuzugreifen, der OAuth2 unterstützt (wie Google oder Facebook).

OAuth2-Abläufe variieren je nach Dienstanbieter, daher sollten Sie zur Nutzung dieser API mit einem bestimmten Dienstanbieter dessen Dokumentation konsultieren. Zum Beispiel:

- [Google](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow)
- [GitHub](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)

Die identity API stellt die Funktion {{WebExtAPIRef("identity.launchWebAuthFlow()")}} bereit. Diese authentifiziert den Benutzer bei dem Dienst, falls erforderlich, und bittet den Benutzer gegebenenfalls, die Erweiterung zur Datenzugriff zu autorisieren. Die Funktion schließt mit einem Zugriffstoken oder Autorisierungscode ab, abhängig vom Anbieter.

Die Erweiterung vervollständigt dann den OAuth2-Ablauf, um ein validiertes Zugriffstoken zu erhalten, und verwendet das Token in HTTPS-Anfragen, um gemäß der vom Benutzer gegebenen Autorisierung auf die Daten des Benutzers zuzugreifen.

Um diese API zu verwenden, müssen Sie die "identity" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) haben.

## Einrichtung

Es gibt einige Vorbereitungen, die Sie treffen müssen, bevor Sie Ihre Erweiterung veröffentlichen.

### Abrufen der Redirect-URL

Die [Redirect-URL](https://www.oauth.com/oauth2-servers/redirect-uris/) repräsentiert den Endpunkt von {{WebExtAPIRef("identity.launchWebAuthFlow()")}}, in dem das Zugriffstoken oder der Autorisierungscode an die Erweiterung übergeben wird. Der Browser extrahiert das Ergebnis aus der Redirect-URL, ohne deren Antwort zu laden.

Sie erhalten die Redirect-URL, indem Sie {{WebExtAPIRef("identity.getRedirectURL()")}} aufrufen. Diese Funktion leitet eine Redirect-URL von der ID des Add-Ons ab. Um das Testen zu vereinfachen, setzen Sie die ID Ihres Add-Ons explizit mithilfe des Schlüssels [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) (andernfalls erhalten Sie jedes Mal, wenn Sie das [Add-On vorübergehend installieren](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), eine andere Redirect-URL).

{{WebExtAPIRef("identity.getRedirectURL()")}} gibt eine URL mit einem festen Domainnamen und einem Subdomain zurück, die von der ID des Add-Ons abgeleitet ist. Einige OAuth-Server (wie Google) akzeptieren nur Domains mit einem verifizierten Eigentum als Redirect-URL. Da die Dummy-Domain nicht von Erweiterungsentwicklern kontrolliert werden kann, kann die Standarddomain nicht immer verwendet werden.

Allerdings sind Loopback-Adressen eine akzeptierte Alternative, die keine Domainvalidierung erfordern (basierend auf [RFC 8252, Abschnitt 7.3](https://datatracker.ietf.org/doc/html/rfc8252#section-7.3)). Ab Firefox 86 ist eine Loopback-Adresse im Format `http://127.0.0.1/mozoauth2/[subdomain of URL returned by identity.getRedirectURL()]` als Wert für die Redirect-URL zulässig.

> [!NOTE]
> Ab Firefox 75 müssen Sie die von {{WebExtAPIRef("identity.getRedirectURL()")}} zurückgegebene Redirect-URL verwenden. Früheren Versionen erlaubten es Ihnen, eine beliebige Redirect-URL anzugeben.
>
> Ab Firefox 86 kann auch die oben beschriebene spezielle Loopback-Adresse verwendet werden.

Sie werden die Redirect-URL an zwei Stellen verwenden:

- Sie geben sie bei der Registrierung Ihrer Erweiterung als OAuth2-Client an.
- Sie übergeben sie als URL-Parameter in `identity.launchWebAuthFlow()`, die zur `url`-Argument dieser Funktion hinzugefügt wird.

### Registrierung Ihrer Erweiterung

Bevor Sie OAuth2 mit einem Dienstanbieter verwenden, müssen Sie die Erweiterung beim Anbieter als OAuth2-Client registrieren.

Dies wird in der Regel spezifisch für den Dienstanbieter sein, bedeutet aber im Allgemeinen, dass Sie auf der Website des Anbieters einen Eintrag für Ihre Erweiterung erstellen. In diesem Prozess geben Sie Ihre Redirect-URL an und erhalten eine Client-ID (und manchmal auch ein Geheimnis). Sie müssen beide in {{WebExtAPIRef("identity.launchWebAuthFlow()")}} übergeben.

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

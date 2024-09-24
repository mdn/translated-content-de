---
title: identität
slug: Mozilla/Add-ons/WebExtensions/API/identity
l10n:
  sourceCommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{AddonSidebar}}

Verwenden Sie die identity-API, um einen [OAuth2](https://oauth.net/2/) Autorisierungscode oder Zugriffstoken zu erhalten, den eine Erweiterung dann verwenden kann, um auf Benutzerdaten eines Dienstes zuzugreifen, der OAuth2-Zugriff unterstützt (wie Google oder Facebook).

OAuth2-Abläufe variieren je nach Dienstanbieter, daher sollten Sie die Dokumentation des jeweiligen Dienstanbieters konsultieren, um diese API zu verwenden. Zum Beispiel:

- [Google](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow)
- [GitHub](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)

Die identity-API bietet die Funktion {{WebExtAPIRef("identity.launchWebAuthFlow()")}} an. Diese authentifiziert den Benutzer beim Dienst, falls erforderlich, und bittet den Benutzer, der Erweiterung die Berechtigung zum Zugriff auf Daten zu erteilen, falls erforderlich. Die Funktion stellt je nach Anbieter einen Zugriffstoken oder Autorisierungscode bereit.

Die Erweiterung schließt dann den OAuth2-Ablauf ab, um einen validierten Zugriffstoken zu erhalten, und verwendet den Token in HTTPS-Anfragen, um auf die Benutzerdaten gemäß der vom Benutzer erteilten Berechtigung zuzugreifen.

Um diese API zu verwenden, müssen Sie die "identity" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) haben.

## Einrichtung

Es gibt einige Vorbereitungen, die Sie vor der Veröffentlichung Ihrer Erweiterung treffen müssen.

### Abrufen der Weiterleitungs-URL

Die [Weiterleitungs-URL](https://www.oauth.com/oauth2-servers/redirect-uris/) repräsentiert den Endpunkt von {{WebExtAPIRef("identity.launchWebAuthFlow()")}}, in dem das Zugriffstoken oder der Autorisierungscode an die Erweiterung übermittelt wird. Der Browser extrahiert das Ergebnis aus der Weiterleitungs-URL, ohne deren Antwort zu laden.

Sie erhalten die Weiterleitungs-URL, indem Sie {{WebExtAPIRef("identity.getRedirectURL()")}} aufrufen. Diese Funktion leitet eine Weiterleitungs-URL von der ID des Add-ons ab. Um das Testen zu vereinfachen, geben Sie die ID Ihres Add-ons explizit mit dem Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) an (ansonsten erhalten Sie jedes Mal, wenn Sie [das Add-on temporär installieren](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), eine andere Weiterleitungs-URL).

{{WebExtAPIRef("identity.getRedirectURL()")}} gibt eine URL mit einem festen Domain-Namen und einer von der ID des Add-ons abgeleiteten Subdomain zurück. Einige OAuth-Server (wie Google) akzeptieren nur Domains mit einer verifizierten Inhaberschaft als Weiterleitungs-URL. Da die Dummy-Domain nicht von Erweiterungsentwicklern kontrolliert werden kann, kann die Standard-Domain nicht immer verwendet werden.

Jedoch sind Loopback-Adressen eine akzeptierte Alternative, die keine Domain-Validierung erfordern (basierend auf [RFC 8252, Abschnitt 7.3](https://datatracker.ietf.org/doc/html/rfc8252#section-7.3)). Ab Firefox 86 ist eine Loopback-Adresse im Format `http://127.0.0.1/mozoauth2/[Subdomain der von identity.getRedirectURL() zurückgegebenen URL]` als Wert für die Weiterleitungs-URL zulässig.

> [!NOTE]
> Ab Firefox 75 müssen Sie die von {{WebExtAPIRef("identity.getRedirectURL()")}} zurückgegebene Weiterleitungs-URL verwenden. Frühere Versionen erlaubten es Ihnen, jede beliebige Weiterleitungs-URL anzugeben.
>
> Ab Firefox 86 kann auch die oben beschriebene spezielle Loopback-Adresse verwendet werden.

Sie verwenden die Weiterleitungs-URL an zwei Stellen:

- Sie geben sie an, wenn Sie Ihre Erweiterung als OAuth2-Client registrieren.
- Sie übergeben sie als URL-Parameter in `identity.launchWebAuthFlow()`, die zu diesem Zweck dem `url`-Argument dieser Funktion hinzugefügt wird.

### Registrieren Ihrer Erweiterung

Bevor Sie OAuth2 mit einem Dienstanbieter verwenden, müssen Sie die Erweiterung beim Anbieter als OAuth2-Client registrieren.

Dies wird spezifisch für den Dienstanbieter sein, bedeutet aber im Allgemeinen, einen Eintrag für Ihre Erweiterung auf der Website des Anbieters zu erstellen. In diesem Prozess geben Sie Ihre Weiterleitungs-URL an und erhalten eine Client-ID (und manchmal auch ein Geheimnis). Sie müssen beide an {{WebExtAPIRef("identity.launchWebAuthFlow()")}} übergeben.

## Funktionen

- {{WebExtAPIRef("identity.getRedirectURL()")}}
  - : Ruft die Weiterleitungs-URL ab.
- {{WebExtAPIRef("identity.launchWebAuthFlow()")}}
  - : Startet WAF.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.identity`](https://developer.chrome.com/docs/extensions/reference/api/identity) API.

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

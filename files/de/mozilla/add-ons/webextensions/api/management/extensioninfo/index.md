---
title: ExtensionInfo
slug: Mozilla/Add-ons/WebExtensions/API/management/ExtensionInfo
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein `ExtensionInfo`-Objekt enthält Informationen über ein Add-on.

## Typ

Es handelt sich um ein Objekt mit den folgenden Eigenschaften:

- `description`
  - : `string`. Die Beschreibung des Add-ons, entnommen aus dem `manifest.json` [description](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description)-Schlüssel.
- `disabledReason`
  - : `string`. Falls das Add-on deaktiviert ist, der Grund, warum es deaktiviert wurde. Eines von "unknown" oder "permissions_increase".
- `enabled`
  - : `boolean`. Gibt an, ob das Add-on derzeit aktiviert ist.
- `homepageUrl`
  - : `string`. Die Homepage-URL des Add-ons, entnommen aus dem `manifest.json` [homepage_url](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url)-Schlüssel.
- `hostPermissions`
  - : `array` von `string`. Die [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) des Add-ons.
- `icons`
  - : `array` von `object`. Informationen über die Symbole des Add-ons. Ein Array von Objekten, eines für jedes Symbol. Jedes Objekt enthält zwei Eigenschaften:
    - `size`: ein Integer, der die Breite und Höhe des Symbols in Pixeln darstellt.
    - `url`: ein String, der eine relative URL zum Symbol enthält, beginnend am Root des Add-ons.

- `id`
  - : `string`. Die ID des Add-ons.
- `installType`
  - : `string`. Ein String, der beschreibt, wie das Add-on installiert wurde. Eine der folgenden:
    - "admin": Das Add-on wurde aufgrund einer administrativen Richtlinie installiert.
    - "development": Das Add-on wurde entpackt von der Festplatte installiert.
    - "normal": Das Add-on wurde normal über ein Installationspaket installiert.
    - "sideload": Das Add-on wurde von einer anderen Software auf dem Computer des Benutzers installiert.
    - "other": Das Add-on wurde auf eine andere Weise installiert.

- `mayDisable`
  - : `boolean`. Ob dieses Add-on vom Benutzer deaktiviert oder deinstalliert werden kann.
- `name`
  - : `string`. Der Name des Add-ons, entnommen aus dem `manifest.json` [name](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name)-Schlüssel.
- `offlineEnabled`
  - : `boolean`. Ob das Add-on angibt, offline unterstützt zu werden.
- `optionsUrl`
  - : `string`. URL für die [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) des Elements, falls vorhanden. Dies ist eine relative URL, beginnend am Root des Add-ons.
- `permissions`
  - : `array` von `string`. Die [API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) des Add-ons.
- `shortName`
  - : `string`. Eine Kurzversion des Namens des Add-ons, entnommen aus dem `manifest.json` [short_name](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/short_name)-Schlüssel.
- `type`
  - : `string`. Ein String, der den Typ des Add-ons beschreibt. Dies wird verwendet, um Erweiterungen von Apps und Themes zu unterscheiden. Es kann einen der folgenden Werte annehmen:
    - "extension": häufigster Typ des Add-ons.
    - "hosted_app"
    - "packaged_app"
    - "legacy_packaged_app"
    - "theme"

- `updateUrl`
  - : `string`. URL für Updates zu diesem Add-on, entnommen aus dem `manifest.json` [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)-Schlüssel.
- `version`
  - : `string`. Version dieses Add-ons, entnommen aus dem `manifest.json` [version](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)-Schlüssel.
- `versionName`
  - : `string`. Beschreibender Name für die Version dieses Add-ons, entnommen aus dem `manifest.json` [version_name](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version_name)-Schlüssel.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#type-ExtensionInfo). Diese Dokumentation stammt aus [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code.

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

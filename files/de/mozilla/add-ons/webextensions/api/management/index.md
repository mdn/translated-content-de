---
title: management
slug: Mozilla/Add-ons/WebExtensions/API/management
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Erhalten Sie Informationen über installierte Add-ons.

Mit der `management`-API können Sie:

- Informationen über installierte Add-ons abrufen
- Add-ons aktivieren/deaktivieren
- Add-ons deinstallieren
- herausfinden, welche Berechtigungswarnungen für bestimmte Add-ons oder Manifeste gegeben sind
- Benachrichtigungen über installierte, deinstallierte, aktivierte oder deaktivierte Add-ons erhalten.

Die meisten dieser Operationen erfordern die Berechtigung "management" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Operationen, die keinen Zugriff auf andere Add-ons gewähren, benötigen diese Berechtigung nicht.

## Typen

- {{WebExtAPIRef("management.ExtensionInfo")}}
  - : Ein Objekt, das Informationen über ein installiertes Add-on enthält.

## Funktionen

- {{WebExtAPIRef("management.getAll()")}}
  - : Gibt Informationen über alle installierten Add-ons zurück.
- {{WebExtAPIRef("management.get()")}}
  - : Gibt Informationen über ein bestimmtes Add-on zurück, basierend auf seiner ID.
- {{WebExtAPIRef("management.getSelf()")}}
  - : Gibt Informationen über das aufrufende Add-on zurück.
- {{WebExtAPIRef("management.install()")}}
  - : Installiert ein bestimmtes Theme, basierend auf seiner URL bei [addons.mozilla.org](https://addons.mozilla.org/).
- {{WebExtAPIRef("management.uninstall()")}}
  - : Deinstalliert ein bestimmtes Add-on, basierend auf seiner ID.
- {{WebExtAPIRef("management.uninstallSelf()")}}
  - : Deinstalliert das aufrufende Add-on.
- {{WebExtAPIRef("management.getPermissionWarningsById()")}}
  - : Gibt die Menge der Berechtigungswarnungen für ein bestimmtes Add-on zurück, basierend auf seiner ID.
- {{WebExtAPIRef("management.getPermissionWarningsByManifest()")}}
  - : Gibt die Menge der Berechtigungswarnungen zurück, die für den gegebenen Manifest-String angezeigt würden.
- {{WebExtAPIRef("management.setEnabled()")}}
  - : Aktiviert/deaktiviert ein bestimmtes Add-on, basierend auf seiner ID.

## Ereignisse

- {{WebExtAPIRef("management.onInstalled")}}
  - : Wird ausgelöst, wenn ein Add-on installiert wird.
- {{WebExtAPIRef("management.onUninstalled")}}
  - : Wird ausgelöst, wenn ein Add-on deinstalliert wird.
- {{WebExtAPIRef("management.onEnabled")}}
  - : Wird ausgelöst, wenn ein Add-on aktiviert wird.
- {{WebExtAPIRef("management.onDisabled")}}
  - : Wird ausgelöst, wenn ein Add-on deaktiviert wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management) API von Chromium. Diese Dokumentation leitet sich von [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code ab.

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

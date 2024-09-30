---
title: management
slug: Mozilla/Add-ons/WebExtensions/API/management
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erhalten Sie Informationen über installierte Add-ons.

Mit der `management` API können Sie:

- Informationen über installierte Add-ons erhalten
- Add-ons aktivieren/deaktivieren
- Add-ons deinstallieren
- herausfinden, welche Berechtigungswarnungen für bestimmte Add-ons oder Manifeste gegeben werden
- Benachrichtigungen erhalten, wenn Add-ons installiert, deinstalliert, aktiviert oder deaktiviert werden.

Die meisten dieser Vorgänge erfordern die "management" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Vorgänge, die keinen Zugriff auf andere Add-ons bieten, erfordern diese Berechtigung nicht.

## Typen

- {{WebExtAPIRef("management.ExtensionInfo")}}
  - : Ein Objekt, das Informationen über ein installiertes Add-on enthält.

## Funktionen

- {{WebExtAPIRef("management.getAll()")}}
  - : Gibt Informationen über alle installierten Add-ons zurück.
- {{WebExtAPIRef("management.get()")}}
  - : Gibt Informationen über ein bestimmtes Add-on zurück, gegebenenfalls dessen ID.
- {{WebExtAPIRef("management.getSelf()")}}
  - : Gibt Informationen über das aufrufende Add-on zurück.
- {{WebExtAPIRef("management.install()")}}
  - : Installiert ein bestimmtes Theme, gegebenenfalls dessen URL bei [addons.mozilla.org](https://addons.mozilla.org).
- {{WebExtAPIRef("management.uninstall()")}}
  - : Deinstalliert ein bestimmtes Add-on, gegebenenfalls dessen ID.
- {{WebExtAPIRef("management.uninstallSelf()")}}
  - : Deinstalliert das aufrufende Add-on.
- {{WebExtAPIRef("management.getPermissionWarningsById()")}}
  - : Ruft die Menge der Berechtigungswarnungen für ein bestimmtes Add-on ab, gegebenenfalls dessen ID.
- {{WebExtAPIRef("management.getPermissionWarningsByManifest()")}}
  - : Ruft die Menge der Warnungen ab, die für die angegebene Manifest-Zeichenkette angezeigt würden.
- {{WebExtAPIRef("management.setEnabled()")}}
  - : Aktiviert/deaktiviert ein bestimmtes Add-on, gegebenenfalls dessen ID.

## Ereignisse

- {{WebExtAPIRef("management.onInstalled")}}
  - : Wird ausgelöst, wenn ein Add-on installiert wird.
- {{WebExtAPIRef("management.onUninstalled")}}
  - : Wird ausgelöst, wenn ein Add-on deinstalliert wird.
- {{WebExtAPIRef("management.onEnabled")}}
  - : Wird ausgelöst, wenn ein Add-on aktiviert wird.
- {{WebExtAPIRef("management.onDisabled")}}
  - : Wird ausgelöst, wenn ein Add-on deaktiviert wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromes [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management) API. Diese Dokumentation basiert auf [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code.

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

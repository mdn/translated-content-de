---
title: windows.Window
slug: Mozilla/Add-ons/WebExtensions/API/windows/Window
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Informationen über ein Browserfenster.

## Typ

Werte dieses Typs sind `objects`. Sie enthalten die folgenden Eigenschaften:

- `alwaysOnTop`
  - : `boolean`. Ob das Fenster so eingestellt ist, dass es immer im Vordergrund bleibt.
- `focused`
  - : `boolean`. Ob das Fenster derzeit das fokussierte Fenster ist.
- `height` {{optional_inline}}
  - : `integer`. Die Höhe des Fensters einschließlich des Rahmens in Pixeln.
- `id` {{optional_inline}}
  - : `integer`. Die ID des Fensters. Fenster-IDs sind innerhalb einer Browsersitzung eindeutig.
- `incognito`
  - : `boolean`. Ob das Fenster im Inkognito-Modus (privat) ist.
- `left` {{optional_inline}}
  - : `integer`. Der Versatz des Fensters vom linken Bildschirmrand in Pixeln.
- `sessionId` {{optional_inline}}
  - : `string`. Die Sitzungs-ID, die zur eindeutigen Identifizierung eines Fensters verwendet wird, das von der {{WebExtAPIRef('sessions')}} API abgerufen wurde.
- `state` {{optional_inline}}
  - : Ein {{WebExtAPIRef('windows.WindowState')}}-Wert, der den Zustand dieses Browserfensters beschreibt — maximiert, minimiert usw.
- `tabs` {{optional_inline}}
  - : Array von {{WebExtAPIRef('tabs.Tab')}}-Objekten, die die aktuellen Tabs im Fenster darstellen.
- `title` {{optional_inline}}
  - : Der Titel des Browserfensters. Benötigt die Berechtigung "tabs" oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die URL des aktiven Tabs. Nur Lesezugriff.
- `top` {{optional_inline}}
  - : `integer`. Der Versatz des Fensters vom oberen Bildschirmrand in Pixeln.
- `type` {{optional_inline}}
  - : Ein {{WebExtAPIRef('windows.WindowType')}}-Wert, der den Fenstertyp des Browsers beschreibt — normales Browserfenster, Popup usw.
- `width` {{optional_inline}}
  - : `integer`. Die Breite des Fensters einschließlich des Rahmens in Pixeln.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#type-Window) API von Chromium. Diese Dokumentation stammt von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.

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

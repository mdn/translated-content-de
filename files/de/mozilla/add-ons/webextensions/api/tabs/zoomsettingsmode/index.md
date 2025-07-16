---
title: tabs.ZoomSettingsMode
slug: Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettingsMode
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Definiert, wie Zoomänderungen gehandhabt werden. Erweiterungen können diesen Wert an {{WebExtAPIRef("tabs.setZoomSettings()")}} übergeben, um zu steuern, wie der Browser versucht, die Zoom-Einstellungen für einen Tab zu ändern. Der Standardwert ist "automatic".

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- "automatic"
  - : Zoomänderungen werden vom Browser normal gehandhabt.
- "disabled"
  - : Deaktiviert alle Zoomfunktionen im Tab. Der Tab wird auf die Standard-Zoomstufe zurückgesetzt, und alle versuchten Zoomänderungen werden ignoriert.
- "manual"
  - : Die Erweiterung wird Zoomänderungen selbst verwalten, indem sie auf das {{WebExtAPIRef("tabs.onZoomChange")}} Ereignis hört und die Seite entsprechend skaliert. Dieser Modus unterstützt kein `per-origin`-Zoomen: Er ignoriert die `scope` [Zoom-Einstellung](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettings) und verwendet immer `per-tab`.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-ZoomSettingsMode) API von Chromium. Diese Dokumentation ist von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code abgeleitet.

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

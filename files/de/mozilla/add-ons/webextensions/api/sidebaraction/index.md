---
title: sidebarAction
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft Eigenschaften der Sidebar einer Erweiterung ab und setzt diese.

Eine [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) ist ein Bereich, der auf der linken oder rechten Seite des Browserfensters neben der Webseite angezeigt wird. Der Browser bietet eine Benutzeroberfläche, die es dem Benutzer ermöglicht, die derzeit verfügbaren Sidebars zu sehen und eine Sidebar zur Anzeige auszuwählen. Mithilfe des [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)-Schlüssels in der manifest.json kann eine Erweiterung ihre eigene Sidebar definieren. Mit der hier beschriebenen `sidebarAction`-API kann eine Erweiterung die Eigenschaften der Sidebar abrufen und festlegen.

Die `sidebarAction`-API ist eng an die {{WebExtAPIRef("browserAction")}}-API angelehnt.

Die sidebarAction API basiert auf Operas [sidebarAction API](https://help.opera.com/en/extensions/sidebar-action-api/). Beachten Sie jedoch, dass die folgenden Funktionen noch nicht unterstützt werden: `setBadgeText()`, `getBadgeText()`, `setBadgeBackgroundColor()`, `getBadgeBackgroundColor()`, `onFocus`, `onBlur`.

## Typen

- {{WebExtAPIRef("sidebarAction.ImageDataType")}}
  - : Pixeldaten für ein Bild. Muss ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt sein (zum Beispiel, von einem {{htmlelement("canvas")}}-Element).

## Funktionen

- {{WebExtAPIRef("sidebarAction.close()")}}
  - : Schließt die Sidebar.
- {{WebExtAPIRef("sidebarAction.getPanel()")}}
  - : Ruft das Panel der Sidebar ab.
- {{WebExtAPIRef("sidebarAction.getTitle()")}}
  - : Ruft den Titel der Sidebar ab.
- {{WebExtAPIRef("sidebarAction.isOpen()")}}
  - : Überprüft, ob die Sidebar geöffnet ist oder nicht.
- {{WebExtAPIRef("sidebarAction.open()")}}
  - : Öffnet die Sidebar.
- {{WebExtAPIRef("sidebarAction.setIcon()")}}
  - : Setzt das Icon der Sidebar.
- {{WebExtAPIRef("sidebarAction.setPanel()")}}
  - : Setzt das Panel der Sidebar.
- {{WebExtAPIRef("sidebarAction.setTitle()")}}
  - : Setzt den Titel der Sidebar. Dieser wird in jeder vom Browser bereitgestellten Benutzeroberfläche angezeigt, um Sidebars aufzulisten, wie in einem Menü.
- {{WebExtAPIRef("sidebarAction.toggle()")}}
  - : Schaltet die Sichtbarkeit der Sidebar um.

## Browser-Kompatibilität

{{Compat}}

## Beispiel-Erweiterungen

- [annotate-page](https://github.com/mdn/webextensions-examples/tree/main/annotate-page)

> [!NOTE]
> Diese API basiert auf Operas [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API.

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

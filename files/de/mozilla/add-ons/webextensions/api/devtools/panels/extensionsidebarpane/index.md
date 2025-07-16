---
title: devtools.panels.ExtensionSidebarPane
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Das `ExtensionSidebarPane`-Objekt repräsentiert ein Paneel, das eine Erweiterung der Seitenleiste im HTML/CSS-Inspektor des Browsers hinzugefügt hat.

![neues Paneel mit dem Titel "My pane", das ein JSON-Objekt anzeigt](inspector-sidebar.png)

Um ein `ExtensionSidebarPane` zu erstellen, rufen Sie die Funktion [`browser.devtools.panels.elements.createSidebarPane()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/createSidebarPane) auf.

## Funktionen

- [`devtools.panels.ExtensionSidebarPane.setExpression()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/setExpression)
  - : Evaluieren Sie einen JavaScript-Ausdruck auf der Webseite, die vom Inspektor untersucht wird. Das Ergebnis wird im Seitenleisten-Paneel angezeigt.
- [`devtools.panels.ExtensionSidebarPane.setObject()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/setObject)
  - : Legt ein JSON-Objekt fest, das im Seitenleisten-Paneel angezeigt wird.
- [`devtools.panels.ExtensionSidebarPane.setPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/setPage)
  - : Lädt die Seite, auf die die angegebene URL verweist.

## Ereignisse

- [`devtools.panels.ExtensionSidebarPane.onShown`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/onShown)
  - : Wird ausgelöst, wenn das Seitenleisten-Paneel angezeigt wird.
- [`devtools.panels.ExtensionSidebarPane.onHidden`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/onHidden)
  - : Wird ausgelöst, wenn das Seitenleisten-Paneel verborgen wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API von Chromium.

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

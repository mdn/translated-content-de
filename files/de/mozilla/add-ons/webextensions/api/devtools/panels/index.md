---
title: devtools.panels
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

> [!NOTE]
> Obwohl die APIs auf den [Chrome devtools APIs](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) basieren, gibt es noch viele Funktionen, die in Firefox noch nicht implementiert sind und daher hier nicht dokumentiert sind. Um zu sehen, welche Funktionen derzeit fehlen, lesen Sie bitte [Einschränkungen der devtools APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools#limitations_of_the_devtools_apis).

Die `devtools.panels` API ermöglicht es einer devtools-Erweiterung, ihre Benutzeroberfläche im devtools-Fenster zu definieren.

Das devtools-Fenster beherbergt eine Reihe von separaten Werkzeugen – den JavaScript-Debugger, den Netzwerkmonitor und so weiter. Eine Reihe von Tabs oben ermöglicht es dem Benutzer, zwischen den verschiedenen Werkzeugen zu wechseln. Das Fenster, das die Benutzeroberfläche jedes Werkzeugs beherbergt, wird als "Panel" bezeichnet.

Mit der `devtools.panels` API können Sie neue Panels im devtools-Fenster erstellen.

Wie alle `devtools` APIs ist diese API nur für Code verfügbar, der im Dokument ausgeführt wird, das im Manifest.json-Schlüssel [devtools_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) definiert ist, oder in anderen devtools-Dokumenten, die von der Erweiterung erstellt wurden (wie zum Beispiel das eigene Dokument des Panels). Siehe [Erweiterung der Entwicklerwerkzeuge](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools) für mehr Informationen.

## Typen

- [`devtools.panels.ElementsPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel)
  - : Repräsentiert den HTML/CSS-Inspektor in den devtools des Browsers.
- [`devtools.panels.ExtensionPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel)
  - : Repräsentiert ein von der Erweiterung erstelltes devtools-Panel.
- [`devtools.panels.ExtensionSidebarPane`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane)
  - : Repräsentiert ein Paneel, das eine Erweiterung zum HTML/CSS-Inspektor in den devtools des Browsers hinzugefügt hat.

## Eigenschaften

- [`devtools.panels.elements`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements)
  - : Eine Referenz zu einem [`ElementsPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel) Objekt.
- [`devtools.panels.themeName`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/themeName)
  - : Der Name des aktuellen devtools-Themas.

## Funktionen

- [`devtools.panels.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/create)
  - : Erstellt ein neues devtools-Panel.

## Ereignisse

- [`devtools.panels.onThemeChanged`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/onThemeChanged)
  - : Wird ausgelöst, wenn sich das devtools-Thema ändert.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API.

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

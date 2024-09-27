---
title: devtools.panels
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

> [!NOTE]
> Obwohl die APIs auf den [Chrome devtools APIs](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) basieren, gibt es noch viele Funktionen, die in Firefox noch nicht implementiert sind und daher hier nicht dokumentiert werden. Um zu sehen, welche Funktionen derzeit fehlen, besuchen Sie bitte [Einschränkungen der devtools APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools#limitations_of_the_devtools_apis).

Die `devtools.panels` API ermöglicht es einer Devtools-Erweiterung, ihre Benutzeroberfläche innerhalb des Devtools-Fensters zu definieren.

Das Devtools-Fenster beherbergt eine Reihe von separaten Tools – den JavaScript-Debugger, den Netzwerkmonitor und so weiter. Eine Reihe von Tabs oben ermöglicht es dem Benutzer, zwischen den verschiedenen Tools zu wechseln. Das Fenster, das die Benutzeroberfläche jedes Tools hostet, wird als "Panel" bezeichnet.

Mit der `devtools.panels` API können Sie neue Panels im Devtools-Fenster erstellen.

Wie alle `devtools` APIs ist diese API nur für Code verfügbar, der im Dokument ausgeführt wird, das im [devtools_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) manifest.json-Schlüssel definiert ist, oder in anderen Devtools-Dokumenten, die von der Erweiterung erstellt wurden (wie zum Beispiel das eigene Dokument des Panels). Weitere Informationen finden Sie unter [Erweiterung der Entwicklerwerkzeuge](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools).

## Typen

- [`devtools.panels.ElementsPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel)
  - : Repräsentiert den HTML/CSS-Inspektor in den Devtools des Browsers.
- [`devtools.panels.ExtensionPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel)
  - : Repräsentiert ein von der Erweiterung erstelltes Devtools-Panel.
- [`devtools.panels.ExtensionSidebarPane`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane)
  - : Repräsentiert einen Bereich, den eine Erweiterung dem HTML/CSS-Inspektor in den Devtools des Browsers hinzugefügt hat.

## Eigenschaften

- [`devtools.panels.elements`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements)
  - : Ein Verweis auf ein [`ElementsPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel)-Objekt.
- [`devtools.panels.themeName`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/themeName)
  - : Der Name des aktuellen Devtools-Themas.

## Funktionen

- [`devtools.panels.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/create)
  - : Erstellt ein neues Devtools-Panel.

## Ereignisse

- [`devtools.panels.onThemeChanged`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/onThemeChanged)
  - : Wird ausgelöst, wenn sich das Devtools-Thema ändert.

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

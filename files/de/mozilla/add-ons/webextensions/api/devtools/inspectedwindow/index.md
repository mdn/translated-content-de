---
title: devtools.inspectedWindow
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

> [!NOTE]
> Diese Seite beschreibt die WebExtensions devtools APIs, wie sie in Firefox 54 existieren. Obwohl die APIs auf den [Chrome devtools APIs](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) basieren, gibt es noch viele Funktionen, die in Firefox noch nicht implementiert sind und daher hier nicht dokumentiert werden. Um zu sehen, welche Funktionen derzeit fehlen, siehe [Beschränkungen der devtools APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools#limitations_of_the_devtools_apis).

Die `devtools.inspectedWindow` API ermöglicht es einer devtools-Erweiterung, mit dem Fenster zu interagieren, an das die Entwicklerwerkzeuge angehängt sind.

Wie alle `devtools` APIs ist diese API nur für Code verfügbar, der im Dokument ausgeführt wird, das im manifest.json-Schlüssel [devtools_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) definiert ist, oder in anderen von der Erweiterung erstellten devtools-Dokumenten (wie dem Dokument, das von einem von der Erweiterung erstellten Panel gehostet wird). Weitere Informationen finden Sie unter [Erweitern der Entwicklerwerkzeuge](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools).

## Eigenschaften

- [`devtools.inspectedWindow.tabId`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/tabId)
  - : Die ID des Fensters, an das die Entwicklerwerkzeuge angehängt sind.

## Funktionen

- [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval)
  - : Führt etwas JavaScript im Ziel-Fenster aus.
- [`devtools.inspectedWindow.reload()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/reload)
  - : Lädt das Dokument des Ziel-Fensters neu.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.devtools.inspectedWindow`](https://developer.chrome.com/docs/extensions/reference/api/devtools/inspectedWindow) API.

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

---
title: devtools.inspectedWindow
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow
l10n:
  sourceCommit: 7036af62231b680d0ef5229bb034ce84440ba690
---

> [!NOTE]
> Diese Seite beschreibt die WebExtensions-devtools-APIs, wie sie in Firefox 54 verfügbar sind. Obwohl die APIs auf den [Chrome-devtools-APIs](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) basieren, sind viele Funktionen in Firefox noch nicht implementiert und werden daher hier nicht dokumentiert. Welche Funktionen derzeit fehlen, erfahren Sie unter [Einschränkungen der devtools-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools#limitations_of_the_devtools_apis).

Mit der API `devtools.inspectedWindow` kann eine devtools-Erweiterung mit dem Fenster interagieren, an das die Entwicklertools angehängt sind.

Wie alle `devtools`-APIs ist diese API nur für Code verfügbar, der in dem Dokument ausgeführt wird, das im Schlüssel [devtools_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) der manifest.json definiert ist, oder in anderen devtools-Dokumenten, die von der Erweiterung erstellt wurden (beispielsweise dem Dokument, das in einem von der Erweiterung erstellten Panel angezeigt wird). Weitere Informationen finden Sie unter [Entwicklertools erweitern](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools).

## Typen

- [`devtools.inspectedWindow.Resource`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/Resource)
  - : Eine Ressource innerhalb einer untersuchten Seite, beispielsweise ein Dokument, Skript oder Bild.

## Eigenschaften

- [`devtools.inspectedWindow.tabId`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/tabId)
  - : Die ID des Fensters, an das die Entwicklertools angehängt sind.

## Funktionen

- [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval)
  - : Wertet JavaScript im Zielfenster aus.
- [`devtools.inspectedWindow.getResources()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/getResources)
  - : Ruft die Liste der Ressourcen der untersuchten Seite ab.
- [`devtools.inspectedWindow.reload()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/reload)
  - : Lädt das Dokument des Zielfensters neu.

## Ereignisse

- [`devtools.onResourceAdded`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/onResourceAdded)
  - : Wird ausgelöst, wenn der untersuchten Seite eine Ressource hinzugefügt wird.
- [`devtools.onResourceContentCommitted`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/onResourceContentCommitted)
  - : Wird ausgelöst, wenn eine überarbeitete Version der Ressource übernommen wird (z. B. wenn ein Benutzer eine bearbeitete Version der Ressource in den Entwicklertools speichert).

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.devtools.inspectedWindow`](https://developer.chrome.com/docs/extensions/reference/api/devtools/inspectedWindow) von Chromium.

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

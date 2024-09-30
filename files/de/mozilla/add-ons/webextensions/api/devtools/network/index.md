---
title: devtools.network
slug: Mozilla/Add-ons/WebExtensions/API/devtools/network
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die `devtools.network` API ermöglicht es einer Devtools-Erweiterung, Informationen über Netzwerk-Anfragen zu erhalten, die mit dem Fenster verbunden sind, an das die Devtools angehängt sind (das inspizierte Fenster).

Wie alle `devtools` APIs ist diese API nur für Code verfügbar, der im Dokument ausgeführt wird, das im [devtools_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) manifest.json-Schlüssel definiert ist, oder in anderen Devtools-Dokumenten, die von der Erweiterung erstellt wurden (z. B. das eigene Dokument des Panels). Weitere Informationen finden Sie unter [Erweiterung der Entwicklerwerkzeuge](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools).

## Funktionen

- [`devtools.network.getHAR()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/getHAR)
  - : Holt ein [HAR-Protokoll](http://www.softwareishard.com/blog/har-12-spec/#log) für die im aktuellen Tab geladene Seite.

## Ereignisse

- [`devtools.network.onNavigated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/onNavigated)
  - : Wird ausgelöst, wenn der Benutzer das inspizierte Fenster zu einer neuen Seite navigiert.
- [`devtools.network.onRequestFinished`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/onRequestFinished)
  - : Wird ausgelöst, wenn die Netzwerk-Anfrage abgeschlossen ist und die Details der Erweiterung zur Verfügung stehen.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools.network`](https://developer.chrome.com/docs/extensions/reference/api/devtools/network) API von Chromium.

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

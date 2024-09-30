---
title: devtools
slug: Mozilla/Add-ons/WebExtensions/API/devtools
l10n:
  sourceCommit: 34215030993b429f727a2c73ef06eb029f57beeb
---

{{AddonSidebar}}

Ermöglicht Erweiterungen, mit den [Entwicklerwerkzeugen](/de/docs/Glossary/Developer_Tools) des Browsers zu interagieren. Sie verwenden diese API, um Entwicklerwerkzeug-Seiten zu erstellen, mit dem Fenster zu interagieren, das inspiziert wird, und die Netzwerkverwendung der Seite zu inspizieren.

Um diese API zu verwenden, müssen Sie den Schlüssel [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) im Manifest angeben. Die Verwendung dieses Manifestschlüssels löst [eine Erlaubnismeldung zur Installationszeit über die Entwicklerwerkzeuge](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions#w_extend-developer-tools-to-access-your-data-in-open-tabs) aus. Um eine Erlaubnismeldung zur Installationszeit zu vermeiden, markieren Sie die Funktion als optional, indem Sie die Berechtigung `"devtools"` im Manifest-Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) aufführen.

> [!NOTE]
> Die optionale Berechtigung "devtools" wird nur von Firefox und nicht von Chrome unterstützt ([Chromium issue 1143015](https://crbug.com/1143015)).

## Eigenschaften

- {{WebExtAPIRef("devtools.inspectedWindow")}}
  - : Interaktion mit dem Fenster, an dem die Entwicklerwerkzeuge angehängt sind (inspiziertes Fenster). Dies umfasst das Abrufen der Tab-ID für die inspizierte Seite, die Ausführung von Code im Kontext des inspizierten Fensters, das Neuladen der Seite oder das Abrufen der Liste von Ressourcen innerhalb der Seite.
- {{WebExtAPIRef("devtools.network")}}
  - : Informationen über Netzwerk-Anfragen abrufen, die mit dem Fenster verbunden sind, an dem die Entwicklerwerkzeuge angehängt sind (das inspizierte Fenster).
- {{WebExtAPIRef("devtools.panels")}}
  - : Erstellen von Benutzeroberflächen-Panels, die innerhalb der Nutzeragenten-Entwicklerwerkzeuge angezeigt werden.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools`](https://developer.chrome.com/docs/extensions/mv2/devtools/) API von Chromium.

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

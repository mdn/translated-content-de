---
title: devtools
slug: Mozilla/Add-ons/WebExtensions/API/devtools
l10n:
  sourceCommit: 96eee46848f79914902892ca67e14df7736e11c7
---

Ermöglicht es Erweiterungen, mit den {{Glossary("Developer_Tools", "Entwicklerwerkzeugen")}} des Browsers zu interagieren. Sie verwenden diese API, um Entwicklerwerkzeug-Seiten zu erstellen, mit dem Fenster zu interagieren, das inspiziert wird, und die Seitennetzwerknutzung zu prüfen.

Um diese API zu verwenden, müssen Sie den Manifest-Schlüssel [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) angeben. Die Verwendung dieses Manifest-Schlüssels löst [eine Installationszeit-Berechtigungswarnung über die Entwicklerwerkzeuge aus](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions#w_extend-developer-tools-to-access-your-data-in-open-tabs). Um diese Installationszeit-Berechtigungswarnung zu vermeiden, markieren Sie die Funktion als optional, indem Sie die Berechtigung `"devtools"` im Manifest-Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) auflisten.

> [!NOTE]
> Die optionale Berechtigung "devtools" wird nur von Firefox unterstützt und nicht von Chrome ([Chromium Problem 1143015](https://crbug.com/1143015)).

Der `devtools`-Namensraum ist nur für Seiten verfügbar, die als [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) geladen wurden, und für Erweiterungspanels oder -seitenleisten, die von dieser Seite aus mithilfe von APIs wie {{WebExtAPIRef("devtools.panels.create")}} oder {{WebExtAPIRef("devtools.panels.ElementsPanel.createSidebarPane", "devtools.panels.elements.createSidebarPane")}} erstellt wurden. Andere Erweiterungsseiten, wie Hintergrundseiten oder Aktions-Popups, können nicht auf diesen Namensraum zugreifen.

## Eigenschaften

- {{WebExtAPIRef("devtools.inspectedWindow")}}
  - : Interagieren Sie mit dem Fenster, an das die Entwicklerwerkzeuge angehängt sind (inspiziertes Fenster). Dies umfasst das Abrufen der Tab-ID der inspizierten Seite, das Auswerten von Code im Kontext des inspizierten Fensters, das Neuladen der Seite oder das Abrufen der Liste der Ressourcen innerhalb der Seite.
- {{WebExtAPIRef("devtools.network")}}
  - : Abrufen von Informationen über Netzwerkanforderungen, die mit dem Fenster verbunden sind, an das die Entwicklerwerkzeuge angehängt sind (das inspizierte Fenster).
- {{WebExtAPIRef("devtools.panels")}}
  - : Erstellen Sie Benutzeroberflächen-Panels, die innerhalb der Benutzeragenten-Entwicklerwerkzeuge angezeigt werden.

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

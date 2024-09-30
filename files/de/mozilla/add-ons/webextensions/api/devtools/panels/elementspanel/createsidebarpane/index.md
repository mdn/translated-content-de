---
title: devtools.panels.ElementsPanel.createSidebarPane()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/createSidebarPane
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügt ein neues Fenster zur Seitenleiste im HTML/CSS-Inspektor hinzu.

Der HTML/CSS-Inspektor, der in Firefox [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und in Chrome [Elements panel](https://developer.chrome.com/docs/devtools/css/) genannt wird, zeigt das Seiten-DOM im Hauptteil seines Fensters an und verfügt über eine Seitenleiste, die verschiedene andere Aspekte des HTML/CSS der Seite in einer Registerkartenoberfläche anzeigt. Zum Beispiel kann in Firefox die Seitenleiste die CSS-Regeln für das ausgewählte Element, seine Schriftarten oder sein Boxmodell anzeigen.

Die Funktion `createSidebarPane()` fügt ein neues Fenster zur Seitenleiste hinzu. Zum Beispiel zeigt der untenstehende Screenshot ein neues Fenster mit dem Titel "My pane", das ein JSON-Objekt anzeigt:

![Bild, das ein neues Fenster mit dem Titel "My pane" zeigt, das ein JSON-Objekt anzeigt](inspector-sidebar.png)

Diese Funktion nimmt ein Argument entgegen, welches einen String darstellt, der den Titel des Fensters repräsentiert. Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das zu einem [`ExtensionSidebarPane`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane) Objekt aufgelöst wird, das das neue Fenster repräsentiert. Sie können dieses Objekt verwenden, um den Inhalt und das Verhalten des Fensters zu definieren.

## Syntax

```js-nolint
let creating = browser.devtools.panels.elements.createSidebarPane(
  title       // string
)
```

### Parameter

- `title`
  - : `string`. Der Titel des Fensters. Dieser wird in der Reihe der Registerkarten oben in der Seitenleiste erscheinen und ist der Hauptweg, wie der Benutzer Ihr Fenster identifizieren kann.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem [`ExtensionSidebarPane`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane) Objekt erfüllt wird, welches das neue Fenster repräsentiert.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Erstellen Sie ein neues Fenster und füllen Sie es mit einem JSON-Objekt. Sie könnten diesen Code in einem Skript ausführen, das von der [Entwicklerwerkzeugseite](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) Ihrer Erweiterung geladen wird.

```js
function onCreated(sidebarPane) {
  sidebarPane.setObject({
    someBool: true,
    someString: "hello there",
    someObject: {
      someNumber: 42,
      someOtherString: "this is my pane's content",
    },
  });
}

browser.devtools.panels.elements.createSidebarPane("My pane").then(onCreated);
```

{{WebExtExamples}}

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

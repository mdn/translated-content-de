---
title: devtools.panels.ElementsPanel.createSidebarPane()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/createSidebarPane
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Fügt der Seitenleiste des HTML/CSS-Inspektors einen neuen Bereich hinzu.

Der HTML/CSS-Inspektor, in Firefox [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und in Chrome [Elements-Panel](https://developer.chrome.com/docs/devtools/css/) genannt, zeigt im Hauptbereich seines Fensters das DOM der Seite an. In einer Seitenleiste mit Registerkarten zeigt er verschiedene weitere Aspekte des HTML und CSS der Seite an. In Firefox kann die Seitenleiste beispielsweise die CSS-Regeln, die Schriftarten oder das Boxmodell des ausgewählten Elements anzeigen.

Die Funktion `createSidebarPane()` fügt der Seitenleiste einen neuen Bereich hinzu. Der folgende Screenshot zeigt beispielsweise einen neuen Bereich mit dem Titel „My pane“, in dem ein JSON-Objekt angezeigt wird:

![Ein neuer Bereich mit dem Titel „My pane“, der ein JSON-Objekt im Firefox-Inspektor anzeigt](inspector-sidebar.png)

Diese Funktion nimmt ein Argument entgegen: einen String, der den Titel des Bereichs angibt. Sie gibt eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, die mit einem [`ExtensionSidebarPane`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane)-Objekt erfüllt wird, das den neuen Bereich repräsentiert. Mit diesem Objekt können Sie Inhalt und Verhalten des Bereichs festlegen.

## Syntax

```js-nolint
let creating = browser.devtools.panels.elements.createSidebarPane(
  title       // string
)
```

### Parameter

- `title`
  - : `string`. Der Titel des Bereichs. Er erscheint in der Registerkartenleiste oben in der Seitenleiste und ist die wichtigste Möglichkeit für Benutzer, Ihren Bereich zu erkennen.

### Rückgabewert

Eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), die mit einem [`ExtensionSidebarPane`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane)-Objekt erfüllt wird, das den neuen Bereich repräsentiert.

## Beispiele

Erstellen Sie einen neuen Bereich und füllen Sie ihn mit einem JSON-Objekt. Sie können diesen Code in einem Skript ausführen, das von der [Devtools-Seite](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) Ihrer Erweiterung geladen wird.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels)-API von Chromium.

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

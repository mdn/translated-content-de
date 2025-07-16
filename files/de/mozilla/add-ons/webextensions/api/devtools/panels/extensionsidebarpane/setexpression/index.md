---
title: devtools.panels.ElementsPanel.setExpression()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/setExpression
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Führt einen Ausdruck im Kontext der inspizierten Seite aus und zeigt das Ergebnis im Seitenleistenbereich der Erweiterung an.

Der Ausführungskontext des Ausdrucks ist derselbe wie bei [`inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval).

JSON-Objekte und DOM-Knoten werden als erweiterbarer Baum angezeigt, ähnlich wie im [JSON-Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) in Firefox. Sie können optional eine `rootTitle`-Zeichenfolge angeben: Diese wird als Titel des Baumwurzelknotens angezeigt.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let evaluating = browser.devtools.panels.setExpression(
  expression,       // string
  rootTitle         // string
)
```

### Parameter

- `expression`
  - : `string`. Der Ausdruck, der ausgewertet werden soll.
- `rootTitle` {{optional_inline}}
  - : string. Der Titel des Wurzelknotens des Baumes, in dem die Ergebnisse angezeigt werden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das erfüllt wird, sobald der Ausdruck ausgewertet wurde, ohne Argumente.

## Beispiele

Dieser Code erstellt einen Seitenleistenbereich, der das [`tagName`](/de/docs/Web/API/Element/tagName) des aktuell ausgewählten Elements anzeigt:

```js
function onCreated(sidebarPane) {
  browser.devtools.panels.elements.onSelectionChanged.addListener(() => {
    const exp = "$0 && $0.tagName";
    const title = "Selected Element tagName";
    sidebarPane.setExpression(exp, title);
  });
}

browser.devtools.panels.elements.createSidebarPane("My pane").then(onCreated);
```

{{WebExtExamples}}

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

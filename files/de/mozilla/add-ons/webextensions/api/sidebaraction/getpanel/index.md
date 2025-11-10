---
title: sidebarAction.getPanel()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/getPanel
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ruft eine URL zum HTML-Dokument ab, das den Inhalt der Seitenleiste definiert.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingPanel = browser.sidebarAction.getPanel(
  details               // object
)
```

### Parameter

- `details`
  - : `object`. Ein Objekt mit den folgenden Eigenschaften:
    - `tabId` {{optional_inline}}
      - : `integer`. Ruft das Panel für die spezifische Registerkarte der Seitenleiste ab.
    - `windowId` {{optional_inline}}
      - : `integer`. Ruft das Panel für das spezifische Fenster der Seitenleiste ab.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben werden, schlägt die Funktion fehl und das zurückgegebene Promise wird abgelehnt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird das globale Panel zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem String erfüllt wird, der die URL des Dokuments des Panels enthält. Dies wird eine vollständig qualifizierte URL sein, wie zum Beispiel:

```url
moz-extension://d1d8a2eb-fe60-f646-af30-a866c5b39942/sidebar.html
```

## Beispiele

URL des Panels abrufen:

```js
function onGot(sidebarUrl) {
  console.log(sidebarUrl);
}

let gettingPanel = browser.sidebarAction.getPanel({});
gettingPanel.then(onGot);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API von Opera.

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

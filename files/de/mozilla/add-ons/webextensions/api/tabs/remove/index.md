---
title: tabs.remove()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/remove
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Schließt einen oder mehrere Tabs.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.tabs.remove(
  tabIds          // integer or integer array
)
```

### Parameter

- `tabIds`
  - : `integer` oder `array` von `integer` Die IDs des Tabs oder der Tabs, die geschlossen werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn alle angegebenen Tabs entfernt wurden oder deren `beforeunload`-Eingabeaufforderungen behandelt wurden. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Einen einzelnen Tab schließen:

```js
function onRemoved() {
  console.log(`Removed`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let removing = browser.tabs.remove(2);
removing.then(onRemoved, onError);
```

Mehrere Tabs schließen:

```js
function onRemoved() {
  console.log(`Removed`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let removing = browser.tabs.remove([15, 14, 1]);
removing.then(onRemoved, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-remove) API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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

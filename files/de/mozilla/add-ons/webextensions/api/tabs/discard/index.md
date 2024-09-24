---
title: tabs.discard()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/discard
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Verwirft einen oder mehrere Tabs.

Einige Browser "verwerfen" automatisch ungenutzte Tabs, um Speicherplatz freizugeben. Verworfene Tabs bleiben in der Tab-Leiste sichtbar. Der Browser merkt sich den Zustand des Tabs und stellt ihn wieder her, wenn der Benutzer den Tab auswählt. Die Details, wann Tabs verworfen werden und was verworfen wird, sind browserspezifisch.

Sie können steuern, ob der Browser oder diese API einen Tab verwirft, indem Sie die `autoDiscardable`-Eigenschaft in {{WebExtAPIRef("tabs.update")}} auf `false` setzen. Diese Einstellung verhindert, dass der Browser den Tab verwirft. Der Tab kann dann nur mit dieser API verworfen werden.

Es ist nicht möglich, den aktiven Tab oder einen Tab mit einem [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Listener, der eine Eingabeaufforderung anzeigt, zu verwerfen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let discarding = browser.tabs.discard(
  tabIds          // integer oder Integer-Array
)
```

### Parameter

- `tabIds`
  - : `integer` oder `array` von `integer`. Die IDs des Tabs oder der Tabs, die verworfen werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn alle angegebenen Tabs verworfen wurden. Wenn ein Fehler auftritt (zum Beispiel ungültige Tab-IDs), wird das Promise mit einer Fehlermeldung abgelehnt.

Wenn die ID des aktiven Tabs übergeben wird, wird er nicht verworfen, aber das Promise wird erfüllt und alle anderen übergebenen Tabs werden verworfen.

## Beispiele

Verwerfe einen einzelnen Tab:

```js
function onDiscarded() {
  console.log(`Discarded`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let discarding = browser.tabs.discard(2);
discarding.then(onDiscarded, onError);
```

Verwerfe mehrere Tabs:

```js
function onDiscarded() {
  console.log(`Discarded`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let discarding = browser.tabs.discard([15, 14, 1]);
discarding.then(onDiscarded, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-discard)-API von Chromium.

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

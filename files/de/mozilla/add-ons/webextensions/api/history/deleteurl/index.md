---
title: history.deleteUrl()
slug: Mozilla/Add-ons/WebExtensions/API/history/deleteUrl
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Entfernt alle Besuche der angegebenen URL aus dem Browserverlauf.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let deletingUrl = browser.history.deleteUrl(
  details         // object
)
```

### Parameter

- `details`

  - : `object`. Objekt, das die URL enthält, deren Besuche entfernt werden sollen.

    - `url`
      - : `string`. Die URL, deren Besuche entfernt werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wird ohne Parameter erfüllt, wenn die Besuche entfernt wurden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Entfernen Sie alle Besuche von "https\://example.org/" aus dem Verlauf und überprüfen Sie dann, dass diese URL nicht mehr von {{WebExtAPIRef("history.search()")}} zurückgegeben wird:

```js
let urlToRemove = "https://example.org/";

function onGot(results) {
  if (!results.length) {
    console.log(`${urlToRemove} was removed`);
  } else {
    console.log(`${urlToRemove} was not removed`);
  }
}

function onRemoved() {
  let searching = browser.history.search({
    text: urlToRemove,
    startTime: 0,
  });

  searching.then(onGot);
}

let deletingUrl = browser.history.deleteUrl({ url: urlToRemove });

deletingUrl.then(onRemoved);
```

Entfernen Sie die zuletzt besuchte Seite aus dem Verlauf mit einem Listener für {{WebExtAPIRef("history.onVisitRemoved")}}, um die URL der entfernten Seite zu protokollieren:

```js
function onRemoved(removeInfo) {
  if (removeInfo.urls.length) {
    console.log(`Removed: ${removeInfo.urls[0]}`);
  }
}

browser.history.onVisitRemoved.addListener(onRemoved);

function onGot(results) {
  if (results.length) {
    console.log(`Removing: ${results[0].url}`);
    browser.history.deleteUrl({ url: results[0].url });
  }
}

let searching = browser.history.search({
  text: "",
  startTime: 0,
  maxResults: 1,
});

searching.then(onGot);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-deleteUrl) API von Chromium. Diese Dokumentation stammt aus [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.

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

---
title: bookmarks.removeTree()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/removeTree
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Methode **`bookmarks.removeTree()`** entfernt rekursiv einen Lesezeichen-Ordner und dessen gesamten Inhalt.

> [!WARNING]
> Wenn Ihre Erweiterung versucht, einen Lesezeichenbaum aus dem Wurzelknoten des Lesezeichenbaums zu entfernen, wird der Aufruf mit einer Fehlermeldung abgelehnt: "The bookmark root cannot be modified" und das Lesezeichen wird nicht entfernt.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removingTree = browser.bookmarks.removeTree(
  id                // string
)
```

### Parameter

- `id`
  - : Ein {{jsxref("string")}}, das die ID des Ordnerknotens angibt, der zusammen mit seinen Nachkommen gelöscht werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn der Baum entfernt wurde.

Wenn der Knoten, der dem `id`-Parameter entspricht, nicht gefunden werden kann, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel findet einen Lesezeichen-Ordner namens "MDN" und löscht ihn zusammen mit seinem gesamten Inhalt.

```js
function onRemoved() {
  console.log("bookmark item removed!");
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

function removeMDN(searchResults) {
  if (searchResults.length) {
    let removing = browser.bookmarks.removeTree(searchResults[0].id);
    removing.then(onRemoved, onRejected);
  }
}

let searchingBookmarks = browser.bookmarks.search({ title: "MDN" });
searchingBookmarks.then(removeMDN, onRejected);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-removeTree) API von Chromium. Diese Dokumentation stammt aus [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

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

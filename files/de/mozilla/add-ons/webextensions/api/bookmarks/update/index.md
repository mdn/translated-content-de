---
title: bookmarks.update()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/update
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

**`bookmarks.update()`** aktualisiert den Titel und/oder die URL eines Lesezeichens oder den Namen eines Lesezeichenordners.

> [!WARNING]
> Falls Ihre Erweiterung versucht, ein Lesezeichen im Stammknoten des Lesezeichenbaums zu aktualisieren, wird ein Fehler mit der Meldung "The bookmark root cannot be modified" ausgelöst und das Lesezeichen wird nicht aktualisiert.

Diese Funktion ist asynchron und gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück.

## Syntax

```js-nolint
let updating = browser.bookmarks.update(
  id,                    // string
  changes                // object
)
```

### Parameter

- `id`
  - : Ein {{jsxref("string")}}, das die ID des zu aktualisierenden Lesezeichens oder Lesezeichenordners angibt.
- `changes`

  - : Ein {{jsxref("object")}}, das die anzuwendenden Änderungen spezifiziert. Es kann eine Kombination der folgenden Felder enthalten. Elemente, die nicht angegeben sind, werden im referenzierten Lesezeichen oder Ordner nicht geändert:

    - `title` {{optional_inline}}
      - : Ein {{jsxref("string")}}, das den neuen Titel des Lesezeichens oder den neuen Namen des Ordners enthält, falls `id` sich auf einen Ordner bezieht.
    - `url` {{optional_inline}}
      - : Ein {{jsxref("string")}}, das eine neue URL für das Lesezeichen bereitstellt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem einzigen [`bookmarks.BookmarkTreeNode`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode)-Objekt erfüllt wird, das das aktualisierte Lesezeichen darstellt. Falls das Lesezeichenobjekt, das dem `id`-Parameter entspricht, nicht gefunden werden kann, wird das Promise abgelehnt.

## Beispiele

Dieses Beispiel benennt alle Ordner mit dem Namen "MDN" in "Mozilla Developer Network (MDN)" um.

```js
function onFulfilled(bookmarkItem) {
  console.log(bookmarkItem.title);
}

function onRejected(error) {
  console.error(`Error: ${error}`);
}

function updateFolders(items) {
  for (const item of items) {
    // nur Ordner, also überspringen von Elementen mit einer `url`
    if (!item.url) {
      browser.bookmarks
        .update(item.id, {
          title: "Mozilla Developer Network (MDN)",
        })
        .then(onFulfilled, onRejected);
    }
  }
}

browser.bookmarks.search({ title: "MDN" }).then(updateFolders, onRejected);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-update)-API von Chromium. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

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
---
title: bookmarks.search()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/search
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die Funktion **`bookmarks.search()`** durchsucht Lesezeichen-Baumknoten, die der angegebenen Abfrage entsprechen.

Diese Funktion löst eine Ausnahme aus, wenn einer der Eingabeparameter ungültig ist oder nicht den geeigneten Typ hat; schauen Sie in die [Konsole](https://extensionworkshop.com/documentation/develop/debugging/) für die Fehlermeldung. Die Ausnahmen haben keine Fehler-IDs, und die Nachrichten selbst können sich ändern, daher schreiben Sie keinen Code, der versucht, sie zu interpretieren.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let searching = browser.bookmarks.search(
  query                  // string or object
)
```

### Parameter

- `query`
  - : Ein {{jsxref("string")}} oder {{jsxref("object")}}, das die auszuführende Abfrage beschreibt.

    Wenn `query` ein **string** ist, besteht er aus null oder mehr durch Leerzeichen getrennten Suchbegriffen. Jeder Suchbegriff passt, wenn er eine Teilzeichenkette in der URL oder im Titel des Lesezeichens ist. Die Übereinstimmung ist nicht groß-/kleinschreibungsempfindlich. Ein Lesezeichen muss alle Suchbegriffe der Abfrage erfüllen, um der Abfrage zu entsprechen.

    Wenn `query` ein **object** ist, besteht es aus null oder mehr der 3 Eigenschaften: `query`, `title`, und `url`, die unten beschrieben werden. Ein Lesezeichen muss alle Suchbegriffe der Eigenschaften erfüllen, um der Abfrage zu entsprechen.
    - `query` {{optional_inline}}
      - : Ein {{jsxref("string")}}, das einen oder mehrere Suchbegriffe angibt, gegen die abgeglichen werden soll; das Format ist identisch mit der String-Form des Parameters `query`. Wenn dies kein String ist, wird eine Ausnahme ausgelöst.
    - `url` {{optional_inline}}
      - : Ein {{jsxref("string")}}, das genau mit der URL des Lesezeichens übereinstimmen muss. Die Übereinstimmung ist nicht groß-/kleinschreibungsempfindlich, und nachfolgende Schrägstriche werden ignoriert.

        Wenn Sie eine ungültige URL übergeben, wird die Funktion eine Ausnahme auslösen.

    - `title` {{optional_inline}}
      - : Ein {{jsxref("string")}}, das genau mit dem Titel des Lesezeichen-Baumknotens übereinstimmen muss. Die Übereinstimmung ist groß-/kleinschreibungsempfindlich.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}}-Objekten erfüllt wird, die jeweils einen einzelnen übereinstimmenden Lesezeichen-Baumknoten darstellen. Die Ergebnisse werden in der Reihenfolge zurückgegeben, in der die Knoten erstellt wurden. Das Array ist leer, wenn keine Ergebnisse gefunden wurden.

Die von `bookmarks.search()` zurückgegebenen [`BookmarkTreeNodes`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode)—auch Knoten des Typs `"folder"`—fehlen die Eigenschaft `children`. Um einen vollständigen `BookmarkTreeNode` zu erhalten, verwenden Sie [`bookmarks.getSubTree()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/getSubTree).

## Beispiel

Dieses Beispiel protokolliert die IDs aller Lesezeichen:

```js
function onFulfilled(bookmarkItems) {
  for (const item of bookmarkItems) {
    console.log(item.id);
  }
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

browser.bookmarks.search({}).then(onFulfilled, onRejected);
```

Dieses Beispiel überprüft, ob der aktuell aktive Tab als Lesezeichen gespeichert ist:

```js
function onFulfilled(bookmarkItems) {
  if (bookmarkItems.length) {
    console.log("active tab is bookmarked");
  } else {
    console.log("active tab is not bookmarked");
  }
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

function checkActiveTab(tab) {
  browser.bookmarks.search({ url: tab.url }).then(onFulfilled, onRejected);
}

browser.browserAction.onClicked.addListener(checkActiveTab);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-search) API. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

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

---
title: bookmarks.search()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/search
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

Die Funktion **`bookmarks.search()`** durchsucht Lesezeichenbaumnoten, die der angegebenen Abfrage entsprechen.

Diese Funktion wirft eine Ausnahme, wenn einer der Eingabeparameter ungültig ist oder nicht vom passenden Typ ist; schauen Sie in der [Konsole](https://extensionworkshop.com/documentation/develop/debugging/) nach der Fehlermeldung. Die Ausnahmen haben keine Fehler-IDs und die Nachrichten selbst können sich ändern, daher sollten Sie keinen Code schreiben, der versucht, sie zu interpretieren.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let searching = browser.bookmarks.search(
  query                  // string or object
)
```

### Parameter

- `query`
  - : Ein {{jsxref("String")}} oder {{jsxref("Object")}}, das die durchzuführende Abfrage beschreibt.

    Wenn `query` ein **String** ist, besteht es aus null oder mehr durch Leerzeichen getrennten Suchbegriffen. Jeder Suchbegriff passt, wenn er eine Unterzeichenfolge der URL oder des Titels des Lesezeichens ist. Die Übereinstimmung ist nicht case-sensitiv. Damit ein Lesezeichen der Abfrage entspricht, müssen alle Suchbegriffe der Abfrage übereinstimmen.

    Wenn `query` ein **Objekt** ist, besteht es aus null oder mehr von 3 Eigenschaften: `query`, `title` und `url`, die im Folgenden beschrieben sind. Damit ein Lesezeichen der Abfrage entspricht, müssen alle Begriffe der Eigenschaften übereinstimmen.
    - `query` {{optional_inline}}
      - : Ein {{jsxref("String")}}, das einen oder mehrere abzugleichende Begriffe angibt; das Format ist identisch mit der String-Form des `query` Parameters. Wenn dies kein String ist, wird eine Ausnahme ausgelöst.
    - `url` {{optional_inline}}
      - : Ein {{jsxref("String")}}, das genau der URL des Lesezeichens entsprechen muss. Die Übereinstimmung ist nicht case-sensitiv und abschließende Schrägstriche werden ignoriert.

        Wenn Sie eine ungültige URL übergeben, wird die Funktion eine Ausnahme auslösen.

    - `title` {{optional_inline}}
      - : Ein {{jsxref("String")}}, das genau dem Titel des Lesezeichenbaumnoten entsprechen muss. Die Übereinstimmung ist case-sensitiv.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}}-Objekten erfüllt wird, wobei jedes Objekt einen einzelnen übereinstimmenden Lesezeichenbaumnoten repräsentiert. Die Ergebnisse werden in der Reihenfolge zurückgegeben, in der die Knoten erstellt wurden. Das Array ist leer, wenn keine Ergebnisse gefunden wurden.

Die von `bookmarks.search()` zurückgegebenen [`BookmarkTreeNodes`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) — selbst Knoten vom Typ `"folder"` — fehlen die `children` Eigenschaft. Um einen vollständigen `BookmarkTreeNode` zu erhalten, verwenden Sie [`bookmarks.getSubTree()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/getSubTree).

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

Dieses Beispiel überprüft, ob der derzeit aktive Tab ein Lesezeichen ist:

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
> Diese API basiert auf Chromium's [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-search) API. Diese Dokumentation wird abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium Code.

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

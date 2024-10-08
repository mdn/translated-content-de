---
title: bookmarks.create()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/create
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erstellt ein Lesezeichen oder einen Ordner als Kind des {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} mit der angegebenen `parentId`. Um einen Ordner zu erstellen, lassen Sie den Parameter {{WebExtAPIRef("bookmarks.CreateDetails", "CreateDetails", "url")}} weg oder leer.

> [!WARNING]
> Wenn Ihre Erweiterung versucht, ein neues Lesezeichen im Stammknoten der Lesezeichenstruktur zu erstellen, wird ein Fehler ausgelöst: "_Der Lesezeichen-Stamm kann nicht verändert werden_" und das Lesezeichen wird nicht erstellt.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let createBookmark = browser.bookmarks.create(
  bookmark                  // CreateDetails object
)
```

### Parameter

- `bookmark`
  - : Ein {{WebExtAPIRef("bookmarks.CreateDetails")}}-Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}} erfüllt wird, der den neuen Lesezeichenknoten beschreibt.

> [!NOTE]
> Wenn Sie mehrere Lesezeichen erstellen, da diese API asynchron ist, können die Erstellungsaufrufe in beliebiger Reihenfolge verarbeitet werden. Folglich kann sich der Wert jedes Lesezeichen-Indexes in {{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}} ändern oder unbekannt sein, bis alle Erstellungsaufrufe abgeschlossen sind. Wenn der Index, der einem Lesezeichen zugeordnet ist, für Ihre Erweiterung wichtig ist, dann sollte die Erweiterung beim Erstellen mehrerer Lesezeichen warten, bis jeder `bookmarks.create`-Aufruf abgeschlossen ist, bevor das nächste Lesezeichen erstellt wird. Das Warten stellt sicher, dass der mit jedem Lesezeichen assoziierte Index nicht durch einen gleichzeitig ausgeführten Erstellungsaufruf beeinflusst wird, während der ursprüngliche Aufruf noch in Bearbeitung ist.

## Beispiele

Dieses Beispiel erstellt ein Lesezeichen für diese Seite, das im Standardordner platziert wird ("Andere Lesezeichen" in Firefox und Chrome).

```js
function onCreated(node) {
  console.log(node);
}

let createBookmark = browser.bookmarks.create({
  title: "bookmarks.create() on MDN",
  url: "https://developer.mozilla.org/Add-ons/WebExtensions/API/bookmarks/create",
});

createBookmark.then(onCreated);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-create)-API von Chromium. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

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

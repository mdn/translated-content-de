---
title: bookmarks.getSubTree()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getSubTree
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Methode **`bookmarks.getSubTree()`** ruft asynchron einen {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}} ab, basierend auf seiner ID.

Wenn das Element ein Ordner ist, können Sie über seine `children`-Eigenschaft und die `children`-Eigenschaft seiner Nachfahren, falls diese selbst Ordner sind, rekursiv auf alle seine Nachkommen zugreifen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingSubTree = browser.bookmarks.getSubTree(
  id                     // string
)
```

### Parameter

- `id`
  - : Eine {{jsxref("string")}}, die die ID der Wurzel des abzurufenden Teilbaums angibt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array erfüllt wird, das ein Objekt, ein {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}}-Objekt, enthält, welches das Element mit der angegebenen ID repräsentiert.

Wenn ein Knoten, der `id` entspricht, nicht gefunden werden konnte, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel gibt rekursiv den Teilbaum unter einem bestimmten Knoten aus:

```js
function makeIndent(indentLength) {
  return ".".repeat(indentLength);
}

function logItems(bookmarkItem, indent) {
  if (bookmarkItem.url) {
    console.log(makeIndent(indent) + bookmarkItem.url);
  } else {
    console.log(`${makeIndent(indent)}Folder: ${bookmarkItem.id}`);
    indent++;
  }
  if (bookmarkItem.children) {
    for (const child of bookmarkItem.children) {
      logItems(child, indent);
    }
  }
}

function logSubTree(bookmarkItems) {
  logItems(bookmarkItems[0], 0);
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

let subTreeID = "root_____";

browser.bookmarks.getSubTree(subTreeID).then(logSubTree, onRejected);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-getSubTree) API von Chromium. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

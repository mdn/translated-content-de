---
title: bookmarks.getRecent()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getRecent
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Methode `bookmarks.getRecent()` ruft eine angegebene Anzahl der zuletzt hinzugefügten Lesezeichen als ein Array von {{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}}-Objekten ab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingRecent = browser.bookmarks.getRecent(
  numberOfItems          // integer
)
```

### Parameter

- `numberOfItems`
  - : Eine Zahl, die die maximale Anzahl der zurückzugebenden Elemente darstellt. Die zurückgegebene Liste enthält bis zu dieser Anzahl der zuletzt hinzugefügten Elemente. Der minimal erlaubte Wert hier ist 1. Wenn Sie 0 oder weniger übergeben, wird die Funktion einen Fehler auslösen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von [`BookmarkTreeNode`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode)-Objekten erfüllt wird.

## Beispiele

Dieses Beispiel protokolliert die URL des zuletzt hinzugefügten Lesezeichens:

```js
function onFulfilled(bookmarks) {
  for (const bookmark of bookmarks) {
    console.log(bookmark.url);
  }
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

browser.bookmarks.getRecent(1).then(onFulfilled, onRejected);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-getRecent) API von Chromium. Diese Dokumentation stammt aus [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

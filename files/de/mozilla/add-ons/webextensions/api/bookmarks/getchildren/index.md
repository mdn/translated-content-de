---
title: bookmarks.getChildren()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getChildren
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

**`bookmarks.getChildren()`** ruft alle unmittelbaren Kinder eines Lesezeichenordners ab, der durch eine {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} ID identifiziert wird.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingChildren = browser.bookmarks.getChildren(
  id                     // string
)
```

### Parameter

- `id`
  - : Ein {{jsxref("string")}}, das die ID des Ordners angibt, dessen Kinder abgerufen werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von [`BookmarkTreeNode`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) Objekten erfüllt wird. Jeder Eintrag repräsentiert einen Kindknoten. Die Liste ist in der gleichen Reihenfolge, wie die Lesezeichen in der Benutzeroberfläche erscheinen. Trennzeichen sind in den Ergebnissen enthalten. Die Liste umfasst Unterordner, jedoch keine Kinder, die in Unterordnern enthalten sind.

Wenn der angegebene Knoten keine Kinder hat, ist das Array leer.

Wenn der durch `id` identifizierte Knoten nicht gefunden wird, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

```js
function onFulfilled(children) {
  for (child of children) {
    console.log(child.id);
  }
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

let gettingChildren = browser.bookmarks.getChildren("unfiled_____");
gettingChildren.then(onFulfilled, onRejected);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-getChildren) API. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

---
title: bookmarks.search()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/search
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Die Funktion **`bookmarks.search()`** durchsucht die Lesezeichen-Baumknoten nach der Übereinstimmung mit der angegebenen Abfrage.

Diese Funktion löst eine Ausnahme aus, wenn einer der Eingabeparameter ungültig ist oder nicht den geeigneten Typ hat; schauen Sie in der [Konsole](https://extensionworkshop.com/documentation/develop/debugging/) nach der Fehlermeldung. Die Ausnahmen haben keine Fehler-IDs und die Nachrichten selbst können sich ändern, also schreiben Sie keinen Code, der versucht, sie zu interpretieren.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let searching = browser.bookmarks.search(
  query                  // string or object
)
```

### Parameter

- `query`

  - : Ein {{jsxref("string")}} oder {{jsxref("object")}}, das die durchzuführende Abfrage beschreibt.

    Wenn `query` ein **string** ist, besteht es aus null oder mehr durch Leerzeichen getrennte Suchbegriffe. Jeder Suchbegriff stimmt überein, wenn er ein Substring in der URL oder dem Titel des Lesezeichens ist. Die Übereinstimmung ist nicht case-sensitiv. Damit ein Lesezeichen der Abfrage entspricht, müssen alle Suchbegriffe der Abfrage übereinstimmen.

    Wenn `query` ein **object** ist, besteht es aus null oder mehr der 3 Eigenschaften: `query`, `title` und `url`, die unten beschrieben sind. Damit ein Lesezeichen der Abfrage entspricht, müssen alle Begriffe der Eigenschaften übereinstimmen.

    - `query` {{optional_inline}}
      - : Ein {{jsxref("string")}}, das ein oder mehrere Begriffe angibt, die abgeglichen werden sollen; das Format ist identisch mit der String-Form des `query`-Parameters. Wenn dies kein String ist, wird eine Ausnahme ausgelöst.
    - `url` {{optional_inline}}

      - : Ein {{jsxref("string")}}, das genau mit der URL des Lesezeichens übereinstimmen muss. Die Übereinstimmung ist nicht case-sensitiv, und abschließende Schrägstriche werden ignoriert.

        Wenn Sie eine ungültige URL übergeben, wird die Funktion eine Ausnahme auslösen.

    - `title` {{optional_inline}}
      - : Ein {{jsxref("string")}}, das genau mit dem Titel des Lesezeichen-Baumknotens übereinstimmen muss. Die Übereinstimmung ist case-sensitiv.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}}-Objekten erfüllt wird, wobei jedes Objekt einen einzelnen übereinstimmenden Lesezeichen-Baumknoten darstellt. Die Ergebnisse werden in der Reihenfolge zurückgegeben, in der die Knoten erstellt wurden. Das Array ist leer, wenn keine Ergebnisse gefunden wurden.

Die von `bookmarks.search()` zurückgegebenen [`BookmarkTreeNodes`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) – selbst Knoten des Typs `"folder"` – fehlen die `children`-Eigenschaft. Um einen vollständigen `BookmarkTreeNode` zu erhalten, verwenden Sie [`bookmarks.getSubTree()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/getSubTree).

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

Dieses Beispiel prüft, ob der aktuell aktive Tab ein Lesezeichen ist:

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

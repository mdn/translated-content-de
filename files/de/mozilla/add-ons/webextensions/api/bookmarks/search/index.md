---
title: bookmarks.search()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/search
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Funktion **`bookmarks.search()`** durchsucht Lesezeichenelemente, die der angegebenen Abfrage entsprechen.

Diese Funktion löst eine Ausnahme aus, wenn einer der Eingabeparameter ungültig ist oder nicht den entsprechenden Typ hat; suchen Sie im [Konsolenausgabe](https://extensionworkshop.com/documentation/develop/debugging/) nach der Fehlermeldung. Die Ausnahmen haben keine Fehler-IDs, und die Nachrichten selbst können sich ändern; schreiben Sie daher keinen Code, der versucht, sie zu interpretieren.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let searching = browser.bookmarks.search(
  query                  // string or object
)
```

### Parameter

- `query`

  - : Ein {{jsxref("string")}} oder {{jsxref("object")}}, der die auszuführende Abfrage beschreibt.

    Wenn `query` ein **string** ist, besteht er aus null oder mehr durch Leerzeichen getrennten Suchbegriffen. Jeder Suchbegriff stimmt überein, wenn es sich um eine Teilzeichenkette in der URL oder dem Titel des Lesezeichens handelt. Die Übereinstimmung erfolgt ohne Berücksichtigung der Groß-/Kleinschreibung. Damit ein Lesezeichen mit der Abfrage übereinstimmt, müssen alle Suchbegriffe der Abfrage erfüllt sein.

    Wenn `query` ein **object** ist, besteht es aus null oder mehr der 3 Eigenschaften: `query`, `title` und `url`, die unten beschrieben sind. Damit ein Lesezeichen mit der Abfrage übereinstimmt, müssen alle Begriffe der Eigenschaften erfüllt sein.

    - `query` {{optional_inline}}
      - : Ein {{jsxref("string")}}, der einen oder mehrere Begriffe zum Abgleich angibt; das Format ist identisch mit der string-Form des `query`-Parameters. Wenn dies kein string ist, wird eine Ausnahme ausgelöst.
    - `url` {{optional_inline}}

      - : Ein {{jsxref("string")}}, der genau mit der URL des Lesezeichens übereinstimmen muss. Die Übereinstimmung erfolgt ohne Berücksichtigung der Groß-/Kleinschreibung, und abschließende Schrägstriche werden ignoriert.

        Wenn Sie eine ungültige URL übergeben, wird die Funktion eine Ausnahme auslösen.

    - `title` {{optional_inline}}
      - : Ein {{jsxref("string")}}, der genau mit dem Titel des Lesezeichenelements übereinstimmen muss. Die Übereinstimmung erfolgt mit Berücksichtigung der Groß-/Kleinschreibung.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} Objekten erfüllt wird, die jeweils ein einzelnes übereinstimmendes Lesezeichenelement darstellen. Die Ergebnisse werden in der Reihenfolge zurückgegeben, in der die Knoten erstellt wurden. Das Array ist leer, wenn keine Ergebnisse gefunden wurden.

Die [`BookmarkTreeNodes`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) — selbst Knoten vom Typ `"folder"` — die von `bookmarks.search()` zurückgegeben werden, fehlen die `children`-Eigenschaft. Um ein vollständiges `BookmarkTreeNode` zu erhalten, verwenden Sie [`bookmarks.getSubTree()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/getSubTree).

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

Dieses Beispiel überprüft, ob der aktuell aktive Tab ein Lesezeichen ist:

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
> Diese API basiert auf Chromium's [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-search) API. Diese Dokumentation stammt von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

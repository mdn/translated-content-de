---
title: bookmarks.update()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/update
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

**`bookmarks.update()`** aktualisiert den Titel und/oder die URL eines Lesezeichens oder den Namen eines Lesezeichenordners.

> [!WARNING]
> Wenn Ihre Erweiterung versucht, ein Lesezeichen im Wurzelknoten des Lesezeichenbaums zu aktualisieren, wird ein Fehler mit der Meldung "The bookmark root cannot be modified" ausgelöst und das Lesezeichen wird nicht aktualisiert.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let updating = browser.bookmarks.update(
  id,                    // string
  changes                // object
)
```

### Parameter

- `id`
  - : Eine {{jsxref("string")}}, die die ID des zu aktualisierenden Lesezeichens oder Lesezeichenordners angibt.
- `changes`
  - : Ein {{jsxref("object")}}, der die anzuwendenden Änderungen angibt, wobei eine Kombination der folgenden Felder verwendet wird. Alle nicht angegebenen Elemente werden in dem referenzierten Lesezeichen oder Ordner nicht geändert:
    - `title` {{optional_inline}}
      - : Eine {{jsxref("string")}}, die den neuen Titel des Lesezeichens enthält oder den neuen Namen des Ordners, wenn `id` sich auf einen Ordner bezieht.
    - `url` {{optional_inline}}
      - : Eine {{jsxref("string")}}, die eine neue URL für das Lesezeichen bereitstellt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem einzelnen [`bookmarks.BookmarkTreeNode`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode)-Objekt erfüllt wird, das das aktualisierte Lesezeichen repräsentiert. Wenn das Lesezeichenelement, das dem `id`-Parameter entspricht, nicht gefunden werden kann, wird das Promise abgelehnt.

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
    // only folders, so skip items with a `url`
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
> Diese API basiert auf Chromiums [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-update) API. Diese Dokumentation stammt aus [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

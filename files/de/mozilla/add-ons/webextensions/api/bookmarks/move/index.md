---
title: bookmarks.move()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/move
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Die Methode **`bookmarks.move()`** verschiebt den angegebenen {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} zum angegebenen Ziel im Lesezeichentree. Dies ermöglicht es Ihnen, ein Lesezeichen in einen neuen Ordner und/oder an eine neue Position innerhalb des Ordners zu verschieben.

> [!WARNING]
> Wenn Ihre Erweiterung versucht, ein Lesezeichen in das Stammverzeichnis des Lesezeichentrees zu verschieben, wird ein Fehler mit der Nachricht "_The bookmark root cannot be modified_" ausgelöst und die Verschiebung wird nicht abgeschlossen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let movingBookmark = browser.bookmarks.move(
  id,                    // string
  destination           // object
)
```

### Parameter

- `id`
  - : Ein {{jsxref("string")}}, das die ID des Lesezeichens oder Ordners enthält, der verschoben werden soll.
- `destination`
  - : Ein {{jsxref("object")}}, das das Ziel für das Lesezeichen angibt. Dieses Objekt muss eines oder beide der folgenden Felder enthalten:
    - `parentId` {{optional_inline}}
      - : Ein {{jsxref("string")}}, das die ID des Zielordners angibt. Wird dieser Wert weggelassen, wird das Lesezeichen an eine neue Position innerhalb seines aktuellen Ordners verschoben.
    - `index` {{optional_inline}}
      - : Ein 0-basierter Index, der die Position innerhalb des Ordners angibt, zu der das Lesezeichen verschoben werden soll. Ein Wert von 0 verschiebt das Lesezeichen an den Anfang des Ordners. Wenn dieser Wert weggelassen wird, wird das Lesezeichen am Ende des neuen übergeordneten Ordners platziert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem einzelnen [`bookmarks.BookmarkTreeNode`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode)-Objekt erfüllt wird, das den verschobenen Knoten beschreibt.

Falls der Knoten, der dem `id`-Parameter entspricht, nicht gefunden werden kann, wird das Promise mit einer Fehlermeldung abgelehnt.

> [!NOTE]
> Wenn Sie mehrere Lesezeichen verschieben, können aufgrund der Asynchronität dieser API die Aufrufe in beliebiger Reihenfolge verarbeitet werden. Folglich kann sich der Wert des Indexes jedes Lesezeichens, das in {{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}} zurückgegeben wird, ändern oder unbekannt sein, bis alle Verschiebeaufrufe abgeschlossen sind. Wenn der Index, der einem Lesezeichen zugeordnet ist, für Ihre Erweiterung wichtig ist, sollte die Erweiterung beim Verschieben mehrerer Lesezeichen auf den Abschluss jedes `bookmarks.move`-Aufrufs warten, bevor das nächste Lesezeichen verschoben wird. Das Warten stellt sicher, dass der Index, der jedem Lesezeichen zugeordnet ist, nicht von einem gleichzeitig ausgeführten Verschiebeaufruf beeinflusst wird.

## Beispiele

Dieses Beispiel verschiebt ein Lesezeichen, sodass es das erste Lesezeichen in seinem aktuellen Ordner ist.

```js
function onMoved(bookmarkItem) {
  console.log(bookmarkItem.index);
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

let bookmarkId = "abcdefghijkl";

let movingBookmark = browser.bookmarks.move(bookmarkId, { index: 0 });
movingBookmark.then(onMoved, onRejected);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-move) API. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

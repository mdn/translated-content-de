---
title: bookmarks.create()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/create
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erstellt ein Lesezeichen oder einen Ordner als untergeordnetes Element des angegebenen {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} mit der `parentId`. Um einen Ordner zu erstellen, lassen Sie den Parameter {{WebExtAPIRef("bookmarks.CreateDetails", "CreateDetails", "url")}} weg oder leer.

> [!WARNING]
> Wenn Ihre Erweiterung versucht, ein neues Lesezeichen im Stammknoten des Lesezeichensbaums zu erstellen, wird ein Fehler ausgelöst: "_The bookmark root cannot be modified_" und das Lesezeichen wird nicht erstellt.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let createBookmark = browser.bookmarks.create(
  bookmark                  // CreateDetails object
)
```

### Parameter

- `bookmark`
  - : Ein {{WebExtAPIRef("bookmarks.CreateDetails")}} Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}} erfüllt wird, der den neuen Lesezeichenknoten beschreibt.

> [!NOTE]
> Wenn Sie mehrere Lesezeichen erstellen, da diese API asynchron ist, können die Erstellen-Aufrufe in beliebiger Reihenfolge verarbeitet werden. Folglich kann sich der Wert des Indexes jedes Lesezeichens, der in {{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}} zurückgegeben wird, ändern oder unbekannt sein, bis alle Erstellen-Aufrufe abgeschlossen sind. Wenn der Index, der mit einem Lesezeichen verknüpft ist, für Ihre Erweiterung wichtig ist, sollte die Erweiterung – beim Erstellen mehrerer Lesezeichen – darauf warten, dass jeder `bookmarks.create` Aufruf abgeschlossen ist, bevor das nächste Lesezeichen erstellt wird. Durch das Warten wird sichergestellt, dass der Index, der mit jedem Lesezeichen verknüpft ist, nicht beeinflusst wird, falls ein Erstellen-Aufruf gleichzeitig ausgeführt wird, während der ursprüngliche Aufruf noch in Bearbeitung ist.

## Beispiele

Dieses Beispiel erstellt ein Lesezeichen für diese Seite und platziert es im Standardordner ("Weitere Lesezeichen" in Firefox und Chrome).

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
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-create) API von Chromium. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

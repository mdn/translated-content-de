---
title: bookmarks.onChildrenReordered
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onChildrenReordered
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn sich die Reihenfolge der Kinder eines Ordners geändert hat, weil die Anordnung in der Benutzeroberfläche sortiert wurde. Dies wird nicht als Ergebnis eines Aufrufs von {{WebExtAPIRef("bookmarks.move()")}} oder einer Ziehoperation in der Benutzeroberfläche aufgerufen.

## Syntax

```js-nolint
browser.bookmarks.onChildrenReordered.addListener(listener)
browser.bookmarks.onChildrenReordered.removeListener(listener)
browser.bookmarks.onChildrenReordered.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es aktiv ist, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `id`
      - : `string`. ID des Ordners, dessen Kinder neu angeordnet wurden.
    - `reorderInfo`
      - : `object`. Objekt mit zusätzlichen Objekten. Weitere Details siehe [reorderInfo](#reorderinfo_2)-Abschnitt.

## Zusätzliche Objekte

### reorderInfo

- `childIds`
  - : `array` von `string`. Array, das die IDs aller Lesezeichen-Elemente in diesem Ordner in der Reihenfolge enthält, in der sie jetzt in der Benutzeroberfläche erscheinen.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function handleChildrenReordered(id, reorderInfo) {
  console.log(`Item: ${id} children reordered`);
  console.log(`Children: ${reorderInfo.childIds}`);
}

function handleClick() {
  browser.bookmarks.onChildrenReordered.addListener(handleChildrenReordered);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#event-onChildrenReordered)-API von Chromium. Diese Dokumentation leitet sich von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code ab.

---
title: bookmarks.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onRemoved
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Lesezeichen oder Ordner entfernt wird. Wenn ein Ordner rekursiv entfernt wird, wird eine einzelne Benachrichtigung für den Ordner ausgelöst und keine für dessen Inhalte.

## Syntax

```js-nolint
browser.bookmarks.onRemoved.addListener(listener)
browser.bookmarks.onRemoved.removeListener(listener)
browser.bookmarks.onRemoved.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, `false` andernfalls.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `id`
      - : `string`. ID des Elements, das entfernt wurde.
    - `removeInfo`
      - : `object`. Weitere Details über das entfernte Element. Siehe den Abschnitt [removeInfo](#removeinfo_2) für mehr Details.

## Zusätzliche Objekte

### removeInfo

- `parentId`
  - : `string`. ID des übergeordneten Elements im Baum.
- `index`
  - : `integer`. Null-basierter Index der Position dieses Elements im übergeordneten Element.
- `node`
  - : {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}}. Detaillierte Informationen über das entfernte Element.

## Beispiele

```js
function handleRemoved(id, removeInfo) {
  console.log(`Item: ${id} removed`);
  console.log(`Title: ${removeInfo.node.title}`);
  console.log(`Url: ${removeInfo.node.url}`);
}

function handleClick() {
  browser.bookmarks.onRemoved.addListener(handleRemoved);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#event-onRemoved) API von Chromium. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

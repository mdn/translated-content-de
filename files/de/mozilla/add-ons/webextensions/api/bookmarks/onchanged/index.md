---
title: bookmarks.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dieses Event wird ausgelöst, wenn es eine Änderung gibt an:

- dem Titel oder der URL eines Lesezeichens
- dem Namen eines Ordners.

## Syntax

```js-nolint
browser.bookmarks.onChanged.addListener(listener)
browser.bookmarks.onChanged.removeListener(listener)
browser.bookmarks.onChanged.hasListener(listener)
```

Events haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Event einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Event. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Event registriert ist. Gibt `true` zurück, wenn gelauscht wird, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Event auftritt. Der Funktion werden diese Argumente übergeben:

    - `id`
      - : `string`. ID des Elements, das geändert wurde.
    - `changeInfo`
      - : [`object`](#changeinfo). Objekt, das zwei Eigenschaften enthält: `title`, ein String mit dem Titel des Elements, und `url`, ein String mit der URL des Elements. Wenn das Element ein Ordner ist, wird `url` weggelassen.

> [!NOTE]
> Mehrere Ereignisse können auftreten, wenn ein Lesezeichen geändert wird, und das changeInfo-Objekt kann nur die Daten enthalten, die sich geändert haben, anstatt alle Daten für das Lesezeichen. Mit anderen Worten, wenn sich die `url` eines Lesezeichens ändert, kann die changeInfo nur die neuen `url`-Informationen enthalten.

## Beispiele

```js
function handleChanged(id, changeInfo) {
  console.log(`Item: ${id} changed`);
  console.log(`Title: ${changeInfo.title}`);
  console.log(`Url: ${changeInfo.url}`);
}

function handleClick() {
  browser.bookmarks.onChanged.addListener(handleChanged);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#event-onChanged) API. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

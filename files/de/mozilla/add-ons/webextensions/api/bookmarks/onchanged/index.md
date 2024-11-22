---
title: bookmarks.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{AddonSidebar}}

Ausgelöst, wenn es eine Änderung gibt bei:

- dem Titel oder URL eines Lesezeichens
- dem Namen eines Ordners.

## Syntax

```js-nolint
browser.bookmarks.onChanged.addListener(listener)
browser.bookmarks.onChanged.removeListener(listener)
browser.bookmarks.onChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `id`
      - : `string`. ID des Elements, das sich geändert hat.
    - `changeInfo`
      - : [`object`](#changeinfo). Objekt, das zwei Eigenschaften enthält: `title`, ein String, der den Titel des Elements enthält, und `url`, ein String, der die URL des Elements enthält. Wenn das Element ein Ordner ist, wird `url` weggelassen.

> [!NOTE]
> Mehrere Ereignisse können auftreten, wenn sich ein Lesezeichen ändert, und das `changeInfo`-Objekt kann nur die Daten enthalten, die sich geändert haben, anstatt alle Daten für das Lesezeichen. Mit anderen Worten, wenn sich die `url` eines Lesezeichens ändert, kann das `changeInfo` nur die neue `url`-Information enthalten.

## Beispiele

```js
function handleChanged(id, changeInfo) {
  console.log(`Item: ${id} changed`);
  console.log(`Title: ${changeInfo.title}`);
  console.log(`URL: ${changeInfo.url}`);
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
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#event-onChanged) API von Chromium. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

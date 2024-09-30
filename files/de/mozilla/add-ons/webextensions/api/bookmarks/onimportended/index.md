---
title: bookmarks.onImportEnded
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onImportEnded
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Browser das Importieren eines Satzes von Lesezeichen abgeschlossen hat.

Siehe {{WebExtAPIRef("bookmarks.onImportBegan")}}.

## Syntax

```js-nolint
browser.bookmarks.onImportEnded.addListener(listener)
browser.bookmarks.onImportEnded.removeListener(listener)
browser.bookmarks.onImportEnded.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Es werden keine Parameter übergeben.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function handleImportBegan() {
  console.log("Importing…");
}

function handleImportEnded() {
  console.log("Import finished.");
}

function handleClick() {
  browser.bookmarks.onImportBegan.addListener(handleImportBegan);
  browser.bookmarks.onImportEnded.addListener(handleImportEnded);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#event-onImportEnded). Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

---
title: bookmarks.onImportBegan
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onImportBegan
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ausgelöst, wenn der Browser mit dem Importieren eines Satzes von Lesezeichen begonnen hat.

Während ein Satz von Lesezeichen importiert wird, kann {{WebExtAPIRef("bookmarks.onCreated", "onCreated")}} sehr oft ausgelöst werden. Wenn Ihre Erweiterung auf `onCreated` lauscht und der Listener ressourcenintensiv ist, sollten Sie auch auf `onImportBegan` und {{WebExtAPIRef("bookmarks.onImportEnded", "onImportEnded")}} hören. Wenn Sie `onImportBegan` empfangen, ignorieren Sie `onCreated` bis Sie `onImportEnded` empfangen. Alle anderen Benachrichtigungen können Sie wie gewohnt verarbeiten.

## Syntax

```js-nolint
browser.bookmarks.onImportBegan.addListener(listener)
browser.bookmarks.onImportBegan.removeListener(listener)
browser.bookmarks.onImportBegan.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er lauscht, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Es werden keine Parameter übergeben.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#event-onImportBegan) API. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

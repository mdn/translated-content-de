---
title: history.deleteAll()
slug: Mozilla/Add-ons/WebExtensions/API/history/deleteAll
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Löscht alle Besuche aus dem Verlauf des Browsers.

Diese Funktion löst {{WebExtAPIRef("history.onVisitRemoved")}} nur einmal aus, mit `allHistory` auf `true` gesetzt und einem leeren `urls`-Argument.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let deletingAll = browser.history.deleteAll()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wird ohne Parameter erfüllt, wenn der gesamte Verlauf gelöscht wurde.

## Kompatibilität mit Browsern

{{Compat}}

## Beispiele

Löschen Sie den gesamten Verlauf, wenn der Benutzer auf eine Browser-Aktion klickt:

```js
function onDeleteAll() {
  console.log("Deleted all history");
}

function deleteAllHistory() {
  let deletingAll = browser.history.deleteAll();
  deletingAll.then(onDeleteAll);
}

deleteAllHistory();
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-deleteAll) API von Chromium. Diese Dokumentation ist aus [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code abgeleitet.

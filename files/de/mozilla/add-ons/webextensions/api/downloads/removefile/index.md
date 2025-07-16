---
title: downloads.removeFile()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/removeFile
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Die Funktion **`removeFile()`** der {{WebExtAPIRef("downloads")}} API entfernt eine heruntergeladene Datei von der Festplatte.

Diese API entfernt die Datei von der Festplatte, löscht sie jedoch nicht aus dem Download-Verlauf des Browsers. Ein Aufruf von {{WebExtAPIRef("downloads.search()")}} wird daher das Element weiterhin als {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} zurückgeben, aber das Attribut `exists` wird `false` sein.

Um eine Datei aus dem Download-Verlauf zu entfernen, müssen Sie {{WebExtAPIRef("downloads.erase()")}} verwenden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

> [!NOTE]
> Wenn Sie eine heruntergeladene Datei von der Festplatte _und_ aus dem Verlauf löschen möchten, müssen Sie `removeFile()` aufrufen, bevor Sie {{WebExtAPIRef("downloads.erase()")}} aufrufen. Wenn Sie es andersherum versuchen, erhalten Sie einen Fehler beim Aufruf von `removeFile()`, da der Browser keinen Eintrag des Downloads mehr hat.

## Syntax

```js-nolint
let removing = browser.downloads.removeFile(
  downloadId      // integer
)
```

### Parameter

- `downloadId`
  - : Ein `integer`, der die ID des {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} darstellt, das Sie von der Festplatte löschen möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich war, wird das Promise ohne Argumente erfüllt. Wenn die Anfrage fehlgeschlagen ist, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Die zuletzt heruntergeladene Datei entfernen:

```js
function onRemoved() {
  console.log(`Removed item`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function remove(downloadItems) {
  if (downloadItems.length > 0) {
    let removing = browser.downloads.removeFile(downloadItems[0].id);
    removing.then(onRemoved, onError);
  }
}

let searching = browser.downloads.search({
  limit: 1,
  orderBy: ["-startTime"],
});

searching.then(remove, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-removeFile) API von Chromium.

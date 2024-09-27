---
title: downloads.removeFile()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/removeFile
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die **`removeFile()`**-Funktion der {{WebExtAPIRef("downloads")}} API entfernt eine heruntergeladene Datei von der Festplatte.

Diese API entfernt die Datei von der Festplatte, aber nicht aus dem Download-Verlauf des Browsers. Ein Aufruf von {{WebExtAPIRef("downloads.search()")}} wird das Element daher weiterhin als {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} zurückgeben, jedoch wird das Attribut `exists` den Wert `false` haben.

Um eine Datei aus dem Download-Verlauf zu entfernen, müssen Sie {{WebExtAPIRef("downloads.erase()")}} verwenden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

> [!NOTE]
> Wenn Sie eine heruntergeladene Datei von der Festplatte entfernen _und_ aus dem Verlauf löschen möchten, müssen Sie `removeFile()` vor dem Aufruf von {{WebExtAPIRef("downloads.erase()")}} aufrufen. Wenn Sie es andersherum versuchen, erhalten Sie einen Fehler beim Aufruf von `removeFile()`, da der Browser keinen Eintrag mehr für den Download hat.

## Syntax

```js-nolint
let removing = browser.downloads.removeFile(
  downloadId      // integer
)
```

### Parameter

- `downloadId`
  - : Eine `integer`, die die ID des {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} darstellt, das Sie von der Festplatte löschen möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich war, wird das Promise ohne Argumente erfüllt. Wenn die Anfrage fehlschlug, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Löschen Sie die zuletzt heruntergeladene Datei:

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

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-removeFile) API von Chromium.

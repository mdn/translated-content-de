---
title: downloads.erase()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/erase
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die Funktion **`erase()`** der {{WebExtAPIRef("downloads")}} API entfernt passende {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} aus dem Download-Verlauf des Browsers, ohne die heruntergeladenen Dateien von der Festplatte zu löschen.

Um die Dateien von der Festplatte zu entfernen, müssen Sie {{WebExtAPIRef("downloads.removeFile()")}} verwenden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

> [!NOTE]
> Wenn Sie eine heruntergeladene Datei von der Festplatte entfernen _und_ aus dem Verlauf löschen möchten, müssen Sie {{WebExtAPIRef("downloads.removeFile()")}} aufrufen, bevor Sie `erase()` aufrufen. Wenn Sie es andersherum versuchen, erhalten Sie einen Fehler beim Aufruf von {{WebExtAPIRef("downloads.removeFile()")}}, da es laut dem Browser nicht mehr existiert.

## Syntax

```js-nolint
let erasing = browser.downloads.erase(
  query                    // DownloadQuery
)
```

### Parameter

- `query`
  - : Ein {{WebExtAPIRef('downloads.DownloadQuery')}} Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn der Aufruf erfolgreich war, wird das Promise mit einem Array von Ganzzahlen erfüllt, die die IDs der gelöschten {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} darstellen. Wenn keine Elemente gefunden werden konnten, die dem Parameter `query` entsprechen, wird das Array leer sein. Wenn der Aufruf fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Löschen Sie den neuesten Download:

```js
function onErased(ids) {
  console.log(`Erased: ${ids}`);
}

function onError(error) {
  console.log(`Error erasing item: ${error}`);
}

let erasing = browser.downloads.erase({
  limit: 1,
  orderBy: ["-startTime"],
});

erasing.then(onErased, onError);
```

Alles löschen:

```js
function onErased(ids) {
  console.log(`Erased: ${ids}`);
}

function onError(error) {
  console.log(`Error erasing item: ${error}`);
}

let erasing = browser.downloads.erase({});
erasing.then(onErased, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-erase) API von Chromium.

---
title: downloads.getFileIcon()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/getFileIcon
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Die Funktion **`getFileIcon()`** der {{WebExtAPIRef("downloads")}} API ruft ein Symbol für den angegebenen Download ab.

Für neue Downloads sind Dateisymbole verfügbar, nachdem das {{WebExtAPIRef("downloads.onCreated")}} Ereignis empfangen wurde. Das von dieser Funktion zurückgegebene Bild kann während eines laufenden Downloads von dem Bild abweichen, das nach Abschluss des Downloads zurückgegeben wird.

Die Symbolabfrage erfolgt durch Abfrage der zugrundeliegenden Plattform. Das zurückgegebene Symbol hängt daher von verschiedenen Faktoren ab, einschließlich des Download-Status, der Plattform, der registrierten Dateitypen und des visuellen Themas.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingIcon = browser.downloads.getFileIcon(
  downloadId,           // integer
  options               // optional object
)
```

### Parameter

- `downloadId`
  - : Ein `integer`, der die ID des Downloads darstellt.
- `options` {{optional_inline}}
  - : Ein Options-`object`, das Präferenzen für das abzurufende Symbol darstellt. Es kann die folgenden Eigenschaften annehmen:
    - `size` {{optional_inline}}
      - : Ein `integer`, der die Größe des Symbols darstellt. Die Größe des zurückgegebenen Symbols entspricht dem Quadrat der angegebenen Größe (in Pixeln). Wenn nicht angegeben, beträgt die Standardgröße des Symbols 32x32 Pixel.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich ist, wird das Promise mit einem String erfüllt, der die absolute URL des Symbols darstellt. Bei einem Fehlschlag wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel protokolliert die Symbol-URL für den neuesten Download:

```js
function gotIcon(iconUrl) {
  console.log(iconUrl);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function getIcon(downloadItems) {
  if (downloadItems.length > 0) {
    latestDownloadId = downloadItems[0].id;
    let gettingIcon = browser.downloads.getFileIcon(latestDownloadId);
    gettingIcon.then(gotIcon, onError);
  }
}

let searching = browser.downloads.search({
  limit: 1,
  orderBy: ["-startTime"],
});

searching.then(getIcon, onError);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-getFileIcon) API von Chromium.

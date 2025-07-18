---
title: downloads.getFileIcon()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/getFileIcon
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die Funktion **`getFileIcon()`** der {{WebExtAPIRef("downloads")}}-API ruft ein Symbol für den angegebenen Download ab.

Bei neuen Downloads sind Dateisymbole verfügbar, nachdem das {{WebExtAPIRef("downloads.onCreated")}} Ereignis empfangen wurde. Das von dieser Funktion zurückgegebene Bild während eines laufenden Downloads kann sich von dem Bild unterscheiden, das nach Abschluss des Downloads zurückgegeben wird.

Das Abrufen der Symbole erfolgt durch Abfrage der zugrunde liegenden Plattform. Das zurückgegebene Symbol hängt daher von mehreren Faktoren ab, einschließlich des Status des Downloads, der Plattform, registrierter Dateitypen und des visuellen Themas.

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
  - : Ein Options-`object`, das Präferenzen für das abzurufende Symbol darstellt. Es kann die folgenden Eigenschaften enthalten:
    - `size` {{optional_inline}}
      - : Ein `integer`, der die Größe des Symbols darstellt. Die Größe des zurückgegebenen Symbols entspricht dem Quadrat der angegebenen Größe (in Pixel). Wenn nicht angegeben, ist die Standardgröße für das Symbol 32x32 Pixel.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich ist, wird das Promise mit einem String erfüllt, der die absolute URL des Symbols darstellt. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel protokolliert die Symbol-URL für den letzten Download:

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-getFileIcon) API von Chromium.

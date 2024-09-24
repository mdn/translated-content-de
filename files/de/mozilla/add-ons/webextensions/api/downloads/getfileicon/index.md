---
title: downloads.getFileIcon()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/getFileIcon
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Funktion **`getFileIcon()`** der {{WebExtAPIRef("downloads")}} API ruft ein Symbol für den angegebenen Download ab.

Bei neuen Downloads sind Dateisymbole verfügbar, nachdem das {{WebExtAPIRef("downloads.onCreated")}} Ereignis empfangen wurde. Das von dieser Funktion zurückgegebene Bild während eines laufenden Downloads kann sich von dem Bild unterscheiden, das nach Abschluss des Downloads zurückgegeben wird.

Das Abrufen des Symbols erfolgt durch Abfrage der zugrundeliegenden Plattform. Daher hängt das zurückgegebene Symbol von einer Reihe von Faktoren ab, einschließlich des Downloadstatus, der Plattform, registrierten Dateitypen und des visuellen Themas.

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
  - : Eine `integer`, die die ID des Downloads darstellt.
- `options` {{optional_inline}}

  - : Ein Options-`object`, das Präferenzen für das abzurufende Symbol darstellt. Es kann folgende Eigenschaften enthalten:

    - `size` {{optional_inline}}
      - : Ein `integer`, der die Größe des Symbols repräsentiert. Die Größe des zurückgegebenen Symbols wird die bereitgestellte Größe im Quadrat (in Pixeln) sein. Wenn es weggelassen wird, beträgt die Standardgröße des Symbols 32x32 Pixel.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anforderung erfolgreich ist, wird das Versprechen mit einem String erfüllt, der die absolute URL des Symbols darstellt. Wenn die Anforderung fehlschlägt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

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

---
title: downloads.getFileIcon()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/getFileIcon
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die **`getFileIcon()`** Funktion der {{WebExtAPIRef("downloads")}} API ruft ein Symbol für den angegebenen Download ab.

Bei neuen Downloads sind Dateisymbole verfügbar, nachdem das {{WebExtAPIRef("downloads.onCreated")}} Ereignis empfangen wurde. Das Bild, das von dieser Funktion während eines laufenden Downloads zurückgegeben wird, kann sich von dem Bild unterscheiden, das nach Abschluss des Downloads zurückgegeben wird.

Das Abrufen des Symbols erfolgt durch Abfrage der zugrunde liegenden Plattform. Das zurückgegebene Symbol hängt daher von mehreren Faktoren ab, einschließlich des Zustands des Downloads, der Plattform, der registrierten Dateitypen und des visuellen Themas.

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
  - : Eine `Ganzzahl`, die die ID des Downloads darstellt.
- `options` {{optional_inline}}

  - : Ein Optionen-`Objekt`, das Präferenzen für das abzurufende Symbol darstellt. Es kann die folgenden Eigenschaften haben:

    - `size` {{optional_inline}}
      - : Eine `Ganzzahl`, die die Größe des Symbols darstellt. Die Größe des zurückgegebenen Symbols entspricht der angegebenen Größe im Quadrat (in Pixel). Wenn weggelassen, beträgt die Standardgröße für das Symbol 32x32 Pixel.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich ist, wird das Promise mit einer Zeichenkette erfüllt, die die absolute URL des Symbols darstellt. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel protokolliert die Symbol-URL für den zuletzt heruntergeladenen Download:

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

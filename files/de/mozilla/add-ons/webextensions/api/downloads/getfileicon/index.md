---
title: downloads.getFileIcon()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/getFileIcon
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Die Funktion **`getFileIcon()`** der {{WebExtAPIRef("downloads")}} API ruft ein Icon für den angegebenen Download ab.

Für neue Downloads sind Dateisymbole verfügbar, nachdem das {{WebExtAPIRef("downloads.onCreated")}}-Ereignis empfangen wurde. Das Bild, das von dieser Funktion während eines laufenden Downloads zurückgegeben wird, kann sich von dem Bild unterscheiden, das nach Abschluss des Downloads zurückgegeben wird.

Das Abrufen von Icons erfolgt durch Abfragen der zugrunde liegenden Plattform. Das zurückgegebene Icon hängt daher von verschiedenen Faktoren ab, darunter der Status des Downloads, die Plattform, registrierte Dateitypen und das visuelle Thema.

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
  - : Ein Options`objekt`, das Präferenzen für das abzurufende Icon darstellt. Es kann die folgenden Eigenschaften haben:
    - `size` {{optional_inline}}
      - : Eine `Ganzzahl`, die die Größe des Icons darstellt. Die Größe des zurückgegebenen Icons entspricht der quadrierten angegebenen Größe (in Pixeln). Wenn weggelassen, beträgt die Standardgröße des Icons 32x32 Pixel.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich ist, wird das Promise mit einem String, der die absolute URL des Icons darstellt, erfüllt. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel protokolliert die URL des Icons für den jüngsten Download:

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
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-getFileIcon)-API von Chromium.

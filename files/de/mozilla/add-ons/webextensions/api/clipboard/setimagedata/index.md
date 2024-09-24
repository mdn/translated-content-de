---
title: clipboard.setImageData()
slug: Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Kopiert ein Bild in die Zwischenablage. Das Bild wird neu kodiert, bevor es in die Zwischenablage geschrieben wird. Ist das Bild ungültig, wird die Zwischenablage nicht verändert.

Das Bild wird als ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) mit dem kodierten Bild bereitgestellt. JPEG- und PNG-Formate werden unterstützt.

Obwohl diese API auf Chromes [`clipboard.setImageData()`](https://developer.chrome.com/docs/apps/reference/clipboard) API basiert, gibt es einige Unterschiede:

- Die Chrome API ist nur für Apps, nicht für Erweiterungen.
- Diese API erfordert nur die Berechtigung `"clipboardWrite"`, während die Chrome-Version auch die Berechtigung `"clipboard"` benötigt.
- Die Chrome API verwendet Rückruffunktionen, und diese API unterstützt nur Promises.
- Diese API unterstützt den `additionalItems`-Parameter nicht.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.clipboard.setImageData(imageData, imageType)
```

### Parameter

- `imageData`
  - : Ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), der die zu kopierenden Bilddaten in kodierter Form enthält.
- `imageType`
  - : Ein String, der den im `imageData` enthaltenen Bildtyp angibt: `"png"` oder `"jpeg"`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird, wenn die Operation erfolgreich war, oder zurückgewiesen wird, wenn ein Fehler aufgetreten ist (zum Beispiel, weil die Daten kein gültiges Bild darstellen).

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Ein entferntes Bild kopieren:

```js
// erfordert:
// * die Host-Berechtigung für "https://cdn.mdn.mozilla.net/*"
// * die API-Berechtigung "clipboardWrite"

fetch("https://cdn.mdn.mozilla.net/static/img/favicon144.png")
  .then((response) => response.arrayBuffer())
  .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
```

Ein mit der Erweiterung gebündeltes Bild kopieren:

```js
// erfordert die API-Berechtigung "clipboardWrite"

fetch(browser.runtime.getURL("image.png"))
  .then((response) => response.arrayBuffer())
  .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.clipboard`](https://developer.chrome.com/docs/apps/reference/clipboard) API.

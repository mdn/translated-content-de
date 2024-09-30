---
title: clipboard.setImageData()
slug: Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Kopiert ein Bild in die Zwischenablage. Das Bild wird neu kodiert, bevor es in die Zwischenablage geschrieben wird. Wenn das Bild ungültig ist, wird die Zwischenablage nicht verändert.

Das Bild wird als [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) bereitgestellt, der das kodierte Bild enthält. JPEG- und PNG-Formate werden unterstützt.

Obwohl diese API auf der [`clipboard.setImageData()`](https://developer.chrome.com/docs/apps/reference/clipboard) API von Chrome basiert, gibt es einige Unterschiede:

- Die Chrome-API ist nur für Apps, nicht für Erweiterungen.
- Diese API erfordert nur die Berechtigung `"clipboardWrite"`, während die Chrome-Version auch die Berechtigung `"clipboard"` erfordert.
- Die Chrome-API verwendet Callbacks, und diese API unterstützt nur Promises.
- Diese API unterstützt den Parameter `additionalItems` nicht.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.clipboard.setImageData(imageData, imageType)
```

### Parameter

- `imageData`
  - : Ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), der die zu kopierenden Bilddaten in die Zwischenablage enthält.
- `imageType`
  - : Ein String, der den Typ des im `imageData` enthaltenen Bildes angibt: `"png"` oder `"jpeg"`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Vorhaben erfolgreich war, oder abgelehnt wird, wenn ein Fehler aufgetreten ist (zum Beispiel, weil die Daten kein gültiges Bild darstellten).

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Ein entferntes Bild kopieren:

```js
// requires:
// * the host permission for "https://cdn.mdn.mozilla.net/*"
// * the API permission "clipboardWrite"

fetch("https://cdn.mdn.mozilla.net/static/img/favicon144.png")
  .then((response) => response.arrayBuffer())
  .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
```

Ein Bild kopieren, das mit der Erweiterung gebündelt wurde:

```js
// requires the API permission "clipboardWrite"

fetch(browser.runtime.getURL("image.png"))
  .then((response) => response.arrayBuffer())
  .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.clipboard`](https://developer.chrome.com/docs/apps/reference/clipboard) API von Chromium.

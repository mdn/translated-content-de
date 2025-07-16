---
title: clipboard.setImageData()
slug: Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Kopiert ein Bild in die Zwischenablage. Das Bild wird neu kodiert, bevor es in die Zwischenablage geschrieben wird. Wenn das Bild ungültig ist, wird die Zwischenablage nicht verändert.

Das Bild wird als [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) bereitgestellt, der das kodierte Bild enthält. JPEG- und PNG-Formate werden unterstützt.

Obwohl diese API auf der [`clipboard.setImageData()`](https://developer.chrome.com/docs/apps/reference/clipboard)-API von Chrome basiert, gibt es einige Unterschiede:

- Die Chrome-API ist nur für Apps, nicht für Erweiterungen.
- Diese API erfordert nur die Berechtigung `"clipboardWrite"`, während die Chrome-Version auch die Berechtigung `"clipboard"` erfordert.
- Die API von Chrome verwendet Rückrufe, während diese API nur Zusagen (`promises`) unterstützt.
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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird, wenn die Operation erfolgreich war, oder abgelehnt wird, wenn ein Fehler aufgetreten ist (zum Beispiel, weil die Daten kein gültiges Bild darstellten).

## Beispiele

Ein Bild von einer entfernten Quelle kopieren:

```js
// requires:
// * the host permission for "https://mdn.github.io/*"
// * the API permission "clipboardWrite"

fetch("https://mdn.github.io/shared-assets/images/examples/favicon144.png")
  .then((response) => response.arrayBuffer())
  .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
```

Ein Bild kopieren, das mit der Erweiterung gebündelt war:

```js
// requires the API permission "clipboardWrite"

fetch(browser.runtime.getURL("image.png"))
  .then((response) => response.arrayBuffer())
  .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.clipboard`](https://developer.chrome.com/docs/apps/reference/clipboard)-API von Chromium.

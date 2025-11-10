---
title: "OffscreenCanvas: convertToBlob()-Methode"
short-title: convertToBlob()
slug: Web/API/OffscreenCanvas/convertToBlob
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`OffscreenCanvas.convertToBlob()`**-Methode erstellt ein [`Blob`](/de/docs/Web/API/Blob)-Objekt, das das im Canvas enthaltene Bild darstellt.

Das gewünschte Dateiformat und die Bildqualität können angegeben werden.
Wenn das Dateiformat nicht angegeben ist oder das gegebene Format nicht unterstützt wird, werden die Daten als `image/png` exportiert.
Browser müssen `image/png` unterstützen; viele werden zusätzliche Formate wie `image/jpeg` und `image/webp` unterstützen.

Das erstellte Bild wird eine Auflösung von 96 dpi für Dateiformate haben, die Metadaten zur Kodierungsauflösung unterstützen.

## Syntax

```js-nolint
convertToBlob()
convertToBlob(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `type`
      - : Ein String, der das Bildformat angibt.
        Der Standardtyp ist `image/png`; dieses Bildformat wird auch verwendet, wenn der angegebene Typ nicht unterstützt wird.
    - `quality`
      - : Eine {{jsxref("Number")}} zwischen `0` und `1`, die die Bildqualität angibt, die beim Erstellen von Bildern mit Dateiformaten verwendet werden soll, die verlustbehaftete Kompression unterstützen (wie `image/jpeg` oder `image/webp`).
        Ein Benutzeragent verwendet seinen Standardwert für die Qualität, wenn diese Option nicht angegeben wird oder wenn die Zahl außerhalb des erlaubten Bereichs liegt.

### Rückgabewert

Ein {{jsxref("Promise")}}, der ein [`Blob`](/de/docs/Web/API/Blob)-Objekt zurückgibt, das das im Canvas enthaltene Bild darstellt.

### Ausnahmen

Das Versprechen kann mit den folgenden Ausnahmen abgelehnt werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Der `OffscreenCanvas` ist nicht getrennt; mit anderen Worten, er ist noch mit dem DOM und nicht mit dem aktuellen Worker verbunden.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Der Canvas-Kontextmodus ist 2d und das Bitmap ist nicht origin-clean; mindestens einige seiner Inhalte wurden oder könnten von einer anderen Seite als der geladen worden sein, von der das Dokument selbst geladen wurde.

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Das Canvas-Bitmap hat keine Pixel (entweder die horizontale oder vertikale Dimension ist null).

- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Blob konnte aufgrund eines Kodierungsfehlers nicht erstellt werden.

## Beispiele

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// Perform some drawing using the gl context

offscreen.convertToBlob().then((blob) => console.log(blob));
// Blob { size: 334, type: "image/png" }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert, [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas).

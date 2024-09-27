---
title: "OffscreenCanvas: convertToBlob()-Methode"
short-title: convertToBlob()
slug: Web/API/OffscreenCanvas/convertToBlob
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`OffscreenCanvas.convertToBlob()`**-Methode erstellt ein [`Blob`](/de/docs/Web/API/Blob)-Objekt, das das im Canvas enthaltene Bild repräsentiert.

Das gewünschte Dateiformat und die Bildqualität können angegeben werden. Wenn das Dateiformat nicht angegeben wird oder das angegebene Format nicht unterstützt wird, werden die Daten als `image/png` exportiert. Browser müssen `image/png` unterstützen; viele werden zusätzliche Formate wie `image/jpeg` und `image/webp` unterstützen.

Das erstellte Bild hat eine Auflösung von 96 dpi für Dateiformate, die die Codierung von Auflösungsmetadaten unterstützen.

## Syntax

```js-nolint
convertToBlob()
convertToBlob(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:
    - `type`
      - : Ein String, der das Bildformat angibt. Der Standardtyp ist `image/png`; dieses Bildformat wird auch verwendet, wenn der angegebene Typ nicht unterstützt wird.
    - `quality`
      - : Eine {{jsxref("Number")}} zwischen `0` und `1`, die die Bildqualität angibt, die bei der Erstellung von Bildern mit Dateiformaten verwendet werden soll, die verlustbehaftete Kompression unterstützen (wie `image/jpeg` oder `image/webp`). Ein User-Agent wird seinen Standardqualitätswert verwenden, wenn diese Option nicht angegeben wird oder die Zahl außerhalb des erlaubten Bereichs liegt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ein [`Blob`](/de/docs/Web/API/Blob)-Objekt zurückgibt, das das im Canvas enthaltene Bild repräsentiert.

### Ausnahmen

Das Promise kann mit den folgenden Ausnahmen abgelehnt werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Das `OffscreenCanvas` ist nicht losgelöst; mit anderen Worten, es ist immer noch mit dem DOM und nicht mit dem aktuellen Worker verbunden.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Der Canvas-Kontextmodus ist 2D und das Bitmap ist nicht origin-clean; zumindest einige seiner Inhalte wurden oder könnten von einer anderen Website als derjenigen geladen worden sein, von der das Dokument selbst geladen wurde.

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Das Canvas-Bitmap hat keine Pixel (entweder die horizontale oder vertikale Dimension ist null).

- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Blob konnte aufgrund eines Kodierungsfehlers nicht erstellt werden.

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

- Das Interface, das diese Methode definiert, [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas).

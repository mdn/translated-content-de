---
title: "OffscreenCanvas: convertToBlob()-Methode"
short-title: convertToBlob()
slug: Web/API/OffscreenCanvas/convertToBlob
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die Methode **`OffscreenCanvas.convertToBlob()`** erstellt ein [`Blob`](/de/docs/Web/API/Blob)-Objekt, das das im Canvas enthaltene Bild repräsentiert.

Das gewünschte Dateiformat und die Bildqualität können angegeben werden. Wenn das Dateiformat nicht angegeben ist oder das angegebene Format nicht unterstützt wird, werden die Daten als `image/png` exportiert. Browser müssen `image/png` unterstützen; viele werden zusätzliche Formate unterstützen, einschließlich `image/jpeg` und `image/webp`.

Das erstellte Bild hat eine Auflösung von 96 dpi für Dateiformate, die Metadaten zur Kodierungsauflösung unterstützen.

## Syntax

```js-nolint
convertToBlob()
convertToBlob(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit folgenden Eigenschaften:
    - `type`
      - : Ein String, der das Bildformat angibt.
        Der Standardtyp ist `image/png`; dieses Bildformat wird auch verwendet, wenn der angegebene Typ nicht unterstützt wird.
    - `quality`
      - : Eine {{jsxref("Number")}} zwischen `0` und `1`, die die Bildqualität angibt, die beim Erstellen von Bildern mit Dateiformaten verwendet werden soll, die verlustbehaftete Komprimierung unterstützen (wie `image/jpeg` oder `image/webp`).
        Ein Benutzeragent verwendet seinen Standardqualitätswert, wenn diese Option nicht angegeben ist oder wenn die Zahl außerhalb des zulässigen Bereichs liegt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ein [`Blob`](/de/docs/Web/API/Blob)-Objekt zurückgibt, das das im Canvas enthaltene Bild darstellt.

### Ausnahmen

Das Promise kann mit den folgenden Ausnahmen abgelehnt werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Das `OffscreenCanvas` ist nicht abgetrennt; mit anderen Worten, es ist noch mit dem DOM und nicht mit dem aktuellen Worker verbunden.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Der Canvas-Kontextmodus ist 2d und das Bitmap ist nicht origin-clean; mindestens ein Teil seines Inhalts wurde oder könnte von einer anderen Website geladen worden sein als von derjenigen, von der das Dokument selbst geladen wurde.

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Das Canvas-Bitmap enthält keine Pixel (entweder die horizontale oder die vertikale Dimension ist null).

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

- Die Schnittstelle, die diese Methode definiert, [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas).

---
title: "OffscreenCanvas: Methode convertToBlob()"
short-title: convertToBlob()
slug: Web/API/OffscreenCanvas/convertToBlob
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`OffscreenCanvas.convertToBlob()`**-Methode erstellt ein {{domxref("Blob")}}-Objekt, das das im Canvas enthaltene Bild darstellt.

Das gewünschte Dateiformat und die Bildqualität können angegeben werden. Wenn das Dateiformat nicht angegeben ist oder das angegebene Format nicht unterstützt wird, werden die Daten als `image/png` exportiert. Browser sind verpflichtet, `image/png` zu unterstützen; viele unterstützen zusätzliche Formate wie `image/jpeg` und `image/webp`.

Das erstellte Bild wird eine Auflösung von 96 dpi für Dateiformate haben, die das Encodieren von Auflösungs-Metadaten unterstützen.

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
      - : Eine {{jsxref("Number")}} zwischen `0` und `1`, die die Bildqualität angibt, die beim Erstellen von Bildern unter Verwendung von Dateiformaten verwendet wird, die verlustbehaftete Kompression unterstützen (wie `image/jpeg` oder `image/webp`).
        Ein Benutzeragent verwendet seinen Standardqualitätswert, wenn diese Option nicht angegeben ist oder wenn die Zahl außerhalb des zulässigen Bereichs liegt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ein {{domxref("Blob")}}-Objekt zurückgibt, das das im Canvas enthaltene Bild darstellt.

### Ausnahmen

Das Promise kann mit den folgenden Ausnahmen zurückgewiesen werden:

- `InvalidStateError` {{domxref("DOMException")}}

  - : Der `OffscreenCanvas` ist nicht abgetrennt; mit anderen Worten, er ist noch mit dem DOM und nicht dem aktuellen Worker verbunden.

- `SecurityError` {{domxref("DOMException")}}

  - : Der Canvas-Kontextmodus ist 2d und das Bitmap ist nicht origin-clean; mindestens einige seiner Inhalte wurden oder könnten von einer anderen Site geladen worden sein als der, von der das Dokument selbst geladen wurde.

- `IndexSizeError` {{domxref("DOMException")}}

  - : Das Canvas-Bitmap hat keine Pixel (entweder die horizontale oder vertikale Dimension ist null).

- `EncodingError` {{domxref("DOMException")}}
  - : Das Blob konnte aufgrund eines Kodierungsfehlers nicht erstellt werden.

## Beispiele

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// Zeichnen Sie einige Zeichnungen mit dem gl-Kontext

offscreen.convertToBlob().then((blob) => console.log(blob));
// Blob { size: 334, type: "image/png" }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert, {{domxref("OffscreenCanvas")}}.

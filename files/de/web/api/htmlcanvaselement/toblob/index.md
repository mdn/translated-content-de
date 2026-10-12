---
title: "HTMLCanvasElement: Methode toBlob()"
short-title: toBlob()
slug: Web/API/HTMLCanvasElement/toBlob
l10n:
  sourceCommit: 5b85e27155260155bd829fc6d4b98ca2c476b2d1
---

{{APIRef("Canvas API")}}

Die Methode **`HTMLCanvasElement.toBlob()`** erstellt ein [`Blob`](/de/docs/Web/API/Blob)-Objekt, das das im Canvas enthaltene Bild repräsentiert.
Diese Datei kann nach Ermessen des User Agents auf dem Datenträger zwischengespeichert oder im Arbeitsspeicher abgelegt werden.

Das gewünschte Dateiformat und die Bildqualität können angegeben werden.
Wenn das Dateiformat nicht angegeben wird oder das angegebene Format nicht unterstützt wird, werden die Daten als `image/png` exportiert.
Browser müssen `image/png` unterstützen; viele unterstützen zusätzliche Formate, darunter `image/jpeg` und `image/webp`.

Das erstellte Bild hat eine Auflösung von 96 dpi, sofern das Dateiformat die Speicherung von Auflösungsmetadaten unterstützt.

## Syntax

```js-nolint
toBlob(callback)
toBlob(callback, type)
toBlob(callback, type, quality)
```

### Parameter

- `callback`
  - : Eine Callback-Funktion, die das resultierende [`Blob`](/de/docs/Web/API/Blob)-Objekt als einziges Argument erhält.
    `null` kann übergeben werden, wenn das Bild aus irgendeinem Grund nicht erstellt werden kann.
- `type` {{optional_inline}}
  - : Ein String, der das Bildformat angibt.
    Der Standardtyp ist `image/png`; dieser Typ wird auch verwendet, wenn der angegebene Typ nicht unterstützt wird.
- `quality` {{optional_inline}}
  - : Eine {{jsxref("Number")}} zwischen `0` und `1`, die die Bildqualität beim Erstellen von Bildern in Dateiformaten mit verlustbehafteter Komprimierung (wie `image/jpeg` oder `image/webp`) angibt.
    Der User Agent verwendet seinen Standardwert für die Qualität, wenn diese Option nicht angegeben wird oder die Zahl außerhalb des zulässigen Bereichs liegt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Bitmap des Canvas ist nicht origin-clean; zumindest ein Teil ihres Inhalts wurde oder könnte von einer anderen Website geladen worden sein als der, von der das Dokument selbst geladen wurde.

## Beispiele

### Eine Datei aus dem Canvas erstellen

Nachdem Sie Inhalte in einen Canvas gezeichnet haben, können Sie diesen in eine Datei eines beliebigen unterstützten Bildformats umwandeln.
Das folgende Codebeispiel nimmt das Bild aus dem {{HTMLElement("canvas")}}-Element mit der ID „canvas“, erstellt davon eine Kopie als PNG-Bild und fügt anschließend ein neues {{HTMLElement("img")}}-Element zum Dokument hinzu, das dieses Bild als Quelle verwendet.

```js
const canvas = document.getElementById("canvas");

canvas.toBlob((blob) => {
  const newImg = document.createElement("img");
  const url = URL.createObjectURL(blob);

  newImg.src = url;
  document.body.appendChild(newImg);
});
```

Hier wird ein PNG-Bild erstellt. Wenn Sie dem Aufruf von `toBlob()` einen zweiten Parameter hinzufügen, können Sie einen anderen vom User Agent unterstützten Bildtyp angeben.
So erhalten Sie das Bild beispielsweise im JPEG-Format:

```js
canvas.toBlob(
  (blob) => {
    /* … */
  },
  "image/jpeg",
  0.95,
); // JPEG at 95% quality
```

Beachten Sie, dass wir die Objekt-URL nicht unmittelbar nach dem Laden des Bildes widerrufen. Andernfalls wäre das Bild für Benutzerinteraktionen nicht mehr verwendbar, etwa um es per Rechtsklick zu speichern oder in einem neuen Tab zu öffnen. Bei langlebigen Anwendungen sollten Sie Objekt-URLs widerrufen, sobald sie nicht mehr benötigt werden (etwa wenn das Bild aus dem DOM entfernt wird). Rufen Sie dazu die Methode [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) mit dem String der Objekt-URL auf, um Speicher freizugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Blob`](/de/docs/Web/API/Blob)

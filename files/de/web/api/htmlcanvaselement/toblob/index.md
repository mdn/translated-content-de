---
title: "HTMLCanvasElement: toBlob() Methode"
short-title: toBlob()
slug: Web/API/HTMLCanvasElement/toBlob
l10n:
  sourceCommit: 735976ba98a4de14f7b568aba220841f14c2d65d
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.toBlob()`** Methode erstellt ein [`Blob`](/de/docs/Web/API/Blob) Objekt, das das im Canvas enthaltene Bild darstellt. Diese Datei kann nach Ermessen des User Agents auf der Festplatte zwischengespeichert oder im Arbeitsspeicher gespeichert werden.

Das gewünschte Dateiformat und die Bildqualität können angegeben werden. Wenn das Dateiformat nicht angegeben ist oder das angegebene Format nicht unterstützt wird, werden die Daten als `image/png` exportiert. Browser müssen `image/png` unterstützen; viele unterstützen zusätzliche Formate wie `image/jpeg` und `image/webp`.

Das erstellte Bild hat eine Auflösung von 96dpi für Dateiformate, die das Kodieren von Auflösungsmetadaten unterstützen.

## Syntax

```js-nolint
toBlob(callback)
toBlob(callback, type)
toBlob(callback, type, quality)
```

### Parameter

- `callback`
  - : Eine Callback-Funktion mit dem resultierenden [`Blob`](/de/docs/Web/API/Blob) Objekt als einziges Argument. `null` kann übergeben werden, wenn das Bild aus irgendeinem Grund nicht erstellt werden kann.
- `type` {{optional_inline}}
  - : Ein String, der das Bildformat angibt. Der Standardtyp ist `image/png`; dieser Typ wird auch verwendet, wenn der angegebene Typ nicht unterstützt wird.
- `quality` {{optional_inline}}
  - : Eine {{jsxref("Number")}} zwischen `0` und `1`, die die Bildqualität angibt, die beim Erstellen von Bildern mit Dateiformaten verwendet werden soll, die verlustbehaftete Komprimierung unterstützen (wie `image/jpeg` oder `image/webp`). Ein User Agent verwendet seinen Standardqualitätswert, wenn diese Option nicht angegeben ist oder wenn die Zahl außerhalb des zulässigen Bereichs liegt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError`
  - : Das Bitmap des Canvas ist nicht ursprungssauber; mindestens einige seiner Inhalte wurden oder könnten von einer anderen Site als der geladen worden sein, von der auch das Dokument selbst geladen wurde.

## Beispiele

### Eine Datei erstellen, die das Canvas darstellt

Nachdem Sie Inhalte in ein Canvas gezeichnet haben, können Sie es in eine Datei eines unterstützten Bildformats umwandeln. Der untenstehende Code-Schnipsel beispielsweise nimmt das Bild im {{HTMLElement("canvas")}} Element mit der ID "canvas", erhält eine Kopie davon als PNG-Bild und fügt dann ein neues {{HTMLElement("img")}} Element dem Dokument hinzu, dessen Bildquelle das mit dem Canvas erstellte Bild ist.

```js
const canvas = document.getElementById("canvas");

canvas.toBlob((blob) => {
  const newImg = document.createElement("img");
  const url = URL.createObjectURL(blob);

  newImg.src = url;
  document.body.appendChild(newImg);
});
```

Beachten Sie, dass wir hier ein PNG-Bild erstellen; wenn Sie einen zweiten Parameter zum `toBlob()` Aufruf hinzufügen, können Sie einen anderen vom User Agent unterstützten Bildtyp angeben. Beispielsweise, um das Bild im JPEG-Format zu erhalten:

```js
canvas.toBlob(
  (blob) => {
    /* … */
  },
  "image/jpeg",
  0.95,
); // JPEG at 95% quality
```

Beachten Sie, dass wir die Objekt-URL nicht sofort widerrufen, nachdem das Bild geladen wurde, da dies das Bild für Benutzerinteraktionen unbrauchbar machen würde (wie das Rechtsklicken zum Speichern des Bildes oder das Öffnen in einem neuen Tab). Für langlebige Anwendungen sollten Sie Objekt-URLs widerrufen, wenn sie nicht mehr benötigt werden (z. B. wenn das Bild aus dem DOM entfernt wird), um Speicher freizugeben, indem Sie die Methode [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) aufrufen und die Objekt-URL-Zeichenkette übergeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Blob`](/de/docs/Web/API/Blob)

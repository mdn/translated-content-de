---
title: "HTMLCanvasElement: toBlob() Methode"
short-title: toBlob()
slug: Web/API/HTMLCanvasElement/toBlob
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.toBlob()`** Methode erstellt ein [`Blob`](/de/docs/Web/API/Blob) Objekt, das das im Canvas enthaltene Bild darstellt.
Diese Datei kann nach Ermessen des Benutzeragenten auf der Festplatte zwischengespeichert oder im Speicher gespeichert werden.

Das gewünschte Dateiformat und die Bildqualität können angegeben werden.
Wenn das Dateiformat nicht angegeben ist oder das angegebene Format nicht unterstützt wird, werden die Daten als `image/png` exportiert.
Browser müssen `image/png` unterstützen; viele unterstützen zusätzliche Formate, einschließlich `image/jpeg` und `image/webp`.

Das erstellte Bild hat eine Auflösung von 96dpi für Dateiformate, die das Kodieren von Auflösungsmetadaten unterstützen.

## Syntax

```js-nolint
toBlob(callback)
toBlob(callback, type)
toBlob(callback, type, quality)
```

### Parameter

- `callback`
  - : Eine Callback-Funktion mit dem resultierenden [`Blob`](/de/docs/Web/API/Blob) Objekt als einziges Argument.
    `null` kann übergeben werden, wenn das Bild aus irgendeinem Grund nicht erstellt werden kann.
- `type` {{optional_inline}}
  - : Ein String, der das Bildformat angibt.
    Der Standardtyp ist `image/png`; dieser Typ wird auch verwendet, wenn der angegebene Typ nicht unterstützt wird.
- `quality` {{optional_inline}}
  - : Ein {{jsxref("Number")}} zwischen `0` und `1`, der die Bildqualität angibt, die beim Erstellen von Bildern unter Verwendung von Dateiformaten, die verlustbehaftete Kompression unterstützen (wie `image/jpeg` oder `image/webp`), verwendet werden soll.
    Ein Benutzeragent wird seinen Standardqualitätswert verwenden, wenn diese Option nicht angegeben ist oder wenn die Zahl außerhalb des zulässigen Bereichs liegt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError`
  - : Das Bitmap des Canvas ist nicht origin-clean; mindestens einige seiner Inhalte wurden oder könnten von einer anderen Website geladen worden sein, als von der, von der das Dokument selbst geladen wurde.

## Beispiele

### Eine Datei erstellen, die das Canvas darstellt

Sobald Sie Inhalte in ein Canvas gezeichnet haben, können Sie es in eine Datei eines beliebigen unterstützten Bildformats konvertieren.
Der folgende Codeausschnitt nimmt das Bild im {{HTMLElement("canvas")}} Element mit der ID "canvas", erhält eine Kopie davon als PNG-Bild und fügt dann ein neues {{HTMLElement("img")}} Element zum Dokument hinzu, dessen Quellbild das mit dem Canvas erstellte ist.

```js
const canvas = document.getElementById("canvas");

canvas.toBlob((blob) => {
  const newImg = document.createElement("img");
  const url = URL.createObjectURL(blob);

  newImg.onload = () => {
    // no longer need to read the blob so it's revoked
    URL.revokeObjectURL(url);
  };

  newImg.src = url;
  document.body.appendChild(newImg);
});
```

Beachten Sie, dass wir hier ein PNG-Bild erstellen; wenn Sie einen zweiten Parameter zum `toBlob()` Aufruf hinzufügen, können Sie einen anderen vom Benutzeragenten unterstützten Bildtyp angeben.
Zum Beispiel, um das Bild im JPEG-Format zu erhalten:

```js
canvas.toBlob(
  (blob) => {
    /* … */
  },
  "image/jpeg",
  0.95,
); // JPEG at 95% quality
```

### Ein Canvas in ein ico konvertieren (nur Mozilla)

Dies verwendet `-moz-parse`, um das Canvas in ico zu konvertieren, und funktioniert daher nur in Firefox.
Windows XP unterstützt nicht die Konvertierung von PNG zu ico, daher wird stattdessen bmp verwendet.
Ein Download-Link wird erstellt, indem das Download-Attribut gesetzt wird. Der Wert des Download-Attributs wird als Dateiname verwendet.

```js
const canvas = document.getElementById("canvas");
const d = canvas.width;
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(d / 2, 0);
ctx.lineTo(d, d);
ctx.lineTo(0, d);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();

function blobCallback(iconName) {
  return (b) => {
    const a = document.createElement("a");
    a.textContent = "Download";
    document.body.appendChild(a);
    a.style.display = "block";
    a.download = `${iconName}.ico`;
    a.href = window.URL.createObjectURL(b);
  };
}
canvas.toBlob(
  blobCallback("passThisString"),
  "image/vnd.microsoft.icon",
  "-moz-parse-options:format=bmp;bpp=32",
);
```

### Speichern von toBlob auf die Festplatte mit OS.File (nur Chrome-/Add-on-Kontext)

> [!NOTE]
> Diese Technik speichert es auf dem Desktop und ist nur im Firefox-Chrome-Kontext oder Add-on-Code nützlich, da OS-APIs auf Websites nicht vorhanden sind.

```js
const canvas = document.getElementById("canvas");
const d = canvas.width;
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(d / 2, 0);
ctx.lineTo(d, d);
ctx.lineTo(0, d);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();

function blobCallback(iconName) {
  return (b) => {
    const r = new FileReader();
    r.onloadend = () => {
      // r.result contains the ArrayBuffer.
      Cu.import("resource://gre/modules/osfile.jsm");
      const writePath = OS.Path.join(
        OS.Constants.Path.desktopDir,
        `${iconName}.ico`,
      );
      const promise = OS.File.writeAtomic(writePath, new Uint8Array(r.result), {
        tmpPath: `${writePath}.tmp`,
      });
      promise.then(
        () => {
          console.log("successfully wrote file");
        },
        () => {
          console.log("failure writing file");
        },
      );
    };
    r.readAsArrayBuffer(b);
  };
}

canvas.toBlob(
  blobCallback("passThisString"),
  "image/vnd.microsoft.icon",
  "-moz-parse-options:format=bmp;bpp=32",
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Blob`](/de/docs/Web/API/Blob)

---
title: "HTMLCanvasElement: toBlob() Methode"
short-title: toBlob()
slug: Web/API/HTMLCanvasElement/toBlob
l10n:
  sourceCommit: 7efdbbe04ee2ba39340fb22d7ee9b4aaa6269385
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.toBlob()`**-Methode erstellt ein [`Blob`](/de/docs/Web/API/Blob)-Objekt, das das im Canvas enthaltene Bild darstellt. Diese Datei kann nach Ermessen des Benutzeragenten auf der Festplatte zwischengespeichert oder im Speicher gespeichert werden.

Das gewünschte Dateiformat und die Bildqualität können spezifiziert werden. Wenn das Dateiformat nicht angegeben ist oder das angegebene Format nicht unterstützt wird, werden die Daten als `image/png` exportiert. Browser müssen `image/png` unterstützen; viele werden zusätzliche Formate wie `image/jpeg` und `image/webp` unterstützen.

Das erstellte Bild wird für Dateiformate, die die Kodierung von Auflösungsmetadaten unterstützen, eine Auflösung von 96dpi haben.

## Syntax

```js-nolint
toBlob(callback)
toBlob(callback, type)
toBlob(callback, type, quality)
```

### Parameter

- `callback`
  - : Eine Callback-Funktion mit dem resultierenden [`Blob`](/de/docs/Web/API/Blob)-Objekt als einzigem Argument. `null` kann übergeben werden, wenn das Bild aus irgendeinem Grund nicht erstellt werden kann.
- `type` {{optional_inline}}
  - : Ein String, der das Bildformat angibt. Der Standardtyp ist `image/png`; dieser Typ wird auch verwendet, wenn der angegebene Typ nicht unterstützt wird.
- `quality` {{optional_inline}}
  - : Eine {{jsxref("Number")}} zwischen `0` und `1`, die die Bildqualität angibt, die bei der Erstellung von Bildern mit Dateiformaten verwendet wird, die verlustbehaftete Komprimierung unterstützen (wie `image/jpeg` oder `image/webp`). Ein Benutzeragent wird seinen Standard-Qualitätswert verwenden, wenn diese Option nicht angegeben ist oder die Zahl außerhalb des zulässigen Bereichs liegt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError`
  - : Das Bitmap des Canvas ist nicht origin-clean; mindestens ein Teil seines Inhalts wurde oder könnte von einer anderen Website als der geladen worden sein, von der das Dokument selbst stammt.

## Beispiele

### Eine Datei darstellen, die das Canvas repräsentiert

Sobald Sie Inhalte in ein Canvas gezeichnet haben, können Sie es in eine Datei eines unterstützten Bildformats konvertieren. Der unten stehende Codeausschnitt nimmt zum Beispiel das Bild im {{HTMLElement("canvas")}}-Element mit der ID "canvas", erhält eine Kopie davon als PNG-Bild und fügt dann ein neues {{HTMLElement("img")}}-Element zum Dokument hinzu, dessen Quellbild das mit dem Canvas erstellte Bild ist.

```js
const canvas = document.getElementById("canvas");

canvas.toBlob((blob) => {
  const newImg = document.createElement("img");
  const url = URL.createObjectURL(blob);

  newImg.src = url;
  document.body.appendChild(newImg);
});
```

Beachten Sie, dass wir hier ein PNG-Bild erstellen; wenn Sie einen zweiten Parameter beim `toBlob()`-Aufruf hinzufügen, können Sie einen anderen vom Benutzeragenten unterstützten Bildtyp angeben. Zum Beispiel, um das Bild im JPEG-Format zu erhalten:

```js
canvas.toBlob(
  (blob) => {
    /* … */
  },
  "image/jpeg",
  0.95,
); // JPEG at 95% quality
```

Beachten Sie, dass wir die Objekt-URL nicht sofort widerrufen, nachdem das Bild geladen wurde, da dies das Bild für Benutzerinteraktionen (wie Rechtsklick zum Speichern des Bildes oder Öffnen in einem neuen Tab) unbrauchbar machen würde. Für langlebige Anwendungen sollten Sie Objekt-URLs widerrufen, wenn sie nicht mehr benötigt werden (z. B. wenn das Bild aus dem DOM entfernt wird), um Speicherplatz freizugeben. Dazu rufen Sie die Methode [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) auf und übergeben den Objekt-URL-String.

### Ein Canvas in ein ico konvertieren (Nur Mozilla)

Dies verwendet `-moz-parse`, um das Canvas in ico zu konvertieren, und funktioniert daher nur in Firefox. Windows XP unterstützt nicht die Konvertierung von PNG in ico, daher wird stattdessen bmp verwendet. Ein Download-Link wird durch das Setzen des Download-Attributs erstellt. Der Wert des Download-Attributs ist der Name, der als Dateiname verwendet wird.

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

### Speichern von toBlob auf Festplatte mit OS.File (Nur im Chrome/Add-On-Kontext)

> [!NOTE]
> Diese Technik speichert es auf dem Desktop und ist nur im Firefox-Chrome-Kontext oder im Add-On-Code nützlich, da OS-APIs auf Websites nicht vorhanden sind.

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

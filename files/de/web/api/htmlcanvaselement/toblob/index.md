---
title: "HTMLCanvasElement: Methode toBlob()"
short-title: toBlob()
slug: Web/API/HTMLCanvasElement/toBlob
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.toBlob()`**-Methode erstellt ein {{domxref("Blob")}}-Objekt, das das Bild repräsentiert, das im Canvas enthalten ist.
Diese Datei kann nach Ermessen des Benutzeragenten auf der Festplatte zwischengespeichert oder im Speicher gespeichert werden.

Das gewünschte Dateiformat und die Bildqualität können spezifiziert werden.
Wenn das Dateiformat nicht angegeben wird oder das angegebene Format nicht unterstützt wird, werden die Daten als `image/png` exportiert.
Browser müssen `image/png` unterstützen; viele werden zusätzliche Formate unterstützen, darunter `image/jpeg` und `image/webp`.

Das erstellte Bild hat eine Auflösung von 96 dpi für Dateiformate, die das Codieren von Auflösungsmetadaten unterstützen.

## Syntax

```js-nolint
toBlob(callback)
toBlob(callback, type)
toBlob(callback, type, quality)
```

### Parameter

- `callback`
  - : Eine Callback-Funktion mit dem resultierenden {{domxref("Blob")}}-Objekt als einzigem Argument.
    `null` kann übergeben werden, wenn das Bild aus irgendeinem Grund nicht erstellt werden kann.
- `type` {{optional_inline}}
  - : Ein String, der das Bildformat angibt.
    Der Standardtyp ist `image/png`; dieser Typ wird auch verwendet, wenn der angegebene Typ nicht unterstützt wird.
- `quality` {{optional_inline}}
  - : Eine {{jsxref("Number")}} zwischen `0` und `1`, die die Bildqualität angibt, die bei der Erstellung von Bildern mit Dateiformaten verwendet wird, die eine verlustbehaftete Kompression unterstützen (wie `image/jpeg` oder `image/webp`).
    Ein Benutzeragent wird seinen Standardqualitätswert verwenden, wenn diese Option nicht angegeben ist oder die Zahl außerhalb des erlaubten Bereichs liegt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError`
  - : Das Bitmap des Canvas ist nicht origin-clean; mindestens einige seiner Inhalte wurden oder könnten von einer anderen Seite als der geladen worden sein, von der das Dokument selbst geladen wurde.

## Beispiele

### Eine Datei erstellen, die das Canvas repräsentiert

Sobald Sie Inhalte in ein Canvas gezeichnet haben, können Sie es in eine Datei eines unterstützten Bildformats konvertieren.
Zum Beispiel nimmt der unten stehende Codeausschnitt das Bild im {{HTMLElement("canvas")}}-Element, dessen ID "canvas" ist, erhält eine Kopie davon als PNG-Bild und fügt dann ein neues {{HTMLElement("img")}}-Element in das Dokument ein, dessen Quellbild das mit dem Canvas erstellte Bild ist.

```js
const canvas = document.getElementById("canvas");

canvas.toBlob((blob) => {
  const newImg = document.createElement("img");
  const url = URL.createObjectURL(blob);

  newImg.onload = () => {
    // das Blob muss nicht mehr gelesen werden, daher wird es widerrufen
    URL.revokeObjectURL(url);
  };

  newImg.src = url;
  document.body.appendChild(newImg);
});
```

Beachten Sie, dass wir hier ein PNG-Bild erstellen; wenn Sie im Aufruf von `toBlob()` einen zweiten Parameter hinzufügen, können Sie einen anderen vom Benutzeragenten unterstützten Bildtyp angeben.
Um das Bild beispielsweise im JPEG-Format zu erhalten:

```js
canvas.toBlob(
  (blob) => {
    /* … */
  },
  "image/jpeg",
  0.95,
); // JPEG mit 95 % Qualität
```

### Ein Canvas in ein ICO konvertieren (Nur Mozilla)

Dies verwendet `-moz-parse`, um das Canvas in ein ICO zu konvertieren, und funktioniert daher nur in Firefox.
Windows XP unterstützt die Konvertierung von PNG nach ICO nicht, daher wird stattdessen BMP verwendet.
Ein Download-Link wird erstellt, indem das Download-Attribut gesetzt wird. Der Wert des Download-Attributs ist der Name, unter dem die Datei gespeichert wird.

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

### Speichern von toBlob auf der Festplatte mit OS.File (Nur im Chrome/Add-on-Kontext)

> [!NOTE]
> Diese Technik speichert es auf dem Desktop und ist nur im Firefox-Chrome-Kontext oder in Add-on-Code nützlich, da OS-APIs auf Websites nicht vorhanden sind.

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
      // r.result enthält das ArrayBuffer.
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
          console.log("Datei erfolgreich geschrieben");
        },
        () => {
          console.log("Fehler beim Schreiben der Datei");
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

- {{domxref("Blob")}}

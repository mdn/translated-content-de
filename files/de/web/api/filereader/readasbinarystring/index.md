---
title: "FileReader: Methode readAsBinaryString()"
short-title: readAsBinaryString()
slug: Web/API/FileReader/readAsBinaryString
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File API")}}{{AvailableInWorkers}}{{Deprecated_Header}}

> [!NOTE]
> Diese Methode ist zugunsten von [`readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer) veraltet.

Die **`readAsBinaryString()`**-Methode des [`FileReader`](/de/docs/Web/API/FileReader)-Interfaces wird verwendet, um das Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File) zu starten. Wenn der Lesevorgang abgeschlossen ist, wird die [`readyState`](/de/docs/Web/API/FileReader/readyState)-Eigenschaft auf `DONE` gesetzt, und das [`loadend`](/de/docs/Web/API/FileReader/loadend_event)-Ereignis wird ausgelöst. Zu diesem Zeitpunkt enthält die [`result`](/de/docs/Web/API/FileReader/result)-Eigenschaft die rohen Binärdaten aus der Datei.

Beachten Sie, dass diese Methode einst aus der File API Spezifikation entfernt, aber aus Gründen der Rückwärtskompatibilität wieder eingeführt wurde. Die Verwendung von [`FileReader.readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer) wird empfohlen.

## Syntax

```js-nolint
readAsBinaryString(blob)
```

### Parameter

- `blob`
  - : Der [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File), von dem gelesen werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const canvas = document.createElement("canvas");
const height = 200;
const width = 200;

canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#090";
ctx.beginPath();
ctx.arc(width / 2, height / 2, width / 2 - width / 10, 0, Math.PI * 2);
ctx.stroke();

canvas.toBlob((blob) => {
  const reader = new FileReader();

  reader.onload = () => {
    console.log(reader.result);
  };

  reader.readAsBinaryString(blob);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FileReader`](/de/docs/Web/API/FileReader)

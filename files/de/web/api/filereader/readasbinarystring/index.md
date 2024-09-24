---
title: "FileReader: Methode readAsBinaryString()"
short-title: readAsBinaryString()
slug: Web/API/FileReader/readAsBinaryString
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File API")}}{{AvailableInWorkers}}{{Deprecated_Header}}

> [!NOTE]
> Diese Methode ist zugunsten von {{DOMxRef("FileReader.readAsArrayBuffer","readAsArrayBuffer()")}} veraltet.

Die **`readAsBinaryString()`**-Methode der {{domxref("FileReader")}}-Schnittstelle wird verwendet, um mit dem Lesen der Inhalte des angegebenen {{domxref("Blob")}} oder {{domxref("File")}} zu beginnen. Wenn die Leseoperation abgeschlossen ist, wird die {{domxref("FileReader.readyState","readyState")}}-Eigenschaft `DONE`, und das {{domxref("FileReader/loadend_event", "loadend")}}-Ereignis wird ausgelöst. Zu diesem Zeitpunkt enthält die {{domxref("FileReader.result","result")}}-Eigenschaft die rohen Binärdaten aus der Datei.

Beachten Sie, dass diese Methode einmal aus der File API-Spezifikation entfernt wurde, aber für die Rückwärtskompatibilität neu eingeführt wurde. Es wird empfohlen, {{domxref("FileReader.readAsArrayBuffer()")}} zu verwenden.

## Syntax

```js-nolint
readAsBinaryString(blob)
```

### Parameter

- `blob`
  - : Das {{domxref("Blob")}} oder {{domxref("File")}}, aus dem gelesen werden soll.

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

- {{domxref("FileReader")}}

---
title: "FileReader: Methode readAsArrayBuffer()"
short-title: readAsArrayBuffer()
slug: Web/API/FileReader/readAsArrayBuffer
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`readAsArrayBuffer()`**-Methode der {{domxref("FileReader")}}-Schnittstelle wird verwendet, um mit dem Lesen des Inhalts eines angegebenen {{domxref("Blob")}} oder {{domxref("File")}} zu beginnen. Wenn der Lesevorgang abgeschlossen ist, wird die Eigenschaft {{domxref("FileReader.readyState","readyState")}} auf `DONE` gesetzt und das {{domxref("FileReader/loadend_event", "loadend")}}-Ereignis wird ausgelöst. Zu diesem Zeitpunkt enthält die Eigenschaft {{domxref("FileReader.result","result")}} ein {{jsxref("ArrayBuffer")}}, das die Daten der Datei darstellt.

> [!NOTE]
> Die Methode {{domxref("Blob.arrayBuffer()")}} ist eine neuere, auf Versprechen basierende API, um eine Datei als ArrayBuffer zu lesen.

## Syntax

```js-nolint
readAsArrayBuffer(blob)
```

### Parameter

- `blob`
  - : Das {{domxref("Blob")}} oder {{domxref("File")}}, aus dem gelesen werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("FileReader")}}

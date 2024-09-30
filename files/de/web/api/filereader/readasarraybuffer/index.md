---
title: "FileReader: Methode readAsArrayBuffer()"
short-title: readAsArrayBuffer()
slug: Web/API/FileReader/readAsArrayBuffer
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`readAsArrayBuffer()`**-Methode des [`FileReader`](/de/docs/Web/API/FileReader)-Interfaces wird verwendet, um das Lesen des Inhalts eines angegebenen [`Blob`](/de/docs/Web/API/Blob) oder einer [`File`](/de/docs/Web/API/File) zu starten. Wenn der Lesevorgang abgeschlossen ist, wird die [`readyState`](/de/docs/Web/API/FileReader/readyState)-Eigenschaft `DONE`, und das [`loadend`](/de/docs/Web/API/FileReader/loadend_event)-Ereignis wird ausgelöst. Zu diesem Zeitpunkt enthält die [`result`](/de/docs/Web/API/FileReader/result)-Eigenschaft ein {{jsxref("ArrayBuffer")}}, das die Daten der Datei darstellt.

> [!NOTE]
> Die [`Blob.arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer)-Methode ist eine neuere, auf Versprechen basierende API, um eine Datei als ArrayBuffer zu lesen.

## Syntax

```js-nolint
readAsArrayBuffer(blob)
```

### Parameter

- `blob`
  - : Der [`Blob`](/de/docs/Web/API/Blob) oder die [`File`](/de/docs/Web/API/File), aus dem/der gelesen werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FileReader`](/de/docs/Web/API/FileReader)

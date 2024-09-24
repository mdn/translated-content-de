---
title: "FileReader: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/FileReader/readyState
l10n:
  sourceCommit: e932acf254c5dd06e26798b9d8fe01ce8dab1fb7
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`readyState`**-Eigenschaft der {{domxref("FileReader")}}-Schnittstelle gibt den aktuellen Status des Lesevorgangs an.
Dies wird einer der folgenden Zustände sein: `EMPTY`, `LOADING` oder `DONE`.

## Wert

Eine Zahl, die einer der drei möglichen Zustandskonstanten ist, die auf der {{domxref("FileReader")}}-Schnittstelle definiert sind:

- `FileReader.EMPTY` (0)
  - : Der Reader wurde erstellt, aber keine der Lesemethoden wurde bisher aufgerufen.
- `FileReader.LOADING` (1)
  - : Eine Lesemethode wurde aufgerufen. Eine {{domxref("File")}} oder ein {{domxref("Blob")}} wird gelesen, und es ist noch kein Fehler aufgetreten.
- `FileReader.DONE` (2)
  - : Der Lesevorgang ist abgeschlossen. Dies könnte bedeuten, dass: die gesamte {{domxref("File")}} oder der gesamte {{domxref("Blob")}} in den Speicher gelesen wurde, ein Lesefehler aufgetreten ist, oder {{domxref("FileReader.abort()", "abort()")}} aufgerufen wurde und der Lesevorgang abgebrochen wurde.

## Beispiele

```js
const reader = new FileReader();
console.log("EMPTY", reader.readyState); // readyState wird 0 sein

reader.readAsText(blob);
console.log("LOADING", reader.readyState); // readyState wird 1 sein

reader.onloadend = () => {
  console.log("DONE", reader.readyState); // readyState wird 2 sein
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Blob")}}

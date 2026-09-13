---
title: "FileReader: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/FileReader/readyState
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`readyState`** schreibgeschützte Eigenschaft des [`FileReader`](/de/docs/Web/API/FileReader)-Interfaces gibt den aktuellen Zustand des Lesevorgangs an.
Dies wird einer der folgenden Zustände sein: `EMPTY`, `LOADING` oder `DONE`.

## Wert

Eine Zahl, die einer der drei möglichen Zustandskonstanten ist, die im [`FileReader`](/de/docs/Web/API/FileReader)-Interface definiert sind:

- `FileReader.EMPTY` (0)
  - : Der Leser wurde erstellt, aber keine der Lese-Methoden wurde bisher aufgerufen.
- `FileReader.LOADING` (1)
  - : Eine Lese-Methode wurde aufgerufen. Eine [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) wird gelesen und es ist noch kein Fehler aufgetreten.
- `FileReader.DONE` (2)
  - : Der Lesevorgang ist abgeschlossen. Dies kann bedeuten, dass die gesamte [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) in den Speicher gelesen wurde, ein Dateilesefehler aufgetreten ist, oder [`abort()`](/de/docs/Web/API/FileReader/abort) aufgerufen wurde und das Lesen abgebrochen wurde.

## Beispiele

```js
const reader = new FileReader();
console.log("EMPTY", reader.readyState); // readyState will be 0

reader.readAsText(blob);
console.log("LOADING", reader.readyState); // readyState will be 1

reader.onloadend = () => {
  console.log("DONE", reader.readyState); // readyState will be 2
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Blob`](/de/docs/Web/API/Blob)

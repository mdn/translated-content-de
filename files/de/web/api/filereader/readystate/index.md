---
title: "FileReader: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/FileReader/readyState
l10n:
  sourceCommit: e932acf254c5dd06e26798b9d8fe01ce8dab1fb7
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`readyState`** des [`FileReader`](/de/docs/Web/API/FileReader)-Interfaces gibt den aktuellen Status des Lesevorgangs an. Dies wird einer der folgenden Zustände sein: `EMPTY`, `LOADING` oder `DONE`.

## Wert

Eine Zahl, die einer der drei möglichen Statuskonstanten ist, die im [`FileReader`](/de/docs/Web/API/FileReader)-Interface definiert sind:

- `FileReader.EMPTY` (0)
  - : Der Reader wurde erstellt, aber keine der Lesemethoden wurde bisher aufgerufen.
- `FileReader.LOADING` (1)
  - : Eine Lesemethode wurde aufgerufen. Eine [`File`](/de/docs/Web/API/File) oder ein [`Blob`](/de/docs/Web/API/Blob) wird gelesen, und es ist noch kein Fehler aufgetreten.
- `FileReader.DONE` (2)
  - : Der Lesevorgang ist abgeschlossen. Dies könnte bedeuten: die gesamte [`File`](/de/docs/Web/API/File) oder der [`Blob`](/de/docs/Web/API/Blob) wurde in den Speicher gelesen, ein Datei-Lese-Fehler ist aufgetreten, oder [`abort()`](/de/docs/Web/API/FileReader/abort) wurde aufgerufen und das Lesen wurde abgebrochen.

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

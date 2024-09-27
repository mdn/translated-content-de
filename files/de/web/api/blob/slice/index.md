---
title: "Blob: slice() Methode"
short-title: slice()
slug: Web/API/Blob/slice
l10n:
  sourceCommit: 84a9afd94f497d4173bde131731ef6bdf0b6135d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`slice()`** Methode des [`Blob`](/de/docs/Web/API/Blob) Interfaces erzeugt und gibt ein neues `Blob` Objekt zurück, das Daten aus einem Teil des Blobs enthält, auf dem sie aufgerufen wird.

## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
slice(start, end, contentType)
```

### Parameter

- `start` {{optional_inline}}
  - : Ein Index in das [`Blob`](/de/docs/Web/API/Blob), der das erste Byte angibt, das in das neue [`Blob`](/de/docs/Web/API/Blob) einbezogen wird. Wenn Sie einen negativen Wert angeben, wird dieser als Versatz vom Ende des [`Blob`](/de/docs/Web/API/Blob) zum Anfang behandelt. Zum Beispiel wäre -10 das 10. Byte vom Ende im [`Blob`](/de/docs/Web/API/Blob). Der Standardwert ist 0. Wenn Sie einen Wert für `start` angeben, der größer ist als die Größe des Quell-[`Blob`](/de/docs/Web/API/Blob), hat das zurückgegebene [`Blob`](/de/docs/Web/API/Blob) die Größe 0 und enthält keine Daten.
- `end` {{optional_inline}}
  - : Ein Index in das [`Blob`](/de/docs/Web/API/Blob), der das erste Byte angibt, das _nicht_ in das neue [`Blob`](/de/docs/Web/API/Blob) einbezogen wird (d.h. das Byte genau an diesem Index wird nicht einbezogen). Wenn Sie einen negativen Wert angeben, wird dieser als Versatz vom Ende des [`Blob`](/de/docs/Web/API/Blob) zum Anfang behandelt. Zum Beispiel wäre -10 das 10. Byte vom Ende im [`Blob`](/de/docs/Web/API/Blob). Der Standardwert ist `size`.
- `contentType` {{optional_inline}}
  - : Der Inhaltstyp, der dem neuen [`Blob`](/de/docs/Web/API/Blob) zugewiesen wird; dies wird der Wert seiner `type` Eigenschaft sein. Der Standardwert ist ein leerer String.

### Rückgabewert

Ein neues [`Blob`](/de/docs/Web/API/Blob) Objekt, das die angegebene Teilmenge der in dem Blob enthaltenen Daten enthält, auf dem diese Methode aufgerufen wurde. Das ursprüngliche Blob wird nicht verändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Blob`](/de/docs/Web/API/Blob)
- [Verwenden von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)

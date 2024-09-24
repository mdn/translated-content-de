---
title: "Blob: slice()-Methode"
short-title: slice()
slug: Web/API/Blob/slice
l10n:
  sourceCommit: 84a9afd94f497d4173bde131731ef6bdf0b6135d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`slice()`**-Methode der {{domxref("Blob")}}-Schnittstelle erstellt und gibt ein neues `Blob`-Objekt zurück, das Daten aus einem Teilbereich des Blobs enthält, auf dem es aufgerufen wurde.

## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
slice(start, end, contentType)
```

### Parameter

- `start` {{optional_inline}}
  - : Ein Index in das {{domxref("Blob")}}, der das erste Byte angibt, das im neuen {{domxref("Blob")}} enthalten sein soll. Wenn Sie einen negativen Wert angeben, wird dieser als Offset vom Ende des {{domxref("Blob")}} zum Anfang hin behandelt. Zum Beispiel wäre -10 das 10. Byte vom Ende im {{domxref("Blob")}}. Der Standardwert ist 0. Wenn Sie einen Wert für `start` angeben, der größer ist als die Größe des Quell-{{domxref("Blob")}}, hat das zurückgegebene {{domxref("Blob")}} die Größe 0 und enthält keine Daten.
- `end` {{optional_inline}}
  - : Ein Index in das {{domxref("Blob")}}, der das erste Byte angibt, das _nicht_ im neuen {{domxref("Blob")}} enthalten sein wird (d.h. das Byte genau an diesem Index ist nicht enthalten). Wenn Sie einen negativen Wert angeben, wird dieser als Offset vom Ende des {{domxref("Blob")}} zum Anfang hin behandelt. Zum Beispiel wäre -10 das 10. Byte vom Ende im {{domxref("Blob")}}. Der Standardwert ist `size`.
- `contentType` {{optional_inline}}
  - : Der Inhaltstyp, der dem neuen {{domxref("Blob")}} zugewiesen werden soll; dies wird der Wert seiner `type`-Eigenschaft sein. Der Standardwert ist ein leerer String.

### Rückgabewert

Ein neues {{domxref("Blob")}}-Objekt, das den angegebenen Teilbereich der Daten enthält, die im Blob enthalten sind, auf dem diese Methode aufgerufen wurde. Das ursprüngliche Blob wird nicht geändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Blob")}}
- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)

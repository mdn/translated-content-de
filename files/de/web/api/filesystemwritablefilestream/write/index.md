---
title: "FileSystemWritableFileStream: write()-Methode"
short-title: write()
slug: Web/API/FileSystemWritableFileStream/write
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`write()`**-Methode des [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Interfaces schreibt Inhalt in die Datei, auf die die Methode aufgerufen wird, an der aktuellen Dateicursor-Position.

Es werden keine Änderungen an der tatsächlichen Datei auf der Festplatte vorgenommen, bis der Stream geschlossen wurde. Änderungen werden stattdessen typischerweise in eine temporäre Datei geschrieben. Diese Methode kann auch verwendet werden, um zu einem bestimmten Bytepunkt im Stream zu springen und zu kürzen, um die Gesamtanzahl der Bytes, die die Datei enthält, zu ändern.

## Syntax

```js-nolint
write(data)
```

### Parameter

- `data`

  - : Kann eines der folgenden sein:

    - Die zu schreibenden Datei-Daten in Form eines {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, [`Blob`](/de/docs/Web/API/Blob) oder eines Strings.
    - Ein Objekt, das die folgenden Eigenschaften enthält:

      - `type`
        - : Ein String, der einer von `"write"`, `"seek"` oder `"truncate"` ist.
      - `data`
        - : Die zu schreibenden Datei-Daten. Kann ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, [`Blob`](/de/docs/Web/API/Blob) oder ein String sein. Diese Eigenschaft ist erforderlich, wenn `type` auf `"write"` gesetzt ist.
      - `position`
        - : Die Byte-Position, zu der der aktuelle Dateicursor wechseln soll, wenn der Typ `"seek"` verwendet wird. Kann auch festgelegt werden, wenn `type` `"write"` ist, in diesem Fall beginnt das Schreiben an der angegebenen Position.
      - `size`
        - : Eine Zahl, die die Anzahl der Bytes darstellt, die der Stream enthalten soll. Diese Eigenschaft ist erforderlich, wenn `type` auf `"truncate"` gesetzt ist.

### Rückgabewert

Ein {{jsxref('Promise')}} , das `undefined` zurückgibt.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) nicht `granted` ist.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die neue Größe der Datei größer als die ursprüngliche Dateigröße ist und das [Speicherlimit](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) des Browsers überschreitet.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `data` undefiniert ist oder wenn `position` oder `size` ungültig sind.

## Beispiele

Die folgende asynchrone Funktion öffnet den 'Speichern unter'-Dialog, der einen [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurückgibt, sobald eine Datei ausgewählt wurde. Daraus wird ein beschreibbarer Stream mithilfe der [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable)-Methode erstellt.

Ein Textstring wird dann in den Stream geschrieben, der anschließend geschlossen wird.

```js
async function saveFile() {
  try {
    // create a new handle
    const newHandle = await window.showSaveFilePicker();

    // create a FileSystemWritableFileStream to write to
    const writableStream = await newHandle.createWritable();

    // write our file
    await writableStream.write("This is my file content");

    // close the file and write the contents to disk.
    await writableStream.close();
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

Die folgenden Beispiele zeigen verschiedene Optionen, die in die `write()`-Methode übergeben werden können.

```js
// just pass in the data (no options)
writableStream.write(data);

// writes the data to the stream from the determined position
writableStream.write({ type: "write", position, data });

// updates the current file cursor offset to the position specified
writableStream.write({ type: "seek", position });

// resizes the file to be size bytes long
writableStream.write({ type: "truncate", size });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

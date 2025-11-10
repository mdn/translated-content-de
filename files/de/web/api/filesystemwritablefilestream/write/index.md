---
title: "FileSystemWritableFileStream: write()-Methode"
short-title: write()
slug: Web/API/FileSystemWritableFileStream/write
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`write()`**-Methode des [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Interfaces schreibt Inhalte in die Datei, auf die die Methode aufgerufen wird, an der aktuellen Dateicursor-Position.

Keine Änderungen werden auf die tatsächliche Datei auf der Festplatte geschrieben, bis der Stream geschlossen wurde. Änderungen werden typischerweise stattdessen in eine temporäre Datei geschrieben. Diese Methode kann auch verwendet werden, um zu einem Byte-Punkt innerhalb des Streams zu suchen und ihn zu kürzen, um die Gesamtanzahl der Bytes, die die Datei enthält, zu ändern.

## Syntax

```js-nolint
write(data)
```

### Parameter

- `data`
  - : Kann eines der folgenden sein:
    - Die Dateidaten, die in Form eines {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, [`Blob`](/de/docs/Web/API/Blob) oder Strings geschrieben werden sollen.
    - Ein Objekt, das die folgenden Eigenschaften enthält:
      - `type`
        - : Ein String, der entweder `"write"`, `"seek"` oder `"truncate"` ist.
      - `data`
        - : Die Dateidaten, die geschrieben werden sollen. Kann ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, [`Blob`](/de/docs/Web/API/Blob) oder String sein. Diese Eigenschaft ist erforderlich, wenn `type` auf `"write"` gesetzt ist.
      - `position`
        - : Die Byte-Position, zu der der aktuelle Dateicursor bewegt werden soll, wenn `type` auf `"seek"` gesetzt ist. Kann auch gesetzt werden, wenn `type` auf `"write"` ist, wobei das Schreiben an der angegebenen Position beginnt.
      - `size`
        - : Eine Zahl, die die Anzahl der Bytes repräsentiert, die der Stream enthalten soll. Diese Eigenschaft ist erforderlich, wenn `type` auf `"truncate"` gesetzt ist.

### Rückgabewert

Ein {{jsxref('Promise')}} das `undefined` zurückgibt.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) nicht `granted` ist.
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Ausgelöst, wenn die neue Größe der Datei größer ist als die ursprüngliche Größe der Datei und das [Speicherlimit](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) des Browsers überschreitet.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn `data` undefiniert ist oder wenn `position` oder `size` ungültig sind.

## Beispiele

Die folgende asynchrone Funktion öffnet den 'Datei speichern'-Picker, der einen [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurückgibt, sobald eine Datei ausgewählt ist. Daraus wird ein schreibbarer Stream erstellt, indem die Methode [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) verwendet wird.

Ein Textstring wird dann in den Stream geschrieben, welcher anschließend geschlossen wird.

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

Die folgenden Beispiele zeigen verschiedene Optionen, die an die `write()`-Methode übergeben werden können.

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

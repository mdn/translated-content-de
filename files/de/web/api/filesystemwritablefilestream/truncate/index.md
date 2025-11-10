---
title: "FileSystemWritableFileStream: truncate() Methode"
short-title: truncate()
slug: Web/API/FileSystemWritableFileStream/truncate
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`truncate()`** Methode der [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Schnittstelle ändert die Größe der Datei, die mit dem Stream verknüpft ist, auf die angegebene Größe in Bytes.

Wenn die angegebene Größe größer als die aktuelle Dateigröße ist, wird die Datei mit `0x00` Bytes aufgefüllt.

Der Dateicursor wird ebenfalls aktualisiert, wenn `truncate()` aufgerufen wird. Wenn der Offset kleiner als die Größe ist, bleibt er unverändert. Ist der Offset größer als die Größe, wird der Offset auf diese Größe gesetzt. Dies stellt sicher, dass nachfolgende Schreibvorgänge keine Fehler erzeugen.

Keine Änderungen werden auf die tatsächliche Datei auf dem Datenträger geschrieben, bis der Stream geschlossen wurde. Änderungen werden typischerweise in einer temporären Datei geschrieben.

## Syntax

```js-nolint
truncate(size)
```

### Parameter

- `size`
  - : Eine Zahl, die angibt, auf wie viele Bytes der Stream verkleinert werden soll.

### Rückgabewert

Ein {{jsxref('Promise')}}, der `undefined` zurückgibt.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) nicht `granted` ist.
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Wird ausgelöst, wenn die neue Größe der Datei größer als die ursprüngliche Größe der Datei ist und das [Speicherlimit](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) des Browsers überschreitet.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `size` keine Zahl oder nicht definiert ist.

## Beispiele

Die folgende asynchrone Funktion öffnet den 'Datei speichern' Dialog, der einen [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurückgibt, sobald eine Datei ausgewählt wurde. Daraus wird ein beschreibbarer Stream mit Hilfe der Methode [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) erstellt.

Anschließend schreiben wir in den Stream:

1. Ein Textstring wird in den Stream geschrieben.
2. Die `truncate()` Methode wird verwendet, um die Datei auf 8 Bytes zu verkleinern.
3. Ein zweiter Textstring wird an den Anfang des Streams geschrieben und überschreibt den ersten Schreibvorgang.

Der Stream wird dann geschlossen.

```js
async function saveFile() {
  try {
    // create a new handle
    const newHandle = await window.showSaveFilePicker();

    // create a FileSystemWritableFileStream to write to
    const writableStream = await newHandle.createWritable();

    // write our file
    await writableStream.write("This is my first file content");
    await writableStream.truncate(8);
    await writableStream.write("my second file content");

    // close the file and write the contents to disk.
    await writableStream.close();
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

Wenn Sie die obige Funktion ausführen und dann die resultierende Datei auf der Festplatte öffnen, sollten Sie den Text "This is my second file content" sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Dateisystem-API](/de/docs/Web/API/File_System_API)
- [Die File System Access API: Vereinfachter Zugriff auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

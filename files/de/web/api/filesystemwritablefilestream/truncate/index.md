---
title: "FileSystemWritableFileStream: truncate()-Methode"
short-title: truncate()
slug: Web/API/FileSystemWritableFileStream/truncate
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`truncate()`**-Methode der [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Schnittstelle ändert die Größe der mit dem Stream verbundenen Datei auf die angegebene Größe in Bytes.

Wenn die angegebene Größe größer ist als die aktuelle Dateigröße, wird die Datei mit `0x00`-Bytes aufgefüllt.

Der Dateicursor wird ebenfalls aktualisiert, wenn `truncate()` aufgerufen wird. Wenn der Offset kleiner als die Größe ist, bleibt er unverändert. Wenn der Offset größer als die Größe ist, wird der Offset auf diese Größe gesetzt. Dies stellt sicher, dass nachfolgende Schreibvorgänge keinen Fehler verursachen.

Es werden keine Änderungen tatsächlich auf die Datei auf dem Datenträger geschrieben, bis der Stream geschlossen wurde. Änderungen werden typischerweise stattdessen in eine temporäre Datei geschrieben.

## Syntax

```js-nolint
truncate(size)
```

### Parameter

- `size`
  - : Eine Zahl, die die Anzahl der Bytes angibt, auf die der Stream verkleinert werden soll.

### Rückgabewert

Ein {{jsxref('Promise')}}, das `undefined` zurückgibt.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) nicht `granted` ist.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die neue Größe der Datei größer ist als die ursprüngliche Dateigröße und das Speicherlimit des Browsers überschreitet [Speicherquota](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `size` keine Zahl ist oder nicht definiert wurde.

## Beispiele

Die folgende asynchrone Funktion öffnet den 'Datei speichern'-Auswahldialog, der einen [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurückgibt, sobald eine Datei ausgewählt wurde. Daraus wird ein beschreibbarer Stream unter Verwendung der [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable)-Methode erstellt.

Anschließend schreiben wir in den Stream:

1. Ein Textstring wird in den Stream geschrieben.
2. Die `truncate()`-Methode wird verwendet, um die Datei auf 8 Bytes zu verkleinern.
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

Wenn Sie die obige Funktion ausführen und dann die resultierende Datei, die auf dem Datenträger erstellt wurde, öffnen, sollten Sie den Text "This is my second file content" sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

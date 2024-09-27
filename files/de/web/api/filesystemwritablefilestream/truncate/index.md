---
title: "FileSystemWritableFileStream: truncate()-Methode"
short-title: truncate()
slug: Web/API/FileSystemWritableFileStream/truncate
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`truncate()`**-Methode der [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Schnittstelle verändert die Größe der mit dem Stream verbundenen Datei auf die angegebene Größe in Bytes.

Wenn die angegebene Größe größer als die aktuelle Dateigröße ist, wird die Datei mit `0x00` Bytes aufgefüllt.

Der Dateizeiger wird ebenfalls aktualisiert, wenn `truncate()` aufgerufen wird. Wenn der Versatz kleiner als die Größe ist, bleibt er unverändert. Wenn der Versatz größer als die Größe ist, wird der Versatz auf diese Größe gesetzt. Dies stellt sicher, dass nachfolgende Schreibvorgänge nicht fehlschlagen.

Es werden keine Änderungen an der tatsächlichen Datei auf der Festplatte vorgenommen, bis der Stream geschlossen wurde. Änderungen werden in der Regel stattdessen in einer temporären Datei gespeichert.

## Syntax

```js-nolint
truncate(size)
```

### Parameter

- `size`
  - : Eine Zahl, die die Anzahl der Bytes angibt, auf die der Stream umgestellt werden soll.

### Rückgabewert

Ein {{jsxref('Promise')}}, das `undefined` zurückgibt.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) nicht `granted` ist.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die neue Größe der Datei größer als die ursprüngliche Größe ist und das [Speicherquotum](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) des Browsers überschreitet.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `size` keine Zahl ist oder nicht definiert ist.

## Beispiele

Die folgende asynchrone Funktion öffnet den 'Datei speichern'-Auswahldialog, der ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurückgibt, sobald eine Datei ausgewählt wurde. Daraus wird ein beschreibbarer Stream mit der [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable)-Methode erstellt.

Anschließend schreiben wir in den Stream:

1. Ein Textstring wird in den Stream geschrieben.
2. Die `truncate()`-Methode wird verwendet, um die Datei auf 8 Bytes zu verkleinern.
3. Ein zweiter Textstring wird am Anfang des Streams geschrieben, wodurch der erste Schreibvorgang überschrieben wird.

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

- [File System API](/de/docs/Web/API/File_System_API)
- [Das File System Access API: Vereinfachung des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

---
title: "FileSystemWritableFileStream: seek()-Methode"
short-title: seek()
slug: Web/API/FileSystemWritableFileStream/seek
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`seek()`**-Methode der [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Schnittstelle aktualisiert den aktuellen Dateicurser-Offset auf die beim Aufruf der Methode angegebene Position (in Byte).

## Syntax

```js-nolint
seek(position)
```

### Parameter

- `position`
  - : Eine Zahl, die die Byte-Position vom Anfang der Datei angibt.

### Rückgabewert

Ein {{jsxref('Promise')}}, das `undefined` zurückgibt.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) nicht `granted` ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `position` keine Zahl ist oder nicht definiert wurde.

## Beispiele

Die folgende asynchrone Funktion öffnet den 'Datei speichern'-Auswahldialog, der ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurückgibt, sobald eine Datei ausgewählt wurde. Daraus wird mit der Methode [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) ein beschreibbarer Stream erstellt.

Anschließend schreiben wir in den Stream:

1. Eine Textzeichenfolge wird in den Stream geschrieben.
2. Die `seek()`-Methode wird verwendet, um den Cursor an den Anfang des Streams zu setzen.
3. Eine zweite Textzeichenfolge wird an den Anfang des Streams geschrieben und überschreibt das erste Schreiben.

Der Stream wird dann geschlossen.

```js
async function saveFile() {
  try {
    // create a new handle
    const newHandle = await window.showSaveFilePicker();

    // create a FileSystemWritableFileStream to write to
    const writableStream = await newHandle.createWritable();

    // write our file
    await writableStream.write("My first file content");
    await writableStream.seek(0);
    await writableStream.write("My second file content");

    // close the file and write the contents to disk.
    await writableStream.close();
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

Wenn Sie die obige Funktion ausführen und dann die auf der Festplatte erstellte Datei öffnen, sollten Sie den Text "My second file content" sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

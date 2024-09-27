---
title: FileSystemWritableFileStream
slug: Web/API/FileSystemWritableFileStream
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Das **`FileSystemWritableFileStream`**-Interface der [File System API](/de/docs/Web/API/File_System_API) ist ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt mit zusätzlichen Komfortmethoden, das auf einer einzelnen Datei auf der Festplatte arbeitet. Auf das Interface wird über die [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable)-Methode zugegriffen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`WritableStream`](/de/docs/Web/API/WritableStream)._

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`WritableStream`](/de/docs/Web/API/WritableStream)._

- [`FileSystemWritableFileStream.write()`](/de/docs/Web/API/FileSystemWritableFileStream/write)
  - : Schreibt Inhalt in die Datei, auf die die Methode aufgerufen wird, an der aktuellen Datei-Cursor-Position.
- [`FileSystemWritableFileStream.seek()`](/de/docs/Web/API/FileSystemWritableFileStream/seek)
  - : Aktualisiert die aktuelle Datei-Cursor-Position auf die angegebene Position (in Bytes).
- [`FileSystemWritableFileStream.truncate()`](/de/docs/Web/API/FileSystemWritableFileStream/truncate)
  - : Passt die Größe der mit dem Stream verknüpften Datei auf die angegebene Größe in Bytes an.

## Beispiele

Die folgende asynchrone Funktion öffnet den 'Datei speichern'-Auswahldialog, der einen [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurückgibt, sobald eine Datei ausgewählt wurde. Daraus wird ein beschreibbarer Stream mit der [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable)-Methode erstellt.

Ein Textstring wird dann in den Stream geschrieben, welcher anschließend geschlossen wird.

```js
async function saveFile() {
  // create a new handle
  const newHandle = await window.showSaveFilePicker();

  // create a FileSystemWritableFileStream to write to
  const writableStream = await newHandle.createWritable();

  // write our file
  await writableStream.write("This is my file content");

  // close the file and write the contents to disk.
  await writableStream.close();
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

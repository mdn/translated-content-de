---
title: "FileSystemWritableFileStream: Methode seek()"
short-title: seek()
slug: Web/API/FileSystemWritableFileStream/seek
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`seek()`**-Methode der Schnittstelle {{domxref("FileSystemWritableFileStream")}} aktualisiert den aktuellen Dateizeiger-Versatz auf die beim Aufruf der Methode angegebene Position (in Bytes).

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

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn {{domxref('PermissionStatus.state')}} nicht `granted` ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `position` keine Zahl oder nicht definiert ist.

## Beispiele

Die folgende asynchrone Funktion öffnet den 'Datei speichern'-Auswahldialog, der ein {{domxref('FileSystemFileHandle')}} zurückgibt, sobald eine Datei ausgewählt wurde. Daraus wird ein schreibbarer Stream mit der Methode {{domxref('FileSystemFileHandle.createWritable()')}} erstellt.

Dann schreiben wir in den Stream:

1. Ein Textstring wird in den Stream geschrieben.
2. Die Methode `seek()` wird verwendet, um den Cursor an den Anfang des Streams zu setzen.
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

Wenn Sie die obige Funktion ausführen und dann die erstellte Datei auf der Festplatte öffnen, sollten Sie den Text "My second file content" sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

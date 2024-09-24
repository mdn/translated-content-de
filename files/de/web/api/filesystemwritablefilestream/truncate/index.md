---
title: "FileSystemWritableFileStream: truncate()-Methode"
short-title: truncate()
slug: Web/API/FileSystemWritableFileStream/truncate
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`truncate()`**-Methode des {{domxref("FileSystemWritableFileStream")}}-Interfaces ändert die Größe der mit dem Stream verbundenen Datei auf die angegebene Größe in Bytes.

Wenn die angegebene Größe größer als die aktuelle Dateigröße ist, wird die Datei mit `0x00` Bytes aufgefüllt.

Der Datei-Cursor wird ebenfalls aktualisiert, wenn `truncate()` aufgerufen wird. Wenn der Offset kleiner als die Größe ist, bleibt er unverändert. Wenn der Offset größer als die Größe ist, wird der Offset auf diese Größe gesetzt. Dies stellt sicher, dass nachfolgende Schreibvorgänge keinen Fehler verursachen.

Es werden keine Änderungen an der tatsächlichen Datei auf der Festplatte vorgenommen, bis der Stream geschlossen wurde. Änderungen werden typischerweise stattdessen in eine temporäre Datei geschrieben.

## Syntax

```js-nolint
truncate(size)
```

### Parameter

- `size`
  - : Eine Zahl, die die Anzahl der Bytes angibt, auf die der Stream verkleinert werden soll.

### Rückgabewert

Ein {{jsxref('Promise')}}, der `undefined` zurückgibt.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn {{domxref('PermissionStatus.state')}} nicht `granted` ist.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die neue Dateigröße größer als die ursprüngliche Dateigröße ist und das [Speicherlimit](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) des Browsers überschreitet.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `size` keine Zahl ist oder nicht definiert wurde.

## Beispiele

Die folgende asynchrone Funktion öffnet den 'Speichern unter'-Dialog, der einen {{domxref('FileSystemFileHandle')}} zurückgibt, sobald eine Datei ausgewählt wurde. Daraus wird ein beschreibbarer Stream erstellt, indem die {{domxref('FileSystemFileHandle.createWritable()')}}-Methode verwendet wird.

Als nächstes schreiben wir in den Stream:

1. Ein Textstring wird in den Stream geschrieben.
2. Die `truncate()`-Methode wird verwendet, um die Datei auf 8 Bytes zu verkleinern.
3. Ein zweiter Textstring wird am Anfang des Streams geschrieben und überschreibt den ersten Schreibvorgang.

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

Wenn Sie die oben stehende Funktion ausführen und dann die resultierende Datei öffnen, die auf der Festplatte erstellt wurde, sollten Sie den Text "This is my second file content" sehen.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

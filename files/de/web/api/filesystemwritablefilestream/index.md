---
title: FileSystemWritableFileStream
slug: Web/API/FileSystemWritableFileStream
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`FileSystemWritableFileStream`** Schnittstelle der {{domxref("File System API", "File System API", "", "nocode")}} ist ein {{domxref('WritableStream')}} Objekt mit zusätzlichen Komfortmethoden, das auf einer einzigen Datei auf der Festplatte arbeitet. Auf die Schnittstelle wird über die Methode {{domxref('FileSystemFileHandle.createWritable()')}} zugegriffen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von ihrem Elternteil, {{DOMxRef("WritableStream")}}._

## Instanzmethoden

_Erbt Methoden von ihrem Elternteil, {{DOMxRef("WritableStream")}}._

- {{domxref('FileSystemWritableFileStream.write()')}}
  - : Schreibt Inhalte in die Datei, auf der die Methode aufgerufen wird, bei der aktuellen Dateizeigerposition.
- {{domxref('FileSystemWritableFileStream.seek()')}}
  - : Aktualisiert die aktuelle Dateizeigerposition auf die angegebene Position (in Bytes).
- {{domxref('FileSystemWritableFileStream.truncate()')}}
  - : Ändert die Größe der Datei, die mit dem Stream verbunden ist, auf die angegebene Größe in Bytes.

## Beispiele

Die folgende asynchrone Funktion öffnet den 'Datei speichern'-Auswahldialog, der einen {{domxref('FileSystemFileHandle')}} zurückgibt, sobald eine Datei ausgewählt wurde. Daraus wird ein beschreibbarer Stream mit der Methode {{domxref('FileSystemFileHandle.createWritable()')}} erstellt.

Ein Textstring wird dann in den Stream geschrieben, der anschließend geschlossen wird.

```js
async function saveFile() {
  // erstellen Sie einen neuen Handle
  const newHandle = await window.showSaveFilePicker();

  // erstellen Sie einen FileSystemWritableFileStream zum Schreiben
  const writableStream = await newHandle.createWritable();

  // schreiben Sie unsere Datei
  await writableStream.write("This is my file content");

  // schließen Sie die Datei und schreiben Sie die Inhalte auf die Festplatte.
  await writableStream.close();
}
```

Die folgenden Beispiele zeigen verschiedene Optionen, die in die `write()` Methode übergeben werden können.

```js
// einfach die Daten übergeben (keine Optionen)
writableStream.write(data);

// schreibt die Daten aus der ermittelten Position in den Stream
writableStream.write({ type: "write", position, data });

// aktualisiert die aktuelle Dateizeigerposition auf die angegebene Position
writableStream.write({ type: "seek", position });

// ändert die Größe der Datei auf die Länge von size Bytes
writableStream.write({ type: "truncate", size });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [Das File System Access API: Zugriff auf lokale Dateien vereinfachen](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

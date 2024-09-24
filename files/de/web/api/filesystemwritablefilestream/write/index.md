---
title: "FileSystemWritableFileStream: write()-Methode"
short-title: write()
slug: Web/API/FileSystemWritableFileStream/write
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`write()`**-Methode der {{domxref("FileSystemWritableFileStream")}}-Schnittstelle schreibt Inhalte in die Datei, auf die die Methode angewendet wird, an der aktuellen Dateicursor-Position.

Es werden keine Änderungen auf der tatsächlichen Datei auf dem Datenträger gespeichert, bis der Stream geschlossen wurde. Änderungen werden stattdessen normalerweise in eine temporäre Datei geschrieben. Diese Methode kann auch verwendet werden, um zu einem bestimmten Bytepunkt im Stream zu springen und zu kürzen, um die Gesamtanzahl an Bytes, die die Datei enthält, zu ändern.

## Syntax

```js-nolint
write(data)
```

### Parameter

- `data`

  - : Kann eines der folgenden sein:

    - Die Dateidaten, die geschrieben werden sollen, in Form eines {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, {{domxref('Blob')}}, oder eines Strings.
    - Ein Objekt mit den folgenden Eigenschaften:

      - `type`
        - : Ein String, der einer von `"write"`, `"seek"` oder `"truncate"` ist.
      - `data`
        - : Die Dateidaten, die geschrieben werden sollen. Kann ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, {{domxref('Blob')}}, oder ein String sein. Diese Eigenschaft ist erforderlich, wenn `type` auf `"write"` gesetzt ist.
      - `position`
        - : Die Byteposition, zu der der aktuelle Dateicursor springen soll, wenn `type` `"seek"` verwendet wird. Kann auch gesetzt werden, wenn `type` `"write"` ist, wobei in diesem Fall das Schreiben an der angegebenen Position beginnt.
      - `size`
        - : Eine Zahl, die die Anzahl der Bytes darstellt, die der Stream enthalten soll. Diese Eigenschaft ist erforderlich, wenn `type` auf `"truncate"` gesetzt ist.

### Rückgabewert

Ein {{jsxref('Promise')}}, das `undefined` zurückgibt.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn {{domxref('PermissionStatus.state')}} nicht `granted` ist.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die neue Größe der Datei größer ist als die ursprüngliche Größe der Datei und das Speicherkontingent des Browsers überschreitet [storage quota](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `data` undefiniert ist, oder wenn `position` oder `size` ungültig sind.

## Beispiele

Die folgende asynchrone Funktion öffnet den 'Datei speichern'-Auswahldialog, der ein {{domxref('FileSystemFileHandle')}} zurückgibt, wenn eine Datei ausgewählt wurde. Daraus wird ein beschreibbarer Stream mit der Methode {{domxref('FileSystemFileHandle.createWritable()')}} erstellt.

Ein Textstring wird dann in den Stream geschrieben, der anschließend geschlossen wird.

```js
async function saveFile() {
  try {
    // Erstellen eines neuen Handles
    const newHandle = await window.showSaveFilePicker();

    // Erstellen eines FileSystemWritableFileStream zum Schreiben
    const writableStream = await newHandle.createWritable();

    // Schreiben unserer Datei
    await writableStream.write("This is my file content");

    // Schließen der Datei und Schreiben des Inhalts auf die Festplatte
    await writableStream.close();
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

Die folgenden Beispiele zeigen verschiedene Optionen, die in die `write()`-Methode übergeben werden können.

```js
// Einfach die Daten übergeben (keine Optionen)
writableStream.write(data);

// Schreibt die Daten ab der bestimmten Position in den Stream
writableStream.write({ type: "write", position, data });

// Aktualisiert den aktuellen Dateicursor-Versatz auf die angegebene Position
writableStream.write({ type: "seek", position });

// Verkleinert die Datei auf eine Länge von size Bytes
writableStream.write({ type: "truncate", size });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

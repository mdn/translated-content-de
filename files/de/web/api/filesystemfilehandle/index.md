---
title: FileSystemFileHandle
slug: Web/API/FileSystemFileHandle
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Das **`FileSystemFileHandle`**-Interface der {{domxref("File System API", "File System API", "", "nocode")}} stellt einen Verweis auf einen Eintrag im Dateisystem dar. Auf das Interface wird über die Methode {{domxref('window.showOpenFilePicker()')}} zugegriffen.

Beachten Sie, dass Lese- und Schreibvorgänge von Dateizugriffsberechtigungen abhängig sind, die nach einem Seitenneuladen nicht mehr bestehen, wenn keine weiteren Tabs für diesen Ursprung geöffnet bleiben. Die Methode {{domxref("FileSystemHandle.queryPermission()", "queryPermission")}} des {{domxref("FileSystemHandle")}}-Interfaces kann verwendet werden, um den Berechtigungszustand zu überprüfen, bevor auf eine Datei zugegriffen wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von der übergeordneten Schnittstelle, {{DOMxRef("FileSystemHandle")}}._

## Instanz-Methoden

_Erbt Methoden von der übergeordneten Schnittstelle, {{DOMxRef("FileSystemHandle")}}._

- {{domxref('FileSystemFileHandle.getFile', 'getFile()')}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das zu einem {{domxref('File')}}-Objekt aufgelöst wird, das den Zustand auf der Festplatte des durch die Verweisung repräsentierten Eintrags darstellt.
- {{domxref('FileSystemFileHandle.createSyncAccessHandle', 'createSyncAccessHandle()')}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das zu einem {{domxref('FileSystemSyncAccessHandle')}}-Objekt aufgelöst wird, das zum synchronen Lesen von und Schreiben in eine Datei verwendet werden kann. Die synchrone Natur dieser Methode bringt Leistungsverbesserungen mit sich, ist aber nur innerhalb von dedizierten [Web Workern](/de/docs/Web/API/Web_Workers_API) nutzbar.
- {{domxref('FileSystemFileHandle.createWritable', 'createWritable()')}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das zu einem neu erstellten {{domxref('FileSystemWritableFileStream')}}-Objekt aufgelöst wird, das zum Schreiben in eine Datei verwendet werden kann.

## Beispiele

### Lesen einer Datei

Die folgende asynchrone Funktion zeigt einen Dateiauswahldialog an und verwendet, nachdem eine Datei ausgewählt wurde, die `getFile()`-Methode, um den Inhalt abzurufen.

```js
async function getTheFile() {
  const pickerOpts = {
    types: [
      {
        description: "Images",
        accept: {
          "image/*": [".png", ".gif", ".jpeg", ".jpg"],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
  };

  // open file picker
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
  // get file contents
  const fileData = await fileHandle.getFile();
  return fileData;
}
```

### Schreiben einer Datei

Die folgende asynchrone Funktion schreibt den angegebenen Inhalt in den Dateihandle und damit auf die Festplatte.

```js
async function writeFile(fileHandle, contents) {
  // Create a FileSystemWritableFileStream to write to.
  const writable = await fileHandle.createWritable();

  // Write the contents of the file to the stream.
  await writable.write(contents);

  // Close the file and write the contents to disk.
  await writable.close();
}
```

### Synchrones Lesen und Schreiben einer Datei

Die folgende asynchrone Ereignisbehandlungsfunktion befindet sich innerhalb eines Web Workers. Bei Empfang einer Nachricht von dem Hauptthread wird sie:

- Erstellt einen synchronen Dateizugriffs-Handle.
- Ermittelt die Größe der Datei und erstellt einen {{jsxref("ArrayBuffer")}}, um sie zu enthalten.
- Liest den Dateiinhalt in den Puffer.
- Kodiert die Nachricht und schreibt sie an das Ende der Datei.
- Sichert die Änderungen auf der Festplatte und schließt den Zugriffs-Handle.

```js
onmessage = async (e) => {
  // Retrieve message sent to work from main script
  const message = e.data;

  // Get handle to draft file
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // Get sync access handle
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // Get size of the file.
  const fileSize = accessHandle.getSize();
  // Read file content to a buffer.
  const buffer = new DataView(new ArrayBuffer(fileSize));
  const readBuffer = accessHandle.read(buffer, { at: 0 });

  // Write the message to the end of the file.
  const encoder = new TextEncoder();
  const encodedMessage = encoder.encode(message);
  const writeBuffer = accessHandle.write(encodedMessage, { at: readBuffer });

  // Persist changes to disk.
  accessHandle.flush();

  // Always close FileSystemSyncAccessHandle if done.
  accessHandle.close();
};
```

> [!NOTE]
> In früheren Versionen der Spezifikation wurden {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}, {{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}, {{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}} und {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Alle aktuellen Browser, die diese Methoden unterstützen, implementieren sie jedoch als synchrone Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

---
title: FileSystemFileHandle
slug: Web/API/FileSystemFileHandle
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`FileSystemFileHandle`**-Schnittstelle der [File System API](/de/docs/Web/API/File_System_API) repräsentiert ein Handle zu einem Dateisystemeintrag. Die Schnittstelle wird über die Methode [`window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) aufgerufen.

Beachten Sie, dass Lese- und Schreiboperationen von Dateizugriffsberechtigungen abhängen, die nach einem Seiten-Refresh nicht bestehen bleiben, wenn keine weiteren Tabs für diesen Ursprung geöffnet bleiben. Die [`queryPermission`](/de/docs/Web/API/FileSystemHandle/queryPermission)-Methode der [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Schnittstelle kann genutzt werden, um den Berechtigungsstatus zu überprüfen, bevor auf eine Datei zugegriffen wird.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)._

## Instanzmethoden

_Erbt Methoden von ihrem Elternteil, [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)._

- [`getFile()`](/de/docs/Web/API/FileSystemFileHandle/getFile)
  - : Gibt ein {{jsxref('Promise')}} zurück, das zu einem [`File`](/de/docs/Web/API/File)-Objekt aufgelöst wird und den Zustand auf der Festplatte des durch das Handle dargestellten Eintrags repräsentiert.
- [`createSyncAccessHandle()`](/de/docs/Web/API/FileSystemFileHandle/createSyncAccessHandle)
  - : Gibt ein {{jsxref('Promise')}} zurück, das zu einem [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Objekt aufgelöst wird, welches genutzt werden kann, um synchron von einer Datei zu lesen und zu schreiben. Die synchrone Natur dieser Methode bietet Leistungsvorteile, kann jedoch nur innerhalb dedizierter [Web Workers](/de/docs/Web/API/Web_Workers_API) genutzt werden.
- [`createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable)
  - : Gibt ein {{jsxref('Promise')}} zurück, das zu einem neu erstellten [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Objekt aufgelöst wird, das genutzt werden kann, um in eine Datei zu schreiben.

## Beispiele

### Lesen einer Datei

Die folgende asynchrone Funktion zeigt einen Dateiauswahldialog an und nutzt die Methode `getFile()`, um den Inhalt abzurufen, sobald eine Datei ausgewählt wurde.

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

### Schreiben in eine Datei

Die folgende asynchrone Funktion schreibt den angegebenen Inhalt in das Datei-Handle und somit auf die Festplatte.

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

Der folgende asynchrone Ereignishandler befindet sich innerhalb eines Web Workers. Beim Empfang einer Nachricht vom Hauptthread:

- Erstellt er ein synchrones Dateizugriffshandle.
- Holt die Größe der Datei und erstellt einen {{jsxref("ArrayBuffer")}}, um diese zu speichern.
- Liest den Dateiinhalte in den Buffer.
- Kodiert die Nachricht und schreibt sie ans Ende der Datei.
- Speichert die Änderungen auf der Festplatte und schließt das Zugriffshandle.

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
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Alle aktuellen Browser, die diese Methoden unterstützen, implementieren sie jedoch als synchrone Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

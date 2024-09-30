---
title: FileSystemFileHandle
slug: Web/API/FileSystemFileHandle
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`FileSystemFileHandle`**-Schnittstelle der [File System API](/de/docs/Web/API/File_System_API) repräsentiert einen Verweis auf einen Dateisystemeintrag. Auf die Schnittstelle wird über die Methode [`window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) zugegriffen.

Beachten Sie, dass Lese- und Schreiboperationen von Dateizugriffsberechtigungen abhängen, die nach einem Neuladen der Seite nicht mehr bestehen, wenn keine anderen Tabs für diesen Ursprung geöffnet bleiben. Die [`queryPermission`](/de/docs/Web/API/FileSystemHandle/queryPermission)-Methode der [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Schnittstelle kann verwendet werden, um den Berechtigungsstatus zu überprüfen, bevor auf eine Datei zugegriffen wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)._

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)._

- [`getFile()`](/de/docs/Web/API/FileSystemFileHandle/getFile)
  - : Gibt ein {{jsxref('Promise')}} zurück, das sich zu einem [`File`](/de/docs/Web/API/File) Objekt auflöst,
    welches den Zustand auf der Festplatte des durch den Handle dargestellten Eintrags darstellt.
- [`createSyncAccessHandle()`](/de/docs/Web/API/FileSystemFileHandle/createSyncAccessHandle)
  - : Gibt ein {{jsxref('Promise')}} zurück, das sich zu einem [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) Objekt auflöst,
    welches verwendet werden kann, um synchron von einer Datei zu lesen und in eine Datei zu schreiben. Die synchrone Natur dieser Methode bietet Leistungsvorteile,
    ist jedoch nur innerhalb dedizierter [Web Workers](/de/docs/Web/API/Web_Workers_API) nutzbar.
- [`createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable)
  - : Gibt ein {{jsxref('Promise')}} zurück, das sich zu einem neu erstellten [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)
    Objekt auflöst, welches verwendet werden kann, um in eine Datei zu schreiben.

## Beispiele

### Eine Datei lesen

Die folgende asynchrone Funktion präsentiert einen Dateiauswähler und sobald eine Datei ausgewählt wurde, wird die `getFile()` Methode verwendet, um den Inhalt abzurufen.

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

### Eine Datei schreiben

Die folgende asynchrone Funktion schreibt die gegebenen Inhalte auf den Datei-Handle und damit auf die Festplatte.

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

Die folgende asynchrone Ereignis-Handler-Funktion ist in einem Web Worker enthalten. Beim Empfang einer Nachricht vom Hauptthread:

- Erstellt einen synchronen Datei-Zugriffs-Handle.
- Ermittelt die Größe der Datei und erstellt ein {{jsxref("ArrayBuffer")}}, um diese zu enthalten.
- Liest den Dateiinhalte in den Puffer.
- Kodiert die Nachricht und schreibt sie ans Ende der Datei.
- Speichert die Änderungen auf der Festplatte und schließt den Zugriffs-Handle.

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
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Allerdings implementieren alle aktuellen Browser, die diese Methoden unterstützen, sie als synchrone Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

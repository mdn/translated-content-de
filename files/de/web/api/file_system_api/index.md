---
title: File System API
slug: Web/API/File_System_API
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

Die **File System API** — mit Erweiterungen durch die [**File System Access API**](https://wicg.github.io/file-system-access/) für den Zugriff auf Dateien im Dateisystem des Geräts — ermöglicht Lese-, Schreib- und Dateiverwaltungsfunktionen.

## Konzepte und Verwendung

Diese API ermöglicht die Interaktion mit Dateien auf dem lokalen Gerät eines Benutzers oder auf einem vom Benutzer zugänglichen Netzwerkdateisystem. Die Kernfunktionalität dieser API umfasst das Lesen von Dateien, das Schreiben oder Speichern von Dateien und den Zugriff auf die Verzeichnisstruktur.

Die meisten Interaktionen mit Dateien und Verzeichnissen werden über Handles ausgeführt. Eine übergeordnete [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) Klasse definiert zwei untergeordnete Klassen: [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), für Dateien bzw. Verzeichnisse.

Die Handles repräsentieren eine Datei oder ein Verzeichnis auf dem System des Benutzers. Sie können zunächst darauf zugreifen, indem Sie dem Benutzer einen Datei- oder Verzeichniswähler mit Methoden wie [`window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) und [`window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) anzeigen. Sobald diese aufgerufen werden, erscheint der Dateiauswahldialog und der Benutzer wählt entweder eine Datei oder ein Verzeichnis aus. Sobald dies erfolgreich geschehen ist, wird ein Handle zurückgegeben.

Sie können auch über folgende Methoden auf Datei-Handles zugreifen:

- Die Methode [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle) der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API).
- Die [File Handling API](https://developer.chrome.com/docs/capabilities/web-apis/file-handling).

Jedes Handle bietet seine eigene Funktionalität und es gibt einige Unterschiede, je nachdem, welches Sie verwenden (siehe den Abschnitt [Schnittstellen](#schnittstellen) für spezifische Details). Sie können dann auf Datei-Daten oder Informationen (einschließlich Kinder) des ausgewählten Verzeichnisses zugreifen. Diese API eröffnet potenzielle Funktionen, die dem Web gefehlt haben. Dennoch war die Sicherheit bei der Entwicklung der API von größter Bedeutung, und der Zugriff auf Datei-/Verzeichnisdaten ist untersagt, es sei denn, der Benutzer erteilt ausdrücklich die Erlaubnis (beachten Sie, dass dies nicht für das [Ursprungs-private Dateisystem](#ursprungs-privates_dateisystem) gilt, da es für den Benutzer nicht sichtbar ist).

> [!NOTE]
> Die verschiedenen Ausnahmen, die beim Verwenden der Funktionen dieser API ausgelöst werden können, sind auf den relevanten Seiten aufgelistet, wie in der Spezifikation definiert. Die Situation wird jedoch durch die Interaktion der API mit dem zugrunde liegenden Betriebssystem komplexer. Es wurde ein Vorschlag gemacht, die [Fehlerzuordnungen in der Spezifikation aufzuzählen](https://github.com/whatwg/fs/issues/57), welcher nützliche verwandte Informationen enthält.

> [!NOTE]
> Objekte basierend auf [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) können auch in einer [IndexedDB](/de/docs/Web/API/IndexedDB_API) Datenbankinstanz serialisiert oder über [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden.

### Ursprungs-privates Dateisystem

Das Ursprungs-private Dateisystem (OPFS) ist ein Speicherendpunkt, der als Teil der File System API bereitgestellt wird und der Herkunft der Seite privat ist und nicht für den Benutzer sichtbar ist wie das reguläre Dateisystem. Es bietet Zugriff auf eine spezielle Art von Datei, die hoch optimiert für die Leistung ist und in-place Schreibzugriff auf ihren Inhalt bietet.

Lesen Sie unser [Ursprungs-privates Dateisystem](/de/docs/Web/API/File_System_API/Origin_private_file_system) für Anweisungen zur Nutzung.

### Speichern von Dateien

- Im Falle der asynchronen Handles verwenden Sie die [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream) Schnittstelle. Sobald die Daten, die Sie speichern möchten, in einem Format von [`Blob`](/de/docs/Web/API/Blob), {{jsxref("String")}} Objekt, String-Literal oder {{jsxref('ArrayBuffer', 'Puffer')}} vorliegen, können Sie einen Stream öffnen und die Daten in einer Datei speichern. Dies kann die bestehende Datei oder eine neue Datei sein.
- Im Falle des synchronen [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) schreiben Sie Änderungen an eine Datei unter Verwendung der [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write) Methode. Sie können optional auch [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush) aufrufen, falls Sie die Änderungen zu einem bestimmten Zeitpunkt auf der Festplatte speichern müssen (andernfalls kann das zugrunde liegende Betriebssystem dies bearbeiten, wenn es dies für passend hält, was in den meisten Fällen in Ordnung sein sollte).

## Schnittstellen

- [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)
  - : Ein Objekt, das einen Datei- oder Verzeichniseintrag darstellt. Mehrere Handles können denselben Eintrag repräsentieren. Zum größten Teil arbeiten Sie nicht direkt mit `FileSystemHandle`, sondern mit dessen untergeordneten Schnittstellen [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle).
- [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)
  - : Bietet ein Handle zu einem Datei-System-Eintrag.
- [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)
  - : Bietet ein Handle zu einem Datei-System-Verzeichnis.
- [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)
  - : Bietet ein synchrones Handle zu einem Datei-System-Eintrag, das in-place auf eine einzelne Datei auf der Festplatte arbeitet. Die synchronen Lese- und Schreibvorgänge ermöglichen eine höhere Leistung für kritische Methoden in Kontexten, in denen asynchrone Operationen mit hohen Overheads verbunden sind, z.B. bei [WebAssembly](/de/docs/WebAssembly). Diese Klasse ist nur innerhalb dedizierter [Web Workers](/de/docs/Web/API/Web_Workers_API) für Dateien im [Ursprungs-privaten Dateisystem](#ursprungs-privates_dateisystem) zugänglich.
- [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)
  - : Ein [`WritableStream`](/de/docs/Web/API/WritableStream) Objekt mit zusätzlichen Komfortmethoden, das auf einer einzelnen Datei auf der Festplatte arbeitet.

### Erweiterungen zu anderen Schnittstellen

- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker)
  - : Zeigt einen Verzeichniswähler an, der es dem Benutzer ermöglicht, ein Verzeichnis auszuwählen.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker)
  - : Zeigt einen Dateiwähler an, der es einem Benutzer ermöglicht, eine oder mehrere Dateien auszuwählen.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
  - : Zeigt einen Dateiwähler an, der es einem Benutzer ermöglicht, eine Datei zu speichern.
- [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle)
  - : Gibt ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurück, wenn das gezogene Element eine Datei ist, oder ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), wenn das gezogene Element ein Verzeichnis ist.
- [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory)
  - : Wird verwendet, um eine Referenz auf ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) Objekt zu erhalten, das den Zugriff auf ein Verzeichnis und dessen Inhalt erlaubt, das im [Ursprungs-privaten Dateisystem](/de/docs/Web/API/File_System_API/Origin_private_file_system) gespeichert ist. Gibt ein {{jsxref('Promise')}} zurück, das bei Erfüllung ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) Objekt zurückliefert.

## Beispiele

### Zugriff auf Dateien

Der folgende Code ermöglicht es dem Benutzer, eine Datei aus dem Dateiauswahldialog auszuwählen.

```js
async function getFile() {
  // Open file picker and destructure the result the first handle
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  return file;
}
```

Die folgende asynchrone Funktion stellt einen Dateiauswahldialog dar und verwendet, nachdem eine Datei ausgewählt wurde, die Methode `getFile()`, um den Inhalt abzurufen.

```js
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

async function getTheFile() {
  // Open file picker and destructure the result the first handle
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // get file contents
  const fileData = await fileHandle.getFile();
}
```

### Zugriff auf Verzeichnisse

Das folgende Beispiel gibt ein Verzeichnishandle mit dem angegebenen Namen zurück. Falls das Verzeichnis nicht existiert, wird es erstellt.

```js
const dirName = "directoryToGetName";

// assuming we have a directory handle: 'currentDirHandle'
const subDir = currentDirHandle.getDirectoryHandle(dirName, { create: true });
```

Die folgende asynchrone Funktion verwendet `resolve()`, um den Pfad zu einer ausgewählten Datei relativ zu einem angegebenen Verzeichnishandle zu finden.

```js
async function returnPathDirectories(directoryHandle) {
  // Get a file handle by showing a file picker:
  const [handle] = await self.showOpenFilePicker();
  if (!handle) {
    // User cancelled, or otherwise failed to open a file.
    return;
  }

  // Check if handle exists inside our directory handle
  const relativePaths = await directoryHandle.resolve(handle);

  if (relativePaths === null) {
    // Not inside directory handle
  } else {
    // relativePaths is an array of names, giving the relative path

    for (const name of relativePaths) {
      // log each entry
      console.log(name);
    }
  }
}
```

### Schreiben in Dateien

Die folgende asynchrone Funktion öffnet den Speicherdateiauswahldialog, der ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurückgibt, sobald eine Datei ausgewählt wurde. Ein beschreibbarer Stream wird dann mit der Methode [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) erstellt.

Ein vom Benutzer definiertes [`Blob`](/de/docs/Web/API/Blob) wird dann in den Stream geschrieben, der anschließend geschlossen wird.

```js
async function saveFile() {
  // create a new handle
  const newHandle = await window.showSaveFilePicker();

  // create a FileSystemWritableFileStream to write to
  const writableStream = await newHandle.createWritable();

  // write our file
  await writableStream.write(imgBlob);

  // close the file and write the contents to disk.
  await writableStream.close();
}
```

Das Folgende zeigt verschiedene Beispiele für Optionen, die in die Methode `write()` übergeben werden können.

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

### Synchrones Lesen und Schreiben von Dateien im OPFS

Dieses Beispiel liest und schreibt eine Datei synchron im [Ursprungs-privaten Dateisystem](#ursprungs-privates_dateisystem).

Die folgende asynchrone Ereignis-Handler-Funktion ist innerhalb eines Web Workers enthalten. Beim Empfang einer Nachricht vom Haupt-Thread:

- Erstellt es ein synchrones Datei-Zugriffshandle.
- Holt es die Größe der Datei und erstellt ein {{jsxref("ArrayBuffer")}} zur Aufnahme.
- Liest es den Dateiinhalt in den Puffer.
- Codiert es die Nachricht und schreibt sie ans Ende der Datei.
- Persistiert es die Änderungen auf die Festplatte und schließt das Zugangshandle.

```js
onmessage = async (e) => {
  // retrieve message sent to work from main script
  const message = e.data;

  // Get handle to draft file in OPFS
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
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) unergonomisch als asynchrone Methoden spezifiziert. Dies wurde nun [geändert](https://github.com/whatwg/fs/issues/7), aber einige Browser unterstützen weiterhin die asynchronen Versionen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
- [Das Ursprungs-private Dateisystem](https://web.dev/articles/origin-private-file-system)

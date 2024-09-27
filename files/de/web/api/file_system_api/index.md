---
title: File System API
slug: Web/API/File_System_API
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

Die **File System API** — mit Erweiterungen, die über die [**File System Access API**](https://wicg.github.io/file-system-access/) bereitgestellt werden, um auf Dateien im Dateisystem des Geräts zuzugreifen — ermöglicht Lesen, Schreiben und Dateiverwaltung.

## Konzepte und Nutzung

Diese API ermöglicht die Interaktion mit Dateien auf dem lokalen Gerät eines Benutzers oder auf einem für den Benutzer zugänglichen Netzwerkdateisystem. Die Kernfunktionalität dieser API umfasst das Lesen von Dateien, Schreiben oder Speichern von Dateien und den Zugriff auf die Verzeichnisstruktur.

Die meisten Interaktionen mit Dateien und Verzeichnissen erfolgen über Handles. Eine übergeordnete Klasse [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) hilft dabei, zwei untergeordnete Klassen zu definieren: [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) für Dateien bzw. Verzeichnisse.

Die Handles stellen eine Datei oder ein Verzeichnis auf dem System des Benutzers dar. Der Zugriff auf diese kann zunächst erreicht werden, indem dem Benutzer ein Datei- oder Verzeichnisauswahl-Dialog gezeigt wird, wobei Methoden wie [`window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) und [`window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) verwendet werden. Sobald diese aufgerufen werden, wird der Dateiauswahldialog angezeigt und der Benutzer wählt eine Datei oder ein Verzeichnis aus. Wenn dies erfolgreich geschieht, wird ein Handle zurückgegeben.

Sie können auch auf Dateihandles über folgende Methoden zugreifen:

- Die Methode [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle) der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API).
- Die [File Handling API](https://developer.chrome.com/docs/capabilities/web-apis/file-handling).

Jedes Handle bietet seine eigene Funktionalität und es gibt einige Unterschiede, je nachdem, welches Sie verwenden (Details finden Sie im Abschnitt [Interfaces](#schnittstellen)). Sie können dann auf Dateidaten oder Informationen (einschließlich untergeordneter Elemente) des ausgewählten Verzeichnisses zugreifen. Diese API eröffnet potenzielle Funktionen, die dem Web gefehlt haben. Trotzdem hatte das Sicherheitsdesign der API höchste Priorität, und der Zugriff auf Datei-/Verzeichnisedaten ist verboten, es sei denn der Benutzer erlaubt es ausdrücklich (beachten Sie, dass dies nicht für das [Origin private file system](#origin_privates_dateisystem) gilt, da es für den Benutzer nicht sichtbar ist).

> [!NOTE]
> Die verschiedenen Ausnahmen, die beim Verwenden der Funktionen dieser API ausgelöst werden können, werden auf den relevanten Seiten aufgelistet, wie in der Spezifikation definiert. Die Situation wird jedoch komplizierter durch die Interaktion der API mit dem zugrunde liegenden Betriebssystem. Ein Vorschlag wurde gemacht, um [die Fehlermapping in der Spezifikation aufzulisten](https://github.com/whatwg/fs/issues/57), was nützliche verwandte Informationen enthält.

> [!NOTE]
> Objekte basierend auf [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) können auch in einer [IndexedDB](/de/docs/Web/API/IndexedDB_API) Datenbankinstanz serialisiert oder über [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden.

### Origin privates Dateisystem

Das origin private file system (OPFS) ist ein Speicherelement, das im Rahmen der File System API bereitgestellt wird, welches der Herkunft der Seite zugeordnet ist und für den Benutzer nicht sichtbar ist wie das reguläre Dateisystem. Es bietet Zugriff auf eine spezielle Art von Datei, die hochgradig für Leistung optimiert ist und einen direkten Schreibzugriff auf deren Inhalt bietet.

Lesen Sie unsere [Origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) für Anweisungen zur Nutzung.

### Dateien speichern

- Im Fall von asynchronen Handles verwenden Sie das Interface [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream). Sobald die Daten, die Sie speichern möchten, im Format von [`Blob`](/de/docs/Web/API/Blob), {{jsxref("String")}}-Objekt, String-Literal oder {{jsxref('ArrayBuffer', 'buffer')}} vorliegen, können Sie einen Stream öffnen und die Daten in einer Datei speichern. Dies kann die bestehende Datei oder eine neue Datei sein.
- Im Fall des synchronen [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) schreiben Sie Änderungen an einer Datei mit der Methode [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write). Sie können optional auch [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush) aufrufen, wenn die Änderungen zu einem bestimmten Zeitpunkt auf die Festplatte gespeichert werden sollen (ansonsten können Sie das zugrunde liegende Betriebssystem dies regeln lassen, was in den meisten Fällen akzeptabel sein sollte).

## Schnittstellen

- [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)
  - : Ein Objekt, das einen Datei- oder Verzeichniseintrag repräsentiert. Mehrere Handles können denselben Eintrag darstellen. Meistens arbeiten Sie nicht direkt mit `FileSystemHandle`, sondern vielmehr mit seinen untergeordneten Schnittstellen [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle).
- [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)
  - : Bietet einen Handle auf einen Dateisystemeintrag.
- [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)
  - : Bietet einen Handle auf ein Dateisystemverzeichnis.
- [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)
  - : Bietet einen synchronen Handle zu einem Dateisystemeintrag, der direkt auf eine einzelne Datei auf der Festplatte wirkt. Die synchrone Natur der Datei-Lese- und Schreibvorgänge ermöglicht eine höhere Performance für kritische Methoden in Kontexten, in denen asynchrone Operationen mit hohem Overhead einhergehen, z.B. [WebAssembly](/de/docs/WebAssembly). Diese Klasse ist nur innerhalb dedizierter [Web Workers](/de/docs/Web/API/Web_Workers_API) für Dateien im [origin private file system](#origin_privates_dateisystem) zugänglich.
- [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)
  - : Ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt mit zusätzlichen Komfortmethoden, das auf eine einzelne Datei auf der Festplatte wirkt.

### Erweiterungen für andere Schnittstellen

- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker)
  - : Zeigt einen Verzeichniswähler an, der es dem Benutzer ermöglicht, ein Verzeichnis auszuwählen.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker)
  - : Zeigt einen Datei-Auswahldialog, der es einem Benutzer ermöglicht, eine oder mehrere Dateien auszuwählen.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
  - : Zeigt einen Datei-Auswahldialog, der es einem Benutzer ermöglicht, eine Datei zu speichern.
- [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle)
  - : Gibt einen [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurück, wenn das gezogene Element eine Datei ist, oder einen [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), wenn das gezogene Element ein Verzeichnis ist.
- [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory)
  - : Wird verwendet, um eine Referenz auf ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt zu erhalten, das den Zugriff auf ein Verzeichnis und dessen Inhalte im [origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) ermöglicht. Gibt ein {{jsxref('Promise')}} zurück, das mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erfüllt wird.

## Beispiele

### Zugriff auf Dateien

Der untenstehende Code ermöglicht es dem Benutzer, eine Datei über den Dateiauswahldialog auszuwählen.

```js
async function getFile() {
  // Open file picker and destructure the result the first handle
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  return file;
}
```

Die folgende asynchrone Funktion zeigt einen Dateiauswahldialog an und verwendet dann die Methode `getFile()`, um die Inhalte abzurufen, sobald eine Datei ausgewählt wurde.

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

Das folgende Beispiel gibt einen Verzeichnishandle mit dem angegebenen Namen zurück. Wenn das Verzeichnis nicht existiert, wird es erstellt.

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

### In Dateien schreiben

Die folgende asynchrone Funktion öffnet den Speicherauswahldialog, der einen [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurückgibt, sobald eine Datei ausgewählt wurde. Ein schreibbarer Stream wird dann unter Verwendung der Methode [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) erstellt.

Ein benutzerdefinierter [`Blob`](/de/docs/Web/API/Blob) wird dann in den Stream geschrieben, der anschließend geschlossen wird.

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

Die folgenden zeigen verschiedene Beispiele von Optionen, die in die `write()`-Methode übergeben werden können.

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

Dieses Beispiel liest und schreibt synchron eine Datei in das [origin private file system](#origin_privates_dateisystem).

Der folgende asynchrone Ereignishandler ist in einem Web Worker enthalten. Beim Empfang einer Nachricht vom Haupt-Thread führt er:

- Erstellt einen synchronen Dateizugriffshandle.
- Ruft die Größe der Datei ab und erstellt einen {{jsxref("ArrayBuffer")}}, um sie zu enthalten.
- Liest den Dateiinhalt in den Puffer.
- Kodiert die Nachricht und schreibt sie am Ende der Datei.
- Sichert die Änderungen auf der Festplatte und schließt den Zugriffshandle.

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
> In früheren Versionen der Spezifikation waren [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) unergonomisch als asynchrone Methoden spezifiziert. Dies wurde nun [angepasst](https://github.com/whatwg/fs/issues/7), aber einige Browser unterstützen noch die asynchronen Versionen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die File System Access API: Vereinfachter Zugriff auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
- [Das origin private file system](https://web.dev/articles/origin-private-file-system)

---
title: File System API
slug: Web/API/File_System_API
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

Die **File System API** — mit Erweiterungen, die über die [**File System Access API**](https://wicg.github.io/file-system-access/) bereitgestellt werden, um Dateien auf dem Dateisystem des Geräts zuzugreifen — ermöglicht Lese-, Schreib- und Dateiverwaltungsfunktionen.

Siehe [Beziehung zu anderen dateibezogenen APIs](/de/docs/Web/API/File_API#relationship_to_other_file-related_apis) für einen Vergleich zwischen dieser API, der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) und der [File API](/de/docs/Web/API/File_API).

## Konzepte und Verwendung

Diese API ermöglicht die Interaktion mit Dateien auf einem lokalen Gerät des Benutzers oder auf einem benutzerzugänglichen Netzwerkdateisystem. Die Kernfunktionalität dieser API umfasst das Lesen von Dateien, das Schreiben oder Speichern von Dateien und den Zugriff auf die Verzeichnisstruktur.

Die meiste Interaktion mit Dateien und Verzeichnissen wird durch Handles erreicht. Eine übergeordnete Klasse [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) hilft, zwei untergeordnete Klassen zu definieren: [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), für Dateien bzw. Verzeichnisse.

Die Handles repräsentieren eine Datei oder ein Verzeichnis auf dem System des Benutzers. Sie können zunächst auf sie zugreifen, indem Sie dem Benutzer mithilfe von Methoden wie [`window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) und [`window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) einen Datei- oder Verzeichnisauswähler anzeigen. Sobald diese aufgerufen werden, präsentiert sich der Dateiauswähler und der Benutzer wählt entweder eine Datei oder ein Verzeichnis aus. Wenn dies erfolgreich geschieht, wird ein Handle zurückgegeben.

Sie können auch über folgende Wege auf Datei-Handles zugreifen:

- Die Methode [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle) der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API).
- Die [File Handling API](https://developer.chrome.com/docs/capabilities/web-apis/file-handling).

Jedes Handle bietet seine eigene Funktionalität und es gibt einige Unterschiede, abhängig davon, welches Sie verwenden (siehe den Abschnitt [Schnittstellen](#schnittstellen) für spezifische Details). Danach können Sie auf Datei-Daten oder Informationen (einschließlich Kinder) des ausgewählten Verzeichnisses zugreifen. Diese API eröffnet potenziell fehlende Funktionalitäten im Web. Dennoch war Sicherheit bei der Gestaltung der API von größter Bedeutung, und der Zugriff auf Datei-/Verzeichnisdaten ist nur dann erlaubt, wenn der Benutzer dies ausdrücklich zulässt (beachten Sie, dass dies nicht der Fall beim [origin private file system](#origin_private_file_system) ist, da es für den Benutzer nicht sichtbar ist).

> [!NOTE]
> Die verschiedenen Ausnahmen, die bei der Verwendung der Funktionen dieser API ausgelöst werden können, sind auf den relevanten Seiten wie in der Spezifikation definiert aufgelistet. Die Situation wird jedoch durch die Interaktion der API mit dem zugrunde liegenden Betriebssystem komplexer. Ein Vorschlag wurde gemacht, um [die Fehlermappings in der Spezifikation aufzulisten](https://github.com/whatwg/fs/issues/57), die nützliche verwandte Informationen enthalten.

> [!NOTE]
> Objekte, die auf [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) basieren, können auch in eine Instanz der [IndexedDB](/de/docs/Web/API/IndexedDB_API) Datenbank serialisiert oder über [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden.

### Origin Private File System

Das Origin Private File System (OPFS) ist ein Speichermedium, das als Teil der File System API bereitgestellt wird, das nur dem Ursprung der Seite zugeordnet und für den Benutzer nicht sichtbar ist, wie das reguläre Dateisystem. Es bietet Zugang zu einer speziellen Art von Datei, die hochgradig auf Leistung optimiert ist und einen direkten Schreibzugriff auf ihre Inhalte ermöglicht.

Die folgenden sind einige mögliche Anwendungsfälle:

- Apps mit dauerhaftem Uploader

  - Wenn eine Datei oder ein Verzeichnis zum Hochladen ausgewählt wird, können Sie die Datei in ein lokales Sandbox kopieren und stückweise hochladen.
  - Die App kann Uploads nach einer Unterbrechung neu starten, z.B. wenn der Browser geschlossen oder abgestürzt ist, die Verbindung unterbrochen wurde oder der Computer heruntergefahren wurde.

- Video- oder andere Apps mit vielen Mediendateien

  - Die App lädt ein oder mehrere große Tarballs herunter und entpackt sie lokal in eine Verzeichnisstruktur.
  - Die App ruft im Hintergrund Assets vorab ab, damit der Benutzer zur nächsten Aufgabe oder Spielebene übergehen kann, ohne auf einen Download zu warten.

- Audio- oder Fotoeditor mit Offline-Zugriff oder lokalem Cache (großartig für Leistung und Geschwindigkeit)

  - Die App kann Dateien direkt überschreiben (z.B. nur die ID3/EXIF-Tags überschreiben und nicht die gesamte Datei).

- Offline-Video-Viewer

  - Die App kann große Dateien (>1GB) für das spätere Betrachten herunterladen.
  - Die App kann teilweise heruntergeladene Dateien zugreifen (so dass Sie das erste Kapitel Ihrer DVD ansehen können, auch wenn die App den Rest der Inhalte noch herunterlädt oder der Download nicht abgeschlossen wurde, weil Sie einen Zug erreichen mussten).

- Offline-Webmail-Client

  - Der Client lädt Anhänge herunter und speichert sie lokal.
  - Der Client cached Anhänge für den späteren Upload.

Lesen Sie unseren [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) für Anweisungen zur Nutzung.

### Dateien speichern

- Im Fall der asynchronen Handles verwenden Sie die [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Schnittstelle. Sobald die Daten, die Sie speichern möchten, im Format von [`Blob`](/de/docs/Web/API/Blob), {{jsxref("String")}}-Objekt, String-Literal oder {{jsxref('ArrayBuffer', 'buffer')}} vorliegen, können Sie einen Stream öffnen und die Daten in eine Datei speichern. Dies kann die bestehende Datei oder eine neue Datei sein.
- Im Fall des synchronen [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) schreiben Sie Änderungen an eine Datei mit der [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write)-Methode. Optional können Sie auch [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush) aufrufen, wenn Sie möchten, dass die Änderungen zu einem bestimmten Zeitpunkt auf die Festplatte geschrieben werden (andernfalls können Sie dem zugrunde liegenden Betriebssystem überlassen, dies zu tun, wenn es dies für angemessen hält, was in den meisten Fällen in Ordnung sein sollte).

## Schnittstellen

- [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)
  - : Ein Objekt, das einen Datei- oder Verzeichniseintrag repräsentiert. Mehrere Handles können denselben Eintrag repräsentieren. Zum größten Teil arbeiten Sie nicht direkt mit `FileSystemHandle`, sondern vielmehr mit den untergeordneten Schnittstellen [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle).
- [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)
  - : Bietet einen Handle zu einem Dateisystemeintrag.
- [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)
  - : Bietet einen Handle zu einem Verzeichnis des Dateisystems.
- [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)
  - : Bietet einen synchronen Handle zu einem Dateisystemeintrag, der direkt auf eine einzelne Datei auf der Festplatte arbeitet. Die synchrone Natur des Lesens und Schreibens ermöglicht eine höhere Leistung für kritische Methoden in Kontexten, in denen asynchrone Operationen mit hohem Overhead verbunden sind, z.B. [WebAssembly](/de/docs/WebAssembly). Diese Klasse ist nur in dedizierten [Web Workers](/de/docs/Web/API/Web_Workers_API) für Dateien innerhalb des [origins private file system](#origin_private_file_system) zugänglich.
- [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)
  - : Ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt mit zusätzlichen Komfortmethoden, das auf einer einzigen Datei auf der Festplatte arbeitet.

### Erweiterungen zu anderen Schnittstellen

- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker)
  - : Zeigt einen Verzeichnisauswähler an, mit dem der Benutzer ein Verzeichnis auswählen kann.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker)
  - : Zeigt einen Dateiauswähler an, mit dem ein Benutzer eine oder mehrere Dateien auswählen kann.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
  - : Zeigt einen Dateiauswähler an, mit dem ein Benutzer eine Datei speichern kann.
- [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle)
  - : Gibt ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurück, wenn das gezogene Element eine Datei ist, oder ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), wenn das gezogene Element ein Verzeichnis ist.
- [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory)
  - : Wird verwendet, um eine Referenz zu einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt zu erhalten, das Zugriff auf ein Verzeichnis und dessen Inhalt im [origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) ermöglicht. Gibt ein {{jsxref('Promise')}} zurück, das mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erfüllt wird.

## Beispiele

### Zugriff auf Dateien

Der folgende Code ermöglicht dem Benutzer, eine Datei aus dem Dateiauswähler auszuwählen.

```js
async function getFile() {
  // Open file picker and destructure the result the first handle
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  return file;
}
```

Die folgende asynchrone Funktion präsentiert einen Dateiauswähler und verwendet, sobald eine Datei ausgewählt ist, die `getFile()`-Methode, um die Inhalte abzurufen.

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

Das folgende Beispiel gibt ein Verzeichnishandle mit dem angegebenen Namen zurück. Wenn das Verzeichnis nicht existiert, wird es erstellt.

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

Die folgende asynchrone Funktion öffnet den Dateispeicherauswähler, der ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurückgibt, sobald eine Datei ausgewählt wurde. Ein beschreibbarer Stream wird dann mithilfe der Methode [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) erstellt.

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

Die folgenden Beispiele zeigen verschiedene Optionen, die in die `write()`-Methode übergeben werden können.

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

### Synchrones Lesen und Schreiben von Dateien in OPFS

Dieses Beispiel liest und schreibt synchron eine Datei im [origin private file system](#origin_private_file_system).

Die folgende asynchrone Ereignis-Handlerfunktion ist innerhalb eines Web Workers enthalten. Beim Empfang einer Nachricht von dem Haupt-Thread:

- Erstellt einen synchronen Datei-Zugriffshandle.
- Bestimmt die Größe der Datei und erstellt einen {{jsxref("ArrayBuffer")}}, um den Inhalt aufzunehmen.
- Liest den Dateiinhalt in den Puffer.
- Codiert die Nachricht und schreibt sie an das Ende der Datei.
- Speichert die Änderungen auf der Festplatte und schließt den Zugriffshandle.

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
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) unergonomisch als asynchrone Methoden spezifiziert. Dies wurde inzwischen [geändert](https://github.com/whatwg/fs/issues/7), aber einige Browser unterstützen noch die asynchronen Versionen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
- [The origin private file system](https://web.dev/articles/origin-private-file-system)

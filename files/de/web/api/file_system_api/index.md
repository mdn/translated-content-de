---
title: File System API
slug: Web/API/File_System_API
l10n:
  sourceCommit: ab7254fb329302ddc101fc2d09947429077368e6
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

Die **File System API** — mit Erweiterungen, die über die [**File System Access API**](https://wicg.github.io/file-system-access/) bereitgestellt werden, um auf Dateien im Dateisystem des Geräts zuzugreifen — ermöglicht Lese-, Schreib- und Dateiverwaltungsfunktionen.

Siehe [Beziehung zu anderen dateibezogenen APIs](/de/docs/Web/API/File_API#relationship_to_other_file-related_apis) für einen Vergleich zwischen dieser API, der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) und der [File API](/de/docs/Web/API/File_API).

## Konzepte und Nutzung

Diese API ermöglicht die Interaktion mit Dateien auf einem lokalen Gerät des Benutzers oder auf einem vom Benutzer zugänglichen Netzwerkdateisystem. Die Kernfunktionalität dieser API umfasst das Lesen von Dateien, das Schreiben oder Speichern von Dateien und den Zugriff auf die Verzeichnisstruktur.

Die meiste Interaktion mit Dateien und Verzeichnissen erfolgt über „Handles“. Eine übergeordnete Klasse [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) hilft bei der Definition von zwei abgeleiteten Klassen: [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), für Dateien bzw. Verzeichnisse.

Die Handles repräsentieren eine Datei oder ein Verzeichnis auf dem System des Benutzers. Sie können zuerst auf sie zugreifen, indem Sie dem Benutzer einen Datei- oder Verzeichnisauswahldialog mit Methoden wie [`window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) und [`window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) anzeigen. Sobald diese aufgerufen werden, präsentiert sich der Dateiauswahldialog und der Benutzer kann entweder eine Datei oder ein Verzeichnis auswählen. Nachdem dies erfolgreich passiert ist, wird ein Handle zurückgegeben.

Sie können auch über folgende Methoden auf Datei-Handles zugreifen:

- Die Methode [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle) der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API).
- Die [File Handling API](https://developer.chrome.com/docs/capabilities/web-apis/file-handling).

Jedes Handle bietet seine eigene Funktionalität, und es gibt einige Unterschiede, je nachdem welches verwendet wird (siehe den Abschnitt [Schnittstellen](#schnittstellen) für spezifische Details). Sie können dann auf Dateidaten oder Informationen (einschließlich untergeordneter Elemente) des ausgewählten Verzeichnisses zugreifen. Diese API eröffnet Funktionalitäten, die dem Web bisher fehlten. Dennoch stand die Sicherheit bei der Gestaltung der API im Vordergrund, und der Zugriff auf die Datei-/Verzeichnisedaten ist nur möglich, wenn der Benutzer dies ausdrücklich gestattet (zu beachten ist, dass dies nicht auf das [Origin private file system](#origin_private_file_system) zutrifft, da es für den Benutzer nicht sichtbar ist).

> [!NOTE]
> Die verschiedenen Ausnahmen, die beim Verwenden der Funktionen dieser API ausgelöst werden können, sind auf den relevanten Seiten aufgeführt, wie in der Spezifikation definiert. Die Situation wird jedoch durch die Interaktion der API mit dem zugrundeliegenden Betriebssystem komplizierter. Es wurde ein Vorschlag gemacht, [die Fehlermappings in der Spezifikation aufzulisten](https://github.com/whatwg/fs/issues/57), der nützliche verwandte Informationen umfasst.

> [!NOTE]
> Objekte, die auf [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) basieren, können auch in einer [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Datenbankinstanz serialisiert oder über [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden.

### Origin private file system

Das Origin private file system (OPFS) ist ein Speicherendpunkt, der als Teil der File System API bereitgestellt wird. Es ist der Herkunft der Seite privat und nicht wie das reguläre Dateisystem für den Benutzer sichtbar. Es bietet Zugriff auf eine spezielle Art von Datei, die hochoptimiert für Leistung ist und einen direkten Schreibzugriff auf ihren Inhalt ermöglicht.

Die folgenden Anwendungsfälle sind möglich:

- Apps mit persistentem Uploader
  - Wenn eine Datei oder ein Verzeichnis zum Hochladen ausgewählt wird, können Sie die Datei in einen lokalen Sandkasten kopieren und stückweise hochladen.
  - Die App kann Uploads nach einer Unterbrechung neu starten, z.B. wenn der Browser geschlossen wird oder abstürzt, die Verbindung unterbrochen wird oder der Computer heruntergefahren wird.

- Videospiel oder andere Apps mit vielen Medienressourcen
  - Die App lädt ein oder mehrere große Tarballs herunter und entpackt sie lokal in eine Verzeichnisstruktur.
  - Die App lädt im Hintergrund Ressourcen vor, sodass der Benutzer zur nächsten Aufgabe oder Spielebene wechseln kann, ohne auf einen Download zu warten.

- Audio- oder Fotobearbeitungs-Apps mit Offline-Zugriff oder lokaler Cache (ideal für Leistung und Geschwindigkeit)
  - Die App kann Dateien direkt speichern (z.B. nur die ID3/EXIF-Tags überschreiben und nicht die gesamte Datei).

- Offline-Videoanzeiger
  - Die App kann große Dateien (>1GB) für die spätere Anzeige herunterladen.
  - Die App kann auf teilweise heruntergeladene Dateien zugreifen (damit Sie das erste Kapitel Ihrer DVD ansehen können, selbst wenn die App den Rest des Inhalts noch herunterlädt oder den Download nicht abgeschlossen hat, weil Sie zum Zugrennen mussten).

- Offline-Webmail-Client
  - Der Client lädt Anhänge herunter und speichert sie lokal.
  - Der Client cached Anhänge für den späteren Upload.

Lesen Sie unseren [Origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) für Anleitungen zur Nutzung.

### Dateien speichern

- Im Fall von asynchronen Handles verwenden Sie die [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Schnittstelle. Sobald die Daten, die Sie speichern möchten, im Format eines [`Blob`](/de/docs/Web/API/Blob), {{jsxref("String")}}-Objekts, Zeichenfolgenliterals oder {{jsxref('ArrayBuffer', 'buffer')}} vorliegen, können Sie einen Stream öffnen und die Daten in einer Datei speichern. Dies kann die bestehende Datei oder eine neue Datei sein.
- Im Fall des synchronen [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) schreiben Sie Änderungen an einer Datei mit der Methode [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write). Optional können Sie auch [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush) aufrufen, wenn Sie möchten, dass die Änderungen zu einem bestimmten Zeitpunkt auf die Festplatte geschrieben werden (anderenfalls können Sie dies dem zugrundeliegenden Betriebssystem überlassen, das dies nach Bedarf übernimmt, was in den meisten Fällen in Ordnung sein sollte).

## Schnittstellen

- [`FileSystemChangeRecord`](/de/docs/Web/API/FileSystemChangeRecord) {{experimental_inline}}
  - : Enthält Details zu einer einzelnen Änderung, die von einem [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) beobachtet wurde.
- [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)
  - : Ein Objekt, das einen Datei- oder Verzeichniseintrag darstellt. Mehrere Handles können denselben Eintrag repräsentieren. Meistens arbeiten Sie nicht direkt mit `FileSystemHandle`, sondern eher mit seinen abgeleiteten Schnittstellen [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle).
- [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)
  - : Bietet einen Handle zu einem Dateisystemeintrag.
- [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)
  - : Bietet einen Handle zu einem Dateisystemverzeichnis.
- [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) {{experimental_inline}}
  - : Bietet einen Mechanismus, um Änderungen an ausgewählten Dateien oder Verzeichnissen zu beobachten.
- [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)
  - : Bietet einen synchronen Handle zu einem Dateisystemeintrag, der vor Ort auf einer einzelnen Datei auf der Festplatte arbeitet. Die synchrone Natur der Dateioperationen ermöglicht eine höhere Leistung für kritische Methoden in Kontexten, in denen asynchrone Operationen mit hohem Overhead verbunden sind, z.B. [WebAssembly](/de/docs/WebAssembly). Diese Klasse ist nur innerhalb dedizierter [Web Workers](/de/docs/Web/API/Web_Workers_API) für Dateien innerhalb des [origin private file system](#origin_private_file_system) zugänglich.
- [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)
  - : Ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt mit zusätzlichen Komfortmethoden, das auf einer einzelnen Datei auf der Festplatte arbeitet.

### Erweiterungen zu anderen Schnittstellen

- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker)
  - : Zeigt einen Verzeichnisauswahldialog an, der es dem Benutzer erlaubt, ein Verzeichnis auszuwählen.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker)
  - : Zeigt einen Dateiauswahldialog an, der es dem Benutzer erlaubt, eine oder mehrere Dateien auszuwählen.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
  - : Zeigt einen Dateiauswahldialog an, der es dem Benutzer erlaubt, eine Datei zu speichern.
- [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle)
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) erfüllt wird, wenn das gezogene Element eine Datei ist, oder mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), wenn das Element ein Verzeichnis ist.
- [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory)
  - : Wird verwendet, um eine Referenz zu einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt zu erhalten, das den Zugriff auf ein Verzeichnis und dessen Inhalte, gespeichert im [origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system), ermöglicht. Gibt ein {{jsxref('Promise')}} zurück, das mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erfüllt wird.

## Beispiele

### Zugriff auf Dateien

Der untenstehende Code erlaubt es dem Benutzer, eine Datei aus dem Dateiauswahldialog auszuwählen.

```js
async function getFile() {
  // Open file picker and destructure the result the first handle
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  return file;
}
```

Die folgende asynchrone Funktion präsentiert einen Dateiauswahldialog und verwendet nach der Auswahl einer Datei die Methode `getFile()`, um den Inhalt zu erhalten.

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
const subDir = await currentDirHandle.getDirectoryHandle(dirName, {
  create: true,
});
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

Die folgende asynchrone Funktion öffnet den Datei-Speicher-Dialog, der ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurückgibt, sobald eine Datei ausgewählt wird. Anschließend wird ein schreibbarer Stream mit der Methode [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) erstellt.

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

Die folgenden Beispiele zeigen verschiedene Optionen, die in die Methode `write()` übergeben werden können.

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

Dieses Beispiel liest und schreibt eine Datei synchron im [origin private file system](#origin_private_file_system).

Der folgende asynchrone Ereignishandler befindet sich in einem Web Worker. Beim Empfang einer Nachricht vom Hauptthread:

- Erstellt er einen synchronen Dateizugriffshandle.
- Ermittelt die Größe der Datei und erstellt einen {{jsxref("ArrayBuffer")}}, um sie zu enthalten.
- Liest den Dateiinhalte in den Puffer.
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
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) unergonomisch als asynchrone Methoden spezifiziert. Dies wurde nun [geändert](https://github.com/whatwg/fs/issues/7), aber einige Browser unterstützen noch die asynchronen Versionen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die File System Access API: Vereinfachter Zugriff auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
- [Das origin private file system](https://web.dev/articles/origin-private-file-system)

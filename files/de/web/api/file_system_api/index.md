---
title: File System API
slug: Web/API/File_System_API
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

Die **File System API** — mit Erweiterungen über die [**File System Access API**](https://wicg.github.io/file-system-access/), die den Zugriff auf Dateien im Dateisystem des Geräts ermöglicht — erlaubt Lese-, Schreib- und Dateiverwaltungsfunktionen.

Sehen Sie sich [Verhältnis zu anderen dateibezogenen APIs](/de/docs/Web/API/File_API#relationship_to_other_file-related_apis) an, um einen Vergleich zwischen dieser API, der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) und der [File API](/de/docs/Web/API/File_API) zu erhalten.

## Konzepte und Nutzung

Diese API ermöglicht die Interaktion mit Dateien auf einem lokalen Gerät des Nutzers oder auf einem benutzerzugänglichen Netzwerk-Dateisystem. Die Kernfunktionen dieser API umfassen das Lesen von Dateien, das Schreiben oder Speichern von Dateien und den Zugriff auf die Verzeichnisstruktur.

Die meiste Interaktion mit Dateien und Verzeichnissen erfolgt über Handles. Eine übergeordnete Klasse [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) definiert zwei Kindklassen: [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) für Dateien beziehungsweise Verzeichnisse.

Die Handles repräsentieren eine Datei oder ein Verzeichnis auf dem System des Nutzers. Sie können zunächst auf sie zugreifen, indem Sie dem Nutzer einen Datei- oder Verzeichnisauswahldialog anzeigen, wobei Methoden wie [`window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) und [`window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) verwendet werden. Sobald diese aufgerufen werden, erscheint der Dateiauswahldialog, und der Nutzer wählt entweder eine Datei oder ein Verzeichnis aus. Nach erfolgreicher Auswahl wird ein Handle zurückgegeben.

Sie können auch durch folgende Methoden auf Datei-Handles zugreifen:

- Die Methode [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle) der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API).
- Die [File Handling API](https://developer.chrome.com/docs/capabilities/web-apis/file-handling).

Jedes Handle bietet seine eigene Funktionalität, und es gibt einige Unterschiede je nachdem, welches verwendet wird (siehe den Abschnitt [Interfaces](#schnittstellen) für spezifische Details). Sie können dann auf Dateidaten oder Informationen (einschließlich der Kinder) des ausgewählten Verzeichnisses zugreifen. Diese API eröffnet potenzielle Funktionen, die dem Web bisher gefehlt haben. Dennoch war die Sicherheit bei der Gestaltung der API von größter Bedeutung, und der Zugriff auf Datei-/Verzeichnisdaten ist nicht erlaubt, es sei denn, der Nutzer genehmigt ihn ausdrücklich (beachten Sie, dass dies nicht der Fall beim [Origin-private Dateisystem](#origin-private_dateisystem) ist, da es für den Nutzer nicht sichtbar ist).

> [!NOTE]
> Die verschiedenen Ausnahmen, die beim Verwenden der Funktionen dieser API auftreten können, sind auf den relevanten Seiten aufgeführt, wie in der Spezifikation definiert. Die Situation ist jedoch durch die Interaktion der API mit dem zugrunde liegenden Betriebssystem komplexer geworden. Es wurde ein Vorschlag gemacht, [die Fehlermappings in der Spezifikation aufzulisten](https://github.com/whatwg/fs/issues/57), der nützliche verwandte Informationen enthält.

> [!NOTE]
> Objekte, die auf [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) basieren, können auch in einer [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Datenbank instanziiert oder über [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden.

### Origin-private Dateisystem

Das Origin-private Dateisystem (OPFS) ist ein Speicherendpunkt, der als Teil der File System API bereitgestellt wird, der exklusiv für den Ursprung der Seite ist und dem Nutzer nicht sichtbar ist wie das reguläre Dateisystem. Es bietet Zugriff auf eine spezielle Art von Datei, die für Leistung hochoptimiert ist und unmittelbaren Schreibzugriff auf ihren Inhalt bietet.

Folgende Anwendungsfälle sind möglich:

- Apps mit persistentem Uploader
  - Wenn eine Datei oder ein Verzeichnis zum Hochladen ausgewählt wird, können Sie die Datei in ein lokales Sandbox kopieren und Stück für Stück hochladen.
  - Die App kann Uploads nach einer Unterbrechung, wie dem Schließen des Browsers oder einem Absturz, einer unterbrochenen Verbindung oder dem Herunterfahren des Computers, neu starten.

- Videospiel- oder andere Apps mit vielen Medienressourcen
  - Die App lädt ein oder mehrere große Tarballs herunter und entpackt sie lokal in eine Verzeichnisstruktur.
  - Die App lädt Ressourcen im Hintergrund vor, sodass der Nutzer ohne Wartezeiten zur nächsten Aufgabe oder Spielebene wechseln kann.

- Audio- oder Fotoeditor mit Offline-Zugriff oder lokalem Cache (ideal für Leistung und Geschwindigkeit)
  - Die App kann In-Place in Dateien schreiben (zum Beispiel nur die ID3-/EXIF-Tags überschreiben und nicht die gesamte Datei).

- Offline-Videobetrachter
  - Die App kann große Dateien (>1GB) für die spätere Ansicht herunterladen.
  - Die App kann auf teilweise heruntergeladene Dateien zugreifen (sodass Sie das erste Kapitel Ihrer DVD ansehen können, selbst wenn die App den Rest der Inhalte noch herunterlädt oder der Download nicht abgeschlossen wurde, weil Sie einen Zug erwischen mussten).

- Offline-Webmail-Client
  - Der Client lädt Anhänge herunter und speichert sie lokal.
  - Der Client cached Anhänge für späteren Upload.

Lesen Sie unseren [Origin-private Dateisystem](/de/docs/Web/API/File_System_API/Origin_private_file_system) für Anleitungen, wie es verwendet wird.

### Dateien speichern

- Im Fall von asynchronen Handles verwenden Sie die [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Schnittstelle. Sobald die Daten, die Sie speichern möchten, in einem Format wie [`Blob`](/de/docs/Web/API/Blob), {{jsxref("String")}}, Zeichenfolgenliteral oder {{jsxref('ArrayBuffer', 'buffer')}} vorliegen, können Sie einen Stream öffnen und die Daten in eine Datei speichern. Dies kann die bestehende Datei oder eine neue Datei sein.
- Im Fall des synchronen [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) schreiben Sie Änderungen an einer Datei mit der Methode [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write). Sie können optional auch [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush) aufrufen, wenn Sie die Änderungen zu einem bestimmten Zeitpunkt auf die Festplatte übertragen möchten (ansonsten können Sie das zugrunde liegende Betriebssystem dies verwalten lassen, wenn es dafür vorgesehen ist, was in den meisten Fällen in Ordnung sein sollte).

## Schnittstellen

- [`FileSystemChangeRecord`](/de/docs/Web/API/FileSystemChangeRecord) {{experimental_inline}}
  - : Enthält Details zu einer einzelnen Änderung, die von einem [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) beobachtet wurde.
- [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)
  - : Ein Objekt, das einen Datei- oder Verzeichniseintrag repräsentiert. Mehrere Handles können denselben Eintrag repräsentieren. In der Regel arbeiten Sie nicht direkt mit `FileSystemHandle`, sondern mit dessen Kind-Schnittstellen [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle).
- [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)
  - : Bietet ein Handle zu einem Dateisystemeintrag.
- [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)
  - : Bietet ein Handle zu einem Dateisystemverzeichnis.
- [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) {{experimental_inline}}
  - : Bietet einen Mechanismus zur Beobachtung von Änderungen an ausgewählten Dateien oder Verzeichnissen.
- [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)
  - : Bietet ein synchrones Handle zu einem Dateisystemeintrag, das In-Place auf eine einzelne Datei auf der Festplatte arbeitet. Die synchrone Natur der Datei-Reads und -Writes ermöglicht eine höhere Leistung für kritische Methoden in Kontexte, wo asynchrone Operationen mit hohem Overhead verbunden sind, zum Beispiel [WebAssembly](/de/docs/WebAssembly). Diese Klasse ist nur innerhalb dedizierter [Web Workers](/de/docs/Web/API/Web_Workers_API) für Dateien im [origin private file system](#origin-private_dateisystem) zugänglich.
- [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)
  - : Ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt mit zusätzlichen Komfortmethoden, das auf eine einzelne Datei auf der Festplatte arbeitet.

### Erweiterungen zu anderen Schnittstellen

- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker)
  - : Zeigt einen Verzeichnisauswahldialog an, der dem Nutzer die Auswahl eines Verzeichnisses ermöglicht.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker)
  - : Zeigt einen Dateiauswahldialog an, der einem Nutzer die Auswahl einer oder mehrerer Dateien ermöglicht.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
  - : Zeigt einen Dateiauswahldialog an, der einem Nutzer das Speichern einer Datei ermöglicht.
- [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle)
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) erfüllt wird, wenn das gezogene Element eine Datei ist, oder mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) erfüllt wird, wenn das gezogene Element ein Verzeichnis ist.
- [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory)
  - : Wird verwendet, um einen Verweis auf ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt zu erhalten, das den Zugriff auf ein Verzeichnis und dessen Inhalte ermöglicht, die im [origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) gespeichert sind. Gibt ein {{jsxref('Promise')}} zurück, das mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erfüllt wird.

## Beispiele

### Zugriff auf Dateien

Der folgende Code erlaubt es dem Nutzer, eine Datei aus dem Dateiauswahldialog zu wählen.

```js
async function getFile() {
  // Open file picker and destructure the result the first handle
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  return file;
}
```

Die folgende asynchrone Funktion zeigt einen Dateiauswahldialog an und verwendet, sobald eine Datei ausgewählt ist, die `getFile()`-Methode, um den Inhalt abzurufen.

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

Das folgende Beispiel gibt einen Verzeichnishandle mit dem angegebenen Namen zurück. Falls das Verzeichnis nicht existiert, wird es erstellt.

```js
const dirName = "directoryToGetName";

// assuming we have a directory handle: 'currentDirHandle'
const subDir = await currentDirHandle.getDirectoryHandle(dirName, {
  create: true,
});
```

Die folgende asynchrone Funktion verwendet `resolve()`, um den Pfad zu einer gewählten Datei relativ zu einem angegebenen Verzeichnishandle zu finden.

```js
async function returnPathDirectories(directoryHandle) {
  // Get a file handle by showing a file picker:
  const [handle] = await self.showOpenFilePicker();
  if (!handle) {
    // User canceled, or otherwise failed to open a file.
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

Die folgende asynchrone Funktion öffnet den Speicherauswahldialog, der ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurückgibt, sobald eine Datei ausgewählt wird. Ein beschreibbarer Stream wird dann mithilfe der [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable)-Methode erstellt.

Ein vom Nutzer definiertes [`Blob`](/de/docs/Web/API/Blob) wird dann in den Stream geschrieben, der anschließend geschlossen wird.

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

Die folgenden zeigen verschiedene Beispiele von Optionen, die an die `write()`-Methode übergeben werden können.

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

Dieses Beispiel liest und schreibt synchron eine Datei im [Origin-private Dateisystem](#origin-private_dateisystem).

Die folgende asynchrone Ereignishandlerfunktion ist innerhalb eines Web Workers enthalten. Beim Empfang einer Nachricht vom Haupt-Thread:

- Erstellt es einen synchronen Datei-Zugriffshandle.
- Ermittelt die Größe der Datei und erstellt einen {{jsxref("ArrayBuffer")}}, um diese zu enthalten.
- Liest den Dateiinhalte in den Puffer.
- Kodiert die Nachricht und schreibt sie ans Ende der Datei.
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
> In früheren Versionen der Spezifikation waren [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) unergonomisch als asynchrone Methoden spezifiziert. Dies wurde nun [geändert](https://github.com/whatwg/fs/issues/7), aber einige Browser unterstützen immer noch die asynchronen Versionen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die File System Access API: Vereinfachung des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
- [Das origin-private Dateisystem](https://web.dev/articles/origin-private-file-system)

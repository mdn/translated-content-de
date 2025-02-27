---
title: File System API
slug: Web/API/File_System_API
l10n:
  sourceCommit: 328a7843ffd9e0afb4d21822d058bb08b17d3445
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

Die **File System API** — mit Erweiterungen bereitgestellt über die [**File System Access API**](https://wicg.github.io/file-system-access/) zum Zugriff auf Dateien im Dateisystem des Geräts — ermöglicht Lese-, Schreib- und Dateiverwaltungsfunktionen.

Sehen Sie sich [Beziehung zu anderen dateibezogenen APIs](/de/docs/Web/API/File_API#relationship_to_other_file-related_apis) für einen Vergleich zwischen dieser API, der [Datei- und Verzeichniseinträge-API](/de/docs/Web/API/File_and_Directory_Entries_API) und der [File API](/de/docs/Web/API/File_API) an.

## Konzepte und Verwendung

Diese API ermöglicht die Interaktion mit Dateien auf dem lokalen Gerät eines Benutzers oder in einem vom Benutzer zugänglichen Netzwerk-Dateisystem. Die Kernfunktionalität dieser API umfasst das Lesen von Dateien, das Schreiben oder Speichern von Dateien und den Zugang zur Verzeichnisstruktur.

Die meiste Interaktion mit Dateien und Verzeichnissen erfolgt über Handles. Eine übergeordnete [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) Klasse hilft, zwei untergeordnete Klassen zu definieren: [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), für Dateien bzw. Verzeichnisse.

Die Handles repräsentieren eine Datei oder ein Verzeichnis auf dem System des Benutzers. Sie können zuerst darauf zugreifen, indem Sie dem Benutzer einen Datei- oder Verzeichniswähler mit Methoden wie [`window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) und [`window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) anzeigen. Sobald diese aufgerufen wurden, präsentiert sich der Datei-Wähler und der Benutzer wählt entweder eine Datei oder ein Verzeichnis aus. Wenn dies erfolgreich ist, wird ein Handle zurückgegeben.

Sie können auch Zugriff auf Dateihandles erhalten über:

- Die Methode [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle) der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API).
- Die [File Handling API](https://developer.chrome.com/docs/capabilities/web-apis/file-handling).

Jedes Handle bietet eine eigene Funktionalität, und es gibt einige Unterschiede, je nachdem, welches Sie verwenden (siehe den Abschnitt [Schnittstellen](#schnittstellen) für spezifische Details). Sie können dann auf Dateidaten zugreifen oder Informationen (einschließlich Kinder) des ausgewählten Verzeichnisses. Diese API eröffnet potenzielle Funktionen, die dem Web gefehlt haben. Dennoch war Sicherheit bei der Gestaltung der API von größter Bedeutung, und der Zugriff auf Datei-/Verzeichnisdaten wird untersagt, es sei denn, der Benutzer erlaubt es ausdrücklich (beachten Sie, dass dies nicht der Fall ist bei dem [Origin private Datei-System](#origin_private_datei-system), da es dem Benutzer nicht sichtbar ist).

> [!NOTE]
> Die verschiedenen Ausnahmen, die beim Verwenden der Funktionen dieser API auftreten können, sind auf den relevanten Seiten aufgeführt, wie in der Spezifikation definiert. Die Situation wird jedoch durch die Interaktion der API mit dem zugrunde liegenden Betriebssystem komplexer gemacht. Ein Vorschlag wurde gemacht, um [die Fehlerzuordnungen in der Spezifikation aufzulisten](https://github.com/whatwg/fs/issues/57), die nützliche Informationen dazu enthält.

> [!NOTE]
> Objekte basierend auf [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) können auch in eine [IndexedDB](/de/docs/Web/API/IndexedDB_API) Datenbankinstanz serialisiert oder über [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden.

### Origin Private Datei-System

Das origin private Datei-System (OPFS) ist ein Speichersystem, das als Teil der File System API bereitgestellt wird und das für den Ursprung der Seite privat ist und für den Benutzer nicht sichtbar ist wie das reguläre Dateisystem. Es bietet Zugang zu einer speziellen Art von Datei, die für Leistung optimiert und für In-Place-Schreibzugriff auf ihren Inhalt konzipiert ist.

Mögliche Anwendungsfälle sind:

- Apps mit persistentem Uploader

  - Wenn eine Datei oder ein Verzeichnis zum Hochladen ausgewählt wird, können Sie die Datei in einen lokalen Sandbox kopieren und stückweise hochladen.
  - Die App kann das Hochladen nach einer Unterbrechung fortsetzen, wie das Schließen oder Abstürzen des Browsers, Unterbrechung der Verbindung oder das Herunterfahren des Computers.

- Videospiel oder andere Apps mit vielen Medienassets

  - Die App lädt ein oder mehrere große Tarballs herunter und entpackt sie lokal in eine Verzeichnisstruktur.
  - Die App lädt im Hintergrund Assets voraus, sodass der Benutzer zur nächsten Aufgabe oder Spieletappe wechseln kann, ohne auf einen Download zu warten.

- Audio- oder Fotobearbeiter mit Offline-Zugang oder lokalem Cache (ideal für Leistung und Geschwindigkeit)

  - Die App kann Dateien direkt bearbeiten (zum Beispiel nur die ID3/EXIF-Tags überschreiben und nicht die gesamte Datei).

- Offline-Video-Viewer

  - Die App kann große Dateien (>1GB) für die spätere Ansicht herunterladen.
  - Die App kann teilweise heruntergeladene Dateien zugreifen (damit Sie das erste Kapitel Ihrer DVD ansehen können, selbst wenn die App noch den Rest des Inhalts herunterlädt oder der Download nicht abgeschlossen wurde, weil Sie zum Zug mussten).

- Offline-Webmail-Client

  - Der Client lädt Anhänge herunter und speichert sie lokal.
  - Der Client cached Anhänge für das spätere Hochladen.

Lesen Sie unseren [Origin private Datei-System](/de/docs/Web/API/File_System_API/Origin_private_file_system) Leitfaden für Anweisungen zur Verwendung.

### Dateien speichern

- Im Fall der asynchronen Handles verwenden Sie die [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream) Schnittstelle. Sobald die Daten, die Sie speichern möchten, in einem Format eines [`Blob`](/de/docs/Web/API/Blob), {{jsxref("String")}} Objekts, String-Literals oder {{jsxref('ArrayBuffer', 'buffer')}} vorliegen, können Sie einen Stream öffnen und die Daten in eine Datei speichern. Dies kann die bestehende Datei oder eine neue Datei sein.
- Im Fall der synchronen [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) schreiben Sie Änderungen an eine Datei mit der [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write) Methode. Sie können optional auch [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush) aufrufen, falls Sie die Änderungen zu einem bestimmten Zeitpunkt auf die Festplatte schreiben müssen (ansonsten kann das zugrunde liegende Betriebssystem dies übernehmen, wenn es dies für angemessen hält, was in den meisten Fällen in Ordnung sein sollte).

## Schnittstellen

- [`FileSystemChangeRecord`](/de/docs/Web/API/FileSystemChangeRecord) {{experimental_inline}}
  - : Enthält Details zu einer einzigen Änderung, die von einem [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) beobachtet wurde.
- [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)
  - : Ein Objekt, das einen Datei- oder Verzeichniseintrag darstellt. Mehrere Handles können denselben Eintrag repräsentieren. In der Regel arbeiten Sie nicht direkt mit `FileSystemHandle`, sondern mit dessen untergeordneten Schnittstellen [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle).
- [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)
  - : Bietet ein Handle zu einem Dateisystemeintrag.
- [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)
  - : Bietet ein Handle zu einem Dateisystemverzeichnis.
- [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) {{experimental_inline}}
  - : Bietet einen Mechanismus zur Beobachtung von Änderungen an ausgewählten Dateien oder Verzeichnissen.
- [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)
  - : Bietet ein synchrones Handle zu einem Dateisystemeintrag, das direkt auf eine einzelne Datei auf der Festplatte arbeitet. Die synchrone Natur von Datei-Lese- und -Schreibvorgängen erlaubt eine höhere Leistung für kritische Methoden in Kontexten, in denen asynchrone Operationen mit hohem Overhead verbunden sind, z.B. [WebAssembly](/de/docs/WebAssembly). Diese Klasse ist nur innerhalb dedizierter [Web Workers](/de/docs/Web/API/Web_Workers_API) für Dateien innerhalb des [origin private Datei-Systems](#origin_private_datei-system) zugänglich.
- [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)
  - : Ein [`WritableStream`](/de/docs/Web/API/WritableStream) Objekt mit zusätzlichen Komfortfunktionen, das auf eine einzelne Datei auf der Festplatte arbeitet.

### Erweiterungen zu anderen Schnittstellen

- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker)
  - : Zeigt einen Verzeichniswähler an, der dem Benutzer ermöglicht, ein Verzeichnis auszuwählen.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker)
  - : Zeigt einen Datei-Wähler an, der es einem Benutzer ermöglicht, eine Datei oder mehrere Dateien auszuwählen.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
  - : Zeigt einen Datei-Wähler an, der es einem Benutzer ermöglicht, eine Datei zu speichern.
- [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle)
  - : Gibt ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurück, wenn das gezogene Element eine Datei ist, oder ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), wenn das gezogene Element ein Verzeichnis ist.
- [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory)
  - : Wird verwendet, um einen Verweis auf ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) Objekt zu erhalten, das Zugang zu einem Verzeichnis und dessen Inhalten verschafft, gespeichert im [origin private Datei-System](/de/docs/Web/API/File_System_API/Origin_private_file_system). Gibt eine {{jsxref('Promise')}} zurück, die sich mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) Objekt erfüllt.

## Beispiele

### Zugriff auf Dateien

Der untenstehende Code ermöglicht es dem Benutzer, eine Datei aus dem Datei-Wähler auszuwählen.

```js
async function getFile() {
  // Open file picker and destructure the result the first handle
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  return file;
}
```

Die folgende asynchrone Funktion präsentiert einen Datei-Wähler und verwendet, sobald eine Datei ausgewählt wurde, die `getFile()` Methode, um den Inhalt abzurufen.

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

Die folgende asynchrone Funktion öffnet den Datei-Speicher-Dialog, der ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurückgibt, sobald eine Datei ausgewählt wurde. Ein beschreibbarer Stream wird dann mit der Methode [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) erstellt.

Ein benutzerdefiniertes [`Blob`](/de/docs/Web/API/Blob) wird dann in den Stream geschrieben, der anschließend geschlossen wird.

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

Die folgenden Optionen zeigen verschiedene Beispiele für Optionen, die in die `write()` Methode übergeben werden können.

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

Dieses Beispiel liest und schreibt eine Datei synchron in das [origin private Datei-System](#origin_private_datei-system).

Die folgende asynchrone Ereignishandlermethode ist in einem Web Worker enthalten. Beim Empfang einer Nachricht vom Hauptthread wird:

- Ein synchrones Datei-Zugriffshandle erstellt.
- Die Größe der Datei wird ermittelt und ein {{jsxref("ArrayBuffer")}} erstellt, um sie aufzunehmen.
- Der Dateiinhalte in den Puffer gelesen.
- Die Nachricht codiert und ans Ende der Datei geschrieben.
- Die Änderungen auf die Festplatte übernommen und das Zugriffshandle geschlossen.

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
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) unkomfortabel als asynchrone Methoden spezifiziert. Dies wurde jetzt [geändert](https://github.com/whatwg/fs/issues/7), aber einige Browser unterstützen immer noch die asynchronen Versionen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [The File System Access API: Vereinfachter Zugriff auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
- [Das origin private Datei-System](https://web.dev/articles/origin-private-file-system)

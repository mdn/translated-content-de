---
title: File System API
slug: Web/API/File_System_API
l10n:
  sourceCommit: d571e753a6e1aa3f37c775f0308690bc738cdbe6
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

Die **File System API** ermöglicht – mit Erweiterungen durch die [**File System Access API**](https://wicg.github.io/file-system-access/) für den Zugriff auf Dateien im Dateisystem des Geräts – Lese-, Schreib- und Dateiverwaltungsfunktionen.

Unter [Beziehung zu anderen dateibezogenen APIs](/de/docs/Web/API/File_API#relationship_to_other_file-related_apis) finden Sie einen Vergleich zwischen dieser API, der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) und der [File API](/de/docs/Web/API/File_API).

## Konzepte und Verwendung

Diese API ermöglicht die Interaktion mit Dateien auf dem lokalen Gerät eines Benutzers oder in einem für den Benutzer zugänglichen Netzwerkdateisystem. Zu den Kernfunktionen dieser API gehören das Lesen von Dateien, das Schreiben oder Speichern von Dateien sowie der Zugriff auf die Verzeichnisstruktur.

Der größte Teil der Interaktion mit Dateien und Verzeichnissen erfolgt über Handles. Eine übergeordnete Klasse [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) hilft bei der Definition zweier untergeordneter Klassen: [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), jeweils für Dateien und Verzeichnisse.

Die Handles repräsentieren eine Datei oder ein Verzeichnis auf dem System des Benutzers. Sie können zunächst Zugriff darauf erhalten, indem Sie dem Benutzer mithilfe von Methoden wie [`window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) und [`window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) eine Datei- oder Verzeichnisauswahl anzeigen. Nach deren Aufruf wird die Dateiauswahl angezeigt, und der Benutzer wählt entweder eine Datei oder ein Verzeichnis aus. Wenn dies erfolgreich erfolgt, wird ein Handle zurückgegeben.

Sie können auch über Folgendes Zugriff auf Datei-Handles erhalten:

- Die Methode [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle) der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API).
- Die [File Handling API](https://developer.chrome.com/docs/capabilities/web-apis/file-handling).

Jedes Handle stellt eigene Funktionen bereit, und je nachdem, welches Sie verwenden, gibt es einige Unterschiede (siehe den Abschnitt [Interfaces](#interfaces) für spezifische Details). Anschließend können Sie auf Dateidaten oder Informationen (einschließlich untergeordneter Einträge) des ausgewählten Verzeichnisses zugreifen. Diese API eröffnet potenzielle Funktionen, die dem Web bisher fehlten. Dennoch war Sicherheit bei der Entwicklung der API von größter Bedeutung, und der Zugriff auf Datei-/Verzeichnisdaten ist nicht erlaubt, sofern der Benutzer ihn nicht ausdrücklich gestattet (beachten Sie, dass dies beim [origin private file system](#origin_private_file_system) nicht der Fall ist, da es für den Benutzer nicht sichtbar ist).

> [!NOTE]
> Die verschiedenen Ausnahmen, die bei der Verwendung der Funktionen dieser API ausgelöst werden können, sind auf den entsprechenden Seiten aufgeführt, wie in der Spezifikation definiert. Die Situation wird jedoch durch die Interaktion der API mit dem zugrunde liegenden Betriebssystem komplexer. Es wurde vorgeschlagen, [die Fehlerzuordnungen in der Spezifikation aufzulisten](https://github.com/whatwg/fs/issues/57), was nützliche zugehörige Informationen umfasst.

> [!NOTE]
> Objekte, die auf [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) basieren, können auch in eine [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Datenbankinstanz serialisiert oder über [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden.

### Origin private file system

Das origin private file system (OPFS) ist ein als Teil der File System API bereitgestellter Speicherendpunkt, der für den Ursprung der Seite privat und im Gegensatz zum regulären Dateisystem für den Benutzer nicht sichtbar ist. Es bietet Zugriff auf eine besondere Art von Datei, die stark auf Leistung optimiert ist und direkten Schreibzugriff auf ihren Inhalt ermöglicht.

Im Folgenden finden Sie einige mögliche Anwendungsfälle:

- Apps mit dauerhaftem Uploader
  - Wenn eine Datei oder ein Verzeichnis zum Hochladen ausgewählt wird, können Sie die Datei in eine lokale Sandbox kopieren und jeweils einen Chunk hochladen.
  - Die App kann Uploads nach einer Unterbrechung fortsetzen, etwa wenn der Browser geschlossen wird oder abstürzt, die Verbindung unterbrochen wird oder der Computer heruntergefahren wird.

- Videospiele oder andere Apps mit vielen Medien-Assets
  - Die App lädt ein oder mehrere große Tarballs herunter und entpackt sie lokal in eine Verzeichnisstruktur.
  - Die App ruft Assets im Hintergrund vorab ab, sodass der Benutzer zur nächsten Aufgabe oder Spielebene wechseln kann, ohne auf einen Download warten zu müssen.

- Audio- oder Fotoeditor mit Offlinezugriff oder lokalem Cache (hervorragend für Leistung und Geschwindigkeit)
  - Die App kann direkt in Dateien schreiben (beispielsweise nur die ID3-/EXIF-Tags und nicht die gesamte Datei überschreiben).

- Offline-Videobetrachter
  - Die App kann große Dateien (>1GB) zum späteren Ansehen herunterladen.
  - Die App kann auf teilweise heruntergeladene Dateien zugreifen (sodass Sie das erste Kapitel Ihrer DVD ansehen können, auch wenn die App den Rest des Inhalts noch herunterlädt oder den Download nicht abgeschlossen hat, weil Sie loslaufen mussten, um einen Zug zu erreichen).

- Offline-Webmail-Client
  - Der Client lädt Anhänge herunter und speichert sie lokal.
  - Der Client speichert Anhänge für einen späteren Upload im Cache.

Lesen Sie unseren Artikel zum [Origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system), um Anweisungen zur Verwendung zu erhalten.

### Dateien speichern

- Bei asynchronen Handles verwenden Sie das Interface [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream). Sobald die Daten, die Sie speichern möchten, im Format eines [`Blob`](/de/docs/Web/API/Blob), eines {{jsxref("String")}}-Objekts, eines String-Literals oder eines {{jsxref('ArrayBuffer', 'buffer')}} vorliegen, können Sie einen Stream öffnen und die Daten in einer Datei speichern. Dies kann die vorhandene Datei oder eine neue Datei sein.
- Beim synchronen [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) schreiben Sie Änderungen mithilfe der Methode [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write) in eine Datei. Optional können Sie auch [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush) aufrufen, wenn die Änderungen zu einem bestimmten Zeitpunkt auf den Datenträger geschrieben werden müssen (andernfalls können Sie dies dem zugrunde liegenden Betriebssystem überlassen, wenn es dies für angebracht hält, was in den meisten Fällen in Ordnung sein sollte).

## Interfaces

- [`FileSystemChangeRecord`](/de/docs/Web/API/FileSystemChangeRecord) {{experimental_inline}}
  - : Enthält Details zu einer einzelnen Änderung, die von einem [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) beobachtet wurde.
- [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)
  - : Ein Objekt, das einen Datei- oder Verzeichniseintrag repräsentiert. Mehrere Handles können denselben Eintrag repräsentieren. Meistens arbeiten Sie nicht direkt mit `FileSystemHandle`, sondern mit dessen untergeordneten Interfaces [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle).
- [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)
  - : Stellt ein Handle für einen Dateisystemeintrag bereit.
- [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)
  - : Stellt ein Handle für ein Dateisystemverzeichnis bereit.
- [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) {{experimental_inline}}
  - : Stellt einen Mechanismus bereit, um Änderungen an ausgewählten Dateien oder Verzeichnissen zu beobachten.
- [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)
  - : Stellt ein synchrones Handle für einen Dateisystemeintrag bereit, das direkt mit einer einzelnen Datei auf dem Datenträger arbeitet. Die synchrone Natur der Datei-Lese- und -Schreibvorgänge ermöglicht eine höhere Leistung für kritische Methoden in Kontexten, in denen asynchrone Operationen einen hohen Overhead verursachen, z. B. [WebAssembly](/de/docs/WebAssembly). Diese Klasse ist nur innerhalb dedizierter [Web Workers](/de/docs/Web/API/Web_Workers_API) für Dateien im [origin private file system](#origin_private_file_system) zugänglich.
- [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)
  - : Ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt mit zusätzlichen Komfortmethoden, das mit einer einzelnen Datei auf dem Datenträger arbeitet.

### Erweiterungen anderer Interfaces

- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker)
  - : Zeigt eine Verzeichnisauswahl an, mit der der Benutzer ein Verzeichnis auswählen kann.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker)
  - : Zeigt eine Dateiauswahl an, mit der ein Benutzer eine oder mehrere Dateien auswählen kann.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
  - : Zeigt eine Dateiauswahl an, mit der ein Benutzer eine Datei speichern kann.
- [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle)
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) erfüllt wird, wenn das gezogene Element eine Datei ist, oder mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), wenn das gezogene Element ein Verzeichnis ist.
- [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory)
  - : Wird verwendet, um eine Referenz auf ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt zu erhalten, das Zugriff auf ein Verzeichnis und dessen Inhalt ermöglicht, welche im [origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) gespeichert sind. Gibt ein {{jsxref('Promise')}} zurück, das mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erfüllt wird.

## Beispiele

### Zugriff auf Dateien

Der folgende Code ermöglicht dem Benutzer, eine Datei über die Dateiauswahl auszuwählen.

```js
async function getFile() {
  // Open file picker and destructure the result the first handle
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  return file;
}
```

Die folgende asynchrone Funktion zeigt eine Dateiauswahl an und verwendet nach der Auswahl einer Datei die Methode `getFile()`, um den Inhalt abzurufen.

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

Das folgende Beispiel gibt ein Verzeichnis-Handle mit dem angegebenen Namen zurück. Wenn das Verzeichnis nicht existiert, wird es erstellt.

```js
const dirName = "directoryToGetName";

// assuming we have a directory handle: 'currentDirHandle'
const subDir = await currentDirHandle.getDirectoryHandle(dirName, {
  create: true,
});
```

Die folgende asynchrone Funktion verwendet `resolve()`, um den Pfad zu einer ausgewählten Datei relativ zu einem angegebenen Verzeichnis-Handle zu ermitteln.

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

### In Dateien schreiben

Die folgende asynchrone Funktion öffnet die Dateiauswahl zum Speichern, die nach Auswahl einer Datei ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurückgibt. Anschließend wird mithilfe der Methode [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) ein beschreibbarer Stream erstellt.

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

Im Folgenden werden verschiedene Beispiele für Optionen gezeigt, die an die Methode `write()` übergeben werden können.

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

### Dateien im OPFS synchron lesen und schreiben

Dieses Beispiel liest und schreibt eine Datei synchron in das [origin private file system](#origin_private_file_system).

Die folgende asynchrone Event-Handler-Funktion befindet sich in einem Web Worker. Beim Empfang einer Nachricht vom Haupt-Thread führt sie Folgendes aus:

- Sie erstellt ein synchrones Datei-Zugriffs-Handle.
- Sie ermittelt die Größe der Datei und erstellt einen {{jsxref("ArrayBuffer")}}, um sie aufzunehmen.
- Sie liest den Dateiinhalt in den Buffer.
- Sie kodiert die Nachricht und schreibt sie an das Ende der Datei.
- Sie schreibt die Änderungen dauerhaft auf den Datenträger und schließt das Zugriffs-Handle.

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
> In früheren Versionen der Spezifikation waren [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) unergonomisch als asynchrone Methoden spezifiziert. Dies wurde inzwischen [korrigiert](https://github.com/whatwg/fs/issues/7), aber einige Browser unterstützen weiterhin die asynchronen Versionen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die File System Access API: Zugriff auf lokale Dateien vereinfachen](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
- [Das origin private file system](https://web.dev/articles/origin-private-file-system)

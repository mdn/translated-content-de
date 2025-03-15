---
title: File System API
slug: Web/API/File_System_API
l10n:
  sourceCommit: 59d87e8756161420f3f40dc554562858f4427e72
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

Die **File System API** — mit Erweiterungen, die über die [**File System Access API**](https://wicg.github.io/file-system-access/) zur Verfügung gestellt werden, um Zugriff auf Dateien im Dateisystem des Geräts zu ermöglichen — erlaubt Lese-, Schreib- und Dateiverwaltungsfunktionen.

Siehe [Beziehung zu anderen dateibezogenen APIs](/de/docs/Web/API/File_API#relationship_to_other_file-related_apis) für einen Vergleich zwischen dieser API, der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) und der [File API](/de/docs/Web/API/File_API).

## Konzepte und Nutzung

Diese API ermöglicht die Interaktion mit Dateien auf dem lokalen Gerät eines Benutzers oder auf einem benutzerzugänglichen Netzwerk-Dateisystem. Die Hauptfunktionen dieser API beinhalten das Lesen von Dateien, das Schreiben oder Speichern von Dateien und den Zugriff auf die Verzeichnisstruktur.

Der Großteil der Interaktion mit Dateien und Verzeichnissen erfolgt über Handles. Eine übergeordnete [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) Klasse definiert zwei untergeordnete Klassen: [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), für Dateien beziehungsweise Verzeichnisse.

Die Handles repräsentieren eine Datei oder ein Verzeichnis auf dem System des Benutzers. Sie können zuerst auf diese zugreifen, indem Sie dem Benutzer einen Datei- oder Verzeichnisauswahldialog anzeigen, indem Sie Methoden wie [`window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) und [`window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) verwenden. Sobald diese aufgerufen werden, präsentiert sich der Dateiauswahldialog, und der Benutzer wählt entweder eine Datei oder ein Verzeichnis aus. Sobald dies erfolgreich ist, wird ein Handle zurückgegeben.

Sie können auch über die folgenden Methoden auf Datei-Handles zugreifen:

- Die Methode [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle) der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API).
- Die [File Handling API](https://developer.chrome.com/docs/capabilities/web-apis/file-handling).

Jedes Handle bietet seine eigene Funktionalität, und es gibt einige Unterschiede, je nachdem, welches Sie verwenden (siehe den Abschnitt [Schnittstellen](#schnittstellen) für spezifische Details). Sie können dann auf Datei-Daten oder Informationen (einschließlich untergeordneter Elemente) des ausgewählten Verzeichnisses zugreifen. Diese API eröffnet potenzielle Funktionalitäten, die dem Web bislang fehlen. Dennoch stand Sicherheit bei der Gestaltung der API an oberster Stelle, und der Zugriff auf Datei-/Verzeichnisdaten ist untersagt, es sei denn, der Benutzer erlaubt es ausdrücklich (beachten Sie, dass dies nicht für das [Origin private file system](#origin_private_file_system) gilt, da es für den Benutzer nicht sichtbar ist).

> [!NOTE]
> Die verschiedenen Ausnahmen, die beim Verwenden der Funktionen dieser API ausgelöst werden können, sind auf den relevanten Seiten gemäß der Spezifikation aufgeführt. Die Situation wird jedoch durch die Interaktion der API mit dem zugrunde liegenden Betriebssystem komplizierter. Es wurde ein Vorschlag gemacht, um [die Fehlermapping in der Spezifikation aufzulisten](https://github.com/whatwg/fs/issues/57), was nützliche verwandte Informationen beinhaltet.

> [!NOTE]
> Objekte basierend auf [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) können auch in eine [IndexedDB](/de/docs/Web/API/IndexedDB_API) Datenbankinstanz serialisiert oder über [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden.

### Origin private file system

Das Origin private file system (OPFS) ist ein Speichersystem, das als Teil der File System API bereitgestellt wird und privat für den Ursprung der Seite ist und für den Benutzer nicht sichtbar ist wie das reguläre Dateisystem. Es bietet Zugang zu einer speziellen Art von Datei, die hochoptimiert für Leistung ist und In-Place-Schreibzugriff auf ihren Inhalt bietet.

Die folgenden sind einige mögliche Anwendungsfälle:

- Apps mit persistentem Uploader

  - Wenn eine Datei oder ein Verzeichnis zum Hochladen ausgewählt wird, können Sie die Datei in einen lokalen Sandbox kopieren und datenweise hochladen.
  - Die App kann den Upload nach einer Unterbrechung wie dem Schließen oder Abstürzen des Browsers, Verbindungsunterbrechungen oder dem Herunterfahren des Computers neu starten.

- Videospiel oder andere Apps mit vielen Medienressourcen

  - Die App lädt ein oder mehrere große Tarballs herunter und expandiert diese lokal in eine Verzeichnisstruktur.
  - Die App lädt Ressourcen im Hintergrund vor, sodass der Benutzer zur nächsten Aufgabe oder Spielebene übergehen kann, ohne auf einen Download warten zu müssen.

- Audio- oder Fotobearbeitung mit Offline-Zugriff oder lokalem Cache (ideal für Leistung und Geschwindigkeit)

  - Die App kann Dateien direkt bearbeiten (zum Beispiel nur die ID3-/EXIF-Tags überschreiben und nicht die gesamte Datei).

- Offline-Video-Viewer

  - Die App kann große Dateien (>1GB) für die spätere Ansicht herunterladen.
  - Die App kann auf teilweise heruntergeladene Dateien zugreifen (sodass Sie das erste Kapitel Ihrer DVD ansehen können, selbst wenn die App noch den Rest des Inhalts herunterlädt oder den Download nicht abgeschlossen hat, weil Sie zu einem Zug laufen mussten).

- Offline-E-Mail-Client

  - Der Client lädt Anhänge herunter und speichert sie lokal.
  - Der Client zwischenspeichert Anhänge für späteres Hochladen.

Lesen Sie unser [Origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) für Anweisungen zur Nutzung.

### Speichern von Dateien

- Im Fall der asynchronen Handles verwenden Sie die [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream) Schnittstelle. Sobald die Daten, die Sie speichern möchten, im Format von [`Blob`](/de/docs/Web/API/Blob), {{jsxref("String")}} Objekt, String literal oder {{jsxref('ArrayBuffer', 'buffer')}} vorliegen, können Sie einen Stream öffnen und die Daten in eine Datei speichern. Dies kann die bestehende Datei oder eine neue Datei sein.
- Im Fall des synchronen [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) schreiben Sie Änderungen an einer Datei mit der [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write) Methode. Sie können optional auch [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush) aufrufen, wenn Sie die Änderungen zu einem bestimmten Zeitpunkt auf der Festplatte festgeschrieben haben möchten (ansonsten können Sie das zugrunde liegende Betriebssystem dies verwalten lassen, wenn es dies für angebracht hält, was in den meisten Fällen in Ordnung sein sollte).

## Schnittstellen

- [`FileSystemChangeRecord`](/de/docs/Web/API/FileSystemChangeRecord) {{experimental_inline}}
  - : Enthält Details einer einzelnen Änderung, die von einem [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) beobachtet wird.
- [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)
  - : Ein Objekt, das einen Datei- oder Verzeichniseintrag darstellt. Mehrere Handles können denselben Eintrag repräsentieren. In den meisten Fällen arbeiten Sie nicht direkt mit `FileSystemHandle`, sondern eher mit seinen untergeordneten Schnittstellen [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle).
- [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)
  - : Bietet ein Handle zu einem Dateisystemeintrag.
- [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)
  - : Bietet ein Handle zu einem Dateisystemverzeichnis.
- [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) {{experimental_inline}}
  - : Bietet einen Mechanismus zum Beobachten von Änderungen an ausgewählten Dateien oder Verzeichnissen.
- [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)
  - : Bietet einen synchronen Handle zu einem Dateisystemeintrag, der direkt auf einer einzelnen Datei auf der Festplatte operiert. Die synchrone Natur der Datei-Lese- und Schreibvorgänge bietet eine höhere Leistung für kritische Methoden in Kontexte, in denen asynchrone Operationen mit hohem Aufwand verbunden sind, z.B. [WebAssembly](/de/docs/WebAssembly). Diese Klasse ist nur innerhalb dedizierter [Web Workers](/de/docs/Web/API/Web_Workers_API) für Dateien im [origin private file system](#origin_private_file_system) zugänglich.
- [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)
  - : Ein [`WritableStream`](/de/docs/Web/API/WritableStream) Objekt mit zusätzlichen komfortablen Methoden, das auf einer einzelnen Datei auf der Festplatte operiert.

### Erweiterungen zu anderen Schnittstellen

- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker)
  - : Zeigt einen Verzeichniswähler an, der es dem Benutzer ermöglicht, ein Verzeichnis auszuwählen.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker)
  - : Zeigt einen Dateiauswahldialog an, der es einem Benutzer ermöglicht, eine Datei oder mehrere Dateien auszuwählen.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
  - : Zeigt einen Dateiauswahldialog an, der es einem Benutzer ermöglicht, eine Datei zu speichern.
- [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle)
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) erfüllt wird, wenn das gezogene Element eine Datei ist, oder mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) erfüllt wird, wenn das gezogene Element ein Verzeichnis ist.
- [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory)
  - : Wird verwendet, um eine Referenz zu einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) Objekt zu erhalten, das den Zugriff auf ein Verzeichnis und dessen Inhalt im [origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) ermöglicht. Gibt ein {{jsxref('Promise')}} zurück, das mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) Objekt erfüllt wird.

## Beispiele

### Zugriff auf Dateien

Der untenstehende Code ermöglicht es dem Benutzer, eine Datei aus dem Dateiauswahldialog auszuwählen.

```js
async function getFile() {
  // Open file picker and destructure the result the first handle
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  return file;
}
```

Die folgende asynchrone Funktion präsentiert einen Dateiauswahldialog und verwendet, sobald eine Datei ausgewählt ist, die Methode `getFile()`, um deren Inhalt abzurufen.

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

Die folgende asynchrone Funktion öffnet den Dialog zum Speichern einer Datei, der ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurückgibt, sobald eine Datei ausgewählt wurde. Ein schreibbarer Stream wird dann mithilfe der Methode [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) erstellt.

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

Die folgenden Beispiele zeigen verschiedene Optionen, die an die `write()` Methode übergeben werden können.

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

Die folgende asynchrone Ereignisbehandlungsfunktion befindet sich in einem Web Worker. Beim Empfang einer Nachricht vom Hauptthread:

- Erstellt sie ein synchrones Datei-Zugriffshandle.
- Erfasst sie die Größe der Datei und erstellt ein {{jsxref("ArrayBuffer")}}, um sie zu enthalten.
- Liest sie den Dateiinhalte in den Puffer.
- Kodiert sie die Nachricht und schreibt sie ans Ende der Datei.
- Sichert sie die Änderungen auf der Festplatte und schließt das Zugriffshandle.

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
- [Das origin private file system](https://web.dev/articles/origin-private-file-system)

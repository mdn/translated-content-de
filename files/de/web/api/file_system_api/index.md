---
title: File System API
slug: Web/API/File_System_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

Die **Dateisystem-API** — mit Erweiterungen, die über die [**Dateisystem-Zugriffs-API**](https://wicg.github.io/file-system-access/) bereitgestellt werden, um auf Dateien im Dateisystem des Geräts zuzugreifen — ermöglicht Lese-, Schreib- und Dateiverwaltungsfunktionen.

Sehen Sie sich den Abschnitt [Beziehung zu anderen dateibezogenen APIs](/de/docs/Web/API/File_API#relationship_to_other_file-related_apis) an, um einen Vergleich zwischen dieser API, der [Datei- und Verzeichniseintrags-API](/de/docs/Web/API/File_and_Directory_Entries_API) und der [Datei-API](/de/docs/Web/API/File_API) zu erhalten.

## Konzepte und Nutzung

Diese API ermöglicht die Interaktion mit Dateien auf einem lokalen Gerät des Benutzers oder auf einem vom Benutzer zugänglichen Netzwerk-Dateisystem. Die Kernfunktionalität dieser API umfasst das Lesen von Dateien, das Schreiben oder Speichern von Dateien und den Zugriff auf die Verzeichnisstruktur.

Die meiste Interaktion mit Dateien und Verzeichnissen erfolgt über „Handles“. Eine übergeordnete Klasse [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) hilft dabei, zwei untergeordnete Klassen zu definieren: [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), jeweils für Dateien und Verzeichnisse.

Die Handles repräsentieren eine Datei oder ein Verzeichnis auf dem System des Benutzers. Sie können zuerst Zugriff auf sie erhalten, indem Sie dem Benutzer eine Dateiauswahl oder Verzeichnisauswahl mit Methoden wie [`window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) und [`window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) anzeigen. Sobald diese aufgerufen werden, erscheint der Dateiauswahldialog und der Benutzer wählt entweder eine Datei oder ein Verzeichnis. Sobald dies erfolgreich geschieht, wird ein Handle zurückgegeben.

Sie können über folgende Methoden auch Zugriff auf Datei-Handles erhalten:

- Die Methode [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle) der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API).
- Die [File Handling API](https://developer.chrome.com/docs/capabilities/web-apis/file-handling).

Jedes Handle bietet seine eigene Funktionalität und es gibt einige Unterschiede, abhängig davon, welches Sie verwenden (siehe den Abschnitt [Schnittstellen](#schnittstellen) für spezifische Details). Sie können dann auf Datei-Daten oder Informationen (einschließlich Kinder) des ausgewählten Verzeichnisses zugreifen. Diese API eröffnet potenzielle Funktionalitäten, die dem Web fehlten. Dennoch war die Sicherheit beim Design der API von größter Bedeutung, und der Zugriff auf Datei-/Verzeichnisdaten ist untersagt, es sei denn, der Benutzer erteilt ausdrücklich die Erlaubnis (beachten Sie, dass dies nicht für das [origin-privates Dateisystem](#origin-privates_dateisystem) gilt, da es für den Benutzer nicht sichtbar ist).

> [!NOTE]
> Die verschiedenen Ausnahmen, die beim Verwenden der Funktionen dieser API ausgelöst werden können, sind auf den relevanten Seiten aufgeführt, wie in der Spezifikation definiert. Allerdings wird die Situation durch die Interaktion der API mit dem zugrunde liegenden Betriebssystem komplizierter. Ein Vorschlag wurde gemacht, um [die Fehlerzuordnungen in der Spezifikation aufzulisten](https://github.com/whatwg/fs/issues/57), der nützliche verwandte Informationen enthält.

> [!NOTE]
> Objekte, die auf [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) basieren, können auch in einer [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Datenbankinstanz serialisiert oder über [`postMessage()`](/de/docs/Web/API/Window/postMessage) übertragen werden.

### Origin-privates Dateisystem

Das origin-private Dateisystem (OPFS) ist ein Speicher-Endpunkt, der als Teil der Dateisystem-API bereitgestellt wird. Es ist privat für den Ursprung der Seite und für den Benutzer nicht sichtbar, wie das reguläre Dateisystem. Es bietet Zugriff auf eine besondere Art von Datei, die hochgradig für Leistung optimiert ist und in-place Schreibzugriff auf deren Inhalt bietet.

Die folgenden sind einige mögliche Anwendungsfälle:

- Apps mit persistentem Uploader

  - Wenn eine Datei oder ein Verzeichnis zum Hochladen ausgewählt wird, können Sie die Datei in eine lokale Sandbox kopieren und Stück für Stück hochladen.
  - Die App kann Uploads nach einer Unterbrechung neu starten, wie z.B. wenn der Browser geschlossen wird oder abstürzt, die Verbindung unterbrochen wird oder der Computer heruntergefahren wird.

- Videospiel oder andere Apps mit vielen Medieninhalten

  - Die App lädt ein oder mehrere große Tarballs herunter und entpackt sie lokal in eine Verzeichnisstruktur.
  - Die App holt Assets im Hintergrund vor, sodass der Benutzer zur nächsten Aufgabe oder Spielstufe wechseln kann, ohne auf einen Download zu warten.

- Audio- oder Bildbearbeitungsprogramm mit Offline-Zugriff oder lokalem Cache (ideal für Leistung und Geschwindigkeit)

  - Die App kann Dateien vor Ort überschreiben (beispielsweise nur die ID3/EXIF-Tags und nicht die gesamte Datei überschreiben).

- Offline-Video-Viewer

  - Die App kann große Dateien (>1GB) für spätere Betrachtung herunterladen.
  - Die App kann auf teilweise heruntergeladene Dateien zugreifen (damit Sie das erste Kapitel Ihrer DVD anschauen können, auch wenn die App noch den Rest des Inhalts herunterlädt oder wenn die App den Download nicht abgeschlossen hat, weil Sie einen Zug erreichen mussten).

- Offline-Webmail-Client
  - Der Client lädt Anhänge herunter und speichert sie lokal.
  - Der Client zwischenspeichert Anhänge für einen späteren Upload.

Lesen Sie unsere [Origin-private Dateisystem](/de/docs/Web/API/File_System_API/Origin_private_file_system) für Anleitungen zur Verwendung.

### Dateien speichern

- Bei den asynchronen Handles verwenden Sie die [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Schnittstelle. Sobald die Daten, die Sie speichern möchten, in ein Format von [`Blob`](/de/docs/Web/API/Blob), {{jsxref("String")}}-Objekt, String-Literal oder {{jsxref('ArrayBuffer', 'Buffer')}} vorliegen, können Sie einen Stream öffnen und die Daten in einer Datei speichern. Dies kann die vorhandene oder eine neue Datei sein.
- Im Fall der synchronen [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) bearbeiten Sie Änderungen an einer Datei über die [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write)-Methode. Sie können optional auch [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush) aufrufen, wenn Sie die Änderungen zu einem bestimmten Zeitpunkt auf die Festplatte speichern müssen (ansonsten können Sie das zugrunde liegende Betriebssystem dies handhaben lassen, wenn es dies für angemessen hält, was in den meisten Fällen in Ordnung sein sollte).

## Schnittstellen

- [`FileSystemChangeRecord`](/de/docs/Web/API/FileSystemChangeRecord) {{experimental_inline}}
  - : Enthält Details zu einer einzelnen Änderung, die von einem [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) beobachtet wird.
- [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)
  - : Ein Objekt, das einen Datei- oder Verzeichniseintrag repräsentiert. Mehrere Handles können denselben Eintrag repräsentieren. Meistens arbeiten Sie nicht direkt mit `FileSystemHandle`, sondern mit seinen Kinderschnittstellen [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle).
- [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)
  - : Bietet einen Handle zu einem Dateisystemeintrag.
- [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)
  - : Bietet einen Handle zu einem Dateisystemverzeichnis.
- [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) {{experimental_inline}}
  - : Bietet einen Mechanismus, um Änderungen an ausgewählten Dateien oder Verzeichnissen zu beobachten.
- [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)
  - : Bietet einen synchronen Handle zu einem Dateisystemeintrag, der in-place auf einer einzigen Datei auf der Festplatte arbeitet. Die synchrone Natur der Datei-Lese- und Schreiboperationen ermöglicht eine höhere Leistung für kritische Methoden in Kontexten, in denen asynchrone Operationen mit hohen Overhead verbunden sind, z.B. [WebAssembly](/de/docs/WebAssembly). Diese Klasse ist nur innerhalb dedizierter [Web Worker](/de/docs/Web/API/Web_Workers_API) für Dateien im [origin-privaten Dateisystem](#origin-privates_dateisystem) zugänglich.
- [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)
  - : Ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt mit zusätzlichen Komfortmethoden, das auf einer einzigen Datei auf der Festplatte arbeitet.

### Erweiterungen zu anderen Schnittstellen

- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker)
  - : Zeigt eine Verzeichnisauswahl an, die es dem Benutzer ermöglicht, ein Verzeichnis auszuwählen.
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker)
  - : Zeigt eine Dateiauswahl an, die es einem Benutzer ermöglicht, eine oder mehrere Dateien auszuwählen.
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
  - : Zeigt eine Dateiauswahl an, die es einem Benutzer ermöglicht, eine Datei zu speichern.
- [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle)
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) erfüllt wird, wenn das gezogene Element eine Datei ist, oder mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), wenn das gezogene Element ein Verzeichnis ist.
- [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory)
  - : Wird verwendet, um eine Referenz zu einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt zu erhalten, das Zugriff auf ein Verzeichnis und dessen Inhalte ermöglicht, die im [origin-privaten Dateisystem](/de/docs/Web/API/File_System_API/Origin_private_file_system) gespeichert sind. Gibt ein {{jsxref('Promise')}} zurück, das mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erfüllt wird.

## Beispiele

### Zugriff auf Dateien

Der unten stehende Code erlaubt es dem Benutzer, eine Datei aus dem Dateiauswahldialog auszuwählen.

```js
async function getFile() {
  // Open file picker and destructure the result the first handle
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  return file;
}
```

Die folgende asynchrone Funktion präsentiert einen Dateiauswahl-Dialog und verwendet, sobald eine Datei ausgewählt wurde, die `getFile()`-Methode, um den Inhalt abzurufen.

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

### Schreiben in Dateien

Die folgende asynchrone Funktion öffnet den Dateispeicherdialog, der ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurückgibt, sobald eine Datei ausgewählt ist. Ein schreibbarer Stream wird dann mittels der Methode [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) erstellt.

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

Dieses Beispiel liest und schreibt synchron eine Datei in das [origin-private Dateisystem](#origin-privates_dateisystem).

Die folgende asynchrone Ereignisbehandlungsfunktion ist in einem Web Worker enthalten. Beim Empfang einer Nachricht vom Hauptthread:

- Erstellt sie einen synchronen Datei-Zugriffshandle.
- Erfasst die Größe der Datei und erstellt einen {{jsxref("ArrayBuffer")}}, um diese zu enthalten.
- Liest die Dateiinhalte in den Puffer.
- Kodiert die Nachricht und schreibt sie ans Ende der Datei.
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

- [Die Dateisystem-Zugriffs-API: Vereinfachung des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
- [Das origin-private Dateisystem](https://web.dev/articles/origin-private-file-system)

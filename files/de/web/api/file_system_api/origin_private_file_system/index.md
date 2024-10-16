---
title: Origin-Privates Dateisystem
slug: Web/API/File_System_API/Origin_private_file_system
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

Das **origin-private Dateisystem** (OPFS) ist ein Speicherendpunkt, der als Teil der [File System API](/de/docs/Web/API/File_System_API) bereitgestellt wird, das für den Ursprung der Seite privat ist und nicht für den Benutzer sichtbar ist wie das normale Dateisystem. Es bietet Zugriff auf eine spezielle Art von Datei, die hochgradig für Leistung optimiert ist und unmittelbaren Schreibzugriff auf ihre Inhalte bietet.

## Arbeiten mit Dateien unter Verwendung der File System Access API

Die [File System Access API](https://wicg.github.io/file-system-access/), die die [File System API](/de/docs/Web/API/File_System_API) erweitert, ermöglicht den Zugriff auf Dateien über Auswahlmethoden. Zum Beispiel:

1. Mit [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) kann der Benutzer eine Datei auswählen, auf die zugegriffen werden soll, was in einem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt resultiert.
2. [`FileSystemFileHandle.getFile()`](/de/docs/Web/API/FileSystemFileHandle/getFile) wird aufgerufen, um Zugriff auf den Dateiinhalte zu erhalten, der Inhalt wird mit [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) / [`FileSystemWritableFileStream.write()`](/de/docs/Web/API/FileSystemWritableFileStream/write) geändert.
3. [`FileSystemHandle.requestPermission({mode: 'readwrite'})`](/de/docs/Web/API/FileSystemHandle/requestPermission) wird verwendet, um die Erlaubnis des Benutzers zur Speicherung der Änderungen anzufordern.
4. Wenn der Benutzer die Erlaubnisanfrage akzeptiert, werden die Änderungen in der Originaldatei gespeichert.

Das funktioniert, hat aber einige Einschränkungen. Diese Änderungen werden im benutzersichtbaren Dateisystem vorgenommen, daher gibt es viele Sicherheitsprüfungen (z. B. [Safe Browsing](https://developers.google.com/safe-browsing) in Chrome), um zu verhindern, dass bösartige Inhalte in dieses Dateisystem geschrieben werden. Diese Schreibvorgänge erfolgen nicht direkt, sondern verwenden stattdessen eine temporäre Datei. Das Original wird nicht geändert, es sei denn, es bestehen alle Sicherheitsüberprüfungen.

Infolgedessen sind diese Operationen relativ langsam. Es fällt nicht so auf, wenn Sie kleine Textaktualisierungen vornehmen, aber die Leistung leidet bei signifikant größeren Dateiaktualisierungen wie z.B. [SQLite](https://www.sqlite.org/wasm)-Datenbankänderungen.

## Wie löst das OPFS solche Probleme?

Das OPFS bietet Low-Level-Zugriff auf Dateien Byte für Byte, das privat für den Ursprung der Seite ist und für den Benutzer nicht sichtbar ist. Daher erfordert es nicht die gleiche Reihe von Sicherheitsüberprüfungen und Erlaubnisanfragen und ist daher schneller als Aufrufe der File System Access API. Es verfügt auch über eine Reihe synchroner Aufrufe (andere Aufrufe der File System API sind asynchron), die nur innerhalb von Web-Workern ausgeführt werden können, um den Hauptthread nicht zu blockieren.

Zusammenfassend unterscheidet sich das OPFS vom benutzersichtbaren Dateisystem folgendermaßen:

- Das OPFS unterliegt den [Speicherquoteneinschränkungen des Browsers](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), wie jeder andere ursprungspartitionierte Speichersystem (z.B. [IndexedDB API](/de/docs/Web/API/IndexedDB_API)). Sie können die Menge an Speicherplatz, die das OPFS verwendet, über [`navigator.storage.estimate()`](/de/docs/Web/API/StorageManager/estimate) abrufen.
- Das Löschen von Speicherdaten für die Seite löscht das OPFS.
- Erlaubnisanfragen und Sicherheitsüberprüfungen sind nicht erforderlich, um auf Dateien im OPFS zuzugreifen.
- Browser speichern den Inhalt des OPFS irgendwo auf der Festplatte, aber man kann nicht erwarten, die erstellten Dateien eins zu eins zu finden. Das OPFS soll für den Benutzer nicht sichtbar sein.

## Wie greifen Sie auf das OPFS zu?

Um überhaupt auf das OPFS zuzugreifen, rufen Sie die Methode [`navigator.storage.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) auf. Dies gibt eine Referenz auf ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt zurück, das die Wurzel des OPFS darstellt.

## Manipulation des OPFS vom Hauptthread aus

Beim Zugriff auf das OPFS vom Hauptthread verwenden Sie asynchrone, {{jsxref("Promise")}}-basierte APIs. Sie können Dateihandles ([`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)) und Verzeichnishandles ([`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)) durch Aufrufen von [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle) und [`FileSystemDirectoryHandle.getDirectoryHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getDirectoryHandle) jeweils auf dem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt, das die OPFS-Wurzel (und Kindverzeichnisse, wie sie erstellt werden) repräsentiert, aufrufen.

> [!NOTE]
> Das Übergeben von `{ create: true }` in die oben genannten Methoden führt dazu, dass die Datei oder der Ordner erstellt wird, wenn er nicht existiert.

```js
// Create a hierarchy of files and folders
const fileHandle = await opfsRoot.getFileHandle("my first file", {
  create: true,
});
const directoryHandle = await opfsRoot.getDirectoryHandle("my first folder", {
  create: true,
});
const nestedFileHandle = await directoryHandle.getFileHandle(
  "my first nested file",
  { create: true },
);
const nestedDirectoryHandle = await directoryHandle.getDirectoryHandle(
  "my first nested folder",
  { create: true },
);

// Access existing files and folders via their names
const existingFileHandle = await opfsRoot.getFileHandle("my first file");
const existingDirectoryHandle =
  await opfsRoot.getDirectoryHandle("my first folder");
```

### Lesen einer Datei

1. Rufen Sie [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle) auf, um ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt zu erhalten.
2. Rufen Sie das Objekt [`FileSystemFileHandle.getFile()`](/de/docs/Web/API/FileSystemFileHandle/getFile) auf, um ein [`File`](/de/docs/Web/API/File)-Objekt zurückzugeben. Dies ist ein spezialisierter Typ von [`Blob`](/de/docs/Web/API/Blob), und kann wie jeder andere `Blob` manipuliert werden. Zum Beispiel könnten Sie auf den Textinhalt direkt über [`Blob.text()`](/de/docs/Web/API/Blob/text) zugreifen.

### Schreiben einer Datei

1. Rufen Sie [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle) auf, um ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt zu erhalten.
2. Rufen Sie [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) auf, um ein [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Objekt, das ein spezialisierter Typ von [`WritableStream`](/de/docs/Web/API/WritableStream) ist, zurückzugeben.
3. Schreiben Sie Inhalte darauf, indem Sie einen Aufruf von [`FileSystemWritableFileStream.write()`](/de/docs/Web/API/FileSystemWritableFileStream/write) durchführen.
4. Schließen Sie den Stream mit [`WritableStream.close()`](/de/docs/Web/API/WritableStream/close).

### Löschen einer Datei oder eines Ordners

Sie können [`FileSystemDirectoryHandle.removeEntry()`](/de/docs/Web/API/FileSystemDirectoryHandle/removeEntry) im übergeordneten Verzeichnis aufrufen und den Namen des Elements, das Sie entfernen möchten, übergeben:

```js
directoryHandle.removeEntry("my first nested file");
```

Sie können auch [`FileSystemHandle.remove()`](/de/docs/Web/API/FileSystemHandle/remove) auf dem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) oder [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) aufrufen, das das zu entfernende Element repräsentiert. Um einen Ordner einschließlich aller Unterordner zu löschen, verwenden Sie die Option `{ recursive: true }`.

```js
await fileHandle.remove();
await directoryHandle.remove({ recursive: true });
```

Das folgende bietet eine schnelle Möglichkeit, das gesamte OPFS zu löschen:

```js
await (await navigator.storage.getDirectory()).remove({ recursive: true });
```

### Auflisten des Inhalts eines Ordners

[`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) ist ein [asynchroner Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols). Infolgedessen können Sie mit einer [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife und Standardmethoden wie [`entries()`](/de/docs/Web/API/FileSystemDirectoryHandle/entries), [`values()`](/de/docs/Web/API/FileSystemDirectoryHandle/entries) und [`keys()`](/de/docs/Web/API/FileSystemDirectoryHandle/entries) darüber iterieren.

Zum Beispiel:

```js
for await (let [name, handle] of directoryHandle) {
}
for await (let [name, handle] of directoryHandle.entries()) {
}
for await (let handle of directoryHandle.values()) {
}
for await (let name of directoryHandle.keys()) {
}
```

## Manipulation des OPFS von einem Web Worker aus

Web Worker blockieren den Hauptthread nicht, was bedeutet, dass Sie die synchronen Datei-Zugriffs-APIs in diesem Kontext verwenden können. Synchrone APIs sind schneller, da sie den Umgang mit Promises vermeiden.

Sie können synchron auf eine Datei zugreifen, indem Sie [`FileSystemFileHandle.createSyncAccessHandle()`](/de/docs/Web/API/FileSystemFileHandle/createSyncAccessHandle) auf einem regulären [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) aufrufen:

> [!NOTE]
> Obwohl "Sync" im Namen steht, ist die Methode `createSyncAccessHandle()` selbst asynchron.

```js
const opfsRoot = await navigator.storage.getDirectory();
const fileHandle = await opfsRoot.getFileHandle("my-high-speed-file.txt", {
  create: true,
});
const syncAccessHandle = await fileHandle.createSyncAccessHandle();
```

Es gibt eine Reihe von _synchronen_ Methoden, die auf dem zurückgegebenen [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) verfügbar sind:

- [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize): Gibt die Größe der Datei in Bytes zurück.
- [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write): Schreibt den Inhalt eines Puffers in die Datei, optional an einem bestimmten Offset, und gibt die Anzahl der geschriebenen Bytes zurück. Durch das Überprüfen der zurückgegebenen Anzahl der geschriebenen Bytes können Aufrufer Fehler und teilweise Schreiben erkennen und behandeln.
- [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read): Liest den Inhalt der Datei in einen Puffer, optional an einem bestimmten Offset.
- [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate): Ändert die Größe der Datei auf die angegebene Größe.
- [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush): Stellt sicher, dass die Dateiinhalte alle durch `write()` vorgenommenen Änderungen beinhalten.
- [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close): Schließt den Zugriffs-Handle.

Hier ist ein Beispiel, das alle oben genannten Methoden verwendet:

```js
const opfsRoot = await navigator.storage.getDirectory();
const fileHandle = await opfsRoot.getFileHandle("fast", { create: true });
const accessHandle = await fileHandle.createSyncAccessHandle();

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

// Initialize this variable for the size of the file.
let size;
// The current size of the file, initially `0`.
size = accessHandle.getSize();
// Encode content to write to the file.
const content = textEncoder.encode("Some text");
// Write the content at the beginning of the file.
accessHandle.write(content, { at: size });
// Flush the changes.
accessHandle.flush();
// The current size of the file, now `9` (the length of "Some text").
size = accessHandle.getSize();

// Encode more content to write to the file.
const moreContent = textEncoder.encode("More content");
// Write the content at the end of the file.
accessHandle.write(moreContent, { at: size });
// Flush the changes.
accessHandle.flush();
// The current size of the file, now `21` (the length of
// "Some textMore content").
size = accessHandle.getSize();

// Prepare a data view of the length of the file.
const dataView = new DataView(new ArrayBuffer(size));

// Read the entire file into the data view.
accessHandle.read(dataView, { at: 0 });
// Logs `"Some textMore content"`.
console.log(textDecoder.decode(dataView));

// Read starting at offset 9 into the data view.
accessHandle.read(dataView, { at: 9 });
// Logs `"More content"`.
console.log(textDecoder.decode(dataView));

// Truncate the file after 4 bytes.
accessHandle.truncate(4);
```

## Siehe auch

- [Das origin-private Dateisystem](https://web.dev/articles/origin-private-file-system) auf web.dev

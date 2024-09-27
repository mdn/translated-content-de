---
title: Origin Private File System
slug: Web/API/File_System_API/Origin_private_file_system
l10n:
  sourceCommit: 2cba64f68aab9e233fecfc2bab8bea4118716c14
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

Das **Origin Private File System** (OPFS) ist ein Speichersystem, das als Teil der [File System API](/de/docs/Web/API/File_System_API) bereitgestellt wird. Es ist spezifisch für den Ursprung der Seite und nicht für den Benutzer sichtbar wie das reguläre Dateisystem. Es bietet Zugriff auf eine spezielle Art von Datei, die hochoptimiert für Leistung ist und direkten Schreibzugriff auf ihren Inhalt ermöglicht.

## Arbeiten mit Dateien über die File System Access API

Die [File System Access API](https://wicg.github.io/file-system-access/), die die [File System API](/de/docs/Web/API/File_System_API) erweitert, ermöglicht den Zugriff auf Dateien über Auswahldialoge. Zum Beispiel:

1. [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) ermöglicht es dem Benutzer, eine Datei auszuwählen, woraufhin ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt zurückgegeben wird.
2. [`FileSystemFileHandle.getFile()`](/de/docs/Web/API/FileSystemFileHandle/getFile) wird aufgerufen, um Zugriff auf den Inhalt der Datei zu erhalten. Dieser Inhalt wird dann mit [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) / [`FileSystemWritableFileStream.write()`](/de/docs/Web/API/FileSystemWritableFileStream/write) bearbeitet.
3. [`FileSystemHandle.requestPermission({mode: 'readwrite'})`](/de/docs/Web/API/FileSystemHandle/requestPermission) wird verwendet, um die Erlaubnis des Benutzers zu erbitten, die Änderungen zu speichern.
4. Wenn der Benutzer die Anfrage akzeptiert, werden die Änderungen in der Originaldatei gespeichert.

Dies funktioniert, hat aber einige Einschränkungen. Diese Änderungen werden am benutzersichtbaren Dateisystem vorgenommen, daher gibt es viele Sicherheitsüberprüfungen (zum Beispiel [sicheres Surfen](https://developers.google.com/safe-browsing) in Chrome), um zu verhindern, dass schädliche Inhalte in das Dateisystem geschrieben werden. Diese Schreibvorgänge sind nicht direkt im Dateisystem, sondern nutzen eine temporäre Datei. Das Original wird nur dann geändert, wenn es alle Sicherheitsüberprüfungen besteht.

Infolgedessen sind diese Operationen recht langsam. Es fällt nicht so sehr auf, wenn Sie kleine Textänderungen vornehmen, aber die Leistung leidet bei größeren, umfangreicheren Dateiänderungen wie Modifikationen an [SQLite](https://www.sqlite.org/wasm)-Datenbanken.

## Wie löst das OPFS solche Probleme?

Das OPFS bietet niedrige, byteweise Dateizugriffsoptionen, die für den Ursprung der Seite privat sind und für den Benutzer nicht sichtbar. Daher erfordert es nicht dieselben Sicherheitsüberprüfungen und Berechtigungen wie die File System Access API und ist somit schneller. Es stehen auch eine Reihe von synchronen Aufrufen zur Verfügung (andere Aufrufe der File System API sind asynchron), die ausschließlich innerhalb von Webarbeitern ausgeführt werden können, um den Hauptthread nicht zu blockieren.

Zusammenfassend unterscheiden sich das OPFS und das benutzersichtbare Dateisystem wie folgt:

- Das OPFS unterliegt [Browser-Speicherquotenbeschränkungen](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), ähnlich wie jeder andere ursprungspartitionierte Speichermodus (zum Beispiel [IndexedDB API](/de/docs/Web/API/IndexedDB_API)). Sie können den genutzten Speicherplatz des OPFS über [`navigator.storage.estimate()`](/de/docs/Web/API/StorageManager/estimate) abrufen.
- Das Löschen von Speicherdaten der Seite löscht das OPFS.
- Berechtigungsabfragen und Sicherheitsüberprüfungen sind nicht erforderlich, um auf Dateien im OPFS zuzugreifen.
- Browser speichern den Inhalt des OPFS irgendwo auf der Festplatte, aber Sie können nicht erwarten, die erstellten Dateien eins zu eins wiederzufinden. Das OPFS ist nicht dazu gedacht, für den Benutzer sichtbar zu sein.

## Wie greifen Sie auf das OPFS zu?

Um zunächst auf das OPFS zuzugreifen, rufen Sie die Methode [`navigator.storage.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) auf. Diese gibt eine Referenz auf ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt zurück, das die Wurzel des OPFS darstellt.

## Manipulation des OPFS vom Hauptthread

Beim Zugriff auf das OPFS vom Hauptthread verwenden Sie asynchrone, {{jsxref("Promise")}}-basierte APIs. Sie können Datei- ([`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)) und Verzeichnis- ([`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)) Handles durch Aufrufe von [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle) und [`FileSystemDirectoryHandle.getDirectoryHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getDirectoryHandle) entsprechend auf dem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erhalten, das die Wurzel des OPFS darstellt (und untergeordnete Verzeichnisse, wie sie erstellt werden).

> [!NOTE]
> Wenn `{ create: true }` in die obigen Methoden übergeben wird, wird die Datei oder der Ordner erstellt, falls dieser nicht existiert.

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

1. Machen Sie einen [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle)-Aufruf, um ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt zu erhalten.
2. Rufen Sie das [`FileSystemFileHandle.getFile()`](/de/docs/Web/API/FileSystemFileHandle/getFile)-Objekt auf, um ein [`File`](/de/docs/Web/API/File)-Objekt zurückzugeben. Dies ist eine spezielle Art von [`Blob`](/de/docs/Web/API/Blob), und kann daher wie jedes andere `Blob` manipuliert werden. Zum Beispiel können Sie direkt auf den Textinhalt über [`Blob.text()`](/de/docs/Web/API/Blob/text) zugreifen.

### Schreiben in eine Datei

1. Machen Sie einen [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle)-Aufruf, um ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt zu erhalten.
2. Rufen Sie [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) auf, um ein [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Objekt zu erhalten, welches eine spezialisierte Art von [`WritableStream`](/de/docs/Web/API/WritableStream) ist.
3. Schreiben Sie Inhalte mit einem [`FileSystemWritableFilestream.write()`](/de/docs/Web/API/FileSystemWritableFilestream/write)-Aufruf.
4. Schließen Sie den Stream mit [`WritableStream.close()`](/de/docs/Web/API/WritableStream/close).

### Löschen einer Datei oder eines Ordners

Sie können [`FileSystemDirectoryHandle.removeEntry()`](/de/docs/Web/API/FileSystemDirectoryHandle/removeEntry) auf das übergeordnete Verzeichnis aufrufen und den Namen des zu entfernenden Elements übergeben:

```js
directoryHandle.removeEntry("my first nested file");
```

Sie können auch [`FileSystemHandle.remove()`](/de/docs/Web/API/FileSystemHandle/remove) auf dem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) oder [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) aufrufen, das das zu entfernende Element darstellt. Um einen Ordner einschließlich aller Unterordner zu löschen, übergeben Sie die `{ recursive: true }`-Option.

```js
await fileHandle.remove();
await directoryHandle.remove({ recursive: true });
```

Das Folgende bietet eine schnelle Möglichkeit, das gesamte OPFS zu löschen:

```js
await (await navigator.storage.getDirectory()).remove({ recursive: true });
```

### Auflisten der Inhalte eines Ordners

[`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) ist ein [asynchroner Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols). Daher können Sie über ihn mit einer [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife und Standardmethoden wie [`entries()`](/de/docs/Web/API/FileSystemDirectoryHandle/entries), [`values()`](/de/docs/Web/API/FileSystemDirectoryHandle/entries) und [`keys()`](/de/docs/Web/API/FileSystemDirectoryHandle/entries) iterieren.

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

## Manipulation des OPFS aus einem Web Worker

Web Workers blockieren nicht den Hauptthread, was bedeutet, dass Sie die synchronen Dateizugriffs-APIs in diesem Kontext verwenden können. Synchrone APIs sind schneller, da sie nicht mit Promises umgehen müssen.

Sie können synchron auf eine Datei zugreifen, indem Sie [`FileSystemFileHandle.createSyncAccessHandle()`](/de/docs/Web/API/FileSystemFileHandle/createSyncAccessHandle) auf einem regulären [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) aufrufen:

> [!NOTE]
> Trotz des Namens "Sync" ist die Methode `createSyncAccessHandle()` selbst asynchron.

```js
const opfsRoot = await navigator.storage.getDirectory();
const fileHandle = await opfsRoot.getFileHandle("my highspeed file.txt", {
  create: true,
});
const syncAccessHandle = await fileHandle.createSyncAccessHandle();
```

Es gibt eine Reihe _synchroner_ Methoden, die auf dem zurückgegebenen [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) verfügbar sind:

- [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize): Gibt die Größe der Datei in Bytes zurück.
- [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write): Schreibt den Inhalt eines Puffers in die Datei, optional an einem bestimmten Offset, und gibt die Anzahl der geschriebenen Bytes zurück. Durch Überprüfung der zurückgegebenen Anzahl können Rufer Fehler und Teilweise-Schreiboperationen erkennen und behandeln.
- [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read): Liest den Inhalt der Datei in einen Puffer, optional an einem bestimmten Offset.
- [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate): Passt die Größe der Datei an die angegebene Größe an.
- [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush): Stellt sicher, dass der Dateiinhalte alle durch `write()` vorgenommenen Änderungen enthält.
- [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close): Schließt den Zugriffshandle.

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

- [Das origin private file system](https://web.dev/articles/origin-private-file-system) auf web.dev

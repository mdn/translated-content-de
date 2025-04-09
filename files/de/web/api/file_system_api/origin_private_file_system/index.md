---
title: Origin privates Dateisystem
slug: Web/API/File_System_API/Origin_private_file_system
l10n:
  sourceCommit: d65517535ae067fa876d5fae83626dff838e9796
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

Das **origin privates Dateisystem** (OPFS) ist ein Speicherendpunkt, der als Teil der [File System API](/de/docs/Web/API/File_System_API) bereitgestellt wird. Es ist nur für den Ursprung der Seite sichtbar und nicht für den Benutzer wie das reguläre Dateisystem. Es bietet Zugriff auf eine spezielle Art von Datei, die hochgradig für Leistung optimiert ist und direkten Schreibzugriff auf ihren Inhalt ermöglicht.

## Arbeiten mit Dateien über die File System Access API

Die [File System Access API](https://wicg.github.io/file-system-access/), die die [File System API](/de/docs/Web/API/File_System_API) erweitert, bietet Zugriff auf Dateien über Auswahlmethoden. Zum Beispiel:

1. [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) ermöglicht es dem Benutzer, eine Datei zur Nutzung auszuwählen, wobei ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) Objekt zurückgegeben wird.
2. [`FileSystemFileHandle.getFile()`](/de/docs/Web/API/FileSystemFileHandle/getFile) wird aufgerufen, um auf den Inhalt der Datei zuzugreifen. Der Inhalt wird über [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) / [`FileSystemWritableFileStream.write()`](/de/docs/Web/API/FileSystemWritableFileStream/write) geändert.
3. [`FileSystemHandle.requestPermission({mode: 'readwrite'})`](/de/docs/Web/API/FileSystemHandle/requestPermission) wird verwendet, um die Erlaubnis des Benutzers zum Speichern der Änderungen anzufordern.
4. Wenn der Benutzer die Berechtigungsanfrage akzeptiert, werden die Änderungen in der Originaldatei gespeichert.

Das funktioniert, hat aber einige Einschränkungen. Diese Änderungen werden im für den Benutzer sichtbaren Dateisystem vorgenommen, daher gibt es viele Sicherheitsüberprüfungen (zum Beispiel [sicheres Browsen](https://developers.google.com/safe-browsing) in Chrome), um zu verhindern, dass bösartige Inhalte in dieses Dateisystem geschrieben werden. Diese Schreibvorgänge sind nicht direkt, sondern verwenden eine temporäre Datei. Das Original wird nur geändert, wenn es alle Sicherheitsprüfungen besteht.

Infolgedessen sind diese Operationen ziemlich langsam. Es fällt nicht so auf, wenn Sie kleine Textaktualisierungen vornehmen, aber die Leistung leidet bei umfangreicheren Dateiaufgaben wie [SQLite](https://sqlite.org/wasm) Datenbankänderungen.

## Wie löst das OPFS solche Probleme?

Das OPFS bietet Zugriff auf Dateien auf niedriger Ebene, byteweise, was privat für den Ursprung der Seite ist und nicht für den Benutzer sichtbar. Daher sind nicht die gleichen Sicherheitsprüfungen und Zustimmungserteilungen erforderlich, und es ist schneller als Aufrufe der File System Access API. Es verfügt auch über eine Reihe von synchronen Aufrufen (andere File System API-Aufrufe sind asynchron), die nur in Web-Workern ausgeführt werden können, um den Hauptthread nicht zu blockieren.

Zusammenfassend die Unterschiede des OPFS zum für den Benutzer sichtbaren Dateisystem:

- Das OPFS unterliegt den [Speicherquoten-Beschränkungen des Browsers](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), wie jedes andere ursprungsbasierte Speichersystem (zum Beispiel die [IndexedDB API](/de/docs/Web/API/IndexedDB_API)). Sie können den Speicherplatz, den das OPFS verwendet, über [`navigator.storage.estimate()`](/de/docs/Web/API/StorageManager/estimate) abrufen.
- Das Löschen von Speicherdaten für die Website löscht das OPFS.
- Zugriffsberechtigungen und Sicherheitsüberprüfungen sind nicht erforderlich, um auf Dateien im OPFS zuzugreifen.
- Browser speichern den Inhalt des OPFS irgendwo auf der Festplatte, aber Sie können nicht erwarten, die erstellten Dateien direkt zu finden. Das OPFS soll nicht für den Benutzer sichtbar sein.

## Wie greift man auf das OPFS zu?

Um zunächst auf das OPFS zuzugreifen, rufen Sie die Methode [`navigator.storage.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) auf. Diese gibt eine Referenz zu einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) Objekt zurück, das die Wurzel des OPFS repräsentiert.

## Manipulation des OPFS vom Hauptthread aus

Beim Zugriff auf das OPFS vom Hauptthread aus verwenden Sie asynchrone, {{jsxref("Promise")}}-basierte APIs. Sie können Datei- ([`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)) und Verzeichnis- ([`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)) Handles abrufen, indem Sie [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle) und [`FileSystemDirectoryHandle.getDirectoryHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getDirectoryHandle) auf dem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) Objekt aufrufen, das die Wurzel des OPFS (und bei der Erstellung auch untergeordnete Verzeichnisse) repräsentiert.

> [!NOTE]
> Das Übergeben von `{ create: true }` in die oben genannten Methoden führt dazu, dass die Datei oder der Ordner erstellt wird, wenn er nicht vorhanden ist.

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

### Eine Datei lesen

1. Führen Sie einen [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle)-Aufruf aus, um ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) Objekt zurückzugeben.
2. Rufen Sie das [`FileSystemFileHandle.getFile()`](/de/docs/Web/API/FileSystemFileHandle/getFile) Objekt auf, um ein [`File`](/de/docs/Web/API/File) Objekt zurückzugeben. Dies ist ein spezialisierter Typ von [`Blob`](/de/docs/Web/API/Blob), und daher kann es wie jedes andere `Blob` manipuliert werden. Zum Beispiel könnten Sie direkt über [`Blob.text()`](/de/docs/Web/API/Blob/text) auf den Textinhalt zugreifen.

### Eine Datei schreiben

1. Führen Sie einen [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle)-Aufruf aus, um ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) Objekt zurückzugeben.
2. Rufen Sie [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) auf, um ein [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream) Objekt zurückzugeben, das ein spezialisierter Typ von [`WritableStream`](/de/docs/Web/API/WritableStream) ist.
3. Schreiben Sie Inhalte in diesen Stream, indem Sie [`FileSystemWritableFileStream.write()`](/de/docs/Web/API/FileSystemWritableFileStream/write) aufrufen.
4. Schließen Sie den Stream mit [`WritableStream.close()`](/de/docs/Web/API/WritableStream/close).

### Eine Datei oder einen Ordner löschen

Sie können [`FileSystemDirectoryHandle.removeEntry()`](/de/docs/Web/API/FileSystemDirectoryHandle/removeEntry) für das übergeordnete Verzeichnis aufrufen, indem Sie den Namen des zu entfernenden Elements übergeben:

```js
directoryHandle.removeEntry("my first nested file");
```

Sie können auch [`FileSystemHandle.remove()`](/de/docs/Web/API/FileSystemHandle/remove) auf dem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) oder [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) aufrufen, das das zu entfernende Element repräsentiert. Um einen Ordner einschließlich aller Unterordner zu löschen, übergeben Sie die `{ recursive: true }` Option.

```js
await fileHandle.remove();
await directoryHandle.remove({ recursive: true });
```

Das Folgende bietet eine schnelle Möglichkeit, das gesamte OPFS zu leeren:

```js
await (await navigator.storage.getDirectory()).remove({ recursive: true });
```

### Den Inhalt eines Ordners auflisten

[`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) ist ein [asynchroner Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols). Daher können Sie mit einer [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Schleife und Standardmethoden wie [`entries()`](/de/docs/Web/API/FileSystemDirectoryHandle/entries), [`values()`](/de/docs/Web/API/FileSystemDirectoryHandle/entries) und [`keys()`](/de/docs/Web/API/FileSystemDirectoryHandle/entries) darüber iterieren.

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

## Manipulation des OPFS von einem Web Worker

Web Worker blockieren nicht den Hauptthread, was bedeutet, dass Sie die synchronen Datei-Zugriffs-APIs in diesem Kontext verwenden können. Synchrone APIs sind schneller, da sie nicht mit Promises umgehen müssen.

Sie können auf eine Datei synchron zugreifen, indem Sie [`FileSystemFileHandle.createSyncAccessHandle()`](/de/docs/Web/API/FileSystemFileHandle/createSyncAccessHandle) auf einem regulären [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) aufrufen:

> [!NOTE]
> Trotz des Namens `Sync` ist die Methode `createSyncAccessHandle()` selbst asynchron.

```js
const opfsRoot = await navigator.storage.getDirectory();
const fileHandle = await opfsRoot.getFileHandle("my-high-speed-file.txt", {
  create: true,
});
const syncAccessHandle = await fileHandle.createSyncAccessHandle();
```

Es sind einige _synchrone_ Methoden auf dem zurückgegebenen [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) verfügbar:

- [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize): Gibt die Größe der Datei in Bytes zurück.
- [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write): Schreibt den Inhalt eines Puffers in die Datei, optional an einem gegebenen Offset, und gibt die Anzahl der geschriebenen Bytes zurück. Das Überprüfen der zurückgegebenen Anzahl von Bytes ermöglicht es Aufrufern, Fehler und teilweise Schreibvorgänge zu erkennen und zu handhaben.
- [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read): Liest den Inhalt der Datei in einen Puffer, optional an einem gegebenen Offset.
- [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate): Ändert die Größe der Datei auf die gegebene Größe.
- [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush): Stellt sicher, dass der Dateiinhalte alle Änderungen durch `write()` enthält.
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

- [Das origin private Dateisystem](https://web.dev/articles/origin-private-file-system) auf web.dev

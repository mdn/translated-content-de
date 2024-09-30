---
title: Origin private file system
slug: Web/API/File_System_API/Origin_private_file_system
l10n:
  sourceCommit: 2cba64f68aab9e233fecfc2bab8bea4118716c14
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

Das **origin-private file system** (OPFS) ist ein Speicherendpunkt, der als Teil der [File System API](/de/docs/Web/API/File_System_API) bereitgestellt wird. Es ist für den Ursprung der Seite privat und nicht sichtbar für den Benutzer wie das reguläre Dateisystem. Es bietet Zugriff auf eine spezielle Art von Datei, die hochgradig auf Leistung optimiert ist und direkten Schreibzugriff auf ihren Inhalt bietet.

## Arbeiten mit Dateien unter Verwendung der File System Access API

Die [File System Access API](https://wicg.github.io/file-system-access/), die die [File System API](/de/docs/Web/API/File_System_API) erweitert, ermöglicht den Zugriff auf Dateien mittels Auswahlmethoden. Zum Beispiel:

1. [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) erlaubt dem Benutzer, eine Datei zum Zugriff auszuwählen, wodurch ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt zurückgegeben wird.
2. [`FileSystemFileHandle.getFile()`](/de/docs/Web/API/FileSystemFileHandle/getFile) wird aufgerufen, um Zugriff auf den Dateinhalt zu erhalten. Der Inhalt wird mit [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) / [`FileSystemWritableFileStream.write()`](/de/docs/Web/API/FileSystemWritableFileStream/write) modifiziert.
3. [`FileSystemHandle.requestPermission({mode: 'readwrite'})`](/de/docs/Web/API/FileSystemHandle/requestPermission) wird verwendet, um die Benutzererlaubnis zum Speichern der Änderungen zu beantragen.
4. Wenn der Benutzer die Erlaubnisanfrage akzeptiert, werden die Änderungen in der Originaldatei gespeichert.

Dies funktioniert, hat jedoch einige Einschränkungen. Diese Änderungen werden am für den Benutzer sichtbaren Dateisystem vorgenommen, weshalb viele Sicherheitsüberprüfungen durchgeführt werden (beispielsweise [sicheres Surfen](https://developers.google.com/safe-browsing) in Chrome), um zu verhindern, dass bösartiger Inhalt in diesem Dateisystem geschrieben wird. Diese Schreibvorgänge erfolgen nicht direkt, sondern verwenden eine temporäre Datei. Das Original wird nicht geändert, es sei denn, es besteht alle Sicherheitsüberprüfungen.

Daher sind diese Operationen relativ langsam. Dies ist nicht so auffällig, wenn Sie kleine Textaktualisierungen vornehmen, aber die Leistung leidet, wenn Sie umfangreichere, großflächige Dateiaktualisierungen wie [SQLite](https://www.sqlite.org/wasm)-Datenbankänderungen vornehmen.

## Wie löst das OPFS solche Probleme?

Das OPFS bietet niedrigstufigen, byteweisen Dateizugriff, der privat für den Ursprung der Seite ist und für den Benutzer nicht sichtbar. Daher sind keine Sicherheitsüberprüfungen und Berechtigungserteilungen erforderlich, sodass es schneller als File System Access API-Aufrufe ist. Es hat auch eine Reihe synchroner Aufrufe, die nur innerhalb von Web-Workern ausgeführt werden können, um den Haupt-Thread nicht zu blockieren.

Zusammengefasst, wie sich das OPFS vom für Benutzer sichtbaren Dateisystem unterscheidet:

- Das OPFS unterliegt den [Speicherquotenbeschränkungen der Browser](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), genau wie jeder andere ursprungsbasierte Speichermechanismus (zum Beispiel [IndexedDB API](/de/docs/Web/API/IndexedDB_API)). Sie können die Menge an Speicherplatz, die das OPFS verwendet, über [`navigator.storage.estimate()`](/de/docs/Web/API/StorageManager/estimate) abrufen.
- Das Löschen von Speicherdaten für die Website löscht das OPFS.
- Erlaubnisanfragen und Sicherheitsüberprüfungen sind nicht erforderlich, um auf Dateien im OPFS zuzugreifen.
- Browser speichern die Inhalte des OPFS irgendwo auf der Festplatte, jedoch können Sie nicht erwarten, die erstellten Dateien eins zu eins zu finden. Das OPFS ist nicht dafür vorgesehen, für den Benutzer sichtbar zu sein.

## Wie greifen Sie auf das OPFS zu?

Um überhaupt auf das OPFS zuzugreifen, rufen Sie die Methode [`navigator.storage.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) auf. Diese gibt eine Referenz zu einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt zurück, das die Wurzel des OPFS darstellt.

## Manipulation des OPFS vom Haupt-Thread aus

Beim Zugriff auf das OPFS vom Haupt-Thread verwenden Sie asynchrone, {{jsxref("Promise")}}-basierte APIs. Sie können Datei- ([`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)) und Verzeichnis- ([`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)) Handles durch Aufrufen von [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle) und [`FileSystemDirectoryHandle.getDirectoryHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getDirectoryHandle) auf dem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erhalten, das die Wurzel des OPFS (und untergeordnete Verzeichnisse, wenn sie erstellt werden) repräsentiert.

> [!NOTE]
> Das Übergeben von `{ create: true }` an die obigen Methoden bewirkt, dass die Datei oder der Ordner erstellt wird, wenn er nicht existiert.

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

1. Führen Sie einen [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle)-Aufruf aus, um ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt zurückzugeben.
2. Rufen Sie das [`FileSystemFileHandle.getFile()`](/de/docs/Web/API/FileSystemFileHandle/getFile)-Objekt auf, um ein [`File`](/de/docs/Web/API/File)-Objekt zurückzugeben. Dies ist ein spezialisierter Typ von [`Blob`](/de/docs/Web/API/Blob), und kann daher wie jeder andere `Blob` manipuliert werden. Zum Beispiel könnten Sie auf den Textinhalt direkt über [`Blob.text()`](/de/docs/Web/API/Blob/text) zugreifen.

### Eine Datei schreiben

1. Führen Sie einen [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle)-Aufruf aus, um ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt zurückzugeben.
2. Rufen Sie [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) auf, um ein [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Objekt zurückzugeben, das ein spezialisierter Typ von [`WritableStream`](/de/docs/Web/API/WritableStream) ist.
3. Schreiben Sie Inhalte darauf, indem Sie einen [`FileSystemWritableFilestream.write()`](/de/docs/Web/API/FileSystemWritableFilestream/write)-Aufruf ausführen.
4. Schließen Sie den Stream mit [`WritableStream.close()`](/de/docs/Web/API/WritableStream/close).

### Eine Datei oder einen Ordner löschen

Sie können [`FileSystemDirectoryHandle.removeEntry()`](/de/docs/Web/API/FileSystemDirectoryHandle/removeEntry) im übergeordneten Verzeichnis aufrufen, indem Sie den Namen des zu entfernenden Elements übergeben:

```js
directoryHandle.removeEntry("my first nested file");
```

Sie können auch [`FileSystemHandle.remove()`](/de/docs/Web/API/FileSystemHandle/remove) auf dem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) oder [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) aufrufen, das das zu entfernende Element repräsentiert. Um einen Ordner einschließlich aller Unterordner zu löschen, übergeben Sie die Option `{ recursive: true }`.

```js
await fileHandle.remove();
await directoryHandle.remove({ recursive: true });
```

Das Folgende bietet eine schnelle Möglichkeit, das gesamte OPFS zu löschen:

```js
await (await navigator.storage.getDirectory()).remove({ recursive: true });
```

### Den Inhalt eines Ordners auflisten

[`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) ist ein [asynchroner Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols). Daher können Sie mit einer [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife und Standardmethoden wie [`entries()`](/de/docs/Web/API/FileSystemDirectoryHandle/entries), [`values()`](/de/docs/Web/API/FileSystemDirectoryHandle/entries) und [`keys()`](/de/docs/Web/API/FileSystemDirectoryHandle/entries) darüber iterieren.

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

Web Worker blockieren den Haupt-Thread nicht, was bedeutet, dass Sie die synchronen Dateizugriffs-APIs in diesem Kontext verwenden können. Synchrone APIs sind schneller, da sie nicht mit Promises arbeiten müssen.

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

Es gibt eine Reihe von _synchronen_ Methoden, die auf dem zurückgegebenen [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) verfügbar sind:

- [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize): Gibt die Dateigröße in Bytes zurück.
- [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write): Schreibt den Inhalt eines Puffers in die Datei, optional an einem gegebenen Offset, und gibt die Anzahl der geschriebenen Bytes zurück. Das Überprüfen der zurückgegebenen Anzahl geschriebener Bytes ermöglicht es Aufrufern, Fehler und teilweise Schreibvorgänge zu erkennen und zu behandeln.
- [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read): Liest den Inhalt der Datei in einen Puffer, optional an einem gegebenen Offset.
- [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate): Ändert die Größe der Datei auf die angegebene Größe.
- [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush): Stellt sicher, dass der Dateiinhalt alle durch `write()` vorgenommenen Änderungen enthält.
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

- [Das origin-private file system](https://web.dev/articles/origin-private-file-system) auf web.dev

---
title: Origin-Privates-Dateisystem
slug: Web/API/File_System_API/Origin_private_file_system
l10n:
  sourceCommit: 0d0ccc861fa024fa10836fbf0cc2c3813cd74745
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

Das **origin-private Dateisystem** (OPFS) ist ein Speicherendpunkt, der als Teil der [File System API](/de/docs/Web/API/File_System_API) bereitgestellt wird, welcher der Herkunft der Seite privat ist und dem Benutzer nicht wie das reguläre Dateisystem sichtbar ist. Es bietet Zugriff auf eine spezielle Art von Datei, die für hohe Leistung optimiert ist und direkten Schreibzugriff auf ihre Inhalte ermöglicht.

## Arbeiten mit Dateien mittels der File System Access API

Die [File System Access API](https://wicg.github.io/file-system-access/), die die [File System API](/de/docs/Web/API/File_System_API) erweitert, ermöglicht den Zugriff auf Dateien mithilfe von Auswahldialogmethoden. Zum Beispiel:

1. Mit [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker) kann der Benutzer eine Datei zum Zugriff auswählen, was zu einem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt führt.
2. [`FileSystemFileHandle.getFile()`](/de/docs/Web/API/FileSystemFileHandle/getFile) wird aufgerufen, um Zugriff auf den Inhalt der Datei zu erhalten, der Inhalt wird mit [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) / [`FileSystemWritableFileStream.write()`](/de/docs/Web/API/FileSystemWritableFileStream/write) geändert.
3. [`FileSystemHandle.requestPermission({mode: 'readwrite'})`](/de/docs/Web/API/FileSystemHandle/requestPermission) wird verwendet, um die Erlaubnis des Benutzers zur Speicherung der Änderungen anzufordern.
4. Wenn der Benutzer die Erlaubnis erteilt, werden die Änderungen in der Originaldatei gespeichert.

Dies funktioniert, hat jedoch einige Einschränkungen. Diese Änderungen werden im dem Benutzer sichtbaren Dateisystem vorgenommen, sodass viele Sicherheitsüberprüfungen vorhanden sind (zum Beispiel [sicheres Surfen](https://developers.google.com/safe-browsing) in Chrome), um zu verhindern, dass bösartiger Inhalt in dieses Dateisystem geschrieben wird. Diese Schreibvorgänge erfolgen nicht direkt, sondern verwenden eine temporäre Datei. Die Originaldatei wird nur geändert, wenn alle Sicherheitsüberprüfungen bestanden wurden.

Infolgedessen sind diese Vorgänge relativ langsam. Es fällt nicht so sehr auf, wenn Sie kleine Textänderungen vornehmen, aber die Leistung leidet, wenn Sie bedeutendere, großangelegte Dateiaktualisierungen wie [SQLite](https://sqlite.org/wasm)-Datenbankänderungen vornehmen.

## Wie löst das OPFS solche Probleme?

Das OPFS bietet Datei-Zugriff auf niedriger Ebene, byteweise, der der Herkunft der Seite privat ist und dem Benutzer nicht sichtbar ist. Dadurch sind nicht die gleichen Sicherheitsüberprüfungen und Genehmigungen erforderlich und es ist daher schneller als File System Access API-Aufrufe. Es verfügt auch über eine Reihe synchroner Aufrufe (andere File System API-Aufrufe sind asynchron), die nur innerhalb von Web-Workern ausgeführt werden können, um den Hauptthread nicht zu blockieren.

Zusammengefasst die Unterschiede zwischen dem OPFS und dem benutzernahen Dateisystem:

- Das OPFS unterliegt den [Speicherquoten-Beschränkungen des Browsers](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), genauso wie jeder andere herkunftspartitionierte Speichermechanismus (zum Beispiel [IndexedDB API](/de/docs/Web/API/IndexedDB_API)). Sie können den verwendeten Speicherplatz des OPFS über [`navigator.storage.estimate()`](/de/docs/Web/API/StorageManager/estimate) abrufen.
- Das Löschen von Speicherdateien für die Website löscht das OPFS.
- Genehmigungsaufforderungen und Sicherheitsüberprüfungen sind nicht erforderlich, um auf Dateien im OPFS zuzugreifen.
- Browser speichern die Inhalte des OPFS irgendwo auf der Festplatte, Sie können jedoch nicht erwarten, die erstellten Dateien eins zu eins zu finden. Das OPFS ist nicht dafür vorgesehen, dem Benutzer sichtbar zu sein.

## Wie greifen Sie auf das OPFS zu?

Um zunächst auf das OPFS zuzugreifen, rufen Sie die Methode [`navigator.storage.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) auf. Dies gibt eine Referenz zu einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt zurück, das die Wurzel des OPFS darstellt.

## Manipulation des OPFS im Hauptthread

Beim Zugriff auf das OPFS vom Hauptthread aus verwenden Sie asynchrone, {{jsxref("Promise")}}-basierte APIs. Sie können Datei- ([`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)) und Verzeichnis- ([`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)) Handles durch Aufruf von [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle) und [`FileSystemDirectoryHandle.getDirectoryHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getDirectoryHandle) auf dem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt, das die Wurzel des OPFS darstellt (und untergeordnete Verzeichnisse, sobald sie erstellt werden), erhalten.

> [!NOTE]
> Die Übergabe von `{ create: true }` an die obigen Methoden bewirkt, dass die Datei oder der Ordner erstellt wird, falls sie nicht existieren.

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

1. Führen Sie einen [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle)-Aufruf durch, um ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt zurückzugeben.
2. Rufen Sie das [`FileSystemFileHandle.getFile()`](/de/docs/Web/API/FileSystemFileHandle/getFile)-Objekt auf, um ein [`File`](/de/docs/Web/API/File)-Objekt zurückzugeben. Dies ist ein spezialisierter Typ von [`Blob`](/de/docs/Web/API/Blob) und kann dementsprechend genauso wie jedes andere `Blob` manipuliert werden. Zum Beispiel könnten Sie direkt über [`Blob.text()`](/de/docs/Web/API/Blob/text) auf den Textinhalt zugreifen.

### Eine Datei schreiben

1. Führen Sie einen [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle)-Aufruf durch, um ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt zurückzugeben.
2. Rufen Sie [`FileSystemFileHandle.createWritable()`](/de/docs/Web/API/FileSystemFileHandle/createWritable) auf, um ein [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Objekt zurückzugeben, das ein spezialisierter Typ eines [`WritableStream`](/de/docs/Web/API/WritableStream) ist.
3. Schreiben Sie Inhalte mit einem Aufruf von [`FileSystemWritableFileStream.write()`](/de/docs/Web/API/FileSystemWritableFileStream/write) hinein.
4. Schließen Sie den Stream mit [`WritableStream.close()`](/de/docs/Web/API/WritableStream/close).

### Eine Datei oder einen Ordner löschen

Sie können [`FileSystemDirectoryHandle.removeEntry()`](/de/docs/Web/API/FileSystemDirectoryHandle/removeEntry) im übergeordneten Verzeichnis aufrufen und den Namen des zu entfernenden Elements übergeben:

```js
directoryHandle.removeEntry("my first nested file");
```

Sie können auch [`FileSystemHandle.remove()`](/de/docs/Web/API/FileSystemHandle/remove) auf dem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) oder [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), das das zu entfernende Element darstellt, aufrufen. Um einen Ordner einschließlich aller Unterordner zu löschen, übergeben Sie die Option `{ recursive: true }`.

```js
await fileHandle.remove();
await directoryHandle.remove({ recursive: true });
```

Das Folgende bietet eine schnelle Methode, um das gesamte OPFS zu löschen:

```js
await (await navigator.storage.getDirectory()).remove({ recursive: true });
```

### Den Inhalt eines Ordners auflisten

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

## Manipulation des OPFS von einem Web-Worker

Web-Worker blockieren den Hauptthread nicht, was bedeutet, dass Sie in diesem Kontext die synchronen Datei-Zugriffs-APIs verwenden können. Synchrone APIs sind schneller, da sie das Arbeiten mit Promises vermeiden.

Sie können synchron auf eine Datei zugreifen, indem Sie [`FileSystemFileHandle.createSyncAccessHandle()`](/de/docs/Web/API/FileSystemFileHandle/createSyncAccessHandle) auf einem regulären [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) aufrufen:

> [!NOTE]
> Trotz des Namens „Sync“ in `createSyncAccessHandle()` ist die Methode selbst asynchron.

```js
const opfsRoot = await navigator.storage.getDirectory();
const fileHandle = await opfsRoot.getFileHandle("my-high-speed-file.txt", {
  create: true,
});
const syncAccessHandle = await fileHandle.createSyncAccessHandle();
```

Es gibt eine Reihe synchroner Methoden, die auf dem zurückgegebenen [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) verfügbar sind:

- [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize): Gibt die Größe der Datei in Bytes zurück.
- [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write): Schreibt den Inhalt eines Puffers in die Datei, optional an einem angegebenen Offset, und gibt die Anzahl der geschriebenen Bytes zurück. Die Überprüfung der zurückgegebenen Anzahl geschriebener Bytes ermöglicht es den Aufrufern, Fehler und Teil-Schreibvorgänge zu erkennen und zu handhaben.
- [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read): Liest die Inhalte der Datei in einen Puffer, optional an einem angegebenen Offset.
- [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate): Ändert die Größe der Datei auf die angegebene Größe.
- [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush): Stellt sicher, dass die Datei-Inhalte alle durch `write()` vorgenommenen Änderungen enthalten.
- [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close): Schließt den Zugriffshandler.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das origin-private Dateisystem](https://web.dev/articles/origin-private-file-system) auf web.dev

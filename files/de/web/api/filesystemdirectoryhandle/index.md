---
title: FileSystemDirectoryHandle
slug: Web/API/FileSystemDirectoryHandle
l10n:
  sourceCommit: e92950d09467164afc9dfd8b35be9c909b63a8ab
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Das **`FileSystemDirectoryHandle`**-Interface der [File System API](/de/docs/Web/API/File_System_API) bietet einen Zugriff auf ein Dateisystemverzeichnis.

Auf das Interface kann über die Methoden [`window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker), [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory), [`DataTransferItem.getAsFileSystemHandle()`](/de/docs/Web/API/DataTransferItem/getAsFileSystemHandle) und [`FileSystemDirectoryHandle.getDirectoryHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getDirectoryHandle) zugegriffen werden.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)._

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)._

Reguläre Methoden:

- [`FileSystemDirectoryHandle.getDirectoryHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getDirectoryHandle)
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem `FileSystemDirectoryHandle` für ein Unterverzeichnis mit dem angegebenen Namen innerhalb des Verzeichnishandles erfüllt wird, auf dem die Methode aufgerufen wird.
- [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle)
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) für eine Datei mit dem angegebenen Namen innerhalb des Verzeichnisses erfüllt wird, auf dem die Methode aufgerufen wird.
- [`FileSystemDirectoryHandle.removeEntry()`](/de/docs/Web/API/FileSystemDirectoryHandle/removeEntry)
  - : Versucht, einen Eintrag asynchron zu entfernen, wenn das Verzeichnishandle eine Datei oder ein Verzeichnis mit dem angegebenen Namen enthält.
- [`FileSystemDirectoryHandle.resolve()`](/de/docs/Web/API/FileSystemDirectoryHandle/resolve)
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem {{jsxref('Array')}} von Verzeichnisnamen vom übergeordneten Handle zum angegebenen Kindereintrag erfüllt wird, wobei der Name des Kindereintrags als letztes Array-Element erscheint.

[Asynchrones Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) Methoden:

- [`FileSystemDirectoryHandle.entries()`](/de/docs/Web/API/FileSystemDirectoryHandle/entries)
  - : Gibt einen neuen _asynchronen Iterator_ eines gegebenen Objekts eigener enumerierbarer `"key, value"` Paare zurück.
- [`FileSystemDirectoryHandle.keys()`](/de/docs/Web/API/FileSystemDirectoryHandle/keys)
  - : Gibt einen neuen _asynchronen Iterator_ zurück, der die Schlüssel für jedes Element in `FileSystemDirectoryHandle` enthält.
- [`FileSystemDirectoryHandle.values()`](/de/docs/Web/API/FileSystemDirectoryHandle/values)
  - : Gibt einen neuen _asynchronen Iterator_ zurück, der die Werte für jedes Element im `FileSystemDirectoryHandle`-Objekt enthält.
- `FileSystemDirectoryHandle[Symbol.asyncIterator]()`
  - : Gibt einen neuen _asynchronen Iterator_ eines gegebenen Objekts eigener enumerierbarer `"key, value"` Paare zurück.

## Beispiele

### Verzeichnis-Handle zurückgeben

Das folgende Beispiel gibt ein Verzeichnis-Handle mit dem angegebenen Namen zurück; falls das Verzeichnis noch nicht existiert, wird es erstellt.

```js
const dirName = "directoryToGetName";

// assuming we have a directory handle: 'currentDirHandle'
const subDir = currentDirHandle.getDirectoryHandle(dirName, { create: true });
```

### Dateipfad zurückgeben

Die folgende asynchrone Funktion verwendet `resolve()`, um den Pfad zu einer ausgewählten Datei relativ zu einem angegebenen Verzeichnishandle zu finden.

```js
async function returnPathDirectories(directoryHandle) {
  // Get a file handle by showing a file picker:
  const handle = await self.showOpenFilePicker();
  if (!handle) {
    // User cancelled, or otherwise failed to open a file.
    return;
  }

  // Check if handle exists inside our directory handle
  const relativePaths = await directoryHandle.resolve(handle);

  if (relativePath === null) {
    // Not inside directory handle
  } else {
    // relativePath is an array of names, giving the relative path

    for (const name of relativePaths) {
      // log each entry
      console.log(name);
    }
  }
}
```

### Handles für alle Dateien in einem Verzeichnis zurückgeben

Das folgende Beispiel durchsucht ein Verzeichnis rekursiv, um [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekte für jede Datei in diesem Verzeichnis zurückzugeben:

```js
async function* getFilesRecursively(entry) {
  if (entry.kind === "file") {
    const file = await entry.getFile();
    if (file !== null) {
      file.relativePath = getRelativePath(entry);
      yield file;
    }
  } else if (entry.kind === "directory") {
    for await (const handle of entry.values()) {
      yield* getFilesRecursively(handle);
    }
  }
}
for await (const fileHandle of getFilesRecursively(directoryHandle)) {
  console.log(fileHandle);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

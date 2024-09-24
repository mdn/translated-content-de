---
title: FileSystemDirectoryHandle
slug: Web/API/FileSystemDirectoryHandle
l10n:
  sourceCommit: e92950d09467164afc9dfd8b35be9c909b63a8ab
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`FileSystemDirectoryHandle`**-Schnittstelle des {{domxref("File System API", "File System API", "", "nocode")}} bietet einen Handle zu einem Dateisystemverzeichnis.

Die Schnittstelle kann über die Methoden {{domxref('window.showDirectoryPicker()')}}, {{domxref('StorageManager.getDirectory()')}}, {{domxref('DataTransferItem.getAsFileSystemHandle()')}} und {{domxref('FileSystemDirectoryHandle.getDirectoryHandle()')}} aufgerufen werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, {{DOMxRef("FileSystemHandle")}}._

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, {{DOMxRef("FileSystemHandle")}}._

Reguläre Methoden:

- {{domxref('FileSystemDirectoryHandle.getDirectoryHandle()')}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem `FileSystemDirectoryHandle` für ein Unterverzeichnis mit dem angegebenen Namen innerhalb des Verzeichnishandles erfüllt wird, auf dem die Methode aufgerufen wird.
- {{domxref('FileSystemDirectoryHandle.getFileHandle()')}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem {{domxref('FileSystemFileHandle')}} für eine Datei mit dem angegebenen Namen innerhalb des Verzeichnisses erfüllt wird, auf das die Methode aufgerufen wird.
- {{domxref('FileSystemDirectoryHandle.removeEntry()')}}
  - : Versucht asynchron, einen Eintrag zu entfernen, wenn der Verzeichnishandle eine Datei oder ein Verzeichnis mit dem angegebenen Namen enthält.
- {{domxref('FileSystemDirectoryHandle.resolve()')}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem {{jsxref('Array')}} von Verzeichnisnamen vom übergeordneten Handle bis zum angegebenen Kinder-Eintrag erfüllt wird, wobei der Name des Kinder-Eintrags das letzte Array-Element ist.

[Asynchrones Iterator]-Methoden:

- {{domxref('FileSystemDirectoryHandle.entries()')}}
  - : Gibt einen neuen _asynchronen Iterator_ der eigenen aufzählbaren Eigenschafts-`[key, value]`-Paare eines gegebenen Objekts zurück.
- {{domxref('FileSystemDirectoryHandle.keys()')}}
  - : Gibt einen neuen _asynchronen Iterator_ zurück, der die Schlüssel für jedes Element im `FileSystemDirectoryHandle` enthält.
- {{domxref('FileSystemDirectoryHandle.values()')}}
  - : Gibt einen neuen _asynchronen Iterator_ zurück, der die Werte für jeden Index im `FileSystemDirectoryHandle`-Objekt enthält.
- `FileSystemDirectoryHandle[Symbol.asyncIterator]()`
  - : Gibt einen neuen _asynchronen Iterator_ der eigenen aufzählbaren Eigenschafts-`[key, value]`-Paare eines gegebenen Objekts zurück.

## Beispiele

### Verzeichnishandle zurückgeben

Das folgende Beispiel gibt einen Verzeichnishandle mit dem angegebenen Namen zurück; falls das Verzeichnis noch nicht existiert, wird es erstellt.

```js
const dirName = "directoryToGetName";

// angenommener Verzeichnishandle: 'currentDirHandle'
const subDir = currentDirHandle.getDirectoryHandle(dirName, { create: true });
```

### Dateipfad zurückgeben

Die folgende asynchrone Funktion verwendet `resolve()`, um den Pfad zu einer ausgewählten Datei relativ zu einem angegebenen Verzeichnishandle zu finden.

```js
async function returnPathDirectories(directoryHandle) {
  // Einen Datei-Hanlde abrufen, indem ein Dateiauswahlfenster angezeigt wird:
  const handle = await self.showOpenFilePicker();
  if (!handle) {
    // Der Benutzer hat abgebrochen oder es ist anderweitig fehlgeschlagen, eine Datei zu öffnen.
    return;
  }

  // Prüfen, ob der Handle innerhalb unseres Verzeichnishandles existiert
  const relativePaths = await directoryHandle.resolve(handle);

  if (relativePath === null) {
    // Nicht innerhalb des Verzeichnishandles
  } else {
    // relativePath ist ein Array von Namen, das den relativen Pfad angibt

    for (const name of relativePaths) {
      // jeden Eintrag protokollieren
      console.log(name);
    }
  }
}
```

### Handles für alle Dateien in einem Verzeichnis zurückgeben

Das folgende Beispiel durchsucht ein Verzeichnis rekursiv, um {{domxref('FileSystemFileHandle')}}-Objekte für jede Datei in diesem Verzeichnis zurückzugeben:

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

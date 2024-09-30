---
title: FileSystemDirectoryEntry
slug: Web/API/FileSystemDirectoryEntry
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("File and Directory Entries API")}}

Das **`FileSystemDirectoryEntry`**-Interface der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) repräsentiert ein Verzeichnis in einem Dateisystem. Es bietet Methoden, die es ermöglichen, auf die Dateien in einem Verzeichnis zuzugreifen und diese zu manipulieren sowie die Einträge innerhalb des Verzeichnisses zu erreichen.

{{InheritanceDiagram}}

## Grundkonzepte

Sie können ein neues Verzeichnis erstellen, indem Sie [`getDirectory()`](/de/docs/Web/API/FileSystemDirectoryEntry/getDirectory) aufrufen. Wenn Sie Unterverzeichnisse erstellen möchten, erstellen Sie jedes untergeordnete Verzeichnis in der Reihe. Wenn Sie versuchen, ein Verzeichnis mit einem vollständigen Pfad zu erstellen, der übergeordnete Verzeichnisse umfasst, die noch nicht existieren, wird ein Fehler zurückgegeben. Erstellen Sie daher die Hierarchie, indem Sie rekursiv einen neuen Pfad hinzufügen, nachdem Sie das übergeordnete Verzeichnis erstellt haben.

### Beispiel

Im folgenden Codebeispiel erstellen wir ein Verzeichnis namens "Documents".

```js
// Taking care of the browser-specific prefixes.
window.requestFileSystem =
  window.requestFileSystem || window.webkitRequestFileSystem;
window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;

// …

function onFs(fs) {
  fs.root.getDirectory(
    "Documents",
    { create: true },
    (directoryEntry) => {
      //directoryEntry.isFile === false
      //directoryEntry.isDirectory === true
      //directoryEntry.name === 'Documents'
      //directoryEntry.fullPath === '/Documents'
    },
    onError,
  );
}

// Opening a file system with temporary storage
window.requestFileSystem(TEMPORARY, 1024 * 1024 /*1MB*/, onFs, onError);
```

## Instanzeigenschaften

_Dieses Interface hat keine eigenen Eigenschaften, sondern erbt Eigenschaften von seinem übergeordneten Interface, [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)._

## Instanzmethoden

_Dieses Interface erbt Methoden von seinem übergeordneten Interface, [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)._

- [`createReader()`](/de/docs/Web/API/FileSystemDirectoryEntry/createReader)
  - : Erstellt ein [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader)-Objekt, das verwendet werden kann, um die Einträge in diesem Verzeichnis zu lesen.
- [`getDirectory()`](/de/docs/Web/API/FileSystemDirectoryEntry/getDirectory)
  - : Gibt ein `FileSystemDirectoryEntry`-Objekt zurück, das ein Verzeichnis repräsentiert, das sich an einem angegebenen Pfad befindet, relativ zu dem Verzeichnis, auf dem die Methode aufgerufen wird.
- [`getFile()`](/de/docs/Web/API/FileSystemDirectoryEntry/getFile)
  - : Gibt ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekt zurück, das eine Datei innerhalb der Verzeichnishierarchie repräsentiert, wobei ein Pfad relativ zu dem Verzeichnis angegeben wird, auf dem die Methode aufgerufen wird.
- [`removeRecursively()`](/de/docs/Web/API/FileSystemDirectoryEntry/removeRecursively) {{Deprecated_inline}} {{Non-standard_inline}}
  - : Entfernt das Verzeichnis sowie dessen gesamten Inhalt, indem es hierarchisch über den gesamten Unterbaum von Nachkomma-Dateien und -Verzeichnissen iteriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)

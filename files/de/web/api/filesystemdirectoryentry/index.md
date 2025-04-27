---
title: FileSystemDirectoryEntry
slug: Web/API/FileSystemDirectoryEntry
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("File and Directory Entries API")}}

Die **`FileSystemDirectoryEntry`**-Schnittstelle der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) repräsentiert ein Verzeichnis in einem Dateisystem. Sie bietet Methoden, die den Zugriff und die Manipulation der Dateien in einem Verzeichnis sowie den Zugriff auf die Einträge innerhalb des Verzeichnisses ermöglichen.

{{InheritanceDiagram}}

## Grundkonzepte

Sie können ein neues Verzeichnis erstellen, indem Sie [`getDirectory()`](/de/docs/Web/API/FileSystemDirectoryEntry/getDirectory) aufrufen. Wenn Sie Unterverzeichnisse erstellen möchten, erstellen Sie jedes Unterverzeichnis nacheinander. Wenn Sie versuchen, ein Verzeichnis mit einem vollständigen Pfad zu erstellen, der übergeordnete Verzeichnisse enthält, die noch nicht existieren, wird ein Fehler zurückgegeben. Erstellen Sie also die Hierarchie, indem Sie rekursiv einen neuen Pfad hinzufügen, nachdem das übergeordnete Verzeichnis erstellt wurde.

### Beispiel

Im folgenden Code-Snippet erstellen wir ein Verzeichnis namens "Documents".

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
      // directoryEntry.isFile === false
      // directoryEntry.isDirectory === true
      // directoryEntry.name === 'Documents'
      // directoryEntry.fullPath === '/Documents'
    },
    onError,
  );
}

// Opening a file system with temporary storage
window.requestFileSystem(TEMPORARY, 1024 * 1024 /*1MB*/, onFs, onError);
```

## Instanz-Eigenschaften

_Diese Schnittstelle hat keine eigenen Eigenschaften, erbt jedoch Eigenschaften von ihrer übergeordneten Schnittstelle, [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)._

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von ihrer übergeordneten Schnittstelle, [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)._

- [`createReader()`](/de/docs/Web/API/FileSystemDirectoryEntry/createReader)
  - : Erstellt ein [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader)-Objekt, das zum Lesen der Einträge in diesem Verzeichnis verwendet werden kann.
- [`getDirectory()`](/de/docs/Web/API/FileSystemDirectoryEntry/getDirectory)
  - : Gibt ein `FileSystemDirectoryEntry`-Objekt zurück, das ein Verzeichnis darstellt, das sich an einem angegebenen Pfad befindet, relativ zu dem Verzeichnis, auf dem die Methode aufgerufen wird.
- [`getFile()`](/de/docs/Web/API/FileSystemDirectoryEntry/getFile)
  - : Gibt ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekt zurück, das eine Datei innerhalb der Verzeichnishierarchie darstellt, wobei ein Pfad relativ zu dem Verzeichnis angegeben wird, auf dem die Methode aufgerufen wird.
- [`removeRecursively()`](/de/docs/Web/API/FileSystemDirectoryEntry/removeRecursively) {{Deprecated_inline}} {{Non-standard_inline}}
  - : Entfernt das Verzeichnis sowie alle seine Inhalte, indem es hierarchisch über den gesamten Unterbaum der nachgeordneten Dateien und Verzeichnisse iteriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)

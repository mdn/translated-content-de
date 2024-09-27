---
title: FileSystemDirectoryEntry
slug: Web/API/FileSystemDirectoryEntry
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("File and Directory Entries API")}}

Die **`FileSystemDirectoryEntry`**-Schnittstelle der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) repräsentiert ein Verzeichnis in einem Dateisystem. Sie bietet Methoden, die den Zugriff auf und die Manipulation von Dateien in einem Verzeichnis ermöglichen, sowie den Zugriff auf die Einträge innerhalb des Verzeichnisses.

{{InheritanceDiagram}}

## Grundlegende Konzepte

Sie können ein neues Verzeichnis erstellen, indem Sie [`getDirectory()`](/de/docs/Web/API/FileSystemDirectoryEntry/getDirectory) aufrufen. Wenn Sie Unterverzeichnisse erstellen möchten, erstellen Sie jedes untergeordnete Verzeichnis nacheinander. Wenn Sie versuchen, ein Verzeichnis mit einem vollständigen Pfad zu erstellen, das übergeordnete Verzeichnisse enthält, die noch nicht existieren, wird ein Fehler zurückgegeben. Erstellen Sie die Hierarchie also, indem Sie rekursiv einen neuen Pfad hinzufügen, nachdem Sie das übergeordnete Verzeichnis erstellt haben.

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

## Instanz-Eigenschaften

_Diese Schnittstelle hat keine eigenen Eigenschaften, sondern erbt Eigenschaften von ihrer übergeordneten Schnittstelle, [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)._

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von ihrer übergeordneten Schnittstelle, [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)._

- [`createReader()`](/de/docs/Web/API/FileSystemDirectoryEntry/createReader)
  - : Erstellt ein [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader)-Objekt, das zum Lesen der Einträge in diesem Verzeichnis verwendet werden kann.
- [`getDirectory()`](/de/docs/Web/API/FileSystemDirectoryEntry/getDirectory)
  - : Gibt ein `FileSystemDirectoryEntry`-Objekt zurück, das ein Verzeichnis darstellt, das sich an einem angegebenen Pfad befindet, relativ zu dem Verzeichnis, auf dem die Methode aufgerufen wird.
- [`getFile()`](/de/docs/Web/API/FileSystemDirectoryEntry/getFile)
  - : Gibt ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekt zurück, das eine Datei darstellt, die sich innerhalb der Verzeichnishierarchie befindet, unter Angabe eines Pfads relativ zu dem Verzeichnis, auf dem die Methode aufgerufen wird.
- [`removeRecursively()`](/de/docs/Web/API/FileSystemDirectoryEntry/removeRecursively) {{Deprecated_inline}} {{Non-standard_inline}}
  - : Entfernt das Verzeichnis sowie den gesamten Inhalt, indem hierarchisch über den gesamten Nachkommenbaum von Dateien und Verzeichnissen iteriert wird.

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

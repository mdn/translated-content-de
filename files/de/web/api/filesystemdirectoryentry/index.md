---
title: FileSystemDirectoryEntry
slug: Web/API/FileSystemDirectoryEntry
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("File and Directory Entries API")}}

Die Schnittstelle **`FileSystemDirectoryEntry`** der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) repräsentiert ein Verzeichnis in einem Dateisystem. Sie stellt Methoden bereit, mit denen Sie auf Dateien in einem Verzeichnis zugreifen und diese bearbeiten sowie auf die Einträge im Verzeichnis zugreifen können.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle hat keine eigenen Eigenschaften, erbt aber Eigenschaften von ihrer übergeordneten Schnittstelle [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)._

## Instanzmethoden

_Diese Schnittstelle erbt Methoden von ihrer übergeordneten Schnittstelle [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)._

- [`createReader()`](/de/docs/Web/API/FileSystemDirectoryEntry/createReader)
  - : Erstellt ein [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader)-Objekt, mit dem die Einträge in diesem Verzeichnis gelesen werden können.
- [`getDirectory()`](/de/docs/Web/API/FileSystemDirectoryEntry/getDirectory)
  - : Gibt ein `FileSystemDirectoryEntry`-Objekt zurück, das ein Verzeichnis an einem angegebenen Pfad relativ zu dem Verzeichnis repräsentiert, für das die Methode aufgerufen wird.
- [`getFile()`](/de/docs/Web/API/FileSystemDirectoryEntry/getFile)
  - : Gibt ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekt zurück, das eine Datei innerhalb der Verzeichnishierarchie an einem Pfad relativ zu dem Verzeichnis repräsentiert, für das die Methode aufgerufen wird.
- [`removeRecursively()`](/de/docs/Web/API/FileSystemDirectoryEntry/removeRecursively) {{Deprecated_inline}} {{Non-standard_inline}}
  - : Entfernt das Verzeichnis und seinen gesamten Inhalt, indem rekursiv alle untergeordneten Dateien und Verzeichnisse durchlaufen werden.

## Beschreibung

Sie können ein neues Verzeichnis erstellen, indem Sie [`getDirectory()`](/de/docs/Web/API/FileSystemDirectoryEntry/getDirectory) aufrufen. Wenn Sie Unterverzeichnisse erstellen möchten, erstellen Sie jedes untergeordnete Verzeichnis der Reihe nach. Wenn Sie versuchen, ein Verzeichnis über einen vollständigen Pfad zu erstellen, der noch nicht vorhandene übergeordnete Verzeichnisse enthält, wird ein Fehler zurückgegeben. Erstellen Sie die Hierarchie daher, indem Sie nach dem Erstellen des übergeordneten Verzeichnisses jeweils rekursiv einen neuen Pfad hinzufügen.

## Beispiele

Im folgenden Codeausschnitt erstellen wir ein Verzeichnis namens „Documents“.

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
window.requestFileSystem(TEMPORARY, 1024 * 1024 /* 1MB */, onFs, onError);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)

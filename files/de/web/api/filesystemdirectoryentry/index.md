---
title: FileSystemDirectoryEntry
slug: Web/API/FileSystemDirectoryEntry
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("File and Directory Entries API")}}

Die **`FileSystemDirectoryEntry`**-Schnittstelle der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) repräsentiert ein Verzeichnis in einem Dateisystem. Sie bietet Methoden, die es ermöglichen, Dateien in einem Verzeichnis zuzugreifen und zu manipulieren, sowie auf die Einträge innerhalb des Verzeichnisses zuzugreifen.

{{InheritanceDiagram}}

## Grundkonzepte

Sie können ein neues Verzeichnis erstellen, indem Sie {{domxref("FileSystemDirectoryEntry.getDirectory", "getDirectory()")}} aufrufen. Wenn Sie Unterverzeichnisse erstellen möchten, erstellen Sie jedes Kindverzeichnis nacheinander. Wenn Sie versuchen, ein Verzeichnis mit einem vollständigen Pfad zu erstellen, der übergeordnete Verzeichnisse enthält, die noch nicht existieren, wird ein Fehler zurückgegeben. Erstellen Sie also die Hierarchie, indem Sie rekursiv einen neuen Pfad nach der Erstellung des übergeordneten Verzeichnisses hinzufügen.

### Beispiel

Im folgenden Code-Schnipsel erstellen wir ein Verzeichnis namens "Documents."

```js
// Berücksichtigung der browserspezifischen Präfixe.
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

// Öffnen eines Dateisystems mit temporärem Speicher
window.requestFileSystem(TEMPORARY, 1024 * 1024 /*1MB*/, onFs, onError);
```

## Instanz-Eigenschaften

_Diese Schnittstelle hat keine eigenen Eigenschaften, sondern erbt Eigenschaften von ihrer übergeordneten Schnittstelle, {{domxref("FileSystemEntry")}}._

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von ihrer übergeordneten Schnittstelle, {{domxref("FileSystemEntry")}}._

- {{domxref("FileSystemDirectoryEntry.createReader", "createReader()")}}
  - : Erstellt ein {{domxref("FileSystemDirectoryReader")}}-Objekt, das verwendet werden kann, um die Einträge in diesem Verzeichnis zu lesen.
- {{domxref("FileSystemDirectoryEntry.getDirectory", "getDirectory()")}}
  - : Gibt ein `FileSystemDirectoryEntry`-Objekt zurück, das ein Verzeichnis repräsentiert, das sich an einem bestimmten Pfad befindet, relativ zu dem Verzeichnis, auf dem die Methode aufgerufen wird.
- {{domxref("FileSystemDirectoryEntry.getFile", "getFile()")}}
  - : Gibt ein {{domxref("FileSystemFileEntry")}}-Objekt zurück, das eine Datei repräsentiert, die sich innerhalb der Verzeichnishierarchie befindet, unter Angabe eines Pfads relativ zu dem Verzeichnis, auf dem die Methode aufgerufen wird.
- {{domxref("FileSystemDirectoryEntry.removeRecursively", "removeRecursively()")}} {{Deprecated_inline}} {{Non-standard_inline}}
  - : Entfernt das Verzeichnis sowie seinen gesamten Inhalt, indem es hierarchisch über den gesamten Unterbaum der Nachkommendateien und Verzeichnisse iteriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryReader")}}
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystemFileEntry")}}

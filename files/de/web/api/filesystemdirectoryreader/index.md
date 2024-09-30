---
title: FileSystemDirectoryReader
slug: Web/API/FileSystemDirectoryReader
l10n:
  sourceCommit: c88a329069328522a5c20c054f9dbced9967dbd4
---

{{APIRef("File and Directory Entries API")}}

Die Schnittstelle `FileSystemDirectoryReader` der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) ermöglicht den Zugriff auf die auf [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) basierten Objekte (im Allgemeinen [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)), die jeden Eintrag in einem Verzeichnis darstellen.

## Instanzmethoden

- [`readEntries()`](/de/docs/Web/API/FileSystemDirectoryReader/readEntries)
  - : Gibt ein Array zurück, das eine Anzahl von Einträgen des Verzeichnisses enthält. Jedes Element im Array ist ein Objekt, das auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basiert – typischerweise entweder [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
- [`FileSystem`](/de/docs/Web/API/FileSystem)

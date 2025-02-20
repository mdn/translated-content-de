---
title: FileSystemDirectoryReader
slug: Web/API/FileSystemDirectoryReader
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}

Das `FileSystemDirectoryReader`-Interface der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) ermöglicht Ihnen den Zugriff auf [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-basierte Objekte (in der Regel [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)), die jeweils einen Eintrag in einem Verzeichnis repräsentieren.

## Instanzmethoden

- [`readEntries()`](/de/docs/Web/API/FileSystemDirectoryReader/readEntries)
  - : Gibt ein Array zurück, das eine Anzahl von Einträgen des Verzeichnisses enthält. Jedes Element im Array ist ein Objekt, das auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basiert—typischerweise entweder [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
- [`FileSystem`](/de/docs/Web/API/FileSystem)

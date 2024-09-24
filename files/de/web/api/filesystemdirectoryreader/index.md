---
title: FileSystemDirectoryReader
slug: Web/API/FileSystemDirectoryReader
l10n:
  sourceCommit: c88a329069328522a5c20c054f9dbced9967dbd4
---

{{APIRef("File and Directory Entries API")}}

Die `FileSystemDirectoryReader`-Schnittstelle der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) ermöglicht Ihnen den Zugriff auf die auf {{domxref("FileSystemFileEntry")}} basierenden Objekte (in der Regel {{domxref("FileSystemFileEntry")}} oder {{domxref("FileSystemDirectoryEntry")}}), die jeweils einen Eintrag in einem Verzeichnis darstellen.

## Instanzmethoden

- {{domxref("FileSystemDirectoryReader.readEntries", "readEntries()")}}
  - : Gibt ein Array zurück, das eine Anzahl von Einträgen des Verzeichnisses enthält. Jedes Element im Array ist ein auf {{domxref("FileSystemEntry")}} basierendes Objekt – typischerweise entweder {{domxref("FileSystemFileEntry")}} oder {{domxref("FileSystemDirectoryEntry")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryEntry")}}
- {{domxref("FileSystem")}}

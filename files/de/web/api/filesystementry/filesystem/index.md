---
title: "FileSystemEntry: filesystem-Eigenschaft"
short-title: filesystem
slug: Web/API/FileSystemEntry/filesystem
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File and Directory Entries API")}}

Die schreibgeschützte **`filesystem`**
Eigenschaft des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) Interfaces enthält ein
[`FileSystem`](/de/docs/Web/API/FileSystem) Objekt, das das Dateisystem darstellt, auf dem der Eintrag sich befindet.

## Wert

Ein [`FileSystem`](/de/docs/Web/API/FileSystem), das das Dateisystem darstellt, auf dem die Datei oder das Verzeichnis,
das durch das `FileSystemEntry` beschrieben wird, sich befindet.

## Beispiele

Dieses Beispiel erhält ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) für das Wurzelverzeichnis
des Dateisystems, das eine Datei enthält.

```js
let rootDirEntry = fileEntry.filesystem.root;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)
- [`FileSystem`](/de/docs/Web/API/FileSystem)

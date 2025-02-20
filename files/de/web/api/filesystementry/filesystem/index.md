---
title: "FileSystemEntry: Eigenschaft filesystem"
short-title: filesystem
slug: Web/API/FileSystemEntry/filesystem
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}

Die schreibgeschützte **`filesystem`**-Eigenschaft des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Interfaces enthält ein [`FileSystem`](/de/docs/Web/API/FileSystem)-Objekt, das das Dateisystem darstellt, auf dem sich der Eintrag befindet.

## Wert

Ein [`FileSystem`](/de/docs/Web/API/FileSystem), das das Dateisystem repräsentiert, auf dem sich die Datei oder das Verzeichnis befindet, das durch den `FileSystemEntry` beschrieben wird.

## Beispiele

Dieses Beispiel erhält einen [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) für das Stammverzeichnis des Dateisystems, das eine Datei enthält.

```js
let rootDirEntry = fileEntry.filesystem.root;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)
- [`FileSystem`](/de/docs/Web/API/FileSystem)

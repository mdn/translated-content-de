---
title: "FileSystemEntry: filesystem-Eigenschaft"
short-title: filesystem
slug: Web/API/FileSystemEntry/filesystem
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File and Directory Entries API")}}

Die schreibgeschützte **`filesystem`**
Eigenschaft des {{domxref("FileSystemEntry")}}-Interfaces enthält ein
{{domxref("FileSystem")}}-Objekt, das das Dateisystem darstellt, auf dem sich der Eintrag
befindet.

## Wert

Ein {{domxref("FileSystem")}}, das das Dateisystem darstellt, auf dem sich die durch das `FileSystemEntry` beschriebene Datei oder das Verzeichnis befindet.

## Beispiele

Dieses Beispiel erhält ein {{domxref("FileSystemDirectoryEntry")}} für das Stammverzeichnis
des Dateisystems, das eine Datei enthält.

```js
let rootDirEntry = fileEntry.filesystem.root;
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystem")}}

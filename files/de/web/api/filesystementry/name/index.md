---
title: "FileSystemEntry: name-Eigenschaft"
short-title: name
slug: Web/API/FileSystemEntry/name
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("File and Directory Entries API")}}

Die schreibgeschützte **`name`**-Eigenschaft der
{{domxref("FileSystemEntry")}}-Schnittstelle gibt einen String zurück,
der den Namen des Eintrags angibt; dies ist der Eintrag innerhalb seines übergeordneten Verzeichnisses (die letzte
Komponente des Pfads, wie sie durch die {{domxref("FileSystemEntry.fullPath", "fullPath")}}-Eigenschaft angegeben wird).

## Wert

Ein String, der den Namen des Eintrags angibt.

## Beispiele

Dieses Beispiel zeigt eine Funktion namens `isFileWithExtension()`, die
wahr zurückgibt, wenn das angegebene {{domxref("FileSystemEntry")}} sowohl eine Datei ist als auch der Dateiname
mit einer bestimmten Erweiterung endet.

```js
function isFileWithExtension(entry, extension) {
  return entry.isFile && entry.name.endsWith(`.${extension}`);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystemEntry.fullPath")}}

---
title: "FileSystemEntry: name-Eigenschaft"
short-title: name
slug: Web/API/FileSystemEntry/name
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}

Die schreibgeschützte **`name`**-Eigenschaft der [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Schnittstelle gibt einen String zurück, der den Namen des Eintrags angibt; dies ist der Eintrag innerhalb seines übergeordneten Verzeichnisses (die letzte Komponente des Pfads, wie durch die [`fullPath`](/de/docs/Web/API/FileSystemEntry/fullPath)-Eigenschaft angegeben).

## Wert

Ein String, der den Namen des Eintrags angibt.

## Beispiele

Dieses Beispiel zeigt eine Funktion namens `isFileWithExtension()`, die true zurückgibt, wenn das angegebene [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) sowohl eine Datei ist als auch der Dateiname mit einer vorgegebenen Erweiterung endet.

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
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)
- [`FileSystemEntry.fullPath`](/de/docs/Web/API/FileSystemEntry/fullPath)

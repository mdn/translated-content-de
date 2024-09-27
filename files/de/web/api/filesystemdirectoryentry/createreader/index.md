---
title: "FileSystemDirectoryEntry: createReader()-Methode"
short-title: createReader()
slug: Web/API/FileSystemDirectoryEntry/createReader
l10n:
  sourceCommit: 23228f1b9c756862dac77b238ca74c2e5bd3c9dc
---

{{APIRef("File and Directory Entries API")}}

Die Methode **`createReader()`** des [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Interfaces gibt ein [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader)-Objekt zurück, das verwendet werden kann, um die Einträge im Verzeichnis zu lesen.

## Syntax

```js-nolint
createReader()
```

### Parameter

Keine.

### Rückgabewert

Ein [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader)-Objekt, das verwendet werden kann, um die Einträge des Verzeichnisses zu lesen.

## Beispiele

Dieses Beispiel erstellt eine asynchrone Funktion namens `readDirectory()`, die alle Einträge im angegebenen [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) abruft und in einem Array zurückgibt.

```js
async function readDirectory(directory) {
  const dirReader = directory.createReader();
  const entries = [];

  while (true) {
    const results = await new Promise((resolve, reject) => {
      dirReader.readEntries(resolve, reject);
    });

    if (!results.length) {
      break;
    }

    for (const entry of results) {
      entries.push(entry);
    }
  }

  return entries;
}
```

Dies funktioniert, indem wiederholt [`readEntries()`](/de/docs/Web/API/FileSystemDirectoryReader/readEntries) aufgerufen wird, um alle Einträge im Verzeichnis zu erhalten. Jeder Batch wird an das Array angehängt. Wenn eine leere Liste zurückgegeben wird, wurden alle Einträge gelesen und die Schleife endet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader)
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)

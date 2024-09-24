---
title: "FileSystemDirectoryEntry: createReader()-Methode"
short-title: createReader()
slug: Web/API/FileSystemDirectoryEntry/createReader
l10n:
  sourceCommit: 23228f1b9c756862dac77b238ca74c2e5bd3c9dc
---

{{APIRef("File and Directory Entries API")}}

Die Methode **`createReader()`** der {{domxref("FileSystemDirectoryEntry")}}-Schnittstelle gibt ein {{domxref("FileSystemDirectoryReader")}}-Objekt zurück, das verwendet werden kann, um die Einträge im Verzeichnis zu lesen.

## Syntax

```js-nolint
createReader()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("FileSystemDirectoryReader")}}-Objekt, das zum Lesen der Einträge des Verzeichnisses verwendet werden kann.

## Beispiele

Dieses Beispiel erstellt eine asynchrone Funktion namens `readDirectory()`, die alle Einträge im angegebenen {{domxref("FileSystemDirectoryEntry")}} abruft und diese in einem Array zurückgibt.

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

Dies funktioniert, indem {{domxref("FileSystemDirectoryReader.readEntries", "readEntries()")}} wiederholt aufgerufen wird, um alle Einträge im Verzeichnis zu erhalten, wobei jede Charge zum Array hinzugefügt wird. Wenn ein leeres Array zurückgegeben wird, wurden alle Einträge gelesen, und die Schleife endet.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryReader")}}
- {{domxref("FileSystemDirectoryEntry")}}
- {{domxref("FileSystemFileEntry")}}
- {{domxref("FileSystemEntry")}}

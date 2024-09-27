---
title: "FileSystemDirectoryReader: readEntries()-Methode"
short-title: readEntries()
slug: Web/API/FileSystemDirectoryReader/readEntries
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File and Directory Entries API")}}

Die **`readEntries()`**-Methode des [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader)-Interfaces ruft die Verzeichniseinträge im zu lesenden Verzeichnis ab und liefert sie in einem Array an eine bereitgestellte Callback-Funktion.

Die Objekte im Array basieren alle auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry). In der Regel sind sie entweder [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekte, die normale Dateien repräsentieren, oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekte, die Verzeichnisse darstellen.

## Syntax

```js-nolint
readEntries(successCallback)
readEntries(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn die Inhalte des Verzeichnisses abgerufen wurden. Die
    Funktion erhält ein einzelnes Eingabeparameter: ein Array von Dateisystemeintragsobjekten,
    die jeweils auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basieren. In der Regel sind sie entweder
    [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekte, die normale Dateien repräsentieren, oder
    [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekte, die Verzeichnisse darstellen. Wenn keine Dateien mehr vorhanden sind oder wenn `readEntries()` bereits auf diesem
    [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader) aufgerufen wurde, ist das Array leer.
- `errorCallback` {{optional_inline}}
  - : Eine Callback-Funktion, die aufgerufen wird, wenn beim Lesen aus dem Verzeichnis ein Fehler auftritt. Sie erhält ein Eingabeparameter: ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt, das den aufgetretenen Fehler beschreibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Siehe [`DataTransferItem.webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry#examples) für Beispielcode, der diese Methode verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Ab Chrome 77 liefert `readEntries()` nur die ersten 100 `FileSystemEntry`-Instanzen zurück. Um alle Instanzen zu erhalten, muss `readEntries()` mehrmals aufgerufen werden.

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
- [`FileSystem`](/de/docs/Web/API/FileSystem)

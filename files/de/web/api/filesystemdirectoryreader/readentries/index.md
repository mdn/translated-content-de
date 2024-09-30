---
title: "FileSystemDirectoryReader: readEntries()-Methode"
short-title: readEntries()
slug: Web/API/FileSystemDirectoryReader/readEntries
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File and Directory Entries API")}}

Die **`readEntries()`**-Methode der [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader)-Schnittstelle ruft die Verzeichniseinträge innerhalb des gelesenen Verzeichnisses ab und liefert sie in einem Array an eine bereitgestellte Callback-Funktion.

Die Objekte im Array basieren alle auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry). Im Allgemeinen sind sie entweder [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekte, die normale Dateien repräsentieren, oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekte, die Verzeichnisse darstellen.

## Syntax

```js-nolint
readEntries(successCallback)
readEntries(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn die Inhalte des Verzeichnisses abgerufen wurden. Die Funktion erhält einen einzelnen Eingabeparameter: ein Array von Dateisystemeintragsobjekten, die jeweils auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basieren. Im Allgemeinen sind sie entweder [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekte, die normale Dateien repräsentieren, oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekte, die Verzeichnisse darstellen. Wenn keine Dateien mehr vorhanden sind oder Sie bereits `readEntries()` auf diesem [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader) aufgerufen haben, ist das Array leer.
- `errorCallback` {{optional_inline}}
  - : Eine Callback-Funktion, die aufgerufen wird, wenn ein Fehler beim Lesen aus dem Verzeichnis auftritt. Sie erhält einen Eingabeparameter: ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt, das den aufgetretenen Fehler beschreibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Sehen Sie sich [`DataTransferItem.webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry#examples) für Beispielcode an, der diese Methode verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Ab Chrome 77 gibt `readEntries()` nur die ersten 100 `FileSystemEntry`-Instanzen zurück. Um alle Instanzen zu erhalten, muss `readEntries()` mehrfach aufgerufen werden.

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
- [`FileSystem`](/de/docs/Web/API/FileSystem)

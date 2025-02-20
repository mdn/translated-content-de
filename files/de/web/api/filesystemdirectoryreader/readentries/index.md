---
title: "FileSystemDirectoryReader: Methode readEntries()"
short-title: readEntries()
slug: Web/API/FileSystemDirectoryReader/readEntries
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}

Die Methode **`readEntries()`** der Schnittstelle [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader) ruft die Verzeichniseinträge
innerhalb des gerade gelesenen Verzeichnisses ab und liefert sie in einem Array an eine bereitgestellte Callback-Funktion.

Die Objekte im Array basieren alle auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry).
Im Allgemeinen sind sie entweder [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekte, die Standarddateien repräsentieren, oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekte, die Verzeichnisse repräsentieren.

## Syntax

```js-nolint
readEntries(successCallback)
readEntries(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn der Inhalt des Verzeichnisses abgerufen wurde. Die
    Funktion erhält einen einzelnen Eingabeparameter: ein Array von Dateisystemeintragsobjekten,
    die jeweils auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basieren. Im Allgemeinen sind sie entweder
    [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekte, die Standarddateien repräsentieren, oder
    [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekte, die Verzeichnisse repräsentieren. Wenn es
    keine Dateien mehr gibt oder Sie bereits `readEntries()` für dieses
    [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader) aufgerufen haben, ist das Array leer.
- `errorCallback` {{optional_inline}}
  - : Eine Callback-Funktion, die aufgerufen wird, wenn ein Fehler beim Lesen aus dem
    Verzeichnis auftritt. Sie erhält einen Eingabeparameter: ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt,
    das den aufgetretenen Fehler beschreibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Siehe [`DataTransferItem.webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry#examples) für Beispielcode, der diese Methode verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

In Chrome 77 wird `readEntries()` nur die ersten 100 `FileSystemEntry`-Instanzen zurückgeben. Um alle Instanzen zu erhalten, muss `readEntries()` mehrmals aufgerufen werden.

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
- [`FileSystem`](/de/docs/Web/API/FileSystem)

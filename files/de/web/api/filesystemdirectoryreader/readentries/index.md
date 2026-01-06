---
title: "FileSystemDirectoryReader: Methode readEntries()"
short-title: readEntries()
slug: Web/API/FileSystemDirectoryReader/readEntries
l10n:
  sourceCommit: ce76486041ebf62c43750031d4546a5e18f2bdcd
---

{{APIRef("File and Directory Entries API")}}

Die **`readEntries()`**-Methode des [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader)-Interfaces ruft die Verzeichniseinträge innerhalb des zu lesenden Verzeichnisses ab und liefert sie in einem Array an eine bereitgestellte Callback-Funktion.

Die Objekte im Array basieren alle auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry). Im Allgemeinen sind sie entweder [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekte, die Standarddateien repräsentieren, oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekte, die Verzeichnisse darstellen.

## Syntax

```js-nolint
readEntries(successCallback)
readEntries(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn der Inhalt des Verzeichnisses abgerufen wurde. Die Funktion erhält ein einzelnes Eingabeparameter: ein Array von Dateisystemeintragsobjekten, die alle auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basieren. Im Allgemeinen sind sie entweder [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekte, die Standarddateien repräsentieren, oder [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekte, die Verzeichnisse darstellen. Wenn keine Dateien mehr vorhanden sind oder Sie bereits `readEntries()` auf diesem [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader) aufgerufen haben, ist das Array leer.
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

In Browsern, die auf Chromium basieren, gibt `readEntries()` nur die ersten 100 `FileSystemEntry`-Instanzen zurück. Um alle Instanzen zu erhalten, muss `readEntries()` mehrfach aufgerufen werden.

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
- [`FileSystem`](/de/docs/Web/API/FileSystem)

---
title: "FileSystemDirectoryReader: readEntries() Methode"
short-title: readEntries()
slug: Web/API/FileSystemDirectoryReader/readEntries
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File and Directory Entries API")}}

Die **`readEntries()`** Methode der {{domxref("FileSystemDirectoryReader")}} Schnittstelle ruft die Verzeichniseinträge im gelesenen Verzeichnis ab und liefert sie in einem Array an eine bereitgestellte Callback-Funktion.

Die Objekte im Array basieren alle auf {{domxref("FileSystemEntry")}}. Im Allgemeinen sind sie entweder {{domxref("FileSystemFileEntry")}} Objekte, die normale Dateien darstellen, oder {{domxref("FileSystemDirectoryEntry")}} Objekte, die Verzeichnisse darstellen.

## Syntax

```js-nolint
readEntries(successCallback)
readEntries(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn der Inhalt des Verzeichnisses abgerufen wurde. Die Funktion erhält einen einzelnen Eingabeparameter: ein Array von Dateisystemeintragsobjekten, die jeweils auf {{domxref("FileSystemEntry")}} basieren. Im Allgemeinen sind sie entweder {{domxref("FileSystemFileEntry")}} Objekte, die normale Dateien darstellen, oder {{domxref("FileSystemDirectoryEntry")}} Objekte, die Verzeichnisse darstellen. Wenn keine Dateien mehr vorhanden sind oder Sie `readEntries()` bereits auf diesem {{domxref("FileSystemDirectoryReader")}} aufgerufen haben, ist das Array leer.
- `errorCallback` {{optional_inline}}
  - : Eine Callback-Funktion, die aufgerufen wird, falls beim Lesen aus dem Verzeichnis ein Fehler auftritt. Sie erhält einen Eingabeparameter: ein {{domxref("DOMException")}} Objekt, das den aufgetretenen Fehler beschreibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Siehe [`DataTransferItem.webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry#examples) für Beispielcode, der diese Methode verwendet.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

Ab Chrome 77 gibt `readEntries()` nur die ersten 100 `FileSystemEntry` Instanzen zurück. Um alle Instanzen zu erhalten, muss `readEntries()` mehrmals aufgerufen werden.

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryEntry")}}
- {{domxref("FileSystem")}}

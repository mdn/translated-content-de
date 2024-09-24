---
title: "FileSystemEntry: isDirectory-Eigenschaft"
short-title: isDirectory
slug: Web/API/FileSystemEntry/isDirectory
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File and Directory Entries API")}}

Die schreibgeschützte **`isDirectory`**-Eigenschaft des {{domxref("FileSystemEntry")}}-Interfaces ist `true`, wenn der Eintrag ein Verzeichnis darstellt (was bedeutet, dass es ein {{domxref("FileSystemDirectoryEntry")}} ist) und `false`, wenn dem nicht so ist.

Sie können auch {{domxref("FileSystemEntry.isFile", "isFile")}} verwenden, um festzustellen, ob der Eintrag eine Datei ist.

> [!WARNING]
> Sie sollten nicht annehmen, dass ein Eintrag, der kein Verzeichnis ist, eine Datei ist oder umgekehrt.
> Es gibt andere Arten von Dateideskriptoren auf vielen Betriebssystemen. Stellen Sie sicher, dass Sie sowohl `isDirectory` als auch `isFile` nach Bedarf verwenden, um sicherzustellen, dass der Eintrag etwas ist, mit dem Sie arbeiten können.

## Wert

Ein Boolean-Wert, der angibt, ob das {{domxref("FileSystemEntry")}} ein Verzeichnis ist oder nicht.

## Beispiele

Dieses Beispiel zeigt, wie diese Eigenschaft verwendet werden könnte, um zu bestimmen, ob der Eintrag als Verzeichnis oder Datei verarbeitet werden soll. Wenn der Eintrag weder noch ist, wird ein Fehlerhandler mit einer entsprechenden Nachricht aufgerufen.

```js
if (entry.isDirectory) {
  processSubdirectory(entry);
} else if (entry.isFile) {
  processFile(entry);
} else {
  displayErrorMessage("Unsupported file system entry specified.");
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
- {{domxref("FileSystemEntry.isFile")}}
- {{domxref("FileSystemDirectoryEntry")}}

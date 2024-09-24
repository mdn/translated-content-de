---
title: "FileSystemEntry: isFile-Eigenschaft"
short-title: isFile
slug: Web/API/FileSystemEntry/isFile
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File and Directory Entries API")}}

Die schreibgeschützte **`isFile`**-Eigenschaft des {{domxref("FileSystemEntry")}}-Interfaces ist `true`, wenn der Eintrag eine Datei darstellt (das heißt, es handelt sich um einen {{domxref("FileSystemFileEntry")}}) und `false`, wenn nicht.

Sie können auch {{domxref("FileSystemEntry.isDirectory", "isDirectory")}} verwenden, um festzustellen, ob der Eintrag ein Verzeichnis ist.

> [!WARNING]
> Sie sollten nicht davon ausgehen, dass jeder Eintrag, der keine Datei ist, ein Verzeichnis ist oder umgekehrt. Es gibt viele Arten von Dateibeschreibern auf verschiedenen Betriebssystemen. Stellen Sie sicher, dass Sie sowohl `isDirectory` als auch `isFile` verwenden, um sicherzustellen, dass der Eintrag etwas ist, mit dem Sie arbeiten können.

## Wert

Ein Boolescher Wert, der angibt, ob das {{domxref("FileSystemEntry")}} eine Datei ist oder nicht.

## Beispiele

Dieses Beispiel zeigt, wie diese Eigenschaft verwendet werden könnte, um zu bestimmen, ob der Eintrag als Verzeichnis oder Datei verarbeitet werden soll. Wenn der Eintrag weder das eine noch das andere ist, wird eine Fehlerbehandlungsroutine mit einer entsprechenden Nachricht aufgerufen.

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

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystemEntry.isDirectory")}}
- {{domxref("FileSystemFileEntry")}}

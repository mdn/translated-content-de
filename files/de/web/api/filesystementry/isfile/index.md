---
title: "FileSystemEntry: isFile-Eigenschaft"
short-title: isFile
slug: Web/API/FileSystemEntry/isFile
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}

Die schreibgeschützte **`isFile`**-Eigenschaft des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Interfaces ist `true`, wenn der Eintrag eine Datei darstellt (d.h. es handelt sich um ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)) und `false`, wenn nicht.

Sie können auch [`isDirectory`](/de/docs/Web/API/FileSystemEntry/isDirectory) verwenden, um festzustellen, ob der Eintrag ein Verzeichnis ist.

> [!WARNING]
> Sie sollten nicht davon ausgehen, dass jeder Eintrag, der keine Datei ist, ein Verzeichnis ist oder umgekehrt. Es gibt viele weitere Arten von Dateibeschreibern auf zahlreichen Betriebssystemen. Stellen Sie sicher, dass Sie sowohl `isDirectory` als auch `isFile` nach Bedarf verwenden, um sicherzustellen, dass der Eintrag etwas ist, das Sie verarbeiten können.

## Wert

Ein Boolean, der anzeigt, ob das [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) eine Datei ist oder nicht.

## Beispiele

Dieses Beispiel zeigt, wie diese Eigenschaft verwendet werden könnte, um zu bestimmen, ob der Eintrag als Verzeichnis oder Datei verarbeitet werden soll. Wenn der Eintrag keines von beiden ist, wird ein Fehlerbehandler mit einer entsprechenden Nachricht aufgerufen.

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
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)
- [`FileSystemEntry.isDirectory`](/de/docs/Web/API/FileSystemEntry/isDirectory)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)

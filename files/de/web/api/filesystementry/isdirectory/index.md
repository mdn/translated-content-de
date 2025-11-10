---
title: "FileSystemEntry: isDirectory-Eigenschaft"
short-title: isDirectory
slug: Web/API/FileSystemEntry/isDirectory
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}

Die schreibgeschützte **`isDirectory`**-Eigenschaft der [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Schnittstelle ist `true`, wenn der Eintrag ein Verzeichnis darstellt (was bedeutet, dass es sich um ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) handelt) und `false`, wenn dies nicht der Fall ist.

Sie können auch [`isFile`](/de/docs/Web/API/FileSystemEntry/isFile) verwenden, um festzustellen, ob der Eintrag eine Datei ist.

> [!WARNING]
> Sie sollten nicht davon ausgehen, dass ein Eintrag, der kein Verzeichnis ist, eine Datei ist oder umgekehrt.
> Es gibt viele andere Arten von Dateideskriptoren auf vielen Betriebssystemen. Stellen Sie sicher, dass Sie sowohl `isDirectory` als auch `isFile` nach Bedarf verwenden, um sicherzustellen, dass der Eintrag etwas ist, womit Sie umgehen können.

## Wert

Ein Boolean-Wert, der angibt, ob die [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) ein Verzeichnis ist oder nicht.

## Beispiele

Dieses Beispiel zeigt, wie diese Eigenschaft verwendet werden könnte, um zu bestimmen, ob der Eintrag als Verzeichnis oder Datei verarbeitet werden soll. Wenn der Eintrag keines von beidem ist, wird ein Fehlerhandler mit einer entsprechenden Nachricht aufgerufen.

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
- [`FileSystemEntry.isFile`](/de/docs/Web/API/FileSystemEntry/isFile)
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)

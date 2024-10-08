---
title: "FileSystemEntry: isDirectory-Eigenschaft"
short-title: isDirectory
slug: Web/API/FileSystemEntry/isDirectory
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File and Directory Entries API")}}

Die schreibgeschützte **`isDirectory`**
Eigenschaft der [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) Schnittstelle ist `true`, wenn der Eintrag ein Verzeichnis darstellt (das bedeutet, es ist ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry))
und `false`, wenn es das nicht ist.

Sie können auch [`isFile`](/de/docs/Web/API/FileSystemEntry/isFile) verwenden, um festzustellen, ob der Eintrag eine Datei ist.

> [!WARNING]
> Sie sollten nicht davon ausgehen, dass jeder Eintrag, der kein Verzeichnis ist, eine Datei ist oder umgekehrt.
> Es gibt andere Arten von Dateideskriptoren auf vielen Betriebssystemen. Stellen Sie sicher, dass Sie sowohl `isDirectory` als auch `isFile` verwenden, um sicherzustellen, dass der Eintrag etwas ist, mit dem Sie umgehen können.

## Wert

Ein Boolean, der angibt, ob das [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) ein Verzeichnis ist oder nicht.

## Beispiele

Dieses Beispiel zeigt, wie diese Eigenschaft verwendet werden könnte, um zu bestimmen, ob der Eintrag als Verzeichnis oder Datei verarbeitet werden soll. Wenn der Eintrag weder das eine noch das andere ist, wird ein Fehler-Handler mit einer entsprechenden Nachricht aufgerufen.

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
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)
- [`FileSystemEntry.isFile`](/de/docs/Web/API/FileSystemEntry/isFile)
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)

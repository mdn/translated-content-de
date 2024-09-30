---
title: "FileSystemEntry: isFile-Eigenschaft"
short-title: isFile
slug: Web/API/FileSystemEntry/isFile
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File and Directory Entries API")}}

Die schreibgeschützte **`isFile`**-Eigenschaft der [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Schnittstelle ist `true`, wenn der Eintrag eine Datei repräsentiert (das heißt, es handelt sich um ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)) und `false`, wenn nicht.

Sie können auch [`isDirectory`](/de/docs/Web/API/FileSystemEntry/isDirectory) verwenden, um festzustellen, ob der Eintrag ein Verzeichnis ist.

> [!WARNING]
> Sie sollten nicht annehmen, dass jeder Eintrag, der keine Datei ist, ein Verzeichnis ist oder umgekehrt.
> Es gibt in vielen Betriebssystemen andere Arten von Dateibeschreibern. Stellen Sie sicher, dass Sie sowohl `isDirectory` als auch `isFile` verwenden, um sicherzustellen, dass der Eintrag etwas ist, mit dem Sie arbeiten können.

## Wert

Ein Boolean, der angibt, ob das [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) eine Datei ist oder nicht.

## Beispiele

Dieses Beispiel zeigt, wie diese Eigenschaft verwendet werden könnte, um zu bestimmen, ob der Eintrag als Verzeichnis oder Datei verarbeitet werden soll. Wenn der Eintrag weder noch ist, wird ein Fehlerbehandlungsprogramm mit einer entsprechenden Nachricht aufgerufen.

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
- [`FileSystemEntry.isDirectory`](/de/docs/Web/API/FileSystemEntry/isDirectory)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)

---
title: "FileSystemEntry: `copyTo()`-Methode"
short-title: copyTo()
slug: Web/API/FileSystemEntry/copyTo
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`copyTo()`** der [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Schnittstelle kopiert die Datei, die durch den Eintrag angegeben wird, an einen neuen Speicherort im Dateisystem.

Es gibt einige typische Einschränkungen, was Sie tun können:

- Ein Verzeichnis kann nicht in sich selbst kopiert werden.
- Ein Eintrag kann nicht in sein übergeordnetes Verzeichnis kopiert werden, es sei denn, Sie geben einen neuen Namen an.
- Beim Kopieren eines Verzeichnisses ist das Kopieren immer rekursiv; Sie können keine Unterordner weglassen.

## Syntax

```js-nolint
copyTo(newParent)
copyTo(newParent, newName)
copyTo(newParent, newName, successCallback)
copyTo(newParent, newName, successCallback, errorCallback)
```

### Parameter

- `newParent`
  - : Ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt, das das Zielverzeichnis für die Kopieroperation angibt.
- `newName` {{optional_inline}}
  - : Wenn dieser Parameter angegeben wird, erhält die Kopie diesen String als neuen Datei- oder Verzeichnisnamen.
- `successCallback` {{optional_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn die Kopieroperation erfolgreich abgeschlossen wird. Sie erhält einen einzigen Eingabeparameter: ein [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-basiertes Objekt, das die neuen Details des kopierten Elements bereitstellt.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Callback, der ausgeführt wird, wenn beim Kopieren der Elemente ein Fehler auftritt. Es gibt einen einzelnen Parameter: einen [`FileError`](/de/docs/Web/API/FileError), der beschreibt, was schiefgelaufen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `FileError.INVALID_MODIFICATION_ERR`
  - : Der angeforderte Vorgang beinhaltet eine unmögliche Änderung, wie das Verschieben eines Verzeichnisses in sich selbst oder eines seiner eigenen Unterverzeichnisse, oder das Kopieren eines Elements innerhalb desselben Verzeichnisses ohne es umzubenennen.
- `FileError.QUOTA_EXCEEDED_ERR`
  - : Der Vorgang hat das Speicherkontingent des Benutzers überschritten oder es ist nicht genügend Speicherplatz vorhanden, um den Vorgang abzuschließen.

## Beispiele

Dieses Beispiel zeigt, wie eine temporäre Protokolldatei in ein permanenteres "log"-Verzeichnis verschoben werden kann.

```js
workingDirectory.getFile(
  "tmp/log.txt",
  {},
  (fileEntry) => {
    workingDirectory.getDirectory(
      "log",
      {},
      (dirEntry) => {
        fileEntry.copyTo(dirEntry);
      },
      handleError,
    );
  },
  handleError,
);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)

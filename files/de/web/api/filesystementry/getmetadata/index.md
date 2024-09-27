---
title: "FileSystemEntry: Methode getMetadata()"
short-title: getMetadata()
slug: Web/API/FileSystemEntry/getMetadata
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`getMetadata()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Interfaces erhält ein [`Metadata`](/de/docs/Web/API/Metadata)-Objekt mit Informationen über den Dateisystemeintrag, wie zum Beispiel sein Änderungsdatum und seine Größe.

## Syntax

```js-nolint
getMetadata(successCallback)
getMetadata(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn die Kopieroperation erfolgreich abgeschlossen wurde. Sie erhält einen einzelnen Eingabeparameter: ein [`Metadata`](/de/docs/Web/API/Metadata)-Objekt mit Informationen über die Datei.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Callback, der ausgeführt wird, wenn ein Fehler bei der Suche nach den Metadaten auftritt. Es gibt einen einzelnen Parameter: einen [`FileError`](/de/docs/Web/API/FileError), der beschreibt, was schiefgelaufen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `FileError.NOT_FOUND_ERR`
  - : Das [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) verweist auf ein Element, das nicht existiert.
- `FileError.SECURITY_ERR`
  - : Sicherheitsbeschränkungen untersagen das Abrufen der angeforderten Metadaten.

## Beispiele

In diesem Beispiel wird die Größe einer Protokolldatei in einem temporären Ordner überprüft, und wenn sie ein Megabyte überschreitet, wird sie in ein anderes Verzeichnis verschoben.

```js
workingDirectory.getFile(
  "tmp/log.txt",
  {},
  (fileEntry) => {
    fileEntry.getMetadata((metadata) => {
      if (metadata.size > 1048576) {
        workingDirectory.getDirectory(
          "log",
          {},
          (dirEntry) => {
            fileEntry.moveTo(dirEntry);
          },
          handleError,
        );
      }
    });
  },
  handleError,
);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)

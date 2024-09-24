---
title: "FileSystemEntry: Methode getMetadata()"
short-title: getMetadata()
slug: Web/API/FileSystemEntry/getMetadata
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`getMetadata()`** der {{domxref("FileSystemEntry")}}-Schnittstelle erhält ein {{domxref("Metadata")}}-Objekt mit Informationen über den Dateisystemeintrag, wie z.B. das Datum und die Uhrzeit der Änderung sowie die Größe.

## Syntax

```js-nolint
getMetadata(successCallback)
getMetadata(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn der Kopiervorgang erfolgreich abgeschlossen ist. Diese erhält einen einzelnen Eingabeparameter: ein {{domxref("Metadata")}}-Objekt mit Informationen über die Datei.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Rückruf, der ausgeführt wird, wenn ein Fehler beim Abrufen der Metadaten auftritt. Es gibt einen einzelnen Parameter: ein {{domxref("FileError")}}, der beschreibt, was schiefgelaufen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `FileError.NOT_FOUND_ERR`
  - : Der {{domxref("FileSystemEntry")}} bezieht sich auf ein Element, das nicht existiert.
- `FileError.SECURITY_ERR`
  - : Sicherheitsbeschränkungen verbieten das Abrufen der angeforderten Metadaten.

## Beispiele

Dieses Beispiel überprüft die Größe einer Protokolldatei in einem temporären Ordner und verschiebt sie in ein anderes Verzeichnis, wenn sie eine Megabyte überschreitet.

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

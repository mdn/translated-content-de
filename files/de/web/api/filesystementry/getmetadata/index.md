---
title: "FileSystemEntry: getMetadata()-Methode"
short-title: getMetadata()
slug: Web/API/FileSystemEntry/getMetadata
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`getMetadata()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Interfaces ruft ein [`Metadata`](/de/docs/Web/API/Metadata)-Objekt ab, das Informationen über den Dateisystemeintrag enthält, wie beispielsweise das Änderungsdatum und die Größe.

## Syntax

```js-nolint
getMetadata(successCallback)
getMetadata(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn der Kopiervorgang erfolgreich abgeschlossen wurde. Sie erhält ein einzelnes Eingabeparameter: ein [`Metadata`](/de/docs/Web/API/Metadata)-Objekt mit Informationen über die Datei.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Rückruf, der ausgeführt wird, wenn beim Abrufen der Metadaten ein Fehler auftritt. Es gibt ein einzelnes Parameter: ein [`FileError`](/de/docs/Web/API/FileError), das beschreibt, was schiefgelaufen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `FileError.NOT_FOUND_ERR`
  - : Der [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) verweist auf ein Objekt, das nicht existiert.
- `FileError.SECURITY_ERR`
  - : Sicherheitsbeschränkungen verhindern das Abrufen der angeforderten Metadaten.

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

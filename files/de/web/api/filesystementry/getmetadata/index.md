---
title: "FileSystemEntry: getMetadata()-Methode"
short-title: getMetadata()
slug: Web/API/FileSystemEntry/getMetadata
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`getMetadata()`** der [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Schnittstelle erhält ein [`Metadata`](/de/docs/Web/API/Metadata)-Objekt mit Informationen über den Dateisystemeintrag, wie zum Beispiel das Datum und die Uhrzeit der Änderung sowie seine Größe.

## Syntax

```js-nolint
getMetadata(successCallback)
getMetadata(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn der Kopiervorgang erfolgreich abgeschlossen ist. Sie erhält einen einzelnen Eingabeparameter: ein [`Metadata`](/de/docs/Web/API/Metadata)-Objekt mit Informationen über die Datei.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Rückruf, der ausgeführt wird, wenn ein Fehler bei der Metadatensuche auftritt. Es gibt einen einzelnen Parameter: ein [`DOMError`](/de/docs/Web/API/DOMError), der beschreibt, was schiefgelaufen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `DOMError.NOT_FOUND_ERR`
  - : Der [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) bezieht sich auf ein Element, das nicht existiert.
- `DOMError.SECURITY_ERR`
  - : Sicherheitsbeschränkungen verhindern das Abrufen der angeforderten Metadaten.

## Beispiele

In diesem Beispiel wird die Größe einer Logdatei in einem temporären Ordner überprüft und, wenn sie ein Megabyte überschreitet, in ein anderes Verzeichnis verschoben.

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

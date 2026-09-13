---
title: "FileSystemEntry: getMetadata()-Methode"
short-title: getMetadata()
slug: Web/API/FileSystemEntry/getMetadata
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}

Die Methode **`getMetadata()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Interfaces erhält ein [`Metadata`](/de/docs/Web/API/Metadata)-Objekt mit Informationen über den Dateisystemeintrag, wie z.B. dessen Änderungsdatum und -zeit sowie dessen Größe.

## Syntax

```js-nolint
getMetadata(successCallback)
getMetadata(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn die Kopieroperation erfolgreich abgeschlossen ist. Sie erhält einen einzelnen Eingabeparameter: ein [`Metadata`](/de/docs/Web/API/Metadata)-Objekt mit Informationen über die Datei.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Rückruf, der ausgeführt wird, falls beim Nachschlagen der Metadaten ein Fehler auftritt. Es gibt einen einzigen Parameter: ein [`DOMException`](/de/docs/Web/API/DOMException), der beschreibt, was schief gegangen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `DOMException.NOT_FOUND_ERR`
  - : Der [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) bezieht sich auf ein Element, das nicht existiert.
- `DOMException.SECURITY_ERR`
  - : Sicherheitsbeschränkungen verhindern das Abrufen der angeforderten Metadaten.

## Beispiele

Dieses Beispiel überprüft die Größe einer Logdatei in einem temporären Ordner und verschiebt sie in ein anderes Verzeichnis, wenn sie mehr als ein Megabyte überschreitet.

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

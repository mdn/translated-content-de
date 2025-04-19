---
title: "FileSystemEntry: getMetadata() Methode"
short-title: getMetadata()
slug: Web/API/FileSystemEntry/getMetadata
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`getMetadata()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Interfaces erhält ein [`Metadata`](/de/docs/Web/API/Metadata)-Objekt mit Informationen über den Dateisystemeintrag, wie das Änderungsdatum und die Größe.

## Syntax

```js-nolint
getMetadata(successCallback)
getMetadata(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn der Kopiervorgang erfolgreich abgeschlossen ist.
    Sie empfängt einen einzelnen Eingabeparameter: ein [`Metadata`](/de/docs/Web/API/Metadata)-Objekt mit Informationen über die Datei.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Callback, der ausgeführt wird, wenn ein Fehler bei der Abfrage der Metadaten auftritt. Es gibt einen einzigen Parameter: ein [`DOMException`](/de/docs/Web/API/DOMException), das beschreibt, was schiefgelaufen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `DOMException.NOT_FOUND_ERR`
  - : Der [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) bezieht sich auf ein Element, das nicht existiert.
- `DOMException.SECURITY_ERR`
  - : Sicherheitsbeschränkungen verbieten das Abrufen der angeforderten Metadaten.

## Beispiele

Dieses Beispiel überprüft die Größe einer Protokolldatei in einem temporären Ordner und verschiebt sie in ein anderes Verzeichnis, wenn sie mehr als ein Megabyte überschreitet.

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

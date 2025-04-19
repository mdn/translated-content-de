---
title: "FileSystemEntry: moveTo() Methode"
short-title: moveTo()
slug: Web/API/FileSystemEntry/moveTo
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`moveTo()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) Interface verschiebt die vom Eintrag spezifizierte Datei an einen neuen Speicherort im Dateisystem oder benennt die Datei um, wenn das Zielverzeichnis dasselbe wie das Quellverzeichnis ist.

Es gibt einige typische Beschränkungen, was Sie tun können:

- Ein Verzeichnis kann nicht in sich selbst verschoben werden.
- Ein Eintrag kann nicht in sein übergeordnetes Verzeichnis verschoben werden, es sei denn, Sie geben einen neuen Namen an. Das Angeben eines neuen Namens erlaubt es `moveTo()`, auch als Umbenennungsoperation zu dienen.
- Beim Verschieben eines Verzeichnisses ist das Verschieben immer rekursiv; Sie können keine Unterordner auslassen.
- Sie können eine Datei nicht so verschieben, dass sie ein bestehendes Verzeichnis ersetzt, und Sie können ein Verzeichnis nicht so verschieben, dass es eine bestehende Datei ersetzt. Ein Datei kann jedoch eine Datei und ein Verzeichnis ein Verzeichnis ersetzen.
- Sie können ein Verzeichnis nur überschreiben, wenn es leer ist.

## Syntax

```js-nolint
moveTo(newParent, newName)
moveTo(newParent, newName, successCallback)
moveTo(newParent, newName, successCallback, errorCallback)
```

### Parameter

- `newParent`
  - : Ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) Objekt, das das Zielverzeichnis für die Verschiebungsoperation angibt.
- `newName` {{optional_inline}}
  - : Wenn dieser Parameter angegeben wird, wird der Eintrag umbenannt, um diesen String als neuen Datei- oder Verzeichnisnamen zu haben.
- `successCallback` {{optional_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn die Verschiebungsoperation erfolgreich abgeschlossen ist. Sie erhält einen einzelnen Eingabeparameter: ein [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basiertes Objekt, das die neuen Details des verschobenen Elements liefert.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Callback, der ausgeführt wird, wenn ein Fehler beim Verschieben der Elemente auftritt. Es gibt einen einzigen Parameter: eine [`DOMException`](/de/docs/Web/API/DOMException), die beschreibt, was schiefgelaufen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `DOMException.INVALID_MODIFICATION_ERR`
  - : Die angeforderte Operation beinhaltet eine unmögliche Änderung, wie das Verschieben eines Verzeichnisses in sich selbst oder in eines seiner eigenen Unterverzeichnisse, oder das Kopieren eines Elements innerhalb desselben Verzeichnisses, ohne es umzubenennen.
- `DOMException.QUOTA_EXCEEDED_ERR`
  - : Die Operation hat das Speicherplatzkontingent des Benutzers überschritten, oder es ist nicht genügend Speicherplatz vorhanden, um die Operation abzuschließen.

## Beispiele

Dieses Beispiel zeigt, wie eine temporäre Protokolldatei in ein dauerhaftes "Log"-Verzeichnis verschoben werden könnte, wenn sie eine Megabytegröße überschreitet.

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
- [`FileSystemEntry.copyTo()`](/de/docs/Web/API/FileSystemEntry/copyTo)

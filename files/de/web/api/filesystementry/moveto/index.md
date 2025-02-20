---
title: "FileSystemEntry: moveTo() Methode"
short-title: moveTo()
slug: Web/API/FileSystemEntry/moveTo
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`moveTo()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) Interfaces verschiebt die Datei, die durch den Eintrag angegeben ist, an einen neuen Ort im Dateisystem oder benennt die Datei um, wenn das Zielverzeichnis dasselbe wie das Quellverzeichnis ist.

Es gibt einige typische Einschränkungen, was Sie tun können:

- Ein Verzeichnis kann nicht in sich selbst verschoben werden.
- Ein Eintrag kann nicht in sein übergeordnetes Verzeichnis verschoben werden, es sei denn, Sie geben einen neuen Namen an. Einen neuen Namen anzugeben, ermöglicht es, dass `moveTo()` auch als Umbenennungsoperation fungiert.
- Beim Verschieben eines Verzeichnisses ist das Verschieben immer rekursiv; Sie können keine Unterordner auslassen.
- Sie können eine Datei nicht so verschieben, dass sie ein vorhandenes Verzeichnis ersetzt, und Sie können kein Verzeichnis so verschieben, dass es eine vorhandene Datei ersetzt. Jedoch kann eine Datei eine Datei und ein Verzeichnis ein Verzeichnis ersetzen.
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
  - : Wenn dieser Parameter angegeben wird, wird der Eintrag umbenannt, sodass dieser String der neue Datei- oder Verzeichnisname wird.
- `successCallback` {{optional_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn die Verschiebungsoperation erfolgreich abgeschlossen wurde. Sie erhält einen einzigen Eingabeparameter: ein auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basierendes Objekt, das die neuen Details des verschobenen Elements bereitstellt.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Rückruf, der ausgeführt wird, wenn ein Fehler beim Verschieben der Elemente auftritt. Es gibt einen einzigen Parameter: ein [`FileError`](/de/docs/Web/API/FileError), das beschreibt, was schiefgelaufen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `FileError.INVALID_MODIFICATION_ERR`
  - : Die angeforderte Operation beinhaltet eine unmögliche Änderung, wie das Verschieben eines Verzeichnisses in sich selbst oder eines seiner eigenen Unterverzeichnisse oder das Kopieren eines Elements innerhalb desselben Verzeichnisses, ohne es umzubenennen.
- `FileError.QUOTA_EXCEEDED_ERR`
  - : Die Operation hat das Speicherlimit des Benutzers überschritten oder es ist nicht genügend Speicherplatz verfügbar, um die Operation abzuschließen.

## Beispiele

Dieses Beispiel zeigt, wie eine temporäre Log-Datei in ein permanenteres "log"-Verzeichnis verschoben werden könnte, wenn sie eine Megabyte-Größe überschreitet.

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

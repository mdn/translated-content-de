---
title: "FileSystemEntry: moveTo()-Methode"
short-title: moveTo()
slug: Web/API/FileSystemEntry/moveTo
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`moveTo()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Interfaces verschiebt die durch den Eintrag spezifizierte Datei an einen neuen Ort im Dateisystem oder benennt die Datei um, wenn das Zielverzeichnis dasselbe wie das Quellverzeichnis ist.

Es gibt einige typische Einschränkungen für das, was Sie tun können:

- Ein Verzeichnis kann nicht in sich selbst verschoben werden.
- Ein Eintrag kann nicht in sein übergeordnetes Verzeichnis verschoben werden, es sei denn, Sie geben einen neuen Namen an. Durch Angabe eines neuen Namens kann `moveTo()` gleichzeitig als Umbenennung verwendet werden.
- Beim Verschieben eines Verzeichnisses ist der Vorgang immer rekursiv; Unterordner können nicht ausgelassen werden.
- Sie können eine Datei nicht so verschieben, dass sie ein vorhandenes Verzeichnis ersetzt, und Sie können ein Verzeichnis nicht so verschieben, dass es eine vorhandene Datei ersetzt. Eine Datei kann jedoch eine andere Datei ersetzen, und ein Verzeichnis kann ein anderes Verzeichnis ersetzen.
- Sie können ein Verzeichnis nur überschreiben, wenn es leer ist.

## Syntax

```js-nolint
moveTo(newParent, newName)
moveTo(newParent, newName, successCallback)
moveTo(newParent, newName, successCallback, errorCallback)
```

### Parameter

- `newParent`
  - : Ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt, das das Zielverzeichnis für die Verschiebungsoperation angibt.
- `newName` {{optional_inline}}
  - : Wenn dieser Parameter angegeben wird, wird der Eintrag umbenannt, um diesen String als neuen Datei- oder Verzeichnisnamen zu haben.
- `successCallback` {{optional_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn die Verschiebungsoperation erfolgreich abgeschlossen ist. Empfängt einen einzigen Eingabeparameter: ein auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basierendes Objekt, das die neuen Details des verschobenen Objekts bietet.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Callback, der ausgeführt wird, wenn beim Verschieben der Objekte ein Fehler auftritt. Es gibt einen einzigen Parameter: ein [`FileError`](/de/docs/Web/API/FileError), der beschreibt, was schiefgelaufen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `FileError.INVALID_MODIFICATION_ERR`
  - : Die angeforderte Operation beinhaltet eine unmögliche Änderung, wie das Verschieben eines Verzeichnisses in sich selbst oder eines seiner eigenen Unterverzeichnisse oder das Kopieren eines Elements innerhalb desselben Verzeichnisses ohne es umzubenennen.
- `FileError.QUOTA_EXCEEDED_ERR`
  - : Die Operation hat das Speicherlimit des Benutzers überschritten, oder es ist nicht genügend Speicherplatz verfügbar, um die Operation abzuschließen.

## Beispiele

Dieses Beispiel zeigt, wie eine temporäre Protokolldatei in ein dauerhaftes "log"-Verzeichnis verschoben werden könnte, wenn sie eine Größe von einem Megabyte überschreitet.

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
- [`FileSystemEntry.copyTo()`](/de/docs/Web/API/FileSystemEntry/copyTo)

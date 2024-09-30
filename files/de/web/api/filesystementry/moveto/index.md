---
title: "FileSystemEntry: moveTo()-Methode"
short-title: moveTo()
slug: Web/API/FileSystemEntry/moveTo
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`moveTo()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) Interface verschiebt die durch den Eintrag angegebene Datei an einen neuen Ort im Dateisystem oder benennt die Datei um, wenn das Zielverzeichnis mit dem Quellverzeichnis identisch ist.

Es gibt einige typische Einschränkungen bezüglich dessen, was Sie tun können:

- Ein Verzeichnis kann nicht in sich selbst verschoben werden.
- Ein Eintrag kann nicht ohne Angabe eines neuen Namens in sein übergeordnetes Verzeichnis verschoben werden. Durch Angabe eines neuen Namens kann `moveTo()` auch als Umbenennungsoperation dienen.
- Beim Verschieben eines Verzeichnisses erfolgt das Verschieben immer rekursiv; Unterordner können nicht ausgelassen werden.
- Sie können eine Datei nicht so verschieben, dass sie ein bestehendes Verzeichnis ersetzt, und Sie können auch kein Verzeichnis so verschieben, dass es eine bestehende Datei ersetzt. Eine Datei kann jedoch eine Datei und ein Verzeichnis ein Verzeichnis ersetzen.
- Sie können ein Verzeichnis nur überschreiben, wenn es leer ist.

## Syntax

```js-nolint
moveTo(newParent, newName)
moveTo(newParent, newName, successCallback)
moveTo(newParent, newName, successCallback, errorCallback)
```

### Parameter

- `newParent`
  - : Ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) Objekt, das das Zielverzeichnis für die Verschiebeoperation angibt.
- `newName` {{optional_inline}}
  - : Wenn dieser Parameter angegeben wird, wird der Eintrag umbenannt, sodass dieser String als neuer Datei- oder Verzeichnisname dient.
- `successCallback` {{optional_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn die Verschiebeoperation erfolgreich abgeschlossen ist. Sie erhält einen einzigen Eingabeparameter: ein [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basiertes Objekt, das die neuen Details des verschobenen Elements bereitstellt.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Rückruf, der ausgeführt wird, wenn beim Verschieben der Elemente ein Fehler auftritt. Es gibt einen einzigen Parameter: ein [`FileError`](/de/docs/Web/API/FileError), das beschreibt, was schiefgelaufen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `FileError.INVALID_MODIFICATION_ERR`
  - : Die angeforderte Operation beinhaltet eine unmögliche Änderung, wie das Verschieben eines Verzeichnisses in sich selbst oder einen seiner eigenen Unterordner oder das Kopieren eines Elements innerhalb desselben Verzeichnisses ohne Umbenennung.
- `FileError.QUOTA_EXCEEDED_ERR`
  - : Die Operation überschreitet das Speicherplatzkontingent des Benutzers oder es steht nicht genügend Speicherplatz für den Abschluss der Operation zur Verfügung.

## Beispiele

Dieses Beispiel zeigt, wie eine temporäre Logdatei in ein dauerhafteres "log"-Verzeichnis verschoben wird, wenn sie eine Größe von einem Megabyte überschreitet.

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

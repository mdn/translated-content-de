---
title: "FileSystemEntry: Methode moveTo()"
short-title: moveTo()
slug: Web/API/FileSystemEntry/moveTo
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}

Die Methode **`moveTo()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Interfaces verschiebt die durch den Eintrag angegebene Datei an einen neuen Ort im Dateisystem oder benennt die Datei um, wenn das Zielverzeichnis mit dem Quellverzeichnis identisch ist.

Es gibt einige typische Beschränkungen, die Sie beachten sollten:

- Ein Verzeichnis kann nicht in sich selbst verschoben werden.
- Ein Eintrag kann nicht in sein übergeordnetes Verzeichnis verschoben werden, es sei denn, Sie geben einen neuen Namen an. Durch das Angeben eines neuen Namens kann `moveTo()` auch als Umbenennungsoperation fungieren.
- Beim Verschieben eines Verzeichnisses ist das Verschieben immer rekursiv; Unterordner können nicht ausgelassen werden.
- Sie können keine Datei so verschieben, dass sie ein vorhandenes Verzeichnis ersetzt, und Sie können kein Verzeichnis so verschieben, dass es eine vorhandene Datei ersetzt. Eine Datei kann jedoch eine Datei ersetzen und ein Verzeichnis kann ein Verzeichnis ersetzen.
- Ein Verzeichnis kann nur überschrieben werden, wenn es leer ist.

## Syntax

```js-nolint
moveTo(newParent, newName)
moveTo(newParent, newName, successCallback)
moveTo(newParent, newName, successCallback, errorCallback)
```

### Parameter

- `newParent`
  - : Ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt, das das Zielverzeichnis für die Verschiebeoperation angibt.
- `newName` {{optional_inline}}
  - : Wenn dieser Parameter angegeben ist, wird der Eintrag umbenannt und erhält diesen String als neuen Datei- oder Verzeichnissnamen.
- `successCallback` {{optional_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn die Verschiebeoperation erfolgreich abgeschlossen wurde. Sie erhält einen einzelnen Eingabeparameter: ein Objekt basierend auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), das die neuen Details des verschobenen Elements bereitstellt.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Rückruf, der ausgeführt wird, wenn beim Verschieben der Elemente ein Fehler auftritt. Es gibt einen einzigen Parameter: ein [`DOMException`](/de/docs/Web/API/DOMException), das beschreibt, was schiefgegangen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `DOMException.INVALID_MODIFICATION_ERR`
  - : Der angeforderte Vorgang beinhaltet eine unmögliche Änderung, wie z. B. das Verschieben eines Verzeichnisses in sich selbst oder in eines seiner eigenen Unterverzeichnisse oder das Kopieren eines Elements innerhalb desselben Verzeichnisses ohne Umbenennung.
- `DOMException.QUOTA_EXCEEDED_ERR`
  - : Die Operation hat das Speicherkontingent des Benutzers überschritten oder es steht nicht genug Speicherplatz zur Verfügung, um die Operation abzuschließen.

## Beispiele

Dieses Beispiel zeigt, wie eine temporäre Protokolldatei in ein beständigeres "log"-Verzeichnis verschoben werden könnte, wenn sie eine Größe von einem Megabyte überschreitet.

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

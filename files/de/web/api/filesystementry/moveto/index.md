---
title: "FileSystemEntry: moveTo() Methode"
short-title: moveTo()
slug: Web/API/FileSystemEntry/moveTo
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`moveTo()`** der {{domxref("FileSystemEntry")}}-Schnittstelle bewegt die durch den Eintrag spezifizierte Datei an einen neuen Ort im Dateisystem oder benennt die Datei um, wenn das Zielverzeichnis das gleiche wie das Quellverzeichnis ist.

Es gibt einige typische Einschränkungen, was Sie tun können:

- Ein Verzeichnis kann nicht in sich selbst verschoben werden.
- Ein Eintrag kann nicht in sein übergeordnetes Verzeichnis verschoben werden, es sei denn, Sie geben einen neuen Namen an. Das Angeben eines neuen Namens lässt `moveTo()` auch als Umbenennungsvorgang fungieren.
- Beim Verschieben eines Verzeichnisses ist der Vorgang immer rekursiv; Unterordner können nicht ausgelassen werden.
- Sie können keine Datei so bewegen, dass sie ein bestehendes Verzeichnis ersetzt, und Sie können kein Verzeichnis so bewegen, dass es eine bestehende Datei ersetzt. Eine Datei kann jedoch eine Datei und ein Verzeichnis ein anderes Verzeichnis ersetzen.
- Ein Verzeichnis kann nur überschrieben werden, wenn es leer ist.

## Syntax

```js-nolint
moveTo(newParent, newName)
moveTo(newParent, newName, successCallback)
moveTo(newParent, newName, successCallback, errorCallback)
```

### Parameter

- `newParent`
  - : Ein {{domxref("FileSystemDirectoryEntry")}}-Objekt, das das Zielverzeichnis für den Verschiebevorgang angibt.
- `newName` {{optional_inline}}
  - : Wenn dieser Parameter angegeben wird, wird der Eintrag umbenannt und erhält diesen String als neuen Datei- oder Verzeichnisnamen.
- `successCallback` {{optional_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn der Verschiebevorgang erfolgreich abgeschlossen wurde. Sie erhält einen einzigen Eingabeparameter: ein auf {{domxref("FileSystemEntry")}} basierendes Objekt, das die neuen Details des verschobenen Elements bereitstellt.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Rückruf, der ausgeführt wird, wenn beim Verschieben der Elemente ein Fehler auftritt. Es gibt einen einzigen Parameter: ein {{domxref("FileError")}}, der beschreibt, was schiefgelaufen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `FileError.INVALID_MODIFICATION_ERR`
  - : Der angeforderte Vorgang beinhaltet eine unmögliche Änderung, wie das Verschieben eines Verzeichnisses in sich selbst oder in eines seiner eigenen Unterverzeichnisse, oder das Kopieren eines Elements innerhalb desselben Verzeichnisses ohne Umbenennung.
- `FileError.QUOTA_EXCEEDED_ERR`
  - : Der Vorgang hat das Speicherlimit des Benutzers überschritten oder es steht nicht genug Speicherplatz zur Verfügung, um den Vorgang abzuschließen.

## Beispiele

Dieses Beispiel zeigt, wie eine temporäre Protokolldatei in ein dauerhaftes "Log"-Verzeichnis verschoben wird, wenn sie eine Größe von einem Megabyte überschreitet.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry.copyTo()")}}

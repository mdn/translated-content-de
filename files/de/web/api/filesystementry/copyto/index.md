---
title: "FileSystemEntry: copyTo() Methode"
short-title: copyTo()
slug: Web/API/FileSystemEntry/copyTo
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`copyTo()`** der {{domxref("FileSystemEntry")}}-Schnittstelle kopiert die durch den Eintrag angegebene Datei an einen neuen Ort im Dateisystem.

Es gibt einige typische Einschränkungen, was Sie tun können:

- Ein Verzeichnis kann nicht in sich selbst kopiert werden.
- Ein Eintrag kann nicht in sein übergeordnetes Verzeichnis kopiert werden, es sei denn, Sie geben einen neuen Namen an.
- Beim Kopieren eines Verzeichnisses ist die Kopie immer rekursiv; Sie können keine Unterordner auslassen.

## Syntax

```js-nolint
copyTo(newParent)
copyTo(newParent, newName)
copyTo(newParent, newName, successCallback)
copyTo(newParent, newName, successCallback, errorCallback)
```

### Parameter

- `newParent`
  - : Ein {{domxref("FileSystemDirectoryEntry")}}-Objekt, das das Zielverzeichnis für den Kopiervorgang angibt.
- `newName` {{optional_inline}}
  - : Wenn dieser Parameter angegeben ist, erhält die Kopie diese Zeichenkette als neuen Datei- oder Verzeichnisnamen.
- `successCallback` {{optional_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn der Kopiervorgang erfolgreich abgeschlossen wurde. Sie erhält einen einzelnen Eingabeparameter: ein auf {{domxref("FileSystemEntry")}} basierendes Objekt, das die neuen Details des kopierten Elements bereitstellt.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Rückruf, der ausgeführt wird, wenn beim Kopieren der Elemente ein Fehler auftritt. Es gibt einen einzigen Parameter: einen {{domxref("FileError")}}, der beschreibt, was schief gelaufen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `FileError.INVALID_MODIFICATION_ERR`
  - : Die angeforderte Operation erfordert eine unmögliche Änderung, wie das Verschieben eines Verzeichnisses in sich selbst oder eines seiner eigenen Unterverzeichnisse oder das Kopieren eines Elements innerhalb desselben Verzeichnisses ohne Umbenennung.
- `FileError.QUOTA_EXCEEDED_ERR`
  - : Die Operation überschritt das Speicherlimit des Benutzers, oder es steht nicht genug Speicherplatz zur Verfügung, um die Operation abzuschließen.

## Beispiele

Dieses Beispiel zeigt, wie eine temporäre Protokolldatei in ein dauerhaftes "log"-Verzeichnis verschoben werden könnte.

```js
workingDirectory.getFile(
  "tmp/log.txt",
  {},
  (fileEntry) => {
    workingDirectory.getDirectory(
      "log",
      {},
      (dirEntry) => {
        fileEntry.copyTo(dirEntry);
      },
      handleError,
    );
  },
  handleError,
);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)

---
title: "FileSystemEntry: copyTo() Methode"
short-title: copyTo()
slug: Web/API/FileSystemEntry/copyTo
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}

Die Methode **`copyTo()`** der [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) Schnittstelle kopiert die durch den Eintrag spezifizierte Datei an einen neuen Ort im Dateisystem.

Es gibt einige typische Einschränkungen, was Sie tun können:

- Ein Verzeichnis kann nicht in sich selbst kopiert werden.
- Ein Eintrag kann nicht in sein übergeordnetes Verzeichnis kopiert werden, es sei denn, Sie geben einen neuen Namen an.
- Beim Kopieren eines Verzeichnisses ist das Kopieren immer rekursiv; Unterordner können nicht ausgelassen werden.

## Syntax

```js-nolint
copyTo(newParent)
copyTo(newParent, newName)
copyTo(newParent, newName, successCallback)
copyTo(newParent, newName, successCallback, errorCallback)
```

### Parameter

- `newParent`
  - : Ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt, das das Zielverzeichnis für den Kopiervorgang angibt.
- `newName` {{optional_inline}}
  - : Wenn dieser Parameter angegeben wird, erhält die Kopie diesen String als neuen Datei- oder Verzeichnisnamen.
- `successCallback` {{optional_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn der Kopiervorgang erfolgreich abgeschlossen ist. Sie erhält einen einzigen Eingabeparameter: ein auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basierendes Objekt, das die neuen Details des kopierten Elements bereitstellt.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Rückruf, der ausgeführt wird, wenn beim Kopieren der Elemente ein Fehler auftritt. Es gibt einen einzigen Parameter: einen [`DOMException`](/de/docs/Web/API/DOMException), der beschreibt, was schiefgelaufen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `DOMException.INVALID_MODIFICATION_ERR`
  - : Der angeforderte Vorgang beinhaltet eine unmögliche Änderung, z. B. das Verschieben eines Verzeichnisses in sich selbst oder eines seiner eigenen Unterverzeichnisse oder das Kopieren eines Elements innerhalb desselben Verzeichnisses ohne Umbenennung.
- `DOMException.QUOTA_EXCEEDED_ERR`
  - : Der Vorgang hat das Speicherlimit des Benutzers überschritten, oder es steht nicht genügend Speicherplatz zur Verfügung, um den Vorgang abzuschließen.

## Beispiele

Dieses Beispiel zeigt, wie eine temporäre Protokolldatei in ein dauerhaftes "Protokoll"-Verzeichnis verschoben werden könnte.

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

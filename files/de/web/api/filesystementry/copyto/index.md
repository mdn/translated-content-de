---
title: "FileSystemEntry: copyTo()-Methode"
short-title: copyTo()
slug: Web/API/FileSystemEntry/copyTo
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`copyTo()`** der [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Schnittstelle kopiert die von dem Eintrag angegebene Datei an einen neuen Speicherort im Dateisystem.

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
  - : Ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt, das das Zielverzeichnis für den Kopiervorgang angibt.
- `newName` {{optional_inline}}
  - : Wenn dieser Parameter angegeben wird, erhält die Kopie diesen String als neuen Datei- oder Verzeichnissnamen.
- `successCallback` {{optional_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn der Kopiervorgang erfolgreich abgeschlossen ist. Sie erhält einen einzelnen Eingabeparameter: ein Objekt der Klasse [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), das die neuen Details des kopierten Elements bereitstellt.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Callback, der ausgeführt wird, wenn beim Kopieren der Elemente ein Fehler auftritt. Es gibt einen einzelnen Parameter: ein [`DOMError`](/de/docs/Web/API/DOMError), das beschreibt, was schiefgelaufen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `DOMError.INVALID_MODIFICATION_ERR`
  - : Der angeforderte Vorgang beinhaltet eine unmögliche Änderung, wie das Verschieben eines Verzeichnisses in sich selbst oder eines seiner eigenen Unterverzeichnisse oder das Kopieren eines Elements innerhalb desselben Verzeichnisses, ohne es umzubenennen.
- `DOMError.QUOTA_EXCEEDED_ERR`
  - : Der Vorgang hat das Speicherkontingent des Benutzers überschritten, oder es steht nicht genügend Speicherplatz zur Verfügung, um den Vorgang abzuschließen.

## Beispiele

Dieses Beispiel zeigt, wie eine temporäre Logdatei in ein permanenteres "log"-Verzeichnis verschoben werden könnte.

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

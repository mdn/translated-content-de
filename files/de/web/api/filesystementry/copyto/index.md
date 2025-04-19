---
title: "FileSystemEntry: copyTo() Methode"
short-title: copyTo()
slug: Web/API/FileSystemEntry/copyTo
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`copyTo()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Interfaces kopiert die durch den Eintrag spezifizierte Datei an einen neuen Speicherort im Dateisystem.

Es gibt einige typische Einschränkungen bezüglich dessen, was Sie tun können:

- Ein Verzeichnis kann nicht in sich selbst kopiert werden.
- Ein Eintrag kann nicht in sein übergeordnetes Verzeichnis kopiert werden, es sei denn, Sie geben einen neuen Namen an.
- Beim Kopieren eines Verzeichnisses erfolgt das Kopieren immer rekursiv; Sie können keine Unterordner auslassen.

## Syntax

```js-nolint
copyTo(newParent)
copyTo(newParent, newName)
copyTo(newParent, newName, successCallback)
copyTo(newParent, newName, successCallback, errorCallback)
```

### Parameter

- `newParent`
  - : Ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt, das das Zielverzeichnis für den Kopiervorgang spezifiziert.
- `newName` {{optional_inline}}
  - : Wenn dieser Parameter angegeben ist, erhält die Kopie diesen String als neuen Datei- oder Verzeichnisnamen.
- `successCallback` {{optional_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn der Kopiervorgang erfolgreich abgeschlossen ist. Erhält einen einzelnen Eingabeparameter: ein auf [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) basierendes Objekt, das die neuen Details des kopierten Elements bereitstellt.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Rückruf, der ausgeführt wird, wenn beim Kopieren der Elemente ein Fehler auftritt. Es gibt einen einzelnen Parameter: eine [`DOMException`](/de/docs/Web/API/DOMException), die beschreibt, was schiefgelaufen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `DOMException.INVALID_MODIFICATION_ERR`
  - : Die angeforderte Operation beinhaltet eine unmögliche Änderung, wie das Verschieben eines Verzeichnisses in sich selbst oder in eines seiner eigenen Unterverzeichnisse, oder das Kopieren eines Elements im selben Verzeichnis ohne es umzubenennen.
- `DOMException.QUOTA_EXCEEDED_ERR`
  - : Die Operation hat das Speicherkontingent des Benutzers überschritten, oder es gibt nicht genug Speicherplatz, um die Operation abzuschließen.

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

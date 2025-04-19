---
title: "FileSystemEntry: moveTo() Methode"
short-title: moveTo()
slug: Web/API/FileSystemEntry/moveTo
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`moveTo()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) Interface verschiebt die Datei, die durch den Eintrag angegeben ist, an einen neuen Ort im Dateisystem oder benennt die Datei um, wenn das Zielverzeichnis dasselbe wie das Quellverzeichnis ist.

Es gibt einige typische Einschränkungen bezüglich dessen, was Sie tun können:

- Ein Verzeichnis kann nicht in sich selbst verschoben werden.
- Ein Eintrag kann nicht in sein eigenes übergeordnetes Verzeichnis verschoben werden, es sei denn, Sie geben einen neuen Namen an. Die Angabe eines neuen Namens erlaubt es `moveTo()`, auch als Umbenennungsoperation zu fungieren.
- Beim Verschieben eines Verzeichnisses wird die Aktion immer rekursiv durchgeführt; es können keine Unterordner ausgelassen werden.
- Sie können eine Datei nicht so verschieben, dass sie ein vorhandenes Verzeichnis ersetzt, und Sie können ein Verzeichnis nicht so verschieben, dass es eine vorhandene Datei ersetzt. Eine Datei kann jedoch eine andere Datei ersetzen und ein Verzeichnis kann ein anderes Verzeichnis ersetzen.
- Sie können ein Verzeichnis nur überschreiben, wenn es leer ist.

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
  - : Wenn dieser Parameter angegeben wird, wird der Eintrag umbenannt, sodass dieser String seinen neuen Datei- oder Verzeichnisnamen darstellt.
- `successCallback` {{optional_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn die Verschiebeoperation erfolgreich abgeschlossen ist. Sie erhält einen einzelnen Eingabeparameter: ein objektbasiertes [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), das die neuen Details des verschobenen Elements bereitstellt.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Rückruf, der ausgeführt wird, wenn beim Verschieben der Elemente ein Fehler auftritt. Es gibt einen einzelnen Parameter: ein [`DOMError`](/de/docs/Web/API/DOMError), der beschreibt, was schief gelaufen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `DOMError.INVALID_MODIFICATION_ERR`
  - : Die angeforderte Operation beinhaltet eine unmögliche Änderung, wie das Verschieben eines Verzeichnisses in sich selbst oder in eines seiner eigenen Unterverzeichnisse oder das Kopieren eines Elements innerhalb desselben Verzeichnisses ohne es umzubenennen.
- `DOMError.QUOTA_EXCEEDED_ERR`
  - : Die Operation hat das Speicherkontingent des Benutzers überschritten oder es ist nicht genug Speicherplatz vorhanden, um die Operation abzuschließen.

## Beispiele

Dieses Beispiel zeigt, wie eine temporäre Protokolldatei in ein dauerhaftes "Log"-Verzeichnis verschoben werden könnte, wenn sie eine Größe von einem Megabyte überschreitet.

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

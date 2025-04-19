---
title: "FileSystemEntry: remove() Methode"
short-title: remove()
slug: Web/API/FileSystemEntry/remove
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`remove()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) Interfaces löscht die Datei oder das Verzeichnis aus dem Dateisystem. Verzeichnisse müssen leer sein, bevor sie entfernt werden können.

Um ein Verzeichnis sowie dessen gesamten Inhalt und Unterverzeichnisse rekursiv zu entfernen, rufen Sie stattdessen [`FileSystemDirectoryEntry.removeRecursively()`](/de/docs/Web/API/FileSystemDirectoryEntry/removeRecursively) auf.

## Syntax

```js-nolint
remove(successCallback)
remove(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, sobald die Datei erfolgreich entfernt wurde.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Callback, der aufgerufen wird, wenn der Versuch, die Datei zu entfernen, fehlschlägt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `DOMError.INVALID_MODIFICATION_ERR`
  - : Der angegebene Eintrag war das Stammverzeichnis des Dateisystems, oder der angegebene Eintrag ist ein Verzeichnis, das nicht leer ist.
- `DOMError.INVALID_STATE_ERR`
  - : Der zwischengespeicherte Zustand des Dateisystems ist inkonsistent mit seinem Zustand auf der Festplatte, sodass die Datei aus Sicherheitsgründen nicht gelöscht werden konnte.
- `DOMError.NO_MODIFICATION_ALLOWED_ERR`
  - : Der Zustand des Dateisystems erlaubt es nicht, die Datei oder das Verzeichnis zu entfernen.
- `DOMError.NOT_FOUND_ERR`
  - : Die Datei oder das Verzeichnis existiert nicht.
- `DOMError.SECURITY_ERR`
  - : Der Eintrag konnte aufgrund von Berechtigungen oder anderen Zugriffsbeschränkungen nicht entfernt werden, oder weil zu viele Aufrufe auf Dateiresourcen gemacht werden.

## Beispiele

Dieses Beispiel löscht eine temporäre Arbeitsdatei.

```js
workingDirectory.getFile(
  "tmp/work-file.json",
  {},
  (fileEntry) => {
    fileEntry.remove(() => {
      /* the file was removed successfully */
    });
  },
  handleError,
);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Datei- und Verzeichniseinträge API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemDirectoryEntry.removeRecursively()`](/de/docs/Web/API/FileSystemDirectoryEntry/removeRecursively)

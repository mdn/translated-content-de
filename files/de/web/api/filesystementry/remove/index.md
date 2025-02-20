---
title: "FileSystemEntry: remove()-Methode"
short-title: remove()
slug: Web/API/FileSystemEntry/remove
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`remove()`** der [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) Schnittstelle löscht die Datei oder das Verzeichnis aus dem Dateisystem. Verzeichnisse müssen leer sein, bevor sie entfernt werden können.

Um ein Verzeichnis sowie dessen Inhalte und Unterverzeichnisse rekursiv zu entfernen, verwenden Sie stattdessen [`FileSystemDirectoryEntry.removeRecursively()`](/de/docs/Web/API/FileSystemDirectoryEntry/removeRecursively).

## Syntax

```js-nolint
remove(successCallback)
remove(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, nachdem die Datei erfolgreich entfernt wurde.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Callback, der aufgerufen wird, wenn der Versuch, die Datei zu entfernen, fehlschlägt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `FileError.INVALID_MODIFICATION_ERR`
  - : Der angegebene Eintrag war das Wurzelverzeichnis des Dateisystems, oder der angegebene Eintrag ist ein Verzeichnis, das nicht leer ist.
- `FileError.INVALID_STATE_ERR`
  - : Der zwischengespeicherte Zustand des Dateisystems stimmt nicht mit seinem Zustand auf der Festplatte überein, daher konnte die Datei aus Sicherheitsgründen nicht gelöscht werden.
- `FileError.NO_MODIFICATION_ALLOWED_ERR`
  - : Der Zustand des Dateisystems erlaubt es nicht, die Datei oder das Verzeichnis zu entfernen.
- `FileError.NOT_FOUND_ERR`
  - : Die Datei oder das Verzeichnis existiert nicht.
- `FileError.SECURITY_ERR`
  - : Der Eintrag konnte aufgrund von Berechtigungen oder anderen Zugriffsbeschränkungen nicht entfernt werden, oder weil zu viele Aufrufe von Dateieressourcen gemacht werden.

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

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemDirectoryEntry.removeRecursively()`](/de/docs/Web/API/FileSystemDirectoryEntry/removeRecursively)

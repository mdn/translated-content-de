---
title: "FileSystemEntry: remove() Methode"
short-title: remove()
slug: Web/API/FileSystemEntry/remove
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`remove()`** der {{domxref("FileSystemEntry")}}-Schnittstelle löscht die Datei oder das Verzeichnis aus dem Dateisystem. Verzeichnisse müssen leer sein, bevor sie entfernt werden können.

Um ein Verzeichnis sowie alle seine Inhalte und Unterverzeichnisse rekursiv zu entfernen, rufen Sie stattdessen {{domxref("FileSystemDirectoryEntry.removeRecursively()")}} auf.

## Syntax

```js-nolint
remove(successCallback)
remove(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, sobald die Datei erfolgreich entfernt wurde.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Rückruf, der aufgerufen wird, wenn der Versuch, die Datei zu entfernen, fehlschlägt.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

### Ausnahmen

- `FileError.INVALID_MODIFICATION_ERR`
  - : Der angegebene Eintrag war das Stammverzeichnis des Dateisystems oder der angegebene Eintrag ist ein Verzeichnis, das nicht leer ist.
- `FileError.INVALID_STATE_ERR`
  - : Der zwischengespeicherte Zustand des Dateisystems ist inkonsistent mit seinem Zustand auf dem Datenträger, daher konnte die Datei aus Sicherheitsgründen nicht gelöscht werden.
- `FileError.NO_MODIFICATION_ALLOWED_ERR`
  - : Der Zustand des Dateisystems erlaubt das Entfernen der Datei oder des Verzeichnisses nicht.
- `FileError.NOT_FOUND_ERR`
  - : Die Datei oder das Verzeichnis existiert nicht.
- `FileError.SECURITY_ERR`
  - : Der Eintrag konnte aufgrund von Berechtigungen oder anderen Zugriffsbeschränkungen nicht entfernt werden, oder weil es zu viele Aufrufe von Dateiquellen gibt.

## Beispiele

Dieses Beispiel löscht eine temporäre Arbeitsdatei.

```js
workingDirectory.getFile(
  "tmp/workfile.json",
  {},
  (fileEntry) => {
    fileEntry.remove(() => {
      /* die Datei wurde erfolgreich entfernt */
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
- {{domxref("FileSystemDirectoryEntry.removeRecursively()")}}

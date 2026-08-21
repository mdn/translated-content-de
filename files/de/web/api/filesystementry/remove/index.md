---
title: "FileSystemEntry: remove()-Methode"
short-title: remove()
slug: Web/API/FileSystemEntry/remove
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}

Die Methode **`remove()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Interfaces löscht die Datei oder das Verzeichnis aus dem Dateisystem. Verzeichnisse müssen leer sein, bevor sie entfernt werden können.

Um ein Verzeichnis sowie alle seine Inhalte und Unterverzeichnisse rekursiv zu entfernen, rufen Sie stattdessen [`FileSystemDirectoryEntry.removeRecursively()`](/de/docs/Web/API/FileSystemDirectoryEntry/removeRecursively) auf.

## Syntax

```js-nolint
remove(successCallback)
remove(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn die Datei erfolgreich entfernt wurde.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Rückruf, der aufgerufen wird, wenn der Versuch, die Datei zu entfernen, fehlschlägt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `DOMException.INVALID_MODIFICATION_ERR`
  - : Der angegebene Eintrag war das Stammverzeichnis des Dateisystems, oder der angegebene Eintrag ist ein Verzeichnis, das nicht leer ist.
- `DOMException.INVALID_STATE_ERR`
  - : Der zwischengespeicherte Status des Dateisystems ist inkonsistent mit seinem Status auf der Festplatte, sodass die Datei aus Sicherheitsgründen nicht gelöscht werden konnte.
- `DOMException.NO_MODIFICATION_ALLOWED_ERR`
  - : Der Zustand des Dateisystems erlaubt das Entfernen der Datei oder des Verzeichnisses nicht.
- `DOMException.NOT_FOUND_ERR`
  - : Die Datei oder das Verzeichnis existiert nicht.
- `DOMException.SECURITY_ERR`
  - : Der Eintrag konnte aufgrund von Berechtigungen oder anderen Zugriffsbeschränkungen nicht entfernt werden oder weil zu viele Aufrufe auf Dateiresourcen gemacht werden.

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

---
title: "FileSystemEntry: remove() Methode"
short-title: remove()
slug: Web/API/FileSystemEntry/remove
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`remove()`** der Schnittstelle [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) löscht die Datei oder das Verzeichnis aus dem Dateisystem. Verzeichnisse müssen leer sein, bevor sie entfernt werden können.

Um ein Verzeichnis sowie alle seine Inhalte und seine Unterverzeichnisse rekursiv zu entfernen, rufen Sie stattdessen [`FileSystemDirectoryEntry.removeRecursively()`](/de/docs/Web/API/FileSystemDirectoryEntry/removeRecursively) auf.

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

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `DOMException.INVALID_MODIFICATION_ERR`
  - : Der angegebene Eintrag war das Root-Verzeichnis des Dateisystems oder der angegebene Eintrag ist ein Verzeichnis, das nicht leer ist.
- `DOMException.INVALID_STATE_ERR`
  - : Der zwischengespeicherte Status des Dateisystems ist nicht konsistent mit seinem Zustand auf der Festplatte, sodass die Datei aus Sicherheitsgründen nicht gelöscht werden konnte.
- `DOMException.NO_MODIFICATION_ALLOWED_ERR`
  - : Der Status des Dateisystems erlaubt das Entfernen der Datei oder des Verzeichnisses nicht.
- `DOMException.NOT_FOUND_ERR`
  - : Die Datei oder das Verzeichnis existiert nicht.
- `DOMException.SECURITY_ERR`
  - : Der Eintrag konnte aufgrund von Berechtigungen oder anderen Zugriffsbegrenzungen oder weil zu viele Anfragen an Dateiquellen gestellt werden, nicht entfernt werden.

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

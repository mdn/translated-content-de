---
title: "FileSystemDirectoryEntry: removeRecursively() Methode"
short-title: removeRecursively()
slug: Web/API/FileSystemDirectoryEntry/removeRecursively
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`removeRecursively()`** des [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) Interfaces entfernt das Verzeichnis sowie den gesamten Inhalt, indem das gesamte Unterverzeichnis hierarchisch durchlaufen wird.

Um eine einzelne Datei oder ein leeres Verzeichnis zu entfernen, können Sie auch [`FileSystemEntry.remove()`](/de/docs/Web/API/FileSystemEntry/remove) verwenden.

## Syntax

```js-nolint
removeRecursively(successCallback)
removeRecursively(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, sobald der Verzeichnissentfernungsvorgang abgeschlossen ist. Der Rückruf hat keine Parameter.
- `errorCallback` {{optional_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn ein Fehler beim Versuch, das Verzeichnisunterverzeichnis zu entfernen, auftritt. Nimmt einen [`FileError`](/de/docs/Web/API/FileError) entgegen, der den aufgetretenen Fehler beschreibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn ein Fehler auftritt und ein `errorCallback` angegeben wurde, wird dieser mit einem einzelnen Parameter aufgerufen: ein [`FileError`](/de/docs/Web/API/FileError) Objekt, das den Fehler beschreibt. Der [`FileError.code`](/de/docs/Web/API/FileError/code) gibt an, welcher Fehlertyp aufgetreten ist, wie folgt:

- `FileError.INVALID_MODIFICATION_ERR`
  - : Es wurde versucht, das Stammverzeichnis zu entfernen; dies ist nicht zulässig.
- `FileError.NO_MODIFICATION_ALLOWED_ERR`
  - : Der Zustand des Dateisystems erlaubt keine Änderung.
- `FileError.NOT_FOUND_ERR`
  - : Das durch das [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) repräsentierte Verzeichnis existiert nicht mehr.
- `FileError.NOT_READABLE_ERR`
  - : Das Verzeichnis ist nicht zugänglich; möglicherweise wird es von einer anderen Anwendung verwendet oder ist auf Betriebssystemebene gesperrt.
- `FileError.SECURITY_ERR`
  - : Das Verzeichnis konnte aus Sicherheitsgründen nicht entfernt werden. Mögliche Gründe sind:
    - Das Verzeichnis und/oder dessen Inhalt ist möglicherweise nicht sicher von einer Webanwendung aus zugänglich.
    - Es werden zu viele Dateisystemaufrufe gemacht.
    - Andere Sicherheitsbedenken, die vom Benutzeragenten oder dem Betriebssystem erhoben werden.

> [!NOTE]
> Wenn Sie versuchen, ein Verzeichnis zu löschen, das eine oder mehrere Dateien enthält, die nicht entfernt werden können, oder wenn während der Löschung einer Anzahl von Dateien ein Fehler auftritt, werden möglicherweise einige Dateien nicht gelöscht. Sie sollten einen `errorCallback` bereitstellen, um dies zu überwachen und zu behandeln, möglicherweise indem Sie es erneut versuchen.

## Beispiele

```js
directory.removeRecursively(
  () => {
    /* The directory was removed successfully */
  },
  () => {
    /* an error occurred while removing the directory */
  },
);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
- [`FileSystemEntry.remove()`](/de/docs/Web/API/FileSystemEntry/remove)

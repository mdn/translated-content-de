---
title: "FileSystemDirectoryEntry: removeRecursively() Methode"
short-title: removeRecursively()
slug: Web/API/FileSystemDirectoryEntry/removeRecursively
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`removeRecursively()`** des [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Interfaces entfernt das Verzeichnis sowie dessen gesamten Inhalt und durchläuft rekursiv dessen gesamtes Unterverzeichnis von darunter liegenden Dateien und Verzeichnissen.

Um eine einzelne Datei oder ein leeres Verzeichnis zu entfernen, können Sie auch [`FileSystemEntry.remove()`](/de/docs/Web/API/FileSystemEntry/remove) verwenden.

## Syntax

```js-nolint
removeRecursively(successCallback)
removeRecursively(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, sobald der Verzeichnisentfernungsprozess abgeschlossen ist. Der Callback hat keine Parameter.
- `errorCallback` {{optional_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn beim Versuch, das Verzeichnis-Unterverzeichnis zu entfernen, ein Fehler auftritt. Empfängt einen [`FileError`](/de/docs/Web/API/FileError), der den aufgetretenen Fehler beschreibt, als Eingabe.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn ein Fehler auftritt und ein `errorCallback` angegeben wurde, wird dieser mit einem einzelnen Parameter aufgerufen: einem [`FileError`](/de/docs/Web/API/FileError)-Objekt, das den Fehler beschreibt. Der [`FileError.code`](/de/docs/Web/API/FileError/code) gibt an, welcher Fehler aufgetreten ist, wie folgt:

- `FileError.INVALID_MODIFICATION_ERR`
  - : Es wurde versucht, das Stammverzeichnis zu entfernen; dies ist nicht gestattet.
- `FileError.NO_MODIFICATION_ALLOWED_ERR`
  - : Der Zustand des Dateisystems erlaubt keine Änderungen.
- `FileError.NOT_FOUND_ERR`
  - : Das durch das [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) dargestellte Verzeichnis existiert nicht mehr.
- `FileError.NOT_READABLE_ERR`
  - : Das Verzeichnis ist nicht zugänglich; möglicherweise wird es von einer anderen Anwendung genutzt oder ist auf Betriebssystemebene gesperrt.
- `FileError.SECURITY_ERR`

  - : Das Verzeichnis konnte aus Sicherheitsgründen nicht entfernt werden. Mögliche Gründe sind:

    - Das Verzeichnis und/oder dessen Inhalte sind möglicherweise für den Zugriff durch eine Webanwendung nicht sicher.
    - Es werden zu viele Dateisystemaufrufe durchgeführt.
    - Andere Sicherheitsbedenken, die vom Benutzeragenten oder dem Betriebssystem aufgeworfen werden.

> [!NOTE]
> Wenn Sie versuchen, ein Verzeichnis zu löschen, das eine oder mehrere Dateien enthält, die nicht entfernt werden können, oder wenn während der Löschung einer Anzahl von Dateien ein Fehler auftritt, können einige Dateien unvollständig gelöscht werden. Sie sollten einen `errorCallback` bereitstellen, um dies zu überwachen und zu behandeln, möglicherweise indem Sie es erneut versuchen.

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
- [Einführung in die File und Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
- [`FileSystemEntry.remove()`](/de/docs/Web/API/FileSystemEntry/remove)

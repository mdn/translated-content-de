---
title: "FileSystemDirectoryEntry: removeRecursively() Methode"
short-title: removeRecursively()
slug: Web/API/FileSystemDirectoryEntry/removeRecursively
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`removeRecursively()`** der {{domxref("FileSystemDirectoryEntry")}} Schnittstelle entfernt das Verzeichnis sowie dessen gesamten Inhalt, indem sie rekursiv über seinen gesamten Unterbaum von Dateien und Verzeichnissen iteriert.

Um eine einzelne Datei oder ein leeres Verzeichnis zu entfernen, können Sie auch {{domxref("FileSystemEntry.remove()")}} verwenden.

## Syntax

```js-nolint
removeRecursively(successCallback)
removeRecursively(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, sobald der Verzeichnisentfernungsprozess abgeschlossen ist. Der Rückruf hat keine Parameter.
- `errorCallback` {{optional_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn ein Fehler beim Versuch, den Verzeichnisunterbaum zu entfernen, auftritt. Sie erhält einen {{domxref("FileError")}}, der den aufgetretenen Fehler beschreibt, als Eingabe.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn ein Fehler auftritt und ein `errorCallback` angegeben wurde, wird dieser mit einem einzigen Parameter aufgerufen: einem {{domxref("FileError")}} Objekt, das den Fehler beschreibt. Der {{domxref("FileError.code")}} gibt an, welcher Fehlertyp aufgetreten ist, wie folgt:

- `FileError.INVALID_MODIFICATION_ERR`
  - : Es wurde versucht, das Stammverzeichnis zu entfernen; dies ist nicht erlaubt.
- `FileError.NO_MODIFICATION_ALLOWED_ERR`
  - : Der Zustand des Dateisystems erlaubt keine Modifikation.
- `FileError.NOT_FOUND_ERR`
  - : Das durch {{domxref("FileSystemDirectoryEntry")}} repräsentierte Verzeichnis existiert nicht mehr.
- `FileError.NOT_READABLE_ERR`
  - : Das Verzeichnis ist nicht zugänglich; möglicherweise wird es von einer anderen Anwendung verwendet oder ist auf Betriebssystemebene gesperrt.
- `FileError.SECURITY_ERR`
  - : Das Verzeichnis konnte aus Sicherheitsgründen nicht entfernt werden. Mögliche Gründe sind:

    - Das Verzeichnis und/oder sein Inhalt sind möglicherweise nicht sicher von einer Webanwendung aus zugänglich.
    - Es werden zu viele Dateisystemaufrufe gemacht.
    - Weitere Sicherheitsbedenken, die vom Benutzeragent oder dem Betriebssystem aufgeworfen werden.

> [!NOTE]
> Wenn Sie versuchen, ein Verzeichnis zu löschen, das eine oder mehrere Dateien enthält, die nicht entfernt werden können, oder wenn ein Fehler beim Löschen einer Anzahl von Dateien auftritt, können einige Dateien nicht gelöscht werden. Sie sollten einen `errorCallback` bereitstellen, um dies zu überwachen und zu behandeln, möglicherweise durch einen erneuten Versuch.

## Beispiele

```js
directory.removeRecursively(
  () => {
    /* Das Verzeichnis wurde erfolgreich entfernt */
  },
  () => {
    /* beim Entfernen des Verzeichnisses ist ein Fehler aufgetreten */
  },
);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File und Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File und Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryEntry")}}
- {{domxref("FileSystemEntry.remove()")}}

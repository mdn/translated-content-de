---
title: "FileSystemDirectoryEntry: removeRecursively() Methode"
short-title: removeRecursively()
slug: Web/API/FileSystemDirectoryEntry/removeRecursively
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}

Die **`removeRecursively()`**-Methode der Schnittstelle [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) entfernt das Verzeichnis sowie dessen gesamten Inhalt, indem sie rekursiv über den gesamten Unterbaum der Nachkommen von Dateien und Verzeichnissen iteriert.

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
  - : Eine Funktion, die aufgerufen wird, wenn beim Versuch, den Verzeichnis-Unterbaum zu entfernen, ein Fehler auftritt. Sie erhält als Eingabe ein [`DOMException`](/de/docs/Web/API/DOMException), das den aufgetretenen Fehler beschreibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn ein Fehler auftritt und ein `errorCallback` angegeben wurde, wird er mit einem einzigen Parameter aufgerufen: ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt, das den Fehler beschreibt. Der [`DOMException.code`](/de/docs/Web/API/DOMException/code) gibt an, welcher Fehlertyp aufgetreten ist, wie folgt:

- `DOMException.INVALID_MODIFICATION_ERR`
  - : Es wurde versucht, das Stammverzeichnis zu entfernen; dies ist nicht erlaubt.
- `DOMException.NO_MODIFICATION_ALLOWED_ERR`
  - : Der Status des Dateisystems erlaubt keine Modifikation.
- `DOMException.NOT_FOUND_ERR`
  - : Das durch den [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) dargestellte Verzeichnis existiert nicht mehr.
- `DOMException.NOT_READABLE_ERR`
  - : Das Verzeichnis ist nicht zugänglich; möglicherweise wird es von einer anderen Anwendung verwendet oder ist auf Betriebssystemebene gesperrt.
- `DOMException.SECURITY_ERR`
  - : Das Verzeichnis konnte aus Sicherheitsgründen nicht entfernt werden. Mögliche Gründe sind:
    - Das Verzeichnis und/oder dessen Inhalt ist möglicherweise nicht sicher von einer Webanwendung aus zugänglich.
    - Es werden zu viele Dateisystemaufrufe gemacht.
    - Andere Sicherheitsbedenken des Benutzeragenten oder Betriebssystems.

> [!NOTE]
> Wenn Sie versuchen, ein Verzeichnis zu löschen, das eine oder mehrere Dateien enthält, die nicht entfernt werden können, oder wenn beim Löschen einer Anzahl von Dateien ein Fehler auftritt, können einige Dateien möglicherweise nicht gelöscht werden. Sie sollten einen `errorCallback` bereitstellen, um dies zu überwachen und zu behandeln, möglicherweise indem Sie es erneut versuchen.

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

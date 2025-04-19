---
title: "FileSystemDirectoryEntry: removeRecursively()-Methode"
short-title: removeRecursively()
slug: Web/API/FileSystemDirectoryEntry/removeRecursively
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`removeRecursively()`** des [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Interfaces entfernt das Verzeichnis sowie dessen gesamten Inhalt, indem es hierarchisch den gesamten Unterbaum von nachfolgenden Dateien und Verzeichnissen durchgeht.

Um eine einzelne Datei oder ein leeres Verzeichnis zu entfernen, können Sie auch [`FileSystemEntry.remove()`](/de/docs/Web/API/FileSystemEntry/remove) verwenden.

## Syntax

```js-nolint
removeRecursively(successCallback)
removeRecursively(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, sobald der Prozess der Verzeichnisentfernung abgeschlossen ist. Der Callback hat keine Parameter.
- `errorCallback` {{optional_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn ein Fehler auftritt, während versucht wird, den Verzeichnisunterbaum zu entfernen. Sie erhält eine [`DOMException`](/de/docs/Web/API/DOMException), die den aufgetretenen Fehler beschreibt, als Eingabe.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn ein Fehler auftritt und ein `errorCallback` angegeben wurde, wird dieser mit einem einzelnen Parameter aufgerufen: einem [`DOMException`](/de/docs/Web/API/DOMException)-Objekt, das den Fehler beschreibt. Der [`DOMException.code`](/de/docs/Web/API/DOMException/code) gibt an, welche Art von Fehler aufgetreten ist:

- `DOMException.INVALID_MODIFICATION_ERR`
  - : Ein Versuch wurde unternommen, das Stammverzeichnis zu entfernen; dies ist nicht erlaubt.
- `DOMException.NO_MODIFICATION_ALLOWED_ERR`
  - : Der Zustand des Dateisystems erlaubt keine Modifikation.
- `DOMException.NOT_FOUND_ERR`
  - : Das vom [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) dargestellte Verzeichnis existiert nicht mehr.
- `DOMException.NOT_READABLE_ERR`
  - : Das Verzeichnis ist nicht zugänglich; möglicherweise wird es von einer anderen Anwendung verwendet oder ist auf Betriebssystemebene gesperrt.
- `DOMException.SECURITY_ERR`

  - : Das Verzeichnis konnte aus Sicherheitsgründen nicht entfernt werden. Mögliche Gründe sind:

    - Das Verzeichnis und/oder dessen Inhalt sind möglicherweise nicht sicher von einer Webanwendung aus zugänglich.
    - Es werden zu viele Dateisystemaufrufe gemacht.
    - Andere Sicherheitsbedenken, die vom Benutzeragenten oder dem Betriebssystem erhoben werden.

> [!NOTE]
> Wenn Sie versuchen, ein Verzeichnis zu löschen, das eine oder mehrere Dateien enthält, die nicht entfernt werden können, oder wenn ein Fehler beim Löschen mehrerer Dateien auftritt, könnten einige Dateien nicht gelöscht werden. Sie sollten einen `errorCallback` bereitstellen, um dies zu überwachen und zu behandeln, vielleicht indem Sie es erneut versuchen.

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

---
title: "FileSystemDirectoryEntry: removeRecursively() Methode"
short-title: removeRecursively()
slug: Web/API/FileSystemDirectoryEntry/removeRecursively
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die Methode **`removeRecursively()`** des [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Interfaces entfernt das Verzeichnis sowie dessen gesamten Inhalt, indem es hierarchisch über das gesamte Unterverzeichnis von Dateien und Verzeichnissen iteriert.

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
  - : Eine Funktion, die aufgerufen wird, wenn ein Fehler beim Entfernen des Verzeichnisbaums auftritt. Sie erhält als Eingabe einen [`DOMError`](/de/docs/Web/API/DOMError), der den aufgetretenen Fehler beschreibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn ein Fehler auftritt und ein `errorCallback` angegeben wurde, wird dieser mit einem einzigen Parameter aufgerufen: einem [`DOMError`](/de/docs/Web/API/DOMError)-Objekt, das den Fehler beschreibt. Der [`DOMError.code`](/de/docs/Web/API/DOMError/code) gibt an, welche Art von Fehler aufgetreten ist, wie folgt:

- `DOMError.INVALID_MODIFICATION_ERR`
  - : Es wurde versucht, das Stammverzeichnis zu entfernen; dies ist nicht erlaubt.
- `DOMError.NO_MODIFICATION_ALLOWED_ERR`
  - : Der Status des Dateisystems erlaubt keine Änderungen.
- `DOMError.NOT_FOUND_ERR`
  - : Das durch den [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) dargestellte Verzeichnis existiert nicht mehr.
- `DOMError.NOT_READABLE_ERR`
  - : Das Verzeichnis ist nicht zugänglich; möglicherweise wird es von einer anderen Anwendung verwendet oder ist auf Betriebssystemebene gesperrt.
- `DOMError.SECURITY_ERR`

  - : Das Verzeichnis konnte aus Sicherheitsgründen nicht entfernt werden. Mögliche Gründe sind:

    - Das Verzeichnis und/oder seine Inhalte sind möglicherweise nicht sicher genug, um von einer Webanwendung aus zugegriffen zu werden.
    - Es werden zu viele Dateisystemaufrufe durchgeführt.
    - Andere Sicherheitsbedenken, die vom Benutzeragenten oder dem Betriebssystem erhoben werden.

> [!NOTE]
> Wenn Sie versuchen, ein Verzeichnis zu löschen, das eine oder mehrere Dateien enthält, die nicht entfernt werden können, oder wenn beim Löschen mehrerer Dateien ein Fehler auftritt, können einige Dateien möglicherweise nicht gelöscht werden. Sie sollten einen `errorCallback` bereitstellen, um dies zu überwachen und zu behandeln, möglicherweise durch einen erneuten Versuch.

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

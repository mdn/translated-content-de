---
title: "FileSystemEntry: Methode getParent()"
short-title: getParent()
slug: Web/API/FileSystemEntry/getParent
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("File and Directory Entries API")}}

Die Methode **`getParent()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Interfaces erhält ein
[`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry).

## Syntax

```js-nolint
getParent(successCallback, errorCallback)
getParent(successCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn der übergeordnete Verzeichniseintrag abgerufen wurde. Der Callback erhält einen einzelnen Eingabeparameter: ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt, das das übergeordnete Verzeichnis darstellt. Das übergeordnete Verzeichnis des Stammverzeichnisses wird als das Stammverzeichnis selbst betrachtet, daher achten Sie darauf.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Callback, der ausgeführt wird, wenn ein Fehler auftritt. Es gibt einen einzigen Parameter: ein [`DOMException`](/de/docs/Web/API/DOMException), der beschreibt, was schiefgelaufen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `FileError.INVALID_STATE_ERR`
  - : Der Vorgang ist fehlgeschlagen, da der Zustand des Dateisystems es nicht zulässt. Dies kann beispielsweise auftreten, wenn der zwischengespeicherte Zustand des Dateisystems vom tatsächlichen Zustand des Dateisystems abweicht.
- `FileError.NOT_FOUND_ERR`
  - : Der angegebene Pfad konnte nicht gefunden werden.
- `FileError.SECURITY_ERR`
  - : Sicherheitsbeschränkungen verhindern das Abrufen der Informationen des übergeordneten Verzeichnisses.

## Beispiele

In diesem Beispiel wird die Datei umbenannt, die durch die Variable `fileEntry` angegeben ist, in `"newname.html"`.

```js
fileEntry.getParent(
  (parent) => {
    fileEntry.moveTo(parent, "newname.html", (updatedEntry) => {
      console.log(`File ${fileEntry.name} renamed to newname.html.`);
    });
  },
  (error) => {
    console.error(
      `An error occurred: Unable to rename ${fileEntry.name} to newname.html.`,
    );
  },
);
```

Dies wird erreicht, indem zunächst ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt abgerufen wird, das das Verzeichnis darstellt, in dem die Datei derzeit befindet. Dann wird [`moveTo()`](/de/docs/Web/API/FileSystemEntry/moveTo) verwendet, um die Datei innerhalb dieses Verzeichnisses umzubenennen.

## Verwendung von Promises

Derzeit gibt es keine auf {{jsxref("Promise")}} basierende Version dieser Methode. Sie können jedoch eine einfache Hilfsfunktion erstellen, um sie anzupassen, wie folgt:

```js
function getParentPromise(entry) {
  return new Promise((resolve, reject) => {
    entry.getParent(resolve, reject);
  });
}
```

Ein ähnlicher Ansatz kann auch an anderer Stelle in der File and Directory Entries API verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)

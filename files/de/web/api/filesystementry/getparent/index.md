---
title: "FileSystemEntry: getParent()-Methode"
short-title: getParent()
slug: Web/API/FileSystemEntry/getParent
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
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
  - : Eine Funktion, die aufgerufen wird, wenn das übergeordnete Verzeichniseintrag abgerufen wurde. Der Callback erhält einen einzigen Eingabeparameter: ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt, das das übergeordnete Verzeichnis darstellt. Das übergeordnete Verzeichnis des Stammverzeichnisses wird als das Stammverzeichnis selbst betrachtet, daher achten Sie darauf.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Callback, der ausgeführt wird, wenn ein Fehler auftritt. Es gibt einen einzigen Parameter: ein [`DOMException`](/de/docs/Web/API/DOMException), das beschreibt, was schiefgegangen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `DOMException.INVALID_STATE_ERR`
  - : Der Vorgang ist fehlgeschlagen, weil der Zustand des Dateisystems dies nicht zulässt. Dies kann beispielsweise passieren, wenn der zwischengespeicherte Zustand des Dateisystems vom tatsächlichen Zustand des Dateisystems abweicht.
- `DOMException.NOT_FOUND_ERR`
  - : Der angegebene Pfad konnte nicht gefunden werden.
- `DOMException.SECURITY_ERR`
  - : Sicherheitsbeschränkungen verbieten das Abrufen der Informationen des übergeordneten Verzeichnisses.

## Beispiele

Dieses Beispiel benennt die Datei, die durch die Variable `fileEntry` angegeben wird, in `"newname.html"` um.

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

Dies wird erreicht, indem zuerst ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt abgerufen wird, das das Verzeichnis darstellt, in dem sich die Datei derzeit befindet. Dann wird [`moveTo()`](/de/docs/Web/API/FileSystemEntry/moveTo) verwendet, um die Datei in diesem Verzeichnis umzubenennen.

## Verwendung von Promises

Derzeit gibt es keine {{jsxref("Promise")}}-basierte Version dieser Methode. Sie können jedoch eine einfache Helferfunktion erstellen, um sie anzupassen, wie diese:

```js
function getParentPromise(entry) {
  return new Promise((resolve, reject) => {
    entry.getParent(resolve, reject);
  });
}
```

Ein ähnlicher Ansatz kann an anderer Stelle in der File and Directory Entries API verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)

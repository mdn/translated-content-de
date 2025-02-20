---
title: "FileSystemEntry: getParent() Methode"
short-title: getParent()
slug: Web/API/FileSystemEntry/getParent
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}

Die Methode **`getParent()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-Interfaces ermittelt eine
[`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry).

## Syntax

```js-nolint
getParent(successCallback, errorCallback)
getParent(successCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn der übergeordnete Verzeichniseintrag abgerufen wurde. Der Callback erhält einen einzelnen Eingabeparameter: ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt, das das übergeordnete Verzeichnis darstellt. Das übergeordnete Verzeichnis des Stammverzeichnisses wird als das Stammverzeichnis selbst angesehen, achten Sie also darauf.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Callback, der ausgeführt wird, falls ein Fehler auftritt. Es gibt einen einzelnen Parameter: ein [`DOMException`](/de/docs/Web/API/DOMException), das beschreibt, was schiefgegangen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `FileError.INVALID_STATE_ERR`
  - : Der Vorgang schlug fehl, weil der Zustand des Dateisystems dies nicht zulässt. Dies kann passieren, wenn der zwischengespeicherte Zustand des Dateisystems vom tatsächlichen Zustand des Dateisystems abweicht.
- `FileError.NOT_FOUND_ERR`
  - : Der angegebene Pfad konnte nicht gefunden werden.
- `FileError.SECURITY_ERR`
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

Dies wird erreicht, indem zunächst ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt abgerufen wird, das das Verzeichnis darstellt, in dem sich die Datei derzeit befindet. Anschließend wird [`moveTo()`](/de/docs/Web/API/FileSystemEntry/moveTo) verwendet, um die Datei in diesem Verzeichnis umzubenennen.

## Verwendung von Promises

Derzeit gibt es keine {{jsxref("Promise")}}-basierte Version dieser Methode. Sie können jedoch eine einfache Hilfsfunktion erstellen, um sie anzupassen, wie folgt:

```js
function getParentPromise(entry) {
  return new Promise((resolve, reject) => {
    entry.getParent(resolve, reject);
  });
}
```

Ein ähnlicher Ansatz kann auch an anderen Stellen in der File and Directory Entries API angewandt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)

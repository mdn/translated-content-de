---
title: "FileSystemEntry: Methode getParent()"
short-title: getParent()
slug: Web/API/FileSystemEntry/getParent
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("File and Directory Entries API")}}

Die Methode **`getParent()`** des [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) Interfaces erhält ein
[`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry).

## Syntax

```js-nolint
getParent(successCallback, errorCallback)
getParent(successCallback)
```

### Parameter

- `successCallback`
  - : Eine Funktion, die aufgerufen wird, wenn der übergeordnete Verzeichniseintrag abgerufen wurde. Der
    Callback erhält einen einzelnen Eingabeparameter: ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
    Objekt, das das übergeordnete Verzeichnis darstellt. Das übergeordnete Verzeichnis des Stammverzeichnisses wird
    als das Stammverzeichnis selbst betrachtet, daher sollten Sie darauf achten.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Callback, der ausgeführt wird, wenn ein Fehler auftritt. Es gibt einen einzelnen
    Parameter: ein [`DOMException`](/de/docs/Web/API/DOMException), der beschreibt, was schiefgelaufen ist.

### Rückgabewert

Keinen ({{jsxref("undefined")}}).

### Ausnahmen

- `DOMError.INVALID_STATE_ERR`
  - : Der Vorgang ist fehlgeschlagen, weil der Zustand des Dateisystems dies nicht zulässt. Dies kann
    passieren, wenn der zwischengespeicherte Zustand des Dateisystems von dem tatsächlichen Zustand
    des Dateisystems abweicht.
- `DOMError.NOT_FOUND_ERR`
  - : Der angegebene Pfad konnte nicht gefunden werden.
- `DOMError.SECURITY_ERR`
  - : Sicherheitsbeschränkungen verbieten das Abrufen der Informationen des übergeordneten Verzeichnisses.

## Beispiele

In diesem Beispiel wird die Datei, die durch die Variable `fileEntry` spezifiziert ist, in
`"newname.html"` umbenannt.

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

Dies wird erreicht, indem zunächst ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
Objekt abgerufen wird, das das Verzeichnis darstellt, in dem sich die Datei derzeit befindet. Dann
wird [`moveTo()`](/de/docs/Web/API/FileSystemEntry/moveTo) verwendet, um die Datei in diesem
Verzeichnis umzubenennen.

## Verwendung von Promises

Derzeit gibt es keine auf {{jsxref("Promise")}} basierende Version dieser Methode. Sie können
jedoch eine einfache Hilfsfunktion erstellen, um sie anzupassen, wie hier:

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

---
title: "FileSystemDirectoryHandle: removeEntry() Methode"
short-title: removeEntry()
slug: Web/API/FileSystemDirectoryHandle/removeEntry
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`removeEntry()`**-Methode der [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Schnittstelle versucht, einen Eintrag zu entfernen, wenn der Verzeichnis-Handle eine Datei oder ein Verzeichnis mit dem angegebenen Namen enthält.

## Syntax

```js-nolint
removeEntry(name)
removeEntry(name, options)
```

### Parameter

- `name`
  - : Ein String, der den [`FileSystemHandle.name`](/de/docs/Web/API/FileSystemHandle/name) des zu entfernenden Eintrags darstellt.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das Optionen enthält, die wie folgt sind:
    - `recursive` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn auf `true` gesetzt, werden Einträge rekursiv entfernt.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit `undefined` aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn der Name kein gültiger String ist oder Zeichen enthält, die im Dateisystem nicht erlaubt sind.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für den Handle im `readwrite`-Modus nicht `'granted'` ist.
- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn `recursive` auf false gesetzt ist und der zu entfernende Eintrag untergeordnete Elemente hat.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird oder wenn der Eintrag mit dem spezifischen Namen nicht gefunden oder übereinstimmt.

## Beispiele

Das folgende Beispiel entfernt einen Eintrag innerhalb des Verzeichnis-Handles.

```js
const entryName = "entryToRemove";

// assuming we have a directory handle: 'currentDirHandle'
currentDirHandle.removeEntry(entryName).then(() => {
  // code to run if removing was successful
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [Das File System Access API: Vereinfachung des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

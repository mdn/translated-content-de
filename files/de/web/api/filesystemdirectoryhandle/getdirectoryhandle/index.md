---
title: "FileSystemDirectoryHandle: Methode getDirectoryHandle()"
short-title: getDirectoryHandle()
slug: Web/API/FileSystemDirectoryHandle/getDirectoryHandle
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`getDirectoryHandle()`**-Methode der [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Schnittstelle gibt einen [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) für ein Unterverzeichnis mit dem angegebenen Namen innerhalb des Verzeichnis-Handles zurück, auf dem die Methode aufgerufen wird.

## Syntax

```js-nolint
getDirectoryHandle(name)
getDirectoryHandle(name, options)
```

### Parameter

- `name`
  - : Ein String, der den [`FileSystemHandle.name`](/de/docs/Web/API/FileSystemHandle/name) des gewünschten Unterverzeichnisses repräsentiert.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das Optionen für das abgerufene Unterverzeichnis enthält. Die Optionen sind wie folgt:
    - `create` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn auf `true` gesetzt, wird, falls das Verzeichnis nicht gefunden wird, eines mit dem angegebenen Namen erstellt und zurückgegeben.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) aufgelöst wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für das Handle nicht `'granted'` ist im `readwrite`-Modus, wenn die `create`-Option auf `true` gesetzt ist, oder im `read`-Modus, wenn die `create`-Option auf `false` gesetzt ist.
- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn der angegebene Name kein gültiger String ist oder Zeichen enthält, die mit dem nativen Dateisystem interferieren würden.
- `TypeMismatchError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der zurückgegebene Eintrag eine Datei und kein Verzeichnis ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der aktuelle Eintrag nicht gefunden wird oder wenn das Zielverzeichnis nicht existiert und die `create`-Option auf `false` gesetzt ist.

## Beispiele

Das folgende Beispiel gibt ein Verzeichnis-Handle mit dem angegebenen Namen zurück. Wenn das Verzeichnis nicht existiert, wird es erstellt.

```js
const dirName = "directoryToGetName";

// assuming we have a directory handle: 'currentDirHandle'
const subDir = currentDirHandle.getDirectoryHandle(dirName, { create: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [Das File System Access API: Vereinfachung des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

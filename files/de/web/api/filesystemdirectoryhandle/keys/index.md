---
title: "FileSystemDirectoryHandle: keys() Methode"
short-title: keys()
slug: Web/API/FileSystemDirectoryHandle/keys
l10n:
  sourceCommit: fd4d2987e2db8b4183017b6a0ed5e4f054b18587
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die Methode **`keys()`** der Schnittstelle [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) gibt einen neuen asynchronen Iterator zurück, der zur Iteration der Schlüssel der Einträge innerhalb des `FileSystemDirectoryHandle` verwendet wird, auf dem diese Methode aufgerufen wird.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer asynchroner Iterator, der die Schlüssel jedes Eintrags innerhalb des `FileSystemDirectoryHandle` enthält.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für den Handle im `read` Modus nicht `'granted'` ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.

## Beispiele

Die Verwendung der `for await...of` Schleife kann den Iterationsprozess vereinfachen.

```js
const dirHandle = await window.showDirectoryPicker();

for await (const key of dirHandle.keys()) {
  console.log(key);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

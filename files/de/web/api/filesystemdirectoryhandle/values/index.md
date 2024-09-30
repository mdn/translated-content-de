---
title: "FileSystemDirectoryHandle: values()-Methode"
short-title: values()
slug: Web/API/FileSystemDirectoryHandle/values
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`values()`**-Methode des
[`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Interfaces gibt einen neuen asynchronen Iterator
zur Iteration der Werte der Einträge innerhalb des `FileSystemDirectoryHandle` zurück, auf dem diese Methode aufgerufen wird.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer asynchroner Iterator, der die Handles jedes Eintrags innerhalb des `FileSystemDirectoryHandle` enthält.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für das Handle im `read`-Modus nicht `'granted'` ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.

## Beispiele

Die Verwendung der `for await...of`-Schleife kann den Iterationsprozess vereinfachen.

```js
const dirHandle = await window.showDirectoryPicker();

for await (const value of dirHandle.values()) {
  console.log(value);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

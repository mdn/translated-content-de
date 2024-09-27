---
title: "FileSystemDirectoryHandle: entries()-Methode"
short-title: entries()
slug: Web/API/FileSystemDirectoryHandle/entries
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`entries()`**-Methode des
[`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Interfaces gibt einen neuen asynchronen Iterator
für die Iteration der Schlüssel-Wert-Paare der Einträge innerhalb des `FileSystemDirectoryHandle`
zurück, auf dem diese Methode aufgerufen wird. Die Schlüssel-Wert-Paare liegen in Form eines Arrays wie `[key, value]` vor.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer asynchroner Iterator, der die Schlüssel-Wert-Paare jedes Eintrags innerhalb des `FileSystemDirectoryHandle` enthält.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für den Handle im `read`-Modus nicht `'granted'` ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.

## Beispiele

Die Verwendung der `for await...of`-Schleife kann den Iterationsprozess vereinfachen.

```js
const dirHandle = await window.showDirectoryPicker();

for await (const [key, value] of dirHandle.entries()) {
  console.log({ key, value });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

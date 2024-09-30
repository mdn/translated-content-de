---
title: "FileSystemDirectoryHandle: resolve() Methode"
short-title: resolve()
slug: Web/API/FileSystemDirectoryHandle/resolve
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`resolve()`** Methode der [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) Schnittstelle gibt ein {{jsxref('Array')}} der Verzeichnispfade vom übergeordneten Handle zum angegebenen Kind-Eintrag zurück, wobei der Name des Kind-Eintrags das letzte Element des Arrays ist.

## Syntax

```js-nolint
resolve(possibleDescendant)
```

### Parameter

- `possibleDescendant`
  - : Der [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle), von dem der relative Pfad zurückgegeben werden soll.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem {{jsxref('Array')}} von Strings aufgelöst wird, oder `null`, falls `possibleDescendant` kein Nachkomme dieses [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) ist.

### Ausnahmen

Es werden keine Ausnahmen ausgelöst.

## Beispiele

Die folgende asynchrone Funktion verwendet `resolve()`, um den Pfad zu einer ausgewählten Datei relativ zu einem angegebenen Verzeichnis-Handle zu finden.

```js
async function returnPathDirectories(directoryHandle) {
  // Get a file handle by showing a file picker:
  const [handle] = await self.showOpenFilePicker();
  if (!handle) {
    // User cancelled, or otherwise failed to open a file.
    return;
  }

  // Check if handle exists inside our directory handle
  const relativePaths = await directoryHandle.resolve(handle);

  if (relativePaths === null) {
    // Not inside directory handle
  } else {
    // relativePath is an array of names, giving the relative path
    for (const name of relativePaths) {
      // log each entry
      console.log(name);
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

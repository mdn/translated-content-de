---
title: "FileSystemDirectoryHandle: resolve()-Methode"
short-title: resolve()
slug: Web/API/FileSystemDirectoryHandle/resolve
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`resolve()`**-Methode des
[`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Interfaces gibt ein {{jsxref('Array')}} von
Verzeichnisnamen vom übergeordneten Handle zum angegebenen untergeordneten Eintrag zurück, wobei der Name des
untergeordneten Eintrags das letzte Array-Element ist.

## Syntax

```js-nolint
resolve(possibleDescendant)
```

### Parameter

- `possibleDescendant`
  - : Der [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle), von dem der relative Pfad zurückgegeben werden soll.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem {{jsxref('Array')}} von
Strings aufgelöst wird, oder `null`, wenn `possibleDescendant` kein Nachfahre dieses [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) ist.

### Ausnahmen

Keine Ausnahmen werden geworfen.

## Beispiele

Die folgende asynchrone Funktion verwendet `resolve()`, um den Pfad zu einer
ausgewählten Datei relativ zu einem angegebenen Verzeichnis-Handle zu finden.

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

---
title: "FileSystemDirectoryHandle: resolve() Methode"
short-title: resolve()
slug: Web/API/FileSystemDirectoryHandle/resolve
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`resolve()`** Methode der [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) Schnittstelle gibt ein {{jsxref('Array')}} von Verzeichnisnamen vom Eltern-Handle bis zum angegebenen Kind-Eintrag zurück, wobei der Name des Kind-Eintrags das letzte Array-Element ist.

## Syntax

```js-nolint
resolve(possibleDescendant)
```

### Parameter

- `possibleDescendant`
  - : Das [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle), von dem der relative Pfad zurückgegeben werden soll.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem {{jsxref('Array')}} von Zeichenketten aufgelöst wird, oder `null`, wenn `possibleDescendant` kein Nachkomme dieses [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) ist.

### Ausnahmen

Keine Ausnahmen werden ausgelöst.

## Beispiele

Die folgende asynchrone Funktion verwendet `resolve()`, um den Pfad zu einer ausgewählten Datei relativ zu einem angegebenen Verzeichnis-Handle zu finden.

```js
async function returnPathDirectories(directoryHandle) {
  // Get a file handle by showing a file picker:
  const [handle] = await self.showOpenFilePicker();
  if (!handle) {
    // User canceled, or otherwise failed to open a file.
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
- [Das File System Access API: Vereinfachter Zugriff auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

---
title: "DataTransferItem: getAsFileSystemHandle()-Methode"
short-title: getAsFileSystemHandle()
slug: Web/API/DataTransferItem/getAsFileSystemHandle
l10n:
  sourceCommit: 2b6bddfe281c0179fbde9c870f9de7c0dc3829e8
---

{{securecontext_header}}{{APIRef("File System API")}}{{SeeCompatTable}}

Die **`getAsFileSystemHandle()`**-Methode des [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Interfaces gibt ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) zurück, wenn das gezogene Element eine Datei ist, oder ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), wenn das gezogene Element ein Verzeichnis ist.

## Syntax

```js-nolint
getAsFileSystemHandle()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}.

Wenn die [`kind`](/de/docs/Web/API/DataTransferItem/kind)-Eigenschaft des Elements `"file"` ist und dieses Element in den [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)- oder [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignishandlern zugegriffen wird, wird das zurückgegebene Promise mit einem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) erfüllt, wenn das gezogene Element eine Datei ist, oder einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), wenn das gezogene Element ein Verzeichnis ist.

Andernfalls wird das Promise mit `null` erfüllt.

### Ausnahmen

Keine.

## Beispiele

Dieses Beispiel verwendet die `getAsFileSystemHandle()`-Methode, um [Dateihandles](/de/docs/Web/API/FileSystemHandle) für abgelegte Elemente zurückzugeben.

```js
elem.addEventListener("dragover", (e) => {
  // Prevent navigation.
  e.preventDefault();
});
elem.addEventListener("drop", async (e) => {
  // Prevent navigation.
  e.preventDefault();

  // Process all of the items.
  for (const item of e.dataTransfer.items) {
    // kind will be 'file' for file/directory entries.
    if (item.kind === "file") {
      const entry = await item.getAsFileSystemHandle();
      if (entry.kind === "file") {
        // run code for if entry is a file
      } else if (entry.kind === "directory") {
        // run code for is entry is a directory
      }
    }
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [Das File System Access API: Vereinfachung des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

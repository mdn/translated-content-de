---
title: "DataTransferItem: getAsFileSystemHandle()-Methode"
short-title: getAsFileSystemHandle()
slug: Web/API/DataTransferItem/getAsFileSystemHandle
l10n:
  sourceCommit: 59d87e8756161420f3f40dc554562858f4427e72
---

{{securecontext_header}}{{APIRef("File System API")}}{{SeeCompatTable}}

Die **`getAsFileSystemHandle()`**-Methode der [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das mit einem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) erfüllt wird, wenn das gezogene Element eine Datei ist, oder mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), wenn das gezogene Element ein Verzeichnis ist.

## Syntax

```js-nolint
getAsFileSystemHandle()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}.

Wenn die [`kind`](/de/docs/Web/API/DataTransferItem/kind)-Eigenschaft des Elements `"file"` ist und auf dieses Element in den Ereignis-Handlern [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) oder [`drop`](/de/docs/Web/API/HTMLElement/drop_event) zugegriffen wird, dann wird das zurückgegebene Promise mit einem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) erfüllt, wenn das gezogene Element eine Datei ist oder einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), wenn das gezogene Element ein Verzeichnis ist.

Andernfalls wird das Promise mit `null` erfüllt.

### Ausnahmen

Keine.

## Beispiele

Dieses Beispiel verwendet die `getAsFileSystemHandle()`-Methode, um
[Datei-Handles](/de/docs/Web/API/FileSystemHandle) für abgelegte Elemente zurückzugeben.

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
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

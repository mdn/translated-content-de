---
title: "DataTransferItem: getAsFileSystemHandle() Methode"
short-title: getAsFileSystemHandle()
slug: Web/API/DataTransferItem/getAsFileSystemHandle
l10n:
  sourceCommit: a2079173e316405eb47f3d15d3a4b3b7577fc14e
---

{{securecontext_header}}{{APIRef("File System API")}}{{SeeCompatTable}}

Die **`getAsFileSystemHandle()`** Methode des [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Interfaces gibt ein {{jsxref('Promise')}} zurück, das mit einem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) erfüllt wird, wenn das gezogene Element eine Datei ist, oder mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), wenn das gezogene Element ein Verzeichnis ist.

## Syntax

```js-nolint
getAsFileSystemHandle()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}.

Wenn die [`kind`](/de/docs/Web/API/DataTransferItem/kind) Eigenschaft des Elements `"file"` ist und dieses Element in den Event-Handlern [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) oder [`drop`](/de/docs/Web/API/HTMLElement/drop_event) aufgerufen wird, wird das zurückgegebene Promise mit einem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) erfüllt, wenn das gezogene Element eine Datei ist, oder mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), wenn das gezogene Element ein Verzeichnis ist.

Andernfalls wird das Promise mit `null` erfüllt.

### Ausnahmen

Keine.

## Beispiele

Dieses Beispiel verwendet die `getAsFileSystemHandle()` Methode, um
[Datei-Handles](/de/docs/Web/API/FileSystemHandle) für abgelegte Elemente zurückzugeben.

> [!NOTE]
> Da `getAsFileSystemHandle()` den Eintragshandle nur im gleichen Tick wie der `drop` Ereignis-Handler abrufen kann, darf davor kein `await` stehen. Deshalb rufen wir `getAsFileSystemHandle()` zuerst synchron für alle Elemente auf und warten dann gleichzeitig auf ihre Ergebnisse.

```js
elem.addEventListener("dragover", (e) => {
  // Prevent navigation.
  e.preventDefault();
});
elem.addEventListener("drop", async (e) => {
  // Prevent navigation.
  e.preventDefault();
  const handlesPromises = [...e.dataTransfer.items]
    // kind will be 'file' for file/directory entries.
    .filter((x) => x.kind === "file")
    .map((x) => x.getAsFileSystemHandle());
  const handles = await Promise.all(handlesPromises);

  // Process all of the items.
  for (const handle of handles) {
    if (handle.kind === "file") {
      // run code for if handle is a file
    } else if (handle.kind === "directory") {
      // run code for is handle is a directory
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

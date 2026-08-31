---
title: "DataTransferItem: getAsFileSystemHandle() Methode"
short-title: getAsFileSystemHandle()
slug: Web/API/DataTransferItem/getAsFileSystemHandle
l10n:
  sourceCommit: 565501caace6d4fbcb9c9b3d8cbf7b03145abbf5
---

{{securecontext_header}}{{APIRef("File System API")}}{{SeeCompatTable}}

Die Methode **`getAsFileSystemHandle()`** des [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Interfaces gibt ein {{jsxref('Promise')}} zurück, das mit einem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) erfüllt wird, wenn das gezogene Element eine Datei ist, oder mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) erfüllt wird, wenn das gezogene Element ein Verzeichnis ist.

Während eines Ziehvorgangs kann diese Methode die Daten nur in den Handlern für die [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisse lesen, da dies die einzigen Zeiten sind, zu denen der Ziehdaten-Speicher lesbar ist. Wenn es von einem anderen Ziehereignis aus aufgerufen wird, gibt es ein Promise zurück, das mit `null` erfüllt wird. Die Methode muss synchron innerhalb des Ereignishandlers aufgerufen werden, obwohl das Promise später gewartet werden kann. Siehe [Lesen des Ziehdaten-Speichers](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store) für Details.

## Syntax

```js-nolint
getAsFileSystemHandle()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}.

Wenn die [`kind`](/de/docs/Web/API/DataTransferItem/kind) Eigenschaft des Elements `"file"` ist, und dieses Element innerhalb der [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) oder [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignishandler zugegriffen wird, dann wird das zurückgegebene Promise mit einem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) erfüllt, wenn das gezogene Element eine Datei ist oder mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), wenn das gezogene Element ein Verzeichnis ist.

Andernfalls wird das Promise mit `null` erfüllt.

### Ausnahmen

Keine.

## Beispiele

Dieses Beispiel verwendet die `getAsFileSystemHandle()` Methode, um
[Dateihandles](/de/docs/Web/API/FileSystemHandle) für abgelegte Elemente zurückzugeben.

> [!NOTE]
> Da `getAsFileSystemHandle()` den Eintragshandles nur im gleichen Takt wie der `drop` Ereignishandler abrufen kann, darf davor kein `await` stehen. Aus diesem Grund rufen wir `getAsFileSystemHandle()` für alle Elemente zuerst synchron auf und warten dann ihre Ergebnisse gleichzeitig ab.

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

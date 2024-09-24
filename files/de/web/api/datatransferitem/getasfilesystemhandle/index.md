---
title: "DataTransferItem: getAsFileSystemHandle()-Methode"
short-title: getAsFileSystemHandle()
slug: Web/API/DataTransferItem/getAsFileSystemHandle
l10n:
  sourceCommit: 2b6bddfe281c0179fbde9c870f9de7c0dc3829e8
---

{{securecontext_header}}{{APIRef("File System API")}}{{SeeCompatTable}}

Die **`getAsFileSystemHandle()`**-Methode des
{{domxref("DataTransferItem")}}-Interfaces gibt ein {{domxref('FileSystemFileHandle')}}
zurück, wenn das gezogene Element eine Datei ist, oder ein {{domxref('FileSystemDirectoryHandle')}},
wenn das gezogene Element ein Verzeichnis ist.

## Syntax

```js-nolint
getAsFileSystemHandle()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}.

Wenn die {{domxref("DataTransferItem.kind", "kind")}}-Eigenschaft des Elements `"file"` ist, und dieses Element in den {{domxref("HTMLElement/dragstart_event", "dragstart")}}- oder {{domxref("HTMLElement/drop_event", "drop")}}-Ereignishandlern aufgerufen wird, dann wird das zurückgegebene Promise mit einem {{domxref('FileSystemFileHandle')}} erfüllt, wenn das gezogene Objekt eine Datei ist, oder einem {{domxref('FileSystemDirectoryHandle')}}, wenn das gezogene Objekt ein Verzeichnis ist.

Andernfalls wird das Promise mit `null` erfüllt.

### Ausnahmen

Keine.

## Beispiele

Dieses Beispiel verwendet die `getAsFileSystemHandle()`-Methode, um
{{domxref('FileSystemHandle', 'Dateihandles', '', 'nocode')}} für abgelegte Elemente zurückzugeben.

```js
elem.addEventListener("dragover", (e) => {
  // Navigation verhindern.
  e.preventDefault();
});
elem.addEventListener("drop", async (e) => {
  // Navigation verhindern.
  e.preventDefault();

  // Alle Elemente verarbeiten.
  for (const item of e.dataTransfer.items) {
    // kind wird 'file' für Datei-/Verzeichniseinträge sein.
    if (item.kind === "file") {
      const entry = await item.getAsFileSystemHandle();
      if (entry.kind === "file") {
        // Code ausführen, wenn entry eine Datei ist
      } else if (entry.kind === "directory") {
        // Code ausführen, wenn entry ein Verzeichnis ist
      }
    }
  }
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

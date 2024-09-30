---
title: "FileSystemHandle: name Eigenschaft"
short-title: name
slug: Web/API/FileSystemHandle/name
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`name`** der
[`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Schnittstelle gibt den Namen des durch das Handle dargestellten Eintrags zurück.

## Wert

Ein String.

## Beispiele

Die folgende Funktion ermöglicht es dem Benutzer, eine Datei aus dem Dateiauswahldialog auszuwählen und die `name`-Eigenschaft abzurufen.

```js
// store a reference to our file handle
let fileHandle;

async function getFile() {
  // open file picker
  [fileHandle] = await window.showOpenFilePicker();

  const fileName = fileHandle.name;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

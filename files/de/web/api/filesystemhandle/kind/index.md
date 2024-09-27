---
title: "FileSystemHandle: kind-Eigenschaft"
short-title: kind
slug: Web/API/FileSystemHandle/kind
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`kind`**-schreibgeschützte Eigenschaft des [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Interfaces gibt den Typ des Eintrags zurück. Dies ist `'file'`, wenn der zugehörige Eintrag eine Datei ist, oder `'directory'`. Sie wird verwendet, um Dateien von Verzeichnissen zu unterscheiden, wenn über den Inhalt eines Verzeichnisses iteriert wird.

## Wert

Ein String, der sein kann:

- `'file'`: Wenn der Handle ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) ist.
- `'directory'`: Wenn der Handle ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) ist.

## Beispiele

Die folgende Funktion ermöglicht es dem Benutzer, eine Datei über den Dateiauswahldialog zu wählen und prüft dann, ob der zurückgegebene Handle eine Datei oder ein Verzeichnis ist.

```js
// store a reference to our file handle
let fileHandle;

async function getFile() {
  // open file picker
  [fileHandle] = await window.showOpenFilePicker();

  if (fileHandle.kind === "file") {
    // run file code
  } else if (fileHandle.kind === "directory") {
    // run directory code
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

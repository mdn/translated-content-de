---
title: "FileSystemHandle: Eigenschaft kind"
short-title: kind
slug: Web/API/FileSystemHandle/kind
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`kind`** Eigenschaft des
{{domxref("FileSystemHandle")}} Schnittstelle ist schreibgeschützt und gibt den Typ des Eintrags zurück. Es ist
`'file'`, wenn der zugehörige Eintrag eine Datei ist oder `'directory'`. Sie wird verwendet, um Dateien von Verzeichnissen zu unterscheiden, wenn Sie über den Inhalt eines
Verzeichnisses iterieren.

## Wert

Ein String, der einer der folgenden sein kann:

- `'file'`: Wenn der Handle ein {{domxref('FileSystemFileHandle')}} ist.
- `'directory'`: Wenn der Handle ein {{domxref('FileSystemDirectoryHandle')}} ist.

## Beispiele

Die folgende Funktion ermöglicht es dem Nutzer, eine Datei aus dem Dateiauswahldialog zu wählen und dann zu prüfen, ob der zurückgegebene Handle eine Datei oder ein Verzeichnis ist

```js
// speichern Sie eine Referenz auf unseren Datei-Handle
let fileHandle;

async function getFile() {
  // Dateiauswahldialog öffnen
  [fileHandle] = await window.showOpenFilePicker();

  if (fileHandle.kind === "file") {
    // Code für Datei ausführen
  } else if (fileHandle.kind === "directory") {
    // Code für Verzeichnis ausführen
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

---
title: "FileSystemHandle: name-Eigenschaft"
short-title: name
slug: Web/API/FileSystemHandle/name
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`name`**-Schreibgeschützte Eigenschaft des {{domxref("FileSystemHandle")}}-Interfaces gibt den Namen des Eintrags zurück, der durch den Handle dargestellt wird.

## Wert

Ein String.

## Beispiele

Die folgende Funktion ermöglicht es dem Benutzer, eine Datei aus dem Dateiauswahlfenster zu wählen und die `name`-Eigenschaft abzurufen.

```js
// Speichern Sie eine Referenz zu unserem Datei-Handle
let fileHandle;

async function getFile() {
  // Dateiauswahl öffnen
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
- [The File System Access API: Vereinfachung des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

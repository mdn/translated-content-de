---
title: "FileSystemFileHandle: getFile()-Methode"
short-title: getFile()
slug: Web/API/FileSystemFileHandle/getFile
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`getFile()`**-Methode der {{domxref("FileSystemFileHandle")}}-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das auf ein {{domxref('File')}}-Objekt auflöst, welches den Zustand auf der Festplatte des durch den Handle dargestellten Eintrags repräsentiert.

Wenn die Datei auf der Festplatte geändert oder entfernt wird, nachdem diese Methode aufgerufen wurde, wird das zurückgegebene {{domxref('File')}}-Objekt wahrscheinlich nicht mehr lesbar sein.

## Syntax

```js-nolint
getFile()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das auf ein {{domxref('File')}}-Objekt auflöst.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref('PermissionStatus.state')}} nicht auf `granted` im `read`-Modus gesetzt ist.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.

## Beispiele

Die folgende asynchrone Funktion präsentiert einen Dateipicker und verwendet die `getFile()`-Methode, um die Inhalte abzurufen, sobald eine Datei ausgewählt wurde.

```js
async function getTheFile() {
  // Dateipicker öffnen
  [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // Dateiinhalt abrufen
  const fileData = await fileHandle.getFile();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

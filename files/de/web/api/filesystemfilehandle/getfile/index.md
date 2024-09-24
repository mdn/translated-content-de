---
title: "FileSystemFileHandle: getFile()-Methode"
short-title: getFile()
slug: Web/API/FileSystemFileHandle/getFile
l10n:
  sourceCommit: e97f7ef524c21300c65b5089139de89a42bd79e2
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`getFile()`**-Methode der [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das bei Erfüllung ein [`File`](/de/docs/Web/API/File)-Objekt liefert, das den aktuellen Zustand des auf der Festplatte gespeicherten Eintrags repräsentiert, der durch den Handle dargestellt wird.

Wenn die Datei auf der Festplatte nach dem Aufruf dieser Methode geändert oder entfernt wird, ist das zurückgegebene [`File`](/de/docs/Web/API/File)-Objekt wahrscheinlich nicht mehr lesbar.

## Syntax

```js-nolint
getFile()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das bei Erfüllung ein [`File`](/de/docs/Web/API/File)-Objekt liefert.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) nicht auf `granted` im `read`-Modus gesetzt ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.

## Beispiele

Die folgende asynchrone Funktion zeigt einen Dateiauswahldialog und verwendet, nachdem eine Datei ausgewählt wurde, die `getFile()`-Methode, um den Inhalt abzurufen.

```js
async function getTheFile() {
  // open file picker
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // get file contents
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

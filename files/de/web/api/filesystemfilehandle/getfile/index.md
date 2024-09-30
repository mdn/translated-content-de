---
title: "FileSystemFileHandle: getFile()-Methode"
short-title: getFile()
slug: Web/API/FileSystemFileHandle/getFile
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`getFile()`**-Methode des [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Interfaces gibt ein {{jsxref('Promise')}} zurück, das auf ein [`File`](/de/docs/Web/API/File)-Objekt auflöst, welches den Zustand auf der Festplatte des durch den Handle repräsentierten Eintrags darstellt.

Wenn die Datei auf der Festplatte geändert oder entfernt wird, nachdem diese Methode aufgerufen wurde, ist das zurückgegebene [`File`](/de/docs/Web/API/File)-Objekt wahrscheinlich nicht mehr lesbar.

## Syntax

```js-nolint
getFile()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das auf ein [`File`](/de/docs/Web/API/File)-Objekt auflöst.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) nicht `granted` im `read`-Modus ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.

## Beispiele

Die folgende asynchrone Funktion zeigt einen Datei-Auswahldialog an und nutzt, sobald eine Datei ausgewählt wurde, die `getFile()`-Methode, um die Inhalte abzurufen.

```js
async function getTheFile() {
  // open file picker
  [fileHandle] = await window.showOpenFilePicker(pickerOpts);

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

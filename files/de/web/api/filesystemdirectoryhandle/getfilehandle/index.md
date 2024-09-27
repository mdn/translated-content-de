---
title: "FileSystemDirectoryHandle: getFileHandle() Methode"
short-title: getFileHandle()
slug: Web/API/FileSystemDirectoryHandle/getFileHandle
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`getFileHandle()`** Methode des [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) Interfaces gibt ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) für eine Datei mit dem angegebenen Namen zurück, innerhalb des Verzeichnisses, von dem die Methode aufgerufen wird.

## Syntax

```js-nolint
getFileHandle(name)
getFileHandle(name, options)
```

### Parameter

- `name`
  - : Ein String, der den [`FileSystemHandle.name`](/de/docs/Web/API/FileSystemHandle/name) der Datei darstellt, die Sie abrufen möchten.
- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `create` {{optional_inline}}
      - : Ein {{jsxref('Boolean')}}. Standardmäßig `false`. Wenn auf `true` gesetzt und die Datei nicht gefunden wird, wird eine Datei mit dem angegebenen Namen erstellt und zurückgegeben.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) aufgelöst wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für den Handle im `readwrite`-Modus nicht `'granted'` ist, wenn die Option `create` auf `true` gesetzt ist, oder im `read`-Modus, wenn die Option `create` auf `false` gesetzt ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene Name keine gültige Zeichenkette ist oder Zeichen enthält, die mit dem nativen Dateisystem in Konflikt stehen würden.
- `TypeMismatchError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der benannte Eintrag ein Verzeichnis und keine Datei ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird oder die Datei nicht existiert und die Option `create` auf `false` gesetzt ist.

## Beispiele

Das folgende Beispiel gibt einen Dateihandle mit dem angegebenen Namen zurück, wenn die Datei nicht existiert, wird sie erstellt.

```js
const fileName = "fileToGetName";

// assuming we have a directory handle: 'currentDirHandle'
const fileHandle = currentDirHandle.getFileHandle(fileName, { create: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

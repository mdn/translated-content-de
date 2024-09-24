---
title: "FileSystemDirectoryHandle: Methode getFileHandle()"
short-title: getFileHandle()
slug: Web/API/FileSystemDirectoryHandle/getFileHandle
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`getFileHandle()`** Methode des
{{domxref("FileSystemDirectoryHandle")}} Interfaces gibt ein
{{domxref('FileSystemFileHandle')}} für eine Datei mit dem angegebenen Namen innerhalb des
Verzeichnisses zurück, in dem die Methode aufgerufen wird.

## Syntax

```js-nolint
getFileHandle(name)
getFileHandle(name, options)
```

### Parameter

- `name`
  - : Ein String, der den {{domxref('FileSystemHandle.name')}} der Datei darstellt, die Sie abrufen möchten.
- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `create` {{optional_inline}}
      - : Ein {{jsxref('Boolean')}}. Standardwert ist `false`. Wenn auf `true` gesetzt, wird, falls die Datei nicht gefunden wird, eine Datei mit dem angegebenen Namen erstellt und zurückgegeben.

### Rückgabewert

Ein {{jsxref('Promise')}}, der mit einem {{domxref('FileSystemFileHandle')}} aufgelöst wird.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref('PermissionStatus.state')}} für das Handle nicht `'granted'` im `readwrite` Modus ist, falls die Option `create` auf `true` gesetzt ist, oder im `read` Modus, falls die Option `create` auf `false` gesetzt ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene Name kein gültiger String ist oder Zeichen enthält, die das native Dateisystem stören würden.
- `TypeMismatchError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der benannte Eintrag ein Verzeichnis und keine Datei ist.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird oder die Datei nicht existiert und die `create` Option auf `false` gesetzt ist.

## Beispiele

Das folgende Beispiel gibt einen Datei-Handle mit dem angegebenen Namen zurück. Falls die Datei nicht existiert, wird sie erstellt.

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

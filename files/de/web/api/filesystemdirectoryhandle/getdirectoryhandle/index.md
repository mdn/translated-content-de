---
title: "FileSystemDirectoryHandle: Methode getDirectoryHandle()"
short-title: getDirectoryHandle()
slug: Web/API/FileSystemDirectoryHandle/getDirectoryHandle
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`getDirectoryHandle()`**-Methode des
{{domxref("FileSystemDirectoryHandle")}}-Interfaces gibt ein
{{domxref('FileSystemDirectoryHandle')}} für ein Unterverzeichnis mit dem angegebenen Namen
innerhalb des Verzeichnis-Handles zurück, auf dem die Methode aufgerufen wird.

## Syntax

```js-nolint
getDirectoryHandle(name)
getDirectoryHandle(name, options)
```

### Parameter

- `name`
  - : Ein String, der den {{domxref('FileSystemHandle.name')}} des Unterverzeichnisses darstellt, das Sie abrufen möchten.
- `options` {{optional_inline}}

  - : Ein optionales Objekt, das Optionen für das abgerufene Unterverzeichnis enthält. Die Optionen sind wie folgt:

    - `create` {{optional_inline}}
      - : Ein Boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn
        auf `true` gesetzt, wird ein Verzeichnis mit dem angegebenen
        Namen erstellt und zurückgegeben, falls es nicht gefunden wird.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem {{domxref('FileSystemDirectoryHandle')}} aufgelöst wird.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref('PermissionStatus.state')}} für das Handle nicht `'granted'` im `readwrite`-Modus ist, wenn die `create`-Option auf `true` gesetzt ist oder im `read`-Modus, wenn die `create`-Option auf `false` gesetzt ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene Name kein gültiger String ist oder Zeichen enthält, die das native Dateisystem stören würden.
- `TypeMismatchError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der zurückgegebene Eintrag eine Datei und kein Verzeichnis ist.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird oder das Zielverzeichnis nicht existiert und die `create`-Option auf `false` gesetzt ist.

## Beispiele

Das folgende Beispiel gibt ein Verzeichnis-Handle mit dem angegebenen Namen zurück. Wenn das
Verzeichnis nicht existiert, wird es erstellt.

```js
const dirName = "directoryToGetName";

// vorausgesetzt, wir haben ein Verzeichnis-Handle: 'currentDirHandle'
const subDir = currentDirHandle.getDirectoryHandle(dirName, { create: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [Das File System Access API: Vereinfachter Zugriff auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

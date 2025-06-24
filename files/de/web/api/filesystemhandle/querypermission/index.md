---
title: "FileSystemHandle: queryPermission() Methode"
short-title: queryPermission()
slug: Web/API/FileSystemHandle/queryPermission
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`queryPermission()`** Methode der [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) Schnittstelle fragt den aktuellen Berechtigungsstatus des aktuellen Handles ab.

## Syntax

```js-nolint
queryPermission(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das den Berechtigungsmodus spezifiziert, der abgefragt werden soll. Optionen sind wie folgt:
    - `'mode'` {{optional_inline}}
      - : Kann entweder `'read'` oder `'readwrite'` sein.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) aufgelöst wird, welches entweder `'granted'`, `'denied'` oder `'prompt'` ist. Es kann auch mit einer der unten stehenden Ausnahmen abgelehnt werden.

Wenn dieses mit "prompt" aufgelöst wird, muss die Website `requestPermission()` aufrufen, bevor irgendwelche Operationen auf dem Handle durchgeführt werden können. Wenn dieses mit "denied" aufgelöst wird, werden alle Operationen abgelehnt. Normalerweise werden Handles, die von den lokalen Dateisystem-Handle-Fabriken zurückgegeben werden, anfänglich mit "granted" für ihren Lesezustand aufgelöst. Allerdings wird ein Handle, das aus dem IndexedDB abgerufen wird, auch wahrscheinlich mit "prompt" aufgelöst, außer die Berechtigung wird vom Benutzer widerrufen.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `mode` mit einem anderen Wert als `'read'` oder `'readwrite'` spezifiziert wird.

## Beispiele

Die folgende asynchrone Funktion gibt `true` zurück, wenn der Benutzer Lese- oder Lese-/Schreibberechtigungen für das Datei-Handle gewährt hat. Falls nicht, wird die Berechtigung angefordert.

```js
// fileHandle is a FileSystemFileHandle
// withWrite is a boolean set to true if write

async function verifyPermission(fileHandle, withWrite) {
  const opts = {};
  if (withWrite) {
    opts.mode = "readwrite";
  }

  // Check if we already have permission, if so, return true.
  if ((await fileHandle.queryPermission(opts)) === "granted") {
    return true;
  }

  // Request permission to the file, if the user grants permission, return true.
  if ((await fileHandle.requestPermission(opts)) === "granted") {
    return true;
  }

  // The user did not grant permission, return false.
  return false;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

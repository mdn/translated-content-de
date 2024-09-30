---
title: "FileSystemHandle: queryPermission() Methode"
short-title: queryPermission()
slug: Web/API/FileSystemHandle/queryPermission
l10n:
  sourceCommit: 4e8bc4593e38b3902430fa701a6256c95d7bbbdc
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`queryPermission()`**-Methode des [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Interfaces fragt den aktuellen Berechtigungsstatus des vorhandenen Handles ab.

## Syntax

```js-nolint
queryPermission(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das den Berechtigungsmodus angibt, nach dem abgefragt werden soll. Die Optionen sind wie folgt:

    - `'mode'` {{optional_inline}}

      - : Kann entweder `'read'` oder `'readwrite'` sein.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) aufgelöst wird, welcher einer der Werte `'granted'`, `'denied'` oder `'prompt'` ist. Es kann auch mit einer der untenstehenden Ausnahmen abgelehnt werden.

Wenn dies mit "prompt" aufgelöst wird, muss die Website `requestPermission()` aufrufen, bevor irgendwelche Operationen am Handle durchgeführt werden können. Wenn dies mit "denied" aufgelöst wird, werden alle Operationen abgelehnt. Normalerweise werden Handles, die von den lokalen Dateisystem-Handle-Fabriken zurückgegeben werden, anfänglich mit "granted" für ihren Leseberechtigungsstatus aufgelöst. Abgesehen davon, dass der Benutzer die Berechtigung widerruft, wird ein Handle, das von IndexedDB abgerufen wurde, wahrscheinlich auch mit "prompt" aufgelöst.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `mode` mit einem anderen Wert angegeben wird als `'read'` oder `'readwrite'`.

## Beispiele

Die folgende asynchrone Funktion gibt true zurück, wenn dem Nutzer Lese- oder Lese-/Schreibberechtigungen für das Dateihandle erteilt wurden. Die Berechtigung wird angefordert, wenn nicht.

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

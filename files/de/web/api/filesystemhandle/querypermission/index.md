---
title: "FileSystemHandle: queryPermission()-Methode"
short-title: queryPermission()
slug: Web/API/FileSystemHandle/queryPermission
l10n:
  sourceCommit: b88824d7b19a323e623181768ad5dcbe2ee9e84a
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`queryPermission()`**-Methode der [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Schnittstelle überprüft den aktuellen Berechtigungsstatus des aktuellen Handles.

## Syntax

```js-nolint
queryPermission(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das den Berechtigungsmodus festlegt, für den abgefragt werden soll. Die Optionen sind wie folgt:
    - `'mode'` {{optional_inline}}
      - : Kann entweder `'read'`, `'write'` oder `'readwrite'` sein.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) aufgelöst wird, was eines der folgenden sein kann: `'granted'`, `'denied'` oder `'prompt'`. Es kann auch mit einer der unten aufgeführten Ausnahmen abgelehnt werden.

Wenn dieses mit "prompt" aufgelöst wird, muss die Website `requestPermission()` aufrufen, bevor irgendwelche Operationen auf dem Handle durchgeführt werden können. Wenn dieses mit "denied" aufgelöst wird, werden alle Operationen abgelehnt. Normalerweise werden Handles, die von den lokalen Dateisystem-Handle-Fabriken zurückgegeben werden, zunächst mit "granted" für ihren Lesezugriffsstatus aufgelöst. Abgesehen davon, dass der Benutzer die Berechtigung widerruft, wird ein Handle, das aus IndexedDB abgerufen wurde, wahrscheinlich auch mit "prompt" aufgelöst.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `mode` mit einem anderen Wert als `'read'`, `'write'` oder `'readwrite'` angegeben wird.

## Beispiele

Die folgende asynchrone Funktion gibt true zurück, wenn dem Benutzer Lese- oder Lese-/Schreibberechtigungen für das Dateihandle erteilt wurden. Die Berechtigung wird angefordert, falls nicht.

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
- [Das File System Access API: Vereinfachung des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

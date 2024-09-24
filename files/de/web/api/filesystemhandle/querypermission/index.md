---
title: "FileSystemHandle: queryPermission()-Methode"
short-title: queryPermission()
slug: Web/API/FileSystemHandle/queryPermission
l10n:
  sourceCommit: 4e8bc4593e38b3902430fa701a6256c95d7bbbdc
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`queryPermission()`**-Methode des {{domxref("FileSystemHandle")}}-Interfaces fragt den aktuellen Berechtigungsstatus des aktuellen Handles ab.

## Syntax

```js-nolint
queryPermission(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das den Berechtigungsmodus angibt, nach dem gefragt werden soll. Die Optionen sind wie folgt:

    - `'mode'` {{optional_inline}}

      - : Kann entweder `'read'` oder `'readwrite'` sein.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit {{domxref('PermissionStatus.state')}} auflöst, das einer der Werte `'granted'`, `'denied'` oder `'prompt'` ist. Es kann auch mit einer der unten aufgeführten Ausnahmen abgelehnt werden.

Wenn dies mit „prompt“ aufgelöst wird, muss die Website `requestPermission()` aufrufen, bevor irgendwelche Operationen auf dem Handle durchgeführt werden können. Wenn dies mit „denied“ aufgelöst wird, werden alle Operationen abgelehnt. Normalerweise werden Handles, die von den lokalen Dateisystem-Handle-Fabriken zurückgegeben werden, anfangs mit „granted“ für ihren Leseberechtigungsstatus aufgelöst. Abgesehen davon, dass der Benutzer die Berechtigung widerruft, wird ein Handle, das aus IndexedDB abgerufen wird, wahrscheinlich auch mit „prompt“ aufgelöst.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `mode` mit einem anderen Wert als `'read'` oder `'readwrite'` angegeben wird.

## Beispiele

Die folgende asynchrone Funktion gibt true zurück, wenn der Benutzer Lese- oder Lese-/Schreibberechtigungen für das Dateihandle erteilt hat. Wenn nicht, wird die Berechtigung angefordert.

```js
// fileHandle ist ein FileSystemFileHandle
// withWrite ist ein boolescher Wert, der auf true gesetzt wird, wenn geschrieben werden soll

async function verifyPermission(fileHandle, withWrite) {
  const opts = {};
  if (withWrite) {
    opts.mode = "readwrite";
  }

  // Prüfen, ob wir bereits die Berechtigung haben, wenn ja, true zurückgeben.
  if ((await fileHandle.queryPermission(opts)) === "granted") {
    return true;
  }

  // Erlaubnis für die Datei anfordern, wenn der Benutzer die Erlaubnis erteilt, true zurückgeben.
  if ((await fileHandle.requestPermission(opts)) === "granted") {
    return true;
  }

  // Der Benutzer hat keine Erlaubnis erteilt, false zurückgeben.
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

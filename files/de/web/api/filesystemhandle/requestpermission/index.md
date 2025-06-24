---
title: "FileSystemHandle: requestPermission() Methode"
short-title: requestPermission()
slug: Web/API/FileSystemHandle/requestPermission
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`requestPermission()`**-Methode der [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Schnittstelle fordert Lese- oder Schreib-Lese-Berechtigungen für das Dateihandle an.

## Syntax

```js-nolint
requestPermission(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das den Berechtigungsmodus angibt, der abgefragt werden soll. Optionen sind wie folgt:
    - `'mode'` {{optional_inline}}
      - : Kann entweder `'read'` oder `'readwrite'` sein.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) aufgelöst wird, welches eines von `'granted'`, `'denied'` oder `'prompt'` ist. Es kann auch mit einer der unten stehenden Ausnahmen abgelehnt werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn kein Parameter angegeben ist oder der `mode` nicht `'read'` oder `'readwrite'` ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die Methode wurde in einem Kontext aufgerufen, der nicht [same-origin](/de/docs/Web/Security/Same-origin_policy) mit dem Top-Level-Kontext ist (z. B. ein Cross-Origin-iFrame).
    - Es gab keine vorübergehende Benutzeraktivierung wie einen Tastendruck. Dies schließt ein, wenn das Handle in einem Nicht-Window-Kontext ist, der keine Benutzeraktivierung konsumieren kann, wie z. B. ein Worker.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Die folgende asynchrone Funktion fordert Berechtigungen an, falls sie nicht bereits erteilt wurden.

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

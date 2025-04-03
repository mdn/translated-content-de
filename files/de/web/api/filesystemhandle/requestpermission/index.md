---
title: "FileSystemHandle: requestPermission() Methode"
short-title: requestPermission()
slug: Web/API/FileSystemHandle/requestPermission
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`requestPermission()`** Methode der [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) Schnittstelle fordert Lese- oder Lese-/Schreibberechtigungen für den Datei-Handle an.

## Syntax

```js-nolint
requestPermission(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das den Abfragemodus für die Berechtigung angibt. Optionen sind wie folgt:

    - `'mode'` {{optional_inline}}

      - : Kann entweder `'read'` oder `'readwrite'` sein.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) aufgelöst wird, was einer der Werte `'granted'`, `'denied'` oder `'prompt'` ist. Es kann auch mit einer der unten aufgeführten Ausnahmen abgelehnt werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn kein Parameter angegeben ist oder der `mode` nicht `'read'` oder `'readwrite'` ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die Methode wurde in einem Kontext aufgerufen, der nicht [same-origin](/de/docs/Web/Security/Same-origin_policy) mit dem Top-Level-Kontext ist (z.B. ein Cross-Origin-IFrame).
    - Es gab keine transiente Benutzeraktivierung wie das Drücken einer Taste. Dies umfasst auch, wenn der Handle sich in einem nicht-Fenster-Kontext befindet, der keine Benutzeraktivierung konsumieren kann, wie etwa ein Worker.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit dieses Feature funktioniert.

## Beispiele

Die folgende asynchrone Funktion fordert Berechtigungen an, wenn diese nicht bereits erteilt wurden.

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
- [Die File System Access API: Vereinfachter Zugriff auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

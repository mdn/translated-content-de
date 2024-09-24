---
title: "FileSystemHandle: requestPermission()-Methode"
short-title: requestPermission()
slug: Web/API/FileSystemHandle/requestPermission
l10n:
  sourceCommit: 6c26f60ea9ab26e591cc59551cd664c07fcf213b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`requestPermission()`**-Methode der
{{domxref("FileSystemHandle")}}-Schnittstelle erfragt Lese- oder Lese-/Schreibberechtigungen für den Datei-Handle.

## Syntax

```js-nolint
requestPermission(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das den Abfragemodus der Berechtigung angibt. Die Optionen sind wie folgt:

    - `'mode'` {{optional_inline}}

      - : Kann entweder `'read'` oder `'readwrite'` sein.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{domxref('PermissionStatus.state')}} aufgelöst wird und entweder `'granted'`, `'denied'` oder `'prompt'` ist. Es kann auch mit einer der unten aufgeführten Ausnahmen abgelehnt werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn kein Parameter angegeben ist oder der `mode` nicht `'read'` oder `'readwrite'` ist.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die Methode wurde in einem Kontext aufgerufen, der nicht [same-origin](/de/docs/Web/Security/Same-origin_policy) mit dem Top-Level-Kontext ist (d. h. ein Cross-Origin-Iframe).
    - Es lag keine transiente Benutzeraktivierung wie ein Tastendruck vor. Dies umfasst Situationen, in denen sich der Handle in einem Nicht-Window-Kontext befindet, der keine Benutzeraktivierung nutzen kann, wie z. B. ein Worker.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Die folgende asynchrone Funktion fordert Berechtigungen an, wenn sie nicht bereits erteilt wurden.

```js
// fileHandle is a FileSystemFileHandle
// withWrite ist ein Boolean, der auf true gesetzt wird, wenn Schreibrechte benötigt werden

async function verifyPermission(fileHandle, withWrite) {
  const opts = {};
  if (withWrite) {
    opts.mode = "readwrite";
  }

  // Prüfen, ob bereits eine Berechtigung vorliegt, wenn ja, gibt true zurück.
  if ((await fileHandle.queryPermission(opts)) === "granted") {
    return true;
  }

  // Fordert Berechtigung für die Datei an, wenn der Benutzer die Berechtigung erteilt, gibt true zurück.
  if ((await fileHandle.requestPermission(opts)) === "granted") {
    return true;
  }

  // Der Benutzer hat die Berechtigung nicht erteilt, gibt false zurück.
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

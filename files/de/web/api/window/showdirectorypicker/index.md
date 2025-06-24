---
title: "Window: showDirectoryPicker() Methode"
short-title: showDirectoryPicker()
slug: Web/API/Window/showDirectoryPicker
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("File System API")}}{{Securecontext_Header}}{{SeeCompatTable}}

Die **`showDirectoryPicker()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle zeigt einen Verzeichnisauswahldialog an, der es dem Benutzer ermöglicht, ein Verzeichnis auszuwählen.

## Syntax

```js-nolint
showDirectoryPicker()
showDirectoryPicker(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen enthält, wie folgt:
    - `id` {{optional_inline}}
      - : Durch die Angabe einer ID kann der Browser verschiedene Verzeichnisse für verschiedene IDs merken. Wenn dieselbe ID für einen anderen Auswahldialog verwendet wird, öffnet sich der Dialog im selben Verzeichnis.
    - `mode` {{optional_inline}}
      - : Ein String, der standardmäßig auf `"read"` für schreibgeschützten Zugriff oder `"readwrite"` für Lese- und Schreibzugriff auf das Verzeichnis eingestellt ist.
    - `startIn` {{optional_inline}}
      - : Ein [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"`, oder `"videos"`), in dem der Dialog geöffnet werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Fulfillment-Handler ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer das Dialogfeld schließt, ohne eine Auswahl zu treffen, oder wenn der Benutzeragent das ausgewählte Verzeichnis als zu sensibel oder gefährlich erachtet, oder wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für das ausgewählte Verzeichnis nicht `"granted"` im angegebenen `mode` ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Richtlinie](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder nicht durch eine Benutzerinteraktion wie einen Tastendruck ausgeführt wurde.

## Sicherheit

[Flüchtige Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Diese asynchrone Funktion zeigt einen Verzeichnisauswahldialog an und gibt ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) zurück, sobald eine Auswahl getroffen wurde.

```js
async function getDir() {
  const dirHandle = await window.showDirectoryPicker();

  // run code for dirHandle
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

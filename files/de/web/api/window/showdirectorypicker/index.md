---
title: "Window: showDirectoryPicker() Methode"
short-title: showDirectoryPicker()
slug: Web/API/Window/showDirectoryPicker
l10n:
  sourceCommit: 8f93582ca9008d55db258a017552be486e372382
---

{{APIRef("File System API")}}{{Securecontext_Header}}{{SeeCompatTable}}

Die **`showDirectoryPicker()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle öffnet ein Verzeichnis-Auswahlfenster, das es dem Benutzer ermöglicht, ein Verzeichnis auszuwählen.

## Syntax

```js-nolint
showDirectoryPicker()
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit Optionen, die wie folgt definiert sind:

    - `id` {{optional_inline}}
      - : Durch die Angabe einer ID kann der Browser unterschiedliche Verzeichnisse für unterschiedliche IDs speichern. Wenn dieselbe ID für einen anderen Picker verwendet wird, öffnet sich der Picker im selben Verzeichnis.
    - `mode` {{optional_inline}}
      - : Ein String, der standardmäßig auf `"read"` für nur Lesezugriff oder `"readwrite"` für Lese- und Schreibzugriff auf das Verzeichnis gesetzt ist.
    - `startIn` {{optional_inline}}
      - : Ein [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"`, oder `"videos"`) zum Öffnen des Dialogs in diesem Verzeichnis.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Fulfillment-Handler ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer die Aufforderung schließt, ohne eine Auswahl zu treffen, oder wenn der Benutzer-Agent das ausgewählte Verzeichnis als zu sensibel oder gefährlich einstuft, oder wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für das ausgewählte Verzeichnis im angegebenen `mode` nicht `"granted"` ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder er nicht durch eine Benutzerinteraktion wie das Drücken eines Buttons initiiert wurde.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Diese asynchrone Funktion zeigt einen Verzeichnis-Auswahl-Dialog und gibt ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) zurück, sobald ein Verzeichnis ausgewählt wurde.

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

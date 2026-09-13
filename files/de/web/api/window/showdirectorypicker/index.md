---
title: "Window: Methode showDirectoryPicker()"
short-title: showDirectoryPicker()
slug: Web/API/Window/showDirectoryPicker
l10n:
  sourceCommit: 381dfaf4d7f555e847b0af726a93ce48cde15915
---

{{APIRef("File System API")}}{{Securecontext_Header}}{{SeeCompatTable}}

Die Methode **`showDirectoryPicker()`** der Schnittstelle
[`Window`](/de/docs/Web/API/Window) zeigt einen Verzeichnisauswahldialog an, der es dem Benutzer ermöglicht, ein Verzeichnis auszuwählen.

## Syntax

```js-nolint
showDirectoryPicker()
showDirectoryPicker(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit Optionen, die wie folgt lauten:
    - `id` {{optional_inline}}
      - : Durch die Angabe einer ID kann der Browser verschiedene Verzeichnisse für unterschiedliche
        IDs speichern. Wenn dieselbe ID für einen anderen Auswahldialog verwendet wird, wird dieser im selben
        Verzeichnis geöffnet.
    - `mode` {{optional_inline}}
      - : Ein String, der standardmäßig `"read"` für schreibgeschützten Zugriff oder `"readwrite"` für Lese- und
        Schreibzugriff auf das Verzeichnis verwendet.
    - `startIn` {{optional_inline}}
      - : Ein [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`,
        `"downloads"`, `"music"`, `"pictures"` oder `"videos"`), in dem der Dialog geöffnet wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungs-Handler ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer die Eingabeaufforderung schließt, ohne eine Auswahl zu treffen,
    oder wenn der User-Agent das ausgewählte Verzeichnis als zu sensibel oder gefährlich einstuft,
    oder wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für das ausgewählte Verzeichnis im angegebenen `mode` nicht `"granted"` ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) blockiert wurde oder nicht durch eine Benutzerinteraktion wie das Drücken einer Schaltfläche aufgerufen wurde.

## Sicherheit

Eine [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Damit diese Funktion funktioniert, muss der Benutzer mit der Seite oder einem UI-Element interagieren.

## Beispiele

Diese asynchrone Funktion zeigt einen Verzeichnisauswahldialog an und gibt nach der Auswahl einen
[`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) zurück.

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
- [The File System Access API: Vereinfachter Zugriff auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

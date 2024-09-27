---
title: "Fenster: showDirectoryPicker() Methode"
short-title: showDirectoryPicker()
slug: Web/API/Window/showDirectoryPicker
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("File System API")}}{{Securecontext_Header}}{{SeeCompatTable}}

Die **`showDirectoryPicker()`** Methode des
[`Window`](/de/docs/Web/API/Window)-Interfaces zeigt einen Verzeichnisauswahldialog an, mit dem der Benutzer ein Verzeichnis auswählen kann.

## Syntax

```js-nolint
showDirectoryPicker()
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen enthält, wie folgt:

    - `id` {{optional_inline}}
      - : Durch die Angabe einer ID kann der Browser verschiedene Verzeichnisse für verschiedene
        IDs speichern. Wenn die gleiche ID für einen anderen Picker verwendet wird, öffnet sich der Picker im gleichen
        Verzeichnis.
    - `mode` {{optional_inline}}
      - : Ein String, der standardmäßig auf `"read"` für schreibgeschützten Zugriff oder `"readwrite"` für Lese- und Schreibzugriff auf das Verzeichnis eingestellt ist.
    - `startIn` {{optional_inline}}
      - : Ein `FileSystemHandle` oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`,
        `"downloads"`, `"music"`, `"pictures"`, oder `"videos"`) in dem der Dialog geöffnet werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Fulfillment-Handler ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer den Dialog abbricht, ohne eine Auswahl zu treffen,
    oder wenn der Benutzeragent das ausgewählte Verzeichnis als zu sensibel oder gefährlich einstuft,
    oder wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für das ausgewählte Verzeichnis nicht `"granted"` im angegebenen `mode` ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder er nicht durch eine Benutzerinteraktion wie das Drücken eines Buttons erfolgte.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Diese asynchrone Funktion zeigt einen Verzeichnisauswahldialog an und gibt ein
[`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) zurück, sobald ein Verzeichnis ausgewählt wurde.

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

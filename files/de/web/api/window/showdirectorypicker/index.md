---
title: "Window: showDirectoryPicker() Methode"
short-title: showDirectoryPicker()
slug: Web/API/Window/showDirectoryPicker
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("File System API")}}{{Securecontext_Header}}{{SeeCompatTable}}

Die **`showDirectoryPicker()`** Methode des
[`Window`](/de/docs/Web/API/Window)-Interfaces zeigt einen Verzeichnis-Auswahldialog, der es dem Benutzer erlaubt, ein Verzeichnis auszuwählen.

## Syntax

```js-nolint
showDirectoryPicker()
showDirectoryPicker(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen enthält, die wie folgt sind:
    - `id` {{optional_inline}}
      - : Durch das Angeben einer ID kann sich der Browser unterschiedliche Verzeichnisse für verschiedene IDs merken. Wenn dieselbe ID für einen anderen Auswahldialog verwendet wird, öffnet sich der Dialog im selben Verzeichnis.
    - `mode` {{optional_inline}}
      - : Ein String, der standardmäßig auf `"read"` für Lesezugriff oder `"readwrite"` für Lese- und Schreibzugriff auf das Verzeichnis gesetzt ist.
    - `startIn` {{optional_inline}}
      - : Ein [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"` oder `"videos"`), in dem der Dialog geöffnet werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungs-Handler ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt empfängt.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer den Dialog ohne Auswahl schließt, oder wenn der Benutzeragent das ausgewählte Verzeichnis als zu sensibel oder gefährlich betrachtet, oder wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für das ausgewählte Verzeichnis nicht `"granted"` im angegebenen `mode` ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) blockiert wurde oder wenn er nicht über eine Benutzerinteraktion wie einen Tastendruck erfolgt ist.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Diese asynchrone Funktion zeigt einen Verzeichnis-Auswahldialog und gibt ein
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

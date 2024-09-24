---
title: "Fenster: showDirectoryPicker()-Methode"
short-title: showDirectoryPicker()
slug: Web/API/Window/showDirectoryPicker
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("File System API")}}{{Securecontext_Header}}{{SeeCompatTable}}

Die **`showDirectoryPicker()`**-Methode der
{{domxref("Window")}}-Schnittstelle zeigt einen Verzeichnis-Auswahldialog an, der es dem Benutzer ermöglicht,
ein Verzeichnis auszuwählen.

## Syntax

```js-nolint
showDirectoryPicker()
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen enthält, die wie folgt sind:

    - `id` {{optional_inline}}
      - : Durch Angabe einer ID kann der Browser verschiedene Verzeichnisse für
        verschiedene IDs speichern. Wenn dieselbe ID für einen anderen Dialog verwendet wird,
        öffnet sich der Dialog im selben Verzeichnis.
    - `mode` {{optional_inline}}
      - : Ein String, der standardmäßig auf `"read"` für schreibgeschützten Zugriff oder
        `"readwrite"` für Lese- und Schreibzugriff auf das Verzeichnis gesetzt ist.
    - `startIn` {{optional_inline}}
      - : Ein `FileSystemHandle` oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`,
        `"downloads"`, `"music"`, `"pictures"` oder `"videos"`) in dem der Dialog geöffnet wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungs-Handler ein {{domxref('FileSystemDirectoryHandle')}}-Objekt erhält.

### Ausnahmen

- `AbortError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Benutzer die Eingabeaufforderung ohne Auswahl schließt,
    oder wenn der Benutzer-Agent das ausgewählte Verzeichnis als zu sensibel oder gefährlich einstuft,
    oder wenn der {{domxref('PermissionStatus.state')}} für das ausgewählte Verzeichnis im angegebenen `modus` nicht `"granted"` ist.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder nicht durch eine Benutzerinteraktion wie das Drücken einer Schaltfläche erfolgt ist.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Diese asynchrone Funktion zeigt einen Verzeichnis-Auswahldialog an und gibt ein
{{domxref('FileSystemDirectoryHandle')}} zurück, sobald ein Verzeichnis ausgewählt wurde.

```js
async function getDir() {
  const dirHandle = await window.showDirectoryPicker();

  // code für dirHandle ausführen
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

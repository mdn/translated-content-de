---
title: "Window: showDirectoryPicker() Methode"
short-title: showDirectoryPicker()
slug: Web/API/Window/showDirectoryPicker
l10n:
  sourceCommit: b58a5b506fdc086f442104ccdee547b9df0cb6a7
---

{{APIRef("File System API")}}{{Securecontext_Header}}{{SeeCompatTable}}

Die **`showDirectoryPicker()`**-Methode des
[`Window`](/de/docs/Web/API/Window)-Interfaces zeigt einen Ordnerauswahldialog an, der es dem Benutzer ermöglicht, ein Verzeichnis auszuwählen.

## Syntax

```js-nolint
showDirectoryPicker()
showDirectoryPicker(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen enthält, die wie folgt sind:

    - `id` {{optional_inline}}
      - : Durch Angabe einer ID kann der Browser unterschiedliche Verzeichnisse für verschiedene IDs speichern. Wird dieselbe ID für einen anderen Picker verwendet, öffnet sich dieser im gleichen Verzeichnis.
    - `mode` {{optional_inline}}
      - : Ein String, der standardmäßig auf `"read"` für Nur-Lese-Zugriff oder `"readwrite"` für Lese- und Schreibzugriff auf das Verzeichnis gesetzt ist.
    - `startIn` {{optional_inline}}
      - : Ein [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"`, oder `"videos"`), um den Dialog in diesem Verzeichnis zu öffnen.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Übernahmebehandler ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer die Eingabeaufforderung ohne Auswahl schließt, oder wenn der User-Agent das ausgewählte Verzeichnis als zu sensibel oder gefährlich einstuft, oder wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für das ausgewählte Verzeichnis nicht `"granted"` im angegebenen `mode` ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder nicht durch eine Benutzerinteraktion wie einen Tastendruck aufgerufen wurde.

## Sicherheit

[Transient user activation](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Diese asynchrone Funktion zeigt einen Ordnerauswahldialog und gibt ein
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
- [Das File System Access API: Vereinfachung des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

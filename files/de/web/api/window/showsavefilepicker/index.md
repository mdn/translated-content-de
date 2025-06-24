---
title: "Window: showSaveFilePicker() Methode"
short-title: showSaveFilePicker()
slug: Web/API/Window/showSaveFilePicker
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`showSaveFilePicker()`** Methode der
[`Window`](/de/docs/Web/API/Window) Schnittstelle zeigt einen Dateiauswahldialog, der es einem Benutzer ermöglicht, eine Datei zu speichern.
Entweder durch Auswählen einer vorhandenen Datei oder durch Eingabe eines Namens für eine neue Datei.

## Syntax

```js-nolint
showSaveFilePicker()
showSaveFilePicker(options)
```

### Parameter

- `options` {{Optional_Inline}}
  - : Ein Objekt, das Optionen enthält, die wie folgt sind:
    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf
        `false` gesetzt ist. Standardmäßig sollte der Auswahldialog eine Option enthalten, keine Dateitypfilter anzuwenden (veranlasst durch die unten angegebene Typ-Option). Wenn diese Option auf `true` gesetzt ist, steht diese Option _nicht_ zur Verfügung.
    - `id` {{Optional_Inline}}
      - : Durch Spezifizieren einer ID kann der Browser sich unterschiedliche Verzeichnisse für verschiedene
        IDs merken. Wenn dieselbe ID für einen anderen Picker verwendet wird, öffnet sich der Picker im selben
        Verzeichnis.
    - `startIn` {{Optional_Inline}}
      - : Ein [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`,
        `"downloads"`, `"music"`, `"pictures"`, oder `"videos"`) in dem der Dialog geöffnet wird.
    - `suggestedName` {{Optional_Inline}}
      - : Eine {{jsxref('String')}}. Der vorgeschlagene Dateiname.
    - `types` {{Optional_Inline}}
      - : Ein {{jsxref('Array')}} der erlaubten Dateitypen zum Speichern. Jedes
        Element ist ein Objekt mit den folgenden Optionen:
        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie von erlaubten Dateitypen. Standardmäßig ein leerer String.
        - `accept`
          - : Ein {{jsxref('Object')}} mit den Schlüsseln für den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) und den Werten, einem {{jsxref('Array')}} von Dateierweiterungen (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}} dessen Erfüllungs-Handler ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) Objekt erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer den Dateiauswahldialog schließt, ohne eine Datei auszuwählen oder einzugeben, oder wenn der Benutzeragent eine ausgewählte Datei als zu sensibel oder gefährlich betrachtet.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder er nicht durch eine Benutzerinteraktion wie einen Button-Druck vorgenommen wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die akzeptierten Typen nicht verarbeitet werden können, was passieren kann, wenn:
    - Ein beliebiger Schlüssel-String der `accept` Optionen eines Elements in den `types` Optionen keinen gültigen MIME-Typ parsen kann.
    - Ein beliebiger Wert-String der `accept` Optionen eines Elements in den `types` Optionen ungültig ist, z.B. wenn er nicht mit `.` beginnt und mit `.` endet oder wenn er ungültige Codepunkte enthält und seine Länge mehr als 16 beträgt.
    - Die `types` Optionen leer sind und die `excludeAcceptAllOption` Optionen `true` ist.

## Sicherheit

[Übergangsaktivierung des Benutzers](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Die folgende Funktion zeigt einen Dateiauswahldialog, in dem Textdateien zur Auswahl hervorgehoben sind.

```js
async function getNewFileHandle() {
  const opts = {
    types: [
      {
        description: "Text file",
        accept: { "text/plain": [".txt"] },
      },
    ],
  };
  return await window.showSaveFilePicker(opts);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

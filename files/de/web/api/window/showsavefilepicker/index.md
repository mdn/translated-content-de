---
title: "Window: showSaveFilePicker() Methode"
short-title: showSaveFilePicker()
slug: Web/API/Window/showSaveFilePicker
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`showSaveFilePicker()`** Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle zeigt einen Dateiauswahldialog, der es einem Benutzer ermöglicht, eine Datei zu speichern, entweder durch Auswahl einer vorhandenen Datei oder durch Eingabe eines Namens für eine neue Datei.

## Syntax

```js-nolint
showSaveFilePicker()
showSaveFilePicker(options)
```

### Parameter

- `options` {{Optional_Inline}}
  - : Ein Objekt, das Optionen enthält, die wie folgt sind:
    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein Boolescher Wert, der standardmäßig auf `false` gesetzt ist. Standardmäßig sollte der Picker eine Option enthalten, um keine Dateitypenfilter anzuwenden (ausgelöst durch die untenstehende Typoption). Wenn diese Option auf `true` gesetzt wird, ist diese Option _nicht_ verfügbar.
    - `id` {{Optional_Inline}}
      - : Durch die Angabe einer ID kann sich der Browser verschiedene Verzeichnisse für verschiedene IDs merken. Wenn dieselbe ID für einen anderen Picker verwendet wird, öffnet sich der Picker im selben Verzeichnis.
    - `startIn` {{Optional_Inline}}
      - : Ein [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"` oder `"videos"`) um den Dialog darin zu öffnen.
    - `suggestedName` {{Optional_Inline}}
      - : Ein {{jsxref('String')}}. Der vorgeschlagene Dateiname.
    - `types` {{Optional_Inline}}
      - : Ein {{jsxref('Array')}} der erlaubten Dateitypen zum Speichern. Jedes Element ist ein Objekt mit den folgenden Optionen:
        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie der erlaubten Dateitypen. Standardwert ist ein leerer String.
        - `accept`
          - : Ein {{jsxref('Object')}} mit den Schlüsseln, die auf den [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) eingestellt sind, und den Werten, die ein {{jsxref('Array')}} von Dateierweiterungen sind (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungshandler ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer den Dateiauswahldialog ohne Auswahl oder Eingabe einer Datei schließt oder wenn der Benutzeragent eine ausgewählte Datei als zu sensibel oder gefährlich einstuft.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) blockiert wurde oder wenn er nicht durch eine Benutzerinteraktion wie einen Tastendruck ausgelöst wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn Akzeptanztypen nicht verarbeitet werden können, was passieren kann, wenn:
    - Ein Schlüsselstring der `accept`-Optionen eines Elements in den `types`-Optionen keinen gültigen MIME-Typ parsen kann.
    - Ein Wertstring der `accept`-Optionen eines Elements in den `types`-Optionen ungültig ist, zum Beispiel, wenn er nicht mit `.` beginnt, mit `.` endet oder ungültige Codepunkte enthält und seine Länge mehr als 16 ist.
    - Die `types`-Optionen leer sind und die `excludeAcceptAllOption`-Optionen `true` sind.

## Sicherheit

Eine [vorübergehende Benutzerauslösung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Die folgende Funktion zeigt einen Dateiauswahldialog, wobei Textdateien zur Auswahl hervorgehoben sind.

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

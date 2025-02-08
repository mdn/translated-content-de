---
title: "Window: showSaveFilePicker() Methode"
short-title: showSaveFilePicker()
slug: Web/API/Window/showSaveFilePicker
l10n:
  sourceCommit: 8f93582ca9008d55db258a017552be486e372382
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`showSaveFilePicker()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle zeigt einen Dateiauswahldialog an, der es einem Nutzer ermöglicht, eine Datei zu speichern. Dies kann durch die Auswahl einer vorhandenen Datei oder die Eingabe eines Namens für eine neue Datei erfolgen.

## Syntax

```js-nolint
showSaveFilePicker()
```

### Parameter

- `options` {{Optional_Inline}}

  - : Ein Objekt, das Optionen enthält, die wie folgt aussehen:

    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Standardmäßig sollte der Auswahldialog eine Option enthalten, um keine Dateityp-Filter anzuwenden (initiiert durch die unten stehende Typoption). Wenn diese Option auf `true` gesetzt ist, ist diese Option _nicht_ verfügbar.
    - `id` {{Optional_Inline}}
      - : Durch die Angabe einer ID kann der Browser für verschiedene IDs unterschiedliche Verzeichnisse speichern. Wenn dieselbe ID für einen anderen Auswahldialog verwendet wird, öffnet sich der Dialog im gleichen Verzeichnis.
    - `startIn` {{Optional_Inline}}
      - : Ein [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"` oder `"videos"`) zum Öffnen des Dialogs in diesem Verzeichnis.
    - `suggestedName` {{Optional_Inline}}
      - : Ein {{jsxref('String')}}. Der vorgeschlagene Dateiname.
    - `types` {{Optional_Inline}}

      - : Ein {{jsxref('Array')}} von zulässigen Dateitypen zum Speichern. Jedes Element ist ein Objekt mit den folgenden Optionen:

        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie der erlaubten Dateitypen. Standardmäßig ist dieser Wert leer.
        - `accept`
          - : Ein {{jsxref('Object')}} mit den Schlüsseln, die auf den [MIME-Typ](/de/docs/Web/HTTP/MIME_types/Common_types) gesetzt sind, und den Werten als {{jsxref('Array')}} von Dateierweiterungen (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungs-Handler ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Nutzer den Dateiauswahldialog schließt, ohne eine Datei auszuwählen oder einzugeben, oder wenn der Benutzeragent ausgewählte Dateien als zu sensibel oder gefährlich erachtet.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder er nicht durch eine Nutzerinteraktion wie das Drücken eines Buttons initiiert wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn Akzeptanztypen nicht verarbeitet werden können. Dies kann unter folgenden Umständen passieren:
    - Jeder Schlüsselstring der `accept`-Optionen eines Elements in den `types`-Optionen kann keinen gültigen MIME-Typ parsen.
    - Jeder Werte-String in den `accept`-Optionen eines Elements in den `types`-Optionen ist ungültig, z. B., wenn er nicht mit `.` beginnt und mit `.` endet oder wenn er ungültige Zeichen enthält und seine Länge mehr als 16 beträgt.
    - Die `types`-Optionen sind leer und die `excludeAcceptAllOption`-Option ist auf `true` gesetzt.

## Sicherheit

[Vorübergehende Nutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Nutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Die folgende Funktion zeigt einen Dateiauswahldialog an, bei dem Textdateien zur Auswahl hervorgehoben werden.

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

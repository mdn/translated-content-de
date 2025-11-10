---
title: "Window: showOpenFilePicker() Methode"
short-title: showOpenFilePicker()
slug: Web/API/Window/showOpenFilePicker
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`showOpenFilePicker()`** Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle zeigt einen Dateiauswahldialog an, der es einem Benutzer ermöglicht, eine oder mehrere Dateien auszuwählen und gibt ein Handle für die Datei(en) zurück.

## Syntax

```js-nolint
showOpenFilePicker()
showOpenFilePicker(options)
```

### Parameter

- `options` {{Optional_Inline}}
  - : Ein Objekt, das Optionen enthält, die wie folgt sind:
    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Standardmäßig sollte der Picker eine Option beinhalten, um keine Dateitypfilter anzuwenden (ausgelöst mit der unten genannten Typ-Option). Wenn diese Option auf `true` gesetzt wird, ist diese Option _nicht_ verfügbar.
    - `id` {{Optional_Inline}}
      - : Durch die Angabe einer ID kann der Browser verschiedene Verzeichnisse für unterschiedliche IDs merken. Wenn dieselbe ID für einen anderen Picker verwendet wird, öffnet sich der Picker im gleichen Verzeichnis.
    - `multiple` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn auf `true` gesetzt, können mehrere Dateien ausgewählt werden.
    - `startIn` {{Optional_Inline}}
      - : Ein [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"` oder `"videos"`) in dem der Dialog geöffnet werden soll.
    - `types` {{Optional_Inline}}
      - : Ein {{jsxref('Array')}} von erlaubten Dateitypen zur Auswahl. Jedes Element ist ein Objekt mit den folgenden Optionen:
        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie der erlaubten Dateitypen. Standardwert ist ein leerer String.
        - `accept`
          - : Ein {{jsxref('Object')}} mit den Schlüsseln, die auf den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) gesetzt sind, und den Werten als {{jsxref('Array')}} von Dateiendungen (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Fulfillment-Handler ein {{jsxref('Array')}} von [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekten erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer die Eingabeaufforderung ohne Auswahl abbricht oder wenn der User-Agent feststellt, dass ausgewählte Dateien zu sensibel oder gefährlich sind.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder nicht durch eine Benutzerinteraktion wie das Drücken eines Buttons erfolgt ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn Akzeptanztypen nicht verarbeitet werden können, was passieren kann, wenn:
    - Ein Schlüsselstring der `accept`-Optionen eines Elements in den `types`-Optionen keinen gültigen MIME-Typ parsen kann.
    - Ein Wertstring der `accept`-Optionen eines Elements in den `types`-Optionen ungültig ist, zum Beispiel, wenn er nicht mit `.` beginnt und mit `.` endet oder wenn er ungültige Codepunkte enthält und seine Länge mehr als 16 beträgt.
    - Die `types`-Optionen leer sind und die `excludeAcceptAllOption`-Optionen `true` sind.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Hier setzen wir das Optionsobjekt für den Aufruf der Methode. Wir erlauben die Auswahl von Bilddateitypen, ohne Option, alle Dateitypen zuzulassen oder mehrere Dateien auszuwählen.

```js
const pickerOpts = {
  types: [
    {
      description: "Images",
      accept: {
        "image/*": [".png", ".gif", ".jpeg", ".jpg"],
      },
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false,
};
```

Als Nächstes können wir eine asynchrone Funktion erstellen, die den Dateiauswahldialog anzeigt und die ausgewählte Datei zurückgibt.

```js
// create a reference for our file handle
let fileHandle;

async function getFile() {
  // open file picker, destructure the one element returned array
  [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // run code with our fileHandle
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

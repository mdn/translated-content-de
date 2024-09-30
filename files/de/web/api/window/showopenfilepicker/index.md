---
title: "Window: showOpenFilePicker() Methode"
short-title: showOpenFilePicker()
slug: Web/API/Window/showOpenFilePicker
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`showOpenFilePicker()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle zeigt einen Dateiauswahldialog an, der es einem Benutzer ermöglicht, eine Datei oder mehrere Dateien auszuwählen, und gibt einen Handle für die Datei(en) zurück.

## Syntax

```js-nolint
showOpenFilePicker()
```

### Parameter

- `options` {{Optional_Inline}}

  - : Ein Objekt, das Optionen enthält, die wie folgt sind:

    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Standardmäßig sollte der Picker eine Option beinhalten, um keine Dateityp-Filter anzuwenden (eingeleitet mit der Typ-Option unten). Wenn diese Option auf `true` gesetzt ist, ist diese Option _nicht_ verfügbar.
    - `id` {{Optional_Inline}}
      - : Durch die Angabe einer ID kann sich der Browser verschiedene Verzeichnisse für verschiedene IDs merken. Wenn dieselbe ID für einen anderen Picker verwendet wird, öffnet sich der Picker im gleichen Verzeichnis.
    - `multiple` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn auf `true` gesetzt, können mehrere Dateien ausgewählt werden.
    - `startIn` {{Optional_Inline}}
      - : Ein `FileSystemHandle` oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"` oder `"videos"`), in dem der Dialog geöffnet wird.
    - `types` {{Optional_Inline}}

      - : Ein {{jsxref('Array')}} der zulässigen Dateitypen zur Auswahl. Jedes Element ist ein Objekt mit den folgenden Optionen:

        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie der zulässigen Dateitypen. Standardmäßig ein leerer String.
        - `accept`
          - : Ein {{jsxref('Object')}} mit den Schlüsseln, die auf den [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) gesetzt sind, und den Werten, einer {{jsxref('Array')}} von Dateierweiterungen (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungshandler ein {{jsxref('Array')}} von [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekten erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer die Eingabeaufforderung verwirft, ohne eine Auswahl zu treffen, oder wenn der User-Agent ausgewählte Dateien als zu sensibel oder gefährlich erachtet.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder nicht durch eine Benutzerinteraktion wie das Drücken einer Schaltfläche erfolgte.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn akzeptierte Typen nicht verarbeitet werden können, was passieren kann, wenn:
    - Ein beliebiger Schlüsselstring der `accept`-Optionen eines Elements in den `types`-Optionen keinen gültigen MIME-Typ parsen kann.
    - Ein beliebiger Wertstring der `accept`-Optionen eines Elements in den `types`-Optionen ungültig ist, zum Beispiel wenn er nicht mit `.` beginnt und wenn er mit `.` endet oder ungültige Codepunkte enthält und seine Länge mehr als 16 beträgt.
    - Die `types`-Optionen leer sind und die `excludeAcceptAllOption`-Optionen `true` sind.

## Sicherheit

Eine [transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Hier legen wir das Optionsobjekt fest, das in die Methode übergeben wird. Wir erlauben eine Auswahl von Bilddateitypen, ohne die Option, alle Dateitypen oder mehrere Dateien auszuwählen.

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

Als nächstes können wir eine asynchrone Funktion erstellen, die den Datei-Picker anzeigt und die ausgewählte Datei zurückgibt.

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
- [Der File System Access API: Vereinfachung des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

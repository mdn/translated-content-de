---
title: "Window: showOpenFilePicker() Methode"
short-title: showOpenFilePicker()
slug: Web/API/Window/showOpenFilePicker
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`showOpenFilePicker()`** Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle zeigt einen Dateiauswahldialog an, der es einem Benutzer ermöglicht, eine Datei oder mehrere Dateien auszuwählen, und gibt ein Handle für die Datei(en) zurück.

## Syntax

```js-nolint
showOpenFilePicker()
```

### Parameter

- `options` {{Optional_Inline}}

  - : Ein Objekt, das Optionen enthält, die wie folgt sind:

    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Der Dialog bietet standardmäßig eine Option, um keine Filter für Dateitypen anzuwenden (eingeleitet mit der unten angegebenen Typenoption). Wenn diese Option auf `true` gesetzt wird, ist diese Option _nicht_ verfügbar.
    - `id` {{Optional_Inline}}
      - : Durch die Angabe einer ID kann sich der Browser für verschiedene IDs verschiedene Verzeichnisse merken. Wenn dieselbe ID für einen anderen Dialog verwendet wird, öffnet sich der Dialog im selben Verzeichnis.
    - `multiple` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn dieser Wert auf `true` gesetzt wird, können mehrere Dateien ausgewählt werden.
    - `startIn` {{Optional_Inline}}
      - : Ein `FileSystemHandle` oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"` oder `"videos"`), in dem der Dialog geöffnet werden soll.
    - `types` {{Optional_Inline}}

      - : Ein {{jsxref('Array')}} der zulässigen Dateitypen zur Auswahl. Jedes Element ist ein Objekt mit den folgenden Optionen:

        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie der zulässigen Dateitypen. Standardmäßig ein leerer String.
        - `accept`
          - : Ein {{jsxref('Object')}} mit den Schlüsseln, die auf den [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) gesetzt sind, und den Werten ein {{jsxref('Array')}} von Dateiendungen (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Überwachungshandler ein {{jsxref('Array')}} von [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekten empfängt.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer den Dialog schließt, ohne eine Auswahl zu treffen, oder wenn der Benutzeragent eine ausgewählte Datei als zu sensibel oder gefährlich beurteilt.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder nicht durch eine Benutzerinteraktion wie das Drücken einer Taste erfolgt ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn Akzeptanztypen nicht verarbeitet werden können, was passieren kann, wenn:
    - Ein Schlüsselstring der `accept`-Optionen eines Elements in den `types`-Optionen keinen gültigen MIME-Typ parsen kann.
    - Ein Wertstring der `accept`-Optionen eines Elements in den `types`-Optionen ungültig ist, beispielsweise wenn er nicht mit `.` beginnt und mit `.` endet, oder wenn er ungültige Codepunkte enthält und seine Länge mehr als 16 ist.
    - Die `types`-Optionen leer sind und die `excludeAcceptAllOption`-Optionen `true` sind.

## Sicherheit

Eine [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Hier setzen wir das Optionsobjekt, das an die Methode übergeben wird. Wir erlauben eine Auswahl von Bilddateitypen, ohne die Möglichkeit, alle Dateiarten oder Mehrfachdateiauswahl zuzulassen.

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

Als nächstes können wir eine asynchrone Funktion erstellen, die den Dateiauswahldialog anzeigt und die ausgewählte Datei zurückgibt.

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

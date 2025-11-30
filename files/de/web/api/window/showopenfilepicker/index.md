---
title: "Window: showOpenFilePicker() Methode"
short-title: showOpenFilePicker()
slug: Web/API/Window/showOpenFilePicker
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`showOpenFilePicker()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle zeigt einen Dateiauswahldialog an, der es einem Benutzer ermöglicht, eine oder mehrere Dateien auszuwählen und gibt ein Handle für die Datei(en) zurück.

## Syntax

```js-nolint
showOpenFilePicker()
showOpenFilePicker(options)
```

### Parameter

- `options` {{Optional_Inline}}
  - : Ein Objekt, das Optionen enthält, welche wie folgt sind:
    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Standardmäßig sollte der Dialog eine Option enthalten, um keine Dateityp-Filter anzuwenden (veranlasst durch die Typ-Option unten). Wenn diese Option auf `true` gesetzt ist, steht diese Option _nicht_ zur Verfügung.
    - `id` {{Optional_Inline}}
      - : Durch das Angeben einer ID kann der Browser verschiedene Verzeichnisse für verschiedene IDs speichern. Wenn dieselbe ID für einen anderen Dialog verwendet wird, öffnet sich dieser Dialog im selben Verzeichnis.
    - `multiple` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn auf `true` gesetzt, können mehrere Dateien ausgewählt werden.
    - `startIn` {{Optional_Inline}}
      - : Ein [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"`, oder `"videos"`) in dem der Dialog geöffnet wird.
    - `types` {{Optional_Inline}}
      - : Ein {{jsxref('Array')}} der erlaubten Dateitypen zur Auswahl. Jedes Element ist ein Objekt mit den folgenden Optionen:
        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie der erlaubten Dateitypen. Standardmäßig ist dies ein leerer String.
        - `accept`
          - : Ein {{jsxref('Object')}} mit den Schlüsseln, die auf den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) gesetzt sind, und den Werten, die ein {{jsxref('Array')}} von Dateiendungen enthalten (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Abschluss-Handler ein {{jsxref('Array')}} von [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekten erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer den Dialog schließt, ohne eine Auswahl zu treffen, oder wenn der Benutzeragent ausgewählte Dateien als zu sensibel oder gefährlich einstuft.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) blockiert wurde oder wenn er nicht über eine Benutzerinteraktion wie einen Knopfdruck aufgerufen wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die akzeptierten Typen nicht verarbeitet werden können, was in folgenden Fällen auftreten kann:
    - Ein beliebiger Schlüsselstring der `accept`-Optionen eines Elements in den `types`-Optionen kann keinen gültigen MIME-Typ parsen.
    - Ein beliebiger Wertstring der `accept`-Optionen eines Elements in den `types`-Optionen ist ungültig, beispielsweise wenn er nicht mit `.` beginnt und mit `.` endet, oder wenn er ungültige Codepunkte enthält und seine Länge mehr als 16 beträgt.
    - Die `types`-Optionen sind leer und die `excludeAcceptAllOption`-Optionen sind `true`.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Hier setzen wir das Optionsobjekt, das in die Methode übergeben wird. Wir erlauben eine Auswahl von Bild-Dateitypen, ohne die Option, alle Dateitypen oder eine Mehrfachauswahl zu erlauben.

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

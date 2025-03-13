---
title: "Window: showOpenFilePicker() Methode"
short-title: showOpenFilePicker()
slug: Web/API/Window/showOpenFilePicker
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`showOpenFilePicker()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces zeigt einen Dateiauswahldialog, der es einem Benutzer erlaubt, eine Datei oder mehrere Dateien auszuwählen und gibt einen Handle für die Datei(en) zurück.

## Syntax

```js-nolint
showOpenFilePicker()
```

### Parameter

- `options` {{Optional_Inline}}

  - : Ein Objekt, das Optionen enthält, die wie folgt sind:

    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Standardmäßig sollte der Dateiauswahldialog eine Option enthalten, um keine Dateitypfilter anzuwenden (initiiert mit der unten stehenden Typoption). Wenn diese Option auf `true` gesetzt wird, ist diese Option _nicht_ verfügbar.
    - `id` {{Optional_Inline}}
      - : Durch die Angabe einer ID kann sich der Browser an unterschiedliche Verzeichnisse für verschiedene IDs erinnern. Wenn dieselbe ID für einen anderen Dateiauswahldialog verwendet wird, öffnet der Dialog im selben Verzeichnis.
    - `multiple` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn auf `true` gesetzt, können mehrere Dateien ausgewählt werden.
    - `startIn` {{Optional_Inline}}
      - : Ein [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"` oder `"videos"`), in dem der Dialog geöffnet werden soll.
    - `types` {{Optional_Inline}}

      - : Ein {{jsxref('Array')}} der erlaubten Dateitypen zur Auswahl. Jedes Element ist ein Objekt mit den folgenden Optionen:

        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie von erlaubten Dateitypen. Standardmäßig ein leerer String.
        - `accept`
          - : Ein {{jsxref('Object')}} mit den Schlüsseln, die auf den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) gesetzt sind, und den Werten, einem {{jsxref('Array')}} von Dateiendungen (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Fulfillment-Handler ein {{jsxref('Array')}} von [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekten erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer die Aufforderung ohne Auswahl abbricht oder wenn das Benutzeragent die ausgewählten Dateien als zu sensibel oder gefährlich einstuft.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder wenn er nicht durch eine Benutzerinteraktion wie einen Tastendruck initiiert wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn Akzeptanztypen nicht verarbeitet werden können, was passieren kann, wenn:
    - Eine Schlüsselzeichenkette der `accept`-Optionen eines Elements in den `types`-Optionen keinen gültigen MIME-Typ parsen kann.
    - Eine oder mehrere Wertzeichenfolgen der `accept`-Optionen eines Elements in den `types`-Optionen ungültig sind, zum Beispiel, wenn sie nicht mit `.` beginnen und mit `.` enden oder ungültige Code-Punkte enthalten und ihre Länge mehr als 16 beträgt.
    - Die `types`-Optionen leer sind und die `excludeAcceptAllOption`-Optionen `true` sind.

## Sicherheit

Eine [transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Hier setzen wir das Optionsobjekt, das in die Methode übergeben werden soll. Wir erlauben eine Auswahl von Bilddateitypen, ohne Option für alle Dateitypen oder Mehrfachauswahl.

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

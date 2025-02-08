---
title: "Window: showOpenFilePicker()-Methode"
short-title: showOpenFilePicker()
slug: Web/API/Window/showOpenFilePicker
l10n:
  sourceCommit: 8f93582ca9008d55db258a017552be486e372382
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`showOpenFilePicker()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle zeigt einen Datei-Auswahldialog an, mit dem ein Benutzer eine oder mehrere Dateien auswählen kann, und gibt eine Referenz auf die Datei(en) zurück.

## Syntax

```js-nolint
showOpenFilePicker()
```

### Parameter

- `options` {{Optional_Inline}}

  - : Ein Objekt, das Optionen enthält, wie folgt:

    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Standardmäßig sollte der Auswahl-Dialog eine Option enthalten, um keine Dateityp-Filter anzuwenden (diese werden mit der unten beschriebenen `types`-Option festgelegt). Wenn diese Option auf `true` gesetzt wird, ist diese Option _nicht_ verfügbar.
    - `id` {{Optional_Inline}}
      - : Durch das Angeben einer ID kann sich der Browser unterschiedliche Verzeichnisse für verschiedene IDs merken. Falls dieselbe ID für einen anderen Auswahldialog verwendet wird, öffnet sich der Dialog im selben Verzeichnis.
    - `multiple` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn auf `true` gesetzt, können mehrere Dateien ausgewählt werden.
    - `startIn` {{Optional_Inline}}
      - : Ein [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"` oder `"videos"`) zum Öffnen des Dialogs.
    - `types` {{Optional_Inline}}

      - : Ein {{jsxref('Array')}} von erlaubten Dateitypen für die Auswahl. Jedes Element ist ein Objekt mit folgenden Optionen:

        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie der erlaubten Dateitypen. Standardmäßig leer.
        - `accept`
          - : Ein {{jsxref('Object')}} mit den Schlüsseln, die auf einen [MIME-Typ](/de/docs/Web/HTTP/MIME_types/Common_types) gesetzt sind, und den Werten, die ein {{jsxref('Array')}} von Dateierweiterungen darstellen (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Fulfillment-Handler ein {{jsxref('Array')}} von [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekten erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer den Dialog schließt, ohne eine Auswahl zu treffen, oder wenn die Benutzerauswahl vom User-Agent als zu sensibel oder gefährlich angesehen wird.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder nicht über eine Benutzerinteraktion, wie z. B. das Drücken eines Buttons, initiiert wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die akzeptierten Typen nicht verarbeitet werden können, was in diesen Fällen auftreten kann:
    - Wenn irgendein Schlüssel-String der `accept`-Optionen eines Elements in den `types`-Optionen keinen gültigen MIME-Typ darstellt.
    - Wenn irgendein Wert-String der `accept`-Optionen eines Elements in den `types`-Optionen ungültig ist, beispielsweise wenn er nicht mit einem `.` beginnt, mit einem `.` endet, ungültige Codepunkte enthält oder länger als 16 Zeichen ist.
    - Wenn die `types`-Option leer ist und die `excludeAcceptAllOption`-Option auf `true` gesetzt ist.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Hier setzen wir das Optionsobjekt, das an die Methode übergeben wird. Wir erlauben die Auswahl von Bilddateitypen, ohne die Möglichkeit, alle Dateitypen auszuwählen oder mehrere Dateien auszuwählen.

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

Als Nächstes können wir eine asynchrone Funktion erstellen, die den Datei-Auswahldialog anzeigt und die ausgewählte Datei zurückgibt.

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

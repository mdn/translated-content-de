---
title: "Window: showOpenFilePicker() Methode"
short-title: showOpenFilePicker()
slug: Web/API/Window/showOpenFilePicker
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`showOpenFilePicker()`** Methode des [`Window`](/de/docs/Web/API/Window)-Interface zeigt einen Dateiauswahl-Dialog an, der es einem Benutzer ermöglicht, eine oder mehrere Dateien auszuwählen und einen Handle für die Datei(en) zurückgibt.

## Syntax

```js-nolint
showOpenFilePicker()
```

### Parameter

- `options` {{Optional_Inline}}

  - : Ein Objekt, das Optionen enthält, die wie folgt sind:

    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist. Standardmäßig sollte der Auswahldialog eine Option enthalten, um keine Dateitypfilter anzuwenden (initiiert mit der untenstehenden Typoption). Durch Setzen dieser Option auf `true` ist diese Option _nicht_ verfügbar.
    - `id` {{Optional_Inline}}
      - : Durch Festlegen einer ID kann der Browser verschiedene Verzeichnisse für verschiedene IDs speichern. Wenn dieselbe ID für einen anderen Auswahldialog verwendet wird, öffnet sich der Dialog im selben Verzeichnis.
    - `multiple` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn auf `true` gesetzt, können mehrere Dateien ausgewählt werden.
    - `startIn` {{Optional_Inline}}
      - : Ein `FileSystemHandle` oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"`, oder `"videos"`) zum Öffnen des Dialogs in diesem Verzeichnis.
    - `types` {{Optional_Inline}}

      - : Ein {{jsxref('Array')}} der zulässigen Dateitypen zur Auswahl. Jedes Element ist ein Objekt mit den folgenden Optionen:

        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie der zulässigen Dateitypen. Standardmäßig ein leerer String.
        - `accept`
          - : Ein {{jsxref('Object')}} mit den Schlüsseln, die auf den [MIME-Typ](/de/docs/Web/HTTP/MIME_types/Common_types) gesetzt sind, und den Werten als {{jsxref('Array')}} von Dateierweiterungen (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungshandler ein {{jsxref('Array')}} von [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekten erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer den Dialog schließt, ohne eine Auswahl zu treffen, oder wenn der Benutzeragent eine der ausgewählten Dateien für zu sensibel oder gefährlich hält.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder nicht durch eine Benutzeraktion wie das Drücken einer Schaltfläche ausgelöst wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn akzeptierte Typen nicht verarbeitet werden können, was in folgenden Fällen passieren kann:
    - Jeder Schlüsselstring der `accept`-Optionen eines Elements in den `types`-Optionen kann keinen gültigen MIME-Typ analysieren.
    - Jeder Wertstring der `accept`-Optionen eines Elements in den `types`-Optionen ist ungültig, zum Beispiel, wenn er nicht mit `.` beginnt, wenn er mit `.` endet, oder wenn er ungültige Codepunkte enthält und länger als 16 Zeichen ist.
    - Die `types`-Optionen sind leer und die Option `excludeAcceptAllOption` ist `true`.

## Sicherheit

[Temporäre Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Hier setzen wir das Optionsobjekt für die Übergabe an die Methode. Wir erlauben eine Auswahl von Bilddateitypen, ohne die Möglichkeit, alle Dateitypen oder Mehrfachauswahl zu erlauben.

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

Als Nächstes können wir eine asynchrone Funktion erstellen, die den Dateiauswahl-Dialog anzeigt und die ausgewählte Datei zurückgibt.

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

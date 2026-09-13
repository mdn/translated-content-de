---
title: "Window: Methode showOpenFilePicker()"
short-title: showOpenFilePicker()
slug: Web/API/Window/showOpenFilePicker
l10n:
  sourceCommit: 381dfaf4d7f555e847b0af726a93ce48cde15915
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die Methode **`showOpenFilePicker()`** des Interfaces
[`Window`](/de/docs/Web/API/Window) zeigt einen Dateiauswahldialog an, der es einer Benutzerin oder einem Benutzer ermöglicht, eine oder mehrere Dateien auszuwählen, und gibt ein Handle für die Datei(en) zurück.

## Syntax

```js-nolint
showOpenFilePicker()
showOpenFilePicker(options)
```

### Parameter

- `options` {{Optional_Inline}}
  - : Ein Objekt, das Optionen enthält. Diese lauten wie folgt:
    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, dessen Standardwert `false` ist. Standardmäßig sollte die Auswahl eine Option enthalten, keine Dateitypfilter anzuwenden (die mit der untenstehenden Typoption festgelegt werden). Wenn Sie diese Option auf `true` setzen, ist diese Option _nicht_ verfügbar.
    - `id` {{Optional_Inline}}
      - : Durch die Angabe einer ID kann der Browser unterschiedliche Verzeichnisse für unterschiedliche IDs speichern. Wenn dieselbe ID für eine andere Auswahl verwendet wird, öffnet sich die Auswahl im selben Verzeichnis.
    - `multiple` {{Optional_Inline}}
      - : Ein boolescher Wert, dessen Standardwert `false` ist. Wenn er auf `true` gesetzt ist, können mehrere Dateien ausgewählt werden.
    - `startIn` {{Optional_Inline}}
      - : Ein [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"` oder `"videos"`), in dem der Dialog geöffnet werden soll.
    - `types` {{Optional_Inline}}
      - : Ein {{jsxref('Array')}} zulässiger auszuwählender Dateitypen. Jedes Element ist ein Objekt mit den folgenden Optionen:
        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie zulässiger Dateitypen. Der Standardwert ist eine leere Zeichenkette.
        - `accept`
          - : Ein {{jsxref('Object')}}, dessen Schlüssel auf den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) gesetzt sind und dessen Werte ein {{jsxref('Array')}} von Dateierweiterungen sind (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungs-Handler ein {{jsxref('Array')}} von [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekten empfängt.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Benutzerin oder der Benutzer die Eingabeaufforderung schließt, ohne eine Auswahl zu treffen, oder wenn der User Agent ausgewählte Dateien als zu sensibel oder gefährlich einstuft.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) blockiert wurde oder nicht über eine Benutzerinteraktion wie das Drücken einer Schaltfläche erfolgte.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn Accept-Typen nicht verarbeitet werden können. Dies kann passieren, wenn:
    - Eine Schlüsselzeichenkette der `accept`-Optionen eines Elements in den `types`-Optionen nicht als gültiger MIME-Typ geparst werden kann.
    - Eine oder mehrere Wertzeichenketten der `accept`-Optionen eines Elements in den `types`-Optionen ungültig sind, beispielsweise wenn sie nicht mit `.` beginnen, mit `.` enden oder ungültige Codepunkte enthalten und länger als 16 Zeichen sind.
    - Die `types`-Optionen leer sind und die Option `excludeAcceptAllOption` auf `true` gesetzt ist.

## Sicherheit

Eine [transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Damit diese Funktion funktioniert, muss die Benutzerin oder der Benutzer mit der Seite oder einem UI-Element interagieren.

## Beispiele

Hier legen wir das Optionsobjekt fest, das an die Methode übergeben wird. Wir erlauben eine Auswahl von Bilddateitypen, ohne Option, alle Dateitypen oder mehrere Dateien auszuwählen.

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

Als Nächstes können wir eine asynchrone Funktion erstellen, welche die Dateiauswahl anzeigt und die ausgewählte Datei zurückgibt.

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
- [The File System Access API: Vereinfachter Zugriff auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

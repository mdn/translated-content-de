---
title: "Window: Methode showOpenFilePicker()"
short-title: showOpenFilePicker()
slug: Web/API/Window/showOpenFilePicker
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`showOpenFilePicker()`**-Methode der
{{domxref("Window")}}-Schnittstelle zeigt einen Dateiauswahldialog an, der es einem Benutzer ermöglicht, eine Datei oder mehrere Dateien auszuwählen und gibt einen Handle für die Datei(en) zurück.

## Syntax

```js-nolint
showOpenFilePicker()
```

### Parameter

- `options` {{Optional_Inline}}

  - : Ein Objekt, das Optionen enthält, wie folgt:

    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Standardmäßig sollte der Dialog eine Option enthalten, keine Dateitypfilter anzuwenden (ausgelöst durch die Option `type` unten). Wenn diese Option auf `true` gesetzt wird, ist diese Option _nicht_ verfügbar.
    - `id` {{Optional_Inline}}
      - : Durch die Angabe einer ID kann sich der Browser verschiedene Verzeichnisse für verschiedene IDs merken. Wenn die gleiche ID für einen anderen Dialog verwendet wird, öffnet sich der Dialog im gleichen Verzeichnis.
    - `multiple` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn auf `true` gesetzt, können mehrere Dateien ausgewählt werden.
    - `startIn` {{Optional_Inline}}
      - : Ein `FileSystemHandle` oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"` oder `"videos"`), in dem der Dialog geöffnet werden soll.
    - `types` {{Optional_Inline}}

      - : Ein {{jsxref('Array')}} der erlaubten Dateitypen zur Auswahl. Jedes Element ist ein Objekt mit den folgenden Optionen:

        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie der erlaubten Dateitypen. Standardmäßig ein leerer String.
        - `accept`
          - : Ein {{jsxref('Object')}} mit den Schlüsseln, die auf den [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) gesetzt sind, und den Werten, einem {{jsxref('Array')}} von Dateiendungen (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungs-Handler ein {{jsxref('Array')}} von {{domxref('FileSystemFileHandle')}}-Objekten erhält.

### Ausnahmen

- `AbortError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Benutzer den Dialog abbricht, ohne eine Auswahl zu treffen, oder wenn der Benutzeragent die ausgewählten Dateien als zu sensibel oder gefährlich erachtet.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder nicht durch eine Benutzerinteraktion wie einen Tastendruck ausgelöst wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die akzeptierten Typen nicht verarbeitet werden können, was passieren kann, wenn:
    - Ein beliebiger Schlüsselstring der `accept`-Optionen eines Elements in den `types`-Optionen keinen gültigen MIME-Typ analysieren kann.
    - Jede Wertzeile(n) der `accept`-Optionen eines Elements in den `types`-Optionen ungültig ist, z.B. wenn sie nicht mit `.` beginnt und mit `.` endet, oder wenn sie ungültige Codepunkte enthält und ihre Länge mehr als 16 beträgt.
    - Die `types`-Optionen leer sind und die `excludeAcceptAllOption`-Optionen `true` sind.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Hier setzen wir das Options-Objekt, das in die Methode übergeben wird. Wir erlauben die Auswahl von Bilddateitypen, ohne die Möglichkeit, alle Dateitypen oder mehrere Dateiauswahlen zuzulassen.

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

Als nächstes können wir eine asynchrone Funktion erstellen, die den Dateiauswahldialog zeigt und die ausgewählte Datei zurückgibt.

```js
// eine Referenz für unseren Datei-Handle erstellen
let fileHandle;

async function getFile() {
  // Dateiauswahldialog öffnen, das im Array zurückgegebene einzelne Element dekonstruieren
  [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // Code mit unserem fileHandle ausführen
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

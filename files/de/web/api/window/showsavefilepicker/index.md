---
title: "Window: showSaveFilePicker() Methode"
short-title: showSaveFilePicker()
slug: Web/API/Window/showSaveFilePicker
l10n:
  sourceCommit: b58a5b506fdc086f442104ccdee547b9df0cb6a7
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`showSaveFilePicker()`** Methode des [`Window`](/de/docs/Web/API/Window) Interface zeigt einen Dateiauswahldialog, der einem Benutzer ermöglicht, eine Datei zu speichern. Entweder durch Auswahl einer bestehenden Datei oder durch Eingabe eines Namens für eine neue Datei.

## Syntax

```js-nolint
showSaveFilePicker()
showSaveFilePicker(options)
```

### Parameter

- `options` {{Optional_Inline}}

  - : Ein Objekt, das Optionen enthält, die wie folgt sind:

    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist. Standardmäßig sollte der Auswahldialog eine Option enthalten, um keine Dateitypfilter anzuwenden (angestoßen mit der Typoption unten). Wenn diese Option auf `true` gesetzt wird, ist diese Option _nicht_ verfügbar.
    - `id` {{Optional_Inline}}
      - : Durch die Angabe einer ID kann der Browser verschiedene Verzeichnisse für unterschiedliche IDs merken. Wenn dieselbe ID für einen anderen Auswahldialog verwendet wird, öffnet der Dialog im selben Verzeichnis.
    - `startIn` {{Optional_Inline}}
      - : Ein [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"` oder `"videos"`) in dem der Dialog geöffnet werden soll.
    - `suggestedName` {{Optional_Inline}}
      - : Ein {{jsxref('String')}}. Der vorgeschlagene Dateiname.
    - `types` {{Optional_Inline}}

      - : Ein {{jsxref('Array')}} von erlaubten Dateitypen zum Speichern. Jedes Element ist ein Objekt mit den folgenden Optionen:

        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie der erlaubten Dateitypen. Standardmäßig ein leerer String.
        - `accept`
          - : Ein {{jsxref('Object')}} mit den Schlüsseln gesetzt auf den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) und den Werten als ein {{jsxref('Array')}} von Dateierweiterungen (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Fulfillment-Handler ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) Objekt erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer den Dateiauswahldialog ohne Auswahl oder Eingabe einer Datei schließt oder wenn der User-Agent irgendwelche ausgewählten Dateien als zu sensibel oder gefährlich erachtet.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder wenn er nicht über eine Benutzerinteraktion wie einen Tastendruck aufgerufen wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn akzeptierte Typen nicht verarbeitet werden können, was passieren kann, wenn:
    - Jeder Schlüsselstring der `accept` Optionen eines Elements in den `types` Optionen keinen gültigen MIME-Typ parsen kann.
    - Jeder Wertstring der `accept` Optionen eines Elements in den `types` Optionen ungültig ist, zum Beispiel, wenn er nicht mit `.` beginnt und mit `.` endet oder irgendwelche ungültigen Codepunkte enthält und seine Länge mehr als 16 ist.
    - Die `types` Optionen leer sind und die `excludeAcceptAllOption` Optionen `true` sind.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Die folgende Funktion zeigt einen Dateiauswahldialog, mit hervorgehobenen Textdateien zur Auswahl.

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

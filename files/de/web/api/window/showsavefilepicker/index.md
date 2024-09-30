---
title: "Window: showSaveFilePicker() Methode"
short-title: showSaveFilePicker()
slug: Web/API/Window/showSaveFilePicker
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`showSaveFilePicker()`** Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle zeigt einen Dateiauswahldialog an, der es einem Benutzer ermöglicht, eine Datei zu speichern. Dies kann durch Auswahl einer vorhandenen Datei oder durch Eingabe eines Namens für eine neue Datei erfolgen.

## Syntax

```js-nolint
showSaveFilePicker()
```

### Parameter

- `options` {{Optional_Inline}}

  - : Ein Objekt, das Optionen enthält, die wie folgt sind:

    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Standardmäßig sollte der Auswahldialog eine Option haben, um keine Dateiartfilter anzuwenden (eingeleitet mit der Typoptions hierunter). Wenn diese Option auf `true` gesetzt wird, steht diese Option _nicht_ zur Verfügung.
    - `id` {{Optional_Inline}}
      - : Durch die Angabe einer ID kann der Browser sich verschiedene Verzeichnisse für unterschiedliche IDs merken. Wenn dieselbe ID für einen anderen Auswahldialog verwendet wird, öffnet sich dieser im selben Verzeichnis.
    - `startIn` {{Optional_Inline}}
      - : Ein `FileSystemHandle` oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"`, oder `"videos"`) in dem der Dialog geöffnet wird.
    - `suggestedName` {{Optional_Inline}}
      - : Ein {{jsxref('String')}}. Der vorgeschlagene Dateiname.
    - `types` {{Optional_Inline}}

      - : Ein {{jsxref('Array')}} von erlaubten Dateitypen zum Speichern. Jeder Eintrag ist ein Objekt mit den folgenden Optionen:

        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie der erlaubten Dateitypen. Standardmäßig ein leerer String.
        - `accept`
          - : Ein {{jsxref('Object')}} mit Schlüsseln, die auf den [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) gesetzt sind und Werten, die ein {{jsxref('Array')}} von Dateiendungen sind (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungs-Handler ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer den Dateiauswahldialog schließt, ohne eine Datei auszuwählen oder einzugeben, oder wenn der Benutzer-Agent die ausgewählten Dateien als zu sensibel oder gefährlich einstuft.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder nicht über eine Benutzerinteraktion wie einen Tastendruck aufgerufen wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn Akzeptanztypen nicht verarbeitet werden können, was passiert, wenn:
    - Ein Schlüsselstring der `accept`-Optionen eines Eintrags in den `types`-Optionen kann keinen gültigen MIME-Typ parsen.
    - Ein oder mehrere Wert-Strings der `accept`-Optionen eines Eintrags in den `types`-Optionen sind ungültig, beispielsweise wenn sie nicht mit `.` beginnen, mit `.` enden oder ungültige Codepunkte enthalten und ihre Länge mehr als 16 beträgt.
    - Die `types`-Optionen sind leer und die `excludeAcceptAllOption`-Optionen sind `true`.

## Sicherheit

[Vorübergehende Nutzerinteraktion](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Die folgende Funktion zeigt einen Dateiauswahldialog an, in dem Textdateien für die Auswahl hervorgehoben sind.

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

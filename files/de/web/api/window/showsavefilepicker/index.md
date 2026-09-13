---
title: "Window: Methode showSaveFilePicker()"
short-title: showSaveFilePicker()
slug: Web/API/Window/showSaveFilePicker
l10n:
  sourceCommit: 381dfaf4d7f555e847b0af726a93ce48cde15915
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die Methode **`showSaveFilePicker()`** des Interfaces
[`Window`](/de/docs/Web/API/Window) zeigt eine Dateiauswahl an, mit der eine Benutzerin oder ein Benutzer eine Datei speichern kann.
Dies kann durch Auswahl einer vorhandenen Datei oder durch Eingabe eines Namens für eine neue Datei erfolgen.

## Syntax

```js-nolint
showSaveFilePicker()
showSaveFilePicker(options)
```

### Parameter

- `options` {{Optional_Inline}}
  - : Ein Objekt, das Optionen enthält. Diese sind wie folgt:
    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf
        `false` gesetzt ist. Standardmäßig sollte die Auswahl eine Option enthalten, um keine
        Dateitypfilter anzuwenden (ausgelöst durch die untenstehende Typoption). Wenn diese Option
        auf `true` gesetzt wird, ist diese Option _nicht_ verfügbar.
    - `id` {{Optional_Inline}}
      - : Durch Angabe einer ID kann der Browser verschiedene Verzeichnisse für verschiedene
        IDs speichern. Wenn dieselbe ID für eine andere Auswahl verwendet wird, wird die Auswahl im selben
        Verzeichnis geöffnet.
    - `startIn` {{Optional_Inline}}
      - : Ein [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`,
        `"downloads"`, `"music"`, `"pictures"` oder `"videos"`), in dem der Dialog geöffnet werden soll.
    - `suggestedName` {{Optional_Inline}}
      - : Ein {{jsxref('String')}}. Der vorgeschlagene Dateiname.
    - `types` {{Optional_Inline}}
      - : Ein {{jsxref('Array')}} zulässiger Dateitypen zum Speichern. Jedes
        Element ist ein Objekt mit den folgenden Optionen:
        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie zulässiger
            Dateitypen. Standardmäßig eine leere Zeichenkette.
        - `accept`
          - : Ein {{jsxref('Object')}}, dessen Schlüssel auf den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) gesetzt sind und dessen Werte ein {{jsxref('Array')}} von Dateierweiterungen sind (siehe unten
            ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Fulfillment-Handler ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Benutzerin oder der Benutzer die Dateiauswahl schließt, ohne eine Datei auszuwählen oder einzugeben,
    oder wenn der User Agent ausgewählte Dateien als zu sensibel oder gefährlich einstuft.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) blockiert wurde oder nicht über eine Benutzerinteraktion wie einen Tastendruck auf eine Schaltfläche erfolgte.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn Accept-Typen nicht verarbeitet werden können. Dies kann auftreten, wenn:
    - Eine beliebige Schlüsselzeichenkette der `accept`-Optionen eines beliebigen Elements in den `types`-Optionen nicht als gültiger MIME-Typ geparst werden kann.
    - Eine oder mehrere Wertzeichenketten der `accept`-Optionen eines beliebigen Elements in den `types`-Optionen ungültig sind, beispielsweise wenn sie nicht mit `.` beginnen und mit `.` enden oder wenn sie ungültige Codepunkte enthalten und länger als 16 Zeichen sind.
    - Die `types`-Optionen leer sind und die `excludeAcceptAllOption`-Optionen auf `true` gesetzt sind.

## Sicherheit

Eine [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Damit dieses Feature funktioniert, muss die Benutzerin oder der Benutzer mit der Seite oder einem UI-Element interagieren.

## Beispiele

Die folgende Funktion zeigt eine Dateiauswahl an, bei der Textdateien zur Auswahl hervorgehoben werden.

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
- [Die File System Access API: Vereinfachter Zugriff auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

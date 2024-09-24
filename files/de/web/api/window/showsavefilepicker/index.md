---
title: "Fenster: showSaveFilePicker()-Methode"
short-title: showSaveFilePicker()
slug: Web/API/Window/showSaveFilePicker
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`showSaveFilePicker()`**-Methode der
{{domxref("Window")}}-Schnittstelle zeigt einen Dateiauswahldialog an, der es einem Benutzer ermöglicht, eine Datei zu speichern.
Entweder durch Auswahl einer vorhandenen Datei oder durch Eingabe eines Namens für eine neue Datei.

## Syntax

```js-nolint
showSaveFilePicker()
```

### Parameter

- `options` {{Optional_Inline}}

  - : Ein Objekt, das Optionen enthält, die wie folgt sind:

    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Standardmäßig sollte der Auswahldialog eine Option enthalten, um keine Dateitypenfilter anzuwenden (initiieren mit der Typ-Option unten). Wenn diese Option auf `true` gesetzt ist, ist diese Option _nicht_ verfügbar.
    - `id` {{Optional_Inline}}
      - : Durch Angabe einer ID kann sich der Browser verschiedene Verzeichnisse für unterschiedliche IDs merken. Wenn dieselbe ID für einen anderen Auswahldialog verwendet wird, öffnet sich der Dialog im gleichen Verzeichnis.
    - `startIn` {{Optional_Inline}}
      - : Ein `FileSystemHandle` oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"`, oder `"videos"`) um den Dialog in diesem Verzeichnis zu öffnen.
    - `suggestedName` {{Optional_Inline}}
      - : Ein {{jsxref('String')}}. Der vorgeschlagene Dateiname.
    - `types` {{Optional_Inline}}

      - : Ein {{jsxref('Array')}} von erlaubten Dateitypen zum Speichern. Jedes
        Element ist ein Objekt mit den folgenden Optionen:

        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie der erlaubten Dateitypen. Standardmäßig ein leerer String.
        - `accept`
          - : Ein {{jsxref('Object')}} mit den Schlüsseln, die auf den [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) gesetzt sind, und den Werten, ein {{jsxref('Array')}} von Dateierweiterungen (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Fulfillment-Handler ein {{domxref('FileSystemFileHandle')}}-Objekt erhält.

### Ausnahmen

- `AbortError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Benutzer den Dateiauswahldialog schließt, ohne eine Datei auszuwählen oder einzugeben, oder wenn der User-Agent ausgewählte Dateien als zu sensibel oder gefährlich empfindet.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder nicht durch eine Benutzerinteraktion wie das Drücken einer Schaltfläche aufgerufen wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die akzeptierten Typen nicht verarbeitet werden können, was passieren kann, wenn:
    - Jeder Schlüsselstring der `accept`-Optionen eines Elements in den `types`-Optionen keinen gültigen MIME-Typ parsen kann.
    - Jeder Wertstring der `accept`-Optionen eines Elements in den `types`-Optionen ungültig ist, beispielsweise, wenn er nicht mit `.` beginnt und mit `.` endet oder ungültige Zeichen enthält und seine Länge mehr als 16 beträgt.
    - Die `types`-Optionen leer sind und die `excludeAcceptAllOption`-Optionen `true` sind.

## Sicherheit

[Flüchtige Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

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

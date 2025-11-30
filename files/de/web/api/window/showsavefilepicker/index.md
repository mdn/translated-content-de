---
title: "Window: showSaveFilePicker()-Methode"
short-title: showSaveFilePicker()
slug: Web/API/Window/showSaveFilePicker
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`showSaveFilePicker()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle zeigt einen Dateiauswahldialog an, der es einem Benutzer ermöglicht, eine Datei zu speichern. Dies kann entweder durch die Auswahl einer vorhandenen Datei oder durch Eingabe eines Namens für eine neue Datei geschehen.

## Syntax

```js-nolint
showSaveFilePicker()
showSaveFilePicker(options)
```

### Parameter

- `options` {{Optional_Inline}}
  - : Ein Objekt, das Optionen enthält, die wie folgt sind:
    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Standardmäßig sollte der Auswahldialog eine Option enthalten, um keine Dateitypenfilter anzuwenden (initiiert mit der unten stehenden Typ-Option). Wenn diese Option auf `true` gesetzt ist, ist diese Option _nicht_ verfügbar.
    - `id` {{Optional_Inline}}
      - : Durch die Angabe einer ID kann der Browser verschiedene Verzeichnisse für unterschiedliche IDs speichern. Wenn die gleiche ID für einen anderen Auswahldialog verwendet wird, öffnet sich der Dialog im gleichen Verzeichnis.
    - `startIn` {{Optional_Inline}}
      - : Ein [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"` oder `"videos"`) in dem sich das Dialogfenster öffnet.
    - `suggestedName` {{Optional_Inline}}
      - : Ein {{jsxref('String')}}. Der vorgeschlagene Dateiname.
    - `types` {{Optional_Inline}}
      - : Ein {{jsxref('Array')}} von erlaubten Dateitypen zum Speichern. Jedes Element ist ein Objekt mit den folgenden Optionen:
        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie der zugelassenen Dateitypen. Standardmäßig ein leerer String.
        - `accept`
          - : Ein {{jsxref('Object')}} mit den Schlüsseln, die auf den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) gesetzt sind, und den Werten, die ein {{jsxref('Array')}} von Dateiendungen sind (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Fulfillment-Handler ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer den Dateiauswahldialog schließt, ohne eine Datei auszuwählen oder einzugeben, oder wenn der User Agent ausgewählte Dateien als zu sensibel oder gefährlich einstuft.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) blockiert wurde oder nicht durch eine Benutzerinteraktion wie einen Tastendruck erfolgte.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn akzeptierte Typen nicht verarbeitet werden können, was passieren kann, wenn:
    - Ein beliebiger Schlüsselstring der `accept` Optionen eines Elements in `types` keine gültige MIME-Type parsen kann.
    - Ein beliebiger Wertstring der `accept` Optionen eines Elements in `types` ungültig ist, zum Beispiel, wenn er nicht mit `.` beginnt und mit `.` endet, oder wenn er ungültige Zeichen enthält und seine Länge mehr als 16 beträgt.
    - Die `types` Optionen leer sind und die `excludeAcceptAllOption` Optionen `true` ist.

## Sicherheit

[Temporäre Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Die folgende Funktion zeigt einen Dateiauswahldialog an, mit hervorgehobenen Textdateien zur Auswahl.

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

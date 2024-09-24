---
title: "Fenster: showSaveFilePicker()-Methode"
short-title: showSaveFilePicker()
slug: Web/API/Window/showSaveFilePicker
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`showSaveFilePicker()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle zeigt einen Dateiauswahldialog, der es einem Benutzer ermöglicht, eine Datei zu speichern. Entweder durch Auswahl einer vorhandenen Datei oder durch Eingabe eines Namens für eine neue Datei.

## Syntax

```js-nolint
showSaveFilePicker()
```

### Parameter

- `options` {{Optional_Inline}}

  - : Ein Objekt, das Optionen enthält, die wie folgt sind:

    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Standardmäßig sollte der Dateiauswahldialog eine Option enthalten, um keine Dateitypfilter anzuwenden (initiiert mit der unten angegebenen Typoption). Wenn diese Option auf `true` gesetzt wird, ist diese Option _nicht_ verfügbar.
    - `id` {{Optional_Inline}}
      - : Durch Angabe einer ID kann der Browser für verschiedene IDs unterschiedliche Verzeichnisse speichern. Wenn dieselbe ID für einen anderen Auswahldialog verwendet wird, öffnet sich dieser im selben Verzeichnis.
    - `startIn` {{Optional_Inline}}
      - : Ein `FileSystemHandle` oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"`, oder `"videos"`), in dem der Dialog geöffnet werden soll.
    - `suggestedName` {{Optional_Inline}}
      - : Ein {{jsxref('String')}}. Der vorgeschlagene Dateiname.
    - `types` {{Optional_Inline}}

      - : Ein {{jsxref('Array')}} der erlaubten Dateitypen zum Speichern. Jedes Element ist ein Objekt mit den folgenden Optionen:

        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie der erlaubten Dateitypen. Standardmäßig ein leerer String.
        - `accept`
          - : Ein {{jsxref('Object')}} mit den Schlüsseln, die auf den [MIME-Typ](/de/docs/Web/HTTP/MIME_types/Common_types) gesetzt sind, und deren Werte ein {{jsxref('Array')}} von Dateierweiterungen enthalten (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}} dessen Erfüllungshandler ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer das Dateiauswahldialogfeld schließt, ohne eine Datei auszuwählen oder einzugeben, oder wenn der Benutzeragent die ausgewählten Dateien als zu sensibel oder gefährlich erachtet.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder nicht über eine Benutzerinteraktion wie einen Button-Druck aufgerufen wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn Akzeptanztypen nicht verarbeitet werden können, was passieren kann, wenn:
    - Ein beliebiger Schlüssel-String der `accept`-Optionen eines Elements in `types`-Optionen keinen gültigen MIME-Typ analysieren kann.
    - Ein beliebiger Wert-String der `accept`-Optionen eines Elements in `types`-Optionen ungültig ist, z.B. wenn er nicht mit `.` beginnt und mit `.` endet oder wenn er ungültige Codepunkte enthält und seine Länge mehr als 16 beträgt.
    - Die `types`-Optionen leer sind und die `excludeAcceptAllOption`-Option auf `true` gesetzt ist.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Die folgende Funktion zeigt einen Dateiauswahldialog, bei dem Textdateien zur Auswahl hervorgehoben sind.

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
- [The File System Access API: Vereinfachung des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

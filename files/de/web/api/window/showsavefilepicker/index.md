---
title: "Fenster: showSaveFilePicker()-Methode"
short-title: showSaveFilePicker()
slug: Web/API/Window/showSaveFilePicker
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`showSaveFilePicker()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle zeigt einen Dateiauswahldialog an, der es einem Benutzer ermöglicht, eine Datei zu speichern. Entweder durch Auswahl einer vorhandenen Datei oder durch Eingabe eines Namens für eine neue Datei.

## Syntax

```js-nolint
showSaveFilePicker()
```

### Parameter

- `options` {{Optional_Inline}}

  - : Ein Objekt, das Optionen enthält, wie folgt:

    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Standardmäßig sollte der Auswahldialog eine Option enthalten, um keine Dateityptfilter anzuwenden (ausgelöst mit der unten angegebenen Typ-Option). Wenn diese Option auf `true` gesetzt ist, ist diese Option _nicht_ verfügbar.
    - `id` {{Optional_Inline}}
      - : Durch Angabe einer ID kann sich der Browser verschiedene Verzeichnisse für verschiedene IDs merken. Wenn für einen anderen Auswahldialog dieselbe ID verwendet wird, öffnet dieser sich im selben Verzeichnis.
    - `startIn` {{Optional_Inline}}
      - : Ein [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"`, oder `"videos"`) zum Öffnen des Dialogs.
    - `suggestedName` {{Optional_Inline}}
      - : Ein {{jsxref('String')}}. Der vorgeschlagene Dateiname.
    - `types` {{Optional_Inline}}

      - : Ein {{jsxref('Array')}} der zulässigen Dateitypen zum Speichern. Jedes Element ist ein Objekt mit den folgenden Optionen:

        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie der zulässigen Dateitypen. Standardmäßig ein leerer String.
        - `accept`
          - : Ein {{jsxref('Object')}} mit Schlüsseln, die auf den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) gesetzt sind und den Werten eines {{jsxref('Array')}} von Dateierweiterungen (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüller-Handler ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt erhält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer den Dateiauswahldialog schließt, ohne eine Datei auszuwählen oder einzugeben, oder wenn der Benutzeragent ausgewählte Dateien als zu sensibel oder gefährlich erachtet.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder er nicht durch eine Benutzerinteraktion wie einem Tastendruck ausgelöst wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn akzeptierte Typen nicht verarbeitet werden können, was passieren kann, wenn:
    - Ein Schlüsselstring der `accept`-Optionen eines Elements in den `types`-Optionen keinen gültigen MIME-Typ parsen kann.
    - Ein Wertstring(s) der `accept`-Optionen eines Elements in den `types`-Optionen ungültig ist, z.B. wenn er nicht mit `.` beginnt und mit `.` endet, oder wenn er ungültige Codepunkte enthält und seine Länge mehr als 16 beträgt.
    - Die `types`-Optionen leer sind und die `excludeAcceptAllOption`-Optionen `true` ist.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Die folgende Funktion zeigt einen Dateiauswahldialog, in dem Textdateien zur Auswahl hervorgehoben sind.

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

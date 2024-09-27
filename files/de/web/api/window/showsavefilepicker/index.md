---
title: "Window: showSaveFilePicker()-Methode"
short-title: showSaveFilePicker()
slug: Web/API/Window/showSaveFilePicker
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`showSaveFilePicker()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle zeigt einen Dateiauswahldialog an, der es einem Benutzer ermöglicht, eine Datei zu speichern. Entweder durch Auswählen einer vorhandenen Datei oder durch Eingeben eines Namens für eine neue Datei.

## Syntax

```js-nolint
showSaveFilePicker()
```

### Parameter

- `options` {{Optional_Inline}}

  - : Ein Objekt, das Optionen enthält, die wie folgt sind:

    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist. Standardmäßig sollte der Auswahldialog die Möglichkeit bieten, keine Dateitypfilter anzuwenden (angestoßen durch die Typoption unten). Wenn diese Option auf `true` gesetzt wird, ist diese Möglichkeit _nicht_ verfügbar.
    - `id` {{Optional_Inline}}
      - : Durch die Angabe einer ID kann sich der Browser verschiedene Verzeichnisse für verschiedene IDs merken. Wenn dieselbe ID für einen anderen Auswahldialog verwendet wird, öffnet sich der Dialog im selben Verzeichnis.
    - `startIn` {{Optional_Inline}}
      - : Ein `FileSystemHandle` oder ein bekanntes Verzeichnis (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"`, oder `"videos"`) in dem der Dialog geöffnet werden soll.
    - `suggestedName` {{Optional_Inline}}
      - : Ein {{jsxref('String')}}. Der vorgeschlagene Dateiname.
    - `types` {{Optional_Inline}}

      - : Ein {{jsxref('Array')}} der erlaubten Dateitypen zum Speichern. Jedes Element ist ein Objekt mit den folgenden Optionen:

        - `description` {{Optional_Inline}}
          - : Eine optionale Beschreibung der Kategorie von erlaubten Dateitypen. Standard ist ein leerer String.
        - `accept`
          - : Ein {{jsxref('Object')}} mit den als Schlüssel gesetzten [MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) und den Werten als {{jsxref('Array')}} von Dateiendungen (siehe unten für ein Beispiel).

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungs-Handler ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Objekt empfängt.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer den Dateiauswahldialog schließt, ohne eine Datei auszuwählen oder einzugeben, oder wenn das Benutzeragent feststellt, dass ausgewählte Dateien zu sensibel oder gefährlich sind.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) blockiert wurde oder er nicht durch eine Benutzerinteraktion wie einen Tastendruck initiiert wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn akzeptierte Typen nicht verarbeitet werden können, was passieren kann, wenn:
    - Jeder Schlüsselstring der `accept`-Optionen eines Elements in den `types`-Optionen keinen gültigen MIME-Typ analysieren kann.
    - Jeder Wertstring(s) der `accept`-Optionen eines Elements in den `types`-Optionen ungültig ist, z.B. wenn er nicht mit `.` beginnt und wenn er mit `.` endet, oder wenn er ungültige Codepunkte enthält und seine Länge mehr als 16 beträgt.
    - Die `types`-Optionen leer sind und die `excludeAcceptAllOption`-Optionen `true` ist.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Die folgende Funktion zeigt einen Dateiauswahldialog an, bei dem Textdateien zur Auswahl hervorgehoben werden.

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

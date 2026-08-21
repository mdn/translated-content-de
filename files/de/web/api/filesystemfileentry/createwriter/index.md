---
title: "FileSystemFileEntry: Methode createWriter()"
short-title: createWriter()
slug: Web/API/FileSystemFileEntry/createWriter
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("File and Directories Entries API")}}{{Non-standard_header}}

Die Methode **`createWriter()`** des [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Interfaces gibt ein [`FileWriter`](/de/docs/Web/API/FileWriter)-Objekt zurück, das verwendet werden kann, um Daten in die durch den Verzeichniseintrag dargestellte Datei zu schreiben.

## Syntax

```js-nolint
createWriter(successCallback)
createWriter(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Callback-Funktion, die aufgerufen wird, wenn der [`FileWriter`](/de/docs/Web/API/FileWriter) erfolgreich erstellt wurde; der `FileWriter` wird als einziger Parameter an den Callback übergeben.
- `errorCallback` {{optional_inline}}
  - : Falls angegeben, muss dies eine Methode sein, die aufgerufen wird, wenn ein Fehler auftritt, während versucht wird, den [`FileWriter`](/de/docs/Web/API/FileWriter) zu erstellen. Dieser Callback erhält ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt als Eingabe, das den Fehler beschreibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel definiert eine Methode, `writeToFileEntry()`, die einen Textstring in die Datei ausgibt, die dem übergebenen Verzeichniseintrag entspricht.

```js
function writeToFileEntry(entry, text) {
  entry.createWriter(
    (fileWriter) => {
      let data = Blob([text], { type: "text/plain" });

      fileWriter.write(data);
    },
    (error) => {
      /* do whatever to handle the error */
    },
  );
}
```

Der Erfolgscallback für den `createWriter()`-Aufruf nimmt den übergebenen Text und erstellt ein neues [`Blob`](/de/docs/Web/API/Blob)-Objekt vom Typ `text/plain`, das den übergebenen Text enthält. Dieses `Blob` wird dann an das [`FileWriter`](/de/docs/Web/API/FileWriter)-Objekt ausgegeben, um in die Datei geschrieben zu werden.

## Spezifikationen

Dieses Feature gehört mittlerweile zu keiner Spezifikation mehr. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)

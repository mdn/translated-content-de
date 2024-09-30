---
title: "FileSystemFileEntry: createWriter() Methode"
short-title: createWriter()
slug: Web/API/FileSystemFileEntry/createWriter
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("File and Directories Entries API")}}{{deprecated_header}}{{Non-standard_header}}

Die Methode **`createWriter()`** des [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) Interfaces gibt ein [`FileWriter`](/de/docs/Web/API/FileWriter) Objekt zurück, das verwendet werden kann, um Daten in die Datei zu schreiben, die durch den Verzeichniseintrag repräsentiert wird.

## Syntax

```js-nolint
createWriter(successCallback)
createWriter(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Callback-Funktion, die aufgerufen wird, wenn der [`FileWriter`](/de/docs/Web/API/FileWriter) erfolgreich erstellt wurde; der `FileWriter` wird als einziger Parameter an den Callback übergeben.
- `errorCallback` {{optional_inline}}
  - : Falls vorhanden, muss dies eine Methode sein, die aufgerufen wird, wenn ein Fehler beim Versuch, den [`FileWriter`](/de/docs/Web/API/FileWriter) zu erstellen, auftritt. Dieser Callback erhält als Eingabe ein [`FileError`](/de/docs/Web/API/FileError) Objekt, das den Fehler beschreibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel legt eine Methode `writeToFileEntry()` fest, die einen Textstring in die Datei ausgibt, die dem übergebenen Verzeichniseintrag entspricht.

```js
function writeToFileEntry(entry, text) {
  entry.createWriter(
    (fileWriter) => {
      let data = Blob([text], { type: "text/plain" });

      fileWriter.write(data);
    },
    (fileError) => {
      /* do whatever to handle the error */
    },
  );
}
```

Der Erfolgscallback für den `createWriter()` Aufruf nimmt den übergebenen Text und erstellt ein neues [`Blob`](/de/docs/Web/API/Blob) Objekt vom Typ `text/plain`, das den übergebenen Text enthält. Dieses Blob wird dann an das [`FileWriter`](/de/docs/Web/API/FileWriter) Objekt ausgegeben, um in die Datei geschrieben zu werden.

## Spezifikationen

Diese Funktion ist nicht mehr Teil einer Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)

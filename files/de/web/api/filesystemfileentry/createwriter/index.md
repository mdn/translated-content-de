---
title: "FileSystemFileEntry: Methode createWriter()"
short-title: createWriter()
slug: Web/API/FileSystemFileEntry/createWriter
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("File and Directories Entries API")}}{{deprecated_header}}{{Non-standard_header}}

Die Methode **`createWriter()`** des [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Interfaces gibt ein [`FileWriter`](/de/docs/Web/API/FileWriter)-Objekt zurück, das verwendet werden kann, um Daten in die durch den Verzeichniseintrag repräsentierte Datei zu schreiben.

## Syntax

```js-nolint
createWriter(successCallback)
createWriter(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Callback-Funktion, die aufgerufen wird, wenn der [`FileWriter`](/de/docs/Web/API/FileWriter) erfolgreich erstellt wurde; der `FileWriter` wird als einziger Parameter an den Callback übergeben.
- `errorCallback` {{optional_inline}}
  - : Falls angegeben, muss dies eine Methode sein, die aufgerufen wird, wenn beim Versuch, den [`FileWriter`](/de/docs/Web/API/FileWriter) zu erstellen, ein Fehler auftritt. Dieser Callback erhält ein [`FileError`](/de/docs/Web/API/FileError)-Objekt, das den Fehler beschreibt, als Eingabe.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel definiert eine Methode, `writeToFileEntry()`, die eine Textzeichenfolge in die Datei ausgibt, die dem übergebenen Verzeichniseintrag entspricht.

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

Der Erfolgscallback für den `createWriter()`-Aufruf nimmt den übergebenen Text und erstellt ein neues [`Blob`](/de/docs/Web/API/Blob)-Objekt vom Typ `text/plain`, das den übergebenen Text enthält. Dieses Blob wird dann dem [`FileWriter`](/de/docs/Web/API/FileWriter)-Objekt ausgegeben, um in die Datei geschrieben zu werden.

## Spezifikationen

Diese Funktion ist nicht mehr Teil einer Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)

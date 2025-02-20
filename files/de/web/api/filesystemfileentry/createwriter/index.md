---
title: "FileSystemFileEntry: Methode createWriter()"
short-title: createWriter()
slug: Web/API/FileSystemFileEntry/createWriter
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directories Entries API")}}{{deprecated_header}}{{Non-standard_header}}

Die Methode **`createWriter()`** der [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Schnittstelle gibt ein [`FileWriter`](/de/docs/Web/API/FileWriter)-Objekt zurück, das verwendet werden kann, um Daten in die Datei zu schreiben, die durch den Verzeichniseintrag repräsentiert wird.

## Syntax

```js-nolint
createWriter(successCallback)
createWriter(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Callback-Funktion, die aufgerufen wird, wenn der [`FileWriter`](/de/docs/Web/API/FileWriter) erfolgreich erstellt wurde; der `FileWriter` wird als einziger Parameter in den Callback übergeben.
- `errorCallback` {{optional_inline}}
  - : Falls angegeben, muss dies eine Methode sein, die aufgerufen wird, wenn ein Fehler beim Versuch auftritt, den [`FileWriter`](/de/docs/Web/API/FileWriter) zu erstellen. Dieser Callback erhält als Eingabe ein [`FileError`](/de/docs/Web/API/FileError)-Objekt, das den Fehler beschreibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel legt eine Methode `writeToFileEntry()` fest, die eine Textzeichenfolge in die Datei ausgibt, die dem übergebenen Verzeichniseintrag entspricht.

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

Der Erfolgscallback für den `createWriter()`-Aufruf nimmt den übergebenen Text und erstellt ein neues [`Blob`](/de/docs/Web/API/Blob)-Objekt vom Typ `text/plain`, das den übergebenen Text enthält. Dieses Blob wird dann an das [`FileWriter`](/de/docs/Web/API/FileWriter)-Objekt ausgegeben, um in die Datei geschrieben zu werden.

## Spezifikationen

Dieses Feature ist nicht mehr Teil einer Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)

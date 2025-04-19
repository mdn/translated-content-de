---
title: "FileSystemFileEntry: createWriter()-Methode"
short-title: createWriter()
slug: Web/API/FileSystemFileEntry/createWriter
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("File and Directories Entries API")}}{{deprecated_header}}{{Non-standard_header}}

Die Methode **`createWriter()`** des [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Interfaces gibt ein [`FileWriter`](/de/docs/Web/API/FileWriter)-Objekt zurück, das verwendet werden kann, um Daten in die Datei zu schreiben, die vom Verzeichniseintrag repräsentiert wird.

## Syntax

```js-nolint
createWriter(successCallback)
createWriter(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Callback-Funktion, die aufgerufen wird, wenn der [`FileWriter`](/de/docs/Web/API/FileWriter) erfolgreich erstellt wurde; der `FileWriter` wird als einziger Parameter in das Callback übergeben.
- `errorCallback` {{optional_inline}}
  - : Falls angegeben, muss dies eine Methode sein, die aufgerufen wird, wenn ein Fehler beim Versuch auftritt, den [`FileWriter`](/de/docs/Web/API/FileWriter) zu erstellen. Dieses Callback erhält als Eingabe ein [`DOMError`](/de/docs/Web/API/DOMError)-Objekt, das den Fehler beschreibt.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

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

Das Erfolgscallback für den Aufruf von `createWriter()` nimmt den übergebenen Text und erstellt ein neues [`Blob`](/de/docs/Web/API/Blob)-Objekt vom Typ `text/plain`, das den übergebenen Text enthält. Dieses Blob wird dann an das [`FileWriter`](/de/docs/Web/API/FileWriter)-Objekt ausgegeben, um in die Datei geschrieben zu werden.

## Spezifikationen

Dieses Feature ist nicht mehr Teil einer Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)

---
title: "FileSystemFileEntry: createWriter() Methode"
short-title: createWriter()
slug: Web/API/FileSystemFileEntry/createWriter
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("File and Directories Entries API")}}{{deprecated_header}}{{Non-standard_header}}

Die Methode **`createWriter()`** der Schnittstelle [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) gibt ein [`FileWriter`](/de/docs/Web/API/FileWriter)-Objekt zurück, das verwendet werden kann, um Daten in die Datei zu schreiben, die durch den Verzeichniseintrag repräsentiert wird.

## Syntax

```js-nolint
createWriter(successCallback)
createWriter(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Rückruffunktion, die aufgerufen wird, wenn der [`FileWriter`](/de/docs/Web/API/FileWriter) erfolgreich erstellt wurde; der `FileWriter` wird als einziger Parameter in den Rückruf übergeben.
- `errorCallback` {{optional_inline}}
  - : Wenn angegeben, muss dies eine Methode sein, die aufgerufen wird, wenn ein Fehler bei dem Versuch auftritt, den [`FileWriter`](/de/docs/Web/API/FileWriter) zu erstellen. Dieser Rückruf erhält ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt, das den Fehler beschreibt, als Eingabe.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel definiert eine Methode, `writeToFileEntry()`, die eine Textzeichenkette in die Datei ausgibt, die dem übergebenen Verzeichniseintrag entspricht.

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

Der Erfolgs-Rückruf für den `createWriter()`-Aufruf nimmt den übergebenen Text und erstellt ein neues [`Blob`](/de/docs/Web/API/Blob)-Objekt vom Typ `text/plain`, das den übergebenen Text enthält. Dieses Blob wird dann an das [`FileWriter`](/de/docs/Web/API/FileWriter)-Objekt ausgegeben, um in die Datei geschrieben zu werden.

## Spezifikationen

Diese Funktion ist nicht mehr Teil einer Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)

---
title: "FileSystemFileEntry: file() Methode"
short-title: file()
slug: Web/API/FileSystemFileEntry/file
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}

Die Methode **`file()`** des [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Interfaces gibt ein [`File`](/de/docs/Web/API/File)-Objekt zurück, das verwendet werden kann, um Daten aus der durch den Verzeichniseintrag dargestellten Datei zu lesen.

## Syntax

```js-nolint
file(successCallback)
file(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Callback-Funktion, die aufgerufen wird, wenn die [`File`](/de/docs/Web/API/File) erfolgreich erstellt wurde; die `File` wird der Callback-Funktion als einziger Parameter übergeben.
- `errorCallback` {{optional_inline}}
  - : Falls angegeben, muss dies eine Methode sein, die aufgerufen wird, wenn ein Fehler beim Versuch, die [`File`](/de/docs/Web/API/File) zu erstellen, auftritt. Dieser Callback erhält ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt als Eingabe, welches den Fehler beschreibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel etabliert eine Methode `readFile()`, die eine Textdatei liest und eine angegebene Callback-Funktion mit dem empfangenen Text (als Zeichenkette) aufruft, sobald das Lesen abgeschlossen ist. Falls ein Fehler auftritt, wird eine angegebene (optionale) Fehler-Callback-Funktion aufgerufen.

```js
function readFile(entry, successCallback, errorCallback) {
  entry.file((file) => {
    let reader = new FileReader();

    reader.onload = () => {
      successCallback(reader.result);
    };

    reader.onerror = () => {
      errorCallback(reader.error);
    };

    reader.readAsText(file);
  }, errorCallback);
}
```

Diese Funktion ruft `file()` auf und spezifiziert als Erfolgs-Callback eine Methode, die anschließend einen [`FileReader`](/de/docs/Web/API/FileReader) verwendet, um die Datei als Text zu lesen. Der [`load`](/de/docs/Web/API/FileReader/load_event)-Ereignishandler des FileReaders wird eingerichtet, um die geladene Zeichenkette an den bei Aufruf der `readFile()`-Methode angegebenen `successCallback` zu liefern; ebenso wird sein [`error`](/de/docs/Web/API/FileReader/error_event)-Handler eingerichtet, um den angegebenen `errorCallback` aufzurufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)

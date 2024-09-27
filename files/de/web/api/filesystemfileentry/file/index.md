---
title: "FileSystemFileEntry: file()-Methode"
short-title: file()
slug: Web/API/FileSystemFileEntry/file
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File and Directory Entries API")}}

Die Methode **`file()`** des [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Interfaces gibt ein [`File`](/de/docs/Web/API/File)-Objekt zurück, das verwendet werden kann, um Daten aus der Datei zu lesen, die durch den Verzeichniseintrag repräsentiert wird.

## Syntax

```js-nolint
file(successCallback)
file(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Callback-Funktion, die aufgerufen wird, wenn die [`File`](/de/docs/Web/API/File) erfolgreich erstellt wurde; die `File` wird als einziger Parameter an den Callback übergeben.
- `errorCallback` {{optional_inline}}
  - : Wenn angegeben, muss dies eine Methode sein, die aufgerufen wird, wenn beim Versuch, die [`File`](/de/docs/Web/API/File) zu erstellen, ein Fehler auftritt. Dieser Callback erhält ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt, das den Fehler beschreibt, als Eingabe.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel definiert eine Methode `readFile()`, die eine Textdatei liest und eine angegebene Callback-Funktion mit dem empfangenen Text (in einem String) aufruft, sobald das Lesen abgeschlossen ist. Wenn ein Fehler auftritt, wird ein angegebener (optional) Fehler-Callback aufgerufen.

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

Diese Funktion ruft `file()` auf und gibt als Erfolgscallback eine Methode an, die dann einen [`FileReader`](/de/docs/Web/API/FileReader) verwendet, um die Datei als Text zu lesen. Der Event-Handler für das [`load`](/de/docs/Web/API/FileReader/load_event)-Ereignis des FileReaders ist so eingerichtet, dass er den geladenen String an den bei Aufruf der Methode `readFile()` angegebenen `successCallback` übergibt; ebenso wird sein [`error`](/de/docs/Web/API/FileReader/error_event)-Handler so eingerichtet, dass er den angegebenen `errorCallback` aufruft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)

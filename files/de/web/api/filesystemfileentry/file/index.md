---
title: "FileSystemFileEntry: file() Methode"
short-title: file()
slug: Web/API/FileSystemFileEntry/file
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File and Directory Entries API")}}

Die **`file()`**-Methode des [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Interfaces gibt ein [`File`](/de/docs/Web/API/File)-Objekt zurück, das verwendet werden kann, um Daten von der durch den Verzeichniseintrag repräsentierten Datei zu lesen.

## Syntax

```js-nolint
file(successCallback)
file(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Callback-Funktion, die aufgerufen wird, wenn die [`File`](/de/docs/Web/API/File) erfolgreich erstellt wurde; die `File` wird als einziger Parameter an das Callback übergeben.
- `errorCallback` {{optional_inline}}
  - : Falls angegeben, muss diese Methode aufgerufen werden, wenn ein Fehler beim Erstellen der [`File`](/de/docs/Web/API/File) auftritt. Dieses Callback erhält als Eingabe ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt, das den Fehler beschreibt.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel definiert eine Methode `readFile()`, die eine Textdatei liest und eine spezifizierte Callback-Funktion mit dem empfangenen Text (als Zeichenkette) aufruft, sobald das Lesen abgeschlossen ist. Wenn ein Fehler auftritt, wird ein spezifiziertes (optionales) Fehler-Callback aufgerufen.

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

Diese Funktion ruft `file()` auf und gibt als Erfolgs-Callback eine Methode an, die einen [`FileReader`](/de/docs/Web/API/FileReader) verwendet, um die Datei als Text zu lesen. Der [`load`](/de/docs/Web/API/FileReader/load_event)-Ereignishandler des FileReaders ist so eingerichtet, dass er die geladene Zeichenkette an das bei der Methode `readFile()` angegebene `successCallback` liefert; ebenso ist der [`error`](/de/docs/Web/API/FileReader/error_event)-Handler so eingerichtet, dass er das angegebene `errorCallback` aufruft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)

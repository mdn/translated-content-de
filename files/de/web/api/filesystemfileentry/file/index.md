---
title: "FileSystemFileEntry: file()-Methode"
short-title: file()
slug: Web/API/FileSystemFileEntry/file
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File and Directory Entries API")}}

Die Methode **`file()`** der {{domxref("FileSystemFileEntry")}}-Schnittstelle gibt ein {{domxref("File")}}-Objekt zurück, das verwendet werden kann, um Daten aus der durch den Verzeichniseintrag dargestellten Datei zu lesen.

## Syntax

```js-nolint
file(successCallback)
file(successCallback, errorCallback)
```

### Parameter

- `successCallback`
  - : Eine Callback-Funktion, die aufgerufen wird, wenn die {{domxref("File")}} erfolgreich erstellt wurde; die `File` wird als einziger Parameter an das Callback übergeben.
- `errorCallback` {{optional_inline}}
  - : Wenn bereitgestellt, muss dies eine Methode sein, die aufgerufen wird, wenn ein Fehler beim Versuch auftritt, die {{domxref("File")}} zu erstellen. Dieses Callback erhält als Eingabe ein {{domxref("DOMException")}}-Objekt, das den Fehler beschreibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel definiert eine Methode `readFile()`, die eine Textdatei liest und eine angegebene Callback-Funktion mit dem empfangenen Text (in einem String) aufruft, sobald das Lesen abgeschlossen ist. Wenn ein Fehler auftritt, wird ein angegebenes (optionales) Fehler-Callback aufgerufen.

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

Diese Funktion ruft `file()` auf und gibt als Erfolgscallback eine Methode an, die einen {{domxref("FileReader")}} verwendet, um die Datei als Text zu lesen. Der {{domxref("FileReader/load_event", "load")}}-Ereignishandler des FileReader ist eingerichtet, um den geladenen String an das `successCallback` zu liefern, das bei Aufruf der `readFile()`-Methode angegeben wurde; ebenso ist sein {{domxref("FileReader/error_event", "error")}}-Handler so eingerichtet, dass er das angegebene `errorCallback` aufruft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)

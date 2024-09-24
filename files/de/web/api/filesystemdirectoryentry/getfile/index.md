---
title: "FileSystemDirectoryEntry: getFile() Methode"
short-title: getFile()
slug: Web/API/FileSystemDirectoryEntry/getFile
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("File and Directory Entries API")}}

Die **`getFile()`**-Methode der Schnittstelle {{domxref("FileSystemDirectoryEntry")}} gibt ein {{domxref("FileSystemFileEntry")}}-Objekt zurück, das einer Datei entspricht, die sich irgendwo im Verzeichnisbaum befindet, der an dem aufgerufenen Verzeichnis verwurzelt ist.

## Syntax

```js-nolint
getFile()
getFile(path)
getFile(path, options)
getFile(path, options, successCallback)
getFile(path, options, successCallback, errorCallback)
```

### Parameter

- `path` {{optional_inline}}
  - : Ein String, der den Pfad relativ zu dem Verzeichnis spezifiziert, auf dem die Methode aufgerufen wird, der beschreibt, welcher Eintrag der Datei zurückgegeben werden soll.
- `options` {{optional_inline}}
  - : Ein Objekt, mit dem Sie angeben können, ob der Eintrag erstellt werden soll, wenn er fehlt und ob es ein Fehler ist, wenn die Datei bereits existiert. Diese Optionen sind derzeit in Web-Kontexten nicht nützlich. Weitere Details finden Sie im Abschnitt [options parameter](#options_parameter).
- `successCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, wenn das {{domxref("FileSystemFileEntry")}} erstellt wurde. Die Methode erhält ein einzelnes Parameter: das `FileSystemFileEntry`-Objekt, das die betreffende Datei darstellt.
- `errorCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, wenn ein Fehler auftritt. Sie erhält als einziges Eingabeparameter ein {{domxref("DOMException")}}-Objekt, das den aufgetretenen Fehler beschreibt.

#### `options` parameter

Das `options`-Parameterobjekt akzeptiert die folgenden Parameter:

- `create` {{optional_inline}}
  - : Wenn diese Eigenschaft `true` ist und die angeforderte Datei nicht existiert, sollte der User Agent sie erstellen. Der Standardwert ist `false`. Das übergeordnete Verzeichnis muss bereits existieren.
- `exclusive` {{optional_inline}}
  - : Wenn `true` und die `create`-Option ebenfalls `true` ist, darf die Datei vor dem Aufruf nicht existieren. Stattdessen muss es möglich sein, sie neu zum Zeitpunkt des Aufrufs zu erstellen. Der Standardwert ist `false`. Dieses Parameter wird ignoriert, wenn `create` `false` ist.

Die folgende Tabelle beschreibt das Ergebnis jeder möglichen Kombination dieser Flags abhängig davon, ob der Zielpfad bereits existiert oder nicht.

| `create` option | `exclusive` option | Path-Bedingung                | Ergebnis                                                                                                                                    |
| --------------- | ------------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`         | _Ignoriert_        | Pfad existiert und ist eine Datei | Der `successCallback` wird mit einem {{domxref("FileSystemFileEntry")}} aufgerufen.                                                               |
| `false`         | _Ignoriert_        | Pfad existiert, ist aber ein Verzeichnis | Der `errorCallback` wird mit einem entsprechenden Fehlercode (falls der Callback bereitgestellt wurde) aufgerufen.                             |
| `true`          | `false`            | Pfad existiert                    | Die bestehende Datei wird entfernt und durch eine neue ersetzt, dann wird der `successCallback` mit einem {{domxref("FileSystemFileEntry")}} aufgerufen. |
| `true`          | `false`            | Pfad existiert nicht             | Die Datei wird erstellt, dann wird ein {{domxref("FileSystemFileEntry")}} an den `successCallback` übergeben.                                  |
| `true`          | `true`             | Pfad existiert                    | Der `errorCallback` wird mit einem entsprechenden Fehler, wie `FileError.PATH_EXISTS_ERR`, aufgerufen.                                                 |
| `true`          | `true`             | Pfad existiert nicht             | Die Datei wird erstellt, dann wird ein {{domxref("FileSystemFileEntry")}} an den `successCallback` übergeben.                                  |

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die `create`-Option nicht angegeben wurde (oder als `false` angegeben wurde), und die Datei nicht existiert.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Anfrage, auf die Datei zuzugreifen, aus Sicherheitsgründen verweigert wurde.
- `TypeMismatchError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene Pfad keine Datei ist; es ist wahrscheinlich ein Verzeichnis, könnte aber eine nicht unterstützte Dateideskriptor wie eine Pipe sein; dies hängt in gewissem Maße vom User Agent ab.

## Beispiele

In diesem Beispiel wird eine Funktion vorgestellt, deren Aufgabe es ist, in einem Anwendungsverzeichnis des Benutzers eine JSON-Datei zu finden, die ein Benutzerdictionary für eine bestimmte Sprache enthält, und dann dieses Dictionary zu laden.

```js
let dictionary = null;

function loadDictionaryForLanguage(appDataDirEntry, lang) {
  dictionary = null;

  appDataDirEntry.getDirectory("Dictionaries", {}, (dirEntry) => {
    dirEntry.getFile(`${lang}-dict.json`, {}, (fileEntry) => {
      fileEntry.file((dictFile) => {
        let reader = new FileReader();

        reader.addEventListener("loadend", () => {
          dictionary = JSON.parse(reader.result);
        });

        reader.readAsText(dictFile);
      });
    });
  });
}
```

Die `loadDictionaryForLanguage()`-Funktion beginnt damit, `getDirectory()` zu verwenden, um das {{domxref("FileSystemDirectoryEntry")}}-Objekt zu erhalten, das einen Unterordner namens "Dictionaries" darstellt, der sich im angegebenen App-Datenverzeichnis befindet. Der Erfolgs-Callback dafür übernimmt das resultierende Verzeichniseintragobjekt und ruft `getFile()` auf, um ein {{domxref("FileSystemFileEntry")}}-Objekt zu erhalten, das die Dictionary-Datei darstellt; der Erfolgs-Callback dafür erstellt wiederum einen neuen {{domxref("FileReader")}} und verwendet ihn, um den Inhalt der Datei zu laden. Wenn dieser erfolgreich geladen wurde (was durch das Auslösen des {{domxref("FileReader/loadend_event", "loadend")}}-Events angezeigt wird), wird der geladene Text an {{jsxref("JSON.parse()")}} übergeben, um in ein JavaScript-Objekt umgewandelt zu werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemFileEntry")}}

---
title: "FileSystemDirectoryEntry: Methode getFile()"
short-title: getFile()
slug: Web/API/FileSystemDirectoryEntry/getFile
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("File and Directory Entries API")}}

Die Methode **`getFile()`** des [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Interfaces gibt ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekt zurück, das einer Datei entspricht, die sich irgendwo im Verzeichnisbaum befindet, der am Verzeichnis verwurzelt ist, auf dem die Methode aufgerufen wird.

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
  - : Ein String, der den Pfad spezifiziert, relativ zu dem Verzeichnis, auf dem die Methode aufgerufen wird und beschreibt, welcher Eintrag der Datei zurückgegeben werden soll.
- `options` {{optional_inline}}
  - : Ein Objekt, das es Ihnen ermöglicht, anzugeben, ob der Eintrag erstellt werden soll, wenn er fehlt, und ob es ein Fehler ist, wenn die Datei bereits existiert. Diese Optionen sind in Web-Kontexten derzeit nicht nützlich. Siehe den Abschnitt [Optionsparameter](#options_parameter) für weitere Details.
- `successCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, sobald das [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) erstellt wurde. Die Methode erhält einen einzelnen Parameter: das `FileSystemFileEntry`-Objekt, das die betreffende Datei darstellt.
- `errorCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, wenn ein Fehler auftritt. Sie erhält als einzigen Eingabeparameter ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt, das den aufgetretenen Fehler beschreibt.

#### `options` Parameter

Das `options`-Parameterobjekt akzeptiert die folgenden Parameter:

- `create` {{optional_inline}}
  - : Wenn diese Eigenschaft `true` ist und die angeforderte Datei nicht existiert, sollte der User-Agent sie erstellen. Der Standardwert ist `false`. Das übergeordnete Verzeichnis muss bereits existieren.
- `exclusive` {{optional_inline}}
  - : Wenn `true` und die `create`-Option ebenfalls `true` ist, darf die Datei vor dem Ausführen des Aufrufs nicht existieren. Stattdessen muss es möglich sein, sie zum Zeitpunkt des Aufrufs neu zu erstellen. Der Standardwert ist `false`. Dieser Parameter wird ignoriert, wenn `create` `false` ist.

Die folgende Tabelle beschreibt das Ergebnis jeder möglichen Kombination dieser Flags, je nachdem, ob der Zielpfad bereits existiert oder nicht.

| `create` Option | `exclusive` Option | Pfadbedingung                            | Ergebnis                                                                                                                                                                            |
| --------------- | ------------------ | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`         | _Ignoriert_        | Pfad existiert und ist eine Datei        | Der `successCallback` wird mit einem [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) aufgerufen.                                                                      |
| `false`         | _Ignoriert_        | Pfad existiert, ist aber ein Verzeichnis | Der `errorCallback` wird mit einem entsprechenden Fehlercode aufgerufen (wenn der Callback bereitgestellt wurde).                                                                   |
| `true`          | `false`            | Pfad existiert                           | Die vorhandene Datei wird entfernt und durch eine neue ersetzt, dann wird der `successCallback` mit einem [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) aufgerufen. |
| `true`          | `false`            | Pfad existiert nicht                     | Die Datei wird erstellt, dann wird ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) an den `successCallback` übergeben.                                            |
| `true`          | `true`             | Pfad existiert                           | Der `errorCallback` wird mit einem entsprechenden Fehler, wie z.B. `FileError.PATH_EXISTS_ERR`, aufgerufen.                                                                         |
| `true`          | `true`             | Pfad existiert nicht                     | Die Datei wird erstellt, dann wird ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) an den `successCallback` übergeben.                                            |

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `create`-Option nicht angegeben wurde (oder als `false` angegeben wurde) und die Datei nicht existiert.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff auf die Datei aus Sicherheitsgründen verweigert wurde.
- `TypeMismatchError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Pfad keine Datei ist; es handelt sich wahrscheinlich um ein Verzeichnis, könnte jedoch auch ein nicht unterstützter Dateizeiger wie eine Pipe sein; dies hängt in gewissem Maße vom User-Agent ab.

## Beispiele

In diesem Beispiel wird eine Funktion vorgestellt, deren Aufgabe es ist, in einem Anwendungsverzeichnis eines Benutzers eine JSON-Datei zu finden, die ein Wörterbuch für eine angegebene Sprache enthält, um dann dieses Wörterbuch zu laden.

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

Die Funktion `loadDictionaryForLanguage()` beginnt mit der Verwendung von `getDirectory()`, um das [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt zu erhalten, das einen Unterordner namens "Dictionaries" repräsentiert, der sich im angegebenen Anwendungsverzeichnis befindet. Der Erfolgscallback hierfür nimmt das resultierende Verzeichniseintrag-Objekt und ruft `getFile()` auf, um ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekt zu erhalten, das die Wörterbuchdatei repräsentiert; der Erfolgscallback hierfür erstellt dann einen neuen [`FileReader`](/de/docs/Web/API/FileReader) und verwendet ihn, um den Inhalt der Datei zu laden. Sobald dieser erfolgreich geladen wurde (wie durch das Auslösen des [`loadend`](/de/docs/Web/API/FileReader/loadend_event)-Ereignisses angezeigt), wird der geladene Text in {{jsxref("JSON.parse()")}} übergeben, um in ein JavaScript-Objekt umgewandelt zu werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)

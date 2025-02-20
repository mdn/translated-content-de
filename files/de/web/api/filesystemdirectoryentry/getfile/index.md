---
title: "FileSystemDirectoryEntry: getFile()-Methode"
short-title: getFile()
slug: Web/API/FileSystemDirectoryEntry/getFile
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}

Die Methode **`getFile()`** des [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Interfaces liefert ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekt, das einer Datei entspricht, die sich irgendwo innerhalb des Verzeichnisunterbaums befindet, der beim Verzeichnis, auf dem es aufgerufen wird, verwurzelt ist.

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
  - : Ein String, der den Pfad relativ zu dem Verzeichnis angibt, auf dem die Methode aufgerufen wird und beschreibt, welchem Datei-Eintrag zurückgegeben werden soll.
- `options` {{optional_inline}}
  - : Ein Objekt, das Ihnen ermöglicht, anzugeben, ob der Eintrag erstellt werden soll, wenn er fehlt, und ob es ein Fehler ist, wenn die Datei bereits existiert. Diese Optionen sind in Web-Kontexten derzeit nicht nützlich. Siehe den Abschnitt [options parameter](#options_parameter) für mehr Details.
- `successCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, sobald das [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) erstellt wurde. Die Methode erhält einen einzelnen Parameter: das `FileSystemFileEntry`-Objekt, das die betreffende Datei darstellt.
- `errorCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, wenn ein Fehler auftritt. Sie erhält als einzigen Eingabeparameter ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt, das den aufgetretenen Fehler beschreibt.

#### `options` parameter

Das `options`-Parameterobjekt akzeptiert die folgenden Parameter:

- `create` {{optional_inline}}
  - : Wenn diese Eigenschaft `true` ist und die angeforderte Datei nicht existiert, sollte der Benutzeragent sie erstellen. Der Standardwert ist `false`. Das übergeordnete Verzeichnis muss bereits existieren.
- `exclusive` {{optional_inline}}
  - : Wenn `true` und die `create`-Option ebenfalls `true` ist, darf die Datei vor dem Aufruf nicht existieren. Stattdessen muss sie zur Aufrufzeit neu erstellt werden können. Der Standardwert ist `false`. Dieser Parameter wird ignoriert, wenn `create` `false` ist.

Die folgende Tabelle beschreibt das Ergebnis jeder möglichen Kombination dieser Flags, abhängig davon, ob der Ziel-Dateipfad bereits existiert.

| `create` option | `exclusive` option | Path-Bedingung                           | Ergebnis                                                                                                                                                                            |
| --------------- | ------------------ | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`         | _Ignoriert_        | Pfad existiert und ist eine Datei        | Der `successCallback` wird mit einem [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) aufgerufen.                                                                      |
| `false`         | _Ignoriert_        | Pfad existiert, aber ist ein Verzeichnis | Der `errorCallback` wird mit einem entsprechenden Fehlercode (falls der Callback bereitgestellt wurde) aufgerufen.                                                                  |
| `true`          | `false`            | Pfad existiert                           | Die vorhandene Datei wird entfernt und durch eine neue ersetzt, dann wird der `successCallback` mit einem [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) aufgerufen. |
| `true`          | `false`            | Pfad existiert nicht                     | Die Datei wird erstellt, dann wird ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) an den `successCallback` übergeben.                                            |
| `true`          | `true`             | Pfad existiert                           | Der `errorCallback` wird mit einem entsprechenden Fehler wie `FileError.PATH_EXISTS_ERR` aufgerufen.                                                                                |
| `true`          | `true`             | Pfad existiert nicht                     | Die Datei wird erstellt, dann wird ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) an den `successCallback` übergeben.                                            |

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `create`-Option nicht angegeben wurde (oder als `false` angegeben wurde) und die Datei nicht existiert.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff auf die Datei aus Sicherheitsgründen verweigert wurde.
- `TypeMismatchError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Pfad keine Datei ist; es ist wahrscheinlich ein Verzeichnis, könnte aber auch ein nicht unterstützter Dateideskriptor wie eine Pipe sein; dies hängt zum Teil vom Benutzeragenten ab.

## Beispiele

In diesem Beispiel wird eine Funktion vorgestellt, deren Aufgabe es ist, eine JSON-Datei innerhalb des App-Daten-Verzeichnisses eines Benutzers zu finden, die ein Benutzerdictionary für eine bestimmte Sprache enthält, und dann dieses Dictionary zu laden.

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

Die `loadDictionaryForLanguage()`-Funktion beginnt damit, `getDirectory()` zu verwenden, um das [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt zu erhalten, das einen Unterordner namens "Dictionaries" darstellt, der im angegebenen App-Daten-Verzeichnis liegt. Der Erfolgs-Callback für diese Aktion nimmt das resultierende Verzeichniseintrag-Objekt und ruft `getFile()` auf, um ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekt zu erhalten, das die Dictionary-Datei darstellt; der Erfolgs-Callback dafür wiederum erstellt einen neuen [`FileReader`](/de/docs/Web/API/FileReader) und verwendet diesen, um den Inhalt der Datei zu laden. Wenn dieser erfolgreich geladen wurde (angezeigt durch das Auslösen des [`loadend`](/de/docs/Web/API/FileReader/loadend_event)-Ereignisses), wird der geladene Text in {{jsxref("JSON.parse()")}} übergeben, um ihn in ein JavaScript-Objekt zu rekonstruieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)

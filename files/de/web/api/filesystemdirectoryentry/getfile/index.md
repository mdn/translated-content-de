---
title: "FileSystemDirectoryEntry: getFile() Methode"
short-title: getFile()
slug: Web/API/FileSystemDirectoryEntry/getFile
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("File and Directory Entries API")}}

Die Methode **`getFile()`** des [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) Interfaces gibt ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) Objekt zurück, das einer Datei entspricht, die sich irgendwo im Verzeichnisbaum befindet, der am Verzeichnis verwurzelt ist, auf dem es aufgerufen wird.

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
  - : Ein String, der den Pfad spezifiziert, relativ zu dem Verzeichnis, auf dem die Methode aufgerufen wird, und beschreibt, welcher Dateieintrag zurückgegeben werden soll.
- `options` {{optional_inline}}
  - : Ein Objekt, das es Ihnen ermöglicht anzugeben, ob der Eintrag erstellt werden soll, falls er fehlt, und ob es ein Fehler ist, wenn die Datei bereits existiert. Diese Optionen sind derzeit in Web-Kontexten nicht nützlich. Siehe den Abschnitt [options parameter](#options_parameter) für weitere Details.
- `successCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, sobald das [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) erstellt wurde. Die Methode erhält einen einzigen Parameter: das `FileSystemFileEntry` Objekt, das die betreffende Datei repräsentiert.
- `errorCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, wenn ein Fehler auftritt. Sie erhält als einzigen Eingabeparameter ein [`DOMException`](/de/docs/Web/API/DOMException) Objekt, das den aufgetretenen Fehler beschreibt.

#### `options` Parameter

Das `options` Parameterobjekt akzeptiert die folgenden Parameter:

- `create` {{optional_inline}}
  - : Wenn diese Eigenschaft `true` ist und die angeforderte Datei nicht existiert, sollte der User Agent sie erstellen. Der Standardwert ist `false`. Das übergeordnete Verzeichnis muss bereits existieren.
- `exclusive` {{optional_inline}}
  - : Wenn `true` und die `create` Option ebenfalls `true` ist, darf die Datei vor dem Aufruf nicht existieren. Stattdessen muss es möglich sein, sie zum Zeitpunkt des Aufrufs neu zu erstellen. Der Standardwert ist `false`. Dieser Parameter wird ignoriert, wenn `create` `false` ist.

Die folgende Tabelle beschreibt das Ergebnis jeder möglichen Kombination dieser Flags in Abhängigkeit davon, ob der Ziel-Dateipfad bereits existiert oder nicht.

| `create` Option | `exclusive` Option | Pfadbedingung                            | Ergebnis                                                                                                                                                                            |
| --------------- | ------------------ | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`         | _Ignoriert_        | Pfad existiert und ist eine Datei        | Der `successCallback` wird mit einem [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) aufgerufen.                                                                      |
| `false`         | _Ignoriert_        | Pfad existiert, ist aber ein Verzeichnis | Der `errorCallback` wird mit einem passenden Fehlercode (sofern bereitgestellt) aufgerufen.                                                                                         |
| `true`          | `false`            | Pfad existiert                           | Die vorhandene Datei wird entfernt und durch eine neue ersetzt, dann wird der `successCallback` mit einem [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) aufgerufen. |
| `true`          | `false`            | Pfad existiert nicht                     | Die Datei wird erstellt, dann wird ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) an den `successCallback` übergeben.                                            |
| `true`          | `true`             | Pfad existiert                           | Der `errorCallback` wird mit einem passenden Fehler, wie `DOMError.PATH_EXISTS_ERR`, aufgerufen.                                                                                    |
| `true`          | `true`             | Pfad existiert nicht                     | Die Datei wird erstellt, dann wird ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) an den `successCallback` übergeben.                                            |

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `create` Option nicht spezifiziert wurde (oder als `false` angegeben wurde) und die Datei nicht existiert.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff auf die Datei aus Sicherheitsgründen verweigert wurde.
- `TypeMismatchError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Pfad keine Datei ist; wahrscheinlich ist es ein Verzeichnis, könnte aber auch ein nicht unterstützter Dateizeiger wie eine Pipe sein; dies hängt bis zu einem gewissen Grad vom User Agent ab.

## Beispiele

In diesem Beispiel wird eine Funktion präsentiert, die innerhalb eines Anwendungsverzeichnisses eines Nutzers eine JSON-Datei mit einem Benutzerdictionary für eine bestimmte Sprache suchen und dann das Dictionary laden soll.

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

Die `loadDictionaryForLanguage()` Funktion beginnt mit dem Aufruf von `getDirectory()`, um das [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) Objekt zu erhalten, das einen Unterordner namens "Dictionaries" darstellt, der sich im angegebenen Anwendungsverzeichnis befindet. Der Erfolgsrückruf hierfür nimmt das resultierende Verzeichnis-Eintragsobjekt und ruft `getFile()` auf, um ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) Objekt zu erhalten, das die Dictionary-Datei darstellt; der Erfolgsrückruf hierfür erstellt wiederum einen neuen [`FileReader`](/de/docs/Web/API/FileReader) und verwendet ihn, um den Inhalt der Datei zu laden. Sobald das erfolgreich geladen wurde (angezeigt durch das Auslösen des [`loadend`](/de/docs/Web/API/FileReader/loadend_event) Ereignisses), wird der geladene Text in {{jsxref("JSON.parse()")}} übergeben, um in ein JavaScript-Objekt wiederhergestellt zu werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)

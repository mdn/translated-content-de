---
title: "FileSystemDirectoryEntry: getDirectory()-Methode"
short-title: getDirectory()
slug: Web/API/FileSystemDirectoryEntry/getDirectory
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File and Directory Entries API")}}

Die Methode **`getDirectory()`** des [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Interfaces gibt ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt zurück, das einem Verzeichnis entspricht, das sich irgendwo innerhalb des Verzeichnis-Unterbaums befindet, auf dem sie aufgerufen wird.

## Syntax

```js-nolint
getDirectory()
getDirectory(path)
getDirectory(path, options)
getDirectory(path, options, successCallback)
getDirectory(path, options, successCallback, errorCallback)
```

### Parameter

- `path` {{optional_inline}}
  - : Ein String, der einen absoluten Pfad oder einen relativen Pfad zu dem Verzeichnis darstellt, auf dem die Methode aufgerufen wird, und beschreibt, welcher Verzeichniseintrag zurückgegeben werden soll. Absolute Pfade können aus Sicherheitsgründen möglicherweise nicht verwendet werden.
- `options` {{optional_inline}}
  - : Ein Objekt, das es Ihnen ermöglicht, anzugeben, ob der Eintrag erstellt werden soll, falls er fehlt, und ob es ein Fehler ist, wenn die Datei bereits existiert. Diese Optionen sind derzeit in Web-Kontexten nicht nützlich. Weitere Einzelheiten finden Sie im Abschnitt [Optionsparameter](#options_parameter).
- `successCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen werden soll, sobald das [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) erstellt wurde. Die Methode erhält einen einzelnen Parameter: das `FileSystemDirectoryEntry`-Objekt, das das betreffende Verzeichnis darstellt.
- `errorCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, wenn ein Fehler auftritt. Sie erhält als einzigen Eingabeparameter ein [`DomException`](/de/docs/Web/API/DomException)-Objekt, das den aufgetretenen Fehler beschreibt.

#### `options`-Parameter

Das `options`-Parameterobjekt akzeptiert die folgenden Parameter:

- `create` {{optional_inline}}
  - : Wenn diese Eigenschaft `true` ist und das angeforderte Verzeichnis nicht existiert, sollte der Benutzeragent es erstellen. Der Standard ist `false`. Das übergeordnete Verzeichnis muss bereits existieren.
- `exclusive` {{optional_inline}}
  - : Wenn `true` und die `create`-Option ebenfalls `true` ist, darf das Verzeichnis nicht existieren, bevor der Aufruf erfolgt. Stattdessen muss es möglich sein, es zur Zeit des Aufrufs neu zu erstellen. Der Standard ist `false`. Dieser Parameter wird ignoriert, wenn `create` `false` ist.

Die folgende Tabelle beschreibt das Ergebnis jeder möglichen Kombination dieser Flags, abhängig davon, ob der Zielverzeichnispfad bereits existiert oder nicht.

| `create`-Option | `exclusive`-Option | Pfadbedingung                          | Ergebnis                                                                                                                                                                                            |
| --------------- | ------------------ | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`         | _Ignoriert_        | Pfad existiert und ist ein Verzeichnis | Der `successCallback` wird mit einem [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) aufgerufen.                                                                            |
| `false`         | _Ignoriert_        | Pfad existiert, ist aber eine Datei    | Der `errorCallback` wird mit einem entsprechenden Fehlercode aufgerufen (falls der Callback bereitgestellt wurde).                                                                                  |
| `true`          | `false`            | Pfad existiert                         | Das vorhandene Verzeichnis wird entfernt und durch ein neues ersetzt, dann wird der `successCallback` mit einem [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) aufgerufen. |
| `true`          | `false`            | Pfad existiert nicht                   | Das Verzeichnis wird erstellt, dann wird ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) dem `successCallback` übergeben.                                               |
| `true`          | `true`             | Pfad existiert                         | Der `errorCallback` wird mit einem entsprechenden Fehler aufgerufen, z.B. `FileError.PATH_EXISTS_ERR`.                                                                                              |
| `true`          | `true`             | Pfad existiert nicht                   | Das Verzeichnis wird erstellt, dann wird ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) dem `successCallback` übergeben.                                               |

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `create`-Option nicht angegeben wurde (oder als `false` angegeben wurde) und das Verzeichnis nicht existiert.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff auf das Verzeichnis aus Sicherheitsgründen verweigert wurde.
- `TypeMismatchError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Pfad kein Verzeichnis ist; es ist wahrscheinlich eine Datei, könnte aber auch ein nicht unterstützter Dateideskriptor wie ein Pipe sein; dies hängt bis zu einem gewissen Grad vom Benutzeragenten ab.

## Beispiele

In diesem Beispiel wird eine Funktion vorgestellt, deren Aufgabe es ist, innerhalb eines App-Datenverzeichnisses des Benutzers eine JSON-Datei zu lokalisieren, die ein Benutzerwörterbuch für eine bestimmte Sprache enthält, und dieses Wörterbuch dann zu laden.

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

Die Funktion `loadDictionaryForLanguage()` beginnt damit, mittels `getDirectory()` das [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt zu erhalten, das einen Unterordner mit dem Namen "Dictionaries" innerhalb des angegebenen App-Datenverzeichnisses darstellt. Beim Erfolgscallback wird mit diesem resultierenden Verzeichniseintrag-Objekt [`getFile()`](/de/docs/Web/API/FileSystemDirectoryEntry/getFile) aufgerufen, um ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekt darzustellen, das die Wörterbuchdatei darstellt; der Erfolgscallback hierfür erstellt seinerseits einen neuen [`FileReader`](/de/docs/Web/API/FileReader) und verwendet ihn, um den Inhalt der Datei zu laden. Wenn dieser dann erfolgreich geladen ist (angezeigt durch das Auslösen des [`loadend`](/de/docs/Web/API/FileReader/loadend_event)-Ereignisses), wird der geladene Text an {{jsxref("JSON.parse()")}} übergeben, um ihn in ein JavaScript-Objekt umzuwandeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)

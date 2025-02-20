---
title: "FileSystemDirectoryEntry: Methode getDirectory()"
short-title: getDirectory()
slug: Web/API/FileSystemDirectoryEntry/getDirectory
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}

Die Methode **`getDirectory()`** der [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Schnittstelle gibt ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt zurück, das einem Verzeichnis entspricht, das sich irgendwo im Verzeichnisbaum befindet, der im Verzeichnis verwurzelt ist, auf dem sie aufgerufen wird.

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
  - : Ein String, der einen absoluten Pfad oder einen relativen Pfad zu dem Verzeichnis darstellt, auf dem die Methode aufgerufen wird und das Verzeichnis beschreibt, das zurückgegeben werden soll. Aus Sicherheitsgründen können absolute Pfade möglicherweise nicht verwendet werden.
- `options` {{optional_inline}}
  - : Ein Objekt, das Ihnen ermöglicht anzugeben, ob der Eintrag erstellt werden soll, falls er fehlt, und ob es ein Fehler ist, wenn die Datei bereits existiert. Diese Optionen sind in Web-Kontexten derzeit nicht nützlich.
    Siehe den Abschnitt [options parameter](#options_parameter) für weitere Details.
- `successCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, sobald das [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) erstellt wurde. Die Methode erhält einen einzigen Parameter: das `FileSystemDirectoryEntry`-Objekt, das das betreffende Verzeichnis darstellt.
- `errorCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, wenn ein Fehler auftritt. Sie erhält als einzigen Eingabeparameter ein [`DomException`](/de/docs/Web/API/DomException)-Objekt, das den aufgetretenen Fehler beschreibt.

#### Parameter `options`

Das `options`-Parameterobjekt akzeptiert die folgenden Parameter:

- `create` {{optional_inline}}
  - : Wenn diese Eigenschaft `true` ist und das angeforderte Verzeichnis nicht existiert, sollte der Benutzeragent es erstellen. Der Standardwert ist `false`. Das übergeordnete Verzeichnis muss bereits existieren.
- `exclusive` {{optional_inline}}
  - : Wenn `true` und die `create`-Option ebenfalls `true` ist, darf das Verzeichnis vor dem Aufruf nicht existieren. Stattdessen muss es zur Aufrufzeit neu erstellt werden können. Der Standardwert ist `false`. Dieser Parameter wird ignoriert, wenn `create` `false` ist.

Die folgende Tabelle beschreibt das Ergebnis jeder möglichen Kombination dieser Flags, je nachdem, ob der Zielverzeichnispfad bereits existiert oder nicht.

| Option `create` | Option `exclusive` | Pfadbedingung                          | Ergebnis                                                                                                                                                                                            |
| --------------- | ------------------ | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`         | _Ignoriert_        | Pfad existiert und ist ein Verzeichnis | Der `successCallback` wird mit einem [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) aufgerufen.                                                                            |
| `false`         | _Ignoriert_        | Pfad existiert, ist jedoch eine Datei  | Der `errorCallback` wird mit einem entsprechenden Fehlercode aufgerufen (falls der Callback bereitgestellt wurde).                                                                                  |
| `true`          | `false`            | Pfad existiert                         | Das vorhandene Verzeichnis wird entfernt und durch ein neues ersetzt, dann wird der `successCallback` mit einem [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) aufgerufen. |
| `true`          | `false`            | Pfad existiert nicht                   | Das Verzeichnis wird erstellt, dann wird ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) an den `successCallback` übergeben.                                            |
| `true`          | `true`             | Pfad existiert                         | Der `errorCallback` wird mit einem entsprechenden Fehler, wie `FileError.PATH_EXISTS_ERR`, aufgerufen.                                                                                              |
| `true`          | `true`             | Pfad existiert nicht                   | Das Verzeichnis wird erstellt, dann wird ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) an den `successCallback` übergeben.                                            |

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `create`-Option nicht angegeben wurde (oder als `false` angegeben wurde) und das Verzeichnis nicht existiert.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Anfrage, auf das Verzeichnis zuzugreifen, aus Sicherheitsgründen abgelehnt wurde.
- `TypeMismatchError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Pfad kein Verzeichnis ist; es handelt sich wahrscheinlich um eine Datei, könnte aber ein nicht unterstützter Dateizeiger wie eine Pipe sein; dies hängt bis zu einem gewissen Grad vom Benutzeragenten ab.

## Beispiele

In diesem Beispiel wird eine Funktion präsentiert, deren Aufgabe es ist, innerhalb des App-Datenverzeichnisses eines Benutzers eine JSON-Datei zu finden, die ein Benutzerwörterbuch für eine bestimmte Sprache enthält, und dieses Wörterbuch dann zu laden.

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

Die Funktion `loadDictionaryForLanguage()` beginnt, indem sie `getDirectory()` verwendet, um das [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt zu erhalten, das einen Unterordner namens "Dictionaries" darstellt, der sich im angegebenen App-Datenverzeichnis befindet. Der Erfolgscallback dafür nimmt das resultierende Verzeichniseintragsobjekt und ruft [`getFile()`](/de/docs/Web/API/FileSystemDirectoryEntry/getFile) auf, um ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekt zu erhalten, das die Wörterbuchdatei darstellt; der Erfolgscallback erstellt dann einen neuen [`FileReader`](/de/docs/Web/API/FileReader) und verwendet ihn, um den Inhalt der Datei zu laden. Wenn dieser erfolgreich geladen wurde (was durch das Auslösen des [`loadend`](/de/docs/Web/API/FileReader/loadend_event)-Ereignisses angezeigt wird), wird der geladene Text in {{jsxref("JSON.parse()")}} übergeben, um ihn in ein JavaScript-Objekt umzuwandeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)

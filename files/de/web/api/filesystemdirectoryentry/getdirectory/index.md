---
title: "FileSystemDirectoryEntry: getDirectory() Methode"
short-title: getDirectory()
slug: Web/API/FileSystemDirectoryEntry/getDirectory
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("File and Directory Entries API")}}

Die Methode **`getDirectory()`** des [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Interfaces gibt ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt zurück, das einem Verzeichnis entspricht, das sich irgendwo innerhalb des Verzeichnis-Unterbaums befindet, dessen Wurzel das Verzeichnis ist, auf dem die Methode aufgerufen wird.

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
  - : Ein String, der einen absoluten Pfad oder einen Pfad relativ zu dem Verzeichnis darstellt, auf dem die Methode aufgerufen wird und welches Verzeichniseintrag zurückgegeben werden soll. Aus Sicherheitsgründen können absolute Pfade möglicherweise nicht verwendet werden.
- `options` {{optional_inline}}
  - : Ein Objekt, das Ihnen erlaubt, anzugeben, ob der Eintrag erstellt werden soll, wenn er fehlt und ob es ein Fehler ist, wenn die Datei bereits existiert. Diese Optionen sind derzeit in Web-Kontexten nicht nützlich. Siehe den Abschnitt [options parameter](#options_parameter) für weitere Details.
- `successCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, sobald das [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) erstellt wurde. Die Methode erhält einen einzelnen Parameter: das `FileSystemDirectoryEntry`-Objekt, das das betreffende Verzeichnis darstellt.
- `errorCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, wenn ein Fehler auftritt. Sie erhält als einzigen Eingabeparameter ein [`DomException`](/de/docs/Web/API/DOMException)-Objekt, das den aufgetretenen Fehler beschreibt.

#### `options` Parameter

Das `options` Parameter-Objekt akzeptiert folgende Parameter:

- `create` {{optional_inline}}
  - : Wenn diese Eigenschaft `true` ist und das angeforderte Verzeichnis nicht existiert, sollte der User-Agent es erstellen. Der Standardwert ist `false`. Das übergeordnete Verzeichnis muss bereits existieren.
- `exclusive` {{optional_inline}}
  - : Wenn `true` und die `create`-Option ebenfalls `true` ist, darf das Verzeichnis vor dem Aufruf nicht existiert haben. Stattdessen muss es möglich sein, es neu zur Aufrufzeit zu erstellen. Der Standardwert ist `false`. Dieser Parameter wird ignoriert, wenn `create` `false` ist.

Die folgende Tabelle beschreibt das Ergebnis jeder möglichen Kombination dieser Flags, abhängig davon, ob der Zielverzeichnispfad bereits existiert oder nicht.

| `create` Option | `exclusive` Option | Pfadbedingung                          | Ergebnis                                                                                                                                                                                            |
| --------------- | ------------------ | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`         | _Ignored_          | Pfad existiert und ist ein Verzeichnis | Der `successCallback` wird mit einem [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) aufgerufen.                                                                            |
| `false`         | _Ignored_          | Pfad existiert, aber ist eine Datei    | Der `errorCallback` wird mit einem geeigneten Fehlercode aufgerufen (wenn der Callback bereitgestellt wurde).                                                                                       |
| `true`          | `false`            | Pfad existiert                         | Das vorhandene Verzeichnis wird entfernt und durch ein neues ersetzt, dann wird der `successCallback` mit einem [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) aufgerufen. |
| `true`          | `false`            | Pfad existiert nicht                   | Das Verzeichnis wird erstellt, dann wird ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) an den `successCallback` übergeben.                                            |
| `true`          | `true`             | Pfad existiert                         | Der `errorCallback` wird mit einem geeigneten Fehler, wie `DOMException.PATH_EXISTS_ERR`, aufgerufen.                                                                                               |
| `true`          | `true`             | Pfad existiert nicht                   | Das Verzeichnis wird erstellt, dann wird ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) an den `successCallback` übergeben.                                            |

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `create`-Option nicht angegeben wurde (oder als `false` angegeben wurde) und das Verzeichnis nicht existiert.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff auf das Verzeichnis aus Sicherheitsgründen verweigert wurde.
- `TypeMismatchError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Pfad kein Verzeichnis ist; es ist wahrscheinlich eine Datei, könnte aber auch ein nicht unterstützter Datei-Deskriptor wie eine Pipe sein; dies hängt bis zu einem gewissen Grad vom User-Agent ab.

## Beispiele

In diesem Beispiel wird eine Funktion vorgestellt, deren Aufgabe es ist, innerhalb des App-Datenverzeichnisses eines Benutzers eine JSON-Datei mit einem Benutzerdictionary für eine bestimmte Sprache zu finden und dieses Dictionary dann zu laden.

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

Die Funktion `loadDictionaryForLanguage()` beginnt, indem sie `getDirectory()` verwendet, um das [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt zu erhalten, das einen Unterordner namens "Dictionaries" darstellt, der sich im angegebenen App-Datenverzeichnis befindet. Der Erfolgscallback dafür nimmt das resultierende Verzeichniseintrag-Objekt und ruft [`getFile()`](/de/docs/Web/API/FileSystemDirectoryEntry/getFile) auf, um ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekt zu erhalten, das die Dictionary-Datei darstellt; der Erfolgscallback dafür wiederum erstellt einen neuen [`FileReader`](/de/docs/Web/API/FileReader) und verwendet ihn, um den Inhalt der Datei zu laden. Wenn dieser erfolgreich geladen wurde (wie durch das Auftreten des [`loadend`](/de/docs/Web/API/FileReader/loadend_event)-Ereignisses angezeigt), wird der geladene Text in {{jsxref("JSON.parse()")}} übergeben, um in ein JavaScript-Objekt umgewandelt zu werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)

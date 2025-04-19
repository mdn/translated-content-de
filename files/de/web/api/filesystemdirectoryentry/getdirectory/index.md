---
title: "FileSystemDirectoryEntry: Methode getDirectory()"
short-title: getDirectory()
slug: Web/API/FileSystemDirectoryEntry/getDirectory
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("File and Directory Entries API")}}

Die Methode **`getDirectory()`** der [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Schnittstelle gibt ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt zurück, das einem Verzeichnis entspricht, das sich irgendwo im Verzeichnisbaum befindet, dessen Wurzel das Verzeichnis ist, auf dem die Methode aufgerufen wird.

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
  - : Ein Zeichenfolgenwert, der einen absoluten Pfad oder einen Pfad relativ zu dem Verzeichnis darstellt, auf dem die Methode aufgerufen wird, und das beschreibt, welches Verzeichniseintrag zurückgegeben werden soll. Aus Sicherheitsgründen können absolute Pfade möglicherweise nicht verwendet werden.
- `options` {{optional_inline}}
  - : Ein Objekt, das Ihnen ermöglicht, anzugeben, ob der Eintrag erstellt werden soll, falls er fehlt, und ob es ein Fehler ist, wenn die Datei bereits existiert. Diese Optionen sind derzeit in Web-Kontexten nicht nützlich. Siehe den Abschnitt [options parameter](#options_parameter) für weitere Details.
- `successCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, sobald das [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) erstellt wurde. Die Methode erhält einen einzigen Parameter: das `FileSystemDirectoryEntry`-Objekt, das das betreffende Verzeichnis darstellt.
- `errorCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, falls ein Fehler auftritt. Sie erhält als einzigen Eingabeparameter ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt, das den aufgetretenen Fehler beschreibt.

#### `options`-Parameter

Das `options` Parameterobjekt akzeptiert folgende Parameter:

- `create` {{optional_inline}}
  - : Wenn diese Eigenschaft `true` ist und das angeforderte Verzeichnis nicht existiert, sollte der User-Agent es erstellen. Der Standardwert ist `false`. Das übergeordnete Verzeichnis muss bereits existieren.
- `exclusive` {{optional_inline}}
  - : Wenn `true` und die `create`-Option ebenfalls `true` ist, darf das Verzeichnis vor Aufruf nicht existieren. Stattdessen muss es möglich sein, es neu zum Zeitpunkt des Aufrufs zu erstellen. Der Standardwert ist `false`. Dieser Parameter wird ignoriert, wenn `create` `false` ist.

Die Tabelle unten beschreibt das Ergebnis jeder möglichen Kombination dieser Flags, abhängig davon, ob der Zielverzeichnispfad bereits existiert oder nicht.

| `create`-Option | `exclusive`-Option | Pfadbedingung                          | Ergebnis                                                                                                                                                                                            |
| --------------- | ------------------ | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`         | _Ignoriert_        | Pfad existiert und ist ein Verzeichnis | Die `successCallback` wird mit einem [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) aufgerufen.                                                                            |
| `false`         | _Ignoriert_        | Pfad existiert, ist aber eine Datei    | Die `errorCallback` wird mit einem geeigneten Fehlercode aufgerufen (falls die Callback angegeben wurde).                                                                                           |
| `true`          | `false`            | Pfad existiert                         | Das bestehende Verzeichnis wird entfernt und durch ein neues ersetzt, dann wird die `successCallback` mit einem [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) aufgerufen. |
| `true`          | `false`            | Pfad existiert nicht                   | Das Verzeichnis wird erstellt, dann wird ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) an die `successCallback` übergeben.                                            |
| `true`          | `true`             | Pfad existiert                         | Die `errorCallback` wird mit einem geeigneten Fehler wie `DOMError.PATH_EXISTS_ERR` aufgerufen.                                                                                                     |
| `true`          | `true`             | Pfad existiert nicht                   | Das Verzeichnis wird erstellt, dann wird ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) an die `successCallback` übergeben.                                            |

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `create`-Option nicht angegeben war (oder als `false` angegeben wurde) und das Verzeichnis nicht existiert.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff auf das Verzeichnis aus Sicherheitsgründen verweigert wurde.
- `TypeMismatchError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Pfad kein Verzeichnis ist; es handelt sich wahrscheinlich um eine Datei, könnte aber ein nicht unterstützter Dateideskriptor wie eine Pipe sein; dies hängt bis zu einem gewissen Grad vom User-Agent ab.

## Beispiele

In diesem Beispiel wird eine Funktion vorgestellt, deren Aufgabe es ist, innerhalb des Anwendungsverzeichnisses eines Benutzers eine JSON-Datei zu finden, die ein Benutzerdictionary für eine bestimmte Sprache enthält, und dieses Dictionary dann zu laden.

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

Die Funktion `loadDictionaryForLanguage()` beginnt mit dem Aufruf von `getDirectory()`, um das [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt zu erhalten, das einen Unterordner namens "Dictionaries" darstellt, der sich im angegebenen Anwendungsverzeichnis befindet. Die Erfolgs-Callback für diese Methode nimmt das resultierende Verzeichniseintrag-Objekt und ruft [`getFile()`](/de/docs/Web/API/FileSystemDirectoryEntry/getFile) auf, um ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekt zu erhalten, das die Dictionary-Datei darstellt; die Erfolgs-Callback hierfür erstellt wiederum einen neuen [`FileReader`](/de/docs/Web/API/FileReader) und verwendet ihn, um den Inhalt der Datei zu laden. Wenn dieser erfolgreich geladen wird (wie durch das Ereignis [`loadend`](/de/docs/Web/API/FileReader/loadend_event) angezeigt), wird der geladene Text an {{jsxref("JSON.parse()")}} übergeben, um in ein JavaScript-Objekt umgewandelt zu werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)

---
title: "FileSystemDirectoryEntry: getFile() Methode"
short-title: getFile()
slug: Web/API/FileSystemDirectoryEntry/getFile
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("File and Directory Entries API")}}

Die Methode **`getFile()`** des [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) Interface gibt ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) Objekt zurück, das einer Datei entspricht, die sich irgendwo im Verzeichnisbaum befindet, der am Verzeichnis verwurzelt ist, auf dem sie aufgerufen wird.

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
  - : Ein String, der den Pfad angibt, relativ zu dem Verzeichnis, auf dem die Methode aufgerufen wird, und beschreibt, welcher Eintrag der Datei zurückgegeben werden soll.
- `options` {{optional_inline}}
  - : Ein Objekt, das es Ihnen ermöglicht festzulegen, ob der Eintrag erstellt werden soll, falls er fehlt, und ob es einen Fehler gibt, wenn die Datei bereits existiert. Diese Optionen sind derzeit in Web-Kontexten nicht nützlich. Siehe den Abschnitt [options parameter](#options_parameter) für weitere Details.
- `successCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, sobald das [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) erstellt wurde. Die Methode erhält ein einzelnes Parameter: das `FileSystemFileEntry` Objekt, das die betreffende Datei darstellt.
- `errorCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, wenn ein Fehler auftritt. Sie erhält als einzigen Eingabeparameter ein [`DOMException`](/de/docs/Web/API/DOMException) Objekt, das den aufgetretenen Fehler beschreibt.

#### `options` Parameter

Das `options` Parameterobjekt akzeptiert die folgenden Parameter:

- `create` {{optional_inline}}
  - : Wenn diese Eigenschaft `true` ist und die angeforderte Datei nicht existiert, sollte das Benutzeragent die Datei erstellen. Der Standardwert ist `false`. Das übergeordnete Verzeichnis muss bereits existieren.
- `exclusive` {{optional_inline}}
  - : Wenn `true` und die `create` Option ebenfalls `true` ist, darf die Datei nicht vorhanden sein, bevor der Aufruf ausgeführt wird. Stattdessen muss es möglich sein, dass sie neu zur Aufrufzeit erstellt wird. Der Standardwert ist `false`. Dieses Parameter wird ignoriert, wenn `create` `false` ist.

Die folgende Tabelle beschreibt das Ergebnis jeder möglichen Kombination dieser Flags, abhängig davon, ob der Zieldateipfad bereits existiert oder nicht.

| `create` Option | `exclusive` Option | Pfadbedingung                            | Ergebnis                                                                                                                                                                            |
| --------------- | ------------------ | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`         | _Ignoriert_        | Pfad existiert und ist eine Datei        | Der `successCallback` wird mit einem [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) aufgerufen.                                                                      |
| `false`         | _Ignoriert_        | Pfad existiert, ist aber ein Verzeichnis | Der `errorCallback` wird mit einem geeigneten Fehlercode (falls der Callback bereitgestellt wurde) aufgerufen.                                                                      |
| `true`          | `false`            | Pfad existiert                           | Die bestehende Datei wird entfernt und durch eine neue ersetzt, dann wird der `successCallback` mit einem [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) aufgerufen. |
| `true`          | `false`            | Pfad existiert nicht                     | Die Datei wird erstellt, dann wird ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) an den `successCallback` übergeben.                                            |
| `true`          | `true`             | Pfad existiert                           | Der `errorCallback` wird mit einem geeigneten Fehler, wie z.B. `DOMException.PATH_EXISTS_ERR`, aufgerufen.                                                                          |
| `true`          | `true`             | Pfad existiert nicht                     | Die Datei wird erstellt, dann wird ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) an den `successCallback` übergeben.                                            |

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `create` Option nicht angegeben wurde (oder als `false` angegeben wurde) und die Datei nicht existiert.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff auf die Datei aus Sicherheitsgründen verweigert wurde.
- `TypeMismatchError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Pfad keine Datei ist; es ist wahrscheinlich ein Verzeichnis, könnte aber ein nicht unterstützter Dateideskriptor wie eine Pipe sein; dies hängt bis zu einem gewissen Grad vom Benutzeragent ab.

## Beispiele

In diesem Beispiel wird eine Funktion vorgestellt, deren Aufgabe es ist, in einem App-Daten-Verzeichnis des Benutzers eine JSON-Datei zu finden, die ein Benutzerwörterbuch für eine angegebene Sprache enthält, und dann dieses Wörterbuch zu laden.

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

Die Funktion `loadDictionaryForLanguage()` beginnt mit der Nutzung von `getDirectory()`, um das [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) Objekt darzustellen, das einen Unterordner namens "Dictionaries" innerhalb des angegebenen App-Datenverzeichnisses repräsentiert. Der Erfolgscallback hierfür nimmt das resultierende Verzeichniseintragsobjekt und ruft `getFile()` auf, um ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) Objekt zu erhalten, das die Wörterbuchdatei repräsentiert; der Erfolgscallback hierfür erstellt wiederum einen neuen [`FileReader`](/de/docs/Web/API/FileReader) und verwendet ihn, um den Inhalt der Datei zu laden. Wenn das erfolgreich geladen wurde (wie durch das Auslösen des [`loadend`](/de/docs/Web/API/FileReader/loadend_event) Ereignisses angezeigt wird), wird der geladene Text in {{jsxref("JSON.parse()")}} übergeben, um ihn in ein JavaScript-Objekt zu rekonstituieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)

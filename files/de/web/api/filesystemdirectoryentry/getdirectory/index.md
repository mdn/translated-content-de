---
title: "FileSystemDirectoryEntry: getDirectory()-Methode"
short-title: getDirectory()
slug: Web/API/FileSystemDirectoryEntry/getDirectory
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File and Directory Entries API")}}

Die Methode **`getDirectory()`** der [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Schnittstelle gibt ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt zurück, das einem Verzeichnis innerhalb des Verzeichnisunterbaums entspricht, der im Verzeichnis verwurzelt ist, auf dem die Methode aufgerufen wird.

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
  - : Ein String, der einen absoluten Pfad oder einen Pfad relativ zu dem Verzeichnis darstellt, in dem die Methode aufgerufen wird, und beschreibt, welcher Verzeichniseintrag zurückgegeben werden soll. Aus Sicherheitsgründen sind absolute Pfade möglicherweise nicht verwendbar.
- `options` {{optional_inline}}
  - : Ein Objekt, das es Ihnen ermöglicht, zu spezifizieren, ob der Eintrag erstellt werden soll, wenn er fehlt, und ob es einen Fehler darstellen soll, wenn die Datei bereits existiert. Diese Optionen sind derzeit in Web-Kontexten nicht nützlich. Siehe den Abschnitt [options parameter](#options_parameter) für mehr Details.
- `successCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, sobald das [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) erstellt wurde. Die Methode erhält einen einzelnen Parameter: das `FileSystemDirectoryEntry`-Objekt, das das entsprechende Verzeichnis darstellt.
- `errorCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, wenn ein Fehler auftritt. Sie erhält als einzigen Eingabeparameter ein [`DomException`](/de/docs/Web/API/DomException)-Objekt, das den aufgetretenen Fehler beschreibt.

#### `options` Parameter

Das `options` Parameterobjekt akzeptiert die folgenden Parameter:

- `create` {{optional_inline}}
  - : Wenn diese Eigenschaft `true` ist und das angeforderte Verzeichnis nicht existiert, sollte der Benutzeragent es erstellen. Der Standardwert ist `false`. Das übergeordnete Verzeichnis muss bereits existieren.
- `exclusive` {{optional_inline}}
  - : Wenn `true` und die `create`-Option ebenfalls `true` ist, darf das Verzeichnis vor dem Aufruf nicht existieren. Stattdessen muss es möglich sein, es neu zu erstellen. Der Standardwert ist `false`. Dieser Parameter wird ignoriert, wenn `create` `false` ist.

Die folgende Tabelle beschreibt das Ergebnis jeder möglichen Kombination dieser Flags, abhängig davon, ob der Zielverzeichnispfad bereits existiert oder nicht.

| `create` Option | `exclusive` Option | Bedingung des Pfads                    | Ergebnis                                                                                                                                                                                            |
| --------------- | ------------------ | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`         | _Ignoriert_        | Pfad existiert und ist ein Verzeichnis | Der `successCallback` wird mit einem [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) aufgerufen.                                                                            |
| `false`         | _Ignoriert_        | Pfad existiert, aber ist eine Datei    | Der `errorCallback` wird mit einem geeigneten Fehlercode aufgerufen (sofern der Callback bereitgestellt wurde).                                                                                     |
| `true`          | `false`            | Pfad existiert                         | Das bestehende Verzeichnis wird entfernt und durch ein neues ersetzt, dann wird der `successCallback` mit einem [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) aufgerufen. |
| `true`          | `false`            | Pfad existiert nicht                   | Das Verzeichnis wird erstellt und dann ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) an den `successCallback` übergeben.                                              |
| `true`          | `true`             | Pfad existiert                         | Der `errorCallback` wird mit einem geeigneten Fehler, wie `FileError.PATH_EXISTS_ERR`, aufgerufen.                                                                                                  |
| `true`          | `true`             | Pfad existiert nicht                   | Das Verzeichnis wird erstellt und dann ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) an den `successCallback` übergeben.                                              |

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `create`-Option nicht angegeben wurde (oder als `false` angegeben wurde) und das Verzeichnis nicht existiert.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Anforderung zum Zugriff auf das Verzeichnis aus Sicherheitsgründen abgelehnt wurde.
- `TypeMismatchError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Pfad kein Verzeichnis ist; es handelt sich wahrscheinlich um eine Datei, könnte aber auch ein nicht unterstützter Dateideskriptor wie eine Pipe sein; dies hängt teilweise vom Benutzeragenten ab.

## Beispiele

In diesem Beispiel wird eine Funktion vorgestellt, deren Aufgabe es ist, innerhalb eines Anwendungsverzeichnisses des Benutzers eine JSON-Datei mit einem Benutzerwörterbuch für eine bestimmte Sprache zu finden und dann dieses Wörterbuch zu laden.

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

Die Funktion `loadDictionaryForLanguage()` verwendet zu Beginn `getDirectory()`, um das [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt zu erhalten, das einen Unterordner namens "Dictionaries" innerhalb des angegebenen Anwendungsverzeichnisses darstellt. Der Erfolgscallback dieser Funktion nimmt das resultierende Verzeichniseintragsobjekt und ruft [`getFile()`](/de/docs/Web/API/FileSystemDirectoryEntry/getFile) auf, um ein [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)-Objekt zu erhalten, das die Wörterbuchdatei darstellt. Der Erfolgscallback dieser Funktion erstellt wiederum einen neuen [`FileReader`](/de/docs/Web/API/FileReader) und verwendet ihn, um den Inhalt der Datei zu laden. Wenn dieser erfolgreich geladen wird (wie durch das Auslösen des [`loadend`](/de/docs/Web/API/FileReader/loadend_event)-Ereignisses angezeigt), wird der geladene Text in {{jsxref("JSON.parse()")}} übergeben, um in ein JavaScript-Objekt umgewandelt zu werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)

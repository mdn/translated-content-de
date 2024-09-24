---
title: "FileSystemDirectoryEntry: Methode getDirectory()"
short-title: getDirectory()
slug: Web/API/FileSystemDirectoryEntry/getDirectory
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File and Directory Entries API")}}

Die **`getDirectory()`**-Methode der {{domxref("FileSystemDirectoryEntry")}}-Schnittstelle gibt ein {{domxref("FileSystemDirectoryEntry")}}-Objekt zurück, das einem Verzeichnis entspricht, das sich irgendwo im Verzeichnisbaum befindet, der im Verzeichnis verwurzelt ist, auf dem die Methode aufgerufen wird.

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
  - : Ein String, der einen absoluten Pfad oder einen relativen Pfad zum Verzeichnis darstellt, auf dem die Methode aufgerufen wird und das das zurückzugebende Verzeichniselement beschreibt. Absolute Pfade können aus Sicherheitsgründen möglicherweise nicht verwendet werden.
- `options` {{optional_inline}}
  - : Ein Objekt, das Ihnen erlaubt, anzugeben, ob der Eintrag erstellt werden soll, falls er fehlt, und ob es ein Fehler ist, wenn die Datei bereits existiert. Diese Optionen sind in Web-Kontexten derzeit nicht nützlich. Weitere Details finden Sie im Abschnitt [Options-Parameter](#options_parameter).
- `successCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, sobald das {{domxref("FileSystemDirectoryEntry")}} erstellt wurde. Die Methode erhält ein einziges Parameter: das `FileSystemDirectoryEntry`-Objekt, das das betreffende Verzeichnis darstellt.
- `errorCallback` {{optional_inline}}
  - : Eine Methode, die aufgerufen wird, wenn ein Fehler auftritt. Sie erhält als einziges Eingabeparameter ein {{domxref("DomException")}}-Objekt, das den aufgetretenen Fehler beschreibt.

#### `options` Parameter

Das `options`-Parameterobjekt akzeptiert die folgenden Parameter:

- `create` {{optional_inline}}
  - : Wenn diese Eigenschaft `true` ist und das angeforderte Verzeichnis nicht existiert, sollte der Benutzeragent es erstellen. Der Standardwert ist `false`. Das übergeordnete Verzeichnis muss bereits existieren.
- `exclusive` {{optional_inline}}
  - : Wenn `true` und die `create`-Option ebenfalls `true` ist, darf das Verzeichnis vor der Ausführung des Aufrufs nicht existieren. Stattdessen muss die Möglichkeit bestehen, es zum Zeitpunkt des Aufrufs neu zu erstellen. Der Standardwert ist `false`. Dieser Parameter wird ignoriert, wenn `create` `false` ist.

Die untenstehende Tabelle beschreibt das Ergebnis jeder möglichen Kombination dieser Flags, abhängig davon, ob der Zielverzeichnispfad bereits existiert oder nicht.

| `create` Option | `exclusive` Option | Pfadbedingung                 | Ergebnis                                                                                                                                                |
| --------------- | ------------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`         | _Ignored_          | Pfad existiert und ist ein Verzeichnis | Der `successCallback` wird mit einem {{domxref("FileSystemDirectoryEntry")}} aufgerufen.                                                                |
| `false`         | _Ignored_          | Pfad existiert, aber ist eine Datei  | Der `errorCallback` wird mit einem entsprechenden Fehlercode aufgerufen (falls der Callback bereitgestellt wurde).                                       |
| `true`          | `false`            | Pfad existiert                    | Das bestehende Verzeichnis wird entfernt und durch ein neues ersetzt, dann wird der `successCallback` mit einem {{domxref("FileSystemDirectoryEntry")}} aufgerufen. |
| `true`          | `false`            | Pfad existiert nicht             | Das Verzeichnis wird erstellt, dann wird ein {{domxref("FileSystemDirectoryEntry")}} an den `successCallback` übergeben.                                 |
| `true`          | `true`             | Pfad existiert                    | Der `errorCallback` wird mit einem entsprechenden Fehler, wie `FileError.PATH_EXISTS_ERR`, aufgerufen.                                                 |
| `true`          | `true`             | Pfad existiert nicht             | Das Verzeichnis wird erstellt, dann wird ein {{domxref("FileSystemDirectoryEntry")}} an den `successCallback` übergeben.                                 |

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die `create`-Option nicht angegeben wurde (oder als `false` angegeben wurde), und das Verzeichnis nicht existiert.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Zugriff auf das Verzeichnis aus Sicherheitsgründen verweigert wurde.
- `TypeMismatchError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene Pfad kein Verzeichnis ist; es ist wahrscheinlich eine Datei, könnte aber auch ein nicht unterstützter Dateideskriptor wie eine Pipe sein; dies hängt in gewissem Maße vom Benutzeragenten ab.

## Beispiele

In diesem Beispiel wird eine Funktion präsentiert, deren Aufgabe es ist, in einem Anwendungsverzeichnis des Benutzers eine JSON-Datei mit einem Benutzerdictionary für eine bestimmte Sprache zu finden und dieses Dictionary zu laden.

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

Die Funktion `loadDictionaryForLanguage()` beginnt mit dem Aufruf von `getDirectory()`, um das {{domxref("FileSystemDirectoryEntry")}}-Objekt zu erhalten, das einen Unterordner namens "Dictionaries" darstellt, der sich im angegebenen Anwendungsverzeichnis befindet. Der Erfolgscallback nimmt das resultierende Verzeichniseintragsobjekt und ruft {{domxref("FileSystemDirectoryEntry.getFile", "getFile()")}} auf, um ein {{domxref("FileSystemFileEntry")}}-Objekt zu erhalten, das die Dictionary-Datei darstellt; der Erfolgscallback hierfür erstellt dann einen neuen {{domxref("FileReader")}} und verwendet ihn, um den Inhalt der Datei zu laden. Wenn dies erfolgreich geladen wurde (wie durch das Auslösen des {{domxref("FileReader/loadend_event", "loadend")}}-Ereignisses angezeigt wird), wird der geladene Text in {{jsxref("JSON.parse()")}} übergeben, um in ein JavaScript-Objekt umgewandelt zu werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Datei- und Verzeichniseinträge API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die Datei- und Verzeichniseinträge API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryEntry")}}

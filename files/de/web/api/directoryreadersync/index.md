---
title: DirectoryReaderSync
slug: Web/API/DirectoryReaderSync
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}

Mit der Schnittstelle `DirectoryReaderSync` können Sie die Einträge eines Verzeichnisses lesen.

> [!WARNING]
> Diese Schnittstelle ist veraltet und wird nicht mehr als Standard weiterentwickelt.
> _Verwenden Sie sie nicht mehr._ Verwenden Sie stattdessen die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API).

## Instanzmethoden

### readEntries()

Gibt eine Liste der Einträge eines bestimmten Verzeichnisses zurück. Rufen Sie diese Methode auf, bis ein leeres Array zurückgegeben wird.

#### Syntax

```js-nolint
readEntries()
```

##### Parameter

Keine.

##### Rückgabewert

Ein Array mit [`FileEntrySync`](/de/docs/Web/API/FileEntrySync)- und [`DirectoryEntrySync`](/de/docs/Web/API/DirectoryEntrySync)-Einträgen.

##### Ausnahmen

Diese Methode kann eine [DOMException](/de/docs/Web/API/DOMException) mit einem der folgenden Codes auslösen:

| Ausnahme            | Beschreibung                                                                                 |
| ------------------- | -------------------------------------------------------------------------------------------- |
| `NOT_FOUND_ERR`     | Das Verzeichnis existiert nicht.                                                             |
| `INVALID_STATE_ERR` | Das Verzeichnis wurde verändert, nachdem der erste Aufruf von readEntries verarbeitet wurde. |
| `SECURITY_ERR`      | Der Browser hat festgestellt, dass das Abrufen der Metadaten nicht sicher ist.               |

## Beschreibung

Bevor Sie die einzige Methode dieser Schnittstelle, [`readEntries()`](#readentries), aufrufen, erstellen Sie ein [`DirectoryEntrySync`](/de/docs/Web/API/DirectoryEntrySync)-Objekt. `DirectoryEntrySync` kann jedoch ebenso wie [`FileEntrySync`](/de/docs/Web/API/FileEntrySync) nicht als Datentyp zwischen der aufrufenden Anwendung und einem Web-Worker-Thread übergeben werden. Das ist kein großes Problem: Die Hauptanwendung und der Worker-Thread müssen nicht dasselbe JavaScript-Objekt verwenden, sondern lediglich auf dieselben Dateien zugreifen können. Dazu können Sie statt einer Liste von Einträgen eine Liste von `filesystem:`-URLs übergeben, bei denen es sich lediglich um Strings handelt. Sie können die `filesystem:`-URL auch verwenden, um den Eintrag mit `resolveLocalFileSystemURL()` zu ermitteln. So erhalten Sie wieder ein `DirectoryEntrySync`- beziehungsweise `FileEntrySync`-Objekt.

## Beispiele

Im folgenden Codeausschnitt aus [HTML5Rocks (web.dev)](https://web.dev/articles/filesystem-sync) erstellen wir Web Worker und übergeben Daten von dort an die Hauptanwendung.

```js
// Taking care of the browser-specific prefixes.
window.resolveLocalFileSystemURL =
  window.resolveLocalFileSystemURL || window.webkitResolveLocalFileSystemURL;

// Create web workers
const worker = new Worker("worker.js");
worker.onmessage = (e) => {
  const urls = e.data.entries;
  urls.forEach((url) => {
    window.resolveLocalFileSystemURL(url, (fileEntry) => {
      // Print out file's name.
      console.log(fileEntry.name);
    });
  });
};

worker.postMessage({ cmd: "list" });
```

Der folgende `worker.js`-Code ruft den Inhalt des Verzeichnisses ab.

```js
// worker.js

// Taking care of the browser-specific prefixes.
self.requestFileSystemSync =
  self.webkitRequestFileSystemSync || self.requestFileSystemSync;

// Global for holding the list of entry file system URLs.
const paths = [];

function getAllEntries(dirReader) {
  const entries = dirReader.readEntries();

  for (const entry of entries) {
    // Stash this entry's filesystem in URL
    paths.push(entry.toURL());

    // If this is a directory, traverse.
    if (entry.isDirectory) {
      getAllEntries(entry.createReader());
    }
  }
}

// Forward the error to main app.
function onError(e) {
  postMessage(`ERROR: ${e.toString()}`);
}

self.onmessage = (e) => {
  const cmd = e.data.cmd;

  // Ignore everything else except our 'list' command.
  if (!cmd || cmd !== "list") {
    return;
  }

  try {
    const fs = requestFileSystemSync(TEMPORARY, 1024 * 1024 /* 1MB */);

    getAllEntries(fs.root.createReader());

    self.postMessage({ entries: paths });
  } catch (e) {
    onError(e);
  }
};
```

## Spezifikationen

Diese Funktion ist nicht mehr Teil einer Spezifikation. Es ist nicht mehr vorgesehen, sie zu einem Standard zu machen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)

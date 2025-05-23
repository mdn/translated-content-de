---
title: DirectoryReaderSync
slug: Web/API/DirectoryReaderSync
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}{{Deprecated_Header}}

Das `DirectoryReaderSync`-Interface ermöglicht es Ihnen, die Einträge in einem Verzeichnis zu lesen.

> [!WARNING]
> Dieses Interface ist veraltet und befindet sich nicht mehr auf dem Standardpfad.
> _Verwenden Sie es nicht mehr._ Verwenden Sie stattdessen die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API).

## Grundkonzepte

Bevor Sie die einzige Methode in diesem Interface, [`readEntries()`](#readentries), aufrufen, erstellen Sie das [`DirectoryEntrySync`](/de/docs/Web/API/DirectoryEntrySync)-Objekt. Aber DirectoryEntrySync (sowie [`FileEntrySync`](/de/docs/Web/API/FileEntrySync)) ist kein Datentyp, den Sie zwischen einer aufrufenden Anwendung und einem Web Worker-Thread übergeben können. Das ist kein großes Problem, da es nicht wirklich notwendig ist, dass die Hauptanwendung und der Worker-Thread dasselbe JavaScript-Objekt sehen; sie müssen nur auf dieselben Dateien zugreifen können. Sie können dies tun, indem Sie anstelle einer Liste von Einträgen eine Liste von `filesystem:` URLs übergeben, die einfach Strings sind. Sie können auch die `filesystem:` URL verwenden, um den Eintrag mit `resolveLocalFileSystemURL()` nachzuschlagen. Das bringt Sie zurück zu einem DirectoryEntrySync (sowie FileEntrySync)-Objekt.

### Beispiel

Im folgenden Codeausschnitt von [HTML5Rocks (web.dev)](https://web.dev/articles/filesystem-sync) erstellen wir Web Worker und übergeben Daten von diesen an die Hauptanwendung.

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

Das Folgende ist der `worker.js`-Code, der den Inhalt des Verzeichnisses abrufen kann.

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

## Methode

### readEntries()

Gibt eine Liste von Einträgen aus einem bestimmten Verzeichnis zurück. Rufen Sie diese Methode so lange auf, bis ein leeres Array zurückgegeben wird.

#### Syntax

```js-nolint
readEntries()
```

##### Parameter

Keine.

##### Rückgabewert

Array, das [`FileEntrySync`](/de/docs/Web/API/FileEntrySync) und [`DirectoryEntrySync`](/de/docs/Web/API/DirectoryEntrySync) enthält.

##### Ausnahmen

Diese Methode kann eine [DOMException](/de/docs/Web/API/DOMException) mit den folgenden Codes auslösen:

| Ausnahme            | Beschreibung                                                                          |
| ------------------- | ------------------------------------------------------------------------------------- |
| `NOT_FOUND_ERR`     | Das Verzeichnis existiert nicht.                                                      |
| `INVALID_STATE_ERR` | Das Verzeichnis wurde seit dem ersten Aufruf von readEntries geändert.                |
| `SECURITY_ERR`      | Der Browser hat festgestellt, dass es nicht sicher war, die Metadaten nachzuschlagen. |

## Spezifikationen

Dieses Feature ist nicht mehr Teil einer Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)

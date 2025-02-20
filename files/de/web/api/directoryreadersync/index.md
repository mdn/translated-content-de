---
title: DirectoryReaderSync
slug: Web/API/DirectoryReaderSync
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}{{Deprecated_Header}}

Das `DirectoryReaderSync`-Interface ermöglicht das Lesen der Einträge in einem Verzeichnis.

> [!WARNING]
> Dieses Interface ist veraltet und gehört nicht mehr zum Standard.
> _Verwenden Sie es nicht mehr._ Nutzen Sie stattdessen die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API).

## Grundlegende Konzepte

Bevor Sie die einzige Methode in diesem Interface aufrufen, [`readEntries()`](#readentries), erstellen Sie das [`DirectoryEntrySync`](/de/docs/Web/API/DirectoryEntrySync)-Objekt. Aber DirectoryEntrySync (ebenso wie [`FileEntrySync`](/de/docs/Web/API/FileEntrySync)) ist kein Datentyp, den Sie zwischen einer aufrufenden Anwendung und einem Web Worker-Thread übergeben können. Das ist nicht weiter schlimm, da Sie nicht unbedingt dasselbe JavaScript-Objekt in der Hauptanwendung und im Worker-Thread sehen müssen; Sie müssen lediglich auf dieselben Dateien zugreifen. Das kann erreicht werden, indem Sie eine Liste von `filesystem:` URLs — die einfach Zeichenketten sind — anstelle einer Liste von Einträgen übergeben. Sie können die `filesystem:` URL auch verwenden, um den Eintrag mit `solveLocalFileSystemURL()` nachzuschlagen. Dadurch erhalten Sie wieder ein DirectoryEntrySync- (sowie FileEntrySync-) Objekt.

### Beispiel

Im folgenden Code-Schnipsel von [HTML5Rocks (web.dev)](https://web.dev/articles/filesystem-sync), erstellen wir Web Workers und übergeben Daten daraus an die Hauptanwendung.

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

Das folgende ist der Code von `worker.js`, der den Inhalt des Verzeichnisses abruft.

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
    const fs = requestFileSystemSync(TEMPORARY, 1024 * 1024 /*1MB*/);

    getAllEntries(fs.root.createReader());

    self.postMessage({ entries: paths });
  } catch (e) {
    onError(e);
  }
};
```

## Methode

### readEntries()

Gibt eine Liste von Einträgen aus einem spezifischen Verzeichnis zurück. Rufen Sie diese Methode auf, bis ein leeres Array zurückgegeben wird.

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

| Ausnahme            | Beschreibung                                                                      |
| ------------------- | --------------------------------------------------------------------------------- |
| `NOT_FOUND_ERR`     | Das Verzeichnis existiert nicht.                                                  |
| `INVALID_STATE_ERR` | Das Verzeichnis wurde seit dem ersten Aufruf von readEntries geändert.            |
| `SECURITY_ERR`      | Der Browser hat festgestellt, dass es unsicher war, die Metadaten nachzuschlagen. |

## Spezifikationen

Diese Funktion ist nicht mehr Teil einer Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)

---
title: DirectoryReaderSync
slug: Web/API/DirectoryReaderSync
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}{{Deprecated_Header}}

Das `DirectoryReaderSync` Interface ermöglicht das Lesen der Einträge in einem Verzeichnis.

> [!WARNING]
> Dieses Interface ist veraltet und ist nicht mehr im Standard aufgenommen.
> _Verwenden Sie es nicht mehr._ Nutzen Sie stattdessen die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API).

## Grundkonzepte

Bevor Sie die einzige Methode in diesem Interface aufrufen, [`readEntries()`](#readentries), erstellen Sie das [`DirectoryEntrySync`](/de/docs/Web/API/DirectoryEntrySync) Objekt. Aber DirectoryEntrySync (ebenso wie [`FileEntrySync`](/de/docs/Web/API/FileEntrySync)) ist kein Datentyp, den Sie zwischen einer aufrufenden App und einem Web Worker-Thread übergeben können. Es ist nicht weiter schlimm, da es nicht wirklich notwendig ist, dass die Hauptanwendung und der Worker-Thread das gleiche JavaScript-Objekt sehen; Sie müssen lediglich auf die gleichen Dateien zugreifen können. Dies können Sie erreichen, indem Sie eine Liste von `filesystem:` URLs — die einfach Zeichenfolgen sind — anstelle einer Liste von Einträgen übergeben. Sie können auch die `filesystem:` URL verwenden, um den Eintrag mit `resolveLocalFileSystemURL()` nachzuschlagen. Dadurch erhalten Sie wieder ein DirectoryEntrySync (sowie ein FileEntrySync) Objekt.

### Beispiel

Im folgenden Code-Snippet von [HTML5Rocks (web.dev)](https://web.dev/articles/filesystem-sync) erstellen wir Web Worker und übergeben Daten von ihnen an die Hauptanwendung.

```js
// Berücksichtigung der browserspezifischen Präfixe.
window.resolveLocalFileSystemURL =
  window.resolveLocalFileSystemURL || window.webkitResolveLocalFileSystemURL;

// Erstellen von Web Workern
const worker = new Worker("worker.js");
worker.onmessage = (e) => {
  const urls = e.data.entries;
  urls.forEach((url) => {
    window.resolveLocalFileSystemURL(url, (fileEntry) => {
      // Den Namen der Datei ausgeben.
      console.log(fileEntry.name);
    });
  });
};

worker.postMessage({ cmd: "list" });
```

Das Folgende ist der `worker.js` Code, der die Inhalte des Verzeichnisses abrufen kann.

```js
// worker.js

// Berücksichtigung der browserspezifischen Präfixe.
self.requestFileSystemSync =
  self.webkitRequestFileSystemSync || self.requestFileSystemSync;

// Global zum Speichern der Liste von Dateisystem-URLs.
const paths = [];

function getAllEntries(dirReader) {
  const entries = dirReader.readEntries();

  for (const entry of entries) {
    // Diese Dateisystem-URL des Eintrags speichern
    paths.push(entry.toURL());

    // Wenn dies ein Verzeichnis ist, durchsuchen.
    if (entry.isDirectory) {
      getAllEntries(entry.createReader());
    }
  }
}

// Fehler an die Hauptanwendung weiterleiten.
function onError(e) {
  postMessage(`ERROR: ${e.toString()}`);
}

self.onmessage = (e) => {
  const cmd = e.data.cmd;

  // Alles andere außer unserem 'list'-Befehl ignorieren.
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

Gibt eine Liste von Einträgen aus einem bestimmten Verzeichnis zurück. Rufen Sie diese Methode auf, bis ein leeres Array zurückgegeben wird.

#### Syntax

```js-nolint
readEntries()
```

##### Parameter

Keine.

##### Rückgabewert

Array, das [`FileEntrySync`](/de/docs/Web/API/FileEntrySync) und [`DirectoryEntrySync`](/de/docs/Web/API/DirectoryEntrySync) enthält.

##### Ausnahmen

Diese Methode kann eine [DOMException](/de/docs/Web/API/DOMException) mit folgenden Codes auslösen:

| Ausnahme            | Beschreibung                                                                        |
| ------------------- | ---------------------------------------------------------------------------------- |
| `NOT_FOUND_ERR`     | Das Verzeichnis existiert nicht.                                                      |
| `INVALID_STATE_ERR` | Das Verzeichnis wurde seit dem ersten Aufruf von readEntries modifiziert. |
| `SECURITY_ERR`      | Der Browser hat entschieden, dass es nicht sicher war, die Metadaten abzurufen.               |

## Spezifikationen

Dieses Feature ist nicht mehr Teil einer Spezifikation. Es wird nicht mehr als Standard verfolgt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)

---
title: "FileSystemDirectoryHandle: removeEntry()-Methode"
short-title: removeEntry()
slug: Web/API/FileSystemDirectoryHandle/removeEntry
l10n:
  sourceCommit: f10fbe2d2dc4857bf29ce955689a7ba7c1ffac8b
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`removeEntry()`**-Methode der {{domxref("FileSystemDirectoryHandle")}}-Schnittstelle versucht, einen Eintrag zu entfernen, wenn der Verzeichnishandle eine Datei oder ein Verzeichnis mit dem angegebenen Namen enthält.

## Syntax

```js-nolint
removeEntry(name)
removeEntry(name, options)
```

### Parameter

- `name`
  - : Ein String, der den {{domxref('FileSystemHandle.name')}} des Eintrags darstellt, den Sie entfernen möchten.
- `options` {{optional_inline}}

  - : Ein optionales Objekt, das Optionen enthält, welche wie folgt sind:

    - `recursive` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn auf `true` gesetzt, werden Einträge rekursiv entfernt.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit `undefined` aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Name kein gültiger String ist oder Zeichen enthält, die im Dateisystem nicht erlaubt sind.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref('PermissionStatus.state')}} für den Handle nicht `'granted'` im Modus `readwrite` ist.
- `InvalidModificationError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `recursive` auf false gesetzt ist und der zu entfernende Eintrag Kinder hat.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird oder ein Eintrag mit dem spezifischen Namen nicht gefunden oder übereinstimmt.

## Beispiele

Das folgende Beispiel entfernt einen Eintrag innerhalb des Verzeichnishandles.

```js
const entryName = "entryToRemove";

// assuming we have a directory handle: 'currentDirHandle'
currentDirHandle.removeEntry(entryName).then(() => {
  // code to run if removing was successful
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

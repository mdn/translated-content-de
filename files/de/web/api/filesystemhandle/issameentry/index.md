---
title: "FileSystemHandle: isSameEntry()-Methode"
short-title: isSameEntry()
slug: Web/API/FileSystemHandle/isSameEntry
l10n:
  sourceCommit: a9edf113447f37911ccc0c26ac507ed1d1629606
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`isSameEntry()`**-Methode der [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Schnittstelle vergleicht zwei [`Handles`](/de/docs/Web/API/FileSystemHandle), um zu überprüfen, ob die zugehörigen Einträge (entweder eine Datei oder ein Verzeichnis) übereinstimmen.

## Syntax

```js-nolint
isSameEntry(fileSystemHandle)
```

### Parameter

- [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)
  - : Das `FileSystemHandle`, das mit dem Handle, auf dem die Methode aufgerufen wird, abgeglichen werden soll.

### Rückgabewert

Ein Promise, das mit einem {{jsxref('Boolean')}} erfüllt wird.

## Beispiele

Die folgende Funktion vergleicht einen einzelnen Eintrag mit einem Array von Einträgen und gibt ein {{jsxref("Promise")}} zurück, das mit einem neuen Array erfüllt wird, bei dem alle übereinstimmenden Einträge entfernt sind.

```js
async function removeMatches(fileEntry, entriesArr) {
  const newArr = [];
  for (const entry of entriesArr) {
    if (!(await fileEntry.isSameEntry(entry))) {
      newArr.push(entry);
    }
  }
  return newArr;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

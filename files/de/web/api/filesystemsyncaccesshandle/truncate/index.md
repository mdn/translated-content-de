---
title: "FileSystemSyncAccessHandle: truncate() Methode"
short-title: truncate()
slug: Web/API/FileSystemSyncAccessHandle/truncate
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`truncate()`** Methode des [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) Interfaces ändert die Größe der Datei, die mit dem Handle assoziiert ist, auf eine angegebene Anzahl von Bytes.

> [!NOTE]
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und `truncate()` fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Allerdings implementieren alle aktuellen Browser, die diese Methoden unterstützen, sie als synchrone Methoden.

## Syntax

```js-nolint
truncate(newSize)
```

### Parameter

- `newSize`
  - : Die Anzahl an Bytes, auf die die Datei verkleinert werden soll.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das zugehörige Zugriffshandle bereits geschlossen ist oder wenn die Änderung der Binärdaten der Datei anderweitig fehlschlägt.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn `newSize` größer ist als die ursprüngliche Größe der Datei und das Speicherkontingent des Browsers [storage quota](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) überschreitet.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn das zugrunde liegende Dateisystem das Ändern der Dateigröße auf die neue Größe nicht unterstützt.

## Beispiele

```js
async function truncateFile() {
  // Get handle to draft file
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // Get sync access handle
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // Truncate the file to 0 bytes
  accessHandle.truncate(0);

  // Persist changes to disk.
  accessHandle.flush();

  // Always close FileSystemSyncAccessHandle if done.
  accessHandle.close();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

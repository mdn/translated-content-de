---
title: "FileSystemSyncAccessHandle: truncate()-Methode"
short-title: truncate()
slug: Web/API/FileSystemSyncAccessHandle/truncate
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`truncate()`**-Methode der Schnittstelle [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) ändert die Größe der Datei, die mit dem Handle verknüpft ist, auf eine bestimmte Anzahl von Bytes.

> [!NOTE]
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und `truncate()` fälschlicherweise als asynchrone Methoden angegeben, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Alle aktuellen Browser, die diese Methoden unterstützen, implementieren sie jedoch als synchrone Methoden.

## Syntax

```js-nolint
truncate(newSize)
```

### Parameter

- `newSize`
  - : Die Anzahl der Bytes, auf die die Datei geändert werden soll.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugehörige Zugriffshandle bereits geschlossen ist oder wenn die Änderung der binären Daten der Datei auf andere Weise fehlschlägt.
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Wird ausgelöst, wenn `newSize` größer ist als die ursprüngliche Dateigröße und das [Speicherkontingent](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) des Browsers überschreitet.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das zugrunde liegende Dateisystem das Setzen der Dateigröße auf die neue Größe nicht unterstützt.

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

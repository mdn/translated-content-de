---
title: "FileSystemSyncAccessHandle: truncate() Methode"
short-title: truncate()
slug: Web/API/FileSystemSyncAccessHandle/truncate
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`truncate()`**-Methode der [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Schnittstelle ändert die Größe der mit dem Handle verbundenen Datei auf eine angegebene Anzahl von Bytes.

> [!NOTE]
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und `truncate()` fälschlicherweise als asynchrone Methoden angegeben, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Alle aktuellen Browser, die diese Methoden unterstützen, implementieren sie jedoch als synchrone Methoden.

## Syntax

```js-nolint
truncate(newSize)
```

### Parameter

- `newSize`
  - : Die Anzahl an Bytes, auf die die Datei geändert werden soll.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugehörige Zugriffs-Handle bereits geschlossen ist oder wenn die Änderung der Binärdaten der Datei aus anderen Gründen fehlschlägt.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `newSize` größer als die ursprüngliche Größe der Datei ist und das Speicherlimit des Browsers übersteigt. [Speicherquote](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das zugrunde liegende Dateisystem die Einstellung der Dateigröße auf die neue Größe nicht unterstützt.

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
- [Das File System Access API: Vereinfachung des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

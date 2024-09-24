---
title: "FileSystemSyncAccessHandle: truncate()-Methode"
short-title: truncate()
slug: Web/API/FileSystemSyncAccessHandle/truncate
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`truncate()`**-Methode der {{domxref("FileSystemSyncAccessHandle")}}-Schnittstelle ändert die Größe der mit dem Handle verbundenen Datei auf eine angegebene Anzahl von Bytes.

> [!NOTE]
> In früheren Versionen der Spezifikation wurden {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}, {{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}, {{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}} und `truncate()` fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Allerdings implementieren alle aktuellen Browser, die diese Methoden unterstützen, sie als synchrone Methoden.

## Syntax

```js-nolint
truncate(newSize)
```

### Parameter

- `newSize`
  - : Die Anzahl der Bytes, auf die die Datei umgestellt werden soll.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das zugehörige Zugriffshandle bereits geschlossen ist oder wenn die Änderung der Binärdaten der Datei anderweitig fehlschlägt.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `newSize` größer als die ursprüngliche Größe der Datei ist und das Speicherkontingent des Browsers überschreitet. [storage quota](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das zugrunde liegende Dateisystem die Einstellung der Dateigröße auf die neue Größe nicht unterstützt.

## Beispiele

```js
async function truncateFile() {
  // Handle für Entwurfsdatei abrufen
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // Sync-Zugriffshandle abrufen
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // Datei auf 0 Bytes kürzen
  accessHandle.truncate(0);

  // Änderungen auf Festplatte speichern.
  accessHandle.flush();

  // FileSystemSyncAccessHandle immer schließen, wenn fertig.
  accessHandle.close();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Unterstützung

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [Die File System Access API: Vereinfachter Zugriff auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

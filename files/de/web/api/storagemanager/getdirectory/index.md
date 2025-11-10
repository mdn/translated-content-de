---
title: "StorageManager: getDirectory()-Methode"
short-title: getDirectory()
slug: Web/API/StorageManager/getDirectory
l10n:
  sourceCommit: 7fad2348ff4e117859918bf1b7a16c10f041f3a5
---

{{securecontext_header}}{{APIRef("File System API")}} {{AvailableInWorkers}}

Die **`getDirectory()`**-Methode der [`StorageManager`](/de/docs/Web/API/StorageManager)-Schnittstelle wird verwendet, um eine Referenz zu einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt zu erhalten, das den Zugriff auf ein Verzeichnis und dessen Inhalt ermöglicht, die im [origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) gespeichert sind.

## Syntax

```js-nolint
getDirectory()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, der mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erfüllt wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser das angeforderte Verzeichnis nicht dem lokalen OPFS zuordnen kann, beispielsweise aufgrund von Speicherplatz- oder Arbeitsspeicherbeschränkungen. Außerdem in einigen Browsern ausgelöst, wenn `getDirectory()` im privaten Browsing-Modus aufgerufen wird.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einigen Browsern ausgelöst, wenn `getDirectory()` im privaten Browsing-Modus aufgerufen wird.

## Beispiele

Die folgende asynchrone Event-Handler-Funktion ist innerhalb eines Web Workers enthalten. Beim Empfang einer Nachricht vom Haupt-Thread:

1. Holt ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), das die Wurzel des OPFS darstellt, mit `getDirectory()`, und speichert es in der Variablen `root`.
2. Ruft einen Datei-Handle mithilfe von [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle) ab.
3. Erstellt einen synchronen Datei-Zugriffshandle mit [`FileSystemFileHandle.createSyncAccessHandle()`](/de/docs/Web/API/FileSystemFileHandle/createSyncAccessHandle).
4. Ermittelt die Größe der Datei und erstellt einen {{jsxref("ArrayBuffer")}}, um sie zu enthalten.
5. Liest und schreibt in die Datei.
6. Speichert die Änderungen auf der Festplatte und schließt den synchronen Zugriffshandle.

```js
onmessage = async (e) => {
  // Retrieve message sent to work from main script
  const message = e.data;

  // Get handle to draft file
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // Get sync access handle
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // Get size of the file.
  const fileSize = accessHandle.getSize();
  // Read file content to a buffer.
  const buffer = new DataView(new ArrayBuffer(fileSize));
  const readBuffer = accessHandle.read(buffer, { at: 0 });

  // Write the message to the end of the file.
  const encoder = new TextEncoder();
  const encodedMessage = encoder.encode(message);
  const writeBuffer = accessHandle.write(encodedMessage, { at: readBuffer });

  // Persist changes to disk.
  accessHandle.flush();

  // Always close FileSystemSyncAccessHandle if done.
  accessHandle.close();
};
```

> [!NOTE]
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser implementierten sie auf diese Weise. Alle aktuellen Browser, die diese Methoden unterstützen, implementieren sie jedoch als synchrone Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`StorageManager`](/de/docs/Web/API/StorageManager)
- [`Navigator.storage`](/de/docs/Web/API/Navigator/storage)
- [`WorkerNavigator.storage`](/de/docs/Web/API/WorkerNavigator/storage)
- [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)

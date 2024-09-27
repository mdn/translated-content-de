---
title: "StorageManager: getDirectory()-Methode"
short-title: getDirectory()
slug: Web/API/StorageManager/getDirectory
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{securecontext_header}}{{APIRef("File System API")}} {{AvailableInWorkers}}

Die **`getDirectory()`**-Methode des [`StorageManager`](/de/docs/Web/API/StorageManager)-Interfaces wird verwendet, um eine Referenz auf ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt zu erhalten. Dieses Objekt ermöglicht den Zugriff auf ein Verzeichnis und dessen Inhalte, die im [origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) gespeichert sind.

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
  - : Wird ausgelöst, wenn der Benutzeragent das angeforderte Verzeichnis nicht mit dem lokalen OPFS abgleichen kann.

## Beispiele

Die folgende asynchrone Ereignishandler-Funktion ist in einem Web Worker enthalten. Beim Empfang einer Nachricht vom Haupt-Thread:

1. Wird ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle), das die Wurzel des OPFS darstellt, mit `getDirectory()` abgerufen und in der Variablen `root` gespeichert.
2. Wird ein Datei-Handle mit [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle) abgerufen.
3. Wird ein synchroner Dateizugriffs-Handle mit [`FileSystemFileHandle.createSyncAccessHandle()`](/de/docs/Web/API/FileSystemFileHandle/createSyncAccessHandle) erstellt.
4. Wird die Größe der Datei ermittelt und ein {{jsxref("ArrayBuffer")}} erstellt, um diese zu enthalten.
5. Wird in die Datei gelesen und geschrieben.
6. Werden die Änderungen auf die Festplatte geschrieben und der synchrone Zugriffs-Handle wird geschlossen.

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
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser haben sie auf diese Weise implementiert. Allerdings implementieren alle aktuellen Browser, die diese Methoden unterstützen, sie als synchrone Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`StorageManager`](/de/docs/Web/API/StorageManager)
- [`Navigator.storage`](/de/docs/Web/API/Navigator/storage)
- [`WorkerNavigator.storage`](/de/docs/Web/API/WorkerNavigator/storage)
- [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)

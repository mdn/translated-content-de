---
title: "StorageManager: getDirectory()-Methode"
short-title: getDirectory()
slug: Web/API/StorageManager/getDirectory
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{securecontext_header}}{{APIRef("File System API")}} {{AvailableInWorkers}}

Die **`getDirectory()`**-Methode der [`StorageManager`](/de/docs/Web/API/StorageManager)-Schnittstelle wird verwendet, um eine Referenz zu einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt zu erhalten, das Zugriff auf ein Verzeichnis und dessen Inhalte erlaubt, die im [origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) gespeichert sind.

## Syntax

```js-nolint
getDirectory()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erfüllt wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzeragent das angeforderte Verzeichnis nicht auf das lokale OPFS abbilden kann.

## Beispiele

Die folgende asynchrone Ereignis-Handler-Funktion ist innerhalb eines Web Workers enthalten. Beim Empfang einer Nachricht vom Hauptthread führt sie:

1. Ruft einen [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) ab, der die Wurzel des OPFS darstellt, und speichert ihn in der Variable `root`.
2. Holt einen Datei-Handle mit [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle).
3. Erstellt einen synchronen Datei-Zugriffs-Handle mit [`FileSystemFileHandle.createSyncAccessHandle()`](/de/docs/Web/API/FileSystemFileHandle/createSyncAccessHandle).
4. Ermittelt die Größe der Datei und erstellt einen {{jsxref("ArrayBuffer")}}, um diese zu enthalten.
5. Lese- und Schreibvorgänge in die Datei ausführt.
6. Persistiert die Änderungen auf die Festplatte und schließt den synchronen Zugriffs-Handle.

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
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Allerdings implementieren alle aktuellen Browser, die diese Methoden unterstützen, sie als synchrone Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`StorageManager`](/de/docs/Web/API/StorageManager)
- [`Navigator.storage`](/de/docs/Web/API/Navigator/storage)
- [`WorkerNavigator.storage`](/de/docs/Web/API/WorkerNavigator/storage)
- [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)

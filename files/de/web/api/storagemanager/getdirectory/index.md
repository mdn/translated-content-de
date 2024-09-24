---
title: "StorageManager: getDirectory()-Methode"
short-title: getDirectory()
slug: Web/API/StorageManager/getDirectory
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{securecontext_header}}{{APIRef("File System API")}} {{AvailableInWorkers}}

Die **`getDirectory()`**-Methode der {{domxref("StorageManager")}}-Schnittstelle wird verwendet, um eine Referenz zu einem {{domxref("FileSystemDirectoryHandle")}}-Objekt zu erhalten, das den Zugriff auf ein Verzeichnis und dessen Inhalte ermöglicht, die im [origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) gespeichert sind.

## Syntax

```js-nolint
getDirectory()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem {{domxref("FileSystemDirectoryHandle")}}-Objekt erfüllt wird.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Benutzeragent das angeforderte Verzeichnis nicht dem lokalen OPFS zuordnen kann.

## Beispiele

Die folgende asynchrone Ereignisbehandlungsfunktion ist in einem Web Worker enthalten. Beim Empfangen einer Nachricht vom Hauptthread wird:

1. Ein {{domxref("FileSystemDirectoryHandle")}}, das die Wurzel des OPFS darstellt, mit `getDirectory()` abgerufen und in der Variablen `root` gespeichert.
2. Ein Datei-Handle mit {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} abgerufen.
3. Ein synchroner Dateizugriffs-Handle mit {{domxref("FileSystemFileHandle.createSyncAccessHandle()")}} erstellt.
4. Die Größe der Datei abgerufen und ein {{jsxref("ArrayBuffer")}} erstellt, um sie zu enthalten.
5. In die Datei gelesen und geschrieben.
6. Die Änderungen auf die Festplatte übertragen und der synchrone Zugriffs-Handle geschlossen.

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
> In früheren Versionen der Spezifikation wurden {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}, {{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}, {{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}} und {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Alle aktuellen Browser, die diese Methoden unterstützen, implementieren sie jedoch als synchrone Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("StorageManager")}}
- {{domxref("Navigator.storage")}}
- {{domxref("WorkerNavigator.storage")}}
- {{domxref("FileSystemDirectoryHandle")}}

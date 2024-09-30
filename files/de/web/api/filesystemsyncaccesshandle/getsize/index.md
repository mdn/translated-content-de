---
title: "FileSystemSyncAccessHandle: getSize() Methode"
short-title: getSize()
slug: Web/API/FileSystemSyncAccessHandle/getSize
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`getSize()`**-Methode der [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Schnittstelle gibt die Größe der mit dem Handle verbundenen Datei in Bytes zurück.

> [!NOTE]
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), `getSize()` und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) fälschlicherweise als asynchrone Methoden angegeben, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Aktuelle Browser, die diese Methoden unterstützen, implementieren sie jedoch als synchrone Methoden.

## Syntax

```js-nolint
getSize()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die die Größe der Datei in Bytes darstellt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugehörige Zugriffshandle bereits geschlossen ist.

## Beispiele

Die folgende asynchrone Ereignis-Handler-Funktion ist in einem Web Worker enthalten. Bei Empfang einer Nachricht vom Hauptthread wird:

- Ein synchrones Datei-Zugriffshandle erstellt.
- Die Größe der Datei ermittelt und ein {{jsxref("ArrayBuffer")}} erstellt, der sie enthält.
- Der Dateiinhalte in den Puffer gelesen.
- Die Nachricht codiert und ans Ende der Datei geschrieben.
- Die Änderungen auf die Festplatte übermittelt und das Zugriffshandle geschlossen.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [Das File System Access API: Vereinfachung des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

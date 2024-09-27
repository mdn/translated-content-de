---
title: "FileSystemSyncAccessHandle: getSize() Methode"
short-title: getSize()
slug: Web/API/FileSystemSyncAccessHandle/getSize
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`getSize()`**-Methode des [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Interfaces gibt die Größe der mit dem Handle verknüpften Datei in Bytes zurück.

> [!NOTE]
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), `getSize()`, und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) fälschlicherweise als asynchrone Methoden festgelegt, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Allerdings implementieren alle aktuellen Browser, die diese Methoden unterstützen, sie als synchrone Methoden.

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
  - : Wird ausgelöst, wenn das zugehörige Zugriffs-Handle bereits geschlossen ist.

## Beispiele

Die folgende asynchrone Ereignis-Handler-Funktion befindet sich in einem Web Worker. Beim Empfang einer Nachricht aus dem Hauptthread:

- Erzeugt sie ein synchrones Datei-Zugriffs-Handle.
- Ermittelt sie die Größe der Datei und erstellt einen {{jsxref("ArrayBuffer")}} zur Aufnahme dieser.
- Liest sie den Dateiinhalt in den Puffer.
- Codiert sie die Nachricht und schreibt sie ans Ende der Datei.
- Speichert sie die Änderungen auf der Festplatte und schließt das Zugriffs-Handle.

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
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

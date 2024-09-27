---
title: "FileSystemSyncAccessHandle: flush() Methode"
short-title: flush()
slug: Web/API/FileSystemSyncAccessHandle/flush
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`flush()`**-Methode der [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Schnittstelle speichert alle Änderungen, die an der mit dem Handle verknüpften Datei über die [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write)-Methode vorgenommen wurden, auf der Festplatte.

Bitte beachten Sie, dass Sie diese Methode nur aufrufen müssen, wenn die Änderungen zu einem bestimmten Zeitpunkt auf die Festplatte geschrieben werden sollen. Ansonsten können Sie das zugrundeliegende Betriebssystem die Verwaltung übernehmen lassen, was in den meisten Fällen in Ordnung sein sollte.

> [!NOTE]
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), `flush()`, [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Allerdings implementieren alle aktuellen Browser, die diese Methoden unterstützen, sie als synchrone Methoden.

## Syntax

```js-nolint
flush()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugeordnete Zugriffs-Handle bereits geschlossen ist.

## Beispiele

Die folgende asynchrone Ereignis-Handler-Funktion ist in einem Web Worker enthalten. Beim Empfang einer Nachricht vom Haupt-Thread:

- Erstellt sie ein synchrones Datei-Zugriffs-Handle.
- Bestimmt die Größe der Datei und erstellt einen {{jsxref("ArrayBuffer")}}, um diese aufzunehmen.
- Liest den Inhalt der Datei in den Puffer.
- Kodiert die Nachricht und schreibt sie an das Ende der Datei.
- Speichert die Änderungen auf der Festplatte und schließt das Zugriffs-Handle.

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

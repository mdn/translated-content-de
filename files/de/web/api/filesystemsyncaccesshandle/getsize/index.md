---
title: "FileSystemSyncAccessHandle: getSize() Methode"
short-title: getSize()
slug: Web/API/FileSystemSyncAccessHandle/getSize
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`getSize()`** Methode des {{domxref("FileSystemSyncAccessHandle")}}-Interfaces gibt die Größe der mit dem Handle verbundenen Datei in Bytes zurück.

> [!NOTE]
> In früheren Versionen der Spezifikation wurden {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}, {{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}, `getSize()` und {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Allerdings implementieren alle aktuellen Browser, die diese Methoden unterstützen, sie als synchrone Methoden.

## Syntax

```js-nolint
getSize()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die die Größe der Datei in Bytes repräsentiert.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn das zugehörige Zugriffs-Handle bereits geschlossen ist.

## Beispiele

Die folgende asynchrone Ereignishandler-Funktion ist in einem Web Worker enthalten. Beim Empfang einer Nachricht aus dem Haupt-Thread:

- Erstellt ein synchrones Dateizugriffshandle.
- Ruft die Größe der Datei ab und erstellt einen {{jsxref("ArrayBuffer")}}, um sie zu enthalten.
- Liest den Dateiinhalte in den Puffer.
- Kodiert die Nachricht und schreibt sie ans Ende der Datei.
- Speichert die Änderungen auf der Festplatte und schließt das Zugriffshandle.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [Das File System Access API: Vereinfachen des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

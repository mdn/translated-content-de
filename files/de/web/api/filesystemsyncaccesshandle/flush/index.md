---
title: "FileSystemSyncAccessHandle: flush()-Methode"
short-title: flush()
slug: Web/API/FileSystemSyncAccessHandle/flush
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`flush()`**-Methode der
{{domxref("FileSystemSyncAccessHandle")}}-Schnittstelle speichert alle Änderungen, die an der Datei vorgenommen wurden, die mit dem Handle über die {{domxref('FileSystemSyncAccessHandle.write', 'write()')}}-Methode verbunden ist, auf der Festplatte.

Beachten Sie, dass Sie diese Methode nur aufrufen müssen, wenn Sie die Änderungen zu einem bestimmten Zeitpunkt auf die Festplatte übertragen müssen. Andernfalls können Sie das zugrunde liegende Betriebssystem dies handhaben lassen, wenn es dies für angemessen hält, was in den meisten Fällen in Ordnung sein sollte.

> [!NOTE]
> In früheren Versionen der Spezifikation wurden {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}, `flush()`, {{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}} und {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} fälschlicherweise als asynchrone Methoden angegeben, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Alle aktuellen Browser, die diese Methoden unterstützen, implementieren sie jedoch als synchrone Methoden.

## Syntax

```js-nolint
flush()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das zugehörige Zugriffs-Handle bereits geschlossen ist.

## Beispiele

Die folgende asynchrone Ereignishandler-Funktion befindet sich in einem Web Worker. Nach dem Empfang einer Nachricht vom Hauptthread:

- Erstellt sie ein synchrones Datei-Zugriffs-Handle.
- Ermittelt die Größe der Datei und erstellt einen {{jsxref("ArrayBuffer")}}, um sie zu enthalten.
- Liest den Dateiinhalts in den Puffer.
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

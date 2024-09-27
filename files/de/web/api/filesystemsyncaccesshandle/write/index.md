---
title: "FileSystemSyncAccessHandle: write() Methode"
short-title: write()
slug: Web/API/FileSystemSyncAccessHandle/write
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`write()`** Methode des Schnittstellenobjekts [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) schreibt den Inhalt eines angegebenen Puffers in die Datei, die mit dem Handle verknüpft ist, optional an einem gegebenen Offset.

Dateien im [ursprungsinternen Dateisystem](/de/docs/Web/API/File_System_API/Origin_private_file_system) sind für Endbenutzer nicht sichtbar und unterliegen daher nicht denselben Sicherheitsprüfungen wie Methoden, die auf Dateien im benutzer sichtbaren Dateisystem ausgeführt werden. Daher sind Schreibvorgänge, die mit `FileSystemSyncAccessHandle.write()` ausgeführt werden, wesentlich leistungsfähiger. Dies macht sie geeignet für bedeutende, groß angelegte Dateiaktualisierungen wie [SQLite](https://www.sqlite.org/wasm)-Datenbankänderungen.

## Syntax

```js-nolint
write(buffer, options)
```

### Parameter

- `buffer`
  - : Ein {{jsxref("ArrayBuffer")}} oder `ArrayBufferView` (wie z.B. ein {{jsxref("DataView")}}), der den Puffer darstellt, der in die Datei geschrieben werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `at`
      - : Eine Zahl, die den Offset in Bytes ab dem Anfang der Datei angibt, bei dem der Puffer geschrieben werden soll.

> [!NOTE]
> Sie können den Inhalt eines `ArrayBuffer` nicht direkt manipulieren. Stattdessen erstellen Sie ein typisiertes Array-Objekt wie ein {{jsxref("Int8Array")}} oder ein {{jsxref("DataView")}}-Objekt, das den Puffer in einem bestimmten Format darstellt, und verwenden dieses, um den Inhalt des Puffers zu lesen und zu schreiben.

### Rückgabewert

Eine Zahl, die die Anzahl der Bytes angibt, die in die Datei geschrieben wurden.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugehörige Zugriffshandle bereits geschlossen ist, oder wenn die Modifikation der binären Daten der Datei vollständig fehlschlägt.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die erhöhte Datenkapazität das [Speicherlimit](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) des Browsers überschreitet.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das zugrunde liegende Dateisystem das Schreiben der Datei vom angegebenen Dateioffset nicht unterstützt.

## Beispiele

Die folgende asynchrone Ereignis-Handler Funktion ist innerhalb eines Web Workers enthalten. Beim Empfang einer Nachricht vom Hauptthread wird folgende durchgeführt:

- Erstellen eines synchronen Dateizugriffshandles.
- Ermitteln der Dateigröße und Erstellen eines {{jsxref("ArrayBuffer")}}, um sie aufzunehmen.
- Lesen der Dateiinhalte in den Puffer.
- Kodieren der Nachricht und Schreiben ans Ende der Datei.
- Persistieren der Änderungen auf der Festplatte und Schließen des Zugriffshandles.

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
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Alle aktuellen Browser, die diese Methoden unterstützen, implementieren sie jedoch als synchrone Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

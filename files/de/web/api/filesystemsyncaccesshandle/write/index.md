---
title: "FileSystemSyncAccessHandle: write() Methode"
short-title: write()
slug: Web/API/FileSystemSyncAccessHandle/write
l10n:
  sourceCommit: d65517535ae067fa876d5fae83626dff838e9796
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`write()`**-Methode des [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Interfaces schreibt den Inhalt eines angegebenen Puffers in die Datei, die mit dem Handle verknüpft ist, optional an einem gegebenen Offset.

Dateien im [origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) sind für Endbenutzer nicht sichtbar und unterliegen daher nicht denselben Sicherheitsüberprüfungen wie Methoden, die auf Dateien im für Benutzer sichtbaren Dateisystem ausgeführt werden. Daher sind Schreibvorgänge, die mit `FileSystemSyncAccessHandle.write()` durchgeführt werden, wesentlich performanter. Dies macht sie geeignet für signifikante, groß angelegte Dateiaktualisierungen wie [SQLite](https://sqlite.org/wasm)-Datenbankänderungen.

## Syntax

```js-nolint
write(buffer, options)
```

### Parameter

- `buffer`
  - : Ein {{jsxref("ArrayBuffer")}} oder `ArrayBufferView` (wie ein {{jsxref("DataView")}}), der den Puffer darstellt, der in die Datei geschrieben werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden Eigenschaften:
    - `at`
      - : Eine Zahl, die den Offset in Bytes vom Beginn der Datei angibt, an dem der Puffer geschrieben werden soll.

> [!NOTE]
> Sie können den Inhalt eines `ArrayBuffer` nicht direkt manipulieren. Stattdessen erstellen Sie ein typisiertes Array-Objekt wie ein {{jsxref("Int8Array")}} oder ein {{jsxref("DataView")}}-Objekt, das den Puffer in einem spezifischen Format darstellt, und verwenden dieses, um den Inhalt des Puffers zu lesen und zu schreiben.

### Rückgabewert

Eine Zahl, die die Anzahl der in die Datei geschriebenen Bytes darstellt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugeordnete Zugriffshandle bereits geschlossen ist oder wenn die Änderung der binären Daten der Datei vollständig fehlschlägt.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die erhöhte Datenkapazität das [Speicherlimit](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) des Browsers überschreitet.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das zugrunde liegende Dateisystem nicht unterstützt, die Datei ab dem angegebenen Dateioffset zu schreiben.

## Beispiele

Die folgende asynchrone Ereignis-Handler-Funktion ist innerhalb eines Web Workers enthalten. Beim Empfang einer Nachricht vom Hauptthread:

- Erstellt ein synchrones Datei-Zugriffshandle.
- Holt die Größe der Datei und erstellt einen {{jsxref("ArrayBuffer")}}, um sie zu enthalten.
- Liest den Dateiinhalte in den Puffer.
- Kodiert die Nachricht und schreibt sie an das Ende der Datei.
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

> [!NOTE]
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Allerdings implementieren alle aktuellen Browser, die diese Methoden unterstützen, sie als synchrone Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

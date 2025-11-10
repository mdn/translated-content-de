---
title: "FileSystemSyncAccessHandle: write()-Methode"
short-title: write()
slug: Web/API/FileSystemSyncAccessHandle/write
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`write()`**-Methode des [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Interfaces schreibt den Inhalt eines angegebenen Puffers in die Datei, die mit dem Handle verbunden ist, optional an einer bestimmten Position.

Dateien im [ursprungsbezogenen privaten Dateisystem](/de/docs/Web/API/File_System_API/Origin_private_file_system) sind für Endnutzer nicht sichtbar, daher unterliegen sie nicht denselben Sicherheitsüberprüfungen wie Methoden, die auf Dateien im für den Benutzer sichtbaren Dateisystem ausgeführt werden. Aus diesem Grund sind Schreibvorgänge mit `FileSystemSyncAccessHandle.write()` weitaus performanter. Dies macht sie geeignet für bedeutende, groß angelegte Dateiaktualisierungen wie Änderungen an [SQLite](https://sqlite.org/wasm)-Datenbanken.

## Syntax

```js-nolint
write(buffer, options)
```

### Parameter

- `buffer`
  - : Ein {{jsxref("ArrayBuffer")}} oder `ArrayBufferView` (wie z.B. ein {{jsxref("DataView")}}), das den Puffer darstellt, der in die Datei geschrieben werden soll.
- `options` {{optional_inline}}
  - : Ein options-Objekt, das die folgenden Eigenschaften enthält:
    - `at`
      - : Eine Zahl, die den Versatz in Bytes vom Anfang der Datei angibt, an dem der Puffer geschrieben werden soll.

> [!NOTE]
> Sie können den Inhalt eines `ArrayBuffer` nicht direkt manipulieren. Stattdessen erstellen Sie ein typisiertes Array-Objekt wie ein {{jsxref("Int8Array")}} oder ein {{jsxref("DataView")}}-Objekt, das den Puffer in einem bestimmten Format darstellt, und verwenden dieses, um den Inhalt des Puffers zu lesen und zu schreiben.

### Rückgabewert

Eine Zahl, die die Anzahl der Bytes darstellt, die in die Datei geschrieben wurden.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugehörige Zugriffs-Handle bereits geschlossen ist oder wenn die Änderung der binären Daten der Datei vollständig fehlschlägt.
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Wird ausgelöst, wenn die erhöhte Datenkapazität das [Speicherquotum](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) des Browsers überschreitet.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das zugrunde liegende Dateisystem das Schreiben der Datei vom angegebenen Dateiversatz nicht unterstützt.

## Beispiele

Die folgende asynchrone Event-Handler-Funktion ist in einem Web-Worker enthalten. Beim Empfang einer Nachricht vom Haupt-Thread führt sie folgendes aus:

- Erstellt ein synchrones Datei-Zugriffs-Handle.
- Ruft die Dateigröße ab und erstellt einen {{jsxref("ArrayBuffer")}}, um sie aufzunehmen.
- Liest den Dateiinhalt in den Puffer.
- Kodiert die Nachricht und schreibt sie ans Ende der Datei.
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

> [!NOTE]
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Alle aktuellen Browser, die diese Methoden unterstützen, implementieren sie jedoch als synchrone Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

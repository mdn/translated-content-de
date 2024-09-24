---
title: "FileSystemSyncAccessHandle: write()-Methode"
short-title: write()
slug: Web/API/FileSystemSyncAccessHandle/write
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`write()`**-Methode des {{domxref("FileSystemSyncAccessHandle")}}-Interfaces schreibt den Inhalt eines angegebenen Puffers in die Datei, die mit dem Handle verknüpft ist, optional an einem bestimmten Offset.

Dateien im [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) sind für Endbenutzer nicht sichtbar und unterliegen daher nicht denselben Sicherheitsüberprüfungen wie Methoden, die auf Dateien im für den Benutzer sichtbaren Dateisystem ausgeführt werden. Daher sind Schreibvorgänge, die mit `FileSystemSyncAccessHandle.write()` ausgeführt werden, wesentlich leistungsfähiger. Dies macht sie geeignet für bedeutende, großangelegte Dateivorgänge wie Änderungen in einer [SQLite](https://www.sqlite.org/wasm)-Datenbank.

## Syntax

```js-nolint
write(buffer, options)
```

### Parameter

- `buffer`
  - : Ein {{jsxref("ArrayBuffer")}} oder `ArrayBufferView` (wie {{jsxref("DataView")}}), der den Puffer repräsentiert, der in die Datei geschrieben werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `at`
      - : Eine Zahl, die den Offset in Byte vom Anfang der Datei angibt, an dem der Puffer geschrieben werden soll.

> [!NOTE]
> Sie können den Inhalt eines `ArrayBuffer` nicht direkt manipulieren. Stattdessen erstellen Sie ein typisiertes Array-Objekt wie ein {{jsxref("Int8Array")}} oder ein {{jsxref("DataView")}}, das den Puffer in einem bestimmten Format darstellt, und verwenden dieses, um den Inhalt des Puffers zu lesen und zu schreiben.

### Rückgabewert

Eine Zahl, die die Anzahl der in die Datei geschriebenen Bytes darstellt.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das zugehörige Zugriffs-Handle bereits geschlossen ist oder wenn die Änderung der Binärdatei vollständig fehlschlägt.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die gesteigerte Datenkapazität das [Speicherkontingent](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) des Browsers überschreitet.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das zugrunde liegende Dateisystem nicht unterstützt, die Datei vom angegebenen Dateioffset aus zu schreiben.

## Beispiele

Die folgende asynchrone Event-Handler-Funktion befindet sich in einem Web Worker. Beim Empfang einer Nachricht vom Haupt-Thread wird:

- Ein synchrones Datei-Zugriffs-Handle erstellt.
- Die Größe der Datei ermittelt und ein {{jsxref("ArrayBuffer")}} erstellt, um diese aufzunehmen.
- Der Dateiinhalte in den Puffer gelesen.
- Die Nachricht kodiert und ans Ende der Datei geschrieben.
- Die Änderungen auf die Festplatte geschrieben und das Zugriffs-Handle geschlossen.

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
> In früheren Versionen der Spezifikation wurden {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}, {{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}, {{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}, und {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Allerdings implementieren alle aktuellen Browser, die diese Methoden unterstützen, sie als synchrone Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: Vereinfachter Zugriff auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

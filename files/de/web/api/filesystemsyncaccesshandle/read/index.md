---
title: "FileSystemSyncAccessHandle: Methode read()"
short-title: read()
slug: Web/API/FileSystemSyncAccessHandle/read
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`read()`**-Methode der {{domxref("FileSystemSyncAccessHandle")}}-Schnittstelle liest den Inhalt der mit dem Handle verknüpften Datei in einen angegebenen Puffer ein, optional an einem bestimmten Offset.

## Syntax

```js-nolint
read(buffer, options)
```

### Parameter

- `buffer`
  - : Ein {{jsxref("ArrayBuffer")}} oder `ArrayBufferView` (wie beispielsweise ein {{jsxref("DataView")}}), der den Puffer darstellt, in den der Dateiinhalt eingelesen werden soll. Beachten Sie, dass Sie den Inhalt eines `ArrayBuffer` nicht direkt manipulieren können. Stattdessen erstellen Sie eines der typisierten Array-Objekte wie einen {{jsxref("Int8Array")}} oder ein {{jsxref("DataView")}}-Objekt, das den Puffer in einem bestimmten Format darstellt, und verwenden dieses zum Lesen und Schreiben des Pufferinhalts.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das folgende Eigenschaften enthält:

    - `at`
      - : Eine Zahl, die den Offset in Bytes angibt, von dem aus die Datei gelesen werden soll.

### Rückgabewert

Eine Zahl, die die Anzahl der aus der Datei gelesenen Bytes darstellt.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das zugehörige Access Handle bereits geschlossen ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das zugrunde liegende Dateisystem das Lesen der Datei vom angegebenen Dateioffset nicht unterstützt.

## Beispiele

Die folgende asynchrone Ereignisbehandlungsfunktion ist in einen Web-Worker eingebettet. Beim Empfang einer Nachricht vom Haupt-Thread:

- Erstellt sie ein synchrones Datei-Access-Handle.
- Ermittelt die Größe der Datei und erstellt einen {{jsxref("ArrayBuffer")}}, um sie zu enthalten.
- Liest sie den Dateiinhalte in den Puffer.
- Kodiert sie die Nachricht und schreibt sie an das Ende der Datei.
- Speichert sie die Änderungen auf der Festplatte und schließt das Access-Handle.

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
> In früheren Versionen der Spezifikation wurden {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}, {{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}, {{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}, und {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Alle aktuellen Browser, die diese Methoden unterstützen, implementieren sie jedoch als synchrone Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

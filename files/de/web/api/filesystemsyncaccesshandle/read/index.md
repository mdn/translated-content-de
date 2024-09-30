---
title: "FileSystemSyncAccessHandle: read()-Methode"
short-title: read()
slug: Web/API/FileSystemSyncAccessHandle/read
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`read()`**-Methode des [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Interfaces liest den Inhalt der Datei, die mit dem Handle verknüpft ist, in einen angegebenen Puffer, optional an einem bestimmten Offset.

## Syntax

```js-nolint
read(buffer, options)
```

### Parameter

- `buffer`
  - : Ein {{jsxref("ArrayBuffer")}} oder `ArrayBufferView` (wie ein {{jsxref("DataView")}}), der den Puffer darstellt, in den der Dateiinhalt gelesen werden soll. Beachten Sie, dass Sie die Inhalte eines `ArrayBuffer` nicht direkt manipulieren können. Stattdessen erstellen Sie eines der typisierten Array-Objekte wie ein {{jsxref("Int8Array")}} oder ein {{jsxref("DataView")}}-Objekt, welches den Puffer in einem bestimmten Format darstellt, und verwenden dieses, um die Inhalte des Puffers zu lesen und zu schreiben.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt mit den folgenden Eigenschaften:

    - `at`
      - : Eine Zahl, die den Offset in Bytes angibt, ab dem die Datei gelesen werden soll.

### Rückgabewert

Eine Zahl, die die Anzahl der aus der Datei gelesenen Bytes darstellt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugehörige Zugriffs-Handle bereits geschlossen ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das zugrunde liegende Dateisystem das Lesen der Datei vom angegebenen Dateioffset nicht unterstützt.

## Beispiele

Die folgende asynchrone Ereignis-Handler-Funktion ist in einem Web Worker enthalten. Beim Empfang einer Nachricht vom Haupt-Thread:

- Erzeugt es ein synchrones Datei-Zugriffs-Handle.
- Ermittelt die Größe der Datei und erstellt einen {{jsxref("ArrayBuffer")}}, um diese zu enthalten.
- Liest den Dateiinhalt in den Puffer.
- Kodiert die Nachricht und schreibt sie an das Ende der Datei.
- Persistiert die Änderungen auf der Festplatte und schließt das Zugriffs-Handle.

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
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) fälschlicherweise als asynchrone Methoden angegeben, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Allerdings implementieren alle aktuellen Browser, die diese Methoden unterstützen, sie als synchrone Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

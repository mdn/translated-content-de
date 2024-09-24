---
title: FileSystemSyncAccessHandle
slug: Web/API/FileSystemSyncAccessHandle
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`FileSystemSyncAccessHandle`** Schnittstelle der {{domxref("File System API", "File System API", "", "nocode")}} repräsentiert einen synchronen Zugriff auf einen Datei-Systemeintrag.

Diese Klasse ist nur innerhalb dedizierter [Web Worker](/de/docs/Web/API/Web_Workers_API) zugänglich (sodass ihre Methoden die Ausführung im Hauptthread nicht blockieren) für Dateien innerhalb des [ursprungsbasierten privaten Dateisystems](/de/docs/Web/API/File_System_API/Origin_private_file_system), das für Endbenutzer nicht sichtbar ist.

Infolgedessen unterliegen ihre Methoden nicht denselben Sicherheitsüberprüfungen wie Methoden, die auf Dateien innerhalb des für Benutzer sichtbaren Dateisystems ausgeführt werden, und sind daher wesentlich performanter. Dies macht sie geeignet für bedeutende, umfangreiche Dateiaktualisierungen wie z.B. [SQLite](https://www.sqlite.org/wasm) Datenbankmodifikationen.

Die Schnittstelle wird über die {{domxref('FileSystemFileHandle.createSyncAccessHandle()')}} Methode aufgerufen.

> [!NOTE]
> In früheren Versionen der Spezifikation wurden {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}, {{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}, {{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}} und {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Alle aktuellen Browser, die diese Methoden unterstützen, implementieren sie jedoch als synchrone Methoden.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- {{domxref('FileSystemSyncAccessHandle.close', 'close()')}}
  - : Schließt einen offenen synchronen Dateizugriff, deaktiviert weitere Operationen darauf und gibt das zuvor auf die Datei gesetzte exklusive Sperre frei.
- {{domxref('FileSystemSyncAccessHandle.flush', 'flush()')}}
  - : Sichert alle mit der {{domxref('FileSystemSyncAccessHandle.write', 'write()')}} Methode über den Zugriffshandle vorgenommenen Änderungen an der Datei auf der Festplatte.
- {{domxref('FileSystemSyncAccessHandle.getSize', 'getSize()')}}
  - : Gibt die Größe der Datei, die mit dem Handle verknüpft ist, in Bytes zurück.
- {{domxref('FileSystemSyncAccessHandle.read', 'read()')}}
  - : Liest den Inhalt der Datei, die mit dem Handle verknüpft ist, in einen angegebenen Puffer, optional an einem bestimmten Offset.
- {{domxref('FileSystemSyncAccessHandle.truncate', 'truncate()')}}
  - : Ändert die Größe der Datei, die mit dem Handle verknüpft ist, auf eine angegebene Anzahl von Bytes.
- {{domxref('FileSystemSyncAccessHandle.write', 'write()')}}
  - : Schreibt den Inhalt eines angegebenen Puffers in die Datei, die mit dem Handle verknüpft ist, optional an einem bestimmten Offset.

## Beispiele

Die folgende asynchrone Ereignishandlerfunktion ist innerhalb eines Web Workers enthalten. Bei Empfang einer Nachricht vom Haupt-Thread:

- Erstellt sie einen synchronen Dateizugriffshandle.
- Ermittelt die Größe der Datei und erstellt einen {{jsxref("ArrayBuffer")}}, um diese zu enthalten.
- Liest die Dateiinhalte in den Puffer.
- Kodiert die Nachricht und schreibt sie an das Ende der Datei.
- Sichert die Änderungen auf der Festplatte und schließt den Zugriffshandle.

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

---
title: FileSystemSyncAccessHandle
slug: Web/API/FileSystemSyncAccessHandle
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Das **`FileSystemSyncAccessHandle`** Interface der [File System API](/de/docs/Web/API/File_System_API) repräsentiert einen synchronen Zugriff auf einen Dateisystemeintrag.

Diese Klasse ist nur innerhalb dedizierter [Web Workers](/de/docs/Web/API/Web_Workers_API) zugänglich (damit ihre Methoden die Ausführung im Haupt-Thread nicht blockieren) für Dateien innerhalb des [ursprungsbasierten privaten Dateisystems](/de/docs/Web/API/File_System_API/Origin_private_file_system), das für Endnutzer nicht sichtbar ist.

Daher unterliegen ihre Methoden nicht denselben Sicherheitsprüfungen wie Methoden, die auf Dateien im für Nutzer sichtbaren Dateisystem ausgeführt werden, und sind daher wesentlich performanter. Dies macht sie geeignet für bedeutende, groß angelegte Dateiaktualisierungen wie beispielsweise [SQLite](https://www.sqlite.org/wasm) Datenbankmodifikationen.

Das Interface wird über die Methode [`FileSystemFileHandle.createSyncAccessHandle()`](/de/docs/Web/API/FileSystemFileHandle/createSyncAccessHandle) aufgerufen.

> [!NOTE]
> In früheren Versionen der Spezifikation waren [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Allerdings implementieren alle aktuellen Browser, die diese Methoden unterstützen, sie als synchrone Methoden.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close)
  - : Schließt einen offenen synchronen Datei-Handle, deaktiviert weitere Operationen darauf und gibt die exklusive Sperre frei, die zuvor auf die mit dem Datei-Handle assoziierte Datei gelegt wurde.
- [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush)
  - : Schreibt alle Änderungen, die über die [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write) Methode an der mit dem Handle verbundenen Datei vorgenommen wurden, auf die Festplatte.
- [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize)
  - : Gibt die Größe der mit dem Handle verknüpften Datei in Bytes zurück.
- [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read)
  - : Liest den Inhalt der mit dem Handle verbundenen Datei in einen angegebenen Puffer, optional bei einem bestimmten Offset.
- [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate)
  - : Ändert die Größe der mit dem Handle verbundenen Datei auf eine bestimmte Anzahl von Bytes.
- [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write)
  - : Schreibt den Inhalt eines angegebenen Puffers in die mit dem Handle verknüpfte Datei, optional bei einem bestimmten Offset.

## Beispiele

Die folgende asynchrone Ereignisbehandlungsfunktion befindet sich innerhalb eines Web Workers. Beim Empfang einer Nachricht vom Haupt-Thread:

- Erstellt sie einen synchronen Dateizugriffs-Handle.
- Holt die Größe der Datei und erstellt einen {{jsxref("ArrayBuffer")}}, um sie zu enthalten.
- Liest den Dateinhalt in den Puffer.
- Kodiert die Nachricht und schreibt sie ans Ende der Datei.
- Speichert die Änderungen auf der Festplatte und schließt den Zugriffshandle.

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
- [The File System Access API: Vereinfachung des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

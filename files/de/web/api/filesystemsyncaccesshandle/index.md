---
title: FileSystemSyncAccessHandle
slug: Web/API/FileSystemSyncAccessHandle
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Das **`FileSystemSyncAccessHandle`** Interface der [File System API](/de/docs/Web/API/File_System_API) stellt einen synchronen Zugriff auf einen Eintrag des Dateisystems dar.

Diese Klasse ist nur in dedizierten [Web Workers](/de/docs/Web/API/Web_Workers_API) zugänglich (damit ihre Methoden die Ausführung im Haupt-Thread nicht blockieren) für Dateien im [origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system), welches für Endnutzer nicht sichtbar ist.

Daher unterliegen ihre Methoden nicht den gleichen Sicherheitsüberprüfungen wie Methoden, die auf Dateien im für Nutzer sichtbaren Dateisystem ausgeführt werden, und sind daher wesentlich performanter. Dies macht sie geeignet für signifikante, groß angelegte Dateiaktualisierungen wie zum Beispiel [SQLite](https://www.sqlite.org/wasm)-Datenbankänderungen.

Das Interface wird über die [`FileSystemFileHandle.createSyncAccessHandle()`](/de/docs/Web/API/FileSystemFileHandle/createSyncAccessHandle) Methode angesprochen.

> [!NOTE]
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize), und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) fälschlicherweise als asynchrone Methoden spezifiziert, und ältere Versionen einiger Browser implementierten sie auf diese Weise. Allerdings implementieren alle aktuellen Browser, die diese Methoden unterstützen, sie als synchrone Methoden.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close)
  - : Schließt einen offenen synchronen Dateizugriffsgriff, wodurch weitere Operationen darauf deaktiviert werden und die zuvor auf die mit dem Dateigriff verknüpfte Datei angewendete exklusive Sperre freigegeben wird.
- [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush)
  - : Speichert alle über die [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write) Methode vorgenommenen Änderungen an der mit dem Griff verbundenen Datei auf die Festplatte.
- [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize)
  - : Gibt die Größe der mit dem Griff verbundenen Datei in Bytes zurück.
- [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read)
  - : Liest den Inhalt der mit dem Griff verbundenen Datei in einen angegebenen Puffer, optional ab einer gegebenen Position.
- [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate)
  - : Passt die Größe der mit dem Griff verbundenen Datei auf eine angegebene Anzahl von Bytes an.
- [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write)
  - : Schreibt den Inhalt eines angegebenen Puffers in die mit dem Griff verbundene Datei, optional ab einer gegebenen Position.

## Beispiele

Die folgende asynchrone Ereignishandlerfunktion befindet sich innerhalb eines Web Workers. Bei Erhalt einer Nachricht vom Haupt-Thread führt sie aus:

- Erstellt einen synchronen Dateizugriffsgriff.
- Ruft die Größe der Datei ab und erstellt einen {{jsxref("ArrayBuffer")}}, um ihn zu enthalten.
- Liest den Dateiinhalt in den Puffer.
- Codiert die Nachricht und schreibt sie an das Ende der Datei.
- Speichert die Änderungen auf die Festplatte und schließt den Zugriffsgriff.

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

---
title: FileSystemSyncAccessHandle
slug: Web/API/FileSystemSyncAccessHandle
l10n:
  sourceCommit: d65517535ae067fa876d5fae83626dff838e9796
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Das **`FileSystemSyncAccessHandle`**-Interface der [File System API](/de/docs/Web/API/File_System_API) repräsentiert einen synchronen Handle zu einem Dateisystemeintrag.

Diese Klasse ist nur innerhalb dedizierter [Web Workers](/de/docs/Web/API/Web_Workers_API) zugänglich (damit ihre Methoden die Ausführung im Haupt-Thread nicht blockieren) für Dateien innerhalb des [origin-privaten Dateisystems](/de/docs/Web/API/File_System_API/Origin_private_file_system), welches für Endbenutzer nicht sichtbar ist.

Infolgedessen unterliegen ihre Methoden nicht denselben Sicherheitsüberprüfungen wie Methoden, die auf Dateien im benutzer-sichtbaren Dateisystem ausgeführt werden, und sind daher wesentlich leistungsfähiger. Das macht sie geeignet für signifikante, großflächige Dateiaktualisierungen wie [SQLite](https://sqlite.org/wasm)-Datenbankmodifikationen.

Auf das Interface wird über die Methode [`FileSystemFileHandle.createSyncAccessHandle()`](/de/docs/Web/API/FileSystemFileHandle/createSyncAccessHandle) zugegriffen.

> [!NOTE]
> In früheren Versionen der Spezifikation wurden [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close), [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize), und [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) fälschlicherweise als asynchrone Methoden angegeben, und ältere Versionen einiger Browser implementieren sie auf diese Weise. Allerdings implementieren alle aktuellen Browser, die diese Methoden unterstützen, sie als synchrone Methoden.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close)
  - : Schliesst einen offenen synchronen Datei-Handle, deaktiviert weitere Operationen darauf und gibt die exklusive Sperre frei, die zuvor auf die Datei im Zusammenhang mit dem Datei-Handle gesetzt wurde.
- [`flush()`](/de/docs/Web/API/FileSystemSyncAccessHandle/flush)
  - : Schreibt alle Änderungen, die durch die [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write)-Methode an der mit dem Handle verbundenen Datei vorgenommen wurden, auf die Festplatte.
- [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize)
  - : Gibt die Größe der mit dem Handle verbundenen Datei in Bytes zurück.
- [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read)
  - : Liest den Inhalt der mit dem Handle verbundenen Datei in einen angegebenen Puffer, optional an einem bestimmten Offset.
- [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate)
  - : Ändert die Größe der mit dem Handle verbundenen Datei auf eine angegebene Anzahl von Bytes.
- [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write)
  - : Schreibt den Inhalt eines angegebenen Puffers in die mit dem Handle verbundene Datei, optional an einem bestimmten Offset.

## Beispiele

Die folgende asynchrone Ereignisbearbeiterfunktion befindet sich innerhalb eines Web Workers. Beim Empfang einer Nachricht vom Haupt-Thread:

- Wird ein synchroner Datei-Zugriffshandle erstellt.
- Die Größe der Datei wird ermittelt und ein {{jsxref("ArrayBuffer")}} erstellt, um sie zu enthalten.
- Der Dateiinhalte wird in den Puffer gelesen.
- Die Nachricht wird codiert und an das Ende der Datei geschrieben.
- Die Änderungen werden auf die Festplatte geschrieben und der Zugriffshandle wird geschlossen.

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

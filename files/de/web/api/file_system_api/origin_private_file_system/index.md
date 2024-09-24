---
title: Ursprungsprivates Dateisystem
slug: Web/API/File_System_API/Origin_private_file_system
l10n:
  sourceCommit: 2cba64f68aab9e233fecfc2bab8bea4118716c14
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

Das **ursprungsprivate Dateisystem** (OPFS) ist ein Speicherendpunkt, der als Teil der [File System API](/de/docs/Web/API/File_System_API) bereitgestellt wird. Dieses ist privat für den Ursprung der Seite und für den Benutzer unsichtbar, ähnlich wie das reguläre Dateisystem. Es bietet Zugriff auf eine besondere Art von Datei, die stark auf Leistung optimiert ist und einen Zugang ermöglicht, bei dem Inhalte direkt überschrieben werden können.

## Arbeiten mit Dateien über die File System Access API

Die [File System Access API](https://wicg.github.io/file-system-access/), die die [File System API](/de/docs/Web/API/File_System_API) erweitert, bietet Zugriff auf Dateien mithilfe von Auswahldialogen. Zum Beispiel:

1. {{domxref("Window.showOpenFilePicker()")}} ermöglicht es dem Nutzer, eine Datei auszuwählen, woraufhin ein {{domxref("FileSystemFileHandle")}}-Objekt zurückgegeben wird.
2. {{domxref("FileSystemFileHandle.getFile()")}} wird aufgerufen, um Zugriff auf den Inhalt der Datei zu erhalten. Der Inhalt kann mit {{domxref("FileSystemFileHandle.createWritable()")}} / {{domxref("FileSystemWritableFileStream.write()")}} geändert werden.
3. {{domxref("FileSystemHandle.requestPermission()", "FileSystemHandle.requestPermission({mode: 'readwrite'})")}} wird verwendet, um die Erlaubnis des Nutzers zu erbitten, die Änderungen zu speichern.
4. Wenn der Nutzer die Berechtigungsanfrage akzeptiert, werden die Änderungen an der Originaldatei gespeichert.

Dies funktioniert, hat aber einige Einschränkungen. Diese Änderungen werden am benutzer-sichtbaren Dateisystem vorgenommen, weshalb zahlreiche Sicherheitsüberprüfungen (zum Beispiel [Safe Browsing](https://developers.google.com/safe-browsing) in Chrome) implementiert sind, um zu verhindern, dass schädliche Inhalte in dieses Dateisystem geschrieben werden. Diese Schreibvorgänge erfolgen nicht an Ort und Stelle, sondern verwenden eine temporäre Datei. Das Original wird nicht verändert, es sei denn, es besteht alle Sicherheitsprüfungen.

Infolgedessen sind diese Vorgänge relativ langsam. Dies fällt nicht so stark auf, wenn Sie kleine Textänderungen vornehmen, aber die Leistung leidet bei umfangreicheren, groß angelegten Dateiaktualisierungen wie [SQLite](https://www.sqlite.org/wasm)-Datenbankänderungen.

## Wie löst das OPFS solche Probleme?

Das OPFS bietet Low-Level-Zugriff auf Dateien, byteweise, der privat für den Ursprung der Seite ist und für den Benutzer unsichtbar bleibt. Daher sind nicht die gleichen Sicherheitsüberprüfungen und Erlaubnisse erforderlich und es ist schneller als die Aufrufe der File System Access API. Es verfügt auch über einen Satz synchroner Aufrufe, die nur in Webarbeitern ausgeführt werden können, um den Hauptthread nicht zu blockieren.

Zusammengefasst: Wie unterscheidet sich das OPFS vom benutzer-sichtbaren Dateisystem:

- Das OPFS unterliegt den [Speicherquotenbeschränkungen des Browsers](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), wie jedes andere ursprungspartitionierte Speichersystem (zum Beispiel {{domxref("IndexedDB API", "IndexedDB API", "", "nocode")}}). Sie können den Speicherplatz des OPFS über {{domxref("StorageManager.estimate()", "navigator.storage.estimate()")}} ermitteln.
- Beim Löschen von Speicherdaten für die Seite wird das OPFS gelöscht.
- Zugriffsberechtigungen und Sicherheitsüberprüfungen sind nicht erforderlich, um auf Dateien im OPFS zuzugreifen.
- Browser speichern die Inhalte des OPFS irgendwo auf der Festplatte ab, aber Sie können nicht erwarten, dass die erstellten Dateien eins zu eins zu finden sind. Das OPFS soll für den Benutzer nicht sichtbar sein.

## Wie greifen Sie auf das OPFS zu?

Um zunächst auf das OPFS zuzugreifen, rufen Sie die Methode {{domxref("StorageManager.getDirectory()", "navigator.storage.getDirectory()")}} auf. Dies gibt eine Referenz auf ein {{domxref("FileSystemDirectoryHandle")}}-Objekt zurück, das das Root des OPFS darstellt.

## Manipulation des OPFS vom Hauptthread aus

Wenn Sie auf das OPFS vom Hauptthread zugreifen, verwenden Sie asynchrone, {{jsxref("Promise")}}-basierte APIs. Sie können Dateigriffe ({{domxref("FileSystemFileHandle")}}) und Verzeichnishandle ({{domxref("FileSystemDirectoryHandle")}}) durch Aufrufen von {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} und {{domxref("FileSystemDirectoryHandle.getDirectoryHandle()")}} erhalten, jeweils auf dem {{domxref("FileSystemDirectoryHandle")}}-Objekt, das das Root des OPFS (sowie untergeordnete Verzeichnisse, sobald sie erstellt sind) repräsentiert.

> [!NOTE]
> Wenn Sie `{ create: true }` in die obigen Methoden übergeben, wird die Datei oder der Ordner erstellt, falls sie nicht existieren.

```js
// Erstellen Sie eine Hierarchie von Dateien und Ordnern
const fileHandle = await opfsRoot.getFileHandle("my first file", {
  create: true,
});
const directoryHandle = await opfsRoot.getDirectoryHandle("my first folder", {
  create: true,
});
const nestedFileHandle = await directoryHandle.getFileHandle(
  "my first nested file",
  { create: true },
);
const nestedDirectoryHandle = await directoryHandle.getDirectoryHandle(
  "my first nested folder",
  { create: true },
);

// Zugriff auf vorhandene Dateien und Ordner über ihre Namen
const existingFileHandle = await opfsRoot.getFileHandle("my first file");
const existingDirectoryHandle =
  await opfsRoot.getDirectoryHandle("my first folder");
```

### Eine Datei lesen

1. Machen Sie einen {{domxref("FileSystemDirectoryHandle.getFileHandle()")}}-Aufruf, um ein {{domxref("FileSystemFileHandle")}}-Objekt zurückzugeben.
2. Rufen Sie das {{domxref("FileSystemFileHandle.getFile()")}}-Objekt auf, um ein {{domxref("File")}}-Objekt zu erhalten. Dies ist eine spezialisierte Art von {{domxref("Blob")}} und kann daher wie jedes andere `Blob` manipuliert werden. Beispielsweise könnten Sie den Textinhalt direkt über {{domxref("Blob.text()")}} abrufen.

### Eine Datei schreiben

1. Machen Sie einen {{domxref("FileSystemDirectoryHandle.getFileHandle()")}}-Aufruf, um ein {{domxref("FileSystemFileHandle")}}-Objekt zu erhalten.
2. Rufen Sie {{domxref("FileSystemFileHandle.createWritable()")}} auf, um ein {{domxref("FileSystemWritableFileStream")}}-Objekt zu erhalten, das eine spezialisierte Art von {{domxref("WritableStream")}} ist.
3. Schreiben Sie Inhalte mit einem Aufruf von {{domxref("FileSystemWritableFilestream.write()")}}.
4. Schließen Sie den Stream mit {{domxref("WritableStream.close()")}}.

### Eine Datei oder einen Ordner löschen

Sie können {{domxref("FileSystemDirectoryHandle.removeEntry()")}} auf dem übergeordneten Verzeichnis aufrufen und den Namen des Elements übergeben, das Sie entfernen möchten:

```js
directoryHandle.removeEntry("my first nested file");
```

Sie können auch {{domxref("FileSystemHandle.remove()")}} auf dem {{domxref("FileSystemFileHandle")}} oder {{domxref("FileSystemDirectoryHandle")}} aufrufen, das das zu entfernende Element repräsentiert. Um einen Ordner einschließlich aller Unterordner zu löschen, geben Sie die Option `{ recursive: true }` an.

```js
await fileHandle.remove();
await directoryHandle.remove({ recursive: true });
```

Das Folgende bietet eine schnelle Möglichkeit, das gesamte OPFS zu leeren:

```js
await (await navigator.storage.getDirectory()).remove({ recursive: true });
```

### Inhalte eines Ordners auflisten

{{domxref("FileSystemDirectoryHandle")}} ist ein [asynchroner Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols). Daher können Sie es mit einer [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife und Standardmethoden wie [`entries()`](/de/docs/Web/API/FileSystemDirectoryHandle/entries), [`values()`](/de/docs/Web/API/FileSystemDirectoryHandle/entries) und [`keys()`](/de/docs/Web/API/FileSystemDirectoryHandle/entries) durchlaufen.

Zum Beispiel:

```js
for await (let [name, handle] of directoryHandle) {
}
for await (let [name, handle] of directoryHandle.entries()) {
}
for await (let handle of directoryHandle.values()) {
}
for await (let name of directoryHandle.keys()) {
}
```

## Manipulation des OPFS von einem Web Worker aus

Web Workers blockieren den Hauptthread nicht, was bedeutet, dass Sie in diesem Kontext die synchronen Datei-Zugriffs-APIs verwenden können. Synchrone APIs sind schneller, da sie nicht mit Promises umgehen müssen.

Sie können eine Datei synchron über {{domxref("FileSystemFileHandle.createSyncAccessHandle()")}} auf einem regulären {{domxref("FileSystemFileHandle")}} aufrufen:

> [!NOTE]
> Trotz des "Sync" im Namen ist die Methode `createSyncAccessHandle()` selbst asynchron.

```js
const opfsRoot = await navigator.storage.getDirectory();
const fileHandle = await opfsRoot.getFileHandle("my highspeed file.txt", {
  create: true,
});
const syncAccessHandle = await fileHandle.createSyncAccessHandle();
```

Es gibt eine Reihe von _synchronen_ Methoden, die auf dem zurückgegebenen {{domxref("FileSystemSyncAccessHandle")}} verfügbar sind:

- {{domxref("FileSystemSyncAccessHandle.getSize", "getSize()")}}: Gibt die Größe der Datei in Bytes zurück.
- {{domxref("FileSystemSyncAccessHandle.write", "write()")}}: Schreibt den Inhalt eines Puffers in die Datei, optional an einem bestimmten Offset, und gibt die Anzahl der geschriebenen Bytes zurück. Durch Überprüfung der zurückgegebenen Anzahl der geschriebenen Bytes können Aufrufer Fehler und teilweise Schreibvorgänge erkennen und behandeln.
- {{domxref("FileSystemSyncAccessHandle.read", "read()")}}: Liest den Inhalt der Datei in einen Puffer, optional an einem bestimmten Offset.
- {{domxref("FileSystemSyncAccessHandle.truncate", "truncate()")}}: Ändert die Dateigröße auf die angegebene Größe.
- {{domxref("FileSystemSyncAccessHandle.flush", "flush()")}}: Stellt sicher, dass die Datei alle durch `write()` vorgenommenen Änderungen enthält.
- {{domxref("FileSystemSyncAccessHandle.close", "close()")}}: Schließt den Zugriffshandle.

Hier ist ein Beispiel, das alle oben genannten Methoden verwendet:

```js
const opfsRoot = await navigator.storage.getDirectory();
const fileHandle = await opfsRoot.getFileHandle("fast", { create: true });
const accessHandle = await fileHandle.createSyncAccessHandle();

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

// Initialisieren Sie diese Variable für die Dateigröße.
let size;
// Die aktuelle Dateigröße, initial `0`.
size = accessHandle.getSize();
// Kodieren Sie Inhalte, um sie in die Datei zu schreiben.
const content = textEncoder.encode("Some text");
// Schreiben Sie den Inhalt am Anfang der Datei.
accessHandle.write(content, { at: size });
// Änderungen speichern.
accessHandle.flush();
// Die aktuelle Dateigröße, nun `9` (die Länge von "Some text").
size = accessHandle.getSize();

// Kodieren Sie mehr Inhalte, um sie in die Datei zu schreiben.
const moreContent = textEncoder.encode("More content");
// Schreiben Sie den Inhalt am Ende der Datei.
accessHandle.write(moreContent, { at: size });
// Änderungen speichern.
accessHandle.flush();
// Die aktuelle Dateigröße, nun `21` (die Länge von
// "Some textMore content").
size = accessHandle.getSize();

// Bereiten Sie eine Datenansicht mit der Länge der Datei vor.
const dataView = new DataView(new ArrayBuffer(size));

// Lesen Sie die gesamte Datei in die Datenansicht.
accessHandle.read(dataView, { at: 0 });
// Protokolliert `"Some textMore content"`.
console.log(textDecoder.decode(dataView));

// Lesen Sie ab Versatz 9 in die Datenansicht.
accessHandle.read(dataView, { at: 9 });
// Protokolliert `"More content"`.
console.log(textDecoder.decode(dataView));

// Kürzen Sie die Datei nach 4 Bytes.
accessHandle.truncate(4);
```

## Siehe auch

- [Das ursprungsprivate Dateisystem](https://web.dev/articles/origin-private-file-system) auf web.dev

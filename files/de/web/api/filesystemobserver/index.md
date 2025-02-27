---
title: FileSystemObserver
slug: Web/API/FileSystemObserver
l10n:
  sourceCommit: 328a7843ffd9e0afb4d21822d058bb08b17d3445
---

{{securecontext_header}}{{APIRef("File System API")}}

Das **`FileSystemObserver`**-Interface der [File System API](/de/docs/Web/API/File_System_API) bietet einen Mechanismus, um Änderungen im für den Benutzer sichtbaren Dateisystem und im [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) zu beobachten. Dadurch müssen Webanwendungen das Dateisystem nicht kontinuierlich abfragen, um Änderungen in den Dateien oder der Ordnerstruktur zu erkennen, was zeitaufwändig und ineffizient sein kann.

## Konstruktor

- [`FileSystemObserver()`](/de/docs/Web/API/FileSystemObserver/FileSystemObserver) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des `FileSystemObserver`-Objekts.

## Instanzmethoden

- [`disconnect()`](/de/docs/Web/API/FileSystemObserver/disconnect) {{Experimental_Inline}}
  - : Beendet die Beobachtung des Dateisystems.
- [`observe()`](/de/docs/Web/API/FileSystemObserver/observe) {{Experimental_Inline}}
  - : Beginnt mit der Beobachtung von Änderungen an einer bestimmten Datei oder einem Verzeichnis.

## Beispiele

> [!NOTE]
> Für ein vollständiges, funktionierendes Beispiel, siehe [File System Observer Demo](https://file-system-observer.glitch.me/) ([Quellcode](https://glitch.com/edit/#!/file-system-observer)).

### Initialisieren eines `FileSystemObserver`

Bevor Sie Änderungen an Dateien oder Verzeichnissen beobachten können, müssen Sie einen `FileSystemObserver` initialisieren, um die Beobachtungen zu bearbeiten. Dies erfolgt mithilfe des [`FileSystemObserver()`](/de/docs/Web/API/FileSystemObserver/FileSystemObserver)-Konstruktors, welcher eine Rückruffunktion als Argument nimmt:

```js
const observer = new FileSystemObserver(callback);
```

Der [Rückruf-Funktion](/de/docs/Web/API/FileSystemObserver/FileSystemObserver#callback)-Körper kann spezifiziert werden, um Dateiänderungsbeobachtungen auf beliebige Weise zurückzugeben und zu verarbeiten:

```js
const callback = (records, observer) => {
  for (const record of records) {
    console.log("Change detected:", record);
    const reportContent = `Change observed to ${record.changedHandle.kind} ${record.changedHandle.name}. Type: ${record.type}.`;
    sendReport(reportContent); // Some kind of user-defined reporting function
  }

  observer.disconnect();
};
```

### Beobachten einer Datei oder eines Verzeichnisses

Sobald eine `FileSystemObserver`-Instanz verfügbar ist, können Sie Änderungen an einem Dateisystemeintrag beobachten, indem Sie die Methode [`FileSystemObserver.observe()`](/de/docs/Web/API/FileSystemObserver/observe) aufrufen.

Sie können eine Datei oder ein Verzeichnis im für den Benutzer sichtbaren Dateisystem oder im [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) beobachten, indem Sie ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) oder [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) an `observe()` übergeben. Instanzen dieser Objekte können zum Beispiel zurückgegeben werden, wenn Sie den Benutzer bitten, eine Datei oder ein Verzeichnis mit [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) oder [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) auszuwählen:

```js
// Observe a file
async function observeFile() {
  const fileHandle = await window.showSaveFilePicker();

  await observer.observe(fileHandle);
}

// Observe a directory
async function observeDirectory() {
  const directoryHandle = await window.showDirectoryPicker();

  await observer.observe(directoryHandle);
}
```

Sie können auch Änderungen am OPFS beobachten, indem Sie ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) an `observe()` übergeben:

```js
// Observe an OPFS file system entry
async function observeOPFSFile() {
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  const syncHandle = await draftHandle.createSyncAccessHandle();

  await observer.observe(syncHandle);
}
```

### Beenden der Beobachtung des Dateisystems

Wenn Sie die Beobachtung von Änderungen an einem Dateisystemeintrag beenden möchten, können Sie [`FileSystemObserver.disconnect()`](/de/docs/Web/API/FileSystemObserver/disconnect) aufrufen:

```js
observer.disconnect();
```

## Spezifikationen

Gehört derzeit nicht zu einer Spezifikation. Siehe [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165) für den relevanten Spezifikations-PR.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- Der [File System Observer API Origin Trial](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) auf developer.chrome.com (2024)

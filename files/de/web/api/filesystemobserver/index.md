---
title: FileSystemObserver
slug: Web/API/FileSystemObserver
l10n:
  sourceCommit: 800e317d342b7ad0e5eca37d3d17e53bbcd1dc41
---

{{securecontext_header}}{{APIRef("File System API")}}{{SeeCompatTable}}{{non-standard_header}}

Das **`FileSystemObserver`**-Interface der [File System API](/de/docs/Web/API/File_System_API) bietet einen Mechanismus, um Änderungen im für den Benutzer sichtbaren Dateisystem und dem [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) zu beobachten. Das bedeutet, dass Webanwendungen das Dateisystem nicht ständig abfragen müssen, um Änderungen in der Datei- oder Ordnerstruktur zu erkennen, was zeitaufwändig und ineffizient sein kann.

## Konstruktor

- [`FileSystemObserver()`](/de/docs/Web/API/FileSystemObserver/FileSystemObserver) {{Experimental_Inline}} {{non-standard_inline}}
  - : Erstellt eine neue Instanz des `FileSystemObserver`-Objekts.

## Instanzmethoden

- [`disconnect()`](/de/docs/Web/API/FileSystemObserver/disconnect) {{Experimental_Inline}} {{non-standard_inline}}
  - : Beendet die Beobachtung des Dateisystems.
- [`observe()`](/de/docs/Web/API/FileSystemObserver/observe) {{Experimental_Inline}} {{non-standard_inline}}
  - : Beginnt mit der Beobachtung von Änderungen an einer bestimmten Datei oder einem Verzeichnis.

## Beispiele

> [!NOTE]
> Für ein vollständiges funktionierendes Beispiel schauen Sie sich die [File System Observer Demo](https://mdn.github.io/dom-examples/filesystemobserver/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/filesystemobserver)) an.

### Initialisieren eines `FileSystemObserver`

Bevor Sie mit der Beobachtung von Datei- oder Verzeichnisänderungen beginnen können, müssen Sie einen `FileSystemObserver` initialisieren, um die Beobachtungen zu verarbeiten. Dies geschieht mit dem [`FileSystemObserver()`](/de/docs/Web/API/FileSystemObserver/FileSystemObserver)-Konstruktor, der eine Callback-Funktion als Argument nimmt:

```js
const observer = new FileSystemObserver(callback);
```

Der [Rückruffunktion](/de/docs/Web/API/FileSystemObserver/FileSystemObserver#callback)-Körper kann so definiert werden, dass er Dateienänderungsbeobachtungen in beliebiger Weise zurückgibt und verarbeitet:

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

Sobald eine Instanz von `FileSystemObserver` verfügbar ist, können Sie mit der Beobachtung von Änderungen an einem Dateisystemeintrag beginnen, indem Sie die Methode [`FileSystemObserver.observe()`](/de/docs/Web/API/FileSystemObserver/observe) aufrufen.

Sie können eine Datei oder ein Verzeichnis im für den Benutzer sichtbaren Dateisystem oder im [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) beobachten, indem Sie `observe()` einen [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) oder [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) übergeben. Instanzen dieser Objekte können beispielsweise zurückgegeben werden, wenn Sie den Benutzer bitten, eine Datei oder ein Verzeichnis mit [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) oder [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) auszuwählen:

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

Sie können auch Änderungen im OPFS beobachten, indem Sie `observe()` einen [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) übergeben:

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

Derzeit nicht Teil einer Spezifikation. Siehe [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165) für den relevanten Spezifikations-PR.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Observer API origin trial](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) auf developer.chrome.com (2024)

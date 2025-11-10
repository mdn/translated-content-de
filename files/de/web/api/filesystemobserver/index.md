---
title: FileSystemObserver
slug: Web/API/FileSystemObserver
l10n:
  sourceCommit: ac7a39584dc77b42aac19473cc522bbedbf13717
---

{{securecontext_header}}{{APIRef("File System API")}}{{SeeCompatTable}}{{non-standard_header}}

Das **`FileSystemObserver`**-Interface der [File System API](/de/docs/Web/API/File_System_API) bietet eine Möglichkeit, Änderungen am benutzerbezogenen Dateisystem und dem [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) zu beobachten. Dadurch müssen Webanwendungen das Dateisystem nicht regelmäßig abfragen, um Änderungen an Dateien oder der Ordnerstruktur zu erkennen, was zeitaufwändig und ineffizient sein kann.

## Konstruktor

- [`FileSystemObserver()`](/de/docs/Web/API/FileSystemObserver/FileSystemObserver) {{Experimental_Inline}} {{non-standard_inline}}
  - : Erstellt eine neue Instanz des `FileSystemObserver`.

## Instanzmethoden

- [`disconnect()`](/de/docs/Web/API/FileSystemObserver/disconnect) {{Experimental_Inline}} {{non-standard_inline}}
  - : Beendet das Beobachten des Dateisystems.
- [`observe()`](/de/docs/Web/API/FileSystemObserver/observe) {{Experimental_Inline}} {{non-standard_inline}}
  - : Beginnt mit der Beobachtung von Änderungen an einer angegebenen Datei oder einem Verzeichnis.

## Beispiele

> [!NOTE]
> Für ein vollständiges funktionierendes Beispiel, schauen Sie sich die [File System Observer Demo](https://mdn.github.io/dom-examples/file-system-api/filesystemobserver/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/file-system-api/filesystemobserver)) an.

### Initialisieren eines `FileSystemObserver`

Bevor Sie mit der Beobachtung von Datei- oder Verzeichnisänderungen beginnen können, müssen Sie einen `FileSystemObserver` initialisieren, um die Beobachtungen zu verwalten. Dies erfolgt mit dem [`FileSystemObserver()`](/de/docs/Web/API/FileSystemObserver/FileSystemObserver)-Konstruktor, der eine Callback-Funktion als Argument nimmt:

```js
const observer = new FileSystemObserver(callback);
```

Der [Rückruffunktion](/de/docs/Web/API/FileSystemObserver/FileSystemObserver#callback)-Körper kann festgelegt werden, um Rückmeldungen zu Dateiänderungen auf jede gewünschte Weise zu verarbeiten:

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

Sie können eine Datei oder ein Verzeichnis im benutzerbezogenen Dateisystem oder im [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) beobachten, indem Sie ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) oder [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) an `observe()` übergeben. Instanzen dieser Objekte können beispielsweise zurückgegeben werden, wenn der Benutzer aufgefordert wird, mit [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) oder [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) eine Datei oder ein Verzeichnis auszuwählen:

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

Wenn Sie die Beobachtung von Änderungen am Dateisystemeintrag beenden möchten, können Sie [`FileSystemObserver.disconnect()`](/de/docs/Web/API/FileSystemObserver/disconnect) aufrufen:

```js
observer.disconnect();
```

## Spezifikationen

Gehört derzeit nicht zu einer Spezifikation. Siehe [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165) für den relevanten Spezifikations-PR.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [Das File System Observer API Origin Trial](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) auf developer.chrome.com (2024)

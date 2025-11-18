---
title: "FileSystemObserver: observe() Methode"
short-title: observe()
slug: Web/API/FileSystemObserver/observe
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("File System API")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`observe()`**-Methode der [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver)-Schnittstelle fordert den Beobachter auf, Änderungen an einer angegebenen Datei oder an einem Verzeichnis zu beobachten.

## Syntax

```js-nolint
observe(handle)
observe(handle, options)
```

### Parameter

- `handle`
  - : Der Handle des Dateisystemeintrags, der die zu beobachtende Datei oder das Verzeichnis darstellt.
    - Für das benutzerbeobachtbare Dateisystem kann dies ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) oder ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) sein.
    - Für das [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) kann es ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle), ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) oder ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) sein.

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für den `observe()`-Aufruf angibt. Es kann die folgenden Eigenschaften enthalten:
    - `recursive`
      - : Ein boolescher Wert, der angibt, ob Sie Änderungen an einem Verzeichnis rekursiv beobachten möchten. Wenn auf `true` gesetzt, werden Änderungen im Verzeichnis selbst und in allen enthaltenen Unterverzeichnissen und Dateien beobachtet. Wenn auf `false` gesetzt, werden Änderungen nur im Verzeichnis selbst und in direkt enthaltenen Dateien beobachtet (d.h. Dateien in Unterverzeichnissen werden ausgeschlossen). Standardmäßig `false`.

        Diese Eigenschaft hat keine Wirkung, wenn `handle` eine Datei darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu {{jsxref('undefined')}} auflöst.

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die durch `handle` dargestellte Datei oder das Verzeichnis nicht gefunden werden konnte.

## Beispiele

### Eine Datei oder ein Verzeichnis beobachten

Angenommen, eine `FileSystemObserver`-Instanz ist verfügbar, können Sie beginnen, Änderungen an einem Dateisystemeintrag zu beobachten, indem Sie `observe()` aufrufen.

Sie können eine Datei oder ein Verzeichnis im benutzerbeobachtbaren Dateisystem oder im [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) beobachten, indem Sie ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) oder [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) zu `observe()` übergeben. Instanzen dieser Objekte können zum Beispiel zurückgegeben werden, wenn Sie den Benutzer auffordern, eine Datei oder ein Verzeichnis mit [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) oder [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) auszuwählen:

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

Sie können auch Änderungen am OPFS beobachten, indem Sie ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) zu `observe()` übergeben:

```js
// Observe an OPFS file system entry
async function observeOPFSFile() {
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  const syncHandle = await draftHandle.createSyncAccessHandle();

  await observer.observe(syncHandle);
}
```

### Ein Verzeichnis rekursiv beobachten

Um ein Verzeichnis rekursiv zu beobachten, rufen Sie `observe()` mit der `recursive`-Option auf `true` gesetzt auf:

```js
// Observe a directory recursively
async function observeDirectory() {
  const directoryHandle = await window.showDirectoryPicker();

  await observer.observe(directoryHandle, { recursive: true });
}
```

## Spezifikationen

Derzeit nicht Teil einer Spezifikation. Siehe [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165) für den relevanten Spezifikations-PR.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [Der File System Observer API Origin Trial](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) auf developer.chrome.com (2024)

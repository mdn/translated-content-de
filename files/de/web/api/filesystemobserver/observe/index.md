---
title: "FileSystemObserver: observe() Methode"
short-title: observe()
slug: Web/API/FileSystemObserver/observe
l10n:
  sourceCommit: 328a7843ffd9e0afb4d21822d058bb08b17d3445
---

{{securecontext_header}}{{APIRef("File System API")}}

Die **`observe()`** Methode des [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver)-Interfaces fordert den Observer auf, Änderungen an einer bestimmten Datei oder einem Verzeichnis zu beobachten.

## Syntax

```js-nolint
observe(handle)
observe(handle, options)
```

### Parameter

- `handle`

  - : Der Handle des Dateisystem-Eintrags, der die Datei oder das Verzeichnis darstellt, das beobachtet werden soll.

    - Für das vom Benutzer beobachtbare Dateisystem kann dies ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) oder ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) sein.
    - Für das [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) kann es sich um ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle), ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) oder ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) handeln.

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für den `observe()`-Aufruf angibt. Dies kann die folgenden Eigenschaften enthalten:

    - `recursive`

      - : Ein Boolean, der angibt, ob Sie Änderungen an einem Verzeichnis rekursiv beobachten möchten. Wenn auf `true` gesetzt, werden Änderungen im Verzeichnis selbst und in allen enthaltenen Unterverzeichnissen und Dateien beobachtet. Wenn auf `false` gesetzt, werden Änderungen nur im Verzeichnis selbst und in direkt enthaltenen Dateien beobachtet (d. h. Dateien in Unterverzeichnissen sind ausgeschlossen). Standardwert ist `false`.

        Diese Eigenschaft hat keine Auswirkungen, wenn `handle` eine Datei darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu {{jsxref('undefined')}} aufgelöst wird.

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die durch `handle` dargestellte Datei oder das Verzeichnis nicht gefunden werden konnte.

## Beispiele

### Beobachtung einer Datei oder eines Verzeichnisses

Angenommen, eine Instanz von `FileSystemObserver` ist verfügbar, können Sie Änderungen an einem Dateisystem-Eintrag durch Aufruf von `observe()` beobachten.

Sie können eine Datei oder ein Verzeichnis im vom Benutzer beobachtbaren Dateisystem oder im [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) beobachten, indem Sie ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) oder ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) an `observe()` übergeben. Instanzen dieser Objekte können beispielsweise zurückgegeben werden, wenn Sie den Benutzer bitten, eine Datei oder ein Verzeichnis mit [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker) oder [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker) auszuwählen:

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

### Ein Verzeichnis rekursiv beobachten

Um ein Verzeichnis rekursiv zu beobachten, rufen Sie `observe()` mit der Option `recursive` auf `true` gesetzt auf:

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

- [Dateisystem-API](/de/docs/Web/API/File_System_API)
- [Der File System Observer API Origin Trial](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) auf developer.chrome.com (2024)

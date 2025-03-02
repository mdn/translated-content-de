---
title: FileSystemObserver
slug: Web/API/FileSystemObserver
l10n:
  sourceCommit: 9cc1f40340f37fa05d6573cc519c9844fa4940be
---

{{securecontext_header}}{{APIRef("File System API")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`FileSystemObserver`**-Schnittstelle der [File System API](/de/docs/Web/API/File_System_API) bietet einen Mechanismus, um Änderungen am für den Benutzer sichtbaren Dateisystem und dem [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) zu überwachen. Dies bedeutet, dass Webanwendungen das Dateisystem nicht mehr ständig abfragen müssen, um Änderungen in der Struktur von Dateien oder Ordnern zu erkennen, was zeitaufwendig und ineffizient sein kann.

## Konstruktor

- [`FileSystemObserver()`](/de/docs/Web/API/FileSystemObserver/FileSystemObserver) {{Experimental_Inline}} {{non-standard_inline}}
  - : Erstellt eine neue Instanz des `FileSystemObserver`-Objekts.

## Instanzmethoden

- [`disconnect()`](/de/docs/Web/API/FileSystemObserver/disconnect) {{Experimental_Inline}} {{non-standard_inline}}
  - : Beendet die Überwachung des Dateisystems.
- [`observe()`](/de/docs/Web/API/FileSystemObserver/observe) {{Experimental_Inline}} {{non-standard_inline}}
  - : Beginnt, Änderungen an einer bestimmten Datei oder einem Verzeichnis zu überwachen.

## Beispiele

> [!NOTE]
> Für ein vollständiges funktionierendes Beispiel, sehen Sie sich die [File System Observer Demo](https://file-system-observer.glitch.me/) an ([Quellcode](https://glitch.com/edit/#!/file-system-observer)).

### Initialisieren eines `FileSystemObserver`

Bevor Sie mit der Überwachung von Datei- oder Verzeichnisänderungen beginnen können, müssen Sie einen `FileSystemObserver` initialisieren, um die Beobachtungen zu verwalten. Dies wird durch den [`FileSystemObserver()`](/de/docs/Web/API/FileSystemObserver/FileSystemObserver)-Konstruktor durchgeführt, der eine Callback-Funktion als Argument benötigt:

```js
const observer = new FileSystemObserver(callback);
```

Der [Callback-Funktions](/de/docs/Web/API/FileSystemObserver/FileSystemObserver#callback)-Körper kann spezifiziert werden, um die Beobachtungen von Dateiänderungen auf beliebige Weise zu verarbeiten und zurückzugeben:

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

Sobald eine `FileSystemObserver`-Instanz verfügbar ist, können Sie Änderungen an einem Eintrag im Dateisystem beobachten, indem Sie die Methode [`FileSystemObserver.observe()`](/de/docs/Web/API/FileSystemObserver/observe) aufrufen.

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

Sie können auch Änderungen am OPFS überwachen, indem Sie ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) an `observe()` übergeben:

```js
// Observe an OPFS file system entry
async function observeOPFSFile() {
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  const syncHandle = await draftHandle.createSyncAccessHandle();

  await observer.observe(syncHandle);
}
```

### Beenden der Überwachung des Dateisystems

Wenn Sie die Überwachung von Änderungen am Dateisystemeintrag beenden möchten, können Sie [`FileSystemObserver.disconnect()`](/de/docs/Web/API/FileSystemObserver/disconnect) aufrufen:

```js
observer.disconnect();
```

## Spezifikationen

Gehört derzeit nicht zu einer Spezifikation. Siehe [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165) für den relevanten Spezifikations-PR.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [Die File System Observer API Origin Trial](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) auf developer.chrome.com (2024)

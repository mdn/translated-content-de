---
title: FileSystemHandle
slug: Web/API/FileSystemHandle
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Das **`FileSystemHandle`**-Interface der [File System API](/de/docs/Web/API/File_System_API) ist ein Objekt, das einen Datei- oder Verzeichniseintrag darstellt. Mehrere Handles können denselben Eintrag repräsentieren. In den meisten Fällen arbeiten Sie nicht direkt mit dem `FileSystemHandle`, sondern mit seinen Kind-Interfaces [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) und [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle).

## Schnittstellen basierend auf FileSystemHandle

Nachfolgend finden Sie eine Liste von Schnittstellen, die auf dem `FileSystemHandle`-Interface basieren.

- [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)
  - : Repräsentiert ein Handle zu einem Datei-Eintrag.
- [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)
  - : Bietet ein Handle zu einem Verzeichniseintrag.

## Instanz-Eigenschaften

- [`kind`](/de/docs/Web/API/FileSystemHandle/kind) {{ReadOnlyInline}}
  - : Gibt den Typ des Eintrags zurück. Dies ist `'file'`, wenn der zugehörige Eintrag eine Datei ist, oder `'directory'`.
- [`name`](/de/docs/Web/API/FileSystemHandle/name) {{ReadOnlyInline}}
  - : Gibt den Namen des zugehörigen Eintrags zurück.

## Instanz-Methoden

- [`isSameEntry()`](/de/docs/Web/API/FileSystemHandle/isSameEntry)
  - : Vergleicht zwei Handles, um festzustellen, ob die zugehörigen Einträge (entweder eine Datei oder ein Verzeichnis) übereinstimmen.
- [`queryPermission()`](/de/docs/Web/API/FileSystemHandle/queryPermission) {{Experimental_Inline}}
  - : Fragt den aktuellen Berechtigungsstatus des aktuellen Handles ab.
- [`remove()`](/de/docs/Web/API/FileSystemHandle/remove) {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Fordert die Entfernung des durch das Handle dargestellten Eintrags aus dem zugrunde liegenden Dateisystem an.
- [`requestPermission()`](/de/docs/Web/API/FileSystemHandle/requestPermission) {{Experimental_Inline}}
  - : Fordert Lese- oder Lese-/Schreibrechte für das Datei-Handle an.

## Beispiele

### Typüberprüfung

Der untenstehende Code ermöglicht dem Nutzer die Auswahl einer Datei über den Dateiauswahldialog und prüft dann, ob das zurückgegebene Handle eine Datei oder ein Verzeichnis ist.

```js
// store a reference to our file handle
let fileHandle;

async function getFile() {
  // open file picker
  [fileHandle] = await window.showOpenFilePicker();

  if (fileHandle.kind === "file") {
    // run file code
  } else if (fileHandle.kind === "directory") {
    // run directory code
  }
}
```

### Abfrage/Anforderung von Berechtigungen

Die folgende asynchrone Funktion gibt `true` zurück, wenn der Benutzer Lese- oder Lese-/Schreibrechte für das Datei-Handle gewährt hat. Wenn nicht, wird die Berechtigung angefordert.

```js
// fileHandle is a FileSystemFileHandle
// withWrite is a boolean set to true if write

async function verifyPermission(fileHandle, withWrite) {
  const opts = {};
  if (withWrite) {
    opts.mode = "readwrite";
  }

  // Check if we already have permission, if so, return true.
  if ((await fileHandle.queryPermission(opts)) === "granted") {
    return true;
  }

  // Request permission to the file, if the user grants permission, return true.
  if ((await fileHandle.requestPermission(opts)) === "granted") {
    return true;
  }

  // The user did not grant permission, return false.
  return false;
}
```

### Einträge vergleichen

Die folgende Funktion vergleicht einen einzelnen Eintrag mit einem Array von Einträgen und gibt ein neues Array mit allen übereinstimmenden Einträgen zurück.

```js
function removeMatches(fileEntry, entriesArr) {
  const newArr = entriesArr.filter((entry) => !fileEntry.isSameEntry(entry));

  return newArr;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

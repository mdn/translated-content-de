---
title: FileSystemHandle
slug: Web/API/FileSystemHandle
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Das **`FileSystemHandle`** Interface der {{domxref('File System API', '', '', 'nocode')}} ist ein Objekt, das einen Datei- oder Verzeichniseintrag darstellt. Mehrere Handles können denselben Eintrag repräsentieren. Im Allgemeinen arbeiten Sie nicht direkt mit `FileSystemHandle`, sondern eher mit seinen untergeordneten Interfaces {{domxref('FileSystemFileHandle')}} und {{domxref('FileSystemDirectoryHandle')}}.

## Auf FileSystemHandle basierende Interfaces

Nachfolgend finden Sie eine Liste von Interfaces, die auf dem `FileSystemHandle` Interface basieren.

- {{domxref("FileSystemFileHandle")}}
  - : Repräsentiert ein Handle zu einem Dateieintrag.
- {{domxref("FileSystemDirectoryHandle")}}
  - : Bietet ein Handle zu einem Verzeichniseintrag.

## Instanzeigenschaften

- {{domxref('FileSystemHandle.kind','kind')}} {{ReadOnlyInline}}
  - : Gibt den Typ des Eintrags zurück. Dies ist `'file'`, wenn der zugehörige Eintrag eine Datei ist, oder `'directory'`.
- {{domxref('FileSystemHandle.name', 'name')}} {{ReadOnlyInline}}
  - : Gibt den Namen des zugehörigen Eintrags zurück.

## Instanzmethoden

- {{domxref('FileSystemHandle.isSameEntry()', 'isSameEntry()')}}
  - : Vergleicht zwei Handles, um festzustellen, ob die zugehörigen Einträge (entweder eine Datei oder ein Verzeichnis) übereinstimmen.
- {{domxref('FileSystemHandle.queryPermission()', 'queryPermission()')}} {{Experimental_Inline}}
  - : Fragt den aktuellen Berechtigungsstatus des aktuellen Handles ab.
- {{domxref('FileSystemHandle.remove', 'remove()')}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Fordert die Entfernung des durch das Handle dargestellten Eintrags aus dem zugrunde liegenden Dateisystem an.
- {{domxref('FileSystemHandle.requestPermission', 'requestPermission()')}} {{Experimental_Inline}}
  - : Fordert Lese- oder Lese-/Schreibberechtigungen für das Datei-Handle an.

## Beispiele

### Typüberprüfung

Der untenstehende Code ermöglicht es dem Benutzer, eine Datei aus dem Dateiauswahldialog auszuwählen, und überprüft dann, ob das zurückgegebene Handle eine Datei oder ein Verzeichnis ist.

```js
// speichern Sie eine Referenz auf unser Datei-Handle
let fileHandle;

async function getFile() {
  // Datei-Auswahldialog öffnen
  [fileHandle] = await window.showOpenFilePicker();

  if (fileHandle.kind === "file") {
    // Datei-Code ausführen
  } else if (fileHandle.kind === "directory") {
    // Verzeichnis-Code ausführen
  }
}
```

### Abfragen/Anfordern von Berechtigungen

Die folgende asynchrone Funktion gibt true zurück, wenn der Benutzer Leseberechtigungen oder Lese-/Schreibberechtigungen für das Datei-Handle gewährt hat. Berechtigungen werden angefordert, wenn nicht.

```js
// fileHandle ist ein FileSystemFileHandle
// withWrite ist ein boolean, der auf true gesetzt ist, wenn Schreibzugriff

async function verifyPermission(fileHandle, withWrite) {
  const opts = {};
  if (withWrite) {
    opts.mode = "readwrite";
  }

  // Überprüfen Sie, ob wir bereits die Berechtigung haben, wenn ja, geben Sie true zurück.
  if ((await fileHandle.queryPermission(opts)) === "granted") {
    return true;
  }

  // Fordern Sie Berechtigung für die Datei an, wenn der Benutzer die Berechtigung erteilt, geben Sie true zurück.
  if ((await fileHandle.requestPermission(opts)) === "granted") {
    return true;
  }

  // Der Benutzer hat die Berechtigung nicht erteilt, geben Sie false zurück.
  return false;
}
```

### Vergleich von Einträgen

Die folgende Funktion vergleicht einen einzelnen Eintrag mit einem Array von Einträgen und gibt ein neues Array zurück, aus dem alle übereinstimmenden Einträge entfernt wurden.

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
- [Die File System Access API: Vereinfachung des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)

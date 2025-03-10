---
title: "FileSystemObserver: FileSystemObserver() Konstruktor"
short-title: FileSystemObserver()
slug: Web/API/FileSystemObserver/FileSystemObserver
l10n:
  sourceCommit: 800e317d342b7ad0e5eca37d3d17e53bbcd1dc41
---

{{APIRef("File System API")}}{{SeeCompatTable}}{{non-standard_header}}

Der **`FileSystemObserver()`** Konstruktor erzeugt eine neue Instanz eines [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) Objekts.

## Syntax

```js-nolint
new FileSystemObserver(callback)
```

### Parameter

- `callback`
  - : Eine benutzerdefinierte Callback-Funktion, die aufgerufen wird, wenn der Beobachter eine Änderung am Dateisystemeintrag beobachtet hat, den er beobachten soll (über [`FileSystemObserver.observe()`](/de/docs/Web/API/FileSystemObserver/observe)). Der Callback-Funktion werden die folgenden zwei Parameter übergeben:
    - `records`
      - : Ein Array von [`FileSystemChangeRecord`](/de/docs/Web/API/FileSystemChangeRecord) Objekten, die Details zu allen beobachteten Änderungen enthalten.
    - `observer`
      - : Eine Referenz auf das aktuelle `FileSystemObserver` Objekt, das zur Verfügung gestellt wird, falls Sie beispielsweise die Beobachtungen beenden möchten, nachdem die aktuellen Einträge mithilfe der Methode [`FileSystemObserver.disconnect()`](/de/docs/Web/API/FileSystemObserver/disconnect) empfangen wurden.

### Rückgabewert

Ein neues [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) Objekt.

## Beispiele

> [!NOTE]
> Für ein vollständiges funktionierendes Beispiel siehe [File System Observer Demo](https://mdn.github.io/dom-examples/filesystemobserver/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/filesystemobserver)).

### Initialisierung eines `FileSystemObserver`

Bevor Sie mit der Beobachtung von Datei- oder Verzeichnisänderungen beginnen können, müssen Sie einen `FileSystemObserver` initialisieren, um die Beobachtungen zu verwalten:

```js
const observer = new FileSystemObserver(callback);
```

Der Rumpf der Callback-Funktion kann so spezifiziert werden, dass er Dateisystemänderungsbeobachtungen auf beliebige Weise zurückgibt und verarbeitet:

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

## Spezifikationen

Derzeit nicht Teil einer Spezifikation. Siehe [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165) für den relevanten Spezifikations-PR.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [Der File System Observer API Startversuch](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) auf developer.chrome.com (2024)

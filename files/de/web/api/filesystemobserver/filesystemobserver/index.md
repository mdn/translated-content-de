---
title: "FileSystemObserver: FileSystemObserver() Konstruktor"
short-title: FileSystemObserver()
slug: Web/API/FileSystemObserver/FileSystemObserver
l10n:
  sourceCommit: ac7a39584dc77b42aac19473cc522bbedbf13717
---

{{APIRef("File System API")}}{{SeeCompatTable}}{{non-standard_header}}

Der **`FileSystemObserver()`** Konstruktor erstellt eine neue [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) Objektinstanz.

## Syntax

```js-nolint
new FileSystemObserver(callback)
```

### Parameter

- `callback`
  - : Eine benutzerdefinierte Callback-Funktion, die aufgerufen wird, wenn der Beobachter eine Änderung in dem Dateisystemeintrag beobachtet hat, den er beobachten soll (über [`FileSystemObserver.observe()`](/de/docs/Web/API/FileSystemObserver/observe)). Der Callback-Funktion werden die folgenden zwei Parameter übergeben:
    - `records`
      - : Ein Array von [`FileSystemChangeRecord`](/de/docs/Web/API/FileSystemChangeRecord) Objekten, die Details aller beobachteten Änderungen enthalten.
    - `observer`
      - : Eine Referenz auf das aktuelle `FileSystemObserver` Objekt, das zur Verfügung steht, falls Sie zum Beispiel die Beobachtungen nach Erhalt der aktuellen Einträge mit der Methode [`FileSystemObserver.disconnect()`](/de/docs/Web/API/FileSystemObserver/disconnect) stoppen möchten.

### Rückgabewert

Ein neues [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) Objekt.

## Beispiele

> [!NOTE]
> Für ein vollständiges funktionierendes Beispiel sehen Sie sich die [File System Observer Demo](https://mdn.github.io/dom-examples/file-system-api/filesystemobserver/) an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/file-system-api/filesystemobserver)).

### Initialisierung eines `FileSystemObserver`

Bevor Sie Änderungen an Dateien oder Verzeichnissen beobachten können, müssen Sie einen `FileSystemObserver` initialisieren, um die Beobachtungen zu handhaben:

```js
const observer = new FileSystemObserver(callback);
```

Der Funktionskörper der Callback-Funktion kann so spezifiziert werden, dass er Dateiänderungsbeobachtungen auf jegliche gewünschte Weise zurückgibt und verarbeitet:

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
- [Der File System Observer API Origin Trial](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) auf developer.chrome.com (2024)

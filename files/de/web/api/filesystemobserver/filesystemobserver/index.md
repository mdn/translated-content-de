---
title: "FileSystemObserver: FileSystemObserver() Konstruktor"
short-title: FileSystemObserver()
slug: Web/API/FileSystemObserver/FileSystemObserver
l10n:
  sourceCommit: 328a7843ffd9e0afb4d21822d058bb08b17d3445
---

{{APIRef("File System API")}}{{SeeCompatTable}}

Der **`FileSystemObserver()`** Konstruktor erstellt eine neue [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) Objektinstanz.

## Syntax

```js-nolint
new FileSystemObserver(callback)
```

### Parameter

- `callback`
  - : Eine benutzerdefinierte Callback-Funktion, die aufgerufen wird, wenn der Observer eine Änderung im Dateisystemeintrag beobachtet hat, den er zu überwachen gebeten wurde (über [`FileSystemObserver.observe()`](/de/docs/Web/API/FileSystemObserver/observe)). Der Callback-Funktion werden die folgenden zwei Parameter übergeben:
    - `records`
      - : Ein Array von [`FileSystemChangeRecord`](/de/docs/Web/API/FileSystemChangeRecord) Objekten, die Details zu allen beobachteten Änderungen enthalten.
    - `observer`
      - : Ein Verweis auf das aktuelle `FileSystemObserver` Objekt, das verfügbar gemacht wird, falls Sie beispielsweise die Beobachtungen nach Erhalt der aktuellen Aufzeichnungen mithilfe der [`FileSystemObserver.disconnect()`](/de/docs/Web/API/FileSystemObserver/disconnect) Methode stoppen möchten.

### Rückgabewert

Ein neues [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) Objekt.

## Beispiele

> [!NOTE]
> Für ein vollständiges funktionierendes Beispiel sehen Sie sich das [File System Observer Demo](https://file-system-observer.glitch.me/) ([Quellcode](https://glitch.com/edit/#!/file-system-observer)) an.

### Initialisierung eines `FileSystemObserver`

Bevor Sie mit der Überwachung von Datei- oder Verzeichnisänderungen beginnen können, müssen Sie einen `FileSystemObserver` initialisieren, um die Beobachtungen zu handhaben:

```js
const observer = new FileSystemObserver(callback);
```

Der Rumpf der Callback-Funktion kann so spezifiziert werden, dass er Dateiänderungsbeobachtungen auf jede gewünschte Weise zurückgibt und verarbeitet:

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

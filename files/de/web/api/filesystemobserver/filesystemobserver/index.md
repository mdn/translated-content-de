---
title: "FileSystemObserver: FileSystemObserver() Konstruktor"
short-title: FileSystemObserver()
slug: Web/API/FileSystemObserver/FileSystemObserver
l10n:
  sourceCommit: 9cc1f40340f37fa05d6573cc519c9844fa4940be
---

{{APIRef("File System API")}}{{SeeCompatTable}}{{non-standard_header}}

Der **`FileSystemObserver()`** Konstruktor erstellt eine neue Instanz des [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) Objekts.

## Syntax

```js-nolint
new FileSystemObserver(callback)
```

### Parameter

- `callback`
  - : Eine benutzerdefinierte Callback-Funktion, die aufgerufen wird, wenn der Beobachter eine Änderung am Dateisystemeintrag beobachtet hat, den er zu beobachten aufgefordert wurde (über [`FileSystemObserver.observe()`](/de/docs/Web/API/FileSystemObserver/observe)). Der Callback-Funktion werden die folgenden zwei Parameter übergeben:
    - `records`
      - : Ein Array von [`FileSystemChangeRecord`](/de/docs/Web/API/FileSystemChangeRecord) Objekten, die Details aller beobachteten Änderungen enthalten.
    - `observer`
      - : Ein Verweis auf das aktuelle `FileSystemObserver`-Objekt, das zur Verfügung gestellt wird, falls Sie beispielsweise nach dem Empfang der aktuellen Einträge die Beobachtungen mit der Methode [`FileSystemObserver.disconnect()`](/de/docs/Web/API/FileSystemObserver/disconnect) stoppen möchten.

### Rückgabewert

Ein neues [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) Objekt.

## Beispiele

> [!NOTE]
> Für ein vollständiges funktionierendes Beispiel, schauen Sie sich bitte das [File System Observer Demo](https://file-system-observer.glitch.me/) ([Quellcode](https://glitch.com/edit/#!/file-system-observer)) an.

### Initialisierung eines `FileSystemObserver`

Bevor Sie beginnen können, Änderungen an Dateien oder Verzeichnissen zu beobachten, müssen Sie einen `FileSystemObserver` initialisieren, um die Beobachtungen zu handhaben:

```js
const observer = new FileSystemObserver(callback);
```

Die Körper der Callback-Funktion kann so angegeben werden, dass er Dateiänderungsbeobachtungen auf jede gewünschte Weise verarbeitet und zurückgibt:

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
- [Die File System Observer API Origin-Trial](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) auf developer.chrome.com (2024)

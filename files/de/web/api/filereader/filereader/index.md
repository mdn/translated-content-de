---
title: "FileReader: `FileReader()` Konstruktor"
short-title: FileReader()
slug: Web/API/FileReader/FileReader
l10n:
  sourceCommit: e43bfd9b4a6c363a4ba7ef6ffa64c09b38fd111b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Der **`FileReader()`** Konstruktor erstellt einen neuen `FileReader`.

Für Details zur Nutzung von `FileReader` siehe [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications).

## Syntax

```js-nolint
new FileReader()
```

### Parameter

Keine.

## Beispiele

Der folgende Codeausschnitt zeigt die Erstellung eines [`FileReader`](/de/docs/Web/API/FileReader) Objekts mit dem `FileReader()` Konstruktor und die anschließende Verwendung des Objekts:

```js
function printFile(file) {
  const reader = new FileReader();
  reader.onload = (evt) => {
    console.log(evt.target.result);
  };
  reader.readAsText(file);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)

---
title: "FileReaderSync: FileReaderSync() Konstruktor"
short-title: FileReaderSync()
slug: Web/API/FileReaderSync/FileReaderSync
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Der **`FileReaderSync()`** Konstruktor erstellt ein neues [`FileReaderSync`](/de/docs/Web/API/FileReaderSync).

## Syntax

```js-nolint
new FileReaderSync()
```

### Parameter

Keine.

## Beispiele

Der folgende Codeausschnitt zeigt die Erstellung eines [`FileReaderSync`](/de/docs/Web/API/FileReaderSync) Objekts mittels des `FileReaderSync()` Konstruktors und die anschließende Verwendung des Objekts:

```js
function readFile(blob) {
  const reader = new FileReaderSync();
  postMessage(reader.readAsDataURL(blob));
}
```

> [!NOTE]
> Dieses Snippet muss in einem [`Worker`](/de/docs/Web/API/Worker) verwendet werden, da synchrone Schnittstellen nicht im Hauptthread genutzt werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

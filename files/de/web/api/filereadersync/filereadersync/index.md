---
title: "FileReaderSync: FileReaderSync() Konstruktor"
short-title: FileReaderSync()
slug: Web/API/FileReaderSync/FileReaderSync
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File API")}} {{AvailableInWorkers("worker_except_service")}}

Der **`FileReaderSync()`**-Konstruktor erstellt eine neue {{domxref("FileReaderSync")}}.

## Syntax

```js-nolint
new FileReaderSync()
```

### Parameter

Keine.

## Beispiele

Der folgende Codeausschnitt zeigt die Erstellung eines [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)-Objekts unter Verwendung des `FileReaderSync()`-Konstruktors sowie die anschließende Nutzung des Objekts:

```js
function readFile(blob) {
  const reader = new FileReaderSync();
  postMessage(reader.readAsDataURL(blob));
}
```

> [!NOTE]
> Dieses Snippet muss innerhalb eines {{domxref("Worker")}} verwendet werden, da synchrone Schnittstellen nicht im Hauptthread verwendet werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

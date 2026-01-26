---
title: "SharedStorageRunOperation: run()-Methode"
short-title: run()
slug: Web/API/SharedStorageRunOperation/run
l10n:
  sourceCommit: 923adb616baa87402ca965ebd18a73380cc84d27
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`run()`**-Methode der [`SharedStorageRunOperation`](/de/docs/Web/API/SharedStorageRunOperation)-Schnittstelle definiert die Struktur, der die `run()`-Methode innerhalb einer Run-Ausgangssperre-Operation entsprechen sollte.

## Syntax

```js-nolint
run(data)
```

### Parameter

- `data`
  - : Ein Objekt, das alle für die Ausführung der Operation erforderlichen Daten darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

## Beispiele

Sehen Sie sich die Hauptseite der [`SharedStorageRunOperation`](/de/docs/Web/API/SharedStorageRunOperation) für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)

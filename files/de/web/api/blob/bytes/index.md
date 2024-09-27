---
title: "Blob: bytes() Methode"
short-title: bytes()
slug: Web/API/Blob/bytes
l10n:
  sourceCommit: 5ee9d033cacad3a031562be16be43c55a838cc4f
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`bytes()`** Methode der [`Blob`](/de/docs/Web/API/Blob) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem {{jsxref("Uint8Array")}} aufgelöst wird, das den Inhalt des Blob als ein Array von Bytes enthält.

## Syntax

```js-nolint
bytes()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("Uint8Array")}} Objekt erfüllt wird, das die Blob-Daten enthält.

### Ausnahmen

Die Methode wird das zurückgegebene {{jsxref("Promise")}} ablehnen, wenn zum Beispiel der Reader, der verwendet wird, um die Blob-Daten abzurufen, eine Ausnahme auslöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

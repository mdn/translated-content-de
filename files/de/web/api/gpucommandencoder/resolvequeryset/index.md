---
title: "GPUCommandEncoder: resolveQuerySet() Methode"
short-title: resolveQuerySet()
slug: Web/API/GPUCommandEncoder/resolveQuerySet
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`resolveQuerySet()`**-Methode des [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Interfaces kodiert einen Befehl, der ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) auflöst und die Ergebnisse in einen angegebenen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) kopiert.

## Syntax

```js-nolint
resolveQuerySet(querySet, firstQuery, queryCount, destination, destinationOffset)
```

### Parameter

- `querySet`
  - : Ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekt, das das aufzulösende Abfrageset darstellt.
- `firstQuery`
  - : Die Indexnummer des ersten Abfragewerts, der in den Puffer kopiert werden soll.
- `queryCount`
  - : Die Anzahl der Abfragen, die beginnend mit `firstQuery` in den Puffer kopiert werden sollen.
- `destination`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der den Puffer darstellt, in den die Abfragewerte kopiert werden.
- `destinationOffset`
  - : Eine Zahl, die den Versatz in Bytes vom Beginn des Puffers darstellt, an dem die Abfragewerte geschrieben werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`resolveQuerySet()`** aufgerufen wird. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Der [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `destination.buffer` muss das `GPUBufferUsage.QUERY_RESOLVE`-Flag beinhalten.
- `firstQuery` ist kleiner als die Anzahl der Abfragen in `querySet`.
- `firstQuery` + `queryCount` ist kleiner oder gleich der Anzahl der Abfragen in `querySet`.
- `destinationOffset` ist ein Vielfaches von 256.
- `destinationOffset` + 8 × `queryCount` ist kleiner oder gleich `destination.size`.

## Beispiele

```js
// …

const queryBuffer = device.createBuffer({
  size: 1024,
  usage: GPUBufferUsage.QUERY_RESOLVE,
});

const querySet = device.createQuerySet({
  type: "timestamp",
  count: 32,
});

// …

const commandEncoder = device.createCommandEncoder();

// Write timestamps to querySet
commandEncoder.writeTimestamp(querySet, 0);
// …
commandEncoder.writeTimestamp(querySet, 1);
// etc.

// …

commandEncoder.resolveQuerySet(
  querySet,
  0, // First query to write
  16, // Number of queries to count
  queryBuffer,
  0, // Buffer offset
);

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

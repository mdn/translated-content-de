---
title: "GPUCommandEncoder: resolveQuerySet() Methode"
short-title: resolveQuerySet()
slug: Web/API/GPUCommandEncoder/resolveQuerySet
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`resolveQuerySet()`**-Methode des [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Interfaces kodiert einen Befehl, der ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) auflöst, indem die Ergebnisse in einen angegebenen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) kopiert werden.

## Syntax

```js-nolint
resolveQuerySet(querySet, firstQuery, queryCount, destination, destinationOffset)
```

### Parameter

- `querySet`
  - : Ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekt, das das aufzulösende Abfrageset repräsentiert.
- `firstQuery`
  - : Die Indexnummer des ersten Abfragewerts, der in den Puffer kopiert werden soll.
- `queryCount`
  - : Die Anzahl der Abfragen, die ab `firstQuery` in den Puffer kopiert werden sollen.
- `destination`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der den Puffer repräsentiert, in den die Abfragewerte kopiert werden sollen.
- `destinationOffset`
  - : Eine Zahl, die den Versatz in Bytes vom Anfang des Puffers angibt, an dem mit dem Schreiben der Abfragewerte begonnen wird.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`resolveQuerySet()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Das `destination.buffer`'s [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.QUERY_RESOLVE`-Flag.
- `firstQuery` ist kleiner als die Anzahl der Abfragen in `querySet`.
- `firstQuery` + `queryCount` ist kleiner als oder gleich der Anzahl der Abfragen in `querySet`.
- `destinationOffset` ist ein Vielfaches von 256.
- `destinationOffset` + 8 × `queryCount` ist kleiner als oder gleich `destination.size`.

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

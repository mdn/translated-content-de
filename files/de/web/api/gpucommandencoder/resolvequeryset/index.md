---
title: "GPUCommandEncoder: Methode resolveQuerySet()"
short-title: resolveQuerySet()
slug: Web/API/GPUCommandEncoder/resolveQuerySet
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`resolveQuerySet()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle codiert einen Befehl, der ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) auflöst und die Ergebnisse in einen angegebenen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) kopiert.

## Syntax

```js-nolint
resolveQuerySet(querySet, firstQuery, queryCount, destination, destinationOffset)
```

### Parameter

- `querySet`
  - : Ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekt, das das aufzulösende Abfrageset darstellt.
- `firstQuery`
  - : Die Indexnummer der ersten Abfrage, die in den Buffer kopiert werden soll.
- `queryCount`
  - : Die Anzahl der Abfragen, die in den Buffer kopiert werden sollen, beginnend mit `firstQuery`.
- `destination`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der den Buffer darstellt, in den die Abfragen kopiert werden.
- `destinationOffset`
  - : Eine Zahl, die den Offset in Bytes vom Anfang des Buffers darstellt, ab dem die Abfragewerte geschrieben werden sollen.

### Rückgabewert

Keine ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufrufen von **`resolveQuerySet()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `destination.buffer` beinhaltet das `GPUBufferUsage.QUERY_RESOLVE`-Flag.
- `firstQuery` ist kleiner als die Anzahl der Abfragen im `querySet`.
- `firstQuery` + `queryCount` ist kleiner oder gleich der Anzahl der Abfragen im `querySet`.
- `destinationOffset` ist ein Vielfaches von 256.
- `destinationOffset` + 8 × `queryCount` ist kleiner oder gleich `destination.size`.

## Beispiele

```js
// ...

const queryBuffer = device.createBuffer({
  size: 1024,
  usage: GPUBufferUsage.QUERY_RESOLVE,
});

const querySet = device.createQuerySet({
  type: "timestamp",
  count: 32,
});

// ...

const commandEncoder = device.createCommandEncoder();

// Write timestamps to querySet
commandEncoder.writeTimestamp(querySet, 0);
// ...
commandEncoder.writeTimestamp(querySet, 1);
// etc.

// ...

commandEncoder.resolveQuerySet(
  querySet,
  0, // First query to write
  16, // Number of queries to count
  queryBuffer,
  0, // Buffer offset
);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

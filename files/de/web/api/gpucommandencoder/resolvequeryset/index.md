---
title: "GPUCommandEncoder: Methode resolveQuerySet()"
short-title: resolveQuerySet()
slug: Web/API/GPUCommandEncoder/resolveQuerySet
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`resolveQuerySet()`**-Methode der {{domxref("GPUCommandEncoder")}}-Schnittstelle kodiert einen Befehl, der ein {{domxref("GPUQuerySet")}} auflöst und die Ergebnisse in einen angegebenen {{domxref("GPUBuffer")}} kopiert.

## Syntax

```js-nolint
resolveQuerySet(querySet, firstQuery, queryCount, destination, destinationOffset)
```

### Parameter

- `querySet`
  - : Ein {{domxref("GPUQuerySet")}}-Objekt, das das zu lösende Abfrageset darstellt.
- `firstQuery`
  - : Die Indexnummer des ersten Abfragewerts, der in den Puffer kopiert werden soll.
- `queryCount`
  - : Die Anzahl der Abfragen, die ab `firstQuery` in den Puffer kopiert werden sollen.
- `destination`
  - : Ein {{domxref("GPUBuffer")}}, das den Puffer darstellt, in den die Abfragewerte kopiert werden.
- `destinationOffset`
  - : Eine Zahl, die den Versatz in Bytes vom Beginn des Puffers angibt, wo die Abfragewerte geschrieben werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`resolveQuerySet()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPUCommandEncoder")}} wird ungültig:

- Die {{domxref("GPUBuffer.usage")}} des `destination.buffer` enthält das `GPUBufferUsage.QUERY_RESOLVE`-Flag.
- `firstQuery` ist kleiner als die Anzahl der Abfragen in `querySet`.
- `firstQuery` + `queryCount` ist kleiner oder gleich der Anzahl der Abfragen in `querySet`.
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

// Timestamps in querySet schreiben
commandEncoder.writeTimestamp(querySet, 0);
// ...
commandEncoder.writeTimestamp(querySet, 1);
// usw.

// ...

commandEncoder.resolveQuerySet(
  querySet,
  0, // Erste Abfrage zum Schreiben
  16, // Anzahl der Abfragen
  queryBuffer,
  0, // Puffer-Versatz
);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)

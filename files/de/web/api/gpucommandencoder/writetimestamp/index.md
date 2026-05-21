---
title: "GPUCommandEncoder: writeTimestamp()-Methode"
short-title: writeTimestamp()
slug: Web/API/GPUCommandEncoder/writeTimestamp
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{deprecated_header}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`writeTimestamp()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle kodiert einen Befehl, der einen Zeitstempel in ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) schreibt, sobald die vorherigen Befehle, die in denselben in die Warteschlange gestellten [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) aufgenommen wurden, von der GPU ausgeführt wurden.

> [!NOTE]
> Um Zeitstempel-Abfragen zu verwenden, muss das `timestamp-query` [Feature](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein.

## Syntax

```js-nolint
writeTimestamp(querySet, queryIndex)
```

### Parameter

- `querySet`
  - : Ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekt, das das Abfrageset repräsentiert, das die Zeitstempelwerte speichert.
- `queryIndex`
  - : Eine Zahl, die den Index der Abfrage im Abfrageset darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`writeTimestamp()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Das `timestamp-query` [Feature](/de/docs/Web/API/GPUSupportedFeatures) ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.
- Der `querySet` [`GPUQuerySet.type`](/de/docs/Web/API/GPUQuerySet/type) ist `"timestamp"`.
- Der `queryIndex`-Wert ist kleiner als die [`GPUQuerySet.count`](/de/docs/Web/API/GPUQuerySet/count).

## Beispiele

```js
// …

const querySet = device.createQuerySet({
  type: "timestamp",
  count: 32,
});

// …

commandEncoder.writeTimestamp(querySet, 0);

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

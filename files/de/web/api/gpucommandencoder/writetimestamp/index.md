---
title: "GPUCommandEncoder: writeTimestamp() Methode"
short-title: writeTimestamp()
slug: Web/API/GPUCommandEncoder/writeTimestamp
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`writeTimestamp()`**-Methode des [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Interfaces kodiert einen Befehl, der einen Zeitstempel in ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) schreibt, sobald die vorherigen Befehle, die in denselben wartenden [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) aufgezeichnet wurden, von der GPU ausgeführt worden sind.

> [!NOTE]
> Um Zeitstempel-Abfragen zu verwenden, muss das `timestamp-query`-[Feature](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein.

## Syntax

```js-nolint
writeTimestamp(querySet, queryIndex)
```

### Parameter

- `querySet`
  - : Ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekt, das die Abfragesätze repräsentiert, die die Zeitstempelwerte speichern werden.
- `queryIndex`
  - : Eine Zahl, die den Index der Abfrage im Abfragesatz darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn Sie **`writeTimestamp()`** aufrufen, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Das `timestamp-query`-[Feature](/de/docs/Web/API/GPUSupportedFeatures) ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.
- Der `querySet`-[`GPUQuerySet.type`](/de/docs/Web/API/GPUQuerySet/type) ist `"timestamp"`.
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

---
title: "GPUCommandEncoder: writeTimestamp()-Methode"
short-title: writeTimestamp()
slug: Web/API/GPUCommandEncoder/writeTimestamp
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{deprecated_header}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`writeTimestamp()`**-Methode des [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Interfaces kodiert einen Befehl, der einen Zeitstempel in ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) schreibt, sobald die vorherigen Befehle, die in dasselbe eingereihte [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) aufgenommen wurden, von der GPU ausgeführt wurden.

> [!NOTE]
> Um Zeitstempelabfragen zu verwenden, muss das `timestamp-query`-[Feature](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein.

## Syntax

```js-nolint
writeTimestamp(querySet, queryIndex)
```

### Parameter

- `querySet`
  - : Ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Objekt, das die Abfragesätze darstellt, die die Zeitstempelwerte speichern.
- `queryIndex`
  - : Eine Zahl, die den Index der Abfrage im Abfragesatz darstellt.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`writeTimestamp()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) wird ungültig:

- Das `timestamp-query`-[Feature](/de/docs/Web/API/GPUSupportedFeatures) ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.
- Der `querySet`-[`GPUQuerySet.type`](/de/docs/Web/API/GPUQuerySet/type) ist `"timestamp"`.
- Der `queryIndex`-Wert ist kleiner als die [`GPUQuerySet.count`](/de/docs/Web/API/GPUQuerySet/count).

## Beispiele

```js
// ...

const querySet = device.createQuerySet({
  type: "timestamp",
  count: 32,
});

// ...

commandEncoder.writeTimestamp(querySet, 0);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

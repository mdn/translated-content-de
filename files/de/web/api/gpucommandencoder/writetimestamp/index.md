---
title: "GPUCommandEncoder: writeTimestamp()-Methode"
short-title: writeTimestamp()
slug: Web/API/GPUCommandEncoder/writeTimestamp
l10n:
  sourceCommit: c28529c0cc75eb5d2de857c923f0a1ebd5145313
---

{{APIRef("WebGPU API")}}{{deprecated_header}}{{non-standard_header}}

Die **`writeTimestamp()`**-Methode der {{domxref("GPUCommandEncoder")}}-Schnittstelle kodiert einen Befehl, der einen Zeitstempel in ein {{domxref("GPUQuerySet")}} schreibt, sobald die zuvor in den gleichen in die Warteschlange gestellten {{domxref("GPUCommandBuffer")}} aufgezeichneten Befehle von der GPU ausgeführt wurden.

> [!NOTE]
> Um Zeitstempelabfragen zu verwenden, muss das `timestamp-query`-{{domxref("GPUSupportedFeatures", "feature", "", "nocode")}} auf dem {{domxref("GPUDevice")}} aktiviert sein.

## Syntax

```js-nolint
writeTimestamp(querySet, queryIndex)
```

### Parameter

- `querySet`
  - : Ein {{domxref("GPUQuerySet")}}-Objekt, das das Abfrageset darstellt, das die Zeitstempelwerte speichern wird.
- `queryIndex`
  - : Eine Zahl, die den Index der Abfrage im Abfrageset darstellt.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`writeTimestamp()`** aufgerufen wird. Andernfalls wird ein {{domxref("GPUValidationError")}} generiert und der {{domxref("GPUCommandEncoder")}} wird ungültig:

- Das `timestamp-query`-{{domxref("GPUSupportedFeatures", "feature", "", "nocode")}} ist auf dem {{domxref("GPUDevice")}} aktiviert.
- Der `querySet`-{{domxref("GPUQuerySet.type")}} ist `"timestamp"`.
- Der `queryIndex`-Wert ist kleiner als die {{domxref("GPUQuerySet.count")}}.

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

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

---
title: "GPUQueue: label-Eigenschaft"
short-title: label
slug: Web/API/GPUQueue/label
l10n:
  sourceCommit: fd69b5246378644ee2949180c83856fad474886b
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Interfaces ist ein String, der eine Beschriftung bereitstellt, mit der das Objekt identifiziert werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Sie können sie direkt auf dem `GPUQueue`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn zuvor kein Beschriftungswert festgelegt wurde, gibt das Abrufen der Beschriftung einen leeren String zurück.

## Beispiele

Festlegen und Abrufen einer Beschriftung über `GPUQueue.label`:

```js
device.queue.label = "my_queue";
console.log(device.queue.label); // "my_queue"
```

Sie können die Beschriftung der Queue auch beim Anfordern des Geräts festlegen, etwa so:

```js
const device = adapter.requestDevice({
  defaultQueue: { label: "my_queue" },
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

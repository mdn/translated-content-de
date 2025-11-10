---
title: "GPUQueue: `label`-Eigenschaft"
short-title: label
slug: Web/API/GPUQueue/label
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`label`**-Eigenschaft der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle ist ein String, der verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Sie können sie direkt auf dem `GPUQueue`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn zuvor kein Labelwert gesetzt wurde, gibt das Abrufen des Labels einen leeren String zurück.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUQueue.label`:

```js
device.queue.label = "my_queue";
console.log(device.queue.label); // "my_queue"
```

Sie können das Label der Warteschlange auch festlegen, wenn Sie das Gerät anfordern, so:

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

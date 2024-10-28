---
title: "GPUQueue: label-Eigenschaft"
short-title: label
slug: Web/API/GPUQueue/label
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft der schreibgeschützten [`GPUQueue`](/de/docs/Web/API/GPUQueue) Schnittstelle ist ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError) Nachrichten oder Konsolenwarnungen.

Sie können es direkt auf dem `GPUQueue`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn kein Labelwert zuvor gesetzt wurde, liefert das Abrufen des Labels einen leeren String zurück.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUQueue.label`:

```js
device.queue.label = "my_queue";
console.log(device.queue.label); // "my_queue"
```

Sie können auch das Label der Warteschlange festlegen, wenn Sie das Gerät anfordern, wie folgt:

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

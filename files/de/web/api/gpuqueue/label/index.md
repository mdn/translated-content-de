---
title: "GPUQueue: label-Eigenschaft"
short-title: label
slug: Web/API/GPUQueue/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`label`**-Eigenschaft der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle ist ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

Sie können es direkt am `GPUQueue`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn zuvor kein Label-Wert festgelegt wurde, gibt das Abrufen der `label`-Eigenschaft einen leeren String zurück.

## Beispiele

Festlegen und Abrufen eines Labels über `GPUQueue.label`:

```js
device.queue.label = "myqueue";
console.log(device.queue.label); // "myqueue"
```

Sie können das Label der Warteschlange auch zu dem Zeitpunkt festlegen, an dem Sie das Gerät anfordern, wie folgt:

```js
const device = adapter.requestDevice({
  defaultQueue: { label: "myqueue" },
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

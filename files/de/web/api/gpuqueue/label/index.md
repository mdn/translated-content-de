---
title: "GPUQueue: label-Eigenschaft"
short-title: label
slug: Web/API/GPUQueue/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`label`**-Eigenschaft der {{domxref("GPUQueue")}}-Schnittstelle ist ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

Sie können es direkt auf dem `GPUQueue`-Objekt abrufen und setzen.

## Wert

Ein String. Wenn zuvor kein Labelwert gesetzt wurde, gibt das Abrufen des Labels einen leeren String zurück.

## Beispiele

Einstellen und Abrufen eines Labels über `GPUQueue.label`:

```js
device.queue.label = "myqueue";
console.log(device.queue.label); // "myqueue"
```

Sie können das Label der Queue auch zum Zeitpunkt der Geräteanforderung setzen, so:

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

---
title: "GPUDevice: lost-Eigenschaft"
short-title: lost
slug: Web/API/GPUDevice/lost
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`lost`**-Eigenschaft des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces enthält ein {{jsxref("Promise")}}, das während der gesamten Lebensdauer des Geräts ausstehend bleibt und mit einem [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)-Objekt aufgelöst wird, wenn das Gerät verloren geht.

[`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) wird niemals `null` zurückgeben und wird nur dann abgelehnt, wenn die Anfrage ungültig ist, d.h. wenn sie die Fähigkeiten des [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) überschreitet. Wenn eine gültige Geräteanforderung jedoch aus irgendeinem Grund nicht erfüllt werden kann, kann es sein, dass sie in ein bereits verlorenes Gerät aufgelöst wird. Zusätzlich können Geräte aus verschiedenen Gründen (wie z.B. Ressourcenverwaltung des Browsers oder Treiberaktualisierungen) jederzeit nach der Erstellung verloren gehen, daher ist es ratsam, verlorene Geräte immer ordnungsgemäß zu behandeln.

Viele Ursachen für verlorene Geräte sind vorübergehend, daher sollten Sie versuchen, ein neues Gerät zu erhalten, sobald ein vorheriges verloren gegangen ist, es sei denn, der Verlust wurde dadurch verursacht, dass die Anwendung das Gerät absichtlich zerstört hat (z.B. mit [`GPUDevice.destroy()`](/de/docs/Web/API/GPUDevice/destroy)). Beachten Sie, dass alle mit einem vorherigen Gerät erstellten WebGPU-Ressourcen (Puffer, Texturen, etc.) mit dem neuen Gerät erneut erstellt werden müssen.

> [!NOTE]
> Beachten Sie auch, dass ein `GPUAdapter` möglicherweise nicht mehr verfügbar ist, z.B. wenn die physische GPU vom System getrennt oder deaktiviert wird, um Energie zu sparen. Danach kann der Adapter keine gültigen Geräte mehr zurückgeben und wird immer bereits verlorene Geräte zurückgeben.

## Wert

Ein Promise, das mit einem [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)-Objekt aufgelöst wird, wenn das Gerät verloren geht.

## Beispiele

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  // Create a GPUDevice
  let device = await adapter.requestDevice(descriptor);

  // Use lost to handle lost devices
  device.lost.then((info) => {
    console.error(`WebGPU device was lost: ${info.message}`);
    device = null;

    if (info.reason !== "destroyed") {
      init();
    }
  });

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

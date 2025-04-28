---
title: "GPUDevice: lost-Eigenschaft"
short-title: lost
slug: Web/API/GPUDevice/lost
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`lost`**-Eigenschaft der
[`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle enthält ein {{jsxref("Promise")}}, das während der gesamten Lebensdauer des Geräts schwebend bleibt und mit einem [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)-Objekt aufgelöst wird, wenn das Gerät verloren geht.

[`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) wird niemals `null` zurückgeben und wird nur abgelehnt, wenn die Anfrage ungültig ist, d.h. wenn sie die Fähigkeiten des [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) überschreitet. Wenn eine gültige Geräteanfrage aus irgendeinem Grund nicht erfüllt werden kann, kann sie jedoch ein Gerät zurückgeben, das bereits verloren gegangen ist. Außerdem können Geräte jederzeit nach der Erstellung aus verschiedenen Gründen verloren gehen (wie z. B. Browser-Ressourcenverwaltung oder Treiberaktualisierungen), daher ist es ratsam, immer mit verloren gegangenen Geräten angemessen umzugehen.

Viele Ursachen für verlorene Geräte sind vorübergehend, daher sollten Sie versuchen, ein neues Gerät zu erhalten, sobald ein vorheriges verloren gegangen ist, es sei denn, der Verlust wurde dadurch verursacht, dass die Anwendung das Gerät absichtlich zerstörte (d.h. mit [`GPUDevice.destroy()`](/de/docs/Web/API/GPUDevice/destroy)). Beachten Sie, dass alle WebGPU-Ressourcen, die mit einem vorherigen Gerät erstellt wurden (Puffer, Texturen usw.), mit dem neuen Gerät neu erstellt werden müssen.

> [!NOTE]
> Beachten Sie auch, dass ein `GPUAdapter` möglicherweise nicht mehr verfügbar ist, z. B. wenn die physische GPU vom System getrennt oder deaktiviert wird, um Strom zu sparen. Ab diesem Zeitpunkt kann der Adapter keine gültigen Geräte mehr zurückgeben und wird immer bereits verlorene Geräte zurückgeben.

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

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

---
title: "GPUDevice: lost-Eigenschaft"
short-title: lost
slug: Web/API/GPUDevice/lost
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`lost`**-Eigenschaft der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle enthält ein {{jsxref("Promise")}}, das während der gesamten Lebensdauer des Geräts schwebend bleibt und sich auf ein [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)-Objekt auflöst, wenn das Gerät verloren geht.

[`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) wird niemals `null` zurückgeben, und es wird nur abgelehnt, wenn die Anforderung ungültig ist, d.h. sie überschreitet die Fähigkeiten des [`GPUAdapter`](/de/docs/Web/API/GPUAdapter). Wenn jedoch eine gültige Geräteeinrichtung aus irgendeinem Grund nicht erfüllt werden kann, kann es sich auf ein bereits verlorenes Gerät auflösen. Zusätzlich können Geräte jederzeit nach der Erstellung aus verschiedenen Gründen verloren gehen (wie etwa durch Ressourcenverwaltung des Browsers oder Treiber-Updates), daher ist es eine gute Idee, verlorene Geräte immer ordentlich zu handhaben.

Viele Ursachen für verlorene Geräte sind vorübergehend, daher sollten Sie versuchen, ein neues Gerät zu erhalten, sobald ein vorheriges verloren gegangen ist, es sei denn, der Verlust wurde durch die Anwendung absichtlich verursacht (z.B. mit [`GPUDevice.destroy()`](/de/docs/Web/API/GPUDevice/destroy)). Beachten Sie, dass alle WebGPU-Ressourcen, die mit einem vorherigen Gerät erstellt wurden (Puffer, Texturen usw.), mit dem neuen Gerät neu erstellt werden müssen.

> [!NOTE]
> Beachten Sie auch, dass ein `GPUAdapter` möglicherweise nicht mehr verfügbar ist, z.B. wenn die physische GPU vom System abgesteckt oder zur Energieeinsparung deaktiviert wird. Von diesem Zeitpunkt an kann der Adapter keine gültigen Geräte mehr zurückgeben und wird immer bereits verlorene Geräte zurückgeben.

## Wert

Ein Promise, das sich auf ein [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)-Objekt auflöst, wenn das Gerät verloren geht.

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

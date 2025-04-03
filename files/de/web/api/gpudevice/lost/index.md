---
title: "GPUDevice: lost-Eigenschaft"
short-title: lost
slug: Web/API/GPUDevice/lost
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`lost`** der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle enthält ein {{jsxref("Promise")}}, das während der gesamten Lebensdauer des Geräts ausstehend bleibt und mit einem [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)-Objekt aufgelöst wird, wenn das Gerät verloren geht.

[`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) wird niemals `null` zurückgeben und wird nur dann zurückgewiesen, wenn die Anforderung ungültig ist, d.h. die Fähigkeiten des [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) überschreitet. Wenn eine gültige Geräteanforderung aus irgendeinem Grund jedoch nicht erfüllt werden kann, kann sie ein bereits verlorenes Gerät zurückgeben. Zusätzlich können Geräte jederzeit nach ihrer Erstellung aus verschiedenen Gründen verloren gehen (wie z.B. Browser-Ressourcenmanagement oder Treiberaktualisierungen), daher ist es ratsam, verlorene Geräte immer elegant zu behandeln.

Viele Ursachen für verlorene Geräte sind vorübergehend, daher sollten Sie versuchen, ein neues Gerät zu erhalten, sobald ein vorheriges verloren gegangen ist, es sei denn, der Verlust wurde durch die absichtliche Zerstörung des Geräts durch die Anwendung verursacht (d.h. mit [`GPUDevice.destroy()`](/de/docs/Web/API/GPUDevice/destroy)). Beachten Sie, dass alle WebGPU-Ressourcen, die mit einem vorherigen Gerät erstellt wurden (Puffer, Texturen usw.), mit dem neuen Gerät neu erstellt werden müssen.

> [!NOTE]
> Beachten Sie auch, dass ein `GPUAdapter` nicht mehr verfügbar sein kann, z.B. wenn die physische GPU vom System abgesteckt oder deaktiviert wird, um Strom zu sparen. Ab diesem Zeitpunkt kann der Adapter keine gültigen Geräte mehr zurückgeben und wird immer bereits verlorene Geräte zurückgeben.

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

---
title: "GPUDevice: lost-Eigenschaft"
short-title: lost
slug: Web/API/GPUDevice/lost
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`lost`** der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle enthält ein {{jsxref("Promise")}}, das während der gesamten Lebensdauer des Geräts schwebend bleibt und mit einem [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)-Objekt aufgelöst wird, wenn das Gerät verloren geht.

[`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) wird niemals `null` zurückgeben und wird nur dann abgelehnt, wenn die Anfrage ungültig ist, d.h. sie übersteigt die Fähigkeiten des [`GPUAdapter`](/de/docs/Web/API/GPUAdapter). Wenn eine gültige Geräteanfrage aus irgendeinem Grund nicht erfüllt werden kann, kann es jedoch zu einem Gerät führen, das bereits verloren gegangen ist. Zusätzlich können Geräte jederzeit nach ihrer Erstellung aus verschiedenen Gründen verloren gehen (wie zum Beispiel Ressourcenverwaltung des Browsers oder Treiberaktualisierungen), daher ist es ratsam, verlorene Geräte immer sorgfältig zu handhaben.

Viele Ursachen für verlorene Geräte sind vorübergehend, daher sollten Sie versuchen, nach dem Verlust eines vorherigen Geräts ein neues zu erhalten, es sei denn, der Verlust wurde durch die absichtliche Zerstörung des Geräts seitens der Anwendung verursacht (d.h. mit [`GPUDevice.destroy()`](/de/docs/Web/API/GPUDevice/destroy)). Beachten Sie, dass alle mit einem vorherigen Gerät erstellten WebGPU-Ressourcen (Puffer, Texturen usw.) mit dem neuen Gerät neu erstellt werden müssen.

> [!NOTE]
> Bedenken Sie auch, dass ein `GPUAdapter` möglicherweise nicht mehr verfügbar ist, z.B. wenn die physische GPU vom System abgesteckt oder deaktiviert wird, um Strom zu sparen. Ab diesem Zeitpunkt kann der Adapter keine gültigen Geräte mehr zurückgeben und wird immer bereits verlorene Geräte zurückgeben.

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

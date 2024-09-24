---
title: "GPUDevice: verlorene Eigenschaft"
short-title: verloren
slug: Web/API/GPUDevice/lost
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`lost`** Eigenschaft des {{domxref("GPUDevice")}}-Interfaces ist eine schreibgeschützte Eigenschaft, die ein {{jsxref("Promise")}} enthält, welches während der gesamten Lebensdauer des Geräts ausstehend bleibt und mit einem {{domxref("GPUDeviceLostInfo")}}-Objekt aufgelöst wird, wenn das Gerät verloren geht.

{{domxref("GPUAdapter.requestDevice()")}} wird niemals `null` zurückgeben und es wird nur abgelehnt, wenn die Anfrage ungültig ist, d.h. sie die Fähigkeiten des {{domxref("GPUAdapter")}} übersteigt. Wenn jedoch aus irgendeinem Grund eine gültige Geräteanforderung nicht erfüllt werden kann, könnte sie sich möglicherweise auf ein bereits verlorenes Gerät auflösen. Außerdem können Geräte jederzeit nach ihrer Erstellung aus verschiedenen Gründen verloren gehen (wie zum Beispiel durch Ressourcenverwaltung des Browsers oder Treiberaktualisierungen), daher ist es eine gute Idee, verlorene Geräte immer angemessen zu handhaben.

Viele Ursachen für verlorene Geräte sind vorübergehend, daher sollten Sie versuchen, ein neues Gerät zu erhalten, sobald ein vorheriges verloren gegangen ist, es sei denn, der Verlust wurde durch die absichtliche Zerstörung des Geräts durch die Anwendung verursacht (z.B. mit {{domxref("GPUDevice.destroy()")}}). Beachten Sie, dass alle mit einem vorherigen Gerät erstellten WebGPU-Ressourcen (Puffer, Texturen, etc.) mit dem neuen Gerät neu erstellt werden müssen.

> [!NOTE]
> Beachten Sie auch, dass ein `GPUAdapter` nicht mehr verfügbar sein kann, z.B. wenn die physische GPU vom System getrennt oder zur Energieeinsparung deaktiviert wird. Ab diesem Zeitpunkt kann der Adapter keine gültigen Geräte mehr zurückgeben und wird immer bereits verlorene Geräte zurückgeben.

## Wert

Ein Promise, das mit einem {{domxref("GPUDeviceLostInfo")}}-Objekt aufgelöst wird, wenn das Gerät verloren geht.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

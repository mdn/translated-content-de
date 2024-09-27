---
title: "GPUDeviceLostInfo: reason-Eigenschaft"
short-title: reason
slug: Web/API/GPUDeviceLostInfo/reason
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`reason`** schreibgeschützte Eigenschaft der [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)-Schnittstelle definiert den Grund, warum das Gerät auf eine maschinenlesbare Weise verloren ging.

## Wert

Ein enumerierter Wert. Momentan ist der einzige im Spezifikationsentwurf definierte Wert `"destroyed"`, der anzeigt, dass das Gerät durch einen Aufruf von [`GPUDevice.destroy()`](/de/docs/Web/API/GPUDevice/destroy) zerstört wurde.

Wenn das Gerät aus einem unbekannten Grund verloren ging, der nicht in den verfügbaren enumerierten Werten abgedeckt ist, gibt `reason` `undefined` zurück.

## Beispiele

Ein Beispiel finden Sie auf der Hauptseite [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

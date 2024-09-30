---
title: "GPUDeviceLostInfo: reason-Eigenschaft"
short-title: reason
slug: Web/API/GPUDeviceLostInfo/reason
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`reason`** schreibgeschützte Eigenschaft des [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)-Interfaces definiert auf maschinenlesbare Weise den Grund, warum das Gerät verloren ging.

## Wert

Ein enumerierter Wert. Momentan ist der einzige im Standard definierte Wert `"destroyed"`, was darauf hinweist, dass das Gerät durch einen Aufruf von [`GPUDevice.destroy()`](/de/docs/Web/API/GPUDevice/destroy) zerstört wurde.

Wenn das Gerät aus einem unbekannten Grund, der nicht von den verfügbaren enumerierten Werten abgedeckt ist, verloren ging, gibt `reason` `undefined` zurück.

## Beispiele

Sehen Sie sich die Hauptseite [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost#examples) für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

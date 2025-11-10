---
title: "GPUDeviceLostInfo: reason-Eigenschaft"
short-title: reason
slug: Web/API/GPUDeviceLostInfo/reason
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`reason`**-Eigenschaft, die schreibgeschützt ist, des [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)-Interfaces definiert den Grund, weshalb das Gerät verloren ging, in einer maschinenlesbaren Form.

## Wert

Ein enumerierter Wert. Derzeit ist der einzige in der Spezifikation definierte Wert `"destroyed"`, was bedeutet, dass das Gerät durch einen Aufruf von [`GPUDevice.destroy()`](/de/docs/Web/API/GPUDevice/destroy) zerstört wurde.

Wenn das Gerät aus einem unbekannten Grund verloren ging, der nicht durch die verfügbaren enumerierten Werte abgedeckt ist, gibt `reason` `undefined` zurück.

## Beispiele

Sehen Sie sich die Hauptseite [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost#examples) für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

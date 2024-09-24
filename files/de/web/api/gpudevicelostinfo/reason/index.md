---
title: "GPUDeviceLostInfo: reason-Eigenschaft"
short-title: reason
slug: Web/API/GPUDeviceLostInfo/reason
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`reason`** schreibgeschützte Eigenschaft des {{domxref("GPUDeviceLostInfo")}} Schnittstelle definiert den Grund, warum das Gerät auf maschinenlesbare Weise verloren ging.

## Wert

Ein aufgezählter Wert. Im Moment ist der einzige im Spezifikationsdefinierte Wert `"destroyed"`, was darauf hinweist, dass das Gerät durch einen Aufruf von {{domxref("GPUDevice.destroy()")}} zerstört wurde.

Wenn das Gerät aus einem unbekannten Grund verloren ging, der nicht in den verfügbaren aufgezählten Werten abgedeckt ist, gibt `reason` `undefined` zurück.

## Beispiele

Sehen Sie sich die Hauptseite von [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost#examples) für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

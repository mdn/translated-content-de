---
title: "GPUQuerySet: type-Eigenschaft"
short-title: type
slug: Web/API/GPUQuerySet/type
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`type`**-Eigenschaft der {{domxref("GPUQuerySet")}}-Schnittstelle ist ein aufzählbarer Wert, der den Typ der Abfragen spezifiziert, die vom `GPUQuerySet` verwaltet werden.

## Wert

Ein aufzählbarer Wert. Mögliche Werte sind:

- `"occlusion"`
  - : Das `GPUQuerySet` verwaltet Occlusion-Abfragen.
- `"timestamp"`
  - : Das `GPUQuerySet` verwaltet Timestamp-Abfragen.

## Beispiele

Ein Beispiel finden Sie auf der Hauptseite von [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

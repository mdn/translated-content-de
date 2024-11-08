---
title: "GPUQuerySet: type-Eigenschaft"
short-title: type
slug: Web/API/GPUQuerySet/type
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`type`**-Eigenschaft der
[`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Schnittstelle ist ein aufzählbarer Wert, der den Typ von Abfragen angibt, die vom `GPUQuerySet` verwaltet werden.

## Wert

Ein aufzählbarer Wert. Mögliche Werte sind:

- `"occlusion"`
  - : Das `GPUQuerySet` verwaltet Occlusion-Abfragen.
- `"timestamp"` {{experimental_inline}}
  - : Das `GPUQuerySet` verwaltet Timestamp-Abfragen.

> [!NOTE]
> Das `timestamp-query`-["Feature"](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um Timestamp-Abfragen zu verwenden.

## Beispiele

Siehe die Hauptseite [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet#examples) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

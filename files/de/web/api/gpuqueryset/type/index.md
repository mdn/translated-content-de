---
title: "GPUQuerySet: type-Eigenschaft"
short-title: type
slug: Web/API/GPUQuerySet/type
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`type`** schreibgeschützte Eigenschaft des [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Interfaces ist ein enumerierter Wert, der den Typ der vom `GPUQuerySet` verwalteten Abfragen angibt.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"occlusion"`
  - : Das `GPUQuerySet` verwaltet Occlusion-Abfragen.
- `"timestamp"` {{experimental_inline}}
  - : Das `GPUQuerySet` verwaltet Timestamp-Abfragen.

> [!NOTE]
> Das `timestamp-query` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um Timestamp-Abfragen zu verwenden.

## Beispiele

Siehe die Hauptseite von [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet#examples) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

---
title: "GPUQuerySet: type-Eigenschaft"
short-title: type
slug: Web/API/GPUQuerySet/type
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`type`** schreibgeschützte Eigenschaft der [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Schnittstelle ist ein enumerierter Wert, der den Typ der von `GPUQuerySet` verwalteten Abfragen angibt.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"occlusion"`
  - : Der `GPUQuerySet` verwaltet Occlusion-Abfragen.
- `"timestamp"`
  - : Der `GPUQuerySet` verwaltet Zeitstempel-Abfragen.

## Beispiele

Sehen Sie sich die Hauptseite von [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet#examples) für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

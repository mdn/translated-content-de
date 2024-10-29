---
title: "GPUQuerySet: `type` Eigenschaft"
short-title: type
slug: Web/API/GPUQuerySet/type
l10n:
  sourceCommit: 2379747e3cefc009c6a00ec52e88d66ff15c5397
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`type`** Eigenschaft des [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Interfaces ist ein enumerierter Wert, der den Typ der Abfragen angibt, die durch das `GPUQuerySet` verwaltet werden.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"occlusion"`
  - : Das `GPUQuerySet` verwaltet Occlusion-Abfragen.
- `"timestamp"`
  - : Das `GPUQuerySet` verwaltet Timestamp-Abfragen.

> [!NOTE]
> Das `timestamp-query`-[Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert werden, um Timestamp-Abfragen zu verwenden.

## Beispiele

Siehe die Hauptseite [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet#examples) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

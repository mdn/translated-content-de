---
title: "GPUQuerySet: type-Eigenschaft"
short-title: type
slug: Web/API/GPUQuerySet/type
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`type`**-Eigenschaft (nur lesbar) des [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Interfaces ist ein enumerierter Wert, der den Typ der Abfragen spezifiziert, die durch das `GPUQuerySet` verwaltet werden.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"occlusion"`
  - : Das `GPUQuerySet` verwaltet Occlusion-Abfragen.
- `"timestamp"`
  - : Das `GPUQuerySet` verwaltet Timestamp-Abfragen.

## Beispiele

Sehen Sie sich die Hauptseite zu [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet#examples) für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)

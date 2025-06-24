---
title: "IntersectionObserverEntry: rootBounds-Eigenschaft"
short-title: rootBounds
slug: Web/API/IntersectionObserverEntry/rootBounds
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

Die **`rootBounds`** schreibgeschützte Eigenschaft der [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Schnittstelle ist ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das dem Wurzel-Schnittrechteck des [`target`](/de/docs/Web/API/IntersectionObserverEntry/target) entspricht, verschoben um den Wert des [`IntersectionObserver.rootMargin`](/de/docs/Web/API/IntersectionObserver/rootMargin), falls einer angegeben ist.

## Wert

Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das das Wurzel-Schnittrechteck beschreibt.
Für Wurzeln, die den Viewport des [`Document`](/de/docs/Web/API/Document) darstellen, ist dieses Rechteck das Begrenzungsrechteck des gesamten Dokuments.
Andernfalls ist es die Begrenzung des Wurzelelements.

Dieses Rechteck wird um die Werte in [`IntersectionObserver.rootMargin`](/de/docs/Web/API/IntersectionObserver/rootMargin) verschoben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

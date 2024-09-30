---
title: "IntersectionObserverEntry: rootBounds-Eigenschaft"
short-title: rootBounds
slug: Web/API/IntersectionObserverEntry/rootBounds
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schnittgeschützte **`rootBounds`**-Eigenschaft des [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Interfaces ist ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das dem Schnittstellenrechteck des Wurzelelements des [`target`](/de/docs/Web/API/IntersectionObserverEntry/target) entspricht, verschoben um den [`IntersectionObserver.rootMargin`](/de/docs/Web/API/IntersectionObserver/rootMargin), falls einer angegeben ist.

## Wert

Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das das Schnittrechteck des Wurzelelements beschreibt. Bei Wurzeln, die der Ansichtsbereich des [`Document`](/de/docs/Web/API/Document) sind, ist dieses Rechteck das Begrenzungsrechteck des gesamten Dokuments. Andernfalls ist es die Begrenzung des Wurzelelements.

Dieses Rechteck ist um die Werte in [`IntersectionObserver.rootMargin`](/de/docs/Web/API/IntersectionObserver/rootMargin) verschoben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

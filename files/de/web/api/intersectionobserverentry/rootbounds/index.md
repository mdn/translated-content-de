---
title: "IntersectionObserverEntry: rootBounds-Eigenschaft"
short-title: rootBounds
slug: Web/API/IntersectionObserverEntry/rootBounds
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`rootBounds`**-Eigenschaft des [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Interfaces ist ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das dem Root-Schnittrechteck des [`target`](/de/docs/Web/API/IntersectionObserverEntry/target) entspricht, versetzt um den [`IntersectionObserver.rootMargin`](/de/docs/Web/API/IntersectionObserver/rootMargin), falls einer angegeben ist.

## Wert

Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das das Root-Schnittrechteck beschreibt. Bei Roots, die der Viewport des [`Document`](/de/docs/Web/API/Document) sind, ist dieses Rechteck das Begrenzungsrechteck des gesamten Dokuments. Andernfalls sind es die Grenzen des Root-Elements.

Dieses Rechteck wird durch die Werte in [`IntersectionObserver.rootMargin`](/de/docs/Web/API/IntersectionObserver/rootMargin) versetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

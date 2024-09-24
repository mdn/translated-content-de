---
title: "IntersectionObserverEntry: rootBounds-Eigenschaft"
short-title: rootBounds
slug: Web/API/IntersectionObserverEntry/rootBounds
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`rootBounds`**-Eigenschaft der {{domxref("IntersectionObserverEntry")}}-Schnittstelle ist ein {{domxref("DOMRectReadOnly")}}, das dem Wurzel-Schnittrechteck des {{domxref("IntersectionObserverEntry.target", "Ziels")}} entspricht, versetzt um den {{domxref("IntersectionObserver.rootMargin")}}, falls einer angegeben ist.

## Wert

Ein {{domxref("DOMRectReadOnly")}}, das das Wurzel-Schnittrechteck beschreibt. Für Wurzeln, die die Ansicht eines {{domxref("Document")}} sind, ist dieses Rechteck das Begrenzungsrechteck des gesamten Dokuments. Andernfalls handelt es sich um die Grenzen des Wurzelelements.

Dieses Rechteck ist um die Werte in {{domxref("IntersectionObserver.rootMargin")}} versetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "IntersectionObserverEntry: boundingClientRect Eigenschaft"
short-title: boundingClientRect
slug: Web/API/IntersectionObserverEntry/boundingClientRect
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte Eigenschaft **`boundingClientRect`** der {{domxref("IntersectionObserverEntry")}}-Schnittstelle gibt eine {{domxref("DOMRectReadOnly")}} zurück, die im Wesentlichen ein Rechteck beschreibt, das das kleinste Rechteck darstellt, das das gesamte Ziel-Element umfasst.

## Wert

Eine {{domxref("DOMRectReadOnly")}}, welche das kleinste Rechteck beschreibt, das jeden Teil des Ziel-Elements enthält, dessen Schnittpunktänderung beschrieben wird. Dieser Wert wird mit demselben Algorithmus wie {{domxref("Element.getBoundingClientRect()")}} ermittelt. Lesen Sie daher den entsprechenden Artikel für Details dazu, was genau getan wird, um dieses Rechteck zu ermitteln und was innerhalb seiner Begrenzungen enthalten ist und was nicht.

Im Allgemeinen ist es jedoch sicher, dies als das Begrenzungsrechteck des Ziel-Elements zu betrachten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "SVGSVGElement: currentScale Eigenschaft"
short-title: currentScale
slug: Web/API/SVGSVGElement/currentScale
l10n:
  sourceCommit: 6d35583226f1ca3bac852506014f973113c0a8a2
---

{{APIRef("SVG")}}

Die **`currentScale`**-Eigenschaft der [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-Schnittstelle spiegelt den aktuellen Skalierungsfaktor relativ zur anfänglichen Ansicht wider, um Benutzervergrößerungen und Schwenkoperationen auf dem äußersten {{SVGElement("svg")}}-Element zu berücksichtigen.

Die DOM-Attribute `currentScale` und `currentTranslate` entsprechen der 2×3-Matrix `[a b c d e f] = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y]`. Wenn die "Vergrößerung" aktiviert ist (d.h. `zoomAndPan="magnify"`), dann hat dies den Effekt, dass eine zusätzliche Transformation auf der äußersten Ebene des SVG-Dokumentfragments platziert wird (d.h. außerhalb des äußersten {{SVGElement("svg")}}-Elements).

Wenn sich das {{SVGElement("svg")}}-Element nicht auf der äußersten Ebene befindet, ist `currentScale` immer `1` und das Setzen hat keinen Effekt.

## Wert

Ein Float.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGSVGElement.currentTranslate`](/de/docs/Web/API/SVGSVGElement/currentTranslate)

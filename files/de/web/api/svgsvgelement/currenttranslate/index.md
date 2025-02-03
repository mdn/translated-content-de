---
title: "SVGSVGElement: currentTranslate-Eigenschaft"
short-title: currentTranslate
slug: Web/API/SVGSVGElement/currentTranslate
l10n:
  sourceCommit: 6d35583226f1ca3bac852506014f973113c0a8a2
---

{{APIRef("SVG")}}

Die **`currentTranslate`**-Eigenschaft des [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-Interfaces ist eine schreibgeschützte Eigenschaft, die den Übersetzungsfaktor widerspiegelt, der die Benutzer-"Vergrößerung" berücksichtigt und einem äußersten {{SVGElement("svg")}}-Element entspricht.

Wenn das {{SVGElement("svg")}}-Element nicht auf der äußersten Ebene ist, ist `currentTranslate` immer `{ x: 0, y: 0 }` und ist schreibgeschützt. Andernfalls ist es beschreibbar.

## Wert

Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGSVGElement.currentScale`](/de/docs/Web/API/SVGSVGElement/currentScale)
- [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)

---
title: SVGClipPathElement
slug: Web/API/SVGClipPathElement
l10n:
  sourceCommit: cce0046336a987e8f643c287fe1430f39269a048
---

{{APIRef("SVG")}}

Die **`SVGClipPathElement`**-Schnittstelle bietet Zugriff auf die Eigenschaften von {{SVGElement("clipPath")}}-Elementen sowie Methoden zu deren Manipulation.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Element, {{domxref("SVGElement")}}._

- {{domxref("SVGClipPathElement.clipPathUnits")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("SVGAnimatedEnumeration")}} zurück, die dem {{SVGAttr("clipPathUnits")}}-Attribut des zugehörigen {{SVGElement("clipPath")}}-Elements entspricht. Nimmt einen der in {{domxref("SVGUnitTypes")}} definierten Konstanten an.
- {{domxref("SVGClipPathElement.transform")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("SVGAnimatedTransformList")}} zurück, die dem {{SVGAttr("transform")}}-Attribut des zugehörigen {{SVGElement("clipPath")}}-Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von ihrem übergeordneten Element, {{domxref("SVGElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("clipPath")}}

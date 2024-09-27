---
title: SVGGraphicsElement
slug: Web/API/SVGGraphicsElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGGraphicsElement`**-Schnittstelle repräsentiert SVG-Elemente, deren Hauptzweck darin besteht, Grafiken direkt in eine Gruppe zu rendern.

{{InheritanceDiagram}}

## Instanzen-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Element, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGGraphicsElement.requiredExtensions`](/de/docs/Web/API/SVGGraphicsElement/requiredExtensions) {{ReadOnlyInline}}
  - : Eine [`SVGStringList`](/de/docs/Web/API/SVGStringList), die das {{SVGAttr("requiredExtensions")}} Attribut des gegebenen Elements widerspiegelt.
- [`SVGGraphicsElement.systemLanguage`](/de/docs/Web/API/SVGGraphicsElement/systemLanguage) {{ReadOnlyInline}}
  - : Eine [`SVGStringList`](/de/docs/Web/API/SVGStringList), die das {{SVGAttr("systemLanguage")}} Attribut des gegebenen Elements widerspiegelt.
- [`SVGGraphicsElement.transform`](/de/docs/Web/API/SVGGraphicsElement/transform) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList), die den berechneten Wert der {{cssxref("transform")}} Eigenschaft und das dazugehörige {{SVGAttr("transform")}} Attribut des gegebenen Elements widerspiegelt.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrem übergeordneten Element, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGGraphicsElement.getBBox()`](/de/docs/Web/API/SVGGraphicsElement/getBBox)
  - : Gibt einen [`DOMRect`](/de/docs/Web/API/DOMRect) zurück, der den berechneten Begrenzungsrahmen des aktuellen Elements darstellt.
- [`SVGGraphicsElement.getCTM()`](/de/docs/Web/API/SVGGraphicsElement/getCTM)
  - : Gibt eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die die Matrix darstellt, welche das Koordinatensystem des aktuellen Elements in das Koordinatensystem des SVG-Viewports umwandelt.
- [`SVGGraphicsElement.getScreenCTM()`](/de/docs/Web/API/SVGGraphicsElement/getScreenCTM)
  - : Gibt eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die die Matrix darstellt, welche das Koordinatensystem des aktuellen Elements in das Koordinatensystem des SVG-Viewports für das SVG-Dokumentfragment umwandelt.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Event-Listeners an die entsprechende `on...` Handler-Eigenschaft.

- [`copy`](/de/docs/Web/API/SVGGraphicsElement/copy_event)
  - : Wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.
- [`cut`](/de/docs/Web/API/SVGGraphicsElement/cut_event)
  - : Wird ausgelöst, wenn der Benutzer eine "Ausschneiden"-Aktion über die Benutzeroberfläche des Browsers initiiert hat.
- [`paste`](/de/docs/Web/API/SVGGraphicsElement/paste_event)
  - : Wird ausgelöst, wenn der Benutzer eine "Einfügen"-Aktion über die Benutzeroberfläche des Browsers initiiert hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: SVGGraphicsElement
slug: Web/API/SVGGraphicsElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGGraphicsElement`**-Schnittstelle repräsentiert SVG-Elemente, deren Hauptzweck darin besteht, Grafiken direkt in eine Gruppe zu rendern.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von ihrem Elternteil, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGGraphicsElement.requiredExtensions`](/de/docs/Web/API/SVGGraphicsElement/requiredExtensions) {{ReadOnlyInline}}
  - : Eine [`SVGStringList`](/de/docs/Web/API/SVGStringList), die das {{SVGAttr("requiredExtensions")}}-Attribut des gegebenen Elements widerspiegelt.
- [`SVGGraphicsElement.systemLanguage`](/de/docs/Web/API/SVGGraphicsElement/systemLanguage) {{ReadOnlyInline}}
  - : Eine [`SVGStringList`](/de/docs/Web/API/SVGStringList), die das {{SVGAttr("systemLanguage")}}-Attribut des gegebenen Elements widerspiegelt.
- [`SVGGraphicsElement.transform`](/de/docs/Web/API/SVGGraphicsElement/transform) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList), die den berechneten Wert der {{cssxref("transform")}}-Eigenschaft und das entsprechende {{SVGAttr("transform")}}-Attribut des gegebenen Elements widerspiegelt.

## Instanz-Methoden

_Diese Schnittstelle erbt außerdem Methoden von ihrem Elternteil, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGGraphicsElement.getBBox()`](/de/docs/Web/API/SVGGraphicsElement/getBBox)
  - : Gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect) zurück, das das berechnete Begrenzungsrechteck des aktuellen Elements darstellt.
- [`SVGGraphicsElement.getCTM()`](/de/docs/Web/API/SVGGraphicsElement/getCTM)
  - : Gibt eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die die Matrix darstellt, die das Koordinatensystem des aktuellen Elements in das Koordinatensystem seines SVG-Ansichtsfensters transformiert.
- [`SVGGraphicsElement.getScreenCTM()`](/de/docs/Web/API/SVGGraphicsElement/getScreenCTM)
  - : Gibt eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die die Matrix darstellt, die das Koordinatensystem des aktuellen Elements in das Koordinatensystem des SVG-Ansichtsfensters für das SVG-Dokumentfragment transformiert.

## Ereignisse

Hören Sie auf diese Ereignisse mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur entsprechenden `on...` Handler-Eigenschaft.

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

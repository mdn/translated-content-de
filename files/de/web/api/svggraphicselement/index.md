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

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, {{domxref("SVGElement")}}._

- {{domxref("SVGGraphicsElement.requiredExtensions")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGStringList")}}, die das {{SVGAttr("requiredExtensions")}}-Attribut des angegebenen Elements widerspiegelt.
- {{domxref("SVGGraphicsElement.systemLanguage")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGStringList")}}, die das {{SVGAttr("systemLanguage")}}-Attribut des angegebenen Elements widerspiegelt.
- {{domxref("SVGGraphicsElement.transform")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGAnimatedTransformList")}}, die den berechneten Wert der {{cssxref("transform")}}-Eigenschaft und das entsprechende {{SVGAttr("transform")}}-Attribut des angegebenen Elements widerspiegelt.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, {{domxref("SVGElement")}}._

- {{domxref("SVGGraphicsElement.getBBox()")}}
  - : Gibt ein {{domxref("DOMRect")}} zurück, das die berechnete Begrenzungsbox des aktuellen Elements darstellt.
- {{domxref("SVGGraphicsElement.getCTM()")}}
  - : Gibt eine {{domxref("DOMMatrix")}} zurück, die die Matrix darstellt, die das Koordinatensystem des aktuellen Elements in das Koordinatensystem seines SVG-Viewports transformiert.
- {{domxref("SVGGraphicsElement.getScreenCTM()")}}
  - : Gibt eine {{domxref("DOMMatrix")}} zurück, die die Matrix darstellt, die das Koordinatensystem des aktuellen Elements in das Koordinatensystem des SVG-Viewports für das SVG-Dokumentfragment transformiert.

## Ereignisse

Verwenden Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners an die entsprechende `on...`-Handler-Eigenschaft.

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

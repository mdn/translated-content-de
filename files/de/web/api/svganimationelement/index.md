---
title: SVGAnimationElement
slug: Web/API/SVGAnimationElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Das **`SVGAnimationElement`**-Interface ist das Basis-Interface für alle Animations-Element-Interfaces: [`SVGAnimateElement`](/de/docs/Web/API/SVGAnimateElement), [`SVGSetElement`](/de/docs/Web/API/SVGSetElement), [`SVGAnimateColorElement`](/de/docs/Web/API/SVGAnimateColorElement), [`SVGAnimateMotionElement`](/de/docs/Web/API/SVGAnimateMotionElement) und [`SVGAnimateTransformElement`](/de/docs/Web/API/SVGAnimateTransformElement).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGAnimationElement.requiredExtensions`](/de/docs/Web/API/SVGAnimationElement/requiredExtensions) {{ReadOnlyInline}}
  - : Eine [`SVGStringList`](/de/docs/Web/API/SVGStringList), die das {{SVGAttr("requiredExtensions")}}-Attribut des gegebenen Elements widerspiegelt.
- [`SVGAnimationElement.systemLanguage`](/de/docs/Web/API/SVGAnimationElement/systemLanguage) {{ReadOnlyInline}}
  - : Eine [`SVGStringList`](/de/docs/Web/API/SVGStringList), die das {{SVGAttr("systemLanguage")}}-Attribut des gegebenen Elements widerspiegelt.
- [`SVGAnimationElement.targetElement`](/de/docs/Web/API/SVGAnimationElement/targetElement) {{ReadOnlyInline}}
  - : Ein [`SVGElement`](/de/docs/Web/API/SVGElement), das das Element darstellt, das animiert wird. Wenn kein Ziel-Element animiert wird (zum Beispiel, weil das {{SVGAttr("href")}} ein unbekanntes Element angibt), ist der zurückgegebene Wert `null`.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem übergeordneten [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGAnimationElement.getStartTime()`](/de/docs/Web/API/SVGAnimationElement/getStartTime)
  - : Gibt einen Float zurück, der die Startzeit in Sekunden für das aktuelle Intervall dieses Animations-Elements darstellt, falls vorhanden, unabhängig davon, ob das Intervall bereits begonnen hat. Wenn kein aktuelles Intervall existiert, wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `INVALID_STATE_ERR` ausgelöst.
- [`SVGAnimationElement.getCurrentTime()`](/de/docs/Web/API/SVGAnimationElement/getCurrentTime)
  - : Gibt einen Float zurück, der die aktuelle Zeit in Sekunden relativ zur Zeit null für den angegebenen Zeitcontainer darstellt.
- [`SVGAnimationElement.getSimpleDuration()`](/de/docs/Web/API/SVGAnimationElement/getSimpleDuration)
  - : Gibt einen Float zurück, der die Anzahl der Sekunden für die einfache Dauer dieser Animation darstellt. Wenn die einfache Dauer undefiniert ist (z.B. wenn die Endzeit unbestimmt ist), wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NOT_SUPPORTED_ERR` ausgelöst.
- [`SVGAnimationElement.beginElement()`](/de/docs/Web/API/SVGAnimationElement/beginElement)
  - : Erzeugt eine Anfangsinstanzzeit für die aktuelle Zeit. Die neue Instanzzeit wird zur Liste der Anfangsinstanzzeiten hinzugefügt. Das Verhalten dieser Methode entspricht `beginElementAt(0)`.
- [`SVGAnimationElement.beginElementAt()`](/de/docs/Web/API/SVGAnimationElement/beginElementAt)
  - : Erzeugt eine Anfangsinstanzzeit für die aktuelle Zeit plus den angegebenen Offset. Die neue Instanzzeit wird zur Liste der Anfangsinstanzzeiten hinzugefügt.
- [`SVGAnimationElement.endElement()`](/de/docs/Web/API/SVGAnimationElement/endElement)
  - : Erzeugt eine Endinstanzzeit für die aktuelle Zeit. Die neue Instanzzeit wird zur Liste der Endinstanzzeiten hinzugefügt. Das Verhalten dieser Methode entspricht `endElementAt(0)`.
- [`SVGAnimationElement.endElementAt()`](/de/docs/Web/API/SVGAnimationElement/endElementAt)
  - : Erzeugt eine Endinstanzzeit für die aktuelle Zeit plus den angegebenen Offset. Die neue Instanzzeit wird zur Liste der Endinstanzzeiten hinzugefügt.

## Ereignisse

Verwenden Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `on...`-Handler-Eigenschaft dieses Interfaces zuweisen.

- [`beginEvent`](/de/docs/Web/API/SVGAnimationElement/beginEvent_event)
  - : Wird ausgelöst, wenn die lokale Timeline des Elements abgespielt wird.
- [`endEvent`](/de/docs/Web/API/SVGAnimationElement/endEvent_event)
  - : Wird ausgelöst, wenn das aktive Ende der Animation erreicht ist.
- [`repeatEvent`](/de/docs/Web/API/SVGAnimationElement/repeatEvent_event)
  - : Wird ausgelöst, wenn die lokale Timeline des Elements wiederholt wird. Es wird jedes Mal ausgelöst, wenn das Element wiederholt wird, nach der ersten Iteration.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

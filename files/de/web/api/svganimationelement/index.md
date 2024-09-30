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

_Dieses Interface erbt auch Eigenschaften von seinem Eltern-Interface, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGAnimationElement.requiredExtensions`](/de/docs/Web/API/SVGAnimationElement/requiredExtensions) {{ReadOnlyInline}}
  - : Eine [`SVGStringList`](/de/docs/Web/API/SVGStringList), die das {{SVGAttr("requiredExtensions")}}-Attribut des gegebenen Elements widerspiegelt.
- [`SVGAnimationElement.systemLanguage`](/de/docs/Web/API/SVGAnimationElement/systemLanguage) {{ReadOnlyInline}}
  - : Eine [`SVGStringList`](/de/docs/Web/API/SVGStringList), die das {{SVGAttr("systemLanguage")}}-Attribut des gegebenen Elements widerspiegelt.
- [`SVGAnimationElement.targetElement`](/de/docs/Web/API/SVGAnimationElement/targetElement) {{ReadOnlyInline}}
  - : Ein [`SVGElement`](/de/docs/Web/API/SVGElement), das das Element darstellt, welches animiert wird. Wenn kein Ziel-Element animiert wird (zum Beispiel, weil das {{SVGAttr("href")}} ein unbekanntes Element spezifiziert), ist der zurückgegebene Wert `null`.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Eltern-Interface, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGAnimationElement.getStartTime()`](/de/docs/Web/API/SVGAnimationElement/getStartTime)
  - : Gibt einen Float-Wert zurück, der die Startzeit, in Sekunden, für das aktuelle Intervall dieses Animations-Elements darstellt, falls es existiert, unabhängig davon, ob das Intervall bereits begonnen hat. Wenn kein aktuelles Intervall vorhanden ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `INVALID_STATE_ERR` geworfen.
- [`SVGAnimationElement.getCurrentTime()`](/de/docs/Web/API/SVGAnimationElement/getCurrentTime)
  - : Gibt einen Float-Wert zurück, der die aktuelle Zeit in Sekunden relativ zur Zeit Null des gegebenen Zeitcontainers darstellt.
- [`SVGAnimationElement.getSimpleDuration()`](/de/docs/Web/API/SVGAnimationElement/getSimpleDuration)
  - : Gibt einen Float-Wert zurück, der die Anzahl der Sekunden für die einfache Dauer dieser Animation darstellt. Wenn die einfache Dauer undefiniert ist (z.B. die Endzeit ist unbestimmt), wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NOT_SUPPORTED_ERR` ausgelöst.
- [`SVGAnimationElement.beginElement()`](/de/docs/Web/API/SVGAnimationElement/beginElement)
  - : Erstellt eine Anfangszeitinstanz für die aktuelle Zeit. Die neue Zeitinstanz wird zur Liste der Anfangszeiten hinzugefügt. Das Verhalten dieser Methode entspricht `beginElementAt(0)`.
- [`SVGAnimationElement.beginElementAt()`](/de/docs/Web/API/SVGAnimationElement/beginElementAt)
  - : Erstellt eine Anfangszeitinstanz für die aktuelle Zeit plus den angegebenen Offset. Die neue Zeitinstanz wird zur Liste der Anfangszeiten hinzugefügt.
- [`SVGAnimationElement.endElement()`](/de/docs/Web/API/SVGAnimationElement/endElement)
  - : Erstellt eine Endzeitinstanz für die aktuelle Zeit. Die neue Zeitinstanz wird zur Liste der Endzeiten hinzugefügt. Das Verhalten dieser Methode entspricht `endElementAt(0)`.
- [`SVGAnimationElement.endElementAt()`](/de/docs/Web/API/SVGAnimationElement/endElementAt)
  - : Erstellt eine Endzeitinstanz für die aktuelle Zeit plus den angegebenen Offset. Die neue Zeitinstanz wird zur Liste der Endzeiten hinzugefügt.

## Ereignisse

Verwenden Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `on...` Handler-Eigenschaft dieses Interfaces zuweisen.

- [`beginEvent`](/de/docs/Web/API/SVGAnimationElement/beginEvent_event)
  - : Wird ausgelöst, wenn die lokale Zeitachse des Elements beginnt zu spielen.
- [`endEvent`](/de/docs/Web/API/SVGAnimationElement/endEvent_event)
  - : Wird ausgelöst, wenn das aktive Ende der Animation erreicht ist.
- [`repeatEvent`](/de/docs/Web/API/SVGAnimationElement/repeatEvent_event)
  - : Wird ausgelöst, wenn die lokale Zeitachse des Elements sich wiederholt. Es wird jedes Mal ausgelöst, wenn das Element sich wiederholt, nach der ersten Iteration.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

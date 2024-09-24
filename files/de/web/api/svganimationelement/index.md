---
title: SVGAnimationElement
slug: Web/API/SVGAnimationElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Das **`SVGAnimationElement`** Interface ist das Basis-Interface für alle Animations-Element-Interfaces: {{domxref("SVGAnimateElement")}}, {{domxref("SVGSetElement")}}, {{domxref("SVGAnimateColorElement")}}, {{domxref("SVGAnimateMotionElement")}} und {{domxref("SVGAnimateTransformElement")}}.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Eltern-Interface, {{domxref("SVGElement")}}._

- {{domxref("SVGAnimationElement.requiredExtensions")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGStringList")}}, die das {{SVGAttr("requiredExtensions")}}-Attribut des gegebenen Elements widerspiegelt.
- {{domxref("SVGAnimationElement.systemLanguage")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGStringList")}}, die das {{SVGAttr("systemLanguage")}}-Attribut des gegebenen Elements widerspiegelt.
- {{domxref("SVGAnimationElement.targetElement")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGElement")}}, das das Element repräsentiert, das animiert wird. Wenn kein Ziel-Element animiert wird (zum Beispiel, weil das {{SVGAttr("href")}} ein unbekanntes Element angibt), wird der Wert `null` zurückgegeben.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Eltern-Interface, {{domxref("SVGElement")}}._

- {{domxref("SVGAnimationElement.getStartTime()")}}
  - : Gibt einen Float zurück, der die Startzeit in Sekunden für das aktuelle Intervall dieses Animations-Elements repräsentiert, falls es existiert, unabhängig davon, ob das Intervall bereits begonnen hat. Wenn kein aktuelles Intervall existiert, wird ein {{domxref("DOMException")}} mit dem Code `INVALID_STATE_ERR` ausgelöst.
- {{domxref("SVGAnimationElement.getCurrentTime()")}}
  - : Gibt einen Float zurück, der die aktuelle Zeit in Sekunden relativ zur Zeit Null des angegebenen Zeitcontainers repräsentiert.
- {{domxref("SVGAnimationElement.getSimpleDuration()")}}
  - : Gibt einen Float zurück, der die Anzahl der Sekunden für die einfache Dauer dieser Animation repräsentiert. Wenn die einfache Dauer undefiniert ist (z.B. die Endzeit ist unbestimmt), wird ein {{domxref("DOMException")}} mit dem Code `NOT_SUPPORTED_ERR` ausgelöst.
- {{domxref("SVGAnimationElement.beginElement()")}}
  - : Erstellt eine Anfangsinstanzzeit für die aktuelle Zeit. Die neue Instanzzeit wird zur Liste der Anfangsinstanzzeiten hinzugefügt. Das Verhalten dieser Methode entspricht `beginElementAt(0)`.
- {{domxref("SVGAnimationElement.beginElementAt()")}}
  - : Erstellt eine Anfangsinstanzzeit für die aktuelle Zeit plus die angegebene Verschiebung. Die neue Instanzzeit wird zur Liste der Anfangsinstanzzeiten hinzugefügt.
- {{domxref("SVGAnimationElement.endElement()")}}
  - : Erstellt eine Endinstanzzeit für die aktuelle Zeit. Die neue Instanzzeit wird zur Liste der Endinstanzzeiten hinzugefügt. Das Verhalten dieser Methode entspricht `endElementAt(0)`.
- {{domxref("SVGAnimationElement.endElementAt()")}}
  - : Erstellt eine Endinstanzzeit für die aktuelle Zeit plus die angegebene Verschiebung. Die neue Instanzzeit wird zur Liste der Endinstanzzeiten hinzugefügt.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `on...` Handler-Eigenschaft dieses Interfaces.

- [`beginEvent`](/de/docs/Web/API/SVGAnimationElement/beginEvent_event)
  - : Wird ausgelöst, wenn die lokale Zeitleiste des Elements zu spielen beginnt.
- [`endEvent`](/de/docs/Web/API/SVGAnimationElement/endEvent_event)
  - : Wird ausgelöst, wenn das aktive Ende der Animation erreicht wird.
- [`repeatEvent`](/de/docs/Web/API/SVGAnimationElement/repeatEvent_event)
  - : Wird ausgelöst, wenn sich die lokale Zeitleiste des Elements wiederholt. Es wird jedes Mal ausgelöst, wenn das Element erneut abgespielt wird, nach der ersten Iteration.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

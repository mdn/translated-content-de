---
title: SVGAnimationElement
slug: Web/API/SVGAnimationElement
l10n:
  sourceCommit: bf9b4bff68f6fb57e1184f196792029a1f8b0739
---

{{APIRef("SVG")}}

Das **`SVGAnimationElement`**-Interface ist das Basis-Interface für alle Interfaces von Animationselementen: [`SVGAnimateElement`](/de/docs/Web/API/SVGAnimateElement), [`SVGSetElement`](/de/docs/Web/API/SVGSetElement), [`SVGAnimateMotionElement`](/de/docs/Web/API/SVGAnimateMotionElement) und [`SVGAnimateTransformElement`](/de/docs/Web/API/SVGAnimateTransformElement).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Interface [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGAnimationElement.requiredExtensions`](/de/docs/Web/API/SVGAnimationElement/requiredExtensions) {{ReadOnlyInline}}
  - : Eine [`SVGStringList`](/de/docs/Web/API/SVGStringList), die das Attribut {{SVGAttr("requiredExtensions")}} des betreffenden Elements widerspiegelt.
- [`SVGAnimationElement.systemLanguage`](/de/docs/Web/API/SVGAnimationElement/systemLanguage) {{ReadOnlyInline}}
  - : Eine [`SVGStringList`](/de/docs/Web/API/SVGStringList), die das Attribut {{SVGAttr("systemLanguage")}} des betreffenden Elements widerspiegelt.
- [`SVGAnimationElement.targetElement`](/de/docs/Web/API/SVGAnimationElement/targetElement) {{ReadOnlyInline}}
  - : Ein [`SVGElement`](/de/docs/Web/API/SVGElement), das das animierte Element repräsentiert. Wenn kein Zielelement animiert wird, beispielsweise weil {{SVGAttr("href")}} ein unbekanntes Element angibt, wird `null` zurückgegeben.

## Instanzmethoden

_Dieses Interface erbt auch Methoden von seinem übergeordneten Interface [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGAnimationElement.getStartTime()`](/de/docs/Web/API/SVGAnimationElement/getStartTime)
  - : Gibt eine Gleitkommazahl zurück, die die Startzeit des aktuellen Intervalls dieses Animationselements in Sekunden angibt, sofern ein solches Intervall existiert – unabhängig davon, ob es bereits begonnen hat. Wenn kein aktuelles Intervall existiert, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `INVALID_STATE_ERR` ausgelöst.
- [`SVGAnimationElement.getCurrentTime()`](/de/docs/Web/API/SVGAnimationElement/getCurrentTime)
  - : Gibt eine Gleitkommazahl zurück, die die aktuelle Zeit in Sekunden relativ zum Zeitnullpunkt des betreffenden Zeitcontainers angibt.
- [`SVGAnimationElement.getSimpleDuration()`](/de/docs/Web/API/SVGAnimationElement/getSimpleDuration)
  - : Gibt eine Gleitkommazahl zurück, die die einfache Dauer dieser Animation in Sekunden angibt. Wenn die einfache Dauer nicht definiert ist, beispielsweise weil die Endzeit unbegrenzt ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NOT_SUPPORTED_ERR` ausgelöst.
- [`SVGAnimationElement.beginElement()`](/de/docs/Web/API/SVGAnimationElement/beginElement)
  - : Erzeugt einen Startzeitpunkt für die aktuelle Zeit. Der neue Zeitpunkt wird der Liste der Startzeitpunkte hinzugefügt. Das Verhalten dieser Methode entspricht `beginElementAt(0)`.
- [`SVGAnimationElement.beginElementAt()`](/de/docs/Web/API/SVGAnimationElement/beginElementAt)
  - : Erzeugt einen Startzeitpunkt für die aktuelle Zeit zuzüglich des angegebenen Offsets. Der neue Zeitpunkt wird der Liste der Startzeitpunkte hinzugefügt.
- [`SVGAnimationElement.endElement()`](/de/docs/Web/API/SVGAnimationElement/endElement)
  - : Erzeugt einen Endzeitpunkt für die aktuelle Zeit. Der neue Zeitpunkt wird der Liste der Endzeitpunkte hinzugefügt. Das Verhalten dieser Methode entspricht `endElementAt(0)`.
- [`SVGAnimationElement.endElementAt()`](/de/docs/Web/API/SVGAnimationElement/endElementAt)
  - : Erzeugt einen Endzeitpunkt für die aktuelle Zeit zuzüglich des angegebenen Offsets. Der neue Zeitpunkt wird der Liste der Endzeitpunkte hinzugefügt.

## Ereignisse

Sie können auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) reagieren oder der `on...`-Handler-Eigenschaft dieses Interfaces einen Event-Listener zuweisen.

- [`beginEvent`](/de/docs/Web/API/SVGAnimationElement/beginEvent_event)
  - : Wird ausgelöst, wenn die lokale Zeitleiste des Elements zu laufen beginnt.
- [`endEvent`](/de/docs/Web/API/SVGAnimationElement/endEvent_event)
  - : Wird ausgelöst, wenn das aktive Ende der Animation erreicht wird.
- [`repeatEvent`](/de/docs/Web/API/SVGAnimationElement/repeatEvent_event)
  - : Wird ausgelöst, wenn sich die lokale Zeitleiste des Elements wiederholt. Das Ereignis wird nach dem ersten Durchlauf bei jeder Wiederholung des Elements ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

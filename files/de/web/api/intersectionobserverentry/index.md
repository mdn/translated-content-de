---
title: IntersectionObserverEntry
slug: Web/API/IntersectionObserverEntry
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{APIRef("Intersection Observer API")}}

Das **`IntersectionObserverEntry`**-Interface der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) beschreibt die Schnittfläche zwischen dem Zielelement und seinem Wurzelcontainer zu einem bestimmten Übergangsmoment.

Instanzen von `IntersectionObserverEntry` werden an einen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Rückruf in dessen `entries`-Parameter übermittelt; andernfalls können diese Objekte nur durch Aufrufen von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords) erhalten werden.

## Instanzeigenschaften

- [`IntersectionObserverEntry.boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) {{ReadOnlyInline}}
  - : Gibt das Begrenzungsrechteck des Zielelements als [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) zurück. Die Grenzen werden wie in der Dokumentation zu [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) beschrieben berechnet.
- [`IntersectionObserverEntry.intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) {{ReadOnlyInline}}
  - : Gibt das Verhältnis des `intersectionRect` zum `boundingClientRect` zurück.
- [`IntersectionObserverEntry.intersectionRect`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRect) {{ReadOnlyInline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) zurück, das den sichtbaren Bereich des Ziels darstellt.
- [`IntersectionObserverEntry.isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das Zielelement mit der Wurzel des Schnittüberwachers schneidet. Wenn dies `true` ist, beschreibt das `IntersectionObserverEntry` einen Übergang in einen Schnittzustand; wenn es `false` ist, wissen Sie, dass der Übergang von schneidend zu nicht-schneidend erfolgt.
- [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) {{ReadOnlyInline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) für die Wurzel des Schnittüberwachers zurück.
- [`IntersectionObserverEntry.target`](/de/docs/Web/API/IntersectionObserverEntry/target) {{ReadOnlyInline}}
  - : Das [`Element`](/de/docs/Web/API/Element), dessen Schnitt mit der Wurzel sich geändert hat.
- [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der der Schnitt aufgezeichnet wurde, relativ zum [Ursprung der Zeit](/de/docs/Web/API/Performance/timeOrigin) des `IntersectionObserver`.

## Instanzmethoden

_Dieses Interface hat keine Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

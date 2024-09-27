---
title: IntersectionObserverEntry
slug: Web/API/IntersectionObserverEntry
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{APIRef("Intersection Observer API")}}

Das **`IntersectionObserverEntry`**-Interface der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) beschreibt die Überschneidung zwischen dem Zielelement und seinem Stammcontainer zu einem bestimmten Zeitpunkt des Übergangs.

Instanzen von `IntersectionObserverEntry` werden einem [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Callback im Parameter `entries` übermittelt; andernfalls können diese Objekte nur durch Aufruf von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords) erhalten werden.

## Instanz-Eigenschaften

- [`IntersectionObserverEntry.boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) {{ReadOnlyInline}}
  - : Gibt das Begrenzungsrechteck des Zielelements als [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) zurück. Die Grenzen werden berechnet, wie in der Dokumentation für [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) beschrieben.
- [`IntersectionObserverEntry.intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) {{ReadOnlyInline}}
  - : Gibt das Verhältnis des `intersectionRect` zum `boundingClientRect` zurück.
- [`IntersectionObserverEntry.intersectionRect`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRect) {{ReadOnlyInline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) zurück, das den sichtbaren Bereich des Ziels repräsentiert.
- [`IntersectionObserverEntry.isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn das Zielelement mit dem Stamm des Intersection Observers überschneidet. Wenn dies `true` ist, beschreibt das `IntersectionObserverEntry` einen Übergang in einen Zustand der Überschneidung; wenn es `false` ist, wissen Sie, dass der Übergang vom Überschneiden zum Nicht-Überschneiden erfolgt.
- [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) {{ReadOnlyInline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) für den Stamm des Intersection Observers zurück.
- [`IntersectionObserverEntry.target`](/de/docs/Web/API/IntersectionObserverEntry/target) {{ReadOnlyInline}}
  - : Das [`Element`](/de/docs/Web/API/Element), dessen Überschneidung mit dem Stamm sich geändert hat.
- [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, zu dem die Überschneidung aufgezeichnet wurde, relativ zum [time origin](/de/docs/Web/API/Performance/timeOrigin) des `IntersectionObserver`.

## Instanz-Methoden

_Dieses Interface hat keine Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

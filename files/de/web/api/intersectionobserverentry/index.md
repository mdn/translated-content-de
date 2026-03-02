---
title: IntersectionObserverEntry
slug: Web/API/IntersectionObserverEntry
l10n:
  sourceCommit: 05ed02a77bcfe1f7f22a74ece5757b44f21fdbc1
---

{{APIRef("Intersection Observer API")}}

Die **`IntersectionObserverEntry`**-Schnittstelle der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) beschreibt die Überschneidung zwischen dem Zielelement und seinem Wurzel-Container zu einem bestimmten Übergangsmoment.

Instanzen von `IntersectionObserverEntry` werden an einen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Callback im `entries`-Parameter geliefert; andernfalls können diese Objekte nur durch Aufrufen von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords) erhalten werden.

## Konstruktor

- [`IntersectionObserverEntry()`](/de/docs/Web/API/IntersectionObserverEntry/IntersectionObserverEntry) {{experimental_inline}}
  - : Erstellt ein neues `IntersectionObserverEntry`-Objekt.

## Instanz-Eigenschaften

- [`IntersectionObserverEntry.boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect) {{ReadOnlyInline}}
  - : Gibt das Begrenzungsrechteck des Zielelements als [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) zurück. Die Begrenzungen werden wie in der Dokumentation zu [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) beschrieben berechnet.
- [`IntersectionObserverEntry.intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) {{ReadOnlyInline}}
  - : Gibt das Verhältnis des `intersectionRect` zum `boundingClientRect` zurück.
- [`IntersectionObserverEntry.intersectionRect`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRect) {{ReadOnlyInline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) zurück, das den sichtbaren Bereich des Ziels darstellt.
- [`IntersectionObserverEntry.isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn sich das Zielelement mit der Wurzel des Intersection Observers überschneidet. Ist dieser Wert `true`, beschreibt das `IntersectionObserverEntry` einen Übergang in einen Schnittpunktzustand; ist er `false`, wissen Sie, dass der Übergang von einem sich überschneidenden zu einem nicht überschneidenden Zustand erfolgt.
- [`IntersectionObserverEntry.rootBounds`](/de/docs/Web/API/IntersectionObserverEntry/rootBounds) {{ReadOnlyInline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) für die Wurzel des Intersection Observers zurück.
- [`IntersectionObserverEntry.target`](/de/docs/Web/API/IntersectionObserverEntry/target) {{ReadOnlyInline}}
  - : Das [`Element`](/de/docs/Web/API/Element), dessen Schnittpunkt mit der Wurzel sich geändert hat.
- [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der der Schnittpunkt aufgezeichnet wurde, relativ zum [time origin](/de/docs/Web/API/Performance/timeOrigin) des `IntersectionObserver`.

## Instanz-Methoden

_Diese Schnittstelle hat keine Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

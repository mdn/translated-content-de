---
title: IntersectionObserverEntry
slug: Web/API/IntersectionObserverEntry
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{APIRef("Intersection Observer API")}}

Die **`IntersectionObserverEntry`**-Schnittstelle der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) beschreibt die Schnittmenge zwischen dem Zielelement und seinem Root-Container zu einem bestimmten Übergangszeitpunkt.

Instanzen von `IntersectionObserverEntry` werden an einen {{domxref("IntersectionObserver")}}-Callback in dessen `entries`-Parameter übergeben; andernfalls können diese Objekte nur durch Aufrufen von {{domxref("IntersectionObserver.takeRecords()")}} erhalten werden.

## Instanz-Eigenschaften

- {{domxref("IntersectionObserverEntry.boundingClientRect")}} {{ReadOnlyInline}}
  - : Gibt das Begrenzungsrechteck des Zielelements als {{domxref("DOMRectReadOnly")}} zurück. Die Grenzen werden wie in der Dokumentation für {{domxref("Element.getBoundingClientRect()")}} beschrieben berechnet.
- {{domxref("IntersectionObserverEntry.intersectionRatio")}} {{ReadOnlyInline}}
  - : Gibt das Verhältnis des `intersectionRect` zum `boundingClientRect` zurück.
- {{domxref("IntersectionObserverEntry.intersectionRect")}} {{ReadOnlyInline}}
  - : Gibt einen {{domxref("DOMRectReadOnly")}} zurück, der den sichtbaren Bereich des Ziels darstellt.
- {{domxref("IntersectionObserverEntry.isIntersecting")}} {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der `true` ist, wenn das Zielelement mit dem Root des Intersection Observers schneidet. Wenn dies `true` ist, beschreibt der `IntersectionObserverEntry` einen Übergang in einen Zustand der Schnittmenge; wenn es `false` ist, wissen Sie, dass der Übergang vom Schneiden zum Nicht-Schneiden erfolgt.
- {{domxref("IntersectionObserverEntry.rootBounds")}} {{ReadOnlyInline}}
  - : Gibt einen {{domxref("DOMRectReadOnly")}} für den Root des Intersection Observers zurück.
- {{domxref("IntersectionObserverEntry.target")}} {{ReadOnlyInline}}
  - : Das {{domxref("Element")}}, dessen Schnittmenge mit dem Root sich geändert hat.
- {{domxref("IntersectionObserverEntry.time")}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, der den Zeitpunkt angibt, zu dem die Schnittmenge aufgezeichnet wurde, relativ zum [time origin](/de/docs/Web/API/Performance/timeOrigin) des `IntersectionObserver`.

## Instanz-Methoden

_Diese Schnittstelle hat keine Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

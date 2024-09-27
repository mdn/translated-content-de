---
title: "PerformanceElementTiming: Eigenschaft loadTime"
short-title: loadTime
slug: Web/API/PerformanceElementTiming/loadTime
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`loadTime`** der Schnittstelle [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) gibt für Text immer `0` zurück. Für Bilder gibt sie die Zeit zurück, die die späteste zwischen dem Zeitpunkt ist, zu dem die Bildressource geladen wird, und dem Zeitpunkt, zu dem sie dem Element zugewiesen wird.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der `loadTime` des Elements. Für Text immer `0`.

## Beispiele

### Protokollierung von `loadTime`

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das Attribut [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Leistungsdatensätze vom Typ `"element"` zu erfassen. Das `buffered`-Flag wird verwendet, um auf Daten zuzugreifen, die vor der Erstellung des Observers vorhanden waren. Der Aufruf von `entry.loadTime` gibt die `loadTime` des Bildelements zurück.

```html
<img
  src="image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      console.log(entry.loadTime);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

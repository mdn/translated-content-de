---
title: "PerformanceElementTiming: loadTime-Eigenschaft"
short-title: loadTime
slug: Web/API/PerformanceElementTiming/loadTime
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`loadTime`**-Eigenschaft des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces gibt für Text immer `0` zurück. Bei Bildern gibt sie die Zeit zurück, die die späteste zwischen der Zeit ist, zu der die Bildressource geladen wird, und der Zeit, zu der sie dem Element angehängt wird.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit dem `loadTime` des Elements. Immer `0` für Text.

## Beispiele

### Protokollierung der `loadTime`

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element durch Hinzufügen des [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attributs beobachtet. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge des Typs `"element"` zu erhalten. Das `buffered`-Flag wird verwendet, um auf Daten zuzugreifen, die vor der Erstellung des Beobachters vorhanden waren. Der Aufruf von `entry.loadTime` gibt die `loadTime` des Bildelements zurück.

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

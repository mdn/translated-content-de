---
title: "PerformanceElementTiming: loadTime-Eigenschaft"
short-title: loadTime
slug: Web/API/PerformanceElementTiming/loadTime
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`loadTime`**-Eigenschaft (nur lesbar) der [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Schnittstelle gibt für Text immer `0` zurück. Für Bilder gibt sie die Zeit zurück, die am spätesten zwischen dem Zeitpunkt liegt, an dem die Bildressource geladen wird, und dem Zeitpunkt, an dem sie an das Element angehängt wird.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der `loadTime` des Elements. Für Text immer `0`.

## Beispiele

### `loadTime` protokollieren

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge des Typs `"element"` zu erhalten. Das `buffered`-Flag wird verwendet, um auf Daten zuzugreifen, die vor der Erstellung des Observers vorhanden waren. Der Aufruf von `entry.loadTime` gibt die `loadTime` des Bild-Elements zurück.

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

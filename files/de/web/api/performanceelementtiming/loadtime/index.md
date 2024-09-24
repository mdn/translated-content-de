---
title: "PerformanceElementTiming: loadTime-Eigenschaft"
short-title: loadTime
slug: Web/API/PerformanceElementTiming/loadTime
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`loadTime`**-Schreibgeschützte Eigenschaft des {{domxref("PerformanceElementTiming")}}-Interfaces liefert für Text immer `0` zurück. Für Bilder gibt sie die Zeit zurück, die den späteren Zeitpunkt zwischen dem Laden der Bildressource und dem Anfügen an das Element darstellt.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}} mit der `loadTime` des Elements. Immer `0` für Text.

## Beispiele

### `loadTime` protokollieren

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attribut hinzugefügt wird. Ein {{domxref("PerformanceObserver")}} wird registriert, um alle Performance-Einträge vom Typ `"element"` zu erhalten. Das `buffered`-Flag wird verwendet, um auf Daten zuzugreifen, die vor der Erstellung des Beobachters vorhanden waren. Das Aufrufen von `entry.loadTime` gibt die loadTime des Bildelements zurück.

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

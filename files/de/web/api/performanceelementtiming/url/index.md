---
title: "PerformanceElementTiming: url-Eigenschaft"
short-title: url
slug: Web/API/PerformanceElementTiming/url
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`url`**-Eigenschaft des schreibgeschützten [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces gibt die ursprüngliche URL der Ressourcenanforderung zurück, wenn das Element ein Bild ist.

## Wert

Ein String, der die ursprüngliche URL der Ressourcenanforderung für Bilder oder `0` für Text darstellt.

## Beispiele

### `url` protokollieren

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attribut hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Leistungs-Einträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten zuzugreifen, die vor der Erstellung des Beobachters entstanden sind. Der Aufruf von `entry.url` gibt `https://example.com/image.jpg` zurück.

```html
<img
  src="https://example.com/image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      console.log(entry.url);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

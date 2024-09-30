---
title: "PerformanceElementTiming: url-Eigenschaft"
short-title: url
slug: Web/API/PerformanceElementTiming/url
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`url`** des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces gibt die ursprüngliche URL der Ressourcenanforderung zurück, wenn das Element ein Bild ist.

## Wert

Ein String, der die ursprüngliche URL der Ressourcenanforderung für Bilder oder `0` für Text darstellt.

## Beispiele

### `url` protokollieren

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element durch Hinzufügen des [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attributs beobachtet. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge des Typs `"element"` zu erfassen, und das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Observers zuzugreifen. Der Aufruf von `entry.url` liefert `https://example.com/image.jpg`.

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

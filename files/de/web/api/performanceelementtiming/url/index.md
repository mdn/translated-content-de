---
title: "PerformanceElementTiming: url-Eigenschaft"
short-title: url
slug: Web/API/PerformanceElementTiming/url
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`url`**-Eigenschaft des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces, die nur lesbar ist, gibt die anfängliche URL der Ressourcenanforderung zurück, wenn das Element ein Bild ist.

## Wert

Ein String, der die anfängliche URL der Ressourcenanforderung für Bilder darstellt oder `0` für Text.

## Beispiele

### Protokollierung von `url`

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten von vor der Erstellung des Observers zuzugreifen. Der Aufruf von `entry.url` gibt `https://example.com/image.jpg` zurück.

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

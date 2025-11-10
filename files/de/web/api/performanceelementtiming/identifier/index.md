---
title: "PerformanceElementTiming: identifier-Eigenschaft"
short-title: identifier
slug: Web/API/PerformanceElementTiming/identifier
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte **`identifier`**-Eigenschaft des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces gibt den Wert des [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attributes am Element zurück.

## Wert

Ein String.

## Beispiele

### Verwendung von `identifier`

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Observers zuzugreifen. Der Wert von [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) ist `big-image`. Der Aufruf von `entry.identifier` gibt daher den String `big-image` zurück.

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
      console.log(entry.naturalWidth);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

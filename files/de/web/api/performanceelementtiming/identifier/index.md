---
title: "PerformanceElementTiming: identifier-Eigenschaft"
short-title: identifier
slug: Web/API/PerformanceElementTiming/identifier
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`identifier`** des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces gibt den Wert des [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attributs des Elements zurück.

## Wert

Ein String.

## Beispiele

### Verwendung von `identifier`

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attribut hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Leistungsdaten vom Typ `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten zuzugreifen, die vor der Erstellung des Observers vorhanden sind. Der Wert von [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) ist `big-image`. Der Aufruf von `entry.identifier` gibt daher den String `big-image` zurück.

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

---
title: "PerformanceElementTiming: identifier-Eigenschaft"
short-title: identifier
slug: Web/API/PerformanceElementTiming/identifier
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`identifier`**-Schreibgeschützte Eigenschaft der {{domxref("PerformanceElementTiming")}}-Schnittstelle gibt den Wert des [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attributs des Elements zurück.

## Wert

Ein String.

## Beispiele

### Verwendung von `identifier`

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element durch Hinzufügen des [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attributs beobachtet. Ein {{domxref("PerformanceObserver")}} wird registriert, um alle Performance-Einträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Observers zuzugreifen. Der Wert von [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) ist `big-image`. Das Aufrufen von `entry.identifier` gibt daher den String `big-image` zurück.

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

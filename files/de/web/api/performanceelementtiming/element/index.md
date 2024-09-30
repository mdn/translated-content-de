---
title: "PerformanceElementTiming: element Eigenschaft"
short-title: element
slug: Web/API/PerformanceElementTiming/element
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`element`**-Eigenschaft nur lesbar der [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Schnittstelle gibt ein [`Element`](/de/docs/Web/API/Element) zurück, das ein Zeiger auf das beobachtete Element ist.

## Wert

Ein [`Element`](/de/docs/Web/API/Element), oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn das Element ein [shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Element ist.

## Beispiele

### Protokollieren des beobachteten Elements

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element durch Hinzufügen des [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attributs beobachtet. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge vom Typ `"element"` zu erhalten. Das `buffered`-Flag wird verwendet, um auf Daten zuzugreifen, die vor der Beobachtererstellung vorhanden sind. Das beobachtete DOM-Element wird in die Konsole protokolliert.

```html
<img src="image.jpg" alt="a nice image" elementtiming="big-image" />
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      console.log(entry.element);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

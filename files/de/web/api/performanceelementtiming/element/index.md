---
title: "PerformanceElementTiming: Element-Eigenschaft"
short-title: Element
slug: Web/API/PerformanceElementTiming/element
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`element`** schreibgeschützte Eigenschaft des {{domxref("PerformanceElementTiming")}}-Interfaces liefert ein {{domxref("Element")}}, welches ein Zeiger auf das beobachtete Element ist.

## Wert

Ein {{domxref("Element")}}, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn das Element ein [Schatten-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Element ist.

## Beispiele

### Protokollieren des beobachteten Elements

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element durch das Hinzufügen des [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attributs beobachtet. Ein {{domxref("PerformanceObserver")}} wird registriert, um alle Leistungseinträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Observers zuzugreifen. Das beobachtete DOM-Element wird in der Konsole protokolliert.

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

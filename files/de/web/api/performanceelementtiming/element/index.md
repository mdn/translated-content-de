---
title: "PerformanceElementTiming: element-Eigenschaft"
short-title: element
slug: Web/API/PerformanceElementTiming/element
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte **`element`**-Eigenschaft des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces gibt ein [`Element`](/de/docs/Web/API/Element) zurück, welches ein Zeiger auf das beobachtete Element ist.

## Wert

Ein [`Element`](/de/docs/Web/API/Element) oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn es sich um ein [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Element handelt.

## Beispiele

### Protokollierung des beobachteten Elements

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element durch Hinzufügen des [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attributs beobachtet. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Leistungseinträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Beobachters zuzugreifen. Das beobachtete DOM-Element wird in die Konsole protokolliert.

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

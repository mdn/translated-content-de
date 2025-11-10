---
title: "PerformanceElementTiming: id-Eigenschaft"
short-title: id
slug: Web/API/PerformanceElementTiming/id
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte **`id`**-Eigenschaft der [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Schnittstelle gibt die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des zugehörigen Elements zurück.

## Wert

Ein String.

## Beispiele

### Verwendung von `id`

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Leistungsdateneinträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten von vor der Erstellung des Observers zuzugreifen. Es wird `myImage` in die Konsole protokollieren, was der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Bild-Elements entspricht.

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
      console.log(entry.id);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

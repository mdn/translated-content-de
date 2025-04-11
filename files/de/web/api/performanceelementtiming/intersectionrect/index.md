---
title: "PerformanceElementTiming: `intersectionRect`-Eigenschaft"
short-title: intersectionRect
slug: Web/API/PerformanceElementTiming/intersectionRect
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`intersectionRect`**-Eigenschaft des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces gibt das Rechteck des Elements innerhalb des Viewports zurück.

## Wert

Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), welches das Rechteck des Elements innerhalb des Viewports darstellt.

Bei Anzeige von Bildern ist dies das Anzeigerechteck des Bildes innerhalb des Viewports. Für Text ist dies das Anzeigerechteck des Knotens im Viewport. Dies ist das kleinste Rechteck, das die Vereinigung aller Textknoten enthält, die zu dem Element gehören.

## Beispiele

### `intersectionRect` protokollieren

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Leistungsdaten vom Typ `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Observers zuzugreifen. Der Aufruf von `entry.intersectionRect` gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt mit dem Anzeigerechteck des Bildes zurück.

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
      console.log(entry.intersectionRect);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

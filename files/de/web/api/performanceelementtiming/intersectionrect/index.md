---
title: "PerformanceElementTiming: Eigenschaft intersectionRect"
short-title: intersectionRect
slug: Web/API/PerformanceElementTiming/intersectionRect
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`intersectionRect`** Eigenschaft der {{domxref("PerformanceElementTiming")}} Schnittstelle gibt das Rechteck des Elements innerhalb des Viewports zurück.

## Wert

Ein {{domxref("DOMRectReadOnly")}}, das das Rechteck des Elements innerhalb des Viewports darstellt.

Bei Anzeigebildern ist dies das Anzeigerechteck des Bildes innerhalb des Viewports. Bei Text ist dies das Anzeigerechteck des Knotens im Viewport. Dies ist das kleinste Rechteck, das die Vereinigung aller Textknoten enthält, die zu dem Element gehören.

## Beispiele

### Protokollierung von `intersectionRect`

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) Attribut hinzugefügt wird. Ein {{domxref("PerformanceObserver")}} wird registriert, um alle Performance-Einträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Beobachters zuzugreifen. Der Aufruf von `entry.intersectionRect` gibt ein {{domxref("DOMRectReadOnly")}}-Objekt mit dem Anzeigerechteck des Bildes zurück.

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

## Kompatibilität der Browser

{{Compat}}
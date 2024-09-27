---
title: "PerformanceElementTiming: Eigenschaft naturalWidth"
short-title: naturalWidth
slug: Web/API/PerformanceElementTiming/naturalWidth
l10n:
  sourceCommit: ec83af3d3b8879673fcdc49c2ed81b0ed73397fa
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`naturalWidth`** schreibgeschützte Eigenschaft des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces gibt die intrinsische Breite des Bildelements zurück.

## Wert

Eine nicht signierte 32-Bit-Ganzzahl (unsigned long), die die intrinsische Breite des Bildes darstellt, wenn sie auf ein Bild angewendet wird, `0` für Text.

## Beispiele

### Protokollierung von `naturalWidth`

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attribut hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten zuzugreifen, die vor der Erstellung des Observers vorhanden waren. Die Bilddatei hat eine Breite von 1000px und eine Höhe von 750px. Der Aufruf von `entry.naturalWidth` gibt `1000` zurück, was die intrinsische Breite in Pixeln darstellt.

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

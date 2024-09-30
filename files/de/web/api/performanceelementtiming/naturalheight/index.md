---
title: "PerformanceElementTiming: Eigenschaft naturalHeight"
short-title: naturalHeight
slug: Web/API/PerformanceElementTiming/naturalHeight
l10n:
  sourceCommit: ec83af3d3b8879673fcdc49c2ed81b0ed73397fa
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`naturalHeight`**-Eigenschaft des schreibgeschützten [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) Interfaces gibt die intrinsische Höhe des Bild-Elements zurück.

## Wert

Ein vorzeichenloser 32-Bit-Ganzzahlwert (unsigned long), der die intrinsische Höhe des Bildes darstellt, wenn es auf ein Bild angewendet wird, oder `0` für Text.

## Beispiele

### Protokollierung von `naturalHeight`

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attribut hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Beobachters zuzugreifen. Die Bilddatei hat eine Breite von 1000px und eine Höhe von 750px. Der Aufruf von `entry.naturalHeight` gibt `750` zurück, was die intrinsische Höhe in Pixel darstellt.

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
      console.log(entry.naturalHeight);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

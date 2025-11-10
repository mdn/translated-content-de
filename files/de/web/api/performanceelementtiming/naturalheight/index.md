---
title: "PerformanceElementTiming: naturalHeight-Eigenschaft"
short-title: naturalHeight
slug: Web/API/PerformanceElementTiming/naturalHeight
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`naturalHeight`** der Schnittstelle [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) gibt die intrinsische Höhe des Bildelements zurück.

## Wert

Ein 32-Bit-Integer ohne Vorzeichen (unsigned long), der die intrinsische Höhe des Bildes darstellt, falls dieses auf ein Bild angewendet wird, und `0` für Text.

## Beispiele

### Protokollieren von `naturalHeight`

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das Attribut [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten von vor der Erstellung des Beobachters zuzugreifen. Die Bilddatei hat eine Breite von 1000px und eine Höhe von 750px. Der Aufruf von `entry.naturalHeight` gibt `750` zurück, was die intrinsische Höhe in Pixeln ist.

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

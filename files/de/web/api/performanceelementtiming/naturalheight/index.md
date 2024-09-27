---
title: "PerformanceElementTiming: naturalHeight-Eigenschaft"
short-title: naturalHeight
slug: Web/API/PerformanceElementTiming/naturalHeight
l10n:
  sourceCommit: ec83af3d3b8879673fcdc49c2ed81b0ed73397fa
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`naturalHeight`** schreibgeschützte Eigenschaft der [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Schnittstelle gibt die intrinsische Höhe des Bild-Elements zurück.

## Wert

Ein vorzeichenloser 32-Bit-Integer (unsigned long), der die intrinsische Höhe des Bildes ist, wenn es auf ein Bild angewendet wird, `0` für Text.

## Beispiele

### `naturalHeight` protokollieren

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element durch Hinzufügen des [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attributs beobachtet. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten von vor der Erstellung des Observers zuzugreifen. Die Bilddatei hat eine Breite von 1000px und eine Höhe von 750px. Der Aufruf von `entry.naturalHeight` gibt `750` zurück, was die intrinsische Höhe in Pixeln ist.

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

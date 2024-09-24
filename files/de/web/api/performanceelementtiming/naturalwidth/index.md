---
title: "PerformanceElementTiming: Eigenschaft naturalWidth"
short-title: naturalWidth
slug: Web/API/PerformanceElementTiming/naturalWidth
l10n:
  sourceCommit: ec83af3d3b8879673fcdc49c2ed81b0ed73397fa
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`naturalWidth`** Eigenschaft der Schnittstelle {{domxref("PerformanceElementTiming")}} gibt die intrinsische Breite des Bild-Elements zurück.

## Wert

Ein unsignierter 32-Bit-Integer (unsigned long), der die intrinsische Breite des Bildes ist, wenn es auf ein Bild angewendet wird, `0` für Text.

## Beispiele

### `naturalWidth` protokollieren

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attribut hinzugefügt wird. Ein {{domxref("PerformanceObserver")}} wird registriert, um alle Performance-Einträge vom Typ `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten von vor der Erstellung des Beobachters zuzugreifen. Die Bilddatei hat eine Breite von 1000px und eine Höhe von 750px. Der Aufruf von `entry.naturalWidth` gibt `1000` zurück, was die intrinsische Breite in Pixeln ist.

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

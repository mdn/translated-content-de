---
title: "PerformanceElementTiming: naturalWidth-Eigenschaft"
short-title: naturalWidth
slug: Web/API/PerformanceElementTiming/naturalWidth
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte **`naturalWidth`**-Eigenschaft des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces gibt die intrinsische Breite des Bildelements zurück.

## Wert

Ein vorzeichenloser 32-Bit-Integer (unsigned long), der die intrinsische Breite des Bildes angibt, wenn dies auf ein Bild angewendet wird, `0` für Text.

## Beispiele

### Protokollierung von `naturalWidth`

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten aus der Zeit vor der Erstellung des Observers zuzugreifen. Die Bilddatei hat eine Breite von 1000px und eine Höhe von 750px. Der Aufruf von `entry.naturalWidth` gibt `1000` zurück, was die intrinsische Breite in Pixeln ist.

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

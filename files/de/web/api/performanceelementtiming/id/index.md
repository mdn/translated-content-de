---
title: "PerformanceElementTiming: id-Eigenschaft"
short-title: id
slug: Web/API/PerformanceElementTiming/id
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`id`**-Schreibgeschützte Eigenschaft des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces gibt die [`id`](/de/docs/Web/HTML/Global_attributes/id) des zugehörigen Elements zurück.

## Wert

Ein String.

## Beispiele

### Verwendung von `id`

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attribut hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge vom Typ `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten zuzugreifen, die vor der Erstellung des Observers vorhanden waren. Es wird `myImage` in die Konsole ausgegeben, welches die [`id`](/de/docs/Web/HTML/Global_attributes/id) des Bild-Elements ist.

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

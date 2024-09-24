---
title: "PerformanceElementTiming: Eigenschaft id"
short-title: id
slug: Web/API/PerformanceElementTiming/id
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte **`id`**-Eigenschaft der {{domxref("PerformanceElementTiming")}}-Schnittstelle gibt die [`id`](/de/docs/Web/HTML/Global_attributes#id) des zugehörigen Elements zurück.

## Wert

Ein String.

## Beispiele

### Verwendung von `id`

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element durch Hinzufügen des [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) Attributs beobachtet. Ein {{domxref("PerformanceObserver")}} wird registriert, um alle Performance-Einträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um Daten vor der Erstellung des Observers zuzugreifen. Es wird `myImage` in die Konsole protokolliert, da dies die [`id`](/de/docs/Web/HTML/Global_attributes#id) des Bild-Elements ist.

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

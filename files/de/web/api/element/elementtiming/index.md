---
title: "Element: Eigenschaft elementTiming"
short-title: elementTiming
slug: Web/API/Element/elementTiming
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die Eigenschaft **`elementTiming`** der Schnittstelle [`Element`](/de/docs/Web/API/Element) kennzeichnet Elemente, die über die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API beobachtet werden sollen.

Die Eigenschaft `elementTiming` spiegelt den Wert des Attributs [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) wider.

## Wert

Ein String.

## Beispiele

### Wert von `elementTiming` protokollieren

In diesem Beispiel wird durch Hinzufügen des Attributs [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) zum Element {{HTMLElement("img")}} festgelegt, dass das Bild beobachtet werden soll.

```html
<img
  src="image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

Sie können den String-Wert des HTML-Attributs `elementtiming` abrufen, indem Sie `el.elementTiming` aufrufen.

```js
const el = document.getElementById("myImage");
console.log(el.elementTiming); // "big-image"
```

Ein ausführlicheres Beispiel zur Verwendung der Element Timing API finden Sie unter [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)
- HTML-Attribut [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)

---
title: "Element: elementTiming-Eigenschaft"
short-title: elementTiming
slug: Web/API/Element/elementTiming
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die **`elementTiming`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces identifiziert Elemente zur Beobachtung in der [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Die `elementTiming`-Eigenschaft spiegelt den Wert des [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attributs wider.

## Wert

Ein String.

## Beispiele

### Den Wert von `elementTiming` protokollieren

In diesem Beispiel bewirkt das Hinzufügen des [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attributs zum {{HTMLElement("img")}}-Element, dass das Bild beobachtet wird.

```html
<img
  src="image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

Sie können den Stringwert des `elementtiming`-HTML-Attributs abrufen, indem Sie `el.elementTiming` aufrufen.

```js
const el = document.getElementById("myImage");
console.log(el.elementTiming); // "big-image"
```

Für ein umfassenderes Beispiel, wie Sie die Element Timing API verwenden können, siehe [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)
- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) HTML-Attribut

---
title: "Element: elementTiming-Eigenschaft"
short-title: elementTiming
slug: Web/API/Element/elementTiming
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die **`elementTiming`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces kennzeichnet Elemente zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API. Die `elementTiming`-Eigenschaft spiegelt den Wert des [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attributs wider.

## Wert

Ein String.

## Beispiele

### Den Wert von `elementTiming` protokollieren

In diesem Beispiel setzt das Hinzufügen des [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attributs zum {{HTMLElement("img")}}-Element das Bild zur Beobachtung.

```html
<img
  src="image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

Sie können den String-Wert des `elementtiming` HTML-Attributs erhalten, indem Sie `el.elementTiming` aufrufen.

```js
const el = document.getElementById("myImage");
console.log(el.elementTiming); // "big-image"
```

Für ein vollständigeres Beispiel zur Nutzung der Element Timing API, siehe [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)
- [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) HTML-Attribut

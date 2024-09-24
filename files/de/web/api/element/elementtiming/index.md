---
title: "Element: elementTiming-Eigenschaft"
short-title: elementTiming
slug: Web/API/Element/elementTiming
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die **`elementTiming`**-Eigenschaft der {{domxref("Element")}}-Schnittstelle identifiziert Elemente zur Beobachtung in der {{domxref("PerformanceElementTiming")}}-API. Die `elementTiming`-Eigenschaft spiegelt den Wert des [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attributs wider.

## Wert

Ein String.

## Beispiele

### Protokollierung des Werts von `elementTiming`

In diesem Beispiel legt das Hinzufügen des [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attributs zum {{HTMLElement("img")}}-Element fest, dass das Bild beobachtet werden soll.

```html
<img
  src="image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

Sie können den String-Wert des `elementtiming`-HTML-Attributs erhalten, indem Sie `el.elementTiming` aufrufen.

```js
const el = document.getElementById("myImage");
console.log(el.elementTiming); // "big-image"
```

Für ein vollständigeres Beispiel zur Verwendung der Element Timing API, siehe {{domxref("PerformanceElementTiming")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("PerformanceElementTiming")}}
- [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) HTML-Attribut

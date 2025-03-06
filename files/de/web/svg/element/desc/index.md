---
title: <desc>
slug: Web/SVG/Element/desc
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{SVGRef}}

Das **`<desc>`** [SVG](/de/docs/Web/SVG)-Element bietet eine zugängliche, lange Textbeschreibung eines beliebigen SVG-[Container-Elements](/de/docs/Web/SVG/Element#container_elements) oder [Grafik-Elements](/de/docs/Web/SVG/Element#graphics_elements).

Text in einem `<desc>`-Element wird nicht als Teil der Grafik dargestellt. Wenn das Element durch sichtbaren Text beschrieben werden kann, ist es möglich, diesen Text mit dem Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) zu referenzieren. Wenn `aria-describedby` verwendet wird, hat es Vorrang vor `<desc>`.

Der versteckte Text eines `<desc>`-Elements kann auch mit dem sichtbaren Text anderer Elemente unter Verwendung mehrerer IDs in einem `aria-describedby`-Wert verkettet werden. In diesem Fall muss das `<desc>`-Element eine ID zur Referenzierung bereitstellen.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <circle cx="5" cy="5" r="4">
    <desc>
      I'm a circle and that description is here to demonstrate how I can be
      described, but is it really necessary to describe a simple circle like me?
    </desc>
  </circle>
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attribute

Dieses Element enthält nur globale Attribute.

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("title")}}

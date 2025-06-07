---
title: <desc>
slug: Web/SVG/Reference/Element/desc
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<desc>`** [SVG](/de/docs/Web/SVG) Element bietet eine zugängliche, ausführliche Beschreibung in Textform für jedes SVG [Container-Element](/de/docs/Web/SVG/Reference/Element#container_elements) oder [Grafik-Element](/de/docs/Web/SVG/Reference/Element#graphics_elements).

Text in einem `<desc>`-Element wird nicht als Teil der Grafik gerendert. Wenn das Element durch sichtbaren Text beschrieben werden kann, ist es möglich, diesen Text mit dem [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Attribut zu referenzieren. Wenn `aria-describedby` verwendet wird, hat es Vorrang vor `<desc>`.

Der versteckte Text eines `<desc>`-Elements kann auch mit dem sichtbaren Text anderer Elemente durch die Verwendung mehrerer IDs in einem `aria-describedby` Wert verknüpft werden. In diesem Fall muss das `<desc>`-Element eine ID zur Referenzierung bereitstellen.

## Verwendungskontext

{{svginfo}}

## Attribute

Dieses Element enthält nur globale Attribute.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGDescElement`](/de/docs/Web/API/SVGDescElement) Schnittstelle.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("title")}}

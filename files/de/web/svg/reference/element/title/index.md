---
title: <title> — das SVG-Zugänglichkeitsnamens-Element
slug: Web/SVG/Reference/Element/title
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<title>`** [SVG](/de/docs/Web/SVG) Element bietet eine zugängliche, kurze Textbeschreibung für jedes SVG [Containerelement](/de/docs/Web/SVG/Reference/Element#container_elements) oder [Grafikelement](/de/docs/Web/SVG/Reference/Element#graphics_elements).

Text in einem `<title>` Element wird nicht als Teil der Grafik gerendert, aber Browser zeigen ihn normalerweise als Tooltip an. Wenn ein Element durch sichtbaren Text beschrieben werden kann, wird empfohlen, diesen Text mit einem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut zu referenzieren, anstatt das `<title>` Element zu verwenden.

> [!NOTE]
> Zur Rückwärtskompatibilität mit SVG 1.1 sollten `<title>` Elemente das erste Kindelement ihres Elternteils sein.

## Verwendungskontext

{{svginfo}}

## Attribute

Dieses Element beinhaltet nur globale Attribute.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGTitleElement`](/de/docs/Web/API/SVGTitleElement) Schnittstelle.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <circle cx="5" cy="5" r="4">
    <title>I'm a circle</title>
  </circle>

  <rect x="11" y="1" width="8" height="8">
    <title>I'm a square</title>
  </rect>
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("desc")}}

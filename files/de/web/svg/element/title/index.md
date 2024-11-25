---
title: <title> — das SVG-Element für zugängliche Namen
slug: Web/SVG/Element/title
l10n:
  sourceCommit: da99ca19ae62059f81dbee3f7b4919de784f3510
---

{{SVGRef}}

Das **`<title>`** [SVG](/de/docs/Web/SVG) Element bietet eine zugängliche, kurztextliche Beschreibung eines SVG-[Container-Elements](/de/docs/Web/SVG/Element#container_elements) oder eines [Grafik-Elements](/de/docs/Web/SVG/Element#graphics_elements).

Text in einem `<title>` Element wird nicht als Teil der Grafik dargestellt, aber Browser zeigen ihn normalerweise als Tooltip an. Wenn ein Element durch sichtbaren Text beschrieben werden kann, wird empfohlen, diesen Text mit einem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) Attribut zu referenzieren, anstatt das `<title>` Element zu verwenden.

> [!NOTE]
> Aus Gründen der Abwärtskompatibilität mit SVG 1.1 sollten `<title>` Elemente das erste Kindelement ihres übergeordneten Elements sein.

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

## Attribute

Dieses Element enthält nur globale Attribute.

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("desc")}}

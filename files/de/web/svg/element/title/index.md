---
title: <title> — das SVG-Element für zugängliche Namen
slug: Web/SVG/Element/title
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

Das **`<title>`**-Element bietet eine zugängliche, kurze Textbeschreibung für ein beliebiges SVG-[Container-Element](/de/docs/Web/SVG/Element#container_elements) oder [Grafikelement](/de/docs/Web/SVG/Element#graphics_elements).

Der Text in einem `<title>`-Element wird nicht als Teil der Grafik gerendert, aber Browser zeigen ihn normalerweise als Tooltip an. Wenn ein Element durch sichtbaren Text beschrieben werden kann, wird empfohlen, diesen Text mit einem [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Attribut zu referenzieren, anstatt das `<title>`-Element zu verwenden.

> [!NOTE]
> Für die Abwärtskompatibilität mit SVG 1.1 sollten `<title>`-Elemente das erste Kindelement ihres Elternteils sein.

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

Dieses Element beinhaltet nur globale Attribute.

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("desc")}}

---
title: <feDropShadow>
slug: Web/SVG/Reference/Element/feDropShadow
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

Das **`<feDropShadow>`** [SVG](/de/docs/Web/SVG) Filter-Primitive erzeugt einen Schlagschatten des Eingabebildes. Es kann nur innerhalb eines {{SVGElement('filter')}} Elements verwendet werden.

> [!NOTE]
> Die Farbe und Deckkraft des Schattens können durch die Präsentationsattribute {{SVGAttr('flood-color')}} und {{SVGAttr('flood-opacity')}} geändert werden.

Wie andere Filter-Primitives verarbeitet es Farbkomponenten standardmäßig im `linearRGB` {{Glossary("color_space", "Farbraum")}}. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um stattdessen `sRGB` zu verwenden.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("dx")}}: Dieses Attribut definiert den x-Versatz des Schattens.
  _Werttyp_: [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number); _Standardwert_: `2`; _Animierbar_: **ja**
- {{SVGAttr("dy")}}: Dieses Attribut definiert den y-Versatz des Schattens.
  _Werttyp_: [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number); _Standardwert_: `2`; _Animierbar_: **ja**
- {{SVGAttr("in")}}
- {{SVGAttr("stdDeviation")}}: Dieses Attribut definiert die Standardabweichung für den Unschärfevorgang im Schlagschatten.
  _Werttyp_: [**\<number-optional-number>**](/de/docs/Web/SVG/Guides/Content_type#number-optional-number); _Standardwert_: `2`; _Animierbar_: **ja**
- [Filter-Primitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filter_primitive_attributes_presentation_attributes): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement)-Schnittstelle.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow">
      <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
    </filter>
    <filter id="shadow2">
      <feDropShadow dx="0" dy="0" stdDeviation="0.5" flood-color="cyan" />
    </filter>
    <filter id="shadow3">
      <feDropShadow
        dx="-0.8"
        dy="-0.8"
        stdDeviation="0"
        flood-color="pink"
        flood-opacity="0.5" />
    </filter>
  </defs>

  <circle cx="5" cy="50%" r="4" fill="pink" filter="url(#shadow)" />
  <circle cx="15" cy="50%" r="4" fill="pink" filter="url(#shadow2)" />
  <circle cx="25" cy="50%" r="4" fill="pink" filter="url(#shadow3)" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG Filter-Primitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filters_attributes) einschließlich {{SVGAttr('height')}}, {{SVGAttr('in')}}, {{SVGAttr('result')}}, {{SVGAttr('x')}}, {{SVGAttr('y')}}, und {{SVGAttr('width')}}.
- [SVG Präsentationsattribute](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes), einschließlich {{SVGAttr('flood-color')}}, und {{SVGAttr('flood-opacity')}}.

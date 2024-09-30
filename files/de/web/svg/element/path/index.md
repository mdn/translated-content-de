---
title: <path>
slug: Web/SVG/Element/path
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

Das **`<path>`**-Element [SVG](/de/docs/Web/SVG) ist das generische Element zur Definition einer Form. Alle grundlegenden Formen können mit einem `path`-Element erstellt werden.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z" />
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## Attribute

- {{SVGAttr("d")}}
  - : Dieses Attribut definiert die Form des Pfades.
    _Werttyp_: **\<string>** ; _Standardwert_: `''`; _Animierbar_: **ja**
- {{SVGAttr("pathLength")}}
  - : Dieses Attribut erlaubt es Autoren, die Gesamtlänge des Pfades in Benutzereinheiten anzugeben.
    _Werttyp_: [**\<number>**](/de/docs/Web/SVG/Content_type#number) ; _Standardwert_: _none_; _Animierbar_: **ja**

## Nutzungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Grundformen: {{ SVGElement('circle') }}, {{ SVGElement('ellipse') }}, {{ SVGElement('line') }}, {{ SVGElement('polygon') }}, {{ SVGElement('polyline') }}, {{ SVGElement('rect') }}
- [Das MDN SVG "Erste Schritte"-Tutorial: Path](/de/docs/Web/SVG/Tutorial/Paths)

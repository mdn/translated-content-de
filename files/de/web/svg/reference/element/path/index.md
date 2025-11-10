---
title: <path>
slug: Web/SVG/Reference/Element/path
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<path>`** [SVG](/de/docs/Web/SVG)-Element ist das generische Element zur Definition einer Form. Alle grundlegenden Formen können mit einem path-Element erstellt werden.

## Nutzungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("d")}}
  - : Dieses Attribut definiert die Form des Pfades.
    _Wertetyp_: **\<string>**; _Standardwert_: `''`; _Animierbar_: **ja**
- {{SVGAttr("pathLength")}}
  - : Dieses Attribut ermöglicht es Autoren, die Gesamtlänge des Pfades in Benutzereinheiten anzugeben.
    _Wertetyp_: [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number); _Standardwert_: _none_; _Animierbar_: **ja**

## DOM-Schnittstelle

Dieses Element implementiert die Schnittstelle [`SVGPathElement`](/de/docs/Web/API/SVGPathElement).

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Grundformen: {{ SVGElement('circle') }}, {{ SVGElement('ellipse') }}, {{ SVGElement('line') }}, {{ SVGElement('polygon') }}, {{ SVGElement('polyline') }}, {{ SVGElement('rect') }}
- [Das MDN SVG "Erste Schritte" Tutorial: Pfad](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)

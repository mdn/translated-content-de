---
title: <feImage>
slug: Web/SVG/Reference/Element/feImage
l10n:
  sourceCommit: 9bb1d5338fa4f9074a18a14c34396f6aa3d53532
---

Das **`<feImage>`** [SVG](/de/docs/Web/SVG) Filter-Primitive ruft Bilddaten aus einer externen Quelle ab und stellt die Pixel-Daten als Ausgabe bereit (das bedeutet, wenn die externe Quelle ein SVG-Bild ist, wird es gerastert).

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("crossorigin")}}
- {{SVGAttr("fetchpriority")}} {{experimental_inline}}
  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen eines externen Bildes.
    Erlaubte Werte:
    - `high`
      - : Ruft das externe Bild mit hoher Priorität im Vergleich zu anderen externen Ressourcen ab.
    - `low`
      - : Ruft das externe Bild mit niedriger Priorität im Vergleich zu anderen externen Ressourcen ab.
    - `auto`
      - : Setzt keine Präferenz für die Abrufpriorität.
        Wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt wird.
        Dies ist der Standardwert.
- {{SVGAttr("preserveAspectRatio")}}
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement) Schnittstelle.

## Beispiel

### SVG

```html
<svg
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="200"
  height="200">
  <defs>
    <filter id="image">
      <feImage href="mdn_logo_only_color.png" />
    </filter>
  </defs>

  <rect x="10%" y="10%" width="80%" height="80%" style="filter:url(#image);" />
</svg>
```

### Ergebnis

{{EmbedLiveSample("Example", 200, 210)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG Filter-Primitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filters_attributes)
- {{SVGAttr("flood-color")}} Attribut
- {{SVGAttr("flood-opacity")}} Attribut
- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- {{SVGAttr("fetchpriority")}} Attribut
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)

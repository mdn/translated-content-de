---
title: <feTile>
slug: Web/SVG/Element/feTile
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

{{SVGRef}}

Das **`<feTile>`** [SVG](/de/docs/Web/SVG) Filter-Primitive ermöglicht es, ein Zielrechteck mit einem wiederholten, gekachelten Muster eines Eingabebildes zu füllen. Der Effekt ist ähnlich dem eines {{SVGElement("pattern")}}.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}

## DOM-Schnittstelle

Dieses Element implementiert die {{domxref("SVGFETileElement")}} Schnittstelle.

## Beispiel

### SVG

```html
<svg
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>
    Kacheln eines MDN-Logos mit dem Kopf des Mozilla-Maskottchens, das auf dem Logo ist
  </title>
  <defs>
    <!-- Definieren Sie den Bereich des Filters als die Begrenzungsbox
         des MDN-Logos, das gefiltert wird. Diese Parameter erzeugen
         ein Ergebnis, das denselben Bereich wie das Bild abdeckt. -->
    <filter id="tile" x="0" y="0" width="100%" height="100%">
      <!-- Erstellen Sie eine Kachel aus dem mittleren Abschnitt des
           Bildes von (50,50) bis (150,150). Dieser Bereich ist im
           Wesentlichen der Kopf des Mozilla-Maskottchens. -->
      <feTile in="SourceGraphic" x="50" y="50" width="100" height="100" />

      <!-- Ohne Festlegung eines Bereichs nimmt feTile standardmäßig
           den Bereich des Filters an. Ohne Festlegung eines "in"-Parameters
           ist der Standard das Ergebnis des vorherigen Primitivs.
           Also wird dieses zweite feTile den gesamten Filterbereich
           mit dem Kopf des Maskottchens kacheln. -->
      <feTile />
    </filter>
  </defs>

  <!-- Verwenden Sie das MDN-Logo als Eingabe für den Filter -->
  <image
    href="mdn_logo_only_color.png"
    x="10%"
    y="10%"
    width="80%"
    height="80%"
    style="filter:url(#tile);" />
</svg>
```

### Ergebnis

{{EmbedLiveSample("Example", 200, 200)}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
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
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTurbulence")}}
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)

---
title: requiredExtensions
slug: Web/SVG/Reference/Attribute/requiredExtensions
l10n:
  sourceCommit: 1db55979ae2b6ed7abb484b74e70809d66fa7637
---

Das **`requiredExtensions`** SVG-[Attribut für bedingte Verarbeitung](/de/docs/Web/SVG/Reference/Attribute#conditional_processing_attributes) ist eine Liste von durch Leerzeichen getrennten URL-Werten, die jeweils auf eine Sprachenerweiterung verweisen. Sprachenerweiterungen sind erweiterte Fähigkeiten, die über die in den Standardspezifikationen von Browsern definierten hinausgehen.

Der Wert ist eine durch Leerzeichen getrennte Liste von URL-Referenzen, die die erforderlichen Erweiterungen identifizieren. Wenn alle in der Liste genannten Erweiterungen vom Benutzeragent unterstützt werden, wird das Element wie gewohnt gerendert. Wenn das Attribut vorhanden ist, aber der Wert ein leerer String ist oder wenn eine der Erweiterungen vom Browser nicht unterstützt wird, überspringt der Browser das Element zusammen mit all seinen Nachkommen und rendert es nicht.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("circle")}}
- {{SVGElement("clipPath")}}
- {{SVGElement("defs")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("g")}}
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("mask")}}
- {{SVGElement("path")}}
- {{SVGElement("pattern")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- {{SVGElement("set")}}
- {{SVGElement("svg")}}
- {{SVGElement("switch")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}
- {{SVGElement("use")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <a href="/de/docs/Web/SVG/Guides/Content_type#list-of-ts"><code>&lt;list-of-IRIs&gt;</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>(keiner)</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("tabindex")}}
- {{SVGAttr("systemLanguage")}}
- {{SVGAttr("requiredFeatures")}}

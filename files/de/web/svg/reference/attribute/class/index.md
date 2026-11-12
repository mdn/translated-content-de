---
title: class
slug: Web/SVG/Reference/Attribute/class
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Weist einem Element einen Klassennamen oder mehrere Klassennamen zu. Sie können denselben Klassennamen oder dieselben Klassennamen beliebig vielen Elementen zuweisen. Mehrere Klassennamen müssen jedoch durch Whitespace-Zeichen getrennt sein.

Der Klassenname eines Elements erfüllt zwei wesentliche Funktionen:

- Er dient als Stylesheet-Selektor, wenn einem Satz von Elementen Stilinformationen zugewiesen werden.
- Er kann vom Browser für allgemeine Zwecke verwendet werden.

Mit diesem Attribut können Sie SVG-Inhalte mithilfe von CSS gestalten.

## Elemente

Die folgenden Elemente können das Attribut `class` verwenden:

- {{ SVGElement("a") }}
- {{ SVGElement("circle") }}
- {{ SVGElement("clipPath") }}
- {{ SVGElement("defs") }}
- {{ SVGElement("desc") }}
- {{ SVGElement("ellipse") }}
- {{ SVGElement("feBlend") }}
- {{ SVGElement("feColorMatrix") }}
- {{ SVGElement("feComponentTransfer") }}
- {{ SVGElement("feComposite") }}
- {{ SVGElement("feConvolveMatrix") }}
- {{ SVGElement("feDiffuseLighting") }}
- {{ SVGElement("feDisplacementMap") }}
- {{ SVGElement("feFlood") }}
- {{ SVGElement("feGaussianBlur") }}
- {{ SVGElement("feImage") }}
- {{ SVGElement("feMerge") }}
- {{ SVGElement("feMorphology") }}
- {{ SVGElement("feOffset") }}
- {{ SVGElement("feSpecularLighting") }}
- {{ SVGElement("feTile") }}
- {{ SVGElement("feTurbulence") }}
- {{ SVGElement("filter") }}
- {{ SVGElement("foreignObject") }}
- {{ SVGElement("g") }}
- {{ SVGElement("image") }}
- {{ SVGElement("line") }}
- {{ SVGElement("linearGradient") }}
- {{ SVGElement("marker") }}
- {{ SVGElement("mask") }}
- {{ SVGElement("path") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("polygon") }}
- {{ SVGElement("polyline") }}
- {{ SVGElement("radialGradient") }}
- {{ SVGElement("rect") }}
- {{ SVGElement("stop") }}
- {{ SVGElement("svg") }}
- {{ SVGElement("switch") }}
- {{ SVGElement("symbol") }}
- {{ SVGElement("text") }}
- {{ SVGElement("textPath") }}
- {{ SVGElement("title") }}
- {{ SVGElement("tspan") }}
- {{ SVGElement("use") }}

## Beispiel

```html
<html lang="en">
  <body>
    <svg
      width="120"
      height="220"
      viewPort="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg">
      <style>
        <![CDATA[
          rect.rectClass {
            stroke: #000066;
            fill: #00cc00;
          }
          circle.circleClass {
            stroke: #006600;
            fill: #cc0000;
          }
        ]]>
      </style>

      <rect class="rectClass" x="10" y="10" width="100" height="100" />
      <circle class="circleClass" cx="40" cy="50" r="26" />
    </svg>
  </body>
</html>
```

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Kategorien</th>
      <td>Keine</td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <a href="/de/docs/Web/SVG/Guides/Content_type#list-of-ts"
          >&#x3C;list-of-class-names></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

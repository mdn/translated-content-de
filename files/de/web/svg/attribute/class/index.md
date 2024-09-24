---
title: Klasse
slug: Web/SVG/Attribute/class
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{SVGRef}}

« [SVG Attributreferenz Startseite](/de/docs/Web/SVG/Attribute)

Weist einem Element einen Klassennamen oder eine Menge von Klassennamen zu. Sie können denselben Klassennamen oder dieselben Klassennamen einer beliebigen Anzahl von Elementen zuweisen, jedoch müssen mehrere Klassennamen durch Leerzeichen getrennt werden.

Der Klassenname eines Elements erfüllt zwei Hauptfunktionen:

- Als Stylesheet-Selektor, wenn ein Autor einer Gruppe von Elementen Stilinformationen zuweist.
- Für den allgemeinen Gebrauch durch den Browser.

Sie können diese Klasse verwenden, um SVG-Inhalte mit CSS zu gestalten.

## Nutzungskontext

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Kategorien</th>
      <td>Keine</td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <a href="/de/docs/Web/SVG/Content_type#list-of-ts"
          >&#x3C;list-of-class-names></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a href="https://www.w3.org/TR/SVG/styling.html#ClassAttribute"
          >SVG 1.1 (2. Ausgabe): Das class-Attribut</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Beispiel

```html
<html lang="en">
  <body>
    <svg
      width="120"
      height="220"
      viewPort="0 0 120 120"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <style>
        <![CDATA[
            rect.rectClass {
                stroke: #000066;
                fill:   #00cc00;
            }
            circle.circleClass {
                stroke: #006600;
                fill:   #cc0000;
            }
        ]]>
      </style>

      <rect class="rectClass" x="10" y="10" width="100" height="100" />
      <circle class="circleClass" cx="40" cy="50" r="26" />
    </svg>
  </body>
</html>
```

## Elemente

Die folgenden Elemente können das `class`-Attribut verwenden:

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
- {{ SVGElement("font") }}
- {{ SVGElement("foreignObject") }}
- {{ SVGElement("g") }}
- {{ SVGElement("glyph") }}
- {{ SVGElement("glyphRef") }}
- {{ SVGElement("image") }}
- {{ SVGElement("line") }}
- {{ SVGElement("linearGradient") }}
- {{ SVGElement("marker") }}
- {{ SVGElement("mask") }}
- {{ SVGElement("missing-glyph") }}
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
- {{ SVGElement("tref") }}
- {{ SVGElement("tspan") }}
- {{ SVGElement("use") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

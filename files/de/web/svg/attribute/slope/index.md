---
title: Neigung
slug: Web/SVG/Attribute/slope
l10n:
  sourceCommit: bb74fa83b95eaf65af67854d047feacd6023f454
---

{{SVGRef}}

Das Attribut **`slope`** definiert die Werte für lineare Filter, wie zum Beispiel Helligkeit.

Das `slope`-Attribut wird von den Kindern des Filterprimitives {{SVGElement("feComponentTransfer")}} unterstützt, einschließlich der `feFunc-RGBA` Übertragungsfunktionen. Wenn der `type` einer Übertragungsfunktion `linear` ist, definiert `slope` die Steigung der linearen Funktion.

Sie können dieses Attribut mit den folgenden SVG-Komponenten-Übertragungsfunktionselementen verwenden, wenn `type="linear"` gesetzt ist:

- {{SVGElement("feFuncR")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncA")}}

> [!NOTE]
> Ursprünglich wurde das Attribut `slope` innerhalb von {{SVGElement("font-face")}} verwendet, um den vertikalen Strichwinkel einer Schriftart anzugeben. Diese Verwendung wurde jedoch abgelehnt.

## Verwendungsnotizen

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : Dieser Wert gibt die Steigung der linearen Komponenten-Übertragungsfunktionen an.

## Beispiele

In diesem Beispiel hat ein Farbverlaufsfeld zwei Textelemente mit angewendeten linearen Filtern. Die Steigungen der Filterübertragungsfunktionen jedes Filters unterscheiden sich.

```html
<svg
  width="8cm"
  height="4cm"
  viewBox="0 0 800 400"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <title>Examples of feComponentTransfer operations</title>
  <desc>
    Text strings showing the effects of the slope attribute of the
    feComponentTransfer filter function linear options.
  </desc>
  <defs>
    <linearGradient
      id="MyGradient"
      gradientUnits="userSpaceOnUse"
      x1="100"
      y1="0"
      x2="600"
      y2="0">
      <stop offset="0" stop-color="#ff0000" />
      <stop offset="1" stop-color="#0000ff" />
    </linearGradient>
    <filter
      id="Linear1"
      filterUnits="objectBoundingBox"
      x="0%"
      y="0%"
      width="100%"
      height="100%">
      <feComponentTransfer>
        <feFuncR type="linear" slope="1" />
        <feFuncG type="linear" slope="1" />
        <feFuncB type="linear" slope="1" />
      </feComponentTransfer>
    </filter>
    <filter
      id="Linear2"
      filterUnits="objectBoundingBox"
      x="0%"
      y="0%"
      width="100%"
      height="100%">
      <feComponentTransfer>
        <feFuncR type="linear" slope="0.5" />
        <feFuncG type="linear" slope="2.5" />
        <feFuncB type="linear" slope="5" />
      </feComponentTransfer>
    </filter>
  </defs>
  <rect fill="none" stroke="blue" x="1" y="1" width="798" height="398" />
  <g
    font-family="Verdana"
    font-size="100"
    font-weight="bold"
    fill="url(#MyGradient)">
    <text x="100" y="190" filter="url(#Linear1)">Slope1</text>
    <text x="100" y="290" filter="url(#Linear2)">Slope2</text>
  </g>
</svg>
```

{{EmbedLiveSample('Examples', 300, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

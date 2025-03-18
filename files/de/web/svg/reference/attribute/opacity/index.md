---
title: opacity
slug: Web/SVG/Reference/Attribute/opacity
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`opacity`**-Attribut gibt die Transparenz eines Objekts oder einer Gruppe von Objekten an, das heißt, das Maß, in dem der Hintergrund hinter dem Element überlagert wird.

> [!NOTE]
> Als Präsentationsattribut hat `opacity` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("opacity")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}
- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("g")}}
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("marker")}}
- {{SVGElement("path")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- {{SVGElement("svg")}}
- {{SVGElement("switch")}}
- {{SVGElement("symbol")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}
- {{SVGElement("use")}}

Im Gegensatz zu {{SVGAttr("fill-opacity")}}, {{SVGAttr("stroke-opacity")}} und {{SVGAttr("stop-opacity")}}, die auf einzelne Operationen angewendet werden und _während_ des Renderns des Elements dargestellt werden, wird `opacity` auf ganze Objekte oder Gruppen angewendet und wirkt wie eine Nachbearbeitungsoperation auf das gerenderte Bild des Objekts oder der Gruppe. Daher werden, wenn Sie sowohl `opacity` als auch die anderen Opazitätsattribute im selben Bereich haben, diese übereinandergelegt und führen dazu, dass die Opazität multipliziert wird.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="0" y2="100%">
      <stop offset="0%" style="stop-color:skyblue;" />
      <stop offset="100%" style="stop-color:seagreen;" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" />
  <circle cx="50" cy="50" r="40" fill="black" />
  <circle cx="150" cy="50" r="40" fill="black" opacity="0.3" />
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;alpha-value></code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<alpha-value>`
  - : Die einheitliche Opazitätseinstellung, die auf ein gesamtes Objekt angewendet werden soll, als {{cssxref("number")}}. Alle Werte außerhalb des Bereichs von 0,0 (vollständig transparent) bis 1,0 (vollständig opak) werden auf diesen Bereich begrenzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("opacity")}} Eigenschaft
- {{SVGAttr("fill-opacity")}}
- {{SVGAttr("stop-opacity")}}
- {{SVGAttr("stroke-opacity")}}

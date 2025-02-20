---
title: fill-opacity
slug: Web/SVG/Attribute/fill-opacity
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das Attribut **`fill-opacity`** ist ein Präsentationsattribut, das die Deckkraft des Farbanschlusses (_color_, _gradient_, _pattern_ etc.) definiert, der auf eine Form angewendet wird.

> [!NOTE]
> Als Präsentationsattribut hat `fill-opacity` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("fill-opacity")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Default fill opacity: 1 -->
  <circle cx="50" cy="50" r="40" />

  <!-- Fill opacity as a number -->
  <circle cx="150" cy="50" r="40" fill-opacity="0.7" />

  <!-- Fill opacity as a percentage -->
  <circle cx="250" cy="50" r="40" fill-opacity="50%" />

  <!-- Fill opacity as a CSS property -->
  <circle cx="350" cy="50" r="40" style="fill-opacity: .25;" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>[0-1]</code> |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#paint"
            >&#x3C;percentage></a
          ></strong
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

> [!NOTE]
> SVG2 führt Prozentwerte für `fill-opacity` ein, jedoch wird dies noch nicht weitreichend unterstützt (_Siehe [Browser-Kompatibilität](#browser-kompatibilität) unten_). Daher ist es eine bewährte Praxis, die Deckkraft mit einem Wert im Bereich `[0-1]` festzulegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Eigenschaft {{cssxref("fill-opacity")}}
- {{SVGAttr("opacity")}}
- {{SVGAttr("stop-opacity")}}
- {{SVGAttr("stroke-opacity")}}

---
title: dy
slug: Web/SVG/Reference/Attribute/dy
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`dy`** gibt eine Verschiebung der Position eines Elements oder seines Inhalts entlang der y-Achse an.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('feDropShadow')}}
- {{SVGElement('feOffset')}}
- {{SVGElement('text')}}
- {{SVGElement('tspan')}}

## feDropShadow

Bei {{SVGElement('feDropShadow')}} definiert `dy` den Versatz des Schlagschattens entlang der y-Achse. Die Einheit, in der der Attributwert interpretiert wird, wird durch das Attribut {{SVGAttr('primitiveUnits')}} des Elements {{SVGElement('filter')}} festgelegt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feOffset

Bei {{SVGElement('feOffset')}} definiert `dy` den Versatz der Filtereingabegrafik entlang der y-Achse. Die Einheit, in der der Attributwert interpretiert wird, wird durch das Attribut {{SVGAttr('primitiveUnits')}} des Elements {{SVGElement('filter')}} festgelegt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number">&#x3C;number></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## text

Bei {{SVGElement('text')}} definiert `dy`, wenn es einen einzelnen Wert enthält, eine Verschiebung aller Glyphen entlang der y-Achse.

Wenn mehrere Werte angegeben sind, definiert `dy` für jede einzelne Glyphe eine Verschiebung entlang der y-Achse relativ zur vorhergehenden Glyphe. Wenn weniger Werte als Glyphen vorhanden sind, verwenden die übrigen Glyphen den Wert `0`. Wenn mehr Werte als Glyphen vorhanden sind, werden die zusätzlichen Werte ignoriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        Liste von (<strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## tspan

Bei {{SVGElement('tspan')}} definiert `dy`, wenn es einen einzelnen Wert enthält, eine Verschiebung aller Glyphen entlang der y-Achse.

Wenn mehrere Werte angegeben sind, definiert `dy` für jede einzelne Glyphe eine Verschiebung entlang der y-Achse relativ zur vorhergehenden Glyphe. Wenn weniger Werte als Glyphen vorhanden sind, verwenden die übrigen Glyphen den Wert `0`. Wenn mehr Werte als Glyphen vorhanden sind, werden die zusätzlichen Werte ignoriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        Liste von (<strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Beispiele

### Text verschieben

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Lines materialized the position of the glyphs -->
  <line x1="10%" x2="10%" y1="0" y2="100%" />
  <line x1="0" x2="100%" y1="30%" y2="30%" />
  <line x1="0" x2="100%" y1="80%" y2="80%" />

  <!-- Some reference text -->
  <text x="10%" y="30%" fill="grey">SVG</text>

  <!-- The same text with a shift along the y-axis -->
  <text dy="50%" x="10%" y="30%">SVG</text>
</svg>
```

```css
line {
  stroke: red;
  stroke-width: 0.5px;
  stroke-dasharray: 3px;
}
```

{{EmbedLiveSample("Shifting text", '100%', 200)}}

### Mehrere Werte

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Horizontal lines -->
  <line x1="0" x2="100%" y1="30" y2="30" />
  <line x1="0" x2="100%" y1="40" y2="40" />
  <line x1="0" x2="100%" y1="50" y2="50" />
  <line x1="0" x2="100%" y1="60" y2="60" />

  <!-- Vertical lines -->
  <line x1="10" x2="10" y1="0" y2="100%" />
  <line x1="50" x2="50" y1="0" y2="100%" />
  <line x1="90" x2="90" y1="0" y2="100%" />

  <!-- Behaviors change based on the number of values in the attributes -->
  <text dy="20" x="10" y="30">SVG</text>
  <text dy="0 10" x="50" y="30">SVG</text>
  <text dy="0 10 20" x="90" y="30">SVG</text>
</svg>
```

```css
line {
  stroke: red;
  stroke-width: 0.5px;
  stroke-dasharray: 3px;
}
```

{{EmbedLiveSample('Multiple values', '100%', 100)}}

## Spezifikationen

{{Specifications}}

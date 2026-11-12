---
title: dx
slug: Web/SVG/Reference/Attribute/dx
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`dx`** gibt eine Verschiebung der Position eines Elements oder seines Inhalts entlang der x-Achse an.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('feDropShadow')}}
- {{SVGElement('feOffset')}}
- {{SVGElement('text')}}
- {{SVGElement('tspan')}}

## feDropShadow

Bei {{SVGElement('feDropShadow')}} definiert `dx` den Versatz des Schlagschattens entlang der x-Achse. Die Einheit, in der der Attributwert interpretiert wird, wird durch das Attribut {{SVGAttr('primitiveUnits')}} des Elements {{SVGElement('filter')}} festgelegt.

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

Bei {{SVGElement('feOffset')}} definiert `dx` den Versatz der Eingabegrafik des Filters entlang der x-Achse. Die Einheit, in der der Attributwert interpretiert wird, wird durch das Attribut {{SVGAttr('primitiveUnits')}} des Elements {{SVGElement('filter')}} festgelegt.

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

Bei {{SVGElement('text')}} definiert `dx` eine Verschiebung aller Glyphen entlang der x-Achse, wenn das Attribut einen einzigen Wert enthält.

Bei mehreren Werten definiert `dx` für jede einzelne Glyphe eine Verschiebung entlang der x-Achse relativ zur vorhergehenden Glyphe. Gibt es weniger Werte als Glyphen, wird für die übrigen Glyphen der Wert `0` verwendet. Gibt es mehr Werte als Glyphen, werden die überzähligen Werte ignoriert.

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

Bei {{SVGElement('tspan')}} definiert `dx` eine Verschiebung aller alternativen Glyphen entlang der x-Achse, wenn das Attribut einen einzigen Wert enthält.

Bei mehreren Werten definiert `dx` für jede einzelne Glyphe eine Verschiebung entlang der x-Achse relativ zur vorhergehenden Glyphe. Gibt es weniger Werte als Glyphen, wird für die übrigen Glyphen der Wert `0` verwendet. Gibt es mehr Werte als Glyphen, werden die überzähligen Werte ignoriert.

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
  <line x1="0" x2="100%" y1="50%" y2="50%" />
  <line x1="10%" x2="10%" y1="0" y2="100%" />
  <line x1="60%" x2="60%" y1="0" y2="100%" />

  <!-- Some reference text -->
  <text x="10%" y="50%" fill="grey">SVG</text>

  <!-- The same text with a shift along the x-axis -->
  <text dx="50%" x="10%" y="50%">SVG</text>
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
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Lines materialized the position of the glyphs -->
  <line x1="0" x2="100%" y1="25%" y2="25%" />
  <line x1="0" x2="100%" y1="50%" y2="50%" />
  <line x1="0" x2="100%" y1="75%" y2="75%" />

  <line x1="10%" x2="10%" y1="0" y2="100%" />
  <line x1="30%" x2="30%" y1="0" y2="100%" />
  <line x1="60%" x2="60%" y1="0" y2="100%" />

  <!-- Behaviors change based on the number
       of values in the attributes -->
  <text dx="20%" x="10%" y="25%">SVG</text>
  <text dx="0 10%" x="10%" y="50%">SVG</text>
  <text dx="0 10% 20%" x="10%" y="75%">SVG</text>
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

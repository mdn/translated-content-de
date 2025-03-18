---
title: dx
slug: Web/SVG/Reference/Attribute/dx
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`dx`** Attribut gibt eine Verschiebung entlang der x-Achse der Position eines Elements oder seines Inhalts an.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('feDropShadow')}}
- {{SVGElement('feOffset')}}
- {{SVGElement('glyphRef')}}
- {{SVGElement('text')}}
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

{{EmbedLiveSample("Example", '100%', 200)}}

## feDropShadow

Für {{SVGElement('feDropShadow')}} definiert `dx` den x-Versatz des fallenden Schattens. Die Einheit zur Berechnung des Wertes des Attributs wird durch das {{SVGAttr('primitiveUnits')}} Attribut des {{SVGElement('filter')}} Elements festgelegt.

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

Für {{SVGElement('feOffset')}} definiert `dx` den x-Versatz der Filtereingabe-Grafik. Die Einheit zur Berechnung des Wertes des Attributs wird durch das {{SVGAttr('primitiveUnits')}} Attribut des {{SVGElement('filter')}} Elements festgelegt.

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

## glyphRef

> [!WARNING]
> Ab SVG2 ist {{SVGElement('glyphRef')}} veraltet und sollte nicht mehr verwendet werden.

Für {{SVGElement('glyphRef')}} definiert `dx` den x-Versatz des Glyphs im Schriftmetriken-System.

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

Für {{SVGElement('text')}} definiert `dx`, wenn es einen einzelnen Wert enthält, eine Verschiebung entlang der x-Achse für alle Glyphen.

Wenn es mehrere Werte gibt, definiert `dx` eine Verschiebung entlang der x-Achse für jedes einzelne Glyph relativ zum vorhergehenden Glyph. Wenn es weniger Werte als Glyphen gibt, verwenden die verbleibenden Glyphen einen Wert von `0`. Wenn es mehr Werte als Glyphen gibt, werden zusätzliche Werte ignoriert.

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

### Beispiel

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

{{EmbedLiveSample('text', '100%', 100)}}

## tref

> [!WARNING]
> Ab SVG2 ist {{SVGElement('tref')}} veraltet und sollte nicht mehr verwendet werden.

Für {{SVGElement('tref')}} definiert `dx`, wenn es einen einzelnen Wert enthält, eine Verschiebung entlang der x-Achse für alle Glyphen.

Wenn es mehrere Werte gibt, definiert `dx` eine Verschiebung entlang der x-Achse für jedes einzelne Glyph relativ zum vorhergehenden Glyph. Wenn es weniger Werte als Glyphen gibt, verwenden die verbleibenden Glyphen einen Wert von `0`. Wenn es mehr Werte als Glyphen gibt, werden zusätzliche Werte ignoriert.

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

Für {{SVGElement('tspan')}} definiert `dx`, wenn es einen einzigen Wert enthält, eine Verschiebung entlang der x-Achse für alle alternativen Glyphen.

Wenn es mehrere Werte gibt, definiert `dx` eine Verschiebung entlang der x-Achse für jedes einzelne Glyph relativ zum vorhergehenden Glyph. Wenn es weniger Werte als Glyphen gibt, verwenden die verbleibenden Glyphen einen Wert von `0`. Wenn es mehr Werte als Glyphen gibt, werden zusätzliche Werte ignoriert.

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

## Spezifikationen

{{Specifications}}

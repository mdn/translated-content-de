---
title: dy
slug: Web/SVG/Attribute/dy
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`dy`**-Attribut gibt eine Verschiebung entlang der y-Achse an der Position eines Elements oder seines Inhalts an.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

{{EmbedLiveSample("Example", '100%', 200)}}

## feDropShadow

Für {{SVGElement('feDropShadow')}} definiert `dy` den y-Versatz des fallenden Schattens. Die Einheit, die zur Auflösung des Werts des Attributs verwendet wird, wird durch das {{SVGAttr('primitiveUnits')}}-Attribut des {{SVGElement('filter')}}-Elements festgelegt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number">&#x3C;number></a></strong
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

Für {{SVGElement('feOffset')}} definiert `dy` den y-Versatz der Filtereingabegrafik. Die Einheit, die zur Auflösung des Werts des Attributs verwendet wird, wird durch das {{SVGAttr('primitiveUnits')}}-Attribut des {{SVGElement('filter')}}-Elements festgelegt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number">&#x3C;number></a></strong
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
> Ab SVG2 ist {{SVGElement('glyphRef')}} veraltet und sollte nicht verwendet werden.

Für {{SVGElement('glyphRef')}} definiert `dy` den y-Versatz des Glyphs im Schriftmetriksystem.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number">&#x3C;number></a></strong
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

Für {{SVGElement('text')}} definiert `dy` bei einem einzelnen Wert eine Verschiebung entlang der y-Achse für alle Glyphen.

Wenn mehrere Werte vorhanden sind, definiert `dy` eine Verschiebung entlang der y-Achse für jedes einzelne Glyph relativ zum vorhergehenden Glyph. Wenn weniger Werte als Glyphen vorhanden sind, verwenden die verbleibenden Glyphen einen Wert von `0`. Wenn mehr Werte als Glyphen vorhanden sind, werden zusätzliche Werte ignoriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        Liste von (<strong
          ><a href="/de/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
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

{{EmbedLiveSample('text', '100%', 100)}}

## tref

> [!WARNING]
> Ab SVG2 ist {{SVGElement('tref')}} veraltet und sollte nicht verwendet werden.

Für {{SVGElement('tref')}} definiert `dy` bei einem einzelnen Wert eine Verschiebung entlang der y-Achse für alle Glyphen.

Wenn mehrere Werte vorhanden sind, definiert `dy` eine Verschiebung entlang der y-Achse für jedes einzelne Glyph relativ zum vorhergehenden Glyph. Wenn weniger Werte als Glyphen vorhanden sind, verwenden die verbleibenden Glyphen einen Wert von `0`. Wenn mehr Werte als Glyphen vorhanden sind, werden zusätzliche Werte ignoriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        Liste von (<strong
          ><a href="/de/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## tspan

Für {{SVGElement('tspan')}} definiert `dy` bei einem einzelnen Wert eine Verschiebung entlang der y-Achse für alle abwechselnden Glyphen.

Wenn mehrere Werte vorhanden sind, definiert `dy` eine Verschiebung entlang der y-Achse für jedes einzelne Glyph relativ zum vorhergehenden Glyph. Wenn weniger Werte als Glyphen vorhanden sind, verwenden die verbleibenden Glyphen einen Wert von `0`. Wenn mehr Werte als Glyphen vorhanden sind, werden zusätzliche Werte ignoriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        Liste von (<strong
          ><a href="/de/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

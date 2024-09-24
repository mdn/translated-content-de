---
title: dx
slug: Web/SVG/Attribute/dx
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`dx`** Attribut gibt eine Verschiebung entlang der x-Achse auf die Position eines Elements oder seines Inhalts an.

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
  <!-- Linien visualisieren die Position der Glyphen -->
  <line x1="0" x2="100%" y1="50%" y2="50%" />
  <line x1="10%" x2="10%" y1="0" y2="100%" />
  <line x1="60%" x2="60%" y1="0" y2="100%" />

  <!-- Ein Referenztext -->
  <text x="10%" y="50%" fill="grey">SVG</text>

  <!-- Derselbe Text, verschoben entlang der x-Achse -->
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

Für {{SVGElement('feDropShadow')}} definiert `dx` den x-Versatz des Schattens der geworfen wird. Die Einheit, die zur Auflösung des Werts des Attributs verwendet wird, wird durch das {{SVGAttr('primitiveUnits')}} Attribut des {{SVGElement('filter')}} Elements festgelegt.

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

Für {{SVGElement('feOffset')}} definiert `dx` den x-Versatz der Filtereingabegrafik. Die Einheit, die zur Auflösung des Werts des Attributs verwendet wird, wird durch das {{SVGAttr('primitiveUnits')}} Attribut des {{SVGElement('filter')}} Elements festgelegt.

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
> Seit SVG2 ist {{SVGElement('glyphRef')}} veraltet und sollte nicht mehr verwendet werden.

Für {{SVGElement('glyphRef')}} definiert `dx` den x-Versatz der Glyphe, im metrischen System der Schriftart.

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

Für {{SVGElement('text')}}, wenn ein einzelner Wert enthalten ist, definiert `dx` eine Verschiebung entlang der x-Achse für alle Glyphen.

Wenn mehrere Werte vorhanden sind, definiert `dx` eine Verschiebung entlang der x-Achse für jede einzelne Glyphe relativ zur vorhergehenden Glyphe. Wenn weniger Werte als Glyphen vorhanden sind, verwenden die übrigen Glyphen einen Wert von `0`. Wenn mehr Werte als Glyphen vorhanden sind, werden zusätzliche Werte ignoriert.

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
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Linien visualisieren die Position der Glyphen -->
  <line x1="0" x2="100%" y1="25%" y2="25%" />
  <line x1="0" x2="100%" y1="50%" y2="50%" />
  <line x1="0" x2="100%" y1="75%" y2="75%" />

  <line x1="10%" x2="10%" y1="0" y2="100%" />
  <line x1="30%" x2="30%" y1="0" y2="100%" />
  <line x1="60%" x2="60%" y1="0" y2="100%" />

  <!-- Das Verhalten ändert sich basierend
       auf der Anzahl der Werte im Attribut -->
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
> Seit SVG2 ist {{SVGElement('tref')}} veraltet und sollte nicht mehr verwendet werden.

Für {{SVGElement('tref')}}, wenn ein einzelner Wert enthalten ist, definiert `dx` eine Verschiebung entlang der x-Achse für alle Glyphen.

Wenn mehrere Werte vorhanden sind, definiert `dx` eine Verschiebung entlang der x-Achse für jede einzelne Glyphe relativ zur vorhergehenden Glyphe. Wenn weniger Werte als Glyphen vorhanden sind, verwenden die übrigen Glyphen einen Wert von `0`. Wenn mehr Werte als Glyphen vorhanden sind, werden zusätzliche Werte ignoriert.

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

Für {{SVGElement('tspan')}}, wenn ein einzelner Wert enthalten ist, definiert `dx` eine Verschiebung entlang der x-Achse für alle alternierenden Glyphen.

Wenn mehrere Werte vorhanden sind, definiert `dx` eine Verschiebung entlang der x-Achse für jede einzelne Glyphe relativ zur vorhergehenden Glyphe. Wenn weniger Werte als Glyphen vorhanden sind, verwenden die übrigen Glyphen einen Wert von `0`. Wenn mehr Werte als Glyphen vorhanden sind, werden zusätzliche Werte ignoriert.

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

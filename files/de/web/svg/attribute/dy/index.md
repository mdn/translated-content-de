---
title: dy
slug: Web/SVG/Attribute/dy
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`dy`** Attribut gibt eine Verschiebung entlang der y-Achse an, bezogen auf die Position eines Elements oder dessen Inhalt.

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
  <!-- Linien materialisieren die Position der Glyphen -->
  <line x1="10%" x2="10%" y1="0" y2="100%" />
  <line x1="0" x2="100%" y1="30%" y2="30%" />
  <line x1="0" x2="100%" y1="80%" y2="80%" />

  <!-- Ein Referenztext -->
  <text x="10%" y="30%" fill="grey">SVG</text>

  <!-- Derselbe Text mit einer Verschiebung entlang der y-Achse -->
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

Für {{SVGElement('feDropShadow')}} definiert `dy` die y-Verschiebung des geworfenen Schattens. Die Einheit zur Auflösung des Attributwertes wird durch das Attribut {{SVGAttr('primitiveUnits')}} des Elements {{SVGElement('filter')}} festgelegt.

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

Für {{SVGElement('feOffset')}} definiert `dy` die y-Verschiebung der Filtereingabegrafik. Die Einheit zur Auflösung des Attributwertes wird durch das Attribut {{SVGAttr('primitiveUnits')}} des Elements {{SVGElement('filter')}} festgelegt.

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
> Seit SVG2 ist {{SVGElement('glyphRef')}} veraltet und sollte nicht verwendet werden.

Für {{SVGElement('glyphRef')}} definiert `dy` die y-Verschiebung der Glyphe im Font-Metriksystem.

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

Für {{SVGElement('text')}}, wenn es einen einzelnen Wert enthält, definiert `dy` eine Verschiebung entlang der y-Achse für alle Glyphen.

Wenn es mehrere Werte gibt, definiert `dy` eine Verschiebung entlang der y-Achse für jede einzelne Glyphe relativ zur vorhergehenden Glyphe. Wenn es weniger Werte als Glyphen gibt, verwenden die verbleibenden Glyphen einen Wert von `0`. Wenn es mehr Werte als Glyphen gibt, werden zusätzliche Werte ignoriert.

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
  <!-- Horizontale Linien -->
  <line x1="0" x2="100%" y1="30" y2="30" />
  <line x1="0" x2="100%" y1="40" y2="40" />
  <line x1="0" x2="100%" y1="50" y2="50" />
  <line x1="0" x2="100%" y1="60" y2="60" />

  <!-- Vertikale Linien -->
  <line x1="10" x2="10" y1="0" y2="100%" />
  <line x1="50" x2="50" y1="0" y2="100%" />
  <line x1="90" x2="90" y1="0" y2="100%" />

  <!-- Verhaltensänderungen basierend auf der Anzahl der Werte in den Attributen -->
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
> Seit SVG2 ist {{SVGElement('tref')}} veraltet und sollte nicht verwendet werden.

Für {{SVGElement('tref')}}, wenn es einen einzelnen Wert enthält, definiert `dy` eine Verschiebung entlang der y-Achse für alle Glyphen.

Wenn es mehrere Werte gibt, definiert `dy` eine Verschiebung entlang der y-Achse für jede einzelne Glyphe relativ zur vorhergehenden Glyphe. Wenn es weniger Werte als Glyphen gibt, verwenden die verbleibenden Glyphen einen Wert von `0`. Wenn es mehr Werte als Glyphen gibt, werden zusätzliche Werte ignoriert.

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

Für {{SVGElement('tspan')}}, wenn es einen einzelnen Wert enthält, definiert `dy` eine Verschiebung entlang der y-Achse für alle alternierenden Glyphen.

Wenn es mehrere Werte gibt, definiert `dy` eine Verschiebung entlang der y-Achse für jede einzelne Glyphe relativ zur vorhergehenden Glyphe. Wenn es weniger Werte als Glyphen gibt, verwenden die verbleibenden Glyphen einen Wert von `0`. Wenn es mehr Werte als Glyphen gibt, werden zusätzliche Werte ignoriert.

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

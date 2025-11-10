---
title: x1
slug: Web/SVG/Reference/Attribute/x1
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`x1`**-Attribut wird verwendet, um die erste x-Koordinate für das Zeichnen eines SVG-Elements anzugeben, das mehr als eine Koordinate erfordert. Elemente, die nur eine Koordinate benötigen, verwenden stattdessen das {{SVGAttr("x")}}-Attribut.

## Elemente

Dieses Attribut kann mit den in den folgenden Abschnitten beschriebenen SVG-Elementen verwendet werden.

### `<line>`

Für {{SVGElement('line')}} definiert `x1` die x-Koordinate des Startpunkts der Linie.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
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

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <line x1="1" x2="5" y1="1" y2="9" stroke="red" />
  <line x1="5" x2="5" y1="1" y2="9" stroke="green" />
  <line x1="9" x2="5" y1="1" y2="9" stroke="blue" />
</svg>
```

{{EmbedLiveSample('line', '100%', 200)}}

### `<linearGradient>`

Für {{SVGElement('linearGradient')}} definiert `x1` die x-Koordinate des Startpunkts des _Gradientenvektors_, der verwendet wird, um die Gradient-Stop-Werte abzubilden. Das genaue Verhalten dieses Attributs wird durch die {{SVGAttr('gradientUnits')}}-Attribute beeinflusst.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!--
  By default the gradient vector start at the left
  bounding limit of the shape it is applied to
  -->
  <linearGradient x1="0%" id="g0">
    <stop offset="0" stop-color="black" />
    <stop offset="100%" stop-color="red" />
  </linearGradient>

  <rect x="1" y="1" width="8" height="8" fill="url(#g0)" />

  <!--
  Here the gradient vector start at 80% of the left
  bounding limit of the shape it is applied to
  -->
  <linearGradient x1="80%" id="g1">
    <stop offset="0" stop-color="black" />
    <stop offset="100%" stop-color="red" />
  </linearGradient>

  <rect x="11" y="1" width="8" height="8" fill="url(#g1)" />
</svg>
```

{{EmbedLiveSample('linearGradient', '100%', 200)}}

## Beispiele

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
  <line x1="2" x2="22" y1="5" y2="20" stroke="red" />
  <line x1="12" x2="22" y1="5" y2="20" stroke="green" />
  <line x1="22" x2="22" y1="5" y2="20" stroke="blue" />
</svg>
```

{{EmbedLiveSample("Examples", '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

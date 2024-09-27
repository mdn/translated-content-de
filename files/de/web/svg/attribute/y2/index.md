---
title: y2
slug: Web/SVG/Attribute/y2
l10n:
  sourceCommit: 00252e3d53b06d0d517a093ba5a3f53335dbc0d8
---

{{SVGRef}}

Das **`y2`**-Attribut wird verwendet, um die zweite y-Koordinate für das Zeichnen eines SVG-Elements anzugeben, das mehr als eine Koordinate erfordert. Elemente, die nur eine Koordinate benötigen, verwenden stattdessen das {{SVGAttr("y")}}-Attribut.

## Elemente

Sie können dieses Attribut mit den unten beschriebenen SVG-Elementen verwenden.

### `<line>`

Für {{SVGElement('line')}} definiert `y2` die y-Koordinate des Endpunkts der Linie.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
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
  <line x1="1" x2="9" y1="5" y2="1" stroke="red" />
  <line x1="1" x2="9" y1="5" y2="5" stroke="green" />
  <line x1="1" x2="9" y1="5" y2="9" stroke="blue" />
</svg>
```

{{EmbedLiveSample('line', '100%', 200)}}

### `<linearGradient>`

Für {{SVGElement('linearGradient')}} definiert `y2` die y-Koordinate des Endpunkts des _Gradientenvektors_, der verwendet wird, um die Werte der Gradientenstopps zuzuordnen. Das genaue Verhalten dieses Attributs wird durch die {{SVGAttr('gradientUnits')}}-Attribute beeinflusst.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
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
  By default the gradient vector end at the top right
  corner of the bounding box of the shape it is applied to.
  -->
  <linearGradient y2="0%" id="g0">
    <stop offset="5%" stop-color="black" />
    <stop offset="50%" stop-color="red" />
    <stop offset="95%" stop-color="black" />
  </linearGradient>

  <rect x="1" y="1" width="8" height="8" fill="url(#g0)" />

  <!--
  Here the gradient vector end at the bottom right
  corner of the bounding box of the shape it is applied to.
  -->
  <linearGradient y2="100%" id="g1">
    <stop offset="5%" stop-color="black" />
    <stop offset="50%" stop-color="red" />
    <stop offset="95%" stop-color="black" />
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
  <line x1="2" x2="22" y1="20" y2="0" stroke="red" />
  <line x1="2" x2="22" y1="20" y2="10" stroke="green" />
  <line x1="2" x2="22" y1="20" y2="20" stroke="blue" />
</svg>
```

{{EmbedLiveSample("Examples", '100%', 200)}}

## Spezifikationen

{{Specifications}}

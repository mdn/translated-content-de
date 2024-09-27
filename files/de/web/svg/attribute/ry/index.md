---
title: ry
slug: Web/SVG/Attribute/ry
l10n:
  sourceCommit: 29a5380c100ee4ca462db3690ad4065a9d23895c
---

{{SVGRef}}

Das **`ry`**-Attribut definiert einen Radius auf der y-Achse.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("ellipse")}}
- {{SVGElement("rect")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="50" ry="0" rx="25" />
  <ellipse cx="150" cy="50" ry="25" rx="25" />
  <ellipse cx="250" cy="50" ry="50" rx="25" />

  <rect x="20" y="120" width="60" height="60" ry="0" rx="15" />
  <rect x="120" y="120" width="60" height="60" ry="15" rx="15" />
  <rect x="220" y="120" width="60" height="60" ry="150" rx="15" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## ellipse

Für {{SVGElement('ellipse')}} definiert `ry` den y-Radius der Form. Bei einem Wert, der kleiner oder gleich null ist, wird die Ellipse überhaupt nicht gezeichnet.

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
        | <code>auto</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Der y-Radius der `<ellipse>` kann auch mit der {{cssxref("ry")}} _Geometrieeigenschaft_ definiert werden. Wenn er in CSS festgelegt ist, überschreibt der `ry`-Eigenschaftswert den `ry`-Attributwert.

## rect

Für {{SVGElement('rect')}} definiert `ry` den y-Achsen-Radius der Ellipse, die verwendet wird, um die Ecken des Rechtecks abzurunden.

Die Art und Weise, wie der Wert des `ry`-Attributs interpretiert wird, hängt sowohl vom {{SVGAttr("rx")}}-Attribut als auch von der Breite des Rechtecks ab:

- Wenn ein ordnungsgemäß spezifizierter Wert für `ry`, aber nicht für {{SVGAttr("rx")}} (oder umgekehrt) angegeben wird, dann betrachtet der Browser den fehlenden Wert als gleich dem definierten.
- Wenn weder `ry` noch {{SVGAttr("rx")}} einen ordnungsgemäß spezifizierten Wert haben, dann zeichnet der Browser ein Rechteck mit rechtwinkligen Ecken.
- Wenn `ry` größer als die Hälfte der Breite des Rechtecks ist, dann betrachtet der Browser den Wert für `ry` als die Hälfte der Breite des Rechtecks.

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
        | <code>auto</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Die vertikale Kurve der Ecken des `<rect>` kann auch mit der {{cssxref("ry")}} _Geometrieeigenschaft_ definiert werden. Wenn er in CSS festgelegt ist, überschreibt der `ry`-Eigenschaftswert den `ry`-Attributwert.

## Spezifikationen

{{Specifications}}

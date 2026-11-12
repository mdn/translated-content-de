---
title: ry
slug: Web/SVG/Reference/Attribute/ry
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`ry`** definiert einen Radius auf der y-Achse.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("ellipse")}}
- {{SVGElement("rect")}}

## ellipse

Bei {{SVGElement('ellipse')}} definiert `ry` den y-Radius der Form. Ist der Wert kleiner oder gleich null, wird die Ellipse nicht gezeichnet.

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
> Der y-Radius von `<ellipse>` kann auch mit der {{cssxref("ry")}}-_Geometrieeigenschaft_ definiert werden. Wenn die `ry`-Eigenschaft in CSS festgelegt ist, hat ihr Wert Vorrang vor dem Wert des `ry`-Attributs.

## rect

Bei {{SVGElement('rect')}} definiert `ry` den Radius auf der y-Achse der Ellipse, mit der die Ecken des Rechtecks abgerundet werden.

Wie der Wert des `ry`-Attributs interpretiert wird, hängt sowohl vom Attribut {{SVGAttr("rx")}} als auch von der Breite des Rechtecks ab:

- Wenn für `ry`, aber nicht für {{SVGAttr("rx")}} ein gültiger Wert angegeben ist (oder umgekehrt), betrachtet der Browser den fehlenden Wert als gleich dem angegebenen Wert.
- Wenn weder `ry` noch {{SVGAttr("rx")}} einen gültigen Wert hat, zeichnet der Browser ein Rechteck mit rechtwinkligen Ecken.
- Wenn `ry` größer als die halbe Breite des Rechtecks ist, verwendet der Browser als Wert für `ry` die halbe Breite des Rechtecks.

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
> Die vertikale Krümmung der Ecken von `<rect>` kann auch mit der {{cssxref("ry")}}-_Geometrieeigenschaft_ definiert werden. Wenn die `ry`-Eigenschaft in CSS festgelegt ist, hat ihr Wert Vorrang vor dem Wert des `ry`-Attributs.

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

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Eigenschaft {{cssxref("ry")}}

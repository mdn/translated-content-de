---
title: rx
slug: Web/SVG/Reference/Attribute/rx
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`rx`** definiert einen Radius auf der x-Achse.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("ellipse")}}
- {{SVGElement("rect")}}

## ellipse

Für {{SVGElement('ellipse')}} definiert `rx` den x-Radius der Form. Bei einem Wert kleiner oder gleich null wird die Ellipse nicht gezeichnet.

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
> Der x-Radius von `<ellipse>` kann auch mit der _Geometrie-Eigenschaft_ {{cssxref("rx")}} definiert werden. Wenn sie in CSS festgelegt ist, hat der Wert der Eigenschaft `rx` Vorrang vor dem Wert des Attributs `rx`.

## rect

Für {{SVGElement('rect')}} definiert `rx` den Radius auf der x-Achse der Ellipse, mit der die Ecken des Rechtecks abgerundet werden.

Wie der Wert des Attributs `rx` interpretiert wird, hängt sowohl vom Attribut {{SVGAttr("ry")}} als auch von der Breite des Rechtecks ab:

- Wenn für `rx`, aber nicht für {{SVGAttr("ry")}} (oder umgekehrt) ein gültiger Wert angegeben ist, betrachtet der Browser den fehlenden Wert als gleich dem angegebenen Wert.
- Wenn weder für `rx` noch für {{SVGAttr("ry")}} ein gültiger Wert angegeben ist, zeichnet der Browser ein Rechteck mit rechtwinkligen Ecken.
- Wenn `rx` größer als die halbe Breite des Rechtecks ist, verwendet der Browser für `rx` die halbe Breite des Rechtecks.

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
> Die horizontale Krümmung der Ecken von `<rect>` kann auch mit der _Geometrie-Eigenschaft_ {{cssxref("rx")}} definiert werden. Wenn sie in CSS festgelegt ist, hat der Wert der Eigenschaft `rx` Vorrang vor dem Wert des Attributs `rx`.

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
  <ellipse cx="50" cy="50" rx="0" ry="25" />
  <ellipse cx="150" cy="50" rx="25" ry="25" />
  <ellipse cx="250" cy="50" rx="50" ry="25" />

  <rect x="20" y="120" width="60" height="60" rx="0" ry="15" />
  <rect x="120" y="120" width="60" height="60" rx="15" ry="15" />
  <rect x="220" y="120" width="60" height="60" rx="150" ry="15" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Eigenschaft {{cssxref("rx")}}

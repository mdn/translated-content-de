---
title: rx
slug: Web/SVG/Attribute/rx
l10n:
  sourceCommit: 29a5380c100ee4ca462db3690ad4065a9d23895c
---

{{SVGRef}}

Das **`rx`** Attribut definiert einen Radius auf der x-Achse.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
  <ellipse cx="50" cy="50" rx="0" ry="25" />
  <ellipse cx="150" cy="50" rx="25" ry="25" />
  <ellipse cx="250" cy="50" rx="50" ry="25" />

  <rect x="20" y="120" width="60" height="60" rx="0" ry="15" />
  <rect x="120" y="120" width="60" height="60" rx="15" ry="15" />
  <rect x="220" y="120" width="60" height="60" rx="150" ry="15" />
</svg>
```

{{EmbedLiveSample("Beispiel", '100%', 200)}}

## ellipse

Für {{SVGElement('ellipse')}} definiert `rx` den x-Radius der Form. Mit einem Wert kleiner oder gleich Null wird die Ellipse überhaupt nicht gezeichnet.

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
> Der x-Radius der `<ellipse>` kann auch mit der {{cssxref("rx")}} _Geometrie-Eigenschaft_ definiert werden. Wenn in CSS gesetzt, überschreibt der Wert der `rx` Eigenschaft den Wert des `rx` Attributs.

## rect

Für {{SVGElement('rect')}} definiert `rx` den x-Achsenradius der Ellipse, die zum Abrunden der Ecken des Rechtecks verwendet wird.

Die Art und Weise, wie der Wert des `rx` Attributs interpretiert wird, hängt sowohl vom {{SVGAttr("ry")}} Attribut als auch von der Breite des Rechtecks ab:

- Wenn ein ordnungsgemäß angegebener Wert für `rx` bereitgestellt wird, nicht jedoch für {{SVGAttr("ry")}} (oder umgekehrt), wird der Browser den fehlenden Wert als gleich dem definierten Wert betrachten.
- Wenn weder `rx` noch {{SVGAttr("ry")}} einen ordnungsgemäß angegebenen Wert haben, zeichnet der Browser ein Rechteck mit rechteckigen Ecken.
- Wenn `rx` größer als die Hälfte der Breite des Rechtecks ist, betrachtet der Browser den Wert für `rx` als die Hälfte der Breite des Rechtecks.

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
> Die horizontale Krümmung der Ecken der `<rect>` kann auch mit der {{cssxref("rx")}} _Geometrie-Eigenschaft_ definiert werden. Wenn in CSS gesetzt, überschreibt der Wert der `rx` Eigenschaft den Wert des `rx` Attributs.

## Spezifikationen

{{Specifications}}

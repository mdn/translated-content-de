---
title: ry
slug: Web/SVG/Reference/Attribute/ry
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`ry`**-Attribut definiert einen Radius auf der y-Achse.

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

Für {{SVGElement('ellipse')}} definiert `ry` den y-Radius der Form. Bei einem Wert kleiner oder gleich null wird die Ellipse überhaupt nicht gezeichnet.

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
> Der y-Radius der `<ellipse>` kann auch mit der {{cssxref("ry")}} _Geometrie-Eigenschaft_ bestimmt werden. Wenn sie in CSS gesetzt ist, überschreibt der `ry`-Eigenschaftswert den `ry`-Attributwert.

## rect

Für {{SVGElement('rect')}} definiert `ry` den y-Achsenradius der Ellipse, die zum Abrunden der Ecken des Rechtecks verwendet wird.

Die Interpretation des `ry`-Attributwertes hängt sowohl vom {{SVGAttr("rx")}}-Attribut als auch von der Breite des Rechtecks ab:

- Wenn ein ordnungsgemäß spezifizierter Wert für `ry`, aber nicht für {{SVGAttr("rx")}}, angegeben wird (oder umgekehrt), setzt der Browser den fehlenden Wert dem definierten gleich.
- Wenn weder `ry` noch {{SVGAttr("rx")}} einen ordnungsgemäß spezifizierten Wert haben, zeichnet der Browser ein Rechteck mit scharfen Ecken.
- Wenn `ry` größer als die Hälfte der Breite des Rechtecks ist, betrachtet der Browser den Wert für `ry` als die Hälfte der Breite des Rechtecks.

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
> Die vertikale Kurve der Ecken der `<rect>` kann auch mit der {{cssxref("ry")}} _Geometrie-Eigenschaft_ bestimmt werden. Wenn sie in CSS gesetzt ist, überschreibt der `ry`-Eigenschaftswert den `ry`-Attributwert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS {{cssxref("ry")}} property

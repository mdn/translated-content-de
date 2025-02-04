---
title: rx
slug: Web/SVG/Attribute/rx
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

Das **`rx`**-Attribut definiert einen Radius auf der x-Achse.

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

{{EmbedLiveSample("Example", '100%', 200)}}

## Ellipse

Für {{SVGElement('ellipse')}} definiert `rx` den x-Radius der Form. Mit einem Wert kleiner oder gleich null wird die Ellipse überhaupt nicht gezeichnet.

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
> Der x-Radius der `<ellipse>` kann ebenfalls mit der {{cssxref("rx")}} _Geometrie-Eigenschaft_ definiert werden. Wenn in CSS festgelegt, überschreibt der `rx`-Eigenschaftswert den `rx`-Attributwert.

## Rechteck

Für {{SVGElement('rect')}} definiert `rx` den x-Achsenradius der Ellipse, die verwendet wird, um die Ecken des Rechtecks abzurunden.

Die Interpretation des Wertes des `rx`-Attributs hängt sowohl vom {{SVGAttr("ry")}}-Attribut als auch von der Breite des Rechtecks ab:

- Wenn ein ordnungsgemäß spezifizierter Wert für `rx` angegeben wird, aber nicht für {{SVGAttr("ry")}} (oder umgekehrt), geht der Browser davon aus, dass der fehlende Wert gleich dem definierten ist.
- Wenn weder `rx` noch {{SVGAttr("ry")}} einen ordnungsgemäß spezifizierten Wert haben, wird der Browser ein Rechteck mit rechtwinkligen Ecken zeichnen.
- Wenn `rx` mehr als die Hälfte der Breite des Rechtecks beträgt, betrachtet der Browser den Wert von `rx` als die Hälfte der Breite des Rechtecks.

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
> Die horizontale Krümmung der Ecken des `<rect>` kann ebenfalls mit der {{cssxref("rx")}} _Geometrie-Eigenschaft_ definiert werden. Wenn in CSS festgelegt, überschreibt der `rx`-Eigenschaftswert den `rx`-Attributwert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS {{cssxref("rx")}}-Eigenschaft

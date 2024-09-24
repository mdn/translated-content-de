---
title: font-weight
slug: Web/SVG/Attribute/font-weight
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`font-weight`**-Attribut bezieht sich auf die Fettdruck- oder Leichtdruckstärke der Glyphen, die zur Darstellung des Textes verwendet werden, im Vergleich zu anderen Schriftarten in derselben Schriftfamilie.

> [!NOTE]
> Als Präsentationsattribut kann `font-weight` als CSS-Eigenschaft verwendet werden. Siehe die CSS-Eigenschaft {{cssxref("font-weight")}} für weitere Informationen.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-weight="normal">Normaler Text</text>
  <text x="100" y="20" font-weight="bold">Fetter Text</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "30")}}

## Anwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>normal</code> | <code>bold</code> | <code>bolder</code> |
        <code>lighter</code> | {{cssxref("number")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Für eine Beschreibung der Werte beziehen Sie sich bitte auf die [CSS `font-weight`](/de/docs/Web/CSS/font-weight#values) Eigenschaft.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{cssxref("font-weight")}}

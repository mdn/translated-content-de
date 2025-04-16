---
title: font-size
slug: Web/SVG/Reference/Attribute/font-size
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das **`font-size`**-Attribut bezieht sich auf die Größe der Schrift von {{Glossary("baseline/typography", "Baseline")}} zu Baseline, wenn mehrere Textzeilen in einem mehrzeiligen Layoutumfeld fest gesetzt sind.

> [!NOTE]
> Als Präsentationsattribut hat `font-size` auch ein entsprechendes CSS-Eigenschaft-Pendant: {{cssxref("font-size")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
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
  <text y="20" font-size="smaller">smaller</text>
  <text x="100" y="20" font-size="2em">2em</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "30")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>&#x3C;absolute-size></code> | <code>&#x3C;relative-size></code> |
        <code>&#x3C;length-percentage></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>medium</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Für eine Beschreibung der Werte beziehen Sie sich bitte auf die [CSS-`font-size`](/de/docs/Web/CSS/font-size#values)-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("font-size")}}-Eigenschaft

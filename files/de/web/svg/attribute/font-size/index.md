---
title: font-size
slug: Web/SVG/Attribute/font-size
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`font-size`** Attribut bezieht sich auf die Größe der Schriftart von {{Glossary("baseline/typography", "baseline")}} zu baseline, wenn mehrere Textzeilen in einem mehrzeiligen Layoutumfeld gesetzt werden.

> [!NOTE]
> Als Präsentationsattribut hat `font-size` auch ein entsprechendes CSS-Property: {{cssxref("font-size")}}. Wenn beide festgelegt sind, hat die CSS-Eigenschaft Vorrang.

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
  <text y="20" font-size="smaller">smaller</text>
  <text x="100" y="20" font-size="2em">2em</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "30")}}

## Hinweise zur Verwendung

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

Für eine Beschreibung der Werte lesen Sie bitte die [CSS `font-size`](/de/docs/Web/CSS/font-size#values) Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("font-size")}} Eigenschaft

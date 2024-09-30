---
title: font-size
slug: Web/SVG/Attribute/font-size
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`font-size`** Attribut bezieht sich auf die Größe der Schrift von der [Grundlinie](/de/docs/Glossary/baseline/typography) zur Grundlinie, wenn mehrere Textzeilen in einem mehrzeiligen Layout-Umfeld gesetzt werden.

> [!NOTE]
> Als Präsentationsattribut kann `font-size` als CSS-Eigenschaft verwendet werden. Siehe die CSS {{cssxref("font-size")}} Eigenschaft für weitere Informationen.

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

Für eine Beschreibung der Werte, siehe die [CSS `font-size`](/de/docs/Web/CSS/font-size#values) Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}

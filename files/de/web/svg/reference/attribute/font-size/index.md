---
title: font-size
slug: Web/SVG/Reference/Attribute/font-size
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das Attribut **`font-size`** gibt die Schriftgröße von einer {{Glossary("baseline/typography", "Grundlinie")}} zur nächsten an, wenn mehrere Textzeilen in einem mehrzeiligen Layout ohne zusätzlichen Zeilenabstand gesetzt werden.

> [!NOTE]
> Als Präsentationsattribut hat `font-size` auch eine entsprechende CSS-Eigenschaft: {{cssxref("font-size")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## Beispiele

### SVG-Schriftgröße steuern

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <text y="25" font-size="smaller">smaller</text>
  <text x="100" y="25" font-size="2em">2em</text>
</svg>
```

{{EmbedLiveSample("controlling_svg_font_size")}}

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

Eine Beschreibung der Werte finden Sie bei der [CSS-Eigenschaft `font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#values).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Eigenschaft {{cssxref("font-size")}}

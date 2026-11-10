---
title: font-family
slug: Web/SVG/Reference/Attribute/font-family
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das Attribut **`font-family`** gibt an, welche Schriftfamilie zum Rendern des Textes verwendet wird. Es wird als nach Priorität geordnete Liste von Namen von Schriftfamilien und/oder generischen Schriftfamilien angegeben.

> [!NOTE]
> Als Präsentationsattribut hat `font-family` auch eine entsprechende CSS-Eigenschaft: {{cssxref("font-family")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## Beispiele

### Die Schriftfamilie in SVG steuern

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-family="Arial, Helvetica, sans-serif">Sans serif</text>
  <text x="100" y="20" font-family="monospace">Monospace</text>
</svg>
```

{{EmbedLiveSample("controlling_svg_font_family")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>Siehe {{cssxref("font-family", "", "#formal_syntax")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>Hängt vom User-Agent ab</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Eine Beschreibung der Werte finden Sie bei der [CSS-Eigenschaft `font-family`](/de/docs/Web/CSS/Reference/Properties/font-family#values).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Eigenschaft {{cssxref("font-family")}}

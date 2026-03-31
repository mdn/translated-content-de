---
title: font-width
slug: Web/SVG/Reference/Attribute/font-width
l10n:
  sourceCommit: 3e97bf7d99f829a3cab9676837e8d9beabf9a1de
---

{{SeeCompatTable}}

Das **`font-width`**-Attribut wählt ein normales, komprimiertes oder erweitertes Schriftbild aus einer Schriftfamilie für die Zeichen, die zum Rendern des Textes verwendet werden.

> [!NOTE]
> Das `font-width`-Attribut ist der moderne Ersatz für das {{SVGAttr("font-stretch")}}-Attribut, das ein veraltetes Alias ist. Während `font-width` der bevorzugte Name in der Spezifikation ist, hat `font-stretch` derzeit eine breitere Browser-Unterstützung.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

> [!NOTE]
> Als Präsentationsattribut hat `font-width` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("font-width")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>Siehe {{cssxref("font-width", "", "#formal_syntax")}}</td>
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("font-width")}}-Eigenschaft
- Veraltetes SVG {{SVGAttr("font-stretch")}}-Attribut
- CSS {{cssxref("font-stretch")}}-Eigenschaft

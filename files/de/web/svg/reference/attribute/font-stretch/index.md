---
title: font-stretch
slug: Web/SVG/Reference/Attribute/font-stretch
l10n:
  sourceCommit: 3e97bf7d99f829a3cab9676837e8d9beabf9a1de
---

Das **`font-stretch`**-Attribut gibt den gewünschten Grad der Verengung oder Erweiterung der Glyphen an, die zur Textdarstellung verwendet werden.

> [!NOTE]
> Das `font-stretch`-Attribut wurde in {{SVGAttr("font-width")}} umbenannt, im Zuge der Umbenennung der entsprechenden CSS-Eigenschaft. Um die Kompatibilität zu wahren, bleibt `font-stretch` in der Spezifikation als veraltetes Alias für das `font-width`-Attribut erhalten.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

> [!NOTE]
> Als Präsentationsattribut hat `font-stretch` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("font-stretch")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>Siehe {{cssxref("font-stretch", "", "#formal_syntax")}}</td>
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

- SVG-Attribut {{SVGAttr("font-width")}} (moderne Ablösung)
- CSS-Eigenschaft {{cssxref("font-width")}}
- CSS-Eigenschaft {{cssxref("font-stretch")}} (veraltetes Alias)

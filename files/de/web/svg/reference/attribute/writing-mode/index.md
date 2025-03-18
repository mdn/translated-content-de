---
title: writing-mode
slug: Web/SVG/Reference/Attribute/writing-mode
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`writing-mode`**-Attribut gibt an, ob die anfängliche Inline-Vorwärtsrichtung für ein {{SVGElement("text")}}-Element von links nach rechts, von rechts nach links oder von oben nach unten verlaufen soll. Das `writing-mode`-Attribut gilt nur für {{SVGElement("text")}}-Elemente; das Attribut wird für die Sub-Elemente {{SVGElement("tspan")}}, {{SVGElement("tref")}} und {{SVGElement("textPath")}} ignoriert. (Beachten Sie, dass sich die Inline-Vorwärtsrichtung innerhalb eines {{SVGElement("text")}}-Elements aufgrund des Unicode-Bidirektional-Algorithmus und der Eigenschaften {{SVGAttr("direction")}} und {{SVGAttr("unicode-bidi")}} ändern kann.)

> [!NOTE]
> Als Präsentationsattribut hat `writing-mode` auch ein entsprechendes CSS-Property: {{cssxref("writing-mode")}}. Wenn beide angegeben sind, hat das CSS-Property Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>horizontal-tb</code></td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>horizontal-tb</code> | <code>vertical-rl</code> |
        <code>vertical-lr</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `horizontal-tb`
  - : Dieser Wert definiert eine Blockflussrichtung von oben nach unten. Sowohl der Schreibmodus als auch der typografische Modus sind horizontal.
- `vertical-rl`
  - : Dieser Wert definiert eine Blockflussrichtung von rechts nach links. Sowohl der Schreibmodus als auch der typografische Modus sind vertikal.
- `vertical-lr`
  - : Dieser Wert definiert eine Blockflussrichtung von links nach rechts. Sowohl der Schreibmodus als auch der typografische Modus sind vertikal.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("writing-mode")}}-Eigenschaft

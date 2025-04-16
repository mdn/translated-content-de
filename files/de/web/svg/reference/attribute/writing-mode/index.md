---
title: writing-mode
slug: Web/SVG/Reference/Attribute/writing-mode
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das Attribut **`writing-mode`** gibt an, ob die anfängliche `inline-progression-direction` für ein {{SVGElement("text")}}-Element von links nach rechts, von rechts nach links oder von oben nach unten verlaufen soll. Das `writing-mode`-Attribut wird nur auf {{SVGElement("text")}}-Elemente angewendet; das Attribut wird für Unterelemente von {{SVGElement("tspan")}} und {{SVGElement("textPath")}} ignoriert. (Beachten Sie, dass sich die `inline-progression-direction` innerhalb eines {{SVGElement("text")}}-Elements aufgrund des Unicode-Bidirektional-Algorithmus und der Eigenschaften {{SVGAttr("direction")}} und {{SVGAttr("unicode-bidi")}} ändern kann.)

> [!NOTE]
> Als Präsentationsattribut hat `writing-mode` auch ein entsprechendes CSS-Attribut: {{cssxref("writing-mode")}}. Wenn beide angegeben sind, hat das CSS-Attribut Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## Nutzungshinweise

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
  - : Dieser Wert definiert eine Blockflussrichtung von oben nach unten. Sowohl der Schreibmodus als auch der typographische Modus sind horizontal.
- `vertical-rl`
  - : Dieser Wert definiert eine Blockflussrichtung von rechts nach links. Sowohl der Schreibmodus als auch der typographische Modus sind vertikal.
- `vertical-lr`
  - : Dieser Wert definiert eine Blockflussrichtung von links nach rechts. Sowohl der Schreibmodus als auch der typographische Modus sind vertikal.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("writing-mode")}}-Eigenschaft

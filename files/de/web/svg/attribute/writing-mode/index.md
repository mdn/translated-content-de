---
title: writing-mode
slug: Web/SVG/Attribute/writing-mode
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`writing-mode`**-Attribut gibt an, ob die anfängliche Inline-Progressionsrichtung für ein {{SVGElement("text")}}-Element von links nach rechts, von rechts nach links oder von oben nach unten verlaufen soll. Das `writing-mode`-Attribut gilt nur für {{SVGElement("text")}}-Elemente; das Attribut wird für {{SVGElement("tspan")}}, {{SVGElement("tref")}} und {{SVGElement("textPath")}}-Unterelemente ignoriert. (Beachten Sie, dass sich die Inline-Progressionsrichtung innerhalb eines {{SVGElement("text")}}-Elements aufgrund des Unicode-Bidi-Algorithmus und der Eigenschaften {{SVGAttr("direction")}} und {{SVGAttr("unicode-bidi")}} ändern kann.)

> [!NOTE]
> Als Präsentationsattribut hat `writing-mode` auch ein entsprechendes CSS-Property: {{cssxref("writing-mode")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>horizontal-tb</code></td>
    </tr>
    <tr>
      <th scope="row">Werte</th>
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

- CSS-{{cssxref("writing-mode")}}-Property

---
title: writing-mode
slug: Web/SVG/Attribute/writing-mode
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`writing-mode`** Attribut legt fest, ob die anfängliche Inline-Fortschrittsrichtung für ein {{SVGElement("text")}}-Element von links nach rechts, von rechts nach links oder von oben nach unten verlaufen soll. Das `writing-mode`-Attribut gilt nur für {{SVGElement("text")}}-Elemente; das Attribut wird bei {{SVGElement("tspan")}}, {{SVGElement("tref")}} und {{SVGElement("textPath")}}-Unterelementen ignoriert. (Beachten Sie, dass sich die Inline-Fortschrittsrichtung innerhalb eines {{SVGElement("text")}}-Elements aufgrund des Unicode-Bidirektional-Algorithmus und der Eigenschaften {{SVGAttr("direction")}} und {{SVGAttr("unicode-bidi")}} ändern kann.)

> [!NOTE]
> Als Präsentationsattribut kann `writing-mode` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie in der CSS-Eigenschaft {{cssxref("writing-mode")}}.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
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

- {{cssxref("writing-mode")}}

---
title: baseline-shift
slug: Web/SVG/Reference/Attribute/baseline-shift
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`baseline-shift`** Attribut ermöglicht die Neupositionierung der dominanten Grundlinie relativ zur dominanten Grundlinie des übergeordneten Textelementinhalts. Das verschobene Objekt könnte ein Tiefgestellt- oder Hochgestelltzeichen sein.

> [!NOTE]
> Als Präsentationsattribut hat `baseline-shift` auch ein entsprechendes CSS-Eigenschaft: {{cssxref("baseline-shift")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

> [!NOTE]
> Diese Eigenschaft wird veraltet und Autoren wird empfohlen stattdessen [`vertical-align`](/de/docs/Web/CSS/Reference/Properties/vertical-align) zu verwenden.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## Verwendungsnotizen

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        {{cssxref("length-percentage")}} | <code>sub</code> |
        <code>super</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `sub`
  - : Die dominante Grundlinie wird zur Standardposition für Tiefgestellte verschoben.
- `super`
  - : Die dominante Grundlinie wird zur Standardposition für Hochgestellte verschoben.
- `<length-percentage>`
  - : Ein Längenwert hebt (positiver Wert) oder senkt (negativer Wert) die dominante Grundlinie des übergeordneten Textelementinhalts um die angegebene Länge.

    Ein Prozentwert hebt (positiver Wert) oder senkt (negativer Wert) die dominante Grundlinie des übergeordneten Textelementinhalts um den angegebenen Prozentsatz der {{cssxref("line-height")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
